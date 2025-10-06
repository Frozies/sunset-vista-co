import { Navigation } from "@/components/v2/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, Smartphone, Zap, Search, CheckCircle, ArrowRight } from "lucide-react"
import {Footer} from "@/components/v2/footer";
import FaqSection, {FaqData} from "@/components/v2/faq-section";
import type { Metadata } from "next"

export const metadata: Metadata = {
    metadataBase: new URL("https://sunsetvista.co"),
    title: "Web Design and Development in SWFL | Cape Coral, Fort Myers, Naples",
    description:
        "Mobile first, fast loading, conversion focused websites for Southwest Florida. Custom web design, WordPress and Shopify builds, Core Web Vitals, on page SEO, and analytics setup for businesses in Cape Coral, Fort Myers, and Naples.",
    keywords: [
        // Geo + service intent
        "SWFL web design",
        "Cape Coral web design",
        "Fort Myers web design",
        "Naples web design",
        "Local web design Southwest Florida",
        "web developers near me",
        "web design services near me",

        // High volume service keywords aligned to this page
        "custom website design",
        "small business website design",
        "affordable website design",
        "website development SWFL",
        "wordpress web design",
        "wordpress seo services",
        "shopify developer Cape Coral",
        "woocommerce setup Naples",
        "ecommerce website development",
        "conversion focused web design",

        // Features from the page
        "mobile first responsive design",
        "fast loading websites",
        "core web vitals",
        "technical seo",
        "schema markup",
        "meta tags optimization",
        "google analytics setup",
        "google search console setup",
        "performance monitoring",
        "content management systems",

        // Outcomes
        "lead generating websites",
        "website conversion optimization"
    ],
    applicationName: "Sunset Vista Co",
    authors: [{ name: "Sunset Vista Co", url: "https://sunsetvista.co" }],
    creator: "Davin Young",
    publisher: "Sunset Vista Co LLC",
    robots: {
        index: true,
        follow: true
    },
    alternates: {
        canonical: "https://www.sunsetvista.co/services/web-design"
    },
    openGraph: {
        title: "Web Design and Development in SWFL | Cape Coral, Fort Myers, Naples",
        description:
            "Professional, fast, SEO ready websites for Southwest Florida. Custom WordPress and Shopify builds, Core Web Vitals, local SEO, and analytics to help your business convert more visitors.",
        url: "https://sunsetvista.co/services/web-design",
        siteName: "Sunset Vista Co",
        images: [
            {
                url: "https://sunsetvista.co/og-image.png",
                width: 1200,
                height: 630,
                alt: "Sunset Vista Co web design services for SWFL"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Design and Development in SWFL | Cape Coral, Fort Myers, Naples",
        description:
            "Mobile first, fast loading, SEO ready websites for Cape Coral, Fort Myers, and Naples. Get a free website quote.",
        images: ["https://sunsetvista.co/og-image.png"],
        creator: "@sunsetvistaco"
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/apple-icon.png",
        apple: "/apple-icon.png",
        other: [{ rel: "manifest", url: "/manifest.json" }]
    },
    category: "business"
}

const designFeatures = [
    {
        icon: Smartphone,
        title: "Mobile-First Design",
        description: "Your website will look perfect on phones, tablets, and desktops",
        features: ["Responsive design", "Touch-friendly navigation", "Fast mobile loading", "Mobile SEO optimized"],
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Fast websites rank better and convert more visitors into customers",
        features: ["Optimized images", "Clean code", "Fast hosting", "Performance monitoring"],
    },
    {
        icon: Search,
        title: "SEO Ready",
        description: "Built with search engines in mind to help you get found online",
        features: ["SEO-friendly structure", "Meta tags optimization", "Schema markup", "Google Analytics ready"],
    },
    {
        icon: Globe,
        title: "Modern & Professional",
        description: "Clean, modern designs that build trust and credibility",
        features: ["Professional aesthetics", "User-friendly navigation", "Conversion-focused", "Brand consistency"],
    },
]

const process = [
    { step: "1", title: "Discovery", description: "We learn about your business, goals, and target customers" },
    { step: "2", title: "Design", description: "Create mockups and get your approval before development" },
    { step: "3", title: "Development", description: "Build your website with clean code and best practices" },
    { step: "4", title: "Launch", description: "Test everything, train your team, and launch your new site" },
]

export default function WebDesignPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            <section className="py-20 bg-gradient-to-br from-accent/20 via-background to-primary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-primary">Web Design & Development</span> for Southwest Florida Businesses
                        </h1>
                        <p className="text-xl text-muted-foreground text-balance mb-8">
                            Professional, fast-loading websites that convert visitors into customers. Built for Cape Coral, Fort
                            Myers, and Naples businesses that want to grow online.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Get Free Website Quote
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Our Websites Different</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We don&#39;t just make pretty websites. We build conversion machines that help your business grow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {designFeatures.map((feature, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <feature.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                                    </div>
                                    <CardDescription className="text-base">{feature.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {feature.features.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-center text-sm">
                                                <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                                {item}
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web Design Process</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            From concept to launch, we make the process simple and stress-free for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {process.map((phase, index) => (
                            <Card key={index} className="text-center">
                                <CardHeader>
                                    <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4 font-bold text-lg">
                                        {phase.step}
                                    </div>
                                    <CardTitle className="text-lg">{phase.title}</CardTitle>
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Your Business Needs a Professional Website</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Build Trust & Credibility</h3>
                                        <p className="text-sm text-muted-foreground">
                                            73% of customers judge a business by its website design
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Generate More Leads</h3>
                                        <p className="text-sm text-muted-foreground">Convert website visitors into paying customers 24/7</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Compete with Bigger Companies</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Level the playing field with professional online presence
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Save Time & Money</h3>
                                        <p className="text-sm text-muted-foreground">Automate customer inquiries and reduce manual work</p>
                                    </div>
                                </div>
                            </div>
                            <Button size="lg" asChild>
                                <Link href="/contact">Get Your Website Quote</Link>
                            </Button>
                        </div>
                        <Card className="p-8">
                            <h3 className="text-2xl font-bold mb-6 text-center">Website Package</h3>
                            <div className="text-center mb-6">
                                <div className="text-4xl font-bold text-primary mb-2">Starting at $2,500</div>
                                <p className="text-muted-foreground">Complete website design & development</p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    Custom responsive design
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    Up to 10 pages
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    SEO optimization
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    Contact forms
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    Google Analytics setup
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    30 days free support
                                </li>
                            </ul>
                            <Button asChild className="w-full">
                                <Link href="/contact">Get Started Today</Link>
                            </Button>
                        </Card>
                    </div>

                </div>

            </section>

            <FaqSection data={faqData}/>
            <Footer />
        </main>
    )
}



const faqData: FaqData = {
    heading:
        "Frequently Asked Questions - Web Design & SEO",
    subtitle:
        "Answers about our affordable small-business websites, local SEO, and maintenance plans.",
    cta: {
        text: "Contact Us Today",
        href: "/contact",
    },
    items: [
        {
            q: "How long does it take to build my website in Cape Coral / Fort Myers / Naples?",
            a: "Most small business websites take 3–6 weeks from start to finish. We build fast, mobile-friendly sites optimized for local SEO so your business in Cape Coral, Fort Myers, or Naples can start ranking and generating leads quickly.",
        },
        {
            q: "What’s included in the $2,500 small-business website package?",
            a: [
                "A custom, mobile-first design",
                "Up to 10 pages of content",
                "SEO optimization (keywords, structure, speed)",
                "Contact and lead forms",
                "Google Analytics setup",
                "Google Search Console setup",
                "Facebook Pixels",
                "30 days of free support after launch",
                "Built to boost website traffic and conversions for Southwest Florida businesses",
            ],
        },
        {
            q: "Can you provide content and images, or do I need to?",
            a: "We can do both. You can provide your own copy, or we can write SEO-friendly content tailored to your industry and customers. We also handle images, branding, and on-page SEO so your site appears on Google faster.",
        },
        {
            q: 'Will my website rank on Google for local searches (e.g., "web designers near me")?',
            a: "We set up everything needed to rank locally, technical SEO, fast performance, on-page optimization, and local schema, and we guide your Google Business Profile and content plan. Rankings depend on competition and ongoing SEO (content, citations, reviews, links), so while no one can guarantee #1 results, our process is designed to earn and improve local visibility over time."
        },
        {
            q: "What if I already have a website ,  can you fix my website SEO and speed?",
            a: "We specialize in website redesigns and SEO repairs. Whether your site is outdated or underperforming, we’ll improve speed, Core Web Vitals, and on-page SEO to help you rank better on Google.",
        },
        {
            q: "Do you offer monthly website maintenance and SEO tracking?",
            a: "Yes. We offer monthly maintenance plans that cover updates, backups, uptime/security checks, and SEO tracking. Many clients use these plans to continuously improve performance and traffic growth.",
        },
        {
            q: "Can I edit my website myself after it’s live (WordPress, Shopify, or React CMS)?",
            a: "Absolutely. We use easy-to-manage platforms so you can edit pages, photos, and blog posts without coding.",
        },
        {
            q: "What makes your web design different from cheap website builders?",
            a: "Unlike template-only options, our sites are built to convert: fast load times, mobile usability, clear calls-to-action, and SEO best practices that help you rank and earn trust.",
        },
        {
            q: "Do you only work with Southwest Florida businesses?",
            a: "While most clients are local to Cape Coral, Fort Myers, and Naples, we also build websites for businesses across Florida and the U.S.",
        },
        {
            q: "How do I get started ,  free website quote or consultation?",
            a: "Schedule a consultation or request a free website quote. We’ll review your goals, check your website’s SEO performance, and outline the best plan to build or boost results.",
        },
    ],
};