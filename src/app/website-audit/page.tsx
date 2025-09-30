import type { Metadata } from "next"
import WebsiteAuditClientPage from "@/components/v2/audit-page";
import {Footer} from "@/components/v2/footer";
import {Navigation} from "@/components/v2/navigation";

export const metadata: Metadata = {
    title: "Free Website Audit | Sunset Vista Co | Performance & Accessibility Analysis",
    description:
        "Get a free comprehensive website audit using Lighthouse. Analyze performance, accessibility, SEO, and get actionable recommendations to improve your Southwest Florida website.",
    keywords: [
        "website audit",
        "performance analysis",
        "accessibility testing",
        "SEO audit",
        "Lighthouse audit",
        "website optimization",
        "web development services",
        "Southwest Florida web design",
        "Cape Coral SEO",
        "Fort Myers website audit",
    ],
    openGraph: {
        title: "Free Website Audit | Sunset Vista Co",
        description:
            "Get a free comprehensive website audit using industry-standard tools. Analyze performance, accessibility, and SEO.",
        url: "https://sunsetvista.co/website-audit",
        siteName: "Sunset Vista Co",
        type: "website",
    },
}

export default function WebsiteAuditPage() {
    return (

        <>
            <Navigation />
            <WebsiteAuditClientPage />
            <Footer/>
        </>
    )
}
