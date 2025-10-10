import {Button} from "@/components/ui/button"
import Link from "next/link"
import {ArrowRight, MapPin} from "lucide-react"

export function HeroSection() {
    return (<section className="relative py-12 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-primary/10"/>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
                        <span className="text-primary">AI SEO & GEO Optimization</span> for SW Florida Businesses
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
                        We help small and medium businesses in Cape Coral, Fort Myers, and Naples transform their
                        websites into
                        <span className="text-foreground font-medium"> lead-generating, sales-driving machines.</span>{" "}
                        From <span className="font-medium">AI SEO and GEO optimization</span> to local SEO and digital marketing,
                        plus full ecommerce setup, training, and optimization,
                        <span className="text-primary font-semibold"> you’ll always have expert, in-person support when you need it.</span>
                    </p>


                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button size="lg" asChild className="text-lg px-8 py-6">
                            <Link href="/contact">
                                Schedule a Free Consultation
                                <ArrowRight className="ml-2 h-5 w-5"/>
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
                            <Link href="/website-audit">Get Free SEO Audit</Link>
                        </Button>
                    </div>

                </div>
            </div>


        </section>)
}
