import GetRankedClientPage from "./client-page"
import {Navigation} from "@/components/v2/navigation";
import {Footer} from "@/components/v2/footer"; // Fixed import path to match actual filename

import type { Metadata } from "next"

export const metadata: Metadata = {
    metadataBase: new URL("https://www.sunsetvista.co"),
    title: "Get Ranked on Google | Local SEO Services in Southwest Florida",
    description:
        "Show up in Google Search and Maps. Affordable local SEO, audit, and Google Business Profile optimization for Cape Coral, Fort Myers, and Naples. Get a free SEO audit.",
    keywords: [
        // Core intent
        "get ranked on google",
        "rank higher on google",
        "seo help near me",
        "fix my website seo",
        "local seo services",
        "seo for small business",
        "affordable seo",
        "seo website audit",

        // GBP and Maps
        "google business profile optimization",
        "google my business optimization",
        "appear on google maps",
        "google map pack",
        "local citation building",
        "review management",
        "local keyword targeting",

        // Geo
        "Cape Coral SEO",
        "Fort Myers SEO",
        "Naples FL SEO",
        "Southwest Florida",
        "SWFL"
    ],
    robots: { index: true, follow: true },
    alternates: { canonical: "https://www.sunsetvista.co/services/seo/google-ranking" },
    openGraph: {
        title: "Get Ranked on Google | Local SEO Services in Southwest Florida",
        description:
            "Help your small business show up on Google. Free local SEO audit for SWFL businesses in Cape Coral, Fort Myers, and Naples.",
        url: "https://www.sunsetvista.co/services/seo/google-ranking",
        siteName: "Sunset Vista Co",
        images: [
            {
                url: "https://www.sunsetvista.co/og-image.png",
                width: 1200,
                height: 630,
                alt: "Get Ranked on Google with Sunset Vista Co"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Get Ranked on Google | Local SEO Services in Southwest Florida",
        description:
            "Affordable local SEO and Google Maps visibility for Cape Coral, Fort Myers, and Naples. Get a free SEO audit.",
        images: ["https://www.sunsetvista.co/og-image.png"],
        creator: "@sunsetvistaco"
    }
}


export default function GetRankedPage() {
    return (
        <div>
            <Navigation />
            <GetRankedClientPage />
            <Footer/>
        </div>
    )
}
