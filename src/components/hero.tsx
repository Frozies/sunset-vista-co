import Link from "next/link";

export const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-[#fef4e9] to-[#fff5e3] py-20 md:py-32" id="about">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#F0C244]">
                            Elevate Your Digital Presence with Sunset Vista Co
                        </h1>
                        <p className="  text-lg md:text-xl">
                            We are a software consulting firm dedicated to crafting innovative digital solutions
                            that drive your
                            business forward.
                        </p>
                        <Link
                            className="inline-flex items-center justify-center rounded-md bg-[#F0C244] px-6 py-3 text-white font-medium shadow-sm hover:bg-[#EC7210] focus:outline-none focus:ring-2 focus:ring-[#F0C244] focus:ring-offset-2"
                            href="#contact"
                        >
                            Contact Us
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <img
                            alt="Hero Image"
                            className="rounded-xl"
                            height="400"
                            src="/hero.jpg"
                            style={{
                                aspectRatio: "600/400", objectFit: "cover",
                            }}
                            width="600"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}