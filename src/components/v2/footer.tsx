import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-background to-muted border-t border-border">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image src="/images/icon.png" alt="Sunset Vista Co" width={40} height={40} className="w-10 h-10" />
                            <span className="font-bold text-xl">Sunset Vista Co</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            SWFL’s Local Partner for SEO, Web Design & E-Commerce Growth
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>Cape Coral, FL</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="h-4 w-4 text-primary" />
                                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                                    (123) 456-7890
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4 text-primary" />
                                <a href="mailto:info@sunsetvista.co" className="hover:text-primary transition-colors">
                                    info@sunsetvista.co
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    All Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services#seo"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    SEO Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services#web-design"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Web Design
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services#ecommerce"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    E-Commerce
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services#digital-marketing"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Digital Marketing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/website-audit"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Free Website Audit
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/education" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Learn
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/case-studies"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Get Started</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Ready to transform your online presence? Let&apos;s talk about your goals.
                        </p>
                        <Button asChild className="w-full mb-4">
                            <Link href="/contact">Free Consultation</Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full bg-transparent">
                            <Link href="/website-audit">Get Free Audit</Link>
                        </Button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Sunset Vista Co. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/sitemap.xml" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
