"use client"

import { Search, Gauge, TrendingUp, Eye, Shield, Smartphone, Zap, CheckCircle, Clock, FileText } from "lucide-react"
import {Navigation} from "@/components/v2/navigation";
import {useRouter} from "next/navigation";
import {useState} from "react";
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
export default function WebsiteAuditClientPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError(null)
        setLoading(true)

        const formData = new FormData(e.currentTarget)
        let url = (formData.get("url") as string).trim()
        if (!/^https?:\/\//i.test(url)) url = `https://${url}`

        try {
            const res = await fetch("/api/audit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url }),
                cache: "no-store",
            })
            if (!res.ok) {
                const text = await res.text().catch(() => "")
                throw new Error(text || `Request failed with ${res.status}`)
            }
            const data = (await res.json()) as { success?: boolean; results?: AuditResults; error?: string }
            if (!data.success || !data.results) throw new Error(data.error || "Unexpected response")

            // Persist for the results page and redirect
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data.results))
            sessionStorage.setItem(STORAGE_URL_KEY, url)
            router.push("/website-audit/results")
        } catch (err: any) {
            setError(err?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <Navigation />
            <div className="flex flex-col">
                <section className="relative bg-gradient-to-br from-orange-50 via-white to-yellow-50 min-h-[90vh] flex items-center justify-center overflow-hidden">
                    {/* Subtle background decoration */}
                    <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-orange-400/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-3xl" />

                    <div className="container mx-auto px-4 md:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Badge */}
                            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                                100% Free • Instant Results
                            </div>

                            {/* Headline */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 text-balance leading-tight">
                                Check Your Website Performance
                            </h1>

                            {/* Subheadline */}
                            <p className="text-xl md:text-2xl text-gray-600 mb-12 text-pretty leading-relaxed max-w-2xl mx-auto">
                                Get instant insights on speed, SEO, and accessibility. Enter your URL below.
                            </p>

                            {/* Simple URL Input Form */}
                            <div className="max-w-2xl mx-auto">
                                <form
                                    onSubmit={onSubmit}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <div className="flex-1 relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            <Search className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="url"
                                            name="url"
                                            placeholder="https://yourwebsite.com"
                                            required
                                            className="w-full pl-12 pr-4 py-5 text-lg rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:from-orange-700 hover:to-orange-600 transition-all whitespace-nowrap"
                                    >
                                        Check Now
                                    </button>
                                </form>

                                {/* Trust indicator */}
                                <p className="text-sm text-gray-500 mt-6">
                                    Trusted by businesses in Cape Coral, Fort Myers, and Naples
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Analyze Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Free Audit Analyzes</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Get a comprehensive analysis of your website&#39;s performance across all critical areas that impact your
                                    online success
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* SEO Performance */}
                                <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition-shadow">
                                    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                                        <TrendingUp className="w-7 h-7 text-orange-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Performance</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Meta tags, keywords, content structure, and search engine visibility to help you rank higher in
                                        local Southwest Florida searches
                                    </p>
                                </div>

                                {/* Page Speed */}
                                <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-100 hover:shadow-lg transition-shadow">
                                    <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                                        <Zap className="w-7 h-7 text-yellow-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Page Speed</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Load times, image optimization, and performance metrics that directly impact user experience and
                                        conversion rates
                                    </p>
                                </div>

                                {/* Mobile Responsiveness */}
                                <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition-shadow">
                                    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                                        <Smartphone className="w-7 h-7 text-orange-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Responsiveness</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Mobile-friendly design, touch targets, and responsive layouts crucial for reaching customers on any
                                        device
                                    </p>
                                </div>

                                {/* Accessibility */}
                                <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-100 hover:shadow-lg transition-shadow">
                                    <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                                        <Eye className="w-7 h-7 text-yellow-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Accessibility</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        WCAG compliance, screen reader compatibility, and inclusive design to reach all potential customers
                                    </p>
                                </div>

                                {/* Security */}
                                <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition-shadow">
                                    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                                        <Shield className="w-7 h-7 text-orange-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Security</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        SSL certificates, secure connections, and protection measures that build trust with your visitors
                                    </p>
                                </div>

                                {/* Technical SEO */}
                                <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-100 hover:shadow-lg transition-shadow">
                                    <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                                        <Gauge className="w-7 h-7 text-yellow-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical SEO</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Sitemap, robots.txt, structured data, and technical elements that help search engines understand
                                        your site
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why It's Important Section */}
                <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                        Why a Website Audit is Critical for Your Business
                                    </h2>
                                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                        Your website is often the first impression potential customers have of your business. A poorly
                                        performing site can cost you thousands in lost revenue.
                                    </p>

                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                                    <CheckCircle className="w-6 h-6 text-orange-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">Identify Hidden Issues</h3>
                                                <p className="text-gray-600">
                                                    Discover technical problems, broken links, and SEO issues that are silently hurting your
                                                    rankings and user experience
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                                    <TrendingUp className="w-6 h-6 text-yellow-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">Improve Search Rankings</h3>
                                                <p className="text-gray-600">
                                                    Fix SEO problems that prevent your business from appearing in local Cape Coral, Fort Myers,
                                                    and Naples searches
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                                    <Zap className="w-6 h-6 text-orange-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">Increase Conversions</h3>
                                                <p className="text-gray-600">
                                                    Optimize page speed and user experience to turn more visitors into paying customers
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                                                    <Shield className="w-6 h-6 text-yellow-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Competitive</h3>
                                                <p className="text-gray-600">
                                                    Keep up with competitors who are investing in their online presence and capturing your
                                                    potential customers
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-12 rounded-3xl">
                                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                                        <div className="text-center mb-8">
                                            <div className="text-6xl font-bold text-orange-600 mb-2">75%</div>
                                            <p className="text-gray-600 text-lg">
                                                of users judge a company&#39;s credibility based on their website design
                                            </p>
                                        </div>
                                        <div className="border-t border-gray-200 pt-8 text-center">
                                            <div className="text-6xl font-bold text-orange-600 mb-2">53%</div>
                                            <p className="text-gray-600 text-lg">
                                                of mobile users abandon sites that take longer than 3 seconds to load
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What You'll Receive Section */}
                <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What You&#39;ll Receive</h2>
                                <p className="text-xl text-gray-600">
                                    Your comprehensive audit report includes actionable insights and recommendations
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 mb-12">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <FileText className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Report</h3>
                                    <p className="text-gray-600">
                                        Complete analysis of all critical website elements with priority rankings
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-yellow-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Action Items</h3>
                                    <p className="text-gray-600">
                                        Clear, prioritized list of fixes to improve your website&#39;s performance
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Clock className="w-8 h-8 text-orange-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Turnaround</h3>
                                    <p className="text-gray-600">
                                        Receive your audit within 24-48 hours with personalized recommendations
                                    </p>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl p-12 text-center text-white shadow-xl">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Improve Your Website?</h3>
                                <p className="text-xl mb-8 text-orange-50">
                                    Get your free audit today and discover what&#39;s holding your website back
                                </p>
                                <button
                                    onClick={() => {
                                        window.scrollTo({ top: 0, behavior: "smooth" })
                                    }}
                                    className="bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all"
                                >
                                    Start Your Free Audit
                                </button>
                                <p className="text-sm text-orange-100 mt-6">
                                    No credit card required • Results in 30 seconds • In-person consultation available
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
