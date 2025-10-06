// app/robots.ts
import type { MetadataRoute } from "next"

const BASE_URL = "https://www.sunsetvista.co"

// Robots for Sunset Vista Co with explicit AI bot sections
export default function robots(): MetadataRoute.Robots {
    const disallowPrivate = [
        "/admin",
        "/account",
        "/api",
        "/cart",
        "/checkout",
        "/dashboard",
        "/privacy-drafts",
        "/terms-drafts",
        "/*?*session=",
    ]

    const allowPublic = [
        "/",
        "/contact",
        "/education",
        "/education/glossary",
        "/services",
        "/services/seo",
        "/services/seo/google-ranking",
        "/services/web-design",
        "/services/ecommerce",
        "/services/digital-marketing",
        "/website-audit",
        "/privacy",
        "/terms",
    ]

    return {
        rules: [
            // Default for all crawlers
            {
                userAgent: "*",
                allow: allowPublic,
                disallow: disallowPrivate,
            },

            // OpenAI GPTBot
            {
                userAgent: "GPTBot",
                allow: allowPublic,
                disallow: ["/admin", "/account"],
            },

            // Google Extended
            {
                userAgent: "Google-Extended",
                allow: allowPublic,
                disallow: ["/admin", "/account"],
            },

            // Applebot Extended
            {
                userAgent: "Applebot-Extended",
                allow: allowPublic,
                disallow: ["/admin", "/account"],
            },

            // PerplexityBot
            {
                userAgent: "PerplexityBot",
                allow: allowPublic,
                disallow: ["/admin", "/account"],
            },

            // Common Crawl
            {
                userAgent: "CCBot",
                allow: allowPublic,
                disallow: ["/admin", "/account"],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    }
}