import type { Metadata } from "next"
import WebsiteAuditResultsClient from "@/components/v2/audit-results";
import {Navigation} from "@/components/v2/navigation";
import {Footer} from "@/components/v2/footer";

export const metadata: Metadata = {
    title: "Your Website Audit Results | Sunset Vista Co",
    description:
        "See your comprehensive website audit results and discover opportunities to improve your online presence.",
    robots: {
        index: false,
        follow: false,
    },
}

export default function WebsiteAuditResultsPage() {
    return (
        <>
            <Navigation />
            <WebsiteAuditResultsClient />
            <Footer/>
        </>
    )
}
