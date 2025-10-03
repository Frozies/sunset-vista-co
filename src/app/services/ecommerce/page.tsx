import { Navigation } from "@/components/v2/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingCart, CreditCard, Users, BarChart3, CheckCircle, ArrowRight } from "lucide-react"
import {Footer} from "@/components/v2/footer";

const ecommerceServices = [
    {
        icon: ShoppingCart,
        title: "Shopify Store Development",
        description: "Complete Shopify store setup and customization",
        features: ["Custom theme design", "Product catalog setup", "Payment processing", "Inventory management"],
    },
    {
        icon: CreditCard,
        title: "WooCommerce Solutions",
        description: "WordPress-based e-commerce with full control",
        features: ["WordPress integration", "Custom functionality", "Payment gateways", "Shipping configuration"],
    },
    {
        icon: Users,
        title: "Training & Support",
        description: "Learn to manage your store like a pro",
        features: ["Staff training sessions", "Video tutorials", "Ongoing support", "Best practices guide"],
    },
    {
        icon: BarChart3,
        title: "E-commerce Optimization",
        description: "Maximize sales and conversion rates",
        features: ["Conversion optimization", "A/B testing", "Analytics setup", "Performance monitoring"],
    },
]

const platforms = [
    {
        name: "Shopify",
        description: "Perfect for businesses that want an easy-to-use, all-in-one solution",
        pros: ["Easy to use", "Built-in payments", "App ecosystem", "Reliable hosting"],
        bestFor: "Small to medium businesses, first-time sellers",
    },
    {
        name: "WooCommerce",
        description: "Ideal for businesses that want full control and customization",
        pros: ["Full customization", "WordPress integration", "No transaction fees", "Extensive plugins"],
        bestFor: "Businesses with existing WordPress sites, custom requirements",
    },
]

export default function EcommercePage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            <section className="py-20 bg-gradient-to-br from-accent/20 via-background to-primary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-primary">E-Commerce Solutions</span> for Southwest Florida Businesses
                        </h1>
                        <p className="text-xl text-muted-foreground text-balance mb-8">
                            Start selling online with a professional e-commerce store. We handle everything from setup to training, so
                            you can focus on growing your business in Cape Coral, Fort Myers, and Naples.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Get E-commerce Quote
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete E-Commerce Services</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            From store setup to ongoing optimization, we provide everything you need to succeed online.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {ecommerceServices.map((service, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your E-Commerce Platform</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We&#39;ll help you choose the right platform based on your business needs and goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {platforms.map((platform, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-center">{platform.name}</CardTitle>
                                    <CardDescription className="text-base text-center">{platform.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-6">
                                        <h4 className="font-semibold mb-3">Key Benefits:</h4>
                                        <ul className="space-y-2">
                                            {platform.pros.map((pro, proIndex) => (
                                                <li key={proIndex} className="flex items-center text-sm">
                                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                                    {pro}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mb-6">
                                        <h4 className="font-semibold mb-2">Best For:</h4>
                                        <p className="text-sm text-muted-foreground">{platform.bestFor}</p>
                                    </div>
                                    <Button asChild className="w-full">
                                        <Link href="/contact">Learn More About {platform.name}</Link>
                                    </Button>
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Your Business Needs E-Commerce</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Sell 24/7</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Your store never closes, generating sales while you sleep
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Reach More Customers</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Expand beyond your local area to serve customers anywhere
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Lower Operating Costs</h3>
                                        <p className="text-sm text-muted-foreground">Reduce overhead compared to traditional retail</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold mb-1">Track Everything</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Detailed analytics on sales, customers, and inventory
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Button size="lg" asChild>
                                <Link href="/contact">Start Your Online Store</Link>
                            </Button>
                        </div>
                        <Card className="p-8">
                            <h3 className="text-2xl font-bold mb-6 text-center">E-Commerce Package</h3>
                            <div className="text-center mb-6">
                                <div className="text-4xl font-bold text-primary mb-2">Starting at $3,500</div>
                                <p className="text-muted-foreground">Complete online store setup</p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    Platform setup (Shopify or WooCommerce)
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    Custom design and branding
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    Product catalog setup (up to 50 products)
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    Payment gateway integration
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    Shipping configuration
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    Staff training included
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
            <Footer/>
        </main>
    )
}
