import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, TrendingUp, ShoppingCart, Search } from "lucide-react"

export function LocalHeroSection() {
    const services = [
        {
            icon: ShoppingCart,
            title: "Ecommerce Website Development",
            description: "Full-featured online stores with secure checkout and inventory management",
        },
        {
            icon: Search,
            title: "SEO & GEO Services",
            description: "Get found by local customers searching for products you sell",
        },
        {
            icon: TrendingUp,
            title: "Custom Website Design",
            description: "Unique, branded websites that convert visitors into customers",
        },
    ]

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                        Looking for Web Developers Near You in Southwest Florida?
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                        At Sunset Vista Co, we specialize in <strong className="text-foreground">custom website design</strong>,{" "}
                        <strong className="text-foreground">ecommerce website development</strong>, and{" "}
                        <strong className="text-foreground">SEO services</strong> built to grow small businesses in Cape Coral, Fort
                        Myers, and Naples. Whether you need an{" "}
                        <strong className="text-foreground">affordable website design</strong> for a local shop or a fully optimized
                        ecommerce site, our expert team is right here in SWFL — ready to help you get found, convert more visitors,
                        and grow your business online.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground">
                        Trusted across Southwest Florida for{" "}
                        <strong className="text-foreground">small business website design</strong> that delivers results
                    </p>
                </div>
            </div>
        </section>
    )
}
