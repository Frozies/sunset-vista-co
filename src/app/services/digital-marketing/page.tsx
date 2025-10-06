import { Navigation } from "@/components/v2/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Megaphone, Users, Mail, Target, CheckCircle, ArrowRight } from "lucide-react"
import {Footer} from "@/components/v2/footer";
import FaqSection, {FaqData} from "@/components/v2/faq-section";
import type { Metadata } from "next"

export const metadata: Metadata = {
    metadataBase: new URL("https://sunsetvista.co"),
    title: "Digital Marketing in SWFL | Google Ads, Facebook Ads, Email & Social",
    description:
        "Full funnel digital marketing for Southwest Florida. Google Ads (PPC), Facebook and Instagram ads, social media management, and email marketing with tracking and reporting for Cape Coral, Fort Myers, and Naples.",
    keywords: [
        // Geo + intent
        "SWFL digital marketing",
        "Cape Coral digital marketing",
        "Fort Myers digital marketing",
        "Naples digital marketing",
        "digital marketing agency SWFL",

        // High intent service terms aligned to page and your lists
        "google ads management",
        "ppc management",
        "facebook ads",
        "instagram ads",
        "social media management",
        "email marketing campaigns",
        "marketing automation",
        "conversion tracking",
        "remarketing",
        "performance tracking",
        "monthly reporting",
        "keyword research",
        "ad creation",
        "bid management",
        "audience targeting",
        "campaign optimization",
        "roi tracking",

        // Related ecommerce/lead gen support terms surfaced in your sheets
        "ecommerce marketing services",
        "build an online store",
        "shopify seo expert",

        // Outcomes
        "generate more leads",
        "increase brand awareness",
        "grow revenue"
    ],
    applicationName: "Sunset Vista Co",
    authors: [{ name: "Sunset Vista Co", url: "https://sunsetvista.co" }],
    creator: "Davin Young",
    publisher: "Sunset Vista Co LLC",
    robots: { index: true, follow: true },
    alternates: { canonical: "https://sunsetvista.co/services/digital-marketing" },
    openGraph: {
        title: "Digital Marketing in SWFL | Google Ads, Facebook Ads, Email & Social",
        description:
            "Social media management, email marketing, and paid ads that drive measurable results for Cape Coral, Fort Myers, and Naples.",
        url: "https://sunsetvista.co/services/digital-marketing",
        siteName: "Sunset Vista Co",
        images: [
            {
                url: "https://sunsetvista.co/og-image.png",
                width: 1200,
                height: 630,
                alt: "Sunset Vista Co digital marketing services for SWFL"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Digital Marketing in SWFL | Google Ads, Facebook Ads, Email & Social",
        description:
            "PPC, social ads, and email marketing with conversion tracking and monthly reporting for SWFL businesses.",
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
            <FaqSection data={faqData}/>
            <Footer/>
        </main>
    )
}
const faqData: FaqData = {
    heading: "Frequently Asked Questions — Digital Marketing",
    subtitle:
        "Answers about social media, email marketing, Google Ads, Facebook and Instagram ads, tracking, reporting, and budgets for Cape Coral, Fort Myers, and Naples.",
    cta: {
        text: "Get Marketing Strategy",
        href: "/contact",
    },
    items: [
        {
            q: "What channels do you manage?",
            a: [
                "Social: Facebook, Instagram, and basic TikTok support",
                "Search: Google Ads for search, Performance Max, and remarketing",
                "Email: Campaigns, automations, and list growth",
                "Content: Creative briefs, copy, and lightweight assets as needed"
            ]
        },
        {
            q: "How do you build the marketing strategy?",
            a: [
                "Week 1: Discovery, goals, audience, and competitor review",
                "Week 2: Channel plan, offers, creative angles, and budget split",
                "Week 3: Tracking plan, baseline metrics, and launch roadmap"
            ]
        },
        {
            q: "What is included in the $800 per month package?",
            a: [
                "Channel management for an agreed mix of social, email, or paid",
                "Monthly content calendar and campaign planning",
                "Basic creative and copy for ads and posts",
                "Performance tracking and monthly reporting with next steps",
                "Strategy consultation and recommendations"
            ]
        },
        {
            q: "Is ad spend included?",
            a: "No. Ad spend is billed directly to your ad accounts. We help set budgets and pacing so you stay efficient and in control."
        },
        {
            q: "How soon will I see results?",
            a: [
                "Weeks 2 to 4: First learnings and quick wins on engagement and CTR",
                "Months 2 to 3: Stable cost per lead or sale as targeting and creatives improve",
                "Months 4 to 6: Stronger ROAS and CPL as we scale what works and cut what does not"
            ]
        },
        {
            q: "How do you measure success?",
            a: [
                "Clear KPIs by channel: CTR, CPC, CPL, ROAS, list growth, and revenue",
                "Looker Studio dashboard connected to GA4 and ad platforms",
                "Monthly summary with actions for the next sprint"
            ]
        },
        {
            q: "Can you set up tracking and attribution?",
            a: [
                "GA4 events and conversions",
                "Meta pixel and Google Ads conversion tags",
                "UTM standards and lead source reporting",
                "Call tracking or form tracking if needed"
            ]
        },
        {
            q: "Do you write the content and design the creatives?",
            a: "Yes. We produce ad copy, captions, and lightweight graphics. For advanced video or brand shoots we can scope additional creative support."
        },
        {
            q: "Will you manage my email marketing too?",
            a: [
                "Yes. We set up templates, segments, automations, and broadcast campaigns",
                "We align email with ad offers and seasonal promotions",
                "We track open rate, CTR, revenue per send, and list health"
            ]
        },
        {
            q: "Can you run Google Ads and Facebook ads together?",
            a: "Yes. We coordinate search intent with social demand generation and remarketing. This improves overall ROAS and reduces wasted spend."
        },
        {
            q: "What do you need from me to start?",
            a: [
                "Brand assets, offers, and key services",
                "Access to ad accounts or help creating them",
                "Website or landing page access for tracking",
                "Any existing lists, audiences, and past reports"
            ]
        },
        {
            q: "Do you only work with Southwest Florida businesses?",
            a: "Our focus is SWFL, including Cape Coral, Fort Myers, and Naples. We also support clients across Florida and the United States."
        },
        {
            q: "Do I have to sign a long term contract?",
            a: "No. Engagements are month to month. You can adjust scope or pause based on seasonality and results."
        },
        {
            q: "Who owns the ad accounts and data?",
            a: "You do. We build everything inside your accounts so you keep all audiences, creatives, and performance history."
        }
    ]
};
