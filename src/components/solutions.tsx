import { CodeIcon } from "./icons/code-icon"
import {CloudIcon} from "@/components/icons/cloud-icon";
import {BitcoinIcon} from "@/components/icons/bitcoin-icon";
import {CreditCardIcon} from "@/components/icons/credit-card-icon";
import {ShoppingCartIcon} from "@/components/icons/shopping-cart-icon";
import {PuzzleIcon} from "@/components/icons/puzzle-icon";

export const Solutions = () => {
    return (
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
    )
}