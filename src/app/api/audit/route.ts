import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium-min";
import lighthouse from "lighthouse";
import net from "node:net";
import { spawn, ChildProcess } from "node:child_process";
import { createRequire } from "node:module";

export const runtime = "nodejs";
export const maxDuration = 60;

// ===================== Types =====================
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
    debug?: any;
};

// ===================== Constants =====================
const TO_EMAIL = "info@sunsetvista.co";

const cors = {
    "Access-Control-Allow-Origin": process.env.CORS_ORIGIN ?? "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Request-Id",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SEO_ERR_WEIGHT = Number(process.env.SEO_ERR_WEIGHT ?? 7);
const SEO_WARN_WEIGHT = Number(process.env.SEO_WARN_WEIGHT ?? 3);
const PSI_MAX_ATTEMPTS = Number(process.env.PSI_MAX_ATTEMPTS ?? 4);
const PREFLIGHT_TIMEOUT_MS = Number(process.env.PREFLIGHT_TIMEOUT_MS ?? 45000);
const QUICK_PROBE_TIMEOUT_MS = Number(process.env.QUICK_PROBE_TIMEOUT_MS ?? 20000);
const CLIENT_RENDER_TIMEOUT_MS = Number(process.env.CLIENT_RENDER_TIMEOUT_MS ?? 60000);
const LH_MAX_WAIT_FOR_LOAD = Number(process.env.LH_MAX_WAIT_FOR_LOAD ?? 90000);
const DEADLINE_MS = Number(process.env.DEADLINE_MS ?? 55000);
const PHASE_TIMEOUT_MS = Math.min(
    Number(process.env.PHASE_TIMEOUT_MS ?? 45000),
    Math.max(25000, DEADLINE_MS - 5000)
);

const UA_DESKTOP = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36";
const UA_MOBILE = "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Mobile Safari/537.36";

// SEO scoring tunables
const SEO_STRICT_MODE = process.env.SEO_STRICT_MODE !== "false";
const SEO_WARN_AS_ERROR = process.env.SEO_WARN_AS_ERROR !== "false";
const SEO_BASELINE_PENALTY = Number(process.env.SEO_BASELINE_PENALTY ?? 10);
const SEO_CRITICAL_PENALTY = Number(process.env.SEO_CRITICAL_PENALTY ?? 15);
const SEO_DUPLICATE_PENALTY = Number(process.env.SEO_DUPLICATE_PENALTY ?? 8);
const SEO_MAX_SCORE = Number(process.env.SEO_MAX_SCORE ?? 85);
const SEO_MIN_SCORE = Number(process.env.SEO_MIN_SCORE ?? 0);

// ===================== Logger =====================
const LOG_LEVEL = (process.env.LOG_LEVEL || "info").toLowerCase();
const LVL: Record<string, number> = { debug: 0, info: 1, warn: 2, error: 3, silent: 4 };
const canLog = (lvl: string) => LVL[lvl] <= (LVL[LOG_LEVEL] ?? LVL.info);
const log = {
    debug: (msg: string, meta?: any) => canLog("debug") && console.log(`[DEBUG] ${msg}`, meta ?? ""),
    info: (msg: string, meta?: any) => canLog("info") && console.log(`[INFO ] ${msg}`, meta ?? ""),
    warn: (msg: string, meta?: any) => canLog("warn") && console.warn(`[WARN ] ${msg}`, meta ?? ""),
    error: (msg: string, meta?: any) => canLog("error") && console.error(`[ERROR] ${msg}`, meta ?? ""),
};

// ===================== Chromium Setup =====================
function getDefaultChromiumPackUrl() {
    const version = "v138.0.2";
    const arch = process.arch === "arm64" ? "arm64" : "x64";
    return `https://github.com/Sparticuz/chromium/releases/download/${version}/chromium-${version}-pack.${arch}.tar`;
}

const DEFAULT_CHROME_MIN_URL = getDefaultChromiumPackUrl();
const require = createRequire(import.meta.url);

// ===================== Handlers =====================
export async function OPTIONS() {
    return new NextResponse(null, { status: 204, headers: cors });
}

export async function POST(req: NextRequest) {
    const reqId = req.headers.get("x-request-id") || randomUUID();
    const t0 = Date.now();
    log.info("api_audit_start", { reqId, path: req.nextUrl.pathname, runtime: process.version, LOG_LEVEL });

    try {
        const bodyRaw = await req.text();
        log.debug("incoming_raw_body", { reqId, len: bodyRaw?.length ?? 0, preview: bodyRaw?.slice(0, 200) });
        const body = safeJSON(bodyRaw) ?? {};
        let url: string | undefined = body?.url;
        let { strategy = "mobile", cookies = [], headers: extraHeaders = {} } = body;

        if (!url || typeof url !== "string") {
            log.warn("validation_failed_missing_url", { reqId });
            return NextResponse.json({ error: "url is required" }, { status: 400, headers: withReqId(cors, reqId) });
        }

        url = /^https?:\/\//i.test(url) ? url : `https://${url}`;
        try {
            new URL(url);
        } catch {
            log.warn("validation_failed_bad_url", { reqId, url });
            return NextResponse.json({ error: "Invalid URL provided" }, { status: 400, headers: withReqId(cors, reqId) });
        }

        // Add Lighthouse marker
        try {
            const u = new URL(url);
            u.searchParams.set("__lh", "1");
            url = u.toString();
        } catch {}

        // Apply scoring preset
        const preset = String(body?.scoringPreset || process.env.DEFAULT_SCORING_PRESET || "").toLowerCase();
        if (preset === "desktop-fast") {
            process.env.FORCE_DESKTOP_PROVIDED = "true";
            strategy = "desktop";
        }

        // Run the audit
        const results = await runWebsiteAudit(url, strategy, extraHeaders, cookies, reqId);
        log.info("audit_results_received", { reqId, scores: results?.lighthouse, recCount: results?.recommendations?.length ?? 0 });

        // Fire-and-forget notification
        try {
            const base = new URL("https://www.sunsetvista.co");
            const emailPayload = {
                name: "Website Audit Notification",
                email: TO_EMAIL,
                message: buildEmail({ url, results }),
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

        log.info("api_audit_success", { reqId, ms: Date.now() - t0 });
        return NextResponse.json({ success: true, results, site: { url }, reqId }, { headers: withReqId(cors, reqId) });
    } catch (e: any) {
        log.error("api_audit_unhandled", { reqId, message: e?.message, stack: e?.stack?.slice(0, 600) });
        return NextResponse.json({ error: e.message || "failed", reqId }, { status: 500, headers: withReqId(cors, reqId) });
    }
}

// ===================== Main Orchestrator =====================
async function runWebsiteAudit(
    url: string,
    strategy: string,
    extraHeaders: Record<string, string>,
    cookies: any[],
    reqId: string
): Promise<AuditResults> {
    const endAll = startTimer("audit_total");
    const dl = makeDeadlineController(DEADLINE_MS);

    process.env.TMPDIR ||= "/tmp";
    process.env.HOME ||= "/tmp";
    log.debug("env_paths", { TMPDIR: process.env.TMPDIR, HOME: process.env.HOME });

    if (typeof (chromium as any).setHeadlessMode === "function") (chromium as any).setHeadlessMode(true);
    if (typeof (chromium as any).setGraphicsMode === "function") (chromium as any).setGraphicsMode(false);

    const packUrl = process.env.CHROME_MIN_URL || DEFAULT_CHROME_MIN_URL;
    log.info("chromium_prepare", { packUrl });

    const tExec = startTimer("chromium_executablePath");
    const execPath = await chromium.executablePath(packUrl);
    tExec({ execPath });

    // Quick reachability
    dl.abortIfExceeded("before_network_probe");
    await withSoftTimeout(quickNetworkProbe(url), Math.min(dl.left(), 4000), "network_probe");

    // Preflight (warn-only)
    let preResult = { ok: true, details: { skipped: true } };
    if (process.env.SKIP_PREFLIGHT !== "true") {
        dl.abortIfExceeded("before_preflight");
        const preSoft = await withSoftTimeout(
            preflightPaintCheck(execPath, url, extraHeaders, cookies, strategy),
            Math.min(dl.left(), 7000),
            "preflight"
        );
        // @ts-ignore
        preResult = unwrap(preSoft) ?? { ok: true, details: { timedOut: true } };
        log.info("preflight_result", { ok: preResult.ok, details: preResult.details });

        if (!preResult.ok) {
            const fatal = (preResult.details as any)?.statusBad || (preResult.details as any)?.blank;
            if (fatal && process.env.ALLOW_PSI_FALLBACK !== "false") {
                log.warn("preflight_fatal_using_psi", preResult.details);
                try {
                    dl.abortIfExceeded("before_psi_fallback");
                    const psi = unwrap(await withSoftTimeout(runViaPSIFast(url, strategy), Math.min(dl.left(), 9000), "psi_fast"));
                    endAll({ totalMs: true, via: "psi_fatal_preflight" });
                    return psi as AuditResults;
                } catch (e: any) {
                    log.warn("psi_fast_failed_after_preflight_fatal", String(e?.message || e));
                }
            } else {
                log.warn("preflight_nonfatal_continue", preResult.details);
            }
        }
    }

    // Concurrency: Lighthouse + SEO (isolated browser)
    const allowSeoLint = process.env.DISABLE_SEO_LINT !== "true";

    dl.abortIfExceeded("before_lighthouse_start");
    const lhTask = withSoftTimeout(
        ensureLighthouseWithCategories(execPath, url, strategy, extraHeaders),
        Math.min(dl.left(), PHASE_TIMEOUT_MS),
        "lighthouse"
    );

    let seoBrowser: any = null;
    const seoTask = allowSeoLint
        ? (async () => {
            try {
                dl.abortIfExceeded("before_seo_browser_launch");
                const tLaunch = startTimer("seo_browser_launch");
                seoBrowser = await launchSeoBrowser(execPath);
                tLaunch({});
                dl.abortIfExceeded("before_seo_analysis");
                return await withSoftTimeout(
                    analyzeSeoWithSeoLintUsingBrowser(seoBrowser, url, extraHeaders, cookies, strategy),
                    Math.min(dl.left(), PHASE_TIMEOUT_MS),
                    "seo_lint"
                );
            } finally {
                if (seoBrowser) {
                    const tClose = startTimer("seo_browser_close");
                    try {
                        await seoBrowser.close().catch(() => {});
                    } catch {}
                    tClose({});
                }
            }
        })()
        : Promise.resolve(null);

    dl.abortIfExceeded("before_concurrent_join");
    const [lhSettled, seoSettled] = await Promise.allSettled([lhTask, seoTask]);

    // Decide output
    let result: AuditResults;
    const lhRes = lhSettled.status === "fulfilled" ? unwrap(lhSettled.value) : null;

    if (lhRes && (lhRes as any).lhr) {
        result = lhrToResults((lhRes as any).lhr);

        if (allowSeoLint) {
            if (seoSettled.status === "fulfilled") {
                const seoLint = unwrap(seoSettled.value) as any;
                if (seoLint) {
                    log.info("seolint_done", { score: seoLint.score, errors: seoLint.errors, warnings: seoLint.warnings });

                    if (seoLint.errors + seoLint.warnings > 0 || (result.lighthouse.seo ?? 0) === 0) {
                        const { performance, accessibility, bestPractices } = result.lighthouse;
                        result.lighthouse.seo = seoLint.score;
                        result.lighthouse.totalScore = Math.round((performance + accessibility + bestPractices + result.lighthouse.seo) / 4);
                    }

                    if (seoLint.messages?.length) {
                        const merged = new Set([...(result.recommendations || []), ...seoLint.messages.slice(0, 50)]);
                        result.recommendations = Array.from(merged);
                    }

                    if (process.env.DEBUG === "true") {
                        result.debug ||= {};
                        result.debug.seoLint = {
                            errors: seoLint.errors,
                            warnings: seoLint.warnings,
                            score: seoLint.score,
                            usedClientHTML: !!seoLint._usedClientHTML,
                            usedServerHTML: !!seoLint._usedServerHTML,
                        };
                    }
                }
            } else if (seoSettled.status === "rejected") {
                log.warn("seo_lint_failed_keep_lh_seo", String((seoSettled.reason as any)?.message || seoSettled.reason));
            }
        }

        // Tiny retry if perf == 0 and time remains
        if (result?.lighthouse?.performance === 0 && dl.left() > 5000 && process.env.RETRY_ON_NOFCP !== "false") {
            log.warn("perf_zero_retry_simulated_desktop");
            try {
                const lh2 = unwrap(
                    await withSoftTimeout(
                        runLighthouseWithChild(execPath, url, "desktop", extraHeaders, { throttlingMethod: "simulate", includeOnlyCategories: true }),
                        Math.min(dl.left(), 20000),
                        "lighthouse_perf_zero_retry"
                    )
                ) as any;
                if (lh2?.lhr) {
                    const res2 = lhrToResults(lh2.lhr);
                    if (res2.lighthouse.performance > 0) {
                        const { accessibility, bestPractices, seo } = result.lighthouse;
                        result.lighthouse.performance = res2.lighthouse.performance;
                        result.lighthouse.totalScore = Math.round((result.lighthouse.performance + accessibility + bestPractices + seo) / 4);
                        if (process.env.INCLUDE_FULL_REPORT === "true") result.fullReport = lh2.lhr;
                    }
                }
            } catch (e: any) {
                log.warn("perf_zero_retry_failed", String(e?.message || e));
            }
        }

        // Final fill from PSI if perf still 0
        if (result?.lighthouse?.performance === 0 && process.env.ALLOW_PSI_FALLBACK !== "false") {
            log.warn("perf_zero_final_fill_with_psi");
            try {
                const psi = unwrap(await withSoftTimeout(runViaPSIFast(url, strategy), Math.min(dl.left(), 20000), "psi_perf_fill")) as AuditResults;
                if (psi?.lighthouse?.performance > 0) {
                    const { accessibility, bestPractices, seo } = result.lighthouse;
                    result.lighthouse.performance = psi.lighthouse.performance;
                    result.lighthouse.totalScore = Math.round((result.lighthouse.performance + accessibility + bestPractices + seo) / 4);
                    if (process.env.DEBUG === "true") {
                        result.debug ||= {};
                        result.debug.perfFilledFrom = "psi";
                    }
                }
            } catch (e: any) {
                log.warn("psi_perf_fill_failed", String(e?.message || e));
            }
        }
    } else {
        // Lighthouse failed entirely → try PSI fast
        log.warn("lighthouse_failed_trying_fast_psi");
        try {
            dl.abortIfExceeded("before_psi_fast");
            const psi = unwrap(await withSoftTimeout(runViaPSIFast(url, strategy), Math.min(dl.left(), 9000), "psi_fast")) as AuditResults;
            result = psi || {
                lighthouse: { performance: 0, accessibility: 0, bestPractices: 0, seo: 0, totalScore: 0 },
                recommendations: ["Lighthouse and PSI both failed. Check network reachability and try again."],
            };
        } catch (e: any) {
            log.error("psi_fast_failed_keep_minimal", String(e?.message || e));
            result = {
                lighthouse: { performance: 0, accessibility: 0, bestPractices: 0, seo: 0, totalScore: 0 },
                recommendations: ["Lighthouse and PSI both failed. Check network reachability and try again."],
            };
        }
    }

    if (process.env.DEBUG === "true") {
        result.debug = { ...(result.debug || {}), concurrent: true, isolatedChromes: true, dlMsLeft: dl.left() };
    }

    endAll({ totalMs: true });
    return result;
}

// ===================== Lighthouse Functions =====================
async function ensureLighthouseWithCategories(execPath: string, url: string, strategy: string, extraHeaders: Record<string, string>) {
    let lh1 = await runLighthouseWithChild(execPath, url, strategy, extraHeaders, { throttlingMethod: "simulate", includeOnlyCategories: true });
    log.info("lighthouse_categories_present", { keys: Object.keys((lh1 as any).lhr?.categories || {}), runtimeError: (lh1 as any).lhr?.runtimeError?.message || null });

    if (hasAllCoreCategories((lh1 as any).lhr)) return lh1;

    log.warn("lh_missing_categories_retry", { catKeys: Object.keys((lh1 as any).lhr?.categories || {}) });
    const lh2 = await runLighthouseWithChild(execPath, url, "desktop", extraHeaders, { throttlingMethod: "provided", includeOnlyCategories: true });
    if (hasAllCoreCategories((lh2 as any).lhr)) return lh2;

    log.warn("lh_missing_categories_retry_no_filter");
    const lh3 = await runLighthouseWithChild(execPath, url, "desktop", extraHeaders, { throttlingMethod: "provided", includeOnlyCategories: false });

    return pickMostCategories([lh1, lh2, lh3]);
}

function hasAllCoreCategories(lhr: any) {
    const cats = Object.keys(lhr?.categories || {});
    return ["performance", "accessibility", "best-practices", "seo"].every((k) => cats.includes(k));
}

function pickMostCategories(list: any[]) {
    let best = list[0];
    let bestCount = Object.keys(best?.lhr?.categories || {}).length;
    for (const it of list.slice(1)) {
        const c = Object.keys(it?.lhr?.categories || {}).length;
        if (c > bestCount) {
            best = it;
            bestCount = c;
        }
    }
    return best;
}

async function getOpenPort(start = 9222, end = 9322): Promise<number> {
    for (let p = start; p <= end; p++) {
        const free = await new Promise<boolean>((resolve) => {
            const srv = net
                .createServer()
                .once("error", () => resolve(false))
                .once("listening", () => srv.close(() => resolve(true)))
                .listen(p, "127.0.0.1");
        });
        if (free) return p;
    }
    throw new Error("No free port for DevTools in range");
}

function launchChromeChild(execPath: string, baseArgs: string[], port: number): ChildProcess {
    const badFlags = new Set(["--single-process", "--disable-background-tracing"]);
    const args = baseArgs
        .filter((a) => !a.startsWith("--remote-debugging-") && !badFlags.has(a))
        .concat([
            `--remote-debugging-port=${port}`,
            "--no-sandbox",
            "--disable-dev-shm-usage",
            "--hide-scrollbars",
            "--no-first-run",
            "--no-default-browser-check",
            "--disable-blink-features=AutomationControlled",
            "--disable-extensions",
            "--disable-background-networking",
            "--metrics-recording-only",
            "--mute-audio",
        ]);

    const child = spawn(execPath, args, {
        env: process.env as NodeJS.ProcessEnv,
        stdio: ["ignore", "ignore", canLog("debug") ? "inherit" : "ignore"],
    });
    log.debug("chrome_child_spawned", { pid: child.pid, port });
    return child;
}

async function waitForDevTools(port: number, timeoutMs = 20000) {
    const started = Date.now();
    while (Date.now() - started < timeoutMs) {
        try {
            const res = await fetch(`http://127.0.0.1:${port}/json/version`);
            if (res.ok) return;
        } catch {}
        await new Promise((r) => setTimeout(r, 200));
    }
    throw new Error(`DevTools endpoint not reachable on :${port}`);
}

async function runLighthouseWithChild(
    execPath: string,
    url: string,
    strategy = "mobile",
    extraHeaders: Record<string, string> = {},
    overrides: { throttlingMethod?: string; includeOnlyCategories?: boolean } = {}
) {
    const port = await getOpenPort();
    const child = launchChromeChild(execPath, chromium.args, port);
    let needKill = true;

    try {
        await waitForDevTools(port);

        const forceDesktopProvided = process.env.FORCE_DESKTOP_PROVIDED === "true";
        const isMobile = !forceDesktopProvided && String(strategy).toLowerCase() !== "desktop";

        const flags: any = {
            logLevel: canLog("debug") ? "info" : "error",
            output: "json",
            port,
            ...(overrides.includeOnlyCategories !== false ? { onlyCategories: ["performance", "accessibility", "best-practices", "seo"] } : {}),
            extraHeaders: { "Accept-Language": "en-US,en;q=0.9", "Upgrade-Insecure-Requests": "1", ...extraHeaders },
        };

        const settings = forceDesktopProvided
            ? {
                formFactor: "desktop",
                screenEmulation: { disabled: true },
                throttlingMethod: overrides.throttlingMethod || "provided",
                maxWaitForLoad: LH_MAX_WAIT_FOR_LOAD,
            }
            : {
                formFactor: isMobile ? "mobile" : "desktop",
                screenEmulation: isMobile
                    ? { mobile: true, width: 360, height: 640, deviceScaleFactor: 2, disabled: false }
                    : { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false },
                throttlingMethod: overrides.throttlingMethod || "simulate",
                maxWaitForLoad: LH_MAX_WAIT_FOR_LOAD,
            };

        const config = { extends: "lighthouse:default", settings };
        log.debug("lighthouse_flags", { onlyCategories: !!flags.onlyCategories, throttlingMethod: settings.throttlingMethod, formFactor: settings.formFactor });

        //@ts-ignore
        const { lhr } = await lighthouse(url, flags, config);
        needKill = false;
        return { lhr };
    } finally {
        if (needKill && child?.pid) {
            try {
                process.kill(child.pid, "SIGKILL");
            } catch {}
            log.debug("chrome_child_killed", { pid: child.pid });
        }
    }
}

// ===================== Preflight =====================
async function preflightPaintCheck(execPath: string, url: string, extraHeaders: Record<string, string> = {}, cookies: any[] = [], strategy = "mobile") {
    const end = startTimer("preflight_total");
    if (process.env.SKIP_PREFLIGHT === "true") {
        end({ skipped: true });
        return { ok: true, details: { skipped: true } };
    }

    const browser = await puppeteer.launch({
        executablePath: execPath,
        headless: true,
        args: ["--no-sandbox", "--disable-dev-shm-usage", "--single-process"],
    });

    let page: any = null;
    try {
        page = await browser.newPage();
        page.setDefaultNavigationTimeout(Math.min(PREFLIGHT_TIMEOUT_MS, 20000));
        page.setDefaultTimeout(Math.min(PREFLIGHT_TIMEOUT_MS, 20000));

        const ua = String(strategy).toLowerCase() === "desktop" ? UA_DESKTOP : UA_MOBILE;
        await page.setUserAgent(ua);
        await page.setExtraHTTPHeaders({ "Accept-Language": "en-US,en;q=0.9", "Upgrade-Insecure-Requests": "1", ...extraHeaders });
        if (Array.isArray(cookies) && cookies.length) await page.setCookie(...cookies);

        const responses: any[] = [];
        page.on("response", (r: any) => responses.push({ url: r.url(), status: r.status() }));
        page.on("requestfailed", (r: any) => responses.push({ url: r.url(), status: 0, error: r.failure()?.errorText }));

        const resp = await page.goto(url, { waitUntil: ["domcontentloaded"], timeout: Math.min(PREFLIGHT_TIMEOUT_MS, 20000) });

        const statusBad = !resp || resp.status() >= 400;
        const content = await page.content();
        const blank = !content || content.replace(/\s+/g, "").length < 60;
        const fails = responses.filter((r) => r.status === 0).length;
        const FAIL_THRESHOLD = Number(process.env.PREFLIGHT_FAILS_MAX ?? 12);
        const ok = !(statusBad || blank || fails >= FAIL_THRESHOLD);

        end({ ok, fails, status: resp?.status?.(), blank });
        return { ok, details: { statusBad, blank, failedRequests: fails } };
    } catch (e: any) {
        end({ err: String(e?.message || e) });
        return { ok: true, details: { error: "preflight_failed" } };
    } finally {
        try {
            if (page) await page.close().catch(() => {});
        } catch {}
        try {
            await browser.close().catch(() => {});
        } catch {}
    }
}

async function quickNetworkProbe(url: string): Promise<boolean> {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), QUICK_PROBE_TIMEOUT_MS);
    try {
        const r = await fetch(url, { method: "HEAD", signal: ctrl.signal });
        return r.ok || (r.status >= 200 && r.status < 400);
    } catch {
        return false;
    } finally {
        clearTimeout(t);
    }
}

// ===================== SEO Analysis =====================
async function launchSeoBrowser(execPath: string) {
    return await puppeteer.launch({
        executablePath: execPath,
        headless: true,
        args: ["--no-sandbox", "--disable-dev-shm-usage", "--single-process", "--disable-extensions", "--disable-background-networking", "--mute-audio"],
    });
}

function getSeoLintTesterInstance(opts: any) {
    let mod: any = null;
    try {
        mod = require("@nickreese/seo-lint");
    } catch {}
    if (!mod) throw new Error("seo-lint module not found");

    const C = mod?.Tester || mod?.default?.Tester || mod?.default || mod;
    if (typeof C !== "function") throw new Error("seo-lint Tester export is not a function");

    const tryCreate = (CtorOrFn: any) => {
        if (typeof CtorOrFn !== "function") return null;
        try {
            const maybe = CtorOrFn({ siteWide: false, ...opts });
            if (maybe && typeof maybe.test === "function") return maybe;
        } catch {}
        try {
            const maybe = new CtorOrFn({ siteWide: false, ...opts });
            if (maybe && typeof maybe.test === "function") return maybe;
        } catch {}
        return null;
    };

    const tester = tryCreate(C) || tryCreate(mod?.Tester) || tryCreate(mod?.default?.Tester);
    if (!tester) throw new Error("seo-lint: could not construct Tester");

    if (typeof tester.test === "function") tester.test = tester.test.bind(tester);
    return tester;
}

async function analyzeSeoWithSeoLintUsingBrowser(browser: any, url: string, extraHeaders: Record<string, string> = {}, cookies: any[] = [], strategy = "mobile") {
    const end = startTimer("seolint_total");
    const u = new URL(url);
    const host = u.host;
    const rel = (() => {
        const path = u.pathname || "/";
        return path.startsWith("/") ? path : `/${path}`;
    })();

    // Check cheerio
    try {
        const ch = require("cheerio");
        if (!ch?.load) throw new Error("cheerio.load missing");
    } catch (e: any) {
        throw new Error("seo-lint requires cheerio. Install cheerio and redeploy.");
    }

    const tFetch = startTimer("seolint_fetch_html");
    const serverHTML = await fetchHTML(url, extraHeaders);
    tFetch({ bytes: serverHTML?.length || 0 });

    const tClient = startTimer("seolint_render_client");
    const page = await browser.newPage();
    try {
        await page.setUserAgent(String(strategy).toLowerCase() === "desktop" ? UA_DESKTOP : UA_MOBILE);
        await page.setExtraHTTPHeaders({ "Accept-Language": "en-US,en;q=0.9", "Upgrade-Insecure-Requests": "1", ...extraHeaders });
        if (Array.isArray(cookies) && cookies.length) await page.setCookie(...cookies);

        page.setDefaultNavigationTimeout(Math.min(CLIENT_RENDER_TIMEOUT_MS, 20000));
        page.setDefaultTimeout(Math.min(CLIENT_RENDER_TIMEOUT_MS, 20000));

        const resp = await page.goto(url, { waitUntil: ["domcontentloaded"], timeout: Math.min(CLIENT_RENDER_TIMEOUT_MS, 20000) });
        const status = resp && typeof resp.status === "function" ? resp.status() : null;
        await page.evaluate(() => new Promise((r) => setTimeout(r, 200)));
        const clientHTML = await page.content();
        tClient({ status, bytes: clientHTML?.length || 0 });

        const runTestSafely = async (html: string, label: string) => {
            if (!html) return { ok: false, value: null, err: `no_${label}_html` };
            let tester;
            try {
                tester = getSeoLintTesterInstance({ host, siteWide: false });
            } catch (e: any) {
                return { ok: false, value: null, err: `tester_create_failed: ${e?.message || e}` };
            }
            try {
                const value = await tester.test(html, rel);
                return { ok: true, value, err: null };
            } catch (e: any) {
                return { ok: false, value: null, err: String(e?.message || e) };
            }
        };

        const serverRes = await runTestSafely(serverHTML, "server");
        const clientRes = await runTestSafely(clientHTML, "client");

        if (!serverRes.ok && !clientRes.ok) throw new Error(`seo-lint failed (server: ${serverRes.err}, client: ${clientRes.err})`);

        const merged = mergeSeoLintResults(serverRes.ok ? serverRes.value : {}, clientRes.ok ? clientRes.value : {});
        const { errors, warnings, messages } = normalizeSeoLintIssues(merged);

        if (errors === 0 && warnings === 0 && (!messages || messages.length === 0)) {
            end({ lowSignal: true });
            return { score: 100, errors: 0, warnings: 0, messages: [], _usedServerHTML: !!serverHTML, _usedClientHTML: !!clientHTML };
        }

        const score = computeSeoScoreStrict({ errors, warnings, messages });
        end({ errors, warnings, score, msgCount: messages.length });

        return { score, errors, warnings, messages, _usedServerHTML: !!serverHTML, _usedClientHTML: !!clientHTML };
    } finally {
        try {
            await page.close().catch(() => {});
        } catch {}
    }
}

async function fetchHTML(url: string, extraHeaders: Record<string, string> = {}): Promise<string> {
    try {
        const res = await fetch(url, {
            method: "GET",
            headers: { "Accept-Language": "en-US,en;q=0.9", "Upgrade-Insecure-Requests": "1", ...extraHeaders },
        });
        if (!res.ok) return "";
        return (await res.text()) || "";
    } catch {
        return "";
    }
}

function mergeSeoLintResults(serverObj: any = {}, clientObj: any = {}) {
    const byUrl = (obj: any) => obj?.byUrl || obj?.issues || obj?.results || obj;
    const site = (obj: any) => obj?.site || obj?.sitewide || {};

    const sByUrl = byUrl(serverObj) || {};
    const cByUrl = byUrl(clientObj) || {};
    const sSite = site(serverObj) || {};
    const cSite = site(clientObj) || {};

    const merged: Record<string, any> = {};
    for (const [k, v] of Object.entries(sByUrl)) merged[k] = deepMergeIssueBuckets(merged[k], v);
    for (const [k, v] of Object.entries(cByUrl)) merged[k] = deepMergeIssueBuckets(merged[k], v);

    if (sSite?.errors?.length || sSite?.warnings?.length) {
        merged["__sitewide_server__"] = deepMergeIssueBuckets(merged["__sitewide_server__"], sSite);
    }
    if (cSite?.errors?.length || cSite?.warnings?.length) {
        merged["__sitewide_client__"] = deepMergeIssueBuckets(merged["__sitewide_client__"], cSite);
    }

    return merged;
}

function deepMergeIssueBuckets(a: any = {}, b: any = {}) {
    const norm = (x: any) => (Array.isArray(x) ? x : []);
    return {
        errors: dedupIssues([...norm(a.errors), ...norm(b.errors)]),
        warnings: dedupIssues([...norm(a.warnings), ...norm(b.warnings)]),
        info: dedupIssues([...(a.info || []), ...(b.info || [])]),
    };
}

function dedupIssues(arr: any[]) {
    const key = (x: any) => {
        if (!x) return "";
        if (typeof x === "string") return x;
        const rule = x.rule || x.id || x.code || "";
        const msg = x.message || x.msg || x.text || JSON.stringify(x);
        return `${rule}::${msg}`;
    };
    const seen = new Set<string>();
    const out: any[] = [];
    for (const it of arr) {
        const k = key(it);
        if (!seen.has(k)) {
            seen.add(k);
            out.push(it);
        }
    }
    return out;
}

function normalizeSeoLintIssues(mergedByKey: any) {
    const allErrors: any[] = [];
    const allWarnings: any[] = [];
    const messages: string[] = [];

    const pull = (item: any) => {
        const rule = item?.rule || item?.id || item?.code || undefined;
        const msg = (item?.message || item?.msg || item?.text || "").toString().trim();
        const combined = rule ? `${rule}: ${msg || "Issue detected"}` : msg || "Issue detected";
        return strip(combined).slice(0, 300);
    };

    for (const [, bucket] of Object.entries(mergedByKey || {})) {
        const b = bucket as any;
        const coercedErrors = (b.errors || []).map(coerceLowImpactToMedium);
        for (const e of coercedErrors) {
            allErrors.push(e);
            messages.push(remapSeoLintMessage(pull(e)));
        }
        for (const w of b.warnings || []) {
            allWarnings.push(w);
            messages.push(remapSeoLintMessage(pull(w)));
        }
    }

    return { errors: allErrors.length, warnings: allWarnings.length, messages: Array.from(new Set(messages)).slice(0, 50) };
}

function coerceLowImpactToMedium(issue: any) {
    if (!issue || typeof issue !== "object") return issue;
    const LOW_IMPACT_KEYS = ["low", "minor", "trivial", "info"];
    const isLowString = (v: any) => v && LOW_IMPACT_KEYS.includes(String(v).toLowerCase().trim());

    if (isLowString(issue.impact)) issue.impact = "medium";
    if (isLowString(issue.severity)) issue.severity = "medium";
    if (isLowString(issue.level)) issue.level = "medium";

    return issue;
}

function remapSeoLintMessage(m: string) {
    if (/canonical/i.test(m)) return "Add a valid canonical URL and ensure it matches the preferred permalink.";
    if (/meta description/i.test(m)) return "Provide a unique meta description between 10 and 160 characters that includes primary intent.";
    if (/title tag/i.test(m)) return "Ensure a single title of 10 to 60 characters without HTML markup.";
    if (/\bh1\b/i.test(m)) return "Use exactly one H1 mirroring search intent. Keep 10 to 70 characters.";
    if (/duplicate/i.test(m) && /title|description/i.test(m)) return "Resolve duplicate titles or descriptions across pages.";
    if (/orphaned pages/i.test(m)) return "Fix orphaned pages by adding internal links from relevant pages.";
    if (/broken internal links/i.test(m)) return "Fix broken internal links and maintain consistent trailing slashes.";
    if (/alt tag/i.test(m)) return "Add descriptive alt text to images that reflects their purpose.";
    if (/viewport/i.test(m)) return "Include a responsive viewport meta tag.";
    if (/nofollow/i.test(m) && /internal/i.test(m)) return 'Avoid rel="nofollow" on internal links. Allow equity flow.';
    return m;
}

function computeSeoScoreStrict(input: { errors: number; warnings: number; messages: string[] }) {
    const { errors = 0, warnings = 0, messages = [] } = input || {};
    let e = Number(errors) || 0;
    let w = Number(warnings) || 0;

    if (SEO_STRICT_MODE && SEO_WARN_AS_ERROR) {
        e += w;
        w = 0;
    }

    let penalty = e * SEO_ERR_WEIGHT + w * SEO_WARN_WEIGHT + SEO_BASELINE_PENALTY;

    const criticalPatterns = [/canonical/i, /meta\s+description/i, /\btitle\b/i, /\bh1\b/i, /\bviewport\b/i, /\brobots(\.txt)?\b/i, /\bnoindex\b/i, /\bhreflang\b/i, /\bopen\s*graph|og:/i, /\btwitter:\w+/i, /\bsitemap\b/i, /\bstructured\s*data|\bschema\.org\b|\bjson-ld\b/i];

    for (const m of messages) {
        for (const re of criticalPatterns) {
            if (re.test(String(m))) {
                penalty += SEO_CRITICAL_PENALTY;
                break;
            }
        }
    }

    const dupPatterns = [/duplicate/i, /duplicates/i];
    for (const m of messages) {
        if (dupPatterns.some((re) => re.test(String(m)) && /(title|description)/i.test(String(m)))) {
            penalty += SEO_DUPLICATE_PENALTY;
        }
    }

    if (SEO_STRICT_MODE && messages.length < 3) penalty += 5;

    const maxCap = SEO_STRICT_MODE ? SEO_MAX_SCORE : 100;
    return clamp(100 - penalty, SEO_MIN_SCORE, maxCap);
}

// ===================== PSI Fallback =====================
async function runViaPSIFast(url: string, strategy = "mobile"): Promise<AuditResults> {
    const key = process.env.PAGESPEED_API_KEY;
    const qs = new URLSearchParams({
        url,
        strategy: String(strategy).toLowerCase() === "desktop" ? "desktop" : "mobile",
        locale: "en_US",
        utm_source: "nextjs_audit",
    });
    ["performance", "accessibility", "best-practices", "seo"].forEach((c) => qs.append("category", c));
    if (key) qs.set("key", key);

    const t = startTimer("psi_fast_call");
    const res = await fetch(`https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?${qs}`);
    t({ status: res.status });
    if (!res.ok) throw new Error(`PSI fast failed: ${res.status} ${res.statusText}`);
    const data = await res.json();
    return lhrToResults(data?.lighthouseResult);
}

// ===================== Result Processing =====================
function lhrToResults(lhr: any): AuditResults {
    const pct = (x: any) => Math.round((x ?? 0) * 100);
    const performance = pct(lhr?.categories?.performance?.score);
    const accessibility = pct(lhr?.categories?.accessibility?.score);
    const bestPractices = pct(lhr?.categories?.["best-practices"]?.score);
    const seo = pct(lhr?.categories?.seo?.score);
    const totalScore = Math.round((performance + accessibility + bestPractices + seo) / 4);

    const recommendations = pickTopRecommendations(lhr);
    const includeReport = process.env.INCLUDE_FULL_REPORT === "true";

    return { lighthouse: { performance, accessibility, bestPractices, seo, totalScore }, recommendations, fullReport: includeReport ? lhr : undefined };
}

function pickTopRecommendations(lhr: any): string[] {
    const audits = lhr?.audits || {};
    const recs: string[] = [];
    const want = [
        "render-blocking-resources", "unused-javascript", "unused-css-rules", "uses-responsive-images",
        "uses-optimized-images", "uses-text-compression", "efficient-animated-content", "server-response-time",
        "total-byte-weight", "image-alt", "color-contrast", "heading-order", "html-has-lang",
        "aria-allowed-attr", "link-name", "no-vulnerable-libraries", "deprecations", "password-inputs-can-be-pasted",
    ];

    for (const id of want) {
        const a = audits[id];
        if (!a) continue;
        const failed = (typeof a.score === "number" && a.score < 1) || a.scoreDisplayMode === "manual" || a.scoreDisplayMode === "informative";
        if (!failed) continue;

        const title = a.title || id;
        const detail = a?.details?.overview || a?.description || "";
        const msg = detail ? `${title}: ${strip(detail)}` : title;
        recs.push(summarizeNonSeo(id, msg));
        if (recs.length >= 10) break;
    }
    return Array.from(new Set(recs));
}

function summarizeNonSeo(id: string, fallback: string): string {
    const map: Record<string, string> = {
        "render-blocking-resources": "Eliminate render-blocking resources by deferring or inlining critical CSS and deferring or async loading JS.",
        "unused-javascript": "Remove or code-split unused JavaScript to reduce JS payload.",
        "unused-css-rules": "Purge unused CSS to lower stylesheet size.",
        "uses-responsive-images": "Serve responsive images with srcset and sizes for different viewports.",
        "uses-optimized-images": "Compress images using WebP or AVIF and enable lazy loading.",
        "uses-text-compression": "Enable text compression gzip br or zstd on HTML CSS and JS.",
        "efficient-animated-content": "Avoid heavy GIFs. Prefer video or CSS animations.",
        "server-response-time": "Reduce server response time via backend optimization, caching, and edge delivery.",
        "total-byte-weight": "Reduce total transfer size by minifying, compressing, and splitting code and assets.",
        "image-alt": "Add descriptive alt text to images.",
        "color-contrast": "Fix low color contrast for readability.",
        "heading-order": "Correct heading order and ensure a single meaningful H1.",
        "html-has-lang": "Add the correct lang attribute on html.",
        "aria-allowed-attr": "Fix invalid ARIA attributes on interactive elements.",
        "link-name": "Provide accessible names for links.",
        "no-vulnerable-libraries": "Remove or update vulnerable front end libraries.",
        deprecations: "Address deprecated APIs detected on the page.",
        "password-inputs-can-be-pasted": "Allow paste into password fields for usability.",
    };
    return map[id] ?? fallback;
}

// ===================== Utilities =====================
function safeJSON(s: string) {
    try {
        return JSON.parse(s);
    } catch {
        return null;
    }
}

function strip(s: string) {
    return String(s).replace(/\s+/g, " ").trim();
}

function clamp(v: number, lo: number, hi: number) {
    return Math.max(lo, Math.min(hi, v));
}

function nowMs() {
    // @ts-ignore
    return Number(process.hrtime.bigint() / 1000000n);
}

function startTimer(label: string) {
    const t0 = nowMs();
    return (extra: any = {}) => {
        const ms = nowMs() - t0;
        log.info("timer", { label, ms, ...extra });
        return ms;
    };
}

function withSoftTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<{ v?: T; timedOut?: boolean }> {
    let finished = false;
    const t = startTimer(`${label}_soft_timeout`);
    return Promise.race([
        promise.then((v) => {
            finished = true;
            t({ hit: false });
            return { v };
        }),
        new Promise<{ timedOut: boolean }>((resolve) => setTimeout(() => resolve({ timedOut: true }), ms)),
    ]).then((res) => {
        if (!finished && (res as any)?.timedOut) t({ hit: true, limitMs: ms });
        return res;
    });
}

function makeDeadlineController(msTotal = DEADLINE_MS) {
    const started = nowMs();
    const left = () => Math.max(0, msTotal - (nowMs() - started));
    const abortIfExceeded = (label: string) => {
        const remaining = left();
        if (remaining <= 0) throw new Error(`deadline_exceeded at ${label}`);
        return remaining;
    };
    return { left, abortIfExceeded, started };
}

const unwrap = <T>(r: any): T | null => (r && typeof r === "object" && "v" in r ? r.v : r);

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