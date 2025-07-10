import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FaSearch, FaCheckCircle } from "react-icons/fa";
import { WebsiteAuditForm } from "@/components/website-audit-form";

export const metadata: Metadata = {
    title: 'Free Website Audit | Sunset Vista Co | Performance & Accessibility Analysis',
    description: 'Get a free comprehensive website audit using Lighthouse. Analyze performance, accessibility, SEO, and get actionable recommendations to improve your website.',
    keywords: [
        'website audit',
        'performance analysis',
        'accessibility testing',
        'SEO audit',
        'Lighthouse audit',
        'website optimization',
        'web development services'
    ],
    openGraph: {
        title: 'Free Website Audit | Sunset Vista Co',
        description: 'Get a free comprehensive website audit using industry-standard tools. Analyze performance, accessibility, and SEO.',
        url: 'https://sunsetvista.co/website-audit',
        siteName: 'Sunset Vista Co',
        type: 'website'
    }
};

export default function WebsiteAuditPage() {
    return (
        <>
            <Header />
            <div className="flex flex-col">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600/80 via-blue-500/60 to-transparent z-0 pointer-events-none" />
                    <div className="absolute bottom-[-60px] right-[-80px] w-[340px] h-[220px] bg-blue-400/40 rounded-full blur-3xl z-0" />
                    <div className="container mx-auto px-4 md:px-8 relative z-10">
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <FaSearch className="w-10 h-10 text-white" />
                                </div>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg mb-6">
                                Free Website Audit
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100 font-medium mb-8">
                                Get a comprehensive analysis of your website&apos;s performance, accessibility, and SEO
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-semibold">
                                    <FaCheckCircle className="w-5 h-5" /> Performance Analysis
                                </span>
                                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-semibold">
                                    <FaCheckCircle className="w-5 h-5" /> Accessibility Check
                                </span>
                                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-semibold">
                                    <FaCheckCircle className="w-5 h-5" /> SEO Insights
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Audit Form Section */}
                <section className="py-24 bg-gradient-to-b from-white to-gray-50">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="max-w-4xl mx-auto">
                            <WebsiteAuditForm />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
} 