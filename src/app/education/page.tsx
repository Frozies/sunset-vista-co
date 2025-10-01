import { Navigation } from "@/components/v2/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Search, Globe, Megaphone, ArrowRight, GraduationCap } from "lucide-react"
import {Footer} from "@/components/v2/footer";

const educationalPages = [
    {
        icon: Search,
        title: "What SEO Can Do for You",
        description: "Learn how search engine optimization helps your business get found by customers searching online.",
        topics: [
            "How Google decides which websites to show",
            "Why your business needs to be on the first page",
            "Local SEO for Southwest Florida businesses",
            "Common SEO mistakes to avoid",
        ],
        href: "/education/what-seo-can-do",
    },
    {
        icon: Globe,
        title: "What Web Design Can Do for You",
        description: "Discover how professional web design builds trust, generates leads, and grows your business.",
        topics: [
            "Why first impressions matter online",
            "How design affects customer trust",
            "Mobile-friendly websites and why they matter",
            "Converting visitors into customers",
        ],
        href: "/education/what-web-design-can-do",
    },
    {
        icon: Megaphone,
        title: "What Digital Marketing Can Do for You",
        description: "Understand how digital marketing helps you reach more customers and increase sales.",
        topics: [
            "Social media marketing basics",
            "Email marketing that works",
            "Google Ads vs. Facebook Ads",
            "Measuring your marketing success",
        ],
        href: "/education/what-digital-marketing-can-do",
    },
]

export default function EducationPage() {
    return (
        <main className="min-h-screen">
            <Navigation />

            <section className="py-20 bg-gradient-to-br from-accent/20 via-background to-primary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Learn How <span className="text-primary">Digital Marketing</span> Can Grow Your Business
                        </h1>
                        <p className="text-xl text-muted-foreground text-balance mb-8">
                            No confusing jargon here. We explain digital marketing in plain English so you can make informed decisions
                            about your business&#39;s online presence.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/education/glossary">
                                View Marketing Glossary
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational Guides</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Learn the basics of digital marketing and how each service can help your Southwest Florida business grow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {educationalPages.map((page, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 bg-primary/10 rounded-lg">
                                            <page.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">{page.title}</CardTitle>
                                    </div>
                                    <CardDescription className="text-base leading-relaxed">{page.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-6">
                                        <h4 className="font-semibold mb-3 text-sm">You&#39;ll Learn:</h4>
                                        <ul className="space-y-2">
                                            {page.topics.map((topic, topicIndex) => (
                                                <li key={topicIndex} className="flex items-start text-sm">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Button
                                        variant="outline"
                                        asChild
                                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                                    >
                                        <Link href={page.href}>
                                            Read Guide
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
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <Card className="p-8 md:p-12">
                            <BookOpen className="h-12 w-12 text-primary mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Marketing Glossary</h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Confused by marketing terms? Our glossary explains common digital marketing words in simple language.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
                                <div className="text-left">
                                    <div className="font-semibold">SEO</div>
                                    <div className="font-semibold">PPC</div>
                                    <div className="font-semibold">CTA</div>
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold">Keywords</div>
                                    <div className="font-semibold">Analytics</div>
                                    <div className="font-semibold">Conversion</div>
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold">Backlinks</div>
                                    <div className="font-semibold">ROI</div>
                                    <div className="font-semibold">CTR</div>
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold">Landing Page</div>
                                    <div className="font-semibold">Organic Traffic</div>
                                    <div className="font-semibold">And more...</div>
                                </div>
                            </div>
                            <Button size="lg" asChild>
                                <Link href="/education/glossary">
                                    View Full Glossary
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Put This Knowledge to Work?</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Now that you understand how digital marketing works, let&#39;s discuss how we can help your business grow.
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
            <Footer/>
        </main>
    )
}
