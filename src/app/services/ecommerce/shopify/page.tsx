import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
    ShoppingCart,
    Zap,
    TrendingUp,
    BarChart3,
    Smartphone,
    Settings,
    Search,
    Package,
    Headphones,
    Layers,
} from "lucide-react"
import { Navigation } from "@/components/v2/navigation"
import {Footer} from "@/components/v2/footer";

export const metadata: Metadata = {
    title: "Shopify Ecommerce Developer in Fort Myers",
    description:
        "Build a high-performing Shopify online store with Sunset Vista Co. Local experts in Fort Myers, Cape Coral, and Naples. Custom design, SEO, and integrations.",
    openGraph: {
        title: "Shopify Ecommerce Developer in Fort Myers",
        description:
            "Launch your Shopify online store with Southwest Florida experts. Custom design, SEO, speed, and multi-channel integrations that grow revenue.",
        url: "https://sunsetvista.co/services/shopify",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
}

const services = [
    {
        icon: Layers,
        title: "Custom Shopify Theme Design",
        description: "Custom theme design and development tailored to your brand identity and business goals.",
    },
    {
        icon: ShoppingCart,
        title: "Complete Shopify Setup",
        description: "Full ecommerce setup including navigation, collections, variants, tags, and product organization.",
    },
    {
        icon: Search,
        title: "SEO Fundamentals",
        description:
            "Information architecture, titles, meta descriptions, headings, and structured data for search visibility.",
    },
    {
        icon: Zap,
        title: "Speed Optimization",
        description: "Core Web Vitals optimization and faster checkout experience for better conversions.",
    },
    {
        icon: Package,
        title: "Product Catalog Management",
        description: "Product upload and organization with image alt text, schema markup, and proper categorization.",
    },
    {
        icon: Settings,
        title: "App Integrations",
        description: "Email marketing, reviews, shipping, subscriptions, and inventory management integrations.",
    },
    {
        icon: BarChart3,
        title: "Analytics & Tracking",
        description: "GA4, Search Console, and Meta Pixel setup with conversion tracking and ecommerce events.",
    },
    {
        icon: Smartphone,
        title: "Shopify POS Configuration",
        description: "Point of sale and checkout setup for in-store and mobile selling capabilities.",
    },
    {
        icon: TrendingUp,
        title: "Custom Functionality",
        description: "Enhanced UX features and custom functionality without compromising site speed.",
    },
    {
        icon: Headphones,
        title: "Training & Support",
        description: "Comprehensive training, documentation, and ongoing support plans for your team.",
    },
]

const integrations = [
    {
        title: "Google Commerce",
        description: "Google Merchant Center product feed setup and optimization for Shopping Ads.",
    },
    {
        title: "Meta Commerce",
        description: "Facebook and Instagram Shop with product sync and catalog management.",
    },
    {
        title: "TikTok Shop",
        description: "Shoppable video integration and creator-led product discovery.",
    },
    {
        title: "Amazon Integration",
        description: "Manage listings, pricing, and inventory from your Shopify admin.",
    },
]

const benefits = [
    "Easy to manage with clear menus, reusable sections, and simple product updates",
    "Mobile optimized layouts for shoppers on phones and tablets",
    "Built-in automation for inventory sync, order routing, and dynamic product ads",
    "Data you can use with dashboards for traffic, conversion, and revenue",
    "Professional design that builds trust and increases average order value",
    "Scalable foundation that supports new products, locations, and sales channels",
]

const testimonials = [
    {
        quote: "In the first month after our Shopify refresh, website traffic increased 25% and more customers are discovering our pieces online.",
        author: "Zak's Jewelry",
        location: "Cape Coral",
    },
    {
        quote: "After optimizing our website and syncing our sales channels, we saw 15% more sales with clearer analytics and faster checkout.",
        author: "Petal Patch Florist",
        location: "Cape Coral",
    }
]


const faqs = [
    {
        question: "How much does it cost to build a Shopify ecommerce website?",
        answer:
            "Most small business stores start between $2,000 and $7,000 depending on design complexity, catalog size, and integrations needed.",
    },
    {
        question: "Can you connect my Shopify store to Facebook, Instagram, and Google?",
        answer:
            "Yes. We configure Meta Commerce and Google Merchant Center, verify your domain, and sync your product catalog across all platforms.",
    },
    {
        question: "Do you help with product uploads or only design?",
        answer:
            "We do both. We can write SEO-ready product titles and descriptions, and add tags, variants, and collections to organize your catalog.",
    },
    {
        question: "How do I set up Google Merchant Center with Shopify?",
        answer:
            "We verify your domain, connect the product feed, fix any disapprovals, and optimize product attributes for Shopping Ads.",
    },
    {
        question: "Can I track analytics and conversions across all channels?",
        answer:
            "Yes. We set up GA4, Search Console, and Meta Pixel with conversions and ecommerce events that match your sales funnel.",
    },
    {
        question: "Will my Shopify site be mobile friendly?",
        answer: "Yes. Every build is responsive and optimized for fast loading and smooth checkout on mobile devices.",
    },
    {
        question: "Do you offer SEO for Shopify online stores?",
        answer:
            "Yes. We implement technical SEO, structured data, content mapping, and speed improvements that help you rank in search results.",
    },
    {
        question: "Can you migrate my current site to Shopify?",
        answer:
            "Yes. We migrate from WooCommerce, WordPress, Wix, or Squarespace including products, collections, customers, and URL redirects.",
    },
    {
        question: "Do you provide training?",
        answer:
            "Yes. We provide local onboarding and documentation so your team can manage pages, products, discounts, and apps confidently.",
    },
    {
        question: "Do you offer ongoing support?",
        answer: "Yes. Maintenance plans include updates, monitoring, issue resolution, and quarterly performance reviews.",
    },
]

export default function ShopifyPage() {
    return (
        <main className="min-h-screen">
            <Navigation/>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "@id": "https://sunsetvista.co/#shopify-service",
                        serviceType: "Shopify Ecommerce Development",
                        provider: {
                            "@type": "ProfessionalService",
                            name: "Sunset Vista Co",
                            url: "https://sunsetvista.co/",
                        },
                        areaServed: ["Fort Myers FL", "Cape Coral FL", "Naples FL", "Bonita Springs FL", "Southwest Florida"],
                        audience: {
                            "@type": "Audience",
                            audienceType: "Small and medium business owners",
                        },
                        offers: {
                            "@type": "AggregateOffer",
                            priceCurrency: "USD",
                            lowPrice: "2000",
                            highPrice: "7000",
                            availability: "https://schema.org/InStock",
                        },
                        termsOfService: "https://sunsetvista.co/terms",
                        description:
                            "Custom Shopify online store builds and improvements for small businesses, including SEO, speed optimization, analytics, and sales channel integrations.",
                        brand: {
                            "@type": "Brand",
                            name: "Sunset Vista Co",
                        },
                        additionalType: "https://schema.org/WebDevelopment",
                        category: [
                            "Shopify web development",
                            "Shopify ecommerce",
                            "Shopify online store setup",
                            "Shopify SEO",
                            "Shopify speed optimization",
                            "Google Merchant Center integration",
                            "Meta Commerce integration",
                            "TikTok Shop integration",
                            "Amazon marketplace integration",
                        ],
                    }),
                }}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                            Southwest Florida Shopify Ecommerce Experts
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
                            Launch a high-converting Shopify online store designed for growth in Fort Myers, Cape Coral, Naples, and
                            Bonita Springs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">Book Free Consultation</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/website-audit">Get Free Store Audit</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
                        <p className="text-lg text-muted-foreground text-balance">
                            We build fast, modern, search-optimized Shopify ecommerce websites that are easy to manage and ready to
                            scale. From custom design and speed optimization to analytics and sales channel integrations, we turn
                            browsers into buyers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            What Shopify Ecommerce Development Means for Your Business
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p className="mb-4">
                                Your website is your primary storefront. Shopify is a powerful foundation, but small businesses need
                                more than a template. Our service focuses on performance, SEO, conversion, and automation so your
                                Shopify online store is simple to run and built to grow with you.
                            </p>
                            <p>
                                We handle complete setup, custom theme work, structured SEO, product organization, analytics, and
                                multi-channel integrations across Google Commerce, Meta Commerce, TikTok Shop, and Amazon.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features and Services */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Features and Services</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                                    <CardHeader>
                                        <service.icon className="h-10 w-10 text-primary mb-3" />
                                        <h3 className="text-xl font-semibold">{service.title}</h3>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">{service.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Sell Everywhere Your Customers Shop</h2>
                        <p className="text-lg text-muted-foreground mb-12 text-center text-balance">
                            All integrations are configured for accurate tracking, reliable syncing, and a single source of truth in
                            your Shopify admin.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {integrations.map((integration, index) => (
                                <Card key={index} className="border-border/50">
                                    <CardHeader>
                                        <h3 className="text-xl font-semibold">{integration.title}</h3>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{integration.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Benefits for Small Businesses</h2>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                    </div>
                                    <span className="text-muted-foreground">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <Card key={index} className="border-border/50">
                                    <CardContent className="pt-6">
                                        <p className="text-muted-foreground mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                                        <div className="text-sm">
                                            <p className="font-semibold">{testimonial.author}</p>
                                            <p className="text-muted-foreground">{testimonial.location}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Launch or Upgrade Your Shopify Ecommerce Store?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 text-balance">
                            Book a free Shopify online store consultation and audit. We&apos;ll identify the quickest wins for
                            visibility, speed, and conversions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Button size="lg" asChild>
                                <Link href="/contact">Book Free Consultation</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="tel:+1234567890">Call Us Today</Link>
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Email:{" "}
                            <a href="mailto:info@sunsetvista.co" className="text-primary hover:underline">
                                info@sunsetvista.co
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left">
                                        <h3 className="text-lg font-semibold">{faq.question}</h3>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}
