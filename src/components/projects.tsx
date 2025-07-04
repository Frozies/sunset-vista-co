import Link from "next/link";

const items = [{
    title: "SecureTap Platform",
    description: "We developed cloud services and NFC technology for SecureTap, an anti-counterfeiting solution that protects brands and consumers.",
    image: "/securetap.png",
    url: "https://securetap.org/"
}, {
    title: "PetSocial Platform",
    description: "We developed a custom ecommerce and social platform for PetSocial, a pet care company that connects pet owners with local services, that uses blockchain technology to ensure secure transactions.",
    image: "/petsocial.png",
    url: "https://www.petsocial.love/"
}, {
    title: "Zak's Jewlery Ecommerce Website",
    description: "We built a custom ecommerce platform for Zak's Jewelry, a luxury jewelry brand that offers local and international shipping.",
    image: "/zaks.png",
    url: "https://zaksjewelry.com/"
}, {
    title: "Petal Patch Ecommerce Website",
    description: "We designed and developed a custom ecommerce website for Petal Patch, a local florist that offers online ordering and delivery services.",
    image: "/petalpatch.png",
    url: "https://fortmyerspetalpatch.com/"
}
//todo
// - bucket list bodies
// - patriot painters
// - cacari

]

export function Projects() {
    return (<section className="bg-[#fef4e9] py-20 md:py-32" id="projects">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 ">
                <div className="space-y-4 pb-20 md:pb-32">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#F0C244]">Our Recent Projects</h2>
                    <p className="  text-lg md:text-xl">
                        Check out some of our latest work and see how we&apos;ve helped our clients achieve their
                        goals.
                    </p>
                </div>


                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 overflow-x-auto snap-x snap-mandatory">

                    {items.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 snap-center">
                            <img
                                alt={item.title}
                                className="rounded-lg mb-4"
                                height="200"
                                src={item.image}
                                style={{
                                    aspectRatio: "400/200", objectFit: "contain",
                                }}
                                width="400"
                            />
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <p>
                                {item.description}
                            </p>
                            <div className="mt-4 flex justify-end">
                                <Link
                                    className="inline-flex items-center justify-center rounded-md bg-[#F0C244] px-4 py-2 text-white font-medium shadow-sm hover:bg-[#EC7210] focus:outline-none focus:ring-2 focus:ring-[#F0C244] focus:ring-offset-2"
                                    href={item.url}
                                >
                                    View Project
                                </Link>
                            </div>

                        </div>))}


                </div>
            </div>
        </div>
    </section>)
}