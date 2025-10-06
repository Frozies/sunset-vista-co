import { Navigation } from "@/components/v2/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, Globe, ShoppingCart, Megaphone, ArrowRight, CheckCircle } from "lucide-react"
import {Footer} from "@/components/v2/footer";
import type { Metadata } from "next"

export const metadata: Metadata = {
    metadataBase: new URL("https://sunsetvista.co"),
    title: "SWFL SEO, Web Design & Ecommerce Experts",
    description:
        "Digital marketing services for Southwest Florida businesses. SEO, web design, and ecommerce builds that help Cape Coral, Fort Myers, and Naples grow with local search, AI GEO, Shopify and WooCommerce, PPC, analytics, and in person support.",
    keywords: [
        // Core services + geo
        "SWFL SEO",
        "SWFL web design",
        "SWFL ecommerce",
        "Cape Coral SEO",
        "Fort Myers SEO",
        "Naples FL SEO",
        "Local SEO Southwest Florida",
        "Southwest Florida",
        "Lee County FL",
        "Collier County FL",
        "Cape Coral",
        "Fort Myers",
        "Naples",

        // High volume service keywords aligned to this page
        "local seo services",
        "ecommerce seo services",
        "ai seo",
        "wordpress seo services",
        "seo for small business",
        "seo website audit",
        "web developers near me",
        "web design services near me",
        "custom website design",
        "small business website design",
        "affordable website design",
        "ecommerce website development",
        "ecommerce development company",
        "shopify seo expert",
        "hire shopify developer",
        "build an online store",
        "ecommerce marketing services",

        // Services list sections
        "mobile first responsive design",
        "fast loading websites",
        "technical seo",
        "keyword research and strategy",
        "google ads management",
        "ppc management",
        "facebook and instagram ads",
        "email marketing campaigns",
        "analytics and reporting",
        "content management systems",
        "payment gateway integration",
        "product catalog optimization",
        "staff training"
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
        canonical: "https://sunsetvista.co/services"
    },
    openGraph: {
        title: "Sunset Vista Co | SWFL SEO, Web Design & Ecommerce Experts",
        description:
            "SEO, web design, ecommerce, and digital marketing for Cape Coral, Fort Myers, and Naples. Local SEO, AI GEO, Shopify and WooCommerce builds, PPC, analytics, and measurable growth.",
        url: "https://sunsetvista.co/services",
        siteName: "Sunset Vista Co",
        images: [
            {
                url: "https://sunsetvista.co/og-image.png",
                width: 1200,
                height: 630,
                alt: "Sunset Vista Co services in SEO, Web Design, and Ecommerce for SWFL"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Sunset Vista Co | SWFL SEO, Web Design & Ecommerce Experts",
        description:
            "SWFL businesses get SEO, web design, ecommerce, PPC, and analytics support from Sunset Vista Co.",
        images: ["https://sunsetvista.co/og-image.png"],
        creator: "@sunsetvistaco"
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/icon1.png",
        apple: "/apple-icon.png",
        other: [{ rel: "manifest", url: "/manifest.json" }]
    },
    category: "business"
}

const services = [
    {
        icon: Search,
        title: "SEO Services",
        description: "Dominate Google search results in Cape Coral, Fort Myers, and Naples with our proven SEO strategies.",
        features: [
            "Local SEO optimization",
            "AI SEO & Generative Engine Optimization",
            "Google Ads & PPC management",
            "Analytics and reporting",
            "Keyword research and strategy",
            "On-page and technical SEO",
        ],
        href: "/services/seo",
        price: "Starting at $1,200/month",
    },
    {
        icon: Globe,
        title: "Web Design & Development",
        description: "Professional, fast-loading websites that convert visitors into customers and rank well on Google.",
        features: [
            "Mobile-first responsive design",
            "Fast loading speeds",
            "SEO-optimized structure",
            "Modern, clean aesthetics",
            "Content management systems",
        ],
        href: "/services/web-design",
        price: "Starting at $2,500",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce Solutions",
        description: "Complete online store setup and optimization to start selling online and increase revenue.",
        features: [
            "Shopify store development",
            "WooCommerce setup",
            "Payment gateway integration",
            "Product catalog optimization",
            "Staff training included",
            "Ongoing support and maintenance",
        ],
        href: "/services/ecommerce",
        price: "Starting at $3,500",
    },
    {
        icon: Megaphone,
        title: "Digital Marketing",
        description: "Comprehensive digital marketing campaigns that drive traffic, leads, and sales for your business.",
        features: [
            "Social media management",
            "Email marketing campaigns",
            "Google Ads management",
            "Facebook & Instagram ads",
            "Content creation",
            "Performance tracking and optimization",
        ],
        href: "/services/digital-marketing",
        price: "Starting at $800/month",
    },
]

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            <section className="py-20 bg-gradient-to-br from-accent/20 via-background to-primary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Digital Marketing Services for <span className="text-primary">Southwest Florida</span> Businesses
                        </h1>
                        <p className="text-xl text-muted-foreground text-balance mb-8">
                            From SEO and web design to e-commerce and digital marketing, we provide everything Cape Coral, Fort Myers,
                            and Naples businesses need to succeed online.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/contact">
                                Get Your Free Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 bg-primary/10 rounded-lg">
                                            <service.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-2xl">{service.title}</CardTitle>
                                            <p className="text-primary font-semibold">{service.price}</p>
                                        </div>
                                    </div>
                                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 mb-6">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start">
                                                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
                                        <Link href={service.href}>
                                            Learn More & Get Quote
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Schedule a free consultation to discuss your business goals and get a custom quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Schedule Free Consultation</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="bg-transparent">
                            <Link href="/contact">Get Free SEO Audit</Link>
                        </Button>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
