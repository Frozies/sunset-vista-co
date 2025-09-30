"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Phone, Calendar, ArrowRight, Zap, Target, Award } from "lucide-react"

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

function ScoreCircle({ score, label }: { score: number; label: string }) {
    const getColor = (s: number) => {
        if (s >= 90) return "text-green-600"
        if (s >= 50) return "text-amber-600"
        return "text-red-600"
    }

    const getBgColor = (s: number) => {
        if (s >= 90) return "bg-green-50 border-green-200"
        if (s >= 50) return "bg-amber-50 border-amber-200"
        return "bg-red-50 border-red-200"
    }

    return (
        <div className="flex flex-col items-center">
            <div className={`w-24 h-24 rounded-full border-4 ${getBgColor(score)} flex items-center justify-center mb-2`}>
                <span className={`text-3xl font-bold ${getColor(score)}`}>{score}</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground text-center">{label}</span>
        </div>
    )
}

export default function WebsiteAuditResultsClient() {
    const [url, setUrl] = useState<string | null>(null)
    const [results, setResults] = useState<AuditResults | null>(null)

    useEffect(() => {
        try {
            const raw = sessionStorage.getItem(STORAGE_KEY)
            const u = sessionStorage.getItem(STORAGE_URL_KEY)
            if (raw) setResults(JSON.parse(raw) as AuditResults)
            if (u) setUrl(u)
        } catch {
            // ignore
        }
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
                        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <Zap className="w-4 h-4" />
                            Audit Complete
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                            Your Website Analysis for{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                {url || "Your Site"}
              </span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6">
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
                            <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h2 className="text-2xl font-bold mb-3 text-red-900">
                                        Your Website Has Critical Issues That Are Costing You Money
                                    </h2>
                                    <p className="text-lg text-gray-700 mb-4">
                                        Every day your website underperforms, you're losing potential customers to competitors. Studies show
                                        that <strong>53% of mobile users abandon sites that take longer than 3 seconds to load</strong>, and{" "}
                                        <strong>75% of users judge a company's credibility based on their website design</strong>.
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
                        </div>

                        <div className="space-y-4 mb-12">
                            {results.recommendations.map((rec, i) => (
                                <Card key={i} className="p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold flex-shrink-0">
                                            {i + 1}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-lg">{rec}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {/* Value Proposition */}
                        <Card className="bg-gradient-to-br from-orange-600 to-amber-600 text-white p-8 md:p-12">
                            <div className="text-center mb-8">
                                <Award className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-3xl font-bold mb-4">Don't Let These Issues Cost You Another Customer</h3>
                                <p className="text-xl text-orange-50 mb-6">
                                    Sunset Vista Co has helped dozens of Southwest Florida businesses transform their websites into
                                    high-performing assets that generate consistent leads and revenue.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-2">127%</div>
                                    <div className="text-orange-50">Average Traffic Increase</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-2">3.2x</div>
                                    <div className="text-orange-50">More Qualified Leads</div>
                                </div>
                                <div className="text-center">
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
                                    We'll meet in person or virtually to discuss your audit results and create a custom action plan
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
                                        "After Sunset Vista Co optimized our website, we saw a 215% increase in online inquiries within just
                                        3 months. Their in-person support made all the difference - they truly understand our Naples market
                                        and helped us dominate our local competition."
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
                            <Button
                                asChild
                                size="lg"
                                className="bg-white text-orange-700 hover:bg-orange-50 text-lg px-8 py-6 h-auto"
                            >
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
                                <a href="tel:+12395551234">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call (239) 555-1234
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
                            <strong>100% Risk-Free:</strong> We offer a satisfaction guarantee on all our services. If you're not
                            completely satisfied with our work, we'll make it right or refund your investment.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
