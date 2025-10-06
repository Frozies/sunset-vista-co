import type { MetadataRoute } from "next"

const BASE_URL = "https://www.sunsetvista.co"

const paths: Array<{
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
    priority: number
}> = [
    { path: "/", changeFrequency: "yearly", priority: 1 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
    { path: "/education", changeFrequency: "monthly", priority: 0.5 },
    { path: "/glossary", changeFrequency: "monthly", priority: 0.5 },
    { path: "/services", changeFrequency: "weekly", priority: 0.6 },
    { path: "/services/seo", changeFrequency: "weekly", priority: 0.6 },
    { path: "/services/seo/google-ranking", changeFrequency: "weekly", priority: 0.5 },
    { path: "/services/web-design", changeFrequency: "weekly", priority: 0.6 },
    { path: "/services/ecommerce", changeFrequency: "weekly", priority: 0.6 },
    { path: "/services/digital-marketing", changeFrequency: "weekly", priority: 0.6 },
    { path: "/website-audit", changeFrequency: "weekly", priority: 0.5 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.5 },
    // Optional but recommended if live:
    { path: "/get-ranked", changeFrequency: "weekly", priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()
    // De-dup safeguards in case a path gets listed twice
    const seen = new Set<string>()

    return paths
        .filter(({ path }) => {
            if (seen.has(path)) return false
            seen.add(path)
            return true
        })
        .map(({ path, changeFrequency, priority }) => ({
            url: `${BASE_URL}${path}`,
            lastModified: now,
            changeFrequency,
            priority,
        }))
}
