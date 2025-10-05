// app/components/FaqSection.tsx
"use client";

import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { ArrowRight, CheckCircle } from "lucide-react";

type FaqItem = {
    q: string;
    a: string | string[]; // string for paragraph, string[] for bullet list
};

type FaqData = {
    heading: string;
    subtitle: string;
    cta?: {
        text: string;
        href: string;
    };
    items: FaqItem[];
};

const faqData: FaqData = {
    heading:
        "Frequently Asked Questions — Web Design & SEO",
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
            a: "We set up everything needed to rank locally—technical SEO, fast performance, on-page optimization, and local schema—and we guide your Google Business Profile and content plan. Rankings depend on competition and ongoing SEO (content, citations, reviews, links), so while no one can guarantee #1 results, our process is designed to earn and improve local visibility over time."
        },
        {
            q: "What if I already have a website — can you fix my website SEO and speed?",
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
            q: "How do I get started — free website quote or consultation?",
            a: "Schedule a consultation or request a free website quote. We’ll review your goals, check your website’s SEO performance, and outline the best plan to build or boost results.",
        },
    ],
};

function buildFaqSchema(data: FaqData) {
    const mainEntity = data.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
            "@type": "Answer",
            text:
                Array.isArray(item.a)
                    ? item.a.join(" • ")
                    : item.a,
        },
    }));

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity,
    };
}

export default function WebDesignFaq({
                                       data = faqData,
                                   }: {
    data?: FaqData;
}) {
    const schema = buildFaqSchema(data);

    return (
        <section className="py-20 bg-muted/30">
            {/* JSON-LD for FAQPage */}
            <Script
                id="faq-jsonld"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {data.heading}
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            {data.subtitle}
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {data.items.map((item, idx) => (
                            <AccordionItem
                                key={idx}
                                value={`item-${idx + 1}`}
                                className="bg-card border rounded-lg px-6"
                            >
                                <AccordionTrigger className="text-left hover:no-underline">
                                    <span className="font-semibold">{item.q}</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {Array.isArray(item.a) ? (
                                        <ul className="space-y-2 ml-4">
                                            {item.a.map((bullet, i) => (
                                                <li key={i} className="flex items-start">
                                                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{item.a}</p>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {data.cta && (
                        <div className="text-center mt-12">
                            <p className="text-muted-foreground mb-6">
                                Still have questions? We&apos;re here to help.
                            </p>
                            <Button size="lg" asChild>
                                <Link href={data.cta.href}>
                                    {data.cta.text}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
