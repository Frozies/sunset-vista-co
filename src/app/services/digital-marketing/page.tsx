import { Navigation } from "@/components/v2/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Megaphone, Users, Mail, Target, CheckCircle, ArrowRight } from "lucide-react"
import {Footer} from "@/components/v2/footer";

const marketingServices = [
    {
        icon: Users,
        title: "Social Media Management",
        description: "Build your brand and engage customers on social platforms",
        features: ["Content creation", "Post scheduling", "Community management", "Social media advertising"],
    },
    {
        icon: Mail,
        title: "Email Marketing",
        description: "Stay connected with customers and drive repeat business",
        features: ["Email campaigns", "Automated sequences", "List building", "Performance tracking"],
    },
    {
        icon: Target,
        title: "Google Ads (PPC)",
        description: "Get immediate visibility and traffic with targeted ads",
        features: ["Keyword research", "Ad creation", "Bid management", "Conversion tracking"],
    },
    {
        icon: Megaphone,
        title: "Facebook & Instagram Ads",
        description: "Reach your ideal customers on social media",
        features: ["Audience targeting", "Creative development", "Campaign optimization", "ROI tracking"],
    },
]

const benefits = [
    {
        title: "Increase Brand Awareness",
        description: "Get your business in front of more potential customers in Southwest Florida",
    },
    {
        title: "Generate More Leads",
        description: "Turn social media followers and email subscribers into paying customers",
    },
    {
        title: "Build Customer Loyalty",
        description: "Keep customers engaged and coming back with regular communication",
    },
    {
        title: "Measurable Results",
        description: "Track exactly how your marketing efforts are driving business growth",
    },
]

export default function DigitalMarketingPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            <section className="py-20 bg-gradient-to-br from-accent/20 via-background to-primary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-primary">Digital Marketing</span> That Drives Real Results for SWFL Businesses
                        </h1>
                        <p className="text-xl text-muted-foreground text-balance mb-8">
                            From social media and email marketing to Google Ads and Facebook campaigns, we help Cape Coral, Fort
                            Myers, and Naples businesses connect with customers and grow their revenue.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Get Marketing Strategy
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Marketing Services</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Comprehensive digital marketing solutions to help your business reach more customers and increase sales.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {marketingServices.map((service, index) => (
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Digital Marketing Matters</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            In today&#39;s digital world, your customers are online. Here&#39;s how digital marketing helps your business
                            grow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="text-center p-6">
                                <CardContent className="pt-6">
                                    <h3 className="font-semibold text-lg mb-3">{benefit.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Digital Marketing Process</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Strategy Development</h3>
                                        <p className="text-sm text-muted-foreground">
                                            We analyze your business, competitors, and target audience to create a custom marketing strategy.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Campaign Creation</h3>
                                        <p className="text-sm text-muted-foreground">
                                            We create compelling content, ads, and campaigns designed to engage your target customers.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Launch & Monitor</h3>
                                        <p className="text-sm text-muted-foreground">
                                            We launch your campaigns and continuously monitor performance to ensure optimal results.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                                        4
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Optimize & Report</h3>
                                        <p className="text-sm text-muted-foreground">
                                            We provide detailed reports and continuously optimize campaigns for better results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Card className="p-8">
                            <h3 className="text-2xl font-bold mb-6 text-center">Digital Marketing Package</h3>
                            <div className="text-center mb-6">
                                <div className="text-4xl font-bold text-primary mb-2">Starting at $800/month</div>
                                <p className="text-muted-foreground">Comprehensive digital marketing</p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    Social media management
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    Email marketing campaigns
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    Content creation
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    Performance tracking
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    Monthly reporting
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                                    Strategy consultation
                                </li>
                            </ul>
                            <Button asChild className="w-full">
                                <Link href="/contact">Get Started Today</Link>
                            </Button>
                            <p className="text-xs text-muted-foreground text-center mt-4">
                                Ad spend not included • Custom packages available
                            </p>
                        </Card>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}
