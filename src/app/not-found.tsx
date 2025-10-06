import NotFoundClient from "@/components/v2/not-found-client";
import {Navigation} from "@/components/v2/navigation";
import {Footer} from "@/components/v2/footer";
import type { Metadata } from "next"

export const metadata: Metadata = {
    metadataBase: new URL("https://sunsetvista.co"),
    title: "Page Not Found | Sunset Vista Co",
    description:
        "The page you’re looking for doesn’t exist or has been moved. Return to the homepage or explore our SEO, web design, e-commerce, and marketing services for Southwest Florida businesses.",
    keywords: [
        "404 page",
        "page not found",
        "broken link",
        "website error",
        "Sunset Vista Co",
        "SWFL web design",
        "Cape Coral SEO",
        "Fort Myers SEO",
        "Naples SEO",
        "local SEO Southwest Florida",
        "website development SWFL",
        "digital marketing SWFL",
        "shopify developer Cape Coral",
        "ecommerce solutions SWFL"
    ],
    robots: { index: false, follow: true },
    alternates: { canonical: "https://sunsetvista.co/404" },
    openGraph: {
        title: "Page Not Found | Sunset Vista Co",
        description:
            "This page may have moved or no longer exists. Visit our homepage or explore SEO, web design, and e-commerce services for Southwest Florida.",
        url: "https://sunsetvista.co/404",
        siteName: "Sunset Vista Co",
        images: [
            {
                url: "https://sunsetvista.co/og-image.png",
                width: 1200,
                height: 630,
                alt: "404 Page Not Found - Sunset Vista Co"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Page Not Found | Sunset Vista Co",
        description:
            "We couldn’t find the page you’re looking for. Explore Sunset Vista Co’s SEO, web design, and e-commerce solutions for SWFL.",
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

export default function NotFound() {
    return (
        <div className="min-h-screen">
            <Navigation/>
            <NotFoundClient/>
            <Footer/>
        </div>
    )
}