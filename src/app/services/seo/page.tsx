import { Navigation } from "@/components/v2/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react"
import {Footer} from "@/components/v2/footer";
import FaqSection, {FaqData} from "@/components/v2/faq-section";

const seoServices = [
    {
        title: "Local SEO",
        description: "Dominate local search results in Cape Coral, Fort Myers, and Naples",
        features: [
            "Google My Business optimization",
            "Local citation building",
            "Review management",
            "Local keyword targeting",
        ],
    },
    {
        title: "AI SEO & GEO",
        description: "Next-generation SEO using AI and Generative Engine Optimization",
        features: [
            "AI-powered content optimization",
            "Voice search optimization",
            "Featured snippet targeting",
            "Schema markup implementation",
        ],
    },
    {
        title: "Technical SEO",
        description: "Behind-the-scenes optimization that search engines love",
        features: [
            "Site speed optimization",
            "Mobile-first indexing",
            "Core Web Vitals improvement",
            "XML sitemaps and robots.txt",
        ],
    },
    {
        title: "Content SEO",
        description: "High-quality content that ranks and converts",
        features: [
            "Keyword research and strategy",
            "Content creation and optimization",
            "Blog post writing",
            "Landing page optimization",
        ],
    },
]

const timeline = [
    { month: "Month 1", focus: "SEO Audit & Strategy", description: "Complete website analysis and keyword research" },
    {
        month: "Month 2-3",
        focus: "Technical Optimization",
        description: "Fix technical issues and optimize site structure",
    },
    { month: "Month 4-6", focus: "Content & Links", description: "Create optimized content and build quality backlinks" },
    { month: "Month 6+", focus: "Results & Growth", description: "See significant improvements in rankings and traffic" },
]

export default function SEOServicesPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            <section className="py-20 bg-gradient-to-br from-accent/20 via-background to-primary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-primary">SEO Services</span> That Get Your SWFL Business Found on Google
                        </h1>
                        <p className="text-xl text-muted-foreground text-balance mb-8">
                            Stop losing customers to competitors. Our proven SEO strategies help Southwest Florida businesses rank
                            higher, get more traffic, and increase sales.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Get Free SEO Audit
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="bg-transparent">
                                <Link href="/contact">Schedule Consultation</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SEO Services</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Comprehensive SEO solutions designed to get your business found by customers in Southwest Florida.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {seoServices.map((service, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl flex items-center gap-2">
                                        <Search className="h-5 w-5 text-primary" />
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-base">{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-sm">
                                                <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">SEO Timeline: What to Expect</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            SEO is a long-term investment. Here&#39;s our proven process and when you can expect to see results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {timeline.map((phase, index) => (
                            <Card key={index} className="text-center">
                                <CardHeader>
                                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <Clock className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg">{phase.month}</CardTitle>
                                    <CardDescription className="font-semibold text-primary">{phase.focus}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Dominate Google in SWFL?</h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Get a free SEO audit and see exactly how we can improve your search rankings and drive more customers to
                            your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                            <Button size="lg" asChild>
                                <Link href="/contact">Get Free SEO Audit</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="bg-transparent">
                                <Link href="/contact">Schedule Consultation</Link>
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Starting at $1,200/month • No long-term contracts • Local SWFL experts
                        </p>
                    </Card>
                </div>
            </section>
            <FaqSection data={faqData}/>
            <Footer/>
        </main>
    )
}
const faqData: FaqData = {
    heading: "Frequently Asked Questions - SEO Services",
    subtitle:
        "Answers about our local SEO, AI SEO & GEO, technical optimization, content strategy, and monthly maintenance for Cape Coral, Fort Myers, and Naples.",
    cta: {
        text: "Contact Us Today",
        href: "/contact",
    },
    items: [
        {
            q: "How long until I see SEO results?",
            a: [
                "Weeks 1 to 4: We complete a full SEO audit, keyword research, and technical setup while fixing foundational issues.",
                "Weeks 5 to 8: You’ll start to see early movement from faster site performance and better indexing for long-tail and local searches.",
                "Months 3 to 4: Noticeable progress as rankings improve for core services and your Google Business Profile gains traction.",
                "Months 5 to 6: Consistent traffic growth and higher-quality leads as optimized content, backlinks, and citations build authority.",
                "After 6 months: Ongoing growth as domain authority strengthens. Timelines depend on your industry and competition.",
                "Some lower-competition keywords can rank faster, while broader or more competitive searches may take longer to see strong results."
            ],
        },
        {
            q: "What’s included in Local SEO for Cape Coral, Fort Myers, and Naples?",
            a: [
                "Google Business Profile (GBP) optimization and posting",
                "Local citations (name, address, phone) and data consistency",
                "Review strategy and response frameworks",
                "Location/service-page build-out targeting local keywords"
            ],
        },
        {
            q: "What is AI SEO & GEO and how does it help?",
            a: [
                "AI-powered content briefs and on-page optimization",
                "Generative Engine Optimization (GEO) for AI-overviews/answers",
                "Featured snippet and entity optimization with schema",
                "Voice-search and conversational query alignment"
            ],
        },
        {
            q: "What technical SEO work do you handle?",
            a: [
                "Core Web Vitals and site speed improvements",
                "Mobile-first indexing readiness and crawlability",
                "XML sitemaps, robots.txt, canonicalization, redirects",
                "Structured data (schema) for services, local business, FAQs"
            ],
        },
        {
            q: "Do you create content or just recommend it?",
            a: "We do both. We map keywords to pages, write or optimize landing pages and blogs, and align content to search intent so it ranks and converts.",
        },
        {
            q: "Do you build backlinks?",
            a: "Yes, ethically and quality-first. We prioritize local citations, partnerships, digital PR, and linkable assets. No spammy or paid link schemes.",
        },
        {
            q: "Will you manage my Google Business Profile (GBP)?",
            a: "Yes. We optimize your GBP categories, services, descriptions, photos, Q&A, and post regularly. We also guide review generation to improve map-pack visibility.",
        },
        {
            q: "How do you report progress and ROI?",
            a: [
                "Monthly report with keyword movements, traffic, leads/conversions",
                "Looker Studio dashboard tied to GA4 and Search Console",
                "Call tracking and form attribution (optional)",
                "Action list for the next sprint"
            ],
        },
        {
            q: "Can you fix penalties or recover from traffic drops?",
            a: "We diagnose technical issues, content quality, and link risks. Then we implement a recovery plan focusing on EEAT signals, content refinement, and safe link remediation.",
        },
        {
            q: "Do you work with e-commerce and lead-gen sites?",
            a: "Yes. We tailor strategy for both, product/category SEO and faceted navigation for e-commerce; service pages, funnels, and local intent for lead-gen.",
        },
        {
            q: "What are your SEO prices and terms?",
            a: "Monthly plans start at $1,200/month. No long-term contracts. We scope deliverables based on your market, goals, and timeline.",
        },
        {
            q: "Do you only work with Southwest Florida businesses?",
            a: "Our focus is SWFL (Cape Coral, Fort Myers, Naples), but we work with businesses across Florida and the U.S. that want a local-first, results-driven approach.",
        },
        {
            q: "What do you need from me to get started?",
            a: [
                "Access to your site/host or CMS",
                "GA4 and Google Search Console access",
                "Google Business Profile manager access",
                "Brand guidelines, services list, and priority locations"
            ],
        },
        {
            q: "Can you guarantee #1 rankings?",
            a: "No one can guarantee rankings. We focus on best practices, technical excellence, content quality, local signals, and ethical links, to earn durable results over time.",
        }
    ],
};
