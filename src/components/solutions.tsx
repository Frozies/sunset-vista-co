import { FaNfcDirectional, FaChartBar } from "react-icons/fa6";
import { CodeIcon } from "./icons/code-icon";
import { CloudIcon } from "@/components/icons/cloud-icon";
import { BitcoinIcon } from "@/components/icons/bitcoin-icon";
import { CreditCardIcon } from "@/components/icons/credit-card-icon";
import { ShoppingCartIcon } from "@/components/icons/shopping-cart-icon";
import { PuzzleIcon } from "@/components/icons/puzzle-icon";

export const Solutions = () => {
    return (
        <section className="relative py-24 md:py-36 bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#4dd0e1]" id="services">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#e0f7fa]/80 via-[#b2ebf2]/60 to-transparent z-0 pointer-events-none" />
            {/* Modern blurred blob accent */}
            <div className="absolute bottom-[-60px] left-[-80px] w-[340px] h-[220px] bg-[#4dd0e1]/40 rounded-full blur-3xl z-0" />
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-4 drop-shadow-lg">Our Solutions</h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-medium">
                        Digital solutions that drive growth, boost sales, and future-proof your business.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {/* Ecommerce Solutions - Highlighted */}
                    <div className="group bg-white/90 rounded-2xl shadow-xl border border-[#F0C244]/30 p-8 flex flex-col items-start transition-transform hover:-translate-y-2 hover:shadow-2xl">
                        <ShoppingCartIcon className="h-14 w-14 text-[#EC7210] mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2 text-[#EC7210]">Ecommerce Solutions</h3>
                        <p className="text-gray-700 font-medium mb-2">Build, launch, and grow your online store with conversion-focused design and seamless shopping experiences.</p>
                    </div>
                    {/* Website Development */}
                    <div className="group bg-white/90 rounded-2xl shadow-xl border border-[#F0C244]/30 p-8 flex flex-col items-start transition-transform hover:-translate-y-2 hover:shadow-2xl">
                        <CodeIcon className="h-14 w-14 text-[#F0C244] mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2 text-[#F0C244]">Website Development</h3>
                        <p className="text-gray-700 font-medium mb-2">Custom websites that impress, engage, and convert visitors into loyal customers.</p>
                    </div>
                    {/* Payment Solutions */}
                    <div className="group bg-white/90 rounded-2xl shadow-xl border border-[#F0C244]/30 p-8 flex flex-col items-start transition-transform hover:-translate-y-2 hover:shadow-2xl">
                        <CreditCardIcon className="h-14 w-14 text-[#F0C244] mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2 text-[#F0C244]">Payment Solutions</h3>
                        <p className="text-gray-700 font-medium mb-2">Secure, reliable payment processing for frictionless checkouts and happy customers.</p>
                    </div>
                    {/* Analytics & Data-Driven Insights */}
                    <div className="group bg-white/90 rounded-2xl shadow-xl border border-[#F0C244]/30 p-8 flex flex-col items-start transition-transform hover:-translate-y-2 hover:shadow-2xl">
                        <FaChartBar className="h-14 w-14 text-[#1a73e8] mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2 text-[#1a73e8]">Analytics & Data-Driven Insights</h3>
                        <p className="text-gray-700 font-medium mb-2">Integrate Google Analytics, Search Console, and actionable reporting to make smarter business decisions and maximize ROI.</p>
                    </div>
                    {/* Blockchain Solutions */}
                    <div className="group bg-white/90 rounded-2xl shadow-xl border border-[#F0C244]/30 p-8 flex flex-col items-start transition-transform hover:-translate-y-2 hover:shadow-2xl">
                        <BitcoinIcon className="h-14 w-14 text-[#F7931A] mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2 text-[#F7931A]">Blockchain & Web3</h3>
                        <p className="text-gray-700 font-medium mb-2">Decentralized apps and blockchain integrations for the next generation of business.</p>
                    </div>
                    {/* NFC Solutions */}
                    <div className="group bg-white/90 rounded-2xl shadow-xl border border-[#F0C244]/30 p-8 flex flex-col items-start transition-transform hover:-translate-y-2 hover:shadow-2xl">
                        <FaNfcDirectional className="h-14 w-14 text-[#0A7CFF] mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2 text-[#0A7CFF]">NFC & Contactless</h3>
                        <p className="text-gray-700 font-medium mb-2">Tap into the future with NFC-powered experiences and contactless solutions.</p>
                    </div>
                    {/* Cloud Consulting */}
                    <div className="group bg-white/90 rounded-2xl shadow-xl border border-[#F0C244]/30 p-8 flex flex-col items-start transition-transform hover:-translate-y-2 hover:shadow-2xl">
                        <CloudIcon className="h-14 w-14 text-[#A0A0A0] mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2 text-[#A0A0A0]">Cloud Consulting</h3>
                        <p className="text-gray-700 font-medium mb-2">Migrate, scale, and optimize your business in the cloud with expert guidance.</p>
                    </div>
                    {/* Custom Solutions */}
                    <div className="group bg-white/90 rounded-2xl shadow-xl border border-[#F0C244]/30 p-8 flex flex-col items-start transition-transform hover:-translate-y-2 hover:shadow-2xl">
                        <PuzzleIcon className="h-14 w-14 text-[#222] mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2 text-[#222]">Custom Solutions</h3>
                        <p className="text-gray-700 font-medium mb-2">Tailored software and integrations to solve your unique business challenges.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}