import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaNfcDirectional, FaChartBar, FaLock, FaLeaf, FaCloud } from "react-icons/fa6";

const items = [
    {
        title: "SecureTap Platform",
        description: "We developed cloud services and NFC technology for SecureTap, an anti-counterfeiting solution that protects brands and consumers.",
        image: "/securetap.png",
        url: "https://securetap.org/",
        tags: [
            { label: "NFC", icon: <FaNfcDirectional className='w-4 h-4' /> },
            { label: "Cloud", icon: <FaLock className='w-4 h-4' /> },
            { label: "Blockchain", icon: <FaLock className='w-4 h-4' /> },
        ]
    },
    {
        title: "PetSocial Platform",
        description: "We developed a custom ecommerce and social platform for PetSocial, a pet care company that connects pet owners with local services, that uses blockchain technology to ensure secure transactions.",
        image: "/petsocial.png",
        url: "https://www.petsocial.love/",
        tags: [
            { label: "Ecommerce", icon: <FaShoppingCart className='w-4 h-4' /> },
            { label: "Blockchain", icon: <FaLock className='w-4 h-4' /> },
        ]
    },
    {
        title: "Zak's Jewlery Ecommerce Website",
        description: "We built a custom ecommerce platform for Zak's Jewelry, a luxury jewelry brand that offers local and international shipping.",
        image: "/zaks.png",
        url: "https://zaksjewelry.com/",
        tags: [
            { label: "Ecommerce", icon: <FaShoppingCart className='w-4 h-4' /> },
            { label: "Local", icon: <FaLeaf className='w-4 h-4' /> },
        ]
    },
    {
        title: "Petal Patch Ecommerce Website",
        description: "We designed and developed a custom ecommerce website for Petal Patch, a local florist that offers online ordering and delivery services.",
        image: "/petalpatch.png",
        url: "https://fortmyerspetalpatch.com/",
        tags: [
            { label: "Ecommerce", icon: <FaShoppingCart className='w-4 h-4' /> },
            { label: "Local", icon: <FaLeaf className='w-4 h-4' /> },
        ]
    },
    {
        title: "Cacari Health Ecommerce Website",
        description: "A full-featured ecommerce platform for Cacari Health, selling camu plant-based health vitamins and wellness products.",
        image: "/cacari.png",
        url: "https://cacarihealth.com/",
        tags: [
            { label: "Ecommerce", icon: <FaShoppingCart className='w-4 h-4' /> },
            { label: "Health", icon: <FaLeaf className='w-4 h-4' /> },
        ]
    },
    {
        title: "Pool Works Landing Page",
        description: "A clean, effective landing page for Pool Works, a local pool builder business.",
        image: "/pool-works.png",
        url: "https://www.poolworksdesign.com/",
        tags: [
            { label: "Local", icon: <FaLeaf className='w-4 h-4' /> },
            { label: "Landing Page", icon: <FaChartBar className='w-4 h-4' /> },
        ]
    },
    {
        title: "Better Baker Platform",
        description: "A powerful all-in-one platform for small business bakeries. Better Baker streamlines recipe management, ingredient tracking, allergen labeling, order management, and label creation—helping bakers save time, stay compliant, and grow their business.",
        image: "/betterbaker.png",
        url: "https://better-baker.vercel.app/",
        tags: [
            { label: "Ecommerce", icon: <FaShoppingCart className='w-4 h-4' /> },
            { label: "Cloud", icon: <FaCloud className='w-4 h-4' /> },
            { label: "Automation", icon: <FaChartBar className='w-4 h-4' /> },
            { label: "Management", icon: <FaChartBar className='w-4 h-4' /> },
        ]
    },
]

export function Projects() {
    return (
        <section className="relative py-24 md:py-36 bg-gradient-to-br from-[#fef4e9] via-[#fff5e3] to-[#ffe6b3] overflow-hidden" id="projects">
            <div className="absolute top-[-60px] right-[-80px] w-[340px] h-[220px] bg-[#F0C244]/30 rounded-full blur-3xl z-0" />
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-4 drop-shadow-lg">Our Recent Projects</h2>
                    <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-medium">
                        See how we help clients grow with custom ecommerce, NFC, blockchain, and more.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {items.map((item, index) => (
                        <div key={index} className="group bg-white/90 rounded-2xl shadow-xl border border-[#F0C244]/20 p-6 flex flex-col h-full transition-transform hover:-translate-y-2 hover:shadow-2xl">
                            <div className="overflow-hidden rounded-xl mb-4">
                                <img
                                    alt={item.title}
                                    className="rounded-xl w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 shadow"
                                    height="200"
                                    src={item.image}
                                    style={{ aspectRatio: "400/200" }}
                                    width="400"
                                />
                            </div>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {item.tags && item.tags.map((tag, i) => (
                                    <span key={i} className="inline-flex items-center gap-1 bg-[#F0C244]/20 text-[#F0C244] px-2 py-1 rounded text-xs font-semibold">
                                        {tag.icon} {tag.label}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold text-[#222] mb-1">{item.title}</h3>
                            <p className="text-gray-700 font-medium flex-grow">{item.description}</p>
                            <div className="mt-6 flex justify-end">
                                <Link
                                    className="inline-flex items-center justify-center rounded-full bg-[#F0C244] px-6 py-3 text-lg text-white font-bold shadow-lg hover:bg-[#EC7210] transition focus:outline-none focus:ring-2 focus:ring-[#F0C244] focus:ring-offset-2"
                                    href={item.url}
                                >
                                    View Project
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}