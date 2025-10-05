"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Search, MapPin, TrendingUp, CheckCircle, Phone, ArrowRight, Zap, Target, BarChart3, Users } from "lucide-react"
import FaqSection, {FaqData} from "@/components/v2/faq-section";

export default function GetRankedClientPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-background -z-10" />
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                            Get Ranked on Google. <span className="text-orange-600">Get Found by Local Customers.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
                            Your website isn&apos;t bringing in customers because it&apos;s not showing up on Google. We fix that.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white text-lg px-8"
                                asChild
                            >
                                <Link href="/website-audit">
                                    Get Your Free SEO Audit
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/contact">
                                    Talk to a Local SEO Expert
                                    <Phone className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem/Solution Section */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                            Why Isn&apos;t My Site Showing Up on Google?
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-muted-foreground mb-6">
                                If you&apos;re asking yourself this question, you&apos;re not alone. Most small business websites
                                don&apos;t show up in Google search results because they&apos;re missing the SEO foundations that Google
                                looks for.
                            </p>
                            <p className="text-lg text-muted-foreground mb-6">
                                Maybe your site is slow. Maybe it&apos;s not optimized for the right keywords. Maybe your Google
                                Business profile isn&apos;t set up correctly. Or maybe Google just doesn&apos;t know your site exists
                                yet.
                            </p>
                            <p className="text-lg text-muted-foreground mb-6">
                                Whatever the reason, the result is the same: you&apos;re losing customers to competitors who show up
                                first. And in Southwest Florida&apos;s competitive market, that means lost revenue every single day.
                            </p>
                            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-6 rounded-r-lg my-8">
                                <p className="text-lg font-semibold text-foreground mb-2">Here&apos;s the good news:</p>
                                <p className="text-lg text-muted-foreground">
                                    At Sunset Vista Co, we specialize in fixing exactly these problems for small businesses in Cape Coral,
                                    Fort Myers, and Naples. We help local businesses rank higher on Google, appear on Google Maps, and get
                                    more local customers through their website.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 md:py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Help You Get Ranked on Google</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Our affordable SEO services are designed specifically for small businesses who want to grow their
                                business online without breaking the bank.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-100 rounded-lg">
                                        <Search className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Local SEO Services</h3>
                                        <p className="text-muted-foreground mb-4">
                                            We optimize your website to show up when people in Cape Coral, Fort Myers, and Naples search for
                                            businesses like yours. This includes keyword research, on-page SEO, and making sure you appear on
                                            Google Maps.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-100 rounded-lg">
                                        <Zap className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Website Optimization</h3>
                                        <p className="text-muted-foreground mb-4">
                                            We fix the technical issues holding your site back. Speed improvements, mobile optimization, and
                                            fixing broken pages—all the things that help you rank higher on Google.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-100 rounded-lg">
                                        <Target className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Keyword Research & Strategy</h3>
                                        <p className="text-muted-foreground mb-4">
                                            We find the exact words and phrases your customers are searching for, then optimize your website
                                            to show up for those searches. No guesswork—just data-driven results.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-100 rounded-lg">
                                        <MapPin className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Google Business Profile Help</h3>
                                        <p className="text-muted-foreground mb-4">
                                            Your Google Business profile is crucial for local search. We set it up correctly, optimize it, and
                                            make sure you show up when people search for businesses near them.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="mt-12 text-center">
                            <h3 className="text-2xl font-semibold mb-4">Plus: Simple SEO Tips You Can Use Right Now</h3>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                                We don&apos;t just fix your website SEO—we teach you how to maintain it. You&apos;ll understand
                                what&apos;s working, what needs improvement, and how to make your website show on Google for the long
                                term.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results for Southwest Florida Businesses</h2>
                            <p className="text-lg text-muted-foreground">
                                When you work with Sunset Vista Co, you&apos;re not just getting SEO help near me—you&apos;re getting a
                                local partner invested in your success.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full mb-4">
                                    <TrendingUp className="h-8 w-8 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">More Traffic</h3>
                                <p className="text-muted-foreground">
                                    Our clients see significant increases in website visitors from Google search and local searches.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full mb-4">
                                    <Phone className="h-8 w-8 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">More Calls</h3>
                                <p className="text-muted-foreground">
                                    When you rank higher on Google, more potential customers find you and reach out to learn more.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full mb-4">
                                    <BarChart3 className="h-8 w-8 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Higher Rankings</h3>
                                <p className="text-muted-foreground">
                                    We help you climb the search results so you show up on the first page—where customers actually click.
                                </p>
                            </div>
                        </div>

                        <Card className="p-8 bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
                            <div className="flex items-start gap-4">
                                <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-lg mb-4">
                                        <strong>Here&apos;s what our clients tell us:</strong>
                                    </p>
                                    <ul className="space-y-3 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                            <span>&quot;We finally show up when people search for us on Google&quot;</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                            <span>&quot;Our phone is ringing more than ever&quot;</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                            <span>&quot;We&apos;re getting customers from Google Maps now&quot;</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                            <span>&quot;Our website is actually bringing in sales now&quot;</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Local Trust Section */}
            <section className="py-16 md:py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full mb-6">
                            <Users className="h-10 w-10 text-orange-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">A Local Company Helping Local Businesses Succeed</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            We&apos;re not some big agency in another state. Sunset Vista Co is right here in Southwest Florida,
                            helping other SWFL businesses grow their business online.
                        </p>
                        <p className="text-lg text-muted-foreground mb-6">
                            We understand the local market. We know what works for businesses in Cape Coral, Fort Myers, and Naples.
                            And we&apos;re here to meet with you in person, answer your questions, and make sure you understand
                            exactly what we&apos;re doing to help you get more local customers.
                        </p>
                        <p className="text-lg font-semibold text-foreground">
                            When you work with us, you&apos;re not just another client number—you&apos;re a neighbor we want to see
                            succeed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 md:py-28">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Get Ranked on Google?</h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Let&apos;s find out why your site isn&apos;t ranking—and fix it. Get a free SEO audit today and see
                            exactly what&apos;s holding your website back.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white text-lg px-8"
                                asChild
                            >
                                <Link href="/website-audit">
                                    Get Your Free SEO Audit Now
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/contact">
                                    Schedule a Consultation
                                    <Phone className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            No obligation. No pressure. Just honest SEO help for small business owners in Southwest Florida.
                        </p>
                    </div>
                </div>
            </section>

            <FaqSection data={faqData}/>
        </div>
    )
}

const faqData: FaqData = {
    heading: "Frequently Asked Questions — Get Ranked on Google",
    subtitle:
        "Clear answers about local SEO, Google Business Profile, technical fixes, content strategy, and timelines for Cape Coral, Fort Myers, and Naples.",
    cta: {
        text: "Talk to a Local SEO Expert",
        href: "/contact",
    },
    items: [
        {
            q: "Why is my site not showing up on Google?",
            a: "Most sites miss core SEO foundations like crawlability, indexing, site speed, on-page optimization, and a complete Google Business Profile. We audit these areas first, fix blockers, and build a plan to improve visibility for local searches and maps."
        },
        {
            q: "What do I get with the free SEO audit?",
            a: [
                "Technical crawl and indexability check",
                "Core Web Vitals and site speed review",
                "Keyword and content gap analysis",
                "Google Business Profile and local citations review",
                "Prioritized action plan with next steps"
            ]
        },
        {
            q: "How long until I see SEO results?",
            a: [
                "Weeks 1 to 4: Full audit, technical fixes, analytics and Search Console setup",
                "Weeks 5 to 8: Early movement on long tail and local queries as speed and indexing improve",
                "Months 3 to 4: Noticeable gains for core services and better map pack visibility",
                "Months 5 to 6: Consistent traffic and lead growth as content and citations mature",
                "After 6 months: Ongoing compounding growth depending on competition and starting point"
            ]
        },
        {
            q: "Can you get me into the Google Maps results?",
            a: "We optimize your Google Business Profile, categories, services, photos, Q and A, and posting cadence. We also improve local signals on your website, build consistent citations, and guide review generation, which together improve map pack visibility."
        },
        {
            q: "What local SEO work do you handle?",
            a: [
                "Google Business Profile optimization and updates",
                "Local citation building and NAP consistency",
                "Location and service pages targeting local keywords",
                "Review strategy and response guidance"
            ]
        },
        {
            q: "What technical SEO fixes are included?",
            a: [
                "Site speed and Core Web Vitals improvements",
                "Mobile readiness and clean navigation",
                "XML sitemaps, robots.txt, canonical and redirect hygiene",
                "Structured data for local business, services, and FAQs"
            ]
        },
        {
            q: "Do you help with content and keywords?",
            a: "Yes. We perform keyword research, map keywords to pages, write or optimize landing pages and blogs, and align content with search intent so it ranks and converts."
        },
        {
            q: "Do you build backlinks?",
            a: "We focus on safe, quality driven link building. That includes local citations, partnerships, digital PR, and useful content assets. We do not use spammy or risky link schemes."
        },
        {
            q: "How do you track calls and leads?",
            a: [
                "GA4 and Google Search Console integration",
                "Looker Studio dashboard with keyword and page reports",
                "Form and call tracking options for clear attribution",
                "Monthly summary of rankings, traffic, and conversions"
            ]
        },
        {
            q: "How much does SEO cost?",
            a: "Plans start at 1,200 dollars per month. No long term contracts. Scope depends on your market, competitors, and growth goals."
        },
        {
            q: "Do I need to sign a contract?",
            a: "No. We work month to month. You can scale up or pause based on results and seasonality."
        },
        {
            q: "What do you need from me to get started?",
            a: [
                "Access to your website or CMS",
                "GA4 and Google Search Console access",
                "Google Business Profile manager access",
                "Your services, priority locations, and any brand guidelines"
            ]
        },
        {
            q: "Can you guarantee number 1 rankings?",
            a: "No one can guarantee rankings. We focus on proven best practices and steady compounding improvements in visibility, traffic, and qualified leads."
        },
        {
            q: "Do you only work with Southwest Florida businesses?",
            a: "Our focus is Cape Coral, Fort Myers, and Naples. We also help businesses across Florida and the United States that want a local first, results focused approach."
        }
    ]
};
