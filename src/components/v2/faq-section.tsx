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

export type FaqItem = {
    q: string;
    a: string | string[]; // string for paragraph, string[] for bullet list
};

export type FaqData = {
    heading: string;
    subtitle: string;
    cta?: {
        text: string;
        href: string;
    };
    items: FaqItem[];
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

export default function FaqSection({
                                       data,
                                   }: {
    data: FaqData;
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
