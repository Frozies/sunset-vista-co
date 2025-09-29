import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, Globe, ShoppingCart, Megaphone, ArrowRight } from "lucide-react"

const services = [
    {
        icon: Search,
        title: "SEO Services",
        description: "Get found on Google with local SEO, AI SEO optimization, and PPC campaigns that actually work.",
        features: ["Local SEO", "AI SEO / GEO", "PPC Management", "Analytics & Reporting"],
        href: "/services/seo",
    },
    {
        icon: Globe,
        title: "Web Design & Development",
        description: "Fast, mobile-friendly websites that convert visitors into customers.",
        features: ["Mobile-First Design", "Fast Loading", "Modern & Clean", "SEO Optimized"],
        href: "/services/web-design",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce Solutions",
        description: "Complete online store setup with Shopify, WooCommerce, and payment processing.",
        features: ["Shopify Setup", "WooCommerce", "Payment Gateways", "Staff Training"],
        href: "/services/ecommerce",
    },
    {
        icon: Megaphone,
        title: "Digital Marketing",
        description: "Social media, email campaigns, and ads that drive real business results.",
        features: ["Social Media", "Email Marketing", "Google Ads", "Facebook Ads"],
        href: "/services/digital-marketing",
    },
]

export function ServicesOverview() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Succeed Online</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                        We speak plain English, not tech jargon. Here's how we help SWFL businesses grow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </div>
                                <CardDescription className="text-base">{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    variant="outline"
                                    asChild
                                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                                >
                                    <Link href={service.href}>
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button size="lg" asChild>
                        <Link href="/services">
                            View All Services
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
