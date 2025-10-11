import { NextRequest, NextResponse } from "next/server";
import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";
import { fromEnv } from "@aws-sdk/credential-providers";
import { randomUUID } from "node:crypto";

export const runtime = "nodejs";
export const maxDuration = 60;

type AuditResults = {
    lighthouse: {
        performance: number;
        accessibility: number;
        bestPractices: number;
        seo: number;
        totalScore: number;
    };
    recommendations: string[];
    fullReport?: unknown;
};

const lambda = new LambdaClient({
    region: process.env.AWS_REGION || "us-east-1",
    credentials: fromEnv(),
});

const TO_EMAIL = "info@sunsetvista.co";

const cors = {
    "Access-Control-Allow-Origin": process.env.CORS_ORIGIN ?? "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Request-Id",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// -------- Structured logger (LOG_LEVEL=debug|info|warn|error|silent) --------
const LOG_LEVEL = (process.env.LOG_LEVEL || "info").toLowerCase();
const LVL: Record<string, number> = { debug: 0, info: 1, warn: 2, error: 3, silent: 4 };
const canLog = (lvl: keyof typeof LVL) => LVL[lvl] <= (LVL[LOG_LEVEL] ?? LVL.info);
const log = {
    debug: (msg: string, meta?: any) => canLog("debug") && console.log(`[DEBUG] ${msg}`, meta ?? ""),
    info: (msg: string, meta?: any) => canLog("info") && console.log(`[INFO ] ${msg}`, meta ?? ""),
    warn: (msg: string, meta?: any) => canLog("warn") && console.warn(`[WARN ] ${msg}`, meta ?? ""),
    error: (msg: string, meta?: any) => canLog("error") && console.error(`[ERROR] ${msg}`, meta ?? ""),
};

// --------------------------- Handlers ---------------------------
export async function OPTIONS() {
    return new NextResponse(null, { status: 204, headers: cors });
}

export async function POST(req: NextRequest) {
    const reqId = req.headers.get("x-request-id") || randomUUID();
    const t0 = Date.now();
    log.info("api_audit_start", {
        reqId,
        path: req.nextUrl.pathname,
        runtime: process.version,
        region: process.env.AWS_REGION || "us-east-1",
        lambdaFn: process.env.LAMBDA_FUNCTION_NAME ?? "<unset>",
        LOG_LEVEL,
    });

    try {
        const bodyRaw = await req.text();
        log.debug("incoming_raw_body", { reqId, len: bodyRaw?.length ?? 0, preview: bodyRaw?.slice(0, 200) });
        const body = safeJSON(bodyRaw) ?? {};
        const url: string | undefined = body?.url;

        if (!url || typeof url !== "string") {
            log.warn("validation_failed_missing_url", { reqId });
            return NextResponse.json({ error: "url is required" }, { status: 400, headers: withReqId(cors, reqId) });
        }

        const normalizedUrl = /^https?:\/\//i.test(url) ? url : `https://${url}`;
        try {
            new URL(normalizedUrl);
        } catch {
            log.warn("validation_failed_bad_url", { reqId, normalizedUrl });
            return NextResponse.json({ error: "Invalid URL provided" }, { status: 400, headers: withReqId(cors, reqId) });
        }

        // Build API Gateway–style event
        const eventPayload = {
            body: JSON.stringify({ url: normalizedUrl }),
            isBase64Encoded: false,
            requestContext: { http: { method: "POST" } },
            headers: { "x-request-id": reqId },
        };

        const payloadString = JSON.stringify(eventPayload);
        const payloadBytes = new TextEncoder().encode(payloadString);
        log.info("lambda_invoke_begin", {
            reqId,
            fn: process.env.LAMBDA_FUNCTION_NAME,
            payloadBytes: payloadBytes.byteLength,
            url: normalizedUrl,
        });

        const invokeStart = Date.now();
        let invokeRes;
        try {
            invokeRes = await lambda.send(
                new InvokeCommand({
                    FunctionName: process.env.LAMBDA_FUNCTION_NAME!, // ensure set in env
                    Payload: payloadBytes,
                    InvocationType: "RequestResponse",
                    LogType: canLog("debug") ? "Tail" : "None",
                })
            );
        } catch (e: any) {
            log.error("lambda_invoke_throw", { reqId, message: e?.message, stack: e?.stack?.slice(0, 600) });
            return NextResponse.json(
                { error: "Lambda invocation failed", detail: { message: e?.message } },
                { status: 502, headers: withReqId(cors, reqId) }
            );
        }

        const invokeMs = Date.now() - invokeStart;
        const lambdaStatus = invokeRes.StatusCode ?? 0;
        const functionError = invokeRes.FunctionError || null;
        const base64Logs = invokeRes.LogResult;
        if (functionError) log.warn("lambda_function_error", { reqId, functionError });
        if (base64Logs && canLog("debug")) {
            try {
                const tail = Buffer.from(base64Logs, "base64").toString("utf8");
                log.debug("lambda_cloudwatch_tail", { reqId, tail: tail.slice(0, 3000) });
            } catch {}
        }
        log.info("lambda_invoke_end", { reqId, lambdaStatus, ms: invokeMs });

        const raw = invokeRes.Payload ? new TextDecoder().decode(invokeRes.Payload) : "";
        log.debug("lambda_raw_payload", { reqId, len: raw.length, preview: raw.slice(0, 400) });

        const parsed = safeJSON(raw) ?? {};
        const lambdaBody = parsed?.body ? safeJSON(parsed.body) : parsed;

        if (!lambdaBody?.success || !lambdaBody?.results) {
            log.warn("lambda_bad_response", { reqId, lambdaStatus, functionError, lambdaBodyPreview: JSON.stringify(lambdaBody)?.slice(0, 400) });
            return NextResponse.json(
                { error: "Lambda invocation failed", detail: lambdaBody },
                { status: 502, headers: withReqId(cors, reqId) }
            );
        }

        const results: AuditResults = lambdaBody.results;
        log.info("audit_results_received", {
            reqId,
            scores: results?.lighthouse,
            recCount: results?.recommendations?.length ?? 0,
        });

        // Fire-and-forget notification (best-effort)
        try {
            const base = new URL('https://www.sunsetvista.co');
            const emailPayload = {
                name: "Website Audit Notification",
                email: TO_EMAIL,
                message: buildEmail({ url: normalizedUrl, results }),
            };
            log.debug("email_post_begin", { reqId, endpoint: `${base.protocol}//${base.host}/api/email` });
            const emailRes = await fetch(`${base.protocol}//${base.host}/api/email`, {
                method: "POST",
                headers: { "Content-Type": "application/json", "X-Request-Id": reqId },
                body: JSON.stringify(emailPayload),
            });
            log.info("email_post_end", { reqId, status: emailRes.status });
        } catch (e: any) {
            log.warn("email_send_failed", { reqId, message: e?.message });
        }

        const t1 = Date.now();
        log.info("api_audit_success", { reqId, ms: t1 - t0 });

        return NextResponse.json(
            { success: true, results, site: { url: normalizedUrl }, reqId },
            { headers: withReqId(cors, reqId) }
        );
    } catch (e: any) {
        log.error("api_audit_unhandled", { reqId, message: e?.message, stack: e?.stack?.slice(0, 600) });
        return NextResponse.json({ error: e.message || "failed", reqId }, { status: 500, headers: withReqId(cors, reqId) });
    }
}

// --------------------------- Helpers ---------------------------
function safeJSON(s: string) {
    try {
        return JSON.parse(s);
    } catch {
        return null;
    }
}

function buildEmail(input: { url: string; results: AuditResults }) {
    const { url, results } = input;
    const lines = [
        "NEW WEBSITE AUDIT",
        "",
        "Website:",
        `- ${url}`,
        "",
        "Audit Results:",
        `- Performance: ${results.lighthouse.performance}/100`,
        `- Accessibility: ${results.lighthouse.accessibility}/100`,
        `- Best Practices: ${results.lighthouse.bestPractices}/100`,
        `- SEO: ${results.lighthouse.seo}/100`,
        `- Total: ${results.lighthouse.totalScore}/100`,
        "",
        "Key Recommendations:",
        ...(results.recommendations?.length ? results.recommendations.map((r) => `- ${r}`) : ["- None provided"]),
    ];
    return lines.join("\n");
}

function withReqId(h: Record<string, string>, reqId: string) {
    return { ...h, "X-Request-Id": reqId };
}
