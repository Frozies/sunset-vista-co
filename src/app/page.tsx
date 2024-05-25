"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BcAN2MnNtKM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import {JSX, SVGProps} from "react"
import Image from "next/image";
import {useForm} from "react-hook-form";
import dynamic from "next/dynamic";
const Contact = dynamic(() => import('@/components/contact'), { ssr: false })
export default function Component() {
    return (<>
        <header className="bg-[#073763] text-white py-4">
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="#">
                    <div className="flex items-center">
                        {/*<MountainIcon className="h-6 w-6 mr-2"/>*/}
                        {/*<span className="text-lg font-bold">Sunset Vista Co</span>*/}
                        <Image src={'/logo.png'} alt={"The Sunset Vista Company"} width={200} height={100}/>
                    </div>
                </Link>
                <nav className="flex items-center space-x-4">
                    <Link className="hover:underline" href="#about">
                        About
                    </Link>
                    <Link className="hover:underline" href="#services">
                        Services
                    </Link>
                    <Link className="hover:underline" href="#projects">
                        Projects
                    </Link>
                    <Link className="hover:underline" href="#contact">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
        <div className="flex flex-col">
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
            <section className="py-20 md:py-32" id="services">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        <div className="space-y-4">
                            <CodeIcon className="h-12 w-12 text-[#F0C244]"/>
                            <h3 className="text-2xl font-bold">Full Stack Development</h3>
                            <p>
                                Our team of experienced full stack developers create comprehensive, scalable web
                                applications that
                                seamlessly integrate the front-end and back-end components to deliver a robust and
                                user-friendly
                                digital experience.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <BitcoinIcon className="h-12 w-12 text-[#F0C244]"/>
                            <h3 className="text-2xl font-bold">Blockchain Solutions</h3>
                            <p>
                                Leverage the power of Hyperledger and Ethereum based blockchain technologies to
                                build secure,
                                decentralized applications that revolutionize your industry.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <CloudIcon className="h-12 w-12 text-[#F0C244]"/>
                            <h3 className="text-2xl font-bold">Cloud Consulting</h3>
                            <p>
                                Our cloud experts will help you navigate the complexities of cloud infrastructure
                                and optimize your
                                cloud-based solutions.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <CreditCardIcon className="h-12 w-12 text-[#F0C244]"/>
                            <h3 className="text-2xl font-bold">Payment Solutions</h3>
                            <p>
                                Integrate secure and reliable payment processing into your digital platforms to
                                provide a seamless
                                checkout experience for your customers.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <ShoppingCartIcon className="h-12 w-12 text-[#F0C244]"/>
                            <h3 className="text-2xl font-bold">Ecommerce Solutions</h3>
                            <p>
                                Our ecommerce experts will help you build and optimize your online store, providing
                                a user-friendly
                                and conversion-focused shopping experience.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <PuzzleIcon className="h-12 w-12 text-[#F0C244]"/>
                            <h3 className="text-2xl font-bold">Custom Solutions</h3>
                            <p>
                                We offer tailored solutions to address your unique business challenges, leveraging
                                the latest
                                technologies and best practices to drive your success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Projects/>
            <Contact/>
            <footer className="bg-[#073763] text-white py-6">
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <p>© 2024 The Sunset Vista Company LLC</p>
                    <nav className="flex items-center space-x-4">
                        <Link className="hover:underline" href="mailto:davin@sunsetvista.co">
                            davin@sunsetvista.co
                        </Link>
                        {/*<Link className="hover:underline" href="#">*/}
                        {/*    Privacy*/}
                        {/*</Link>*/}
                        {/*<Link className="hover:underline" href="#">*/}
                        {/*    Terms*/}
                        {/*</Link>*/}
                        {/*<Link href="#"/>*/}
                    </nav>
                </div>
            </footer>
        </div>
    </>)
}




function BitcoinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path
            d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"/>
    </svg>)
}

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
// - tribal trouble servers

]

function Projects() {


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


function CloudIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
    </svg>)
}


function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
    </svg>)
}


function CreditCardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect width="20" height="14" x="2" y="5" rx="2"/>
        <line x1="2" x2="22" y1="10" y2="10"/>
    </svg>)
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
    </svg>)
}


function PuzzleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path
            d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"/>
    </svg>)
}


function ShoppingCartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="8" cy="21" r="1"/>
        <circle cx="19" cy="21" r="1"/>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>)
}


{/*<section className="bg-[#fef4e9] py-20 md:py-32" id="about">*/
}
{/*  <div className="container mx-auto px-4 md:px-6">*/
}

{/*    <div className="space-y-4 pb-20 md:pb-32">*/
}
{/*      <h2 className="text-3xl md:text-4xl font-bold text-[#F0C244]">What Our Clients Say</h2>*/
}
{/*      <p className="  text-lg md:text-xl">*/
}
{/*        Hear from the satisfied clients who have trusted us to deliver exceptional digital solutions.*/
}
{/*      </p>*/
}
{/*    </div>*/
}

{/*    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">*/
}

{/*      <div className="space-y-8">*/
}
{/*        <div className="bg-white rounded-lg shadow-md p-6">*/
}
{/*          <blockquote className="text-lg md:text-xl font-medium">*/
}
{/*            &quot;The Sunset Vista Co (company) LLC has been an invaluable partner in our digital*/
}
{/*            transformation.*/
}
{/*            Their expertise and attention to detail have been instrumental in the success of our new*/
}
{/*            website.&quot;*/
}
{/*          </blockquote>*/
}
{/*          <div className="mt-4 flex items-center">*/
}
{/*            <img*/
}
{/*                alt="Client Avatar"*/
}
{/*                className="rounded-full mr-4"*/
}
{/*                height="40"*/
}
{/*                src="/placeholder.svg"*/
}
{/*                style={{*/
}
{/*                  aspectRatio: "40/40",*/
}
{/*                  objectFit: "cover",*/
}
{/*                }}*/
}
{/*                width="40"*/
}
{/*            />*/
}
{/*            <div>*/
}
{/*              <h4 className="font-medium">Jane Doe</h4>*/
}
{/*              <p  >CEO, Acme Inc.</p>*/
}
{/*            </div>*/
}
{/*          </div>*/
}
{/*        </div>*/
}
{/*        <div className="bg-white rounded-lg shadow-md p-6">*/
}
{/*          <blockquote className="text-lg md:text-xl font-medium">*/
}
{/*            &quot;The Sunset Vista Co (company) LLC has been an invaluable partner in our digital*/
}
{/*            transformation.*/
}
{/*            Their expertise and attention to detail have been instrumental in the success of our new*/
}
{/*            website.&quot;*/
}
{/*          </blockquote>*/
}
{/*          <div className="mt-4 flex items-center">*/
}
{/*            <img*/
}
{/*                alt="Client Avatar"*/
}
{/*                className="rounded-full mr-4"*/
}
{/*                height="40"*/
}
{/*                src="/placeholder.svg"*/
}
{/*                style={{*/
}
{/*                  aspectRatio: "40/40",*/
}
{/*                  objectFit: "cover",*/
}
{/*                }}*/
}
{/*                width="40"*/
}
{/*            />*/
}
{/*            <div>*/
}
{/*              <h4 className="font-medium">John Smith</h4>*/
}
{/*              <p  >CTO, Globex Corporation</p>*/
}
{/*            </div>*/
}
{/*          </div>*/
}
{/*        </div>*/
}
{/*      </div>*/
}
{/*    </div>*/
}
{/*  </div>*/
}
{/*</section>*/
}