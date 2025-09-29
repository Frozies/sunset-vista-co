"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/icon.png" alt="Sunset Vista Co" width={32} height={32} className="w-8 h-8" />
                        <span className="font-semibold text-lg">Sunset Vista Co</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                            Services
                        </Link>
                        <Link href="/education" className="text-foreground hover:text-primary transition-colors">
                            Learn
                        </Link>
                        <Link href="/case-studies" className="text-foreground hover:text-primary transition-colors">
                            Results
                        </Link>
                        <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                            Blog
                        </Link>
                        <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                            Contact
                        </Link>
                        <Button asChild>
                            <Link href="/contact">Free Consultation</Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
                            <Link
                                href="/services"
                                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="/education"
                                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Learn
                            </Link>
                            <Link
                                href="/case-studies"
                                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Results
                            </Link>
                            <Link
                                href="/blog"
                                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                            <div className="px-3 py-2">
                                <Button asChild className="w-full">
                                    <Link href="/contact">Free Consultation</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
