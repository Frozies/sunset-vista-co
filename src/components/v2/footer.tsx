import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

const footerConfig = {
    services: {
        title: "Services",
        links: [
            { label: "All Services", href: "/services" },
            { label: "SEO Services", href: "/services/seo" },
            { label: "Get Ranked on Google", href: "/services/seo/google-ranking" },
            { label: "Web Design", href: "/services/web-design" },
            { label: "E-Commerce", href: "/services/ecommerce" },
            { label: "Digital Marketing", href: "/services/digital-marketing" },
            { label: "Free Website Audit", href: "/website-audit" },
        ],
    },
    company: {
        title: "Company",
        links: [
            { label: "Learn", href: "/education" },
            { label: "Contact Us", href: "/contact" },
            // { label: "About Us", href: "/about" },
        ],
    },
    legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Sitemap", href: "/sitemap.xml" },
    ],
}

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
                                <a href="tel:+19415291858" className="hover:text-primary transition-colors">
                                    (941) 529-1858
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

                    <div>
                        <h3 className="font-semibold text-lg mb-4">{footerConfig.services.title}</h3>
                        <ul className="space-y-2">
                            {footerConfig.services.links.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">{footerConfig.company.title}</h3>
                        <ul className="space-y-2">
                            {footerConfig.company.links.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
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
                            {footerConfig.legal.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
