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
    title: 'Sunset Vista Co | Lead-Generating Websites for Small Businesses',
    description: 'We help small businesses gain more leads by creating compelling websites that convert visitors into customers. Serving SW Florida with high-converting web design and ecommerce solutions.',
    keywords: [
        'lead generation websites',
        'small business websites',
        'converting websites',
        'web design for leads',
        'ecommerce solutions',
        'business growth websites',
        'high-converting web design',
        'SW Florida web development',
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
        title: 'Sunset Vista Co | Lead-Generating Websites for Small Businesses',
        description: 'Transform your online presence into a lead-generating machine. We create websites that convert visitors into customers and drive real business growth.',
        url: 'https://sunsetvista.co',
        siteName: 'Sunset Vista Co',
        images: [
            {
                url: 'https://sunsetvista.co/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Sunset Vista Co – Lead-generating websites for small businesses'
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























