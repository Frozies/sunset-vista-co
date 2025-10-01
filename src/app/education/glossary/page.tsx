import { Navigation } from "@/components/v2/navigation"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {BookOpen, ArrowRight, Hash} from "lucide-react"
import { Footer } from "@/components/v2/footer"

type GlossaryItem = {
    term: string
    definition: string
    example?: string
    slug?: string
}

const glossaryTerms: GlossaryItem[] = [
    {
        term: "SEO (Search Engine Optimization)",
        definition:
            "The process of improving your website so it appears higher in Google search results when people search for your services.",
        example: "If you're a plumber in Cape Coral, SEO helps you show up when someone searches 'plumber near me'.",
    },
    {
        term: "PPC (Pay-Per-Click)",
        definition:
            "Online advertising where you pay each time someone clicks on your ad. Google Ads and Facebook Ads are examples.",
        example: "You pay $2 every time someone clicks your Google Ad for 'Fort Myers restaurant'.",
    },
    {
        term: "Keywords",
        definition: "Words and phrases people type into search engines when looking for businesses like yours.",
        example: "'Naples dentist', 'best pizza Fort Myers', 'Cape Coral real estate agent'.",
    },
    {
        term: "Local SEO",
        definition: "SEO focused on helping your business appear in local search results and Google Maps.",
        example: "Optimizing your Google Business Profile so you show up in the 'map pack' for local searches.",
    },
    {
        term: "Organic Traffic",
        definition: "Visitors who find your website through unpaid search results (not ads).",
        example: "Someone finds your website by searching Google, not by clicking a paid advertisement.",
    },
    {
        term: "Conversion",
        definition: "When a website visitor takes the action you want them to take.",
        example: "A visitor fills out your contact form, calls your phone number, or makes a purchase.",
    },
    {
        term: "CTA (Call-to-Action)",
        definition: "Text or buttons that tell visitors what you want them to do next.",
        example: "'Call Now', 'Get Free Quote', 'Schedule Appointment', 'Learn More' buttons.",
    },
    {
        term: "Landing Page",
        definition: "A specific webpage designed to convert visitors into leads or customers.",
        example: "A page specifically about your plumbing services with a form to request a quote.",
    },
    {
        term: "Backlinks",
        definition: "Links from other websites that point to your website. Google sees these as votes of trust.",
        example: "The Naples Chamber of Commerce website links to your business website.",
    },
    {
        term: "Analytics",
        definition: "Data about how people use your website and interact with your marketing.",
        example: "Google Analytics shows you how many people visited your site and which pages they viewed.",
    },
    {
        term: "ROI (Return on Investment)",
        definition: "How much money you make compared to how much you spend on marketing.",
        example: "You spend $1,000 on marketing and gain $5,000 in new business = 400% ROI.",
    },
    {
        term: "CTR (Click-Through Rate)",
        definition: "The percentage of people who click on your ad or link after seeing it.",
        example: "If 100 people see your ad and 5 click it, your CTR is 5%.",
    },
    {
        term: "Responsive Design",
        definition: "A website that automatically adjusts to look good on phones, tablets, and computers.",
        example: "Your website's text and buttons resize perfectly whether viewed on an iPhone or desktop.",
    },
    {
        term: "Social Media Marketing",
        definition: "Using platforms like Facebook, Instagram, and LinkedIn to promote your business.",
        example: "Posting photos of your work on Instagram and sharing customer testimonials on Facebook.",
    },
    {
        term: "Email Marketing",
        definition: "Sending emails to customers and potential customers to promote your business.",
        example: "Monthly newsletters with tips, special offers sent to customers who signed up.",
    },
    {
        term: "Content Marketing",
        definition:
            "Creating valuable content (blogs, videos, guides) to attract and educate potential customers.",
        example: "A roofing company writing blog posts about 'How to Spot Roof Damage After a Storm'.",
    },
    {
        term: "Lead",
        definition: "A potential customer who has shown interest in your business.",
        example: "Someone who filled out your contact form or called asking for a quote.",
    },
    {
        term: "Lead Generation",
        definition:
            "Marketing activities designed to attract potential customers and get their contact information.",
        example: "Offering a free guide in exchange for someone's email address.",
    },
    {
        term: "Google My Business",
        definition:
            "Your free business profile on Google that appears in local searches and Google Maps.",
        example:
            "The box that shows your business hours, photos, and reviews when people search for you.",
    },
    {
        term: "Schema Markup",
        definition: "Special code that helps search engines understand your website content better.",
        example:
            "Code that tells Google your business hours, location, and services so they display correctly.",
    },
].map((item) => ({
    ...item,
    slug: item.term
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-"),
}))

export default function GlossaryPage() {
    const definedTermSetLd = {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        name: "Digital Marketing Glossary",
        description:
            "Plain-English definitions of common digital marketing terms for local businesses in Southwest Florida.",
        hasDefinedTerm: glossaryTerms.map((t) => ({
            "@type": "DefinedTerm",
            name: t.term,
            description: t.definition,
            inDefinedTermSet: "#digital-marketing-glossary",
            url: `https://sunsetvista.co/education/glossary#${t.slug}`,
        })),
        "@id":
            "https://sunsetvista.co/education/glossary#digital-marketing-glossary",
    }

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Education",
                item: "https://sunsetvista.co/education",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Marketing Glossary",
                item: "https://sunsetvista.co/education/glossary",
            },
        ],
    }

    return (
        <main id="main-content" className="min-h-screen">
            <Navigation />

            <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-6">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <li>
                        <Link href="/education" className="hover:underline">
                            Education
                        </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" className="text-foreground">
                        Marketing Glossary
                    </li>
                </ol>
            </nav>

            <header className="py-20 bg-gradient-to-br from-accent/20 via-background to-primary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Digital Marketing Glossary: Plain-English Definitions for Local
                            Businesses
                        </h1>

                        <p className="text-xl text-muted-foreground text-balance mb-8">
                            Confused by marketing jargon? Use this glossary to quickly
                            understand essential terms and make smarter decisions about your
                            website, SEO, and advertising.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact" aria-label="Get a free consultation">
                                    Get Free Consultation
                                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="bg-transparent">
                                <Link href="/education">Back to Education</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background border-y border-border/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-10">
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <Hash className="h-5 w-5 text-primary" />
                                <h2 className="text-2xl md:text-3xl font-bold">Quick Jump to Terms</h2>
                            </div>
                            <p className="text-muted-foreground">Click any term below to jump directly to its definition</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {glossaryTerms.map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`#${item.slug}`}
                                    className="group relative overflow-hidden rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm px-4 py-3 text-sm font-medium transition-all hover:border-primary/50 hover:bg-card hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                                >
                  <span className="relative z-10 text-foreground group-hover:text-primary transition-colors">
                    {item.term}
                  </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Each glossary term now has its own heading (h3) */}
            <section className="py-20" aria-labelledby="terms-heading">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 id="terms-heading" className="text-3xl md:text-4xl font-bold mb-4">
                            Marketing Terms You Should Know
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Understanding these terms will help you choose the right strategies
                            and track real business results.
                        </p>
                    </div>

                    {/* Keep dl semantics; put the visible heading inside dt as an h3 */}
                    <dl className="max-w-4xl mx-auto space-y-6">
                        {glossaryTerms.map((item) => (
                            <div key={item.slug} id={item.slug} className="scroll-mt-24">
                                <article
                                    className="group"
                                    itemScope
                                    itemType="https://schema.org/DefinedTerm"
                                    aria-labelledby={`${item.slug}-term`}
                                >
                                    <meta
                                        itemProp="inDefinedTermSet"
                                        content="https://sunsetvista.co/education/glossary#digital-marketing-glossary"
                                    />
                                    <Card className="hover:shadow-lg transition-shadow">
                                        <CardHeader className="space-y-2">
                                            <dt id={`${item.slug}-term`} itemProp="name">
                                                <h3 className="text-xl text-primary font-semibold leading-none tracking-tight">
                                                    {item.term}
                                                </h3>
                                            </dt>
                                            <dd
                                                itemProp="description"
                                                className="text-base leading-relaxed text-muted-foreground"
                                            >
                                                {item.definition}
                                            </dd>
                                        </CardHeader>

                                        {item.example ? (
                                            <CardContent>
                                                <div className="bg-accent/10 p-4 rounded-lg">
                                                    <p className="text-sm">
                                                        <span className="font-semibold">Example: </span>
                                                        <span>{item.example}</span>
                                                    </p>
                                                </div>
                                            </CardContent>
                                        ) : null}
                                    </Card>
                                </article>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <section className="py-20 bg-muted/30" aria-labelledby="questions-heading">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto p-8 md:p-12 border rounded-lg">
                        <h2 id="questions-heading" className="text-3xl md:text-4xl font-bold mb-6">
                            Still Have Questions?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Don&#39;t let confusing marketing terms hold your business back.
                            We&#39;ll explain everything in plain English and help you pick
                            strategies that work for your Southwest Florida business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">Ask Us Anything</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="bg-transparent">
                                <Link href="/services">View Our Services</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />

            <Footer />
        </main>
    )
}
