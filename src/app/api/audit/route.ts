import { NextRequest, NextResponse } from "next/server";
import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";
import { fromEnv } from "@aws-sdk/credential-providers";

export const runtime = "nodejs";

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
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export async function OPTIONS() {
    return new NextResponse(null, { status: 204, headers: cors });
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json().catch(() => ({}));
        const url: string | undefined = body?.url;

        if (!url || typeof url !== "string") {
            return NextResponse.json({ error: "url is required" }, { status: 400, headers: cors });
        }

        const normalizedUrl = /^https?:\/\//i.test(url) ? url : `https://${url}`;
        try {
            new URL(normalizedUrl);
        } catch {
            return NextResponse.json({ error: "Invalid URL provided" }, { status: 400, headers: cors });
        }

        // --- DIRECT INVOKE with API Gateway-style event wrapper ---
        const eventPayload = {
            body: JSON.stringify({ url: normalizedUrl }),
            isBase64Encoded: false,
            requestContext: { http: { method: "POST" } },
        };

        const invokeRes = await lambda.send(
            new InvokeCommand({
                FunctionName: process.env.LAMBDA_FUNCTION_NAME!, // or full ARN for cross-account
                Payload: new TextEncoder().encode(JSON.stringify(eventPayload)),
            })
        );

        const raw = invokeRes.Payload ? new TextDecoder().decode(invokeRes.Payload) : "";
        const parsed = safeJSON(raw) ?? {};
        const lambdaBody = parsed?.body ? safeJSON(parsed.body) : parsed;

        if (!lambdaBody?.success || !lambdaBody?.results) {
            return NextResponse.json(
                { error: "Lambda invocation failed", detail: lambdaBody },
                { status: 502, headers: cors }
            );
        }

        const results: AuditResults = lambdaBody.results;

        // Notify via your internal email route
        try {
            const base = new URL(req.url);
            await fetch(`${base.protocol}//${base.host}/api/email`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: "Website Audit Notification",
                    email: TO_EMAIL,
                    message: buildEmail({ url: normalizedUrl, results }),
                }),
            });
        } catch (e) {
            console.error("email_send_failed", (e as Error).message);
        }

        return NextResponse.json(
            { success: true, results, site: { url: normalizedUrl } },
            { headers: cors }
        );
    } catch (e: any) {
        return NextResponse.json({ error: e.message || "failed" }, { status: 500, headers: cors });
    }
}

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
        ...(results.recommendations?.length
            ? results.recommendations.map((r) => `- ${r}`)
            : ["- None provided"]),
    ];
    return lines.join("\n");
}
