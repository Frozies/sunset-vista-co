"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
    AlertCircle,
    CheckCircle2,
    Phone,
    Calendar,
    ArrowRight,
    Zap,
    Target,
    Award,
    ChevronDown,
    ChevronUp,
} from "lucide-react"

type AuditResults = {
    lighthouse: {
        performance: number
        accessibility: number
        bestPractices: number
        seo: number
        totalScore: number
    }
    recommendations: string[]
    fullReport?: unknown
}

const STORAGE_KEY = "sv_audit_results_v1"
const STORAGE_URL_KEY = "sv_audit_url_v1"

// --- Short label map (your existing list) ---
const RECOMMENDATION_MAP: Record<string, string> = {
    "render-blocking-resources": "Eliminate render-blocking resources (defer or inline critical CSS, defer/async JS).",
    "unused-javascript": "Remove or code-split unused JavaScript to reduce JS payload.",
    "unused-css-rules": "Purge unused CSS to lower stylesheet size.",
    "uses-responsive-images": "Serve responsive images (srcset/sizes) for different viewports.",
    "uses-optimized-images": "Compress images (WebP/AVIF) and enable lazy-loading.",
    "uses-text-compression": "Enable text compression (gzip/br/zstd) on HTML/CSS/JS).",
    "efficient-animated-content": "Avoid heavy GIFs; use video or CSS animations where possible.",
    "server-response-time": "Reduce server response time (optimize backend, caching, edge).",
    "total-byte-weight": "Reduce total transfer size (minify, compress, split code/assets).",
    "image-alt": "Add descriptive alt text to all images.",
    "color-contrast": "Fix low color contrast for readability.",
    "heading-order": "Correct heading order and ensure a single, meaningful H1.",
    "html-has-lang": "Add the correct lang attribute on <html>.",
    "aria-allowed-attr": "Fix invalid ARIA attributes on interactive elements.",
    "link-name": "Provide accessible names for links.",
    "no-vulnerable-libraries": "Remove or update vulnerable front-end libraries.",
    "deprecations": "Address deprecated APIs detected in the page.",
    "password-inputs-can-be-pasted": "Allow paste into password fields for usability.",
    "meta-description": "Add a concise, unique meta description.",
    "document-title": "Provide a descriptive <title> of 10–60 characters.",
    "hreflang": "Add correct hreflang for multilingual pages.",
    "canonical": 'Include a valid rel="canonical" to prevent duplicate content.',
    "viewport": "Add a mobile-friendly viewport meta tag.",
    "robots-txt": "Ensure a valid robots.txt and allow crawling of important pages.",
}

// --- Rich copy for Why This Matters & Revenue Impact per rule ---
const RECOMMENDATION_COPY: Record<
    string,
    {
        why: string
        revenue: string
    }
> = {
    "render-blocking-resources": {
        why:
            "Render-blocking CSS/JS delays First Contentful Paint and Largest Contentful Paint. When the browser must download, parse, and execute these assets before painting, users stare at a blank screen and bounce—especially on mobile or slow networks.",
        revenue:
            "Cutting render-blocking time routinely improves time-to-interactive and can lift mobile conversion rates by ~10–30% via reduced abandonment and higher engagement with above-the-fold CTAs.",
    },
    "unused-javascript": {
        why:
            "Excess JavaScript inflates download, parse, and execution cost, taxing CPU and memory on mid-range phones. This degrades interactivity (INP) and causes input delay and jank.",
        revenue:
            "Trimming unused JS reduces TTI and interaction latency, which correlates with more form completions and checkout starts. Expect ~5–20% lift in task completion for JS-heavy pages.",
    },
    "unused-css-rules": {
        why:
            "Bloated CSS blocks rendering and increases style recalculation costs. Users wait longer to see a stable layout, increasing the chance of bounce before any value is communicated.",
        revenue:
            "Purged CSS speeds first render and reduces layout shifts, keeping users focused on your offer. This commonly improves micro-conversion events (menu opens, scroll depth) by ~5–15%.",
    },
    "uses-responsive-images": {
        why:
            "Shipping desktop-sized images to mobile devices wastes bandwidth and time. Without srcset/sizes, small screens download large assets they don’t need.",
        revenue:
            "Right-sized images reduce page weight dramatically, improving perceived speed and product viewing. Sites often see ~10–25% more gallery interactions and add-to-cart attempts.",
    },
    "uses-optimized-images": {
        why:
            "Uncompressed PNG/JPEG—and especially animated GIF—can dominate transfer size. Modern formats (WebP/AVIF) preserve quality at a fraction of the bytes.",
        revenue:
            "Optimized media accelerates hero and product imagery, lifting engagement and decreasing bounce on landing pages. Typical gains: ~10–20% better session duration and ~5–15% conversion lift.",
    },
    "uses-text-compression": {
        why:
            "Uncompressed HTML/CSS/JS costs extra round trips and longer downloads. Enabling gzip/brotli/zstd slashes transfer size without code changes.",
        revenue:
            "Lighter text assets boost first render and interactivity, improving form start rates and search landing retention. Expect ~5–12% improvements on pages with large script bundles.",
    },
    "efficient-animated-content": {
        why:
            "Large GIFs and unthrottled animations are CPU-intensive and heavy to download. Video with proper codecs or CSS transforms are far more efficient and battery-friendly.",
        revenue:
            "Replacing heavy animations reduces stutter, especially on mobile, improving perceived polish and trust—often translating to ~5–10% more CTA clicks on animated hero sections.",
    },
    "server-response-time": {
        why:
            "High TTFB delays everything: HTML, critical CSS/JS discovery, and data fetching. Slow origin time compounds with network latency, harming all downstream metrics.",
        revenue:
            "Reducing TTFB via caching, DB/index tuning, and edge deployment improves all funnel steps. Many sites see ~15–35% bounce reduction on paid traffic and notable ROAS gains.",
    },
    "total-byte-weight": {
        why:
            "Every extra megabyte extends load on constrained networks and older devices. Heavy pages are especially punishing for first-time visitors without a warm cache.",
        revenue:
            "Lowering total bytes expands your effective audience and increases successful landings from ads/social. Expect ~8–20% more users reaching key content and CTAs.",
    },
    "image-alt": {
        why:
            "Missing alt text breaks screen-reader comprehension and harms image SEO. Descriptive alt also provides context if the image fails to load.",
        revenue:
            "Better accessibility widens reach and lowers friction for assistive tech users. It can also surface more image search traffic, contributing incremental qualified visits.",
    },
    "color-contrast": {
        why:
            "Low contrast text is hard to read on mobile and in sunlight, increasing cognitive load and abandonment—especially for older users and those with low vision.",
        revenue:
            "Improved legibility boosts time-on-page and reduces form errors, often yielding ~3–8% more successful submissions on contact/quote flows.",
    },
    "heading-order": {
        why:
            "Disordered headings confuse assistive technologies and harm content scanning for all users. A single, descriptive H1 with logical H2/H3 helps both UX and SEO.",
        revenue:
            "Cleaner information architecture improves comprehension and SERP snippet mapping, aiding click-through and on-page engagement—which supports downstream conversions.",
    },
    "html-has-lang": {
        why:
            "The lang attribute enables correct pronunciation, hyphenation, and dictionary rules for screen readers and search engines.",
        revenue:
            "Proper language tagging improves accessibility compliance and can enhance international SEO targeting, adding incremental qualified traffic.",
    },
    "aria-allowed-attr": {
        why:
            "Invalid ARIA undermines assistive tech, making controls unusable or misleading. This erodes trust and blocks key actions for some users.",
        revenue:
            "Fixing ARIA improves completion of navigation and forms, recovering conversions otherwise lost to inaccessible UI—typically a measurable uplift on lead gen forms.",
    },
    "link-name": {
        why:
            "Links without accessible names (“Read more”, icon-only) lack context for screen readers and keyboard users, reducing discoverability of critical paths.",
        revenue:
            "Clear, descriptive link names improve click-through to money pages (pricing, booking, product), increasing funnel entry rates by ~5–12%.",
    },
    "no-vulnerable-libraries": {
        why:
            "Known CVEs in client libraries expose users to XSS and supply-chain risks. Security warnings in Chrome/Edge also damage credibility.",
        revenue:
            "Removing warnings boosts trust and completion of sensitive steps (checkout, payment, login). Security-related friction often suppresses conversion by several points until fixed.",
    },
    "deprecations": {
        why:
            "Deprecated APIs can break unexpectedly with browser updates, causing regressions in critical flows with no code changes from your team.",
        revenue:
            "Proactive migration prevents outages that tank revenue. Teams that stay current avoid sudden conversion drops tied to silent browser changes.",
    },
    "password-inputs-can-be-pasted": {
        why:
            "Blocking paste increases login friction, penalizes password manager users, and raises reset requests—hurtful on mobile.",
        revenue:
            "Allowing paste raises successful login and checkout completion rates, commonly improving return-user conversion by ~3–7%.",
    },
    "meta-description": {
        why:
            "Missing or generic meta descriptions lead to poor SERP snippets. Compelling summaries drive higher click-through for the same rank.",
        revenue:
            "Higher CTR increases traffic without additional ad spend. Even +0.5–2.0 pp CTR on high-intent queries can yield meaningful lead/revenue gains.",
    },
    "document-title": {
        why:
            "A weak or duplicated title confuses users and search engines about page purpose. Titles are the primary SERP headline.",
        revenue:
            "Sharper titles lift CTR and brand recall, compounding SEO value over time and feeding more qualified sessions into your funnel.",
    },
    "hreflang": {
        why:
            "Incorrect/missing hreflang causes wrong-locale pages to rank, raising bounce and decreasing relevance for international users.",
        revenue:
            "Proper locale targeting recovers qualified traffic and improves local conversion rates in served languages/regions.",
    },
    "canonical": {
        why:
            "Absent or conflicting canonicals dilute link equity across duplicates and can cause the wrong page to rank.",
        revenue:
            "Consolidating signals improves ranking stability for revenue pages, capturing more consistent organic traffic.",
    },
    "viewport": {
        why:
            "Without a responsive viewport, mobile users see zoomed-out, tiny text and tap targets—immediate abandonment risk.",
        revenue:
            "Mobile-friendly rendering increases engagement on small screens, typically improving mobile conversion by ~10–25% depending on baseline.",
    },
    "robots-txt": {
        why:
            "A misconfigured robots.txt can block critical pages or assets from being crawled, suppressing rankings and rich results.",
        revenue:
            "Fixing crawlability restores organic visibility and prevents traffic loss from accidental disallows—often recovering high-intent visits.",
    },
}

// Build a reverse lookup from short description -> rule id
const RULE_ID_BY_DESCRIPTION: Record<string, string> = Object.fromEntries(
    Object.entries(RECOMMENDATION_MAP).map(([id, desc]) => [desc, id])
)

function ScoreCircle({ score, label }: { score: number; label: string }) {
    const [displayScore, setDisplayScore] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
        const duration = 2000
        const steps = 60
        const increment = score / steps
        let current = 0

        const timer = setInterval(() => {
            current += increment
            if (current >= score) {
                setDisplayScore(score)
                clearInterval(timer)
            } else {
                setDisplayScore(Math.floor(current))
            }
        }, duration / steps)

        return () => clearInterval(timer)
    }, [score])

    const getColor = (s: number) => {
        if (s >= 90) return "text-green-600"
        if (s >= 50) return "text-amber-600"
        return "text-red-600"
    }

    const getStrokeColor = (s: number) => {
        if (s >= 90) return "stroke-green-600"
        if (s >= 50) return "stroke-amber-600"
        return "stroke-red-600"
    }

    const circumference = 2 * Math.PI * 45
    const strokeDashoffset = circumference - (displayScore / 100) * circumference

    return (
        <div
            className={`flex flex-col items-center transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
            <div className="relative w-28 h-28 mb-3">
                <svg className="transform -rotate-90 w-28 h-28">
                    <circle cx="56" cy="56" r="45" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200" />
                    <circle
                        cx="56"
                        cy="56"
                        r="45"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className={`${getStrokeColor(score)} transition-all duration-1000 ease-out`}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-3xl font-bold ${getColor(score)}`}>{displayScore}</span>
                </div>
            </div>
            <span className="text-sm font-medium text-muted-foreground text-center">{label}</span>
        </div>
    )
}

function RecommendationCard({ rec, index }: { rec: string; index: number }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 100)
        return () => clearTimeout(timer)
    }, [index])

    // Determine impact heuristically from the short text (kept as fallback)
    const getImpactLevel = () => {
        const lc = rec.toLowerCase()
        if (lc.includes("critical") || lc.includes("slow") || lc.includes("vulnerab")) return "high"
        if (lc.includes("moderate") || lc.includes("improve") || lc.includes("optimize")) return "medium"
        return "low"
    }

    // Prefer rule-specific copy if we can map the short description back to a rule id.
    const ruleId = RULE_ID_BY_DESCRIPTION[rec]
    const ruleCopy = ruleId ? RECOMMENDATION_COPY[ruleId] : undefined
    const impact = getImpactLevel()

    const impactColors: Record<string, string> = {
        high: "border-red-200 bg-red-50",
        medium: "border-amber-200 bg-amber-50",
        low: "border-blue-200 bg-blue-50",
    }

    const impactLabels: Record<string, string> = {
        high: "High Impact",
        medium: "Medium Impact",
        low: "Low Impact",
    }

    const impactTextColors: Record<string, string> = {
        high: "text-red-700",
        medium: "text-amber-700",
        low: "text-blue-700",
    }

    return (
        <Card
            className={`p-6 hover:shadow-lg transition-all duration-300 cursor-pointer ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                    {index + 1}
                </div>
                <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                        <p className="text-lg font-medium">{rec}</p>
                        <div className="flex items-center gap-2">
              <span className={`text-xs px-2 py-1 rounded-full ${impactColors[impact]} ${impactTextColors[impact]} font-semibold`}>
                {impactLabels[impact]}
              </span>
                            {isExpanded ? (
                                <ChevronUp className="w-5 h-5 text-muted-foreground" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-muted-foreground" />
                            )}
                        </div>
                    </div>

                    {isExpanded && (
                        <div className="mt-4 pt-4 border-t space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                            <div>
                                <h4 className="font-semibold text-sm mb-1">Why This Matters:</h4>
                                <p className="text-sm text-muted-foreground">
                                    {ruleCopy
                                        ? ruleCopy.why
                                        : impact === "high"
                                            ? "This issue is significantly impacting your website's performance and user experience. Fixing this should be a top priority as it's likely costing you customers right now."
                                            : impact === "medium"
                                                ? "This issue is affecting your website's effectiveness. Addressing it will improve user experience and help you capture more leads."
                                                : "While not critical, fixing this will help optimize your website and provide a better experience for your visitors."}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm mb-1">Potential Revenue Impact:</h4>
                                <p className="text-sm text-muted-foreground">
                                    {ruleCopy
                                        ? ruleCopy.revenue
                                        : impact === "high"
                                            ? "Businesses that fix high-impact issues typically see 30–50% improvement in conversion rates within the first month."
                                            : impact === "medium"
                                                ? "Addressing medium-impact issues can lead to 15–25% improvement in user engagement and lead quality."
                                                : "Small optimizations add up—minor improvements can result in 5–10% better performance over time."}
                                </p>
                            </div>
                            <div className="pt-2">
                                <Button
                                    size="sm"
                                    className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        window.location.href = "/contact"
                                    }}
                                >
                                    Get This Fixed Now
                                    <ArrowRight className="ml-2 h-3 w-3" />
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    )
}

export default function WebsiteAuditResultsClient() {
    const [url, setUrl] = useState<string | null>(null)
    const [results, setResults] = useState<AuditResults | null>(null)
    const [showStats, setShowStats] = useState(false)

    useEffect(() => {
        try {
            const raw = sessionStorage.getItem(STORAGE_KEY)
            const u = sessionStorage.getItem(STORAGE_URL_KEY)
            if (raw) setResults(JSON.parse(raw) as AuditResults)
            if (u) setUrl(u)
        } catch {
            // ignore
        }

        const timer = setTimeout(() => setShowStats(true), 500)
        return () => clearTimeout(timer)
    }, [])

    if (!results) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
                <div className="container mx-auto px-4 md:px-8 py-16">
                    <Card className="max-w-2xl mx-auto p-8 text-center">
                        <AlertCircle className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                        <h1 className="text-3xl font-bold mb-4">No Results Found</h1>
                        <p className="text-muted-foreground mb-6">Please run a website audit first to see your results.</p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
                        >
                            <Link href="/website-audit">
                                Start Your Free Audit
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </Card>
                </div>
            </div>
        )
    }

    const s = results.lighthouse
    const overallScore = s.totalScore
    const hasIssues = overallScore < 90

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
            {/* Hero Section with Results */}
            <section className="py-12 md:py-16 border-b bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-in fade-in slide-in-from-top duration-500">
                            <Zap className="w-4 h-4" />
                            Audit Complete
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance animate-in fade-in slide-in-from-bottom duration-700">
                            Your Website Analysis for{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                {url || "Your Site"}
              </span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
                            {hasIssues
                                ? "We've identified significant opportunities to improve your online presence and drive more customers to your business."
                                : "Your website is performing well, but there's always room for optimization to stay ahead of competitors."}
                        </p>
                    </div>

                    {/* Score Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
                        <ScoreCircle score={s.performance} label="Performance" />
                        <ScoreCircle score={s.accessibility} label="Accessibility" />
                        <ScoreCircle score={s.bestPractices} label="Best Practices" />
                        <ScoreCircle score={s.seo} label="SEO" />
                        <div className="col-span-2 md:col-span-1 flex justify-center">
                            <ScoreCircle score={overallScore} label="Overall Score" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Urgency Section */}
            {hasIssues && (
                <section className="py-12 bg-gradient-to-r from-red-50 to-orange-50 border-b">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500 animate-in fade-in slide-in-from-left duration-700">
                                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1 animate-pulse" />
                                <div>
                                    <h2 className="text-2xl font-bold mb-3 text-red-900">
                                        Your Website Has Critical Issues That Are Costing You Money
                                    </h2>
                                    <p className="text-lg text-gray-700 mb-4">
                                        Every day your website underperforms, you&apos;re losing potential customers to competitors. Studies show
                                        that <strong>53% of mobile users abandon sites that take longer than 3 seconds to load</strong>, and{" "}
                                        <strong>75% of users judge a company&apos;s credibility based on their website design</strong>.
                                    </p>
                                    <p className="text-lg text-gray-700">
                                        The good news? These issues are fixable, and we specialize in turning underperforming websites into
                                        powerful lead-generation machines for Southwest Florida businesses.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Recommendations Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Your Audit Revealed</h2>
                            <p className="text-xl text-muted-foreground">
                                Here are the specific issues holding your website back from reaching its full potential
                            </p>
                            <p className="text-sm text-muted-foreground mt-2 italic">Click any item to see detailed impact analysis</p>
                        </div>

                        <div className="space-y-4 mb-12">
                            {results.recommendations.map((rec, i) => (
                                <RecommendationCard key={i} rec={rec} index={i} />
                            ))}
                        </div>

                        {/* Value Proposition */}
                        <Card className="bg-gradient-to-br from-orange-600 to-amber-600 text-white p-8 md:p-12 animate-in fade-in slide-in-from-bottom duration-700">
                            <div className="text-center mb-8">
                                <Award className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-3xl font-bold mb-4">Don&apos;t Let These Issues Cost You Another Customer</h3>
                                <p className="text-xl text-orange-50 mb-6">
                                    Sunset Vista Co has helped dozens of Southwest Florida businesses transform their websites into
                                    high-performing assets that generate consistent leads and revenue.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className={`text-center transition-all duration-700 ${showStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                                    <div className="text-4xl font-bold mb-2">127%</div>
                                    <div className="text-orange-50">Average Traffic Increase</div>
                                </div>
                                <div
                                    className={`text-center transition-all duration-700 delay-150 ${
                                        showStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    }`}
                                >
                                    <div className="text-4xl font-bold mb-2">3.2x</div>
                                    <div className="text-orange-50">More Qualified Leads</div>
                                </div>
                                <div
                                    className={`text-center transition-all duration-700 delay-300 ${
                                        showStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    }`}
                                >
                                    <div className="text-4xl font-bold mb-2">$47K</div>
                                    <div className="text-orange-50">Avg. Revenue Increase</div>
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-lg text-orange-50 mb-6">
                                    <strong>Unlike remote agencies</strong>, we provide in-person support right here in Southwest Florida.
                                    Meet face-to-face, get hands-on help, and work with a team that truly understands your local market.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* What Happens Next */}
            <section className="py-16 bg-white/50 backdrop-blur-sm">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Happens When You Work With Us</h2>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <Card className="p-6 text-center">
                                <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                                    1
                                </div>
                                <h3 className="text-xl font-bold mb-3">Free Consultation</h3>
                                <p className="text-muted-foreground">
                                    We&apos;ll meet in person or virtually to discuss your audit results and create a custom action plan
                                </p>
                            </Card>

                            <Card className="p-6 text-center">
                                <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                                    2
                                </div>
                                <h3 className="text-xl font-bold mb-3">Strategic Implementation</h3>
                                <p className="text-muted-foreground">
                                    Our team fixes critical issues and optimizes your site for maximum performance and conversions
                                </p>
                            </Card>

                            <Card className="p-6 text-center">
                                <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                                    3
                                </div>
                                <h3 className="text-xl font-bold mb-3">Ongoing Growth</h3>
                                <p className="text-muted-foreground">
                                    Watch your traffic, leads, and revenue grow with continuous optimization and support
                                </p>
                            </Card>
                        </div>

                        {/* Social Proof */}
                        <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg italic mb-4">
                                        &#34;After Sunset Vista Co optimized our website, we saw a 215% increase in online inquiries within just
                                        3 months. Their in-person support made all the difference - they truly understand our Naples market
                                        and helped us dominate our local competition.&#34;
                                    </p>
                                    <p className="font-semibold">— Michael R., Naples Home Services</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-gradient-to-br from-orange-600 to-amber-600 text-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <Target className="w-16 h-16 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Fix These Issues and Start Growing?</h2>
                        <p className="text-xl text-orange-50 mb-8">
                            Schedule your free consultation today and discover how we can transform your website into a powerful
                            business asset. No obligation, no pressure - just honest advice from local experts who care about your
                            success.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Button asChild size="lg" className="bg-white text-orange-700 hover:bg-orange-50 text-lg px-8 py-6 h-auto">
                                <Link href="/contact">
                                    <Calendar className="mr-2 h-5 w-5" />
                                    Schedule Free Consultation
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
                            >
                                <a href="tel:+19415291858">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call (941) 529-1858
                                </a>
                            </Button>
                        </div>

                        <p className="text-orange-100 text-sm">
                            Serving Fort Myers, Naples, Cape Coral, Bonita Springs, and all of Southwest Florida
                        </p>
                    </div>
                </div>
            </section>

            {/* Trust Footer */}
            <section className="py-8 bg-white/50 backdrop-blur-sm border-t">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm text-muted-foreground">
                            <strong>100% Risk-Free:</strong> We offer a satisfaction guarantee on all our services. If you&#39;re not
                            completely satisfied with our work, we&#39;ll make it right or refund your investment.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
