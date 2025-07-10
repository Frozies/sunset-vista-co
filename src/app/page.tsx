import {Metadata} from "next";
import {Header} from "@/components/header";
import {Hero} from "@/components/hero";
import {Projects} from "@/components/projects";
import {Solutions} from "@/components/solutions";
import {Footer} from "@/components/footer";
import {DynamicContact} from "@/components/dynamic-contact";
import LeadMagnet from "@/components/lead-magnet";
import WebsiteAuditLeadMagnet from "@/components/website-audit-lead-magnet";
import FAQAndProcess from "@/components/faq";
import AboutMe from "@/components/about-me";


export const metadata: Metadata = {
    title: 'Sunset Vista Co | Software Consulting in SW Florida',
    description: 'Sunset Vista Co is a full‑service software consulting firm serving Lee County (Fort Myers, Cape Coral) and Collier County (Naples). Specializing in full‑stack web development, blockchain solutions, cloud consulting, and custom software tailored to your business needs.',
    keywords: [
        'software consulting',
        'web development',
        'blockchain solutions',
        'cloud consulting',
        'ecommerce solutions',
        'Lee County FL',
        'Fort Myers',
        'Cape Coral',
        'Collier County FL',
        'Naples'
    ],
    applicationName: 'Sunset Vista Co',
    authors: [{name: 'Sunset Vista Co', url: 'https://sunsetvista.co'}],
    creator: 'Davin Young',
    publisher: 'Sunset Vista Co LLC',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Sunset Vista Co | SW Florida Software Consulting',
        description: 'Serving Lee County (Fort Myers, Cape Coral) and Collier County (Naples) with custom software, blockchain, and cloud solutions.',
        url: 'https://sunsetvista.co',
        siteName: 'Sunset Vista Co',
        images: [
            {
                url: 'https://sunsetvista.co/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Sunset Vista Co – SW Florida digital solutions'
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/icon1.png',
        apple: '/apple-icon.png',
        other: [{rel: 'manifest', url: '/manifest.json'}]
    }
}

export default function Component() {
    return (<>
        <Header/>
        <div className="flex flex-col">
            <Hero/>
            <Projects/>
            <Solutions/>
            <WebsiteAuditLeadMagnet/>
            <LeadMagnet/>
            <AboutMe/>
            <FAQAndProcess/>
            <DynamicContact/>
            <Footer/>
        </div>
    </>)
}























