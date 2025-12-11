import type { Metadata } from "next"
import WebsiteAuditClientPage from "@/components/v2/audit-page";
import {Footer} from "@/components/v2/footer";
import {Navigation} from "@/components/v2/navigation";
import ContactPage from "@/components/contact";

export const metadata: Metadata = {
    title: "Contact | Sunset Vista Co | Free Consultation & SEO Audit in SWFL",
    description:
        "Have questions or ready to grow? Contact Sunset Vista Co for a free consultation or SEO audit. Local, in-person support for Cape Coral, Fort Myers, and Naples.",
    keywords: [
        "contact Sunset Vista Co",
        "free consultation",
        "free SEO audit",
        "talk to an expert",
        "SWFL digital marketing",
        "Cape Coral web design",
        "Fort Myers SEO",
        "Naples e-commerce",
        "local marketing agency",
        "schedule a call"
    ],
    openGraph: {
        title: "Contact Sunset Vista Co | Book a Free Consultation",
        description:
            "Reach out to schedule your free consultation or SEO audit. Local,  in-person support for Cape Coral, Fort Myers, and Naples.",
        url: "https://www.sunsetvista.co/contact",
        siteName: "Sunset Vista Co",
        type: "website"
    }
}


export default function WebsiteAuditPage() {
    return (

        <>
            <Navigation />
            <ContactPage />
            <Footer/>
        </>
    )
}
