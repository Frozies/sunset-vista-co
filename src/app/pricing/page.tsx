import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FaCheck, FaRocket, FaCrown, FaStar, FaShieldAlt, FaChartLine, FaPalette, FaCogs, FaHeadset } from "react-icons/fa";
import Link from "next/link";
import { ConsultationScheduler } from "@/components/consultation-scheduler";
import { PricingCard } from "@/components/pricing-card";

export const metadata: Metadata = {
    title: 'Pricing | Sunset Vista Co | Professional Service Packages',
    description: 'Professional service packages for websites, ecommerce, and custom web applications. Choose from Good, Better, and Best tiers with optional add-ons.',
    keywords: [
        'website pricing',
        'ecommerce pricing',
        'web development packages',
        'custom web applications',
        'professional services',
        'SW Florida'
    ],
    openGraph: {
        title: 'Pricing | Sunset Vista Co',
        description: 'Professional service packages for websites, ecommerce, and custom web applications.',
        url: 'https://sunsetvista.co/pricing',
        siteName: 'Sunset Vista Co',
        type: 'website'
    },
    robots: {
        index: false,
        follow: false
    }
}

export default function PricingPage() {
    return (
        <>
            <Header />
            <div className="flex flex-col">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-[#fffbe6] via-[#ffe0b2] to-[#ffb347] py-24 md:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#fffbe6]/80 via-[#ffe0b2]/60 to-transparent z-0 pointer-events-none" />
                    <div className="absolute bottom-[-60px] right-[-80px] w-[340px] h-[220px] bg-[#F0C244]/40 rounded-full blur-3xl z-0" />
                    <div className="container mx-auto px-4 md:px-8 relative z-10">
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#2d2d2d] drop-shadow-lg mb-6">
                                Professional Service Packages
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8">
                                Structured service packages tailored to suit your business needs, clearly organized into <span className="text-[#EC7210] font-semibold">Good, Better, and Best</span> tiers.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg shadow text-[#EC7210] font-semibold">
                                    <FaStar className="w-5 h-5" /> Professional Starter
                                </span>
                                <span className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg shadow text-[#F0C244] font-semibold">
                                    <FaRocket className="w-5 h-5" /> Ecommerce Launch
                                </span>
                                <span className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg shadow text-[#F7931A] font-semibold">
                                    <FaCrown className="w-5 h-5" /> Custom Applications
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Pricing Section */}
                <section className="py-24 bg-gradient-to-b from-white to-gray-50">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {/* Professional Starter Website */}
                            <PricingCard
                                title="Professional Starter Website"
                                price="$3,000"
                                features={[
                                    "Up to 5 custom-designed pages (Home, About, Services, Contact, Blog)",
                                    "Fully responsive, mobile-friendly design",
                                    "Basic on-page SEO optimization",
                                    "CMS integration (Content Management System)",
                                    "Personalized CMS training session"
                                ]}
                                buttonText="Get Started"
                                buttonLink="#contact"
                                buttonColor="from-[#EC7210] to-[#F0C244]"
                                icon={<FaStar className="w-8 h-8 text-[#EC7210]" />}
                            />

                            {/* Ecommerce Business Launch */}
                            <PricingCard
                                title="Ecommerce Business Launch"
                                price="$8,000"
                                features={[
                                    "Complete online store built on Shopify, WooCommerce, or custom solution",
                                    "Product catalog setup (up to 50 SKUs)",
                                    "Payment gateway integration (Stripe, PayPal, etc.)",
                                    "Shipping rules and logistics configuration",
                                    "Staff onboarding and comprehensive launch support"
                                ]}
                                buttonText="Get Started"
                                buttonLink="#contact"
                                buttonColor="from-[#F0C244] to-[#F7931A]"
                                icon={<FaRocket className="w-8 h-8 text-[#F0C244]" />}
                            />

                            {/* Custom Web Application */}
                            <PricingCard
                                title="Custom Web Application"
                                price="$12,000+"
                                features={[
                                    "Fully custom-built frontend with modern frameworks (Next.js, React)",
                                    "Tailored backend infrastructure and database solutions",
                                    "Advanced functionalities based on client requirements",
                                    "Comprehensive administrative interface",
                                    "Detailed documentation and training for easy management"
                                ]}
                                buttonText="Get Started"
                                buttonLink="#contact"
                                buttonColor="from-[#F7931A] to-[#EC7210]"
                                icon={<FaCrown className="w-8 h-8 text-[#F7931A]" />}
                            />
                        </div>
                    </div>
                </section>

                {/* Small Business Starter Section */}
                <section className="py-8 bg-white">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="bg-gray-50/50 rounded-xl p-6 border border-gray-100">
                                <div className="flex items-center justify-center gap-2 mb-3">
                                    <span className="text-lg font-medium text-gray-400 line-through">$2,000</span>
                                    <span className="text-2xl font-bold text-gray-600">$1,750</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Small Business Starter</h3>
                                <p className="text-sm text-gray-500 mb-4">1-page website for businesses just getting started</p>
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Express Delivery Section */}
                <section className="py-16 bg-gradient-to-r from-[#fffbe6] to-[#ffe0b2]">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-6">Express Delivery Option</h2>
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <FaRocket className="w-8 h-8 text-[#F0C244]" />
                                    <h3 className="text-2xl font-bold text-[#2d2d2d]">Accelerated Turnaround</h3>
                                </div>
                                <p className="text-lg text-gray-700 mb-6">Same-week project delivery within 5 business days</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-gradient-to-br from-[#EC7210]/10 to-[#F0C244]/10 rounded-lg p-4">
                                        <div className="font-bold text-[#EC7210] text-lg">Good Package Express</div>
                                        <div className="text-2xl font-bold text-gray-900">$3,900</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#F0C244]/10 to-[#F7931A]/10 rounded-lg p-4">
                                        <div className="font-bold text-[#F0C244] text-lg">Better Package Express</div>
                                        <div className="text-2xl font-bold text-gray-900">$10,400</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#F7931A]/10 to-[#EC7210]/10 rounded-lg p-4">
                                        <div className="font-bold text-[#F7931A] text-lg">Best Package Express</div>
                                        <div className="text-2xl font-bold text-gray-900">$15,600</div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mt-4">* 30% surcharge on selected package</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Optional Add-Ons Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-6">Optional Add-Ons</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Enhance your project with specialized services designed to maximize your digital success.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {/* SEO & Content Strategy */}
                            <PricingCard
                                title="SEO & Content Strategy"
                                price="$1,500"
                                features={[
                                    "Advanced keyword research and content planning",
                                    "Monthly content calendar and blog article outlines",
                                    "Optimized page content creation"
                                ]}
                                buttonText="Get Started"
                                buttonLink="#contact"
                                buttonColor="from-[#EC7210] to-[#F0C244]"
                                icon={<FaChartLine className="w-8 h-8 text-[#EC7210]" />}
                            />

                            {/* Branding & Visual Identity */}
                            <PricingCard
                                title="Branding & Visual Identity"
                                price="$2,500"
                                features={[
                                    "Logo design (3 concepts, revisions included)",
                                    "Brand guidelines document (colors, typography, voice)",
                                    "Social media graphics templates"
                                ]}
                                buttonText="Get Started"
                                buttonLink="#contact"
                                buttonColor="from-[#F0C244] to-[#F7931A]"
                                icon={<FaPalette className="w-8 h-8 text-[#F0C244]" />}
                            />

                            {/* Performance & Security */}
                            <PricingCard
                                title="Performance & Security"
                                price="$1,200"
                                features={[
                                    "Website load-speed optimization",
                                    "CDN setup and image compression",
                                    "SSL certificate installation and advanced security hardening"
                                ]}
                                buttonText="Get Started"
                                buttonLink="#contact"
                                buttonColor="from-[#F7931A] to-[#EC7210]"
                                icon={<FaShieldAlt className="w-8 h-8 text-[#F7931A]" />}
                            />

                            {/* Monthly Support & Maintenance */}
                            <PricingCard
                                title="Monthly Support & Maintenance"
                                price="Starting at $300/month"
                                features={[
                                    "Regular software and security updates",
                                    "Monthly website backups and recovery support",
                                    "Dedicated monthly support hours for small adjustments or fixes"
                                ]}
                                buttonText="Get Started"
                                buttonLink="#contact"
                                buttonColor="from-[#EC7210] to-[#F0C244]"
                                icon={<FaHeadset className="w-8 h-8 text-[#EC7210]" />}
                            />

                            {/* Analytics & Reporting Dashboard */}
                            <PricingCard
                                title="Analytics & Reporting Dashboard"
                                price="$1,000"
                                features={[
                                    "Custom analytics dashboard setup (Google Analytics, Search Console)",
                                    "Monthly performance reports and actionable insights"
                                ]}
                                buttonText="Get Started"
                                buttonLink="#contact"
                                buttonColor="from-[#F0C244] to-[#F7931A]"
                                icon={<FaChartLine className="w-8 h-8 text-[#F0C244]" />}
                            />

                            {/* Conversion Optimization */}
                            <PricingCard
                                title="Conversion Optimization"
                                price="$1,500"
                                features={[
                                    "A/B testing and heatmap analytics integration",
                                    "Conversion rate optimization recommendations",
                                    "Monthly optimization report and consultation"
                                ]}
                                buttonText="Get Started"
                                buttonLink="#contact"
                                buttonColor="from-[#F7931A] to-[#EC7210]"
                                icon={<FaCogs className="w-8 h-8 text-[#F7931A]" />}
                            />
                        </div>
                    </div>
                </section>

                {/* How to Proceed Section */}
                <section className="py-24 bg-gradient-to-br from-white to-gray-50">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-8">How to Proceed</h2>
                            <div className="bg-gradient-to-br from-[#fffbe6] to-[#ffe0b2] rounded-2xl p-8 shadow-xl">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-[#EC7210] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-xl">1</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Select Package</h3>
                                        <p className="text-gray-600">Choose the package that best fits your business goals</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-[#F0C244] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-xl">2</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Add Express Option</h3>
                                        <p className="text-gray-600">Determine if you require Express Delivery</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-[#F7931A] rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white font-bold text-xl">3</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Get Started</h3>
                                        <p className="text-gray-600">Contact us for a free consultation and tailored proposal</p>
                                    </div>
                                </div>
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <p className="text-lg text-gray-700 mb-6">
                                        Contact us directly via our website at <span className="font-semibold text-[#EC7210]">sunsetvista.co</span> to schedule a free consultation and receive a tailored proposal.
                                    </p>
                                    <Link
                                        href="#contact"
                                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#EC7210] to-[#F0C244] px-8 py-4 text-xl text-white font-bold shadow-lg hover:from-[#F0C244] hover:to-[#EC7210] transition-all duration-300"
                                    >
                                        Schedule Free Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Consultation Scheduler */}
                <ConsultationScheduler />
            </div>
            <Footer />
        </>
    );
} 