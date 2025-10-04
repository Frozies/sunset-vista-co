import GetRankedClientPage from "./client-page"
import {Navigation} from "@/components/v2/navigation";
import {Footer} from "@/components/v2/footer"; // Fixed import path to match actual filename

export const metadata = {
    title: "Get Ranked on Google | Local SEO Services in Southwest Florida",
    description:
        "Help your small business show up on Google. Sunset Vista Co provides affordable SEO services for Cape Coral, Fort Myers, and Naples businesses. Get a free SEO audit today.",
    keywords:
        "get ranked on google, rank higher on google, seo help near me, fix my website seo, local seo services, appear on google maps, grow my business online, make my website show on google, get more local customers, affordable seo, seo for small business",
    openGraph: {
        title: "Get Ranked on Google | Local SEO Services in Southwest Florida",
        description: "Help your small business show up on Google. Free SEO audit for SWFL businesses.",
    },
    robots: {
        index: true,
        follow: true,
    },
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
