import { Navigation } from "@/components/v2/navigation"
import {Footer} from "@/components/v2/footer";
import GlossaryPage from "@/components/v2/glossary";
import type { Metadata } from "next"

export const metadata: Metadata = {
    metadataBase: new URL("https://sunsetvista.co"),
    title:
        "Digital Marketing Glossary",
    description:
        "Plain-English definitions of essential marketing terms (SEO, GEO, PPC, CTR, schema, and more) to help Southwest Florida businesses make smarter decisions.",
    keywords: [
        "digital marketing glossary",
        "SEO terms explained",
        "GEO generative engine optimization",
        "PPC definitions",
        "marketing terms for small business",
        "Cape Coral",
        "Fort Myers",
        "Naples",
        "Southwest Florida",
    ],
    alternates: {
        canonical: "/education/glossary",
    },
    openGraph: {
        type: "article",
        url: "https://sunsetvista.co/education/glossary",
        title:
            "Digital Marketing Glossary",
        description:
            "Understand SEO, GEO, PPC, schema, CTR, and more with simple definitions tailored to local businesses in Southwest Florida.",
        siteName: "Sunset Vista",
        locale: "en_US",
        images: [
            {
                url: "https://sunsetvista.co/og/education-glossary.png",
                width: 1200,
                height: 630,
                alt: "Digital Marketing Glossary by Sunset Vista",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Digital Marketing Glossary — Plain-English Definitions | Sunset Vista",
        description:
            "Simple explanations of core marketing terms for local businesses.",
        images: ["https://sunsetvista.co/og/education-glossary.png"],
        creator: "@sunsetvista_co",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
    category: "education",
    authors: [{ name: "Sunset Vista" }],
}


export default function EducationPage() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <GlossaryPage/>
            <Footer/>
        </main>
    )
}
