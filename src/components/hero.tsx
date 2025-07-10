import { ShoppingCartIcon } from "@/components/icons/shopping-cart-icon";
import { CreditCardIcon } from "@/components/icons/credit-card-icon";
import { BitcoinIcon } from "@/components/icons/bitcoin-icon";
import { CloudIcon } from "@/components/icons/cloud-icon";
import { CodeIcon } from "@/components/icons/code-icon";
import { FaNfcDirectional, FaChartBar } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { trackButtonClick } from "@/lib/analytics";

export const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#fffbe6] via-[#ffe0b2] to-[#ffb347] py-24 md:py-40 overflow-hidden" id="about">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#fffbe6]/80 via-[#ffe0b2]/60 to-transparent z-0 pointer-events-none" />
            {/* Modern blurred blob accent */}
            <div className="absolute bottom-[-60px] right-[-80px] w-[340px] h-[220px] bg-[#F0C244]/40 rounded-full blur-3xl z-0" />
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#2d2d2d] drop-shadow-lg">
                            Websites & Ecommerce That Sell
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-xl">
                            Custom websites and ecommerce solutions that drive revenue. <span className="text-[#EC7210] font-semibold">Sunset Vista Co</span> builds beautiful, high-converting digital experiences for businesses that want to grow. <br className="hidden md:inline" />
                            <span className="text-base text-gray-500 font-normal block mt-2">Also offering blockchain, NFC, and cloud innovation for the future-focused.</span>
                        </p>
                        <div className="flex flex-wrap gap-4 items-center mt-4">
                            <span className="inline-flex items-center gap-2 bg-white/80 px-3 py-2 rounded-lg shadow text-[#EC7210] font-semibold text-base"><ShoppingCartIcon className="w-5 h-5" /> Ecommerce</span>
                            <span className="inline-flex items-center gap-2 bg-white/80 px-3 py-2 rounded-lg shadow text-[#F0C244] font-semibold text-base"><CreditCardIcon className="w-5 h-5" /> Payments</span>
                            <span className="inline-flex items-center gap-2 bg-white/80 px-3 py-2 rounded-lg shadow text-[#A0A0A0] font-semibold text-base"><CloudIcon className="w-5 h-5" /> Cloud</span>
                            <span className="inline-flex items-center gap-2 bg-white/80 px-3 py-2 rounded-lg shadow text-[#F7931A] font-semibold text-base"><BitcoinIcon className="w-5 h-5" /> Blockchain</span>
                            <span className="inline-flex items-center gap-2 bg-white/80 px-3 py-2 rounded-lg shadow text-[#0A7CFF] font-semibold text-base"><FaNfcDirectional className="w-5 h-5" /> NFC</span>
                            <span className="inline-flex items-center gap-2 bg-white/80 px-3 py-2 rounded-lg shadow text-[#1a73e8] font-semibold text-base"><FaChartBar className="w-5 h-5" /> Analytics</span>
                            <span className="inline-flex items-center gap-2 bg-white/80 px-3 py-2 rounded-lg shadow text-[#222] font-semibold text-base"><CodeIcon className="w-5 h-5" /> Web Dev</span>
                        </div>
                        <Link
                            className="inline-flex items-center justify-center rounded-full bg-[#F0C244] px-8 py-4 text-xl text-white font-bold shadow-lg hover:bg-[#EC7210] transition focus:outline-none focus:ring-2 focus:ring-[#F0C244] focus:ring-offset-2 mt-6"
                            href="#contact"
                            onClick={() => trackButtonClick("Get a Free Consultation", "hero_section")}
                        >
                            Get a Free Consultation
                        </Link>
                    </div>
                    <div className="relative hidden md:flex justify-center items-center">
                        <div className="absolute -top-8 -left-8 w-72 h-72 bg-[#F0C244]/30 rounded-full blur-3xl z-0 animate-pulse" />
                        <Image
                            alt="Modern Website Design"
                            className="rounded-2xl shadow-2xl border-4 border-white/80 relative z-10"
                            height={420}
                            width={600}
                            src="/hero.jpg"
                            style={{ aspectRatio: "600/420", objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}