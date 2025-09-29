import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, MapPin, Star, TrendingUp } from "lucide-react"
import Script from "next/script";

export function HeroSection() {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-primary/10" />

            <div className="container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-muted-foreground">Serving Cape Coral, Fort Myers & Naples</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
                        SWFL’s Local Partner for <span className="text-primary">SEO, Web Design & E-Commerce</span> Growth
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
                        We help small and medium businesses in Cape Coral, Fort Myers, and Naples turn their websites into
                        <span className="text-foreground font-medium"> lead-generating, sales-driving machines.</span>{" "}
                        From search optimization and digital marketing to full e-commerce setup and training,
                        <span className="text-primary font-semibold"> you’ll get expert, in-person support whenever you need it.</span>
                    </p>


                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button size="lg" asChild className="text-lg px-8 py-6">
                            <Link href="/contact">
                                Schedule a Free Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
                            <Link href="/contact">Get Free SEO Audit</Link>
                        </Button>
                    </div>

                    {/*/!* Trust indicators *!/*/}
                    {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">*/}
                    {/*    <Card className="p-6 text-center">*/}
                    {/*        <div className="flex items-center justify-center mb-3">*/}
                    {/*            <Star className="h-6 w-6 text-primary mr-2" />*/}
                    {/*            <span className="font-semibold">5-Star Rated</span>*/}
                    {/*        </div>*/}
                    {/*        <p className="text-sm text-muted-foreground">Trusted by 100+ SWFL businesses</p>*/}
                    {/*    </Card>*/}

                    {/*    <Card className="p-6 text-center">*/}
                    {/*        <div className="flex items-center justify-center mb-3">*/}
                    {/*            <TrendingUp className="h-6 w-6 text-primary mr-2" />*/}
                    {/*            <span className="font-semibold">Proven Results</span>*/}
                    {/*        </div>*/}
                    {/*        <p className="text-sm text-muted-foreground">Average 150% increase in leads</p>*/}
                    {/*    </Card>*/}

                    {/*    <Card className="p-6 text-center">*/}
                    {/*        <div className="flex items-center justify-center mb-3">*/}
                    {/*            <MapPin className="h-6 w-6 text-primary mr-2" />*/}
                    {/*            <span className="font-semibold">In-Person Support</span>*/}
                    {/*        </div>*/}
                    {/*        <p className="text-sm text-muted-foreground">Face-to-face meetings & local expertise</p>*/}
                    {/*    </Card>*/}
                    {/*</div>*/}
                </div>
            </div>



        </section>
    )
}
