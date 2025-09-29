import {Metadata} from "next";
import {Navigation} from "@/components/v2/navigation";
import {HeroSection} from "@/components/v2/hero-section";
import {ServicesOverview} from "@/components/v2/services-overview";
import {WhyChooseUs} from "@/components/v2/why-choose-us";
import {CTASection} from "@/components/v2/cta-section";
import Script from "next/script";

export const metadata: Metadata = {
    metadataBase: new URL("https://sunsetvista.co"),
    title: "Sunset Vista Co | SWFL SEO, Web Design & E-Commerce Growth",
    description: "SWFL’s local partner for SEO, web design, and e-commerce. We help small and medium businesses in Cape Coral, Fort Myers, and Naples turn websites into lead-generating, sales-driving machines. Local SEO, AI SEO (GEO), Shopify/WooCommerce, PPC, analytics, and in-person support.",
    keywords: [// Core positioning
        "SWFL SEO", "SWFL web design", "SWFL e-commerce", "Cape Coral SEO", "Fort Myers SEO", "Naples FL SEO", "Local SEO Southwest Florida", // Services
        "web design for small business", "high-converting web design", "website development SWFL", "Shopify developer Cape Coral", "WooCommerce setup Naples", "payment gateway setup", "ecommerce training", "PPC management SWFL", "Google Ads management", "Facebook Ads for small business", "email marketing SWFL", // AI / GEO
        "AI SEO", "Generative Engine Optimization", "GEO agency", "LLM optimization", "optimize for ChatGPT and Gemini", // Problems / outcomes
        "get more leads online", "lead-generating websites", "website conversion optimization", "analytics and reporting", "Google Analytics setup", "Google Search Console setup", // Geo signals
        "Lee County FL", "Collier County FL", "Cape Coral", "Fort Myers", "Naples"],
    applicationName: "Sunset Vista Co",
    authors: [{name: "Sunset Vista Co", url: "https://sunsetvista.co"}],
    creator: "Davin Young",
    publisher: "Sunset Vista Co LLC",
    robots: {
        index: true, follow: true,
    },
    alternates: {
        canonical: "https://sunsetvista.co"
    },
    openGraph: {
        title: "Sunset Vista Co | SWFL SEO, Web Design & E-Commerce Growth",
        description: "We help small and medium businesses in Cape Coral, Fort Myers, and Naples turn their websites into lead-generating, sales-driving machines. Local SEO, AI SEO (GEO), Shopify/WooCommerce, PPC, analytics, and in-person support.",
        url: "https://sunsetvista.co",
        siteName: "Sunset Vista Co",
        images: [{
            url: "https://sunsetvista.co/og-image.png",
            width: 1200,
            height: 630,
            alt: "Sunset Vista Co — SWFL’s Local Partner for SEO, Web Design & E-Commerce Growth"
        }],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Sunset Vista Co | SWFL SEO, Web Design & E-Commerce Growth",
        description: "Local partner for SEO, web design, e-commerce, and PPC in Cape Coral, Fort Myers & Naples. Turn your site into a lead-generating, sales-driving machine.",
        images: ["https://sunsetvista.co/og-image.png"],
        creator: "@sunsetvistaco"
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/icon1.png",
        apple: "/apple-icon.png",
        other: [{rel: "manifest", url: "/manifest.json"}]
    },
    category: "business"
}

export default function Component() {
    return (<>
        <main className="min-h-screen">
            <Navigation/>
            <HeroSection/>
            <ServicesOverview/>
            <WhyChooseUs/>
            <CTASection/>

            <Script
                id="svco-home-jsonld"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: `
                {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://sunsetvista.co/#website",
      "url": "https://sunsetvista.co",
      "name": "Sunset Vista Co",
      "alternateName": "Sunset Vista Company LLC",
      "inLanguage": "en-US",
      "publisher": { "@id": "https://sunsetvista.co/#organization" },
      "image": "https://sunsetvista.co/og-image.png",
      "potentialAction": [
        {
          "@type": "ContactAction",
          "target": "https://sunsetvista.co/contact",
          "name": "Free Consultation"
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://sunsetvista.co/#webpage",
      "url": "https://sunsetvista.co",
      "isPartOf": { "@id": "https://sunsetvista.co/#website" },
      "name": "Sunset Vista Co | SWFL SEO, Web Design & E-Commerce Growth",
      "about": [
        { "@id": "https://sunsetvista.co/#service-seo" },
        { "@id": "https://sunsetvista.co/#service-web" },
        { "@id": "https://sunsetvista.co/#service-ecom" },
        { "@id": "https://sunsetvista.co/#service-marketing" }
      ],
      "description": "SWFL’s local partner for SEO, web design, and e-commerce. We help small and medium businesses in Cape Coral, Fort Myers, and Naples turn websites into lead-generating, sales-driving machines. Local SEO, AI SEO (GEO), Shopify/WooCommerce, PPC, analytics, and in-person support.",
      "inLanguage": "en-US",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://sunsetvista.co/og-image.png",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sunsetvista.co" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sunsetvista.co/services" }
        ]
      },
      "publisher": { "@id": "https://sunsetvista.co/#organization" },
      "copyrightHolder": { "@id": "https://sunsetvista.co/#organization" },
      "dateModified": "2025-09-29"
    },
    {
      "@type": "Organization",
      "@id": "https://sunsetvista.co/#organization",
      "name": "Sunset Vista Co LLC",
      "url": "https://sunsetvista.co",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sunsetvista.co/icon1.png"
      },
      "founder": {
        "@type": "Person",
        "name": "Davin Young"
      },
      "sameAs": [],
      "brand": "Sunset Vista Co",
      "slogan": "Turn your website into a lead-generating, sales-driving machine.",
      "knowsAbout": [
        "SWFL SEO", "SWFL web design", "SWFL e-commerce",
        "Cape Coral SEO", "Fort Myers SEO", "Naples FL SEO",
        "Local SEO Southwest Florida", "web design for small business",
        "high-converting web design", "Shopify developer Cape Coral",
        "WooCommerce setup Naples", "payment gateway setup",
        "ecommerce training", "PPC management SWFL", "Google Ads management",
        "Facebook Ads for small business", "email marketing SWFL",
        "AI SEO", "Generative Engine Optimization", "GEO agency",
        "LLM optimization", "optimize for ChatGPT and Gemini",
        "website conversion optimization", "analytics and reporting",
        "Google Analytics setup", "Google Search Console setup"
      ],
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Lee County, FL" },
        { "@type": "AdministrativeArea", "name": "Collier County, FL" },
        { "@type": "City", "name": "Cape Coral, FL" },
        { "@type": "City", "name": "Fort Myers, FL" },
        { "@type": "City", "name": "Naples, FL" },
        { "@type": "Place", "name": "Southwest Florida" }
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://sunsetvista.co/#localbusiness",
      "name": "Sunset Vista Co",
      "url": "https://sunsetvista.co",
      "image": "https://sunsetvista.co/og-image.png",
      "areaServed": [
        "Cape Coral FL", "Fort Myers FL", "Naples FL", "Lee County FL", "Collier County FL", "Southwest Florida"
      ],
      "availableChannel": [
        {
          "@type": "ServiceChannel",
          "serviceUrl": "https://sunsetvista.co/contact",
          "name": "Online"
        },
        {
          "@type": "ServiceChannel",
          "name": "In-Person Support",
          "areaServed": [
            "Cape Coral FL", "Fort Myers FL", "Naples FL"
          ]
        }
      ],
      "parentOrganization": { "@id": "https://sunsetvista.co/#organization" },
      "sameAs": [],
      "offers": {
        "@type": "OfferCatalog",
        "name": "Digital Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@id": "https://sunsetvista.co/#service-seo" } },
          { "@type": "Offer", "itemOffered": { "@id": "https://sunsetvista.co/#service-web" } },
          { "@type": "Offer", "itemOffered": { "@id": "https://sunsetvista.co/#service-ecom" } },
          { "@type": "Offer", "itemOffered": { "@id": "https://sunsetvista.co/#service-marketing" } }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://sunsetvista.co/#service-seo",
      "name": "SEO Services",
      "serviceType": "Local SEO, AI SEO (GEO), PPC Management, Analytics & Reporting",
      "provider": { "@id": "https://sunsetvista.co/#localbusiness" },
      "areaServed": ["Cape Coral FL", "Fort Myers FL", "Naples FL", "Southwest Florida"],
      "url": "https://sunsetvista.co/services/seo",
      "description": "Get found on Google with local SEO, AI SEO optimization, and PPC campaigns aligned to measurable outcomes.",
      "termsOfService": "https://sunsetvista.co/terms"
    },
    {
      "@type": "Service",
      "@id": "https://sunsetvista.co/#service-web",
      "name": "Web Design & Development",
      "serviceType": "Mobile-First Design, Performance Optimization, SEO-Ready Builds",
      "provider": { "@id": "https://sunsetvista.co/#localbusiness" },
      "areaServed": ["Cape Coral FL", "Fort Myers FL", "Naples FL", "Southwest Florida"],
      "url": "https://sunsetvista.co/services/web-design",
      "description": "Fast, modern, mobile-friendly websites engineered to convert visitors into customers."
    },
    {
      "@type": "Service",
      "@id": "https://sunsetvista.co/#service-ecom",
      "name": "E-Commerce Solutions",
      "serviceType": "Shopify Setup, WooCommerce, Payment Gateways, Staff Training",
      "provider": { "@id": "https://sunsetvista.co/#localbusiness" },
      "areaServed": ["Cape Coral FL", "Fort Myers FL", "Naples FL", "Southwest Florida"],
      "url": "https://sunsetvista.co/services/ecommerce",
      "description": "Complete online store setup with Shopify or WooCommerce, including secure payments and staff enablement."
    },
    {
      "@type": "Service",
      "@id": "https://sunsetvista.co/#service-marketing",
      "name": "Digital Marketing",
      "serviceType": "Social Media, Email Marketing, Google Ads, Facebook Ads",
      "provider": { "@id": "https://sunsetvista.co/#localbusiness" },
      "areaServed": ["Cape Coral FL", "Fort Myers FL", "Naples FL", "Southwest Florida"],
      "url": "https://sunsetvista.co/services/digital-marketing",
      "description": "Performance-focused campaigns across social, email, and paid media to drive real business results."
    },
    {
      "@type": "ItemList",
      "@id": "https://sunsetvista.co/#services-list",
      "name": "Service Overview",
      "itemListOrder": "http://schema.org/ItemListOrderAscending",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://sunsetvista.co/services/seo", "name": "SEO Services" },
        { "@type": "ListItem", "position": 2, "url": "https://sunsetvista.co/services/web-design", "name": "Web Design & Development" },
        { "@type": "ListItem", "position": 3, "url": "https://sunsetvista.co/services/ecommerce", "name": "E-Commerce Solutions" },
        { "@type": "ListItem", "position": 4, "url": "https://sunsetvista.co/services/digital-marketing", "name": "Digital Marketing" }
      ]
    }
  ]
}
                ` }}
            />
        </main>
    </>)
}























