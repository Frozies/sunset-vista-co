import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FaCheck, FaRocket, FaCrown, FaStar, FaShieldAlt, FaChartLine, FaPalette, FaCogs, FaHeadset } from "react-icons/fa";
import Link from "next/link";
import { ConsultationScheduler } from "@/components/consultation-scheduler";

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
                            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#EC7210] to-[#F0C244]"></div>
                                <div className="p-8">
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Starter Website</h3>
                                        <div className="text-4xl font-bold text-[#EC7210] mb-2">$3,000</div>
                                        <p className="text-gray-600">Ideal for small businesses, startups, and personal portfolios</p>
                                    </div>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Up to 5 custom-designed pages (Home, About, Services, Contact, Blog)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Fully responsive, mobile-friendly design</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Basic on-page SEO optimization</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>CMS integration (Content Management System)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Personalized CMS training session</span>
                                        </li>
                                    </ul>
                                    <Link
                                        href="#contact"
                                        className="w-full bg-gradient-to-r from-[#EC7210] to-[#F0C244] text-white font-bold py-3 px-6 rounded-lg hover:from-[#F0C244] hover:to-[#EC7210] transition-all duration-300 text-center block"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>

                            {/* Ecommerce Business Launch */}
                            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform scale-105">
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F0C244] to-[#F7931A]"></div>
                                <div className="absolute top-4 right-4 bg-[#F0C244] text-white px-3 py-1 rounded-full text-sm font-bold z-10 md:block hidden">
                                    MOST POPULAR
                                </div>
                                <div className="p-8">
                                    <div className="text-center mb-8">
                                                                                <div className="relative">
                                            <div className="md:hidden absolute -top-2 -right-2 bg-[#F0C244] text-white px-2 py-1 rounded-full text-xs font-bold">
                                                MOST POPULAR
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ecommerce Business Launch</h3>
                                            <div className="text-4xl font-bold text-[#F0C244] mb-2">$8,000</div>
                                            <p className="text-gray-600">Ideal for businesses ready to sell products or services online</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Complete online store built on Shopify, WooCommerce, or custom solution</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Product catalog setup (up to 50 SKUs)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Payment gateway integration (Stripe, PayPal, etc.)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Shipping rules and logistics configuration</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Staff onboarding and comprehensive launch support</span>
                                        </li>
                                    </ul>
                                    <Link
                                        href="#contact"
                                        className="w-full bg-gradient-to-r from-[#F0C244] to-[#F7931A] text-white font-bold py-3 px-6 rounded-lg hover:from-[#F7931A] hover:to-[#F0C244] transition-all duration-300 text-center block"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>

                            {/* Custom Web Application */}
                            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F7931A] to-[#EC7210]"></div>
                                <div className="p-8">
                                    <div className="text-center mb-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Custom Web Application</h3>
                                        <div className="text-4xl font-bold text-[#F7931A] mb-2">$12,000+</div>
                                        <p className="text-gray-600">Ideal for businesses requiring fully customized web applications</p>
                                    </div>
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Fully custom-built frontend with modern frameworks (Next.js, React)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Tailored backend infrastructure and database solutions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Advanced functionalities based on client requirements</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Comprehensive administrative interface</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>Detailed documentation and training for easy management</span>
                                        </li>
                                    </ul>
                                    <Link
                                        href="#contact"
                                        className="w-full bg-gradient-to-r from-[#F7931A] to-[#EC7210] text-white font-bold py-3 px-6 rounded-lg hover:from-[#EC7210] hover:to-[#F7931A] transition-all duration-300 text-center block"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
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
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaChartLine className="w-8 h-8 text-[#EC7210]" />
                                    <h3 className="text-xl font-bold text-gray-900">SEO & Content Strategy</h3>
                                </div>
                                <ul className="space-y-3 mb-6 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Advanced keyword research and content planning</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Monthly content calendar and blog article outlines</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Optimized page content creation</span>
                                    </li>
                                </ul>
                                <div className="text-2xl font-bold text-[#EC7210] mb-4">$1,500</div>
                                <Link
                                    href="#contact"
                                    className="w-full bg-gradient-to-r from-[#EC7210] to-[#F0C244] text-white font-bold py-3 px-6 rounded-lg hover:from-[#F0C244] hover:to-[#EC7210] transition-all duration-300 text-center block"
                                >
                                    Get Started
                                </Link>
                            </div>

                            {/* Branding & Visual Identity */}
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaPalette className="w-8 h-8 text-[#F0C244]" />
                                    <h3 className="text-xl font-bold text-gray-900">Branding & Visual Identity</h3>
                                </div>
                                <ul className="space-y-3 mb-6 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Logo design (3 concepts, revisions included)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Brand guidelines document (colors, typography, voice)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Social media graphics templates</span>
                                    </li>
                                </ul>
                                <div className="text-2xl font-bold text-[#F0C244] mb-4">$2,500</div>
                                <Link
                                    href="#contact"
                                    className="w-full bg-gradient-to-r from-[#F0C244] to-[#F7931A] text-white font-bold py-3 px-6 rounded-lg hover:from-[#F7931A] hover:to-[#F0C244] transition-all duration-300 text-center block"
                                >
                                    Get Started
                                </Link>
                            </div>

                            {/* Performance & Security */}
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaShieldAlt className="w-8 h-8 text-[#F7931A]" />
                                    <h3 className="text-xl font-bold text-gray-900">Performance & Security</h3>
                                </div>
                                <ul className="space-y-3 mb-6 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Website load-speed optimization</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>CDN setup and image compression</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>SSL certificate installation and advanced security hardening</span>
                                    </li>
                                </ul>
                                <div className="text-2xl font-bold text-[#F7931A] mb-4">$1,200</div>
                                <Link
                                    href="#contact"
                                    className="w-full bg-gradient-to-r from-[#F7931A] to-[#EC7210] text-white font-bold py-3 px-6 rounded-lg hover:from-[#EC7210] hover:to-[#F7931A] transition-all duration-300 text-center block"
                                >
                                    Get Started
                                </Link>
                            </div>

                            {/* Monthly Support & Maintenance */}
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaHeadset className="w-8 h-8 text-[#EC7210]" />
                                    <h3 className="text-xl font-bold text-gray-900">Monthly Support & Maintenance</h3>
                                </div>
                                <ul className="space-y-3 mb-6 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Regular software and security updates</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Monthly website backups and recovery support</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Dedicated monthly support hours for small adjustments or fixes</span>
                                    </li>
                                </ul>
                                <div className="text-2xl font-bold text-[#EC7210] mb-4">Starting at $300/month</div>
                                <Link
                                    href="#contact"
                                    className="w-full bg-gradient-to-r from-[#EC7210] to-[#F0C244] text-white font-bold py-3 px-6 rounded-lg hover:from-[#F0C244] hover:to-[#EC7210] transition-all duration-300 text-center block"
                                >
                                    Get Started
                                </Link>
                            </div>

                            {/* Analytics & Reporting Dashboard */}
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaChartLine className="w-8 h-8 text-[#F0C244]" />
                                    <h3 className="text-xl font-bold text-gray-900">Analytics & Reporting Dashboard</h3>
                                </div>
                                <ul className="space-y-3 mb-6 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Custom analytics dashboard setup (Google Analytics, Search Console)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Monthly performance reports and actionable insights</span>
                                    </li>
                                </ul>
                                <div className="text-2xl font-bold text-[#F0C244] mb-4">$1,000</div>
                                <Link
                                    href="#contact"
                                    className="w-full bg-gradient-to-r from-[#F0C244] to-[#F7931A] text-white font-bold py-3 px-6 rounded-lg hover:from-[#F7931A] hover:to-[#F0C244] transition-all duration-300 text-center block"
                                >
                                    Get Started
                                </Link>
                            </div>

                            {/* Conversion Optimization */}
                            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaCogs className="w-8 h-8 text-[#F7931A]" />
                                    <h3 className="text-xl font-bold text-gray-900">Conversion Optimization</h3>
                                </div>
                                <ul className="space-y-3 mb-6 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>A/B testing and heatmap analytics integration</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Conversion rate optimization recommendations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Monthly optimization report and consultation</span>
                                    </li>
                                </ul>
                                <div className="text-2xl font-bold text-[#F7931A] mb-4">$1,500</div>
                                <Link
                                    href="#contact"
                                    className="w-full bg-gradient-to-r from-[#F7931A] to-[#EC7210] text-white font-bold py-3 px-6 rounded-lg hover:from-[#EC7210] hover:to-[#F7931A] transition-all duration-300 text-center block"
                                >
                                    Get Started
                                </Link>
                            </div>
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