// app/components/FaqSection.tsx
"use client";

import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import {
    Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion";
import { ArrowRight, CheckCircle } from "lucide-react";

export type FaqItem = { q: string; a: string | string[] };
export type FaqData = {
    heading: string;
    subtitle: string;
    cta?: { text: string; href: string };
    items: FaqItem[];
    schemaMeta?: {
        url?: string;         // e.g. "https://www.sunsetvista.co/digital-marketing"
        id?: string;          // e.g. "https://www.sunsetvista.co/digital-marketing#faq"
        name?: string;        // e.g. "Digital Marketing FAQ — Sunset Vista Co"
        inLanguage?: string;  // e.g. "en"
        description?: string; // short FAQ description (optional)
        publisher?: { name: string; url?: string; logo?: { url: string; width?: number; height?: number } };
    };
};

function cleanText(s: string) {
    return s.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function buildFaqSchema(data: FaqData) {
    const mainEntity = data.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: Array.isArray(item.a) ? item.a.map(cleanText).join(" • ") : cleanText(item.a),
        },
    }));

    // Derive URL on client if not provided
    const derivedUrl =
        data.schemaMeta?.url ||
        (typeof window !== "undefined" ? window.location.origin + window.location.pathname : undefined);

    const id = data.schemaMeta?.id || (derivedUrl ? `${derivedUrl.replace(/#.*$/, "")}#faq` : undefined);
    const name = data.schemaMeta?.name || `${data.heading} — Sunset Vista Co`;
    const inLanguage = data.schemaMeta?.inLanguage || "en";
    const description = data.schemaMeta?.description || data.subtitle;

    const schema: Record<string, any> = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        name,                    // prevents "Unnamed item"
        headline: name,          // helpful alias for some parsers
        description,             // short description
        inLanguage,
        mainEntity,
        ...(derivedUrl ? { url: derivedUrl, mainEntityOfPage: derivedUrl } : {}),
        ...(id ? { "@id": id } : {}),
    };

    if (data.schemaMeta?.publisher?.name) {
        schema.publisher = {
            "@type": "Organization",
            name: data.schemaMeta.publisher.name,
            ...(data.schemaMeta.publisher.url ? { url: data.schemaMeta.publisher.url } : {}),
            ...(data.schemaMeta.publisher.logo
                ? {
                    logo: {
                        "@type": "ImageObject",
                        url: data.schemaMeta.publisher.logo.url,
                        ...(data.schemaMeta.publisher.logo.width ? { width: data.schemaMeta.publisher.logo.width } : {}),
                        ...(data.schemaMeta.publisher.logo.height ? { height: data.schemaMeta.publisher.logo.height } : {}),
                    },
                }
                : {}),
        };
    }

    return schema;
}

export default function FaqSection({ data }: { data: FaqData }) {
    const schema = buildFaqSchema(data);

    return (
        <section className="py-20 bg-muted/30">
            <Script
                id="faq-jsonld"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.heading}</h2>
                        <p className="text-xl text-muted-foreground">{data.subtitle}</p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {data.items.map((item, idx) => (
                            <AccordionItem key={idx} value={`item-${idx + 1}`} className="bg-card border rounded-lg px-6">
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
                            <p className="text-muted-foreground mb-6">Still have questions? We&apos;re here to help.</p>
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
