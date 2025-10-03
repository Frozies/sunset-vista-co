import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export function CTASection() {
    return (
        <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">
                <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Online Presence?</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                        Join 100+ Southwest Florida businesses that have grown their revenue with our help. Get your free
                        consultation today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Button size="lg" asChild className="text-lg px-8 py-6">
                            <Link href="/contact">
                                <Phone className="mr-2 h-5 w-5" />
                                Schedule Free Consultation
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
                            <Link href="/contact">
                                <Mail className="mr-2 h-5 w-5" />
                                Get Free SEO Audit
                            </Link>
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground">No obligation • Free consultation • Local SWFL experts</p>
                </Card>
            </div>
        </section>
    )
}
