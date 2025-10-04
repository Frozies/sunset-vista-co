"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"

const navigationConfig = [
    {
        label: "Services",
        href: "/services",
        dropdown: [
            { label: "Web Design", href: "/services/web-design" },
            { label: "SEO", href: "/services/seo" },
            { label: "Get Ranked on Google", href: "/services/seo/google-ranking" },
            { label: "E-commerce", href: "/services/ecommerce" },
            { label: "Digital Marketing", href: "/services/digital-marketing" },
        ],
    },
    { label: "Learn", href: "/education" },
    { label: "Free Audit", href: "/website-audit" },
    { label: "Contact", href: "/contact" },
]

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

    return (
        <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/images/icon.png" alt="Sunset Vista Co" width={32} height={32} className="w-8 h-8" />
                        <span className="font-semibold text-lg">Sunset Vista Co</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigationConfig.map((item) =>
                            item.dropdown ? (
                                <DropdownMenu key={item.label}>
                                    <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors outline-none">
                                        {item.label}
                                        <ChevronDown className="h-4 w-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start" className="w-48">
                                        {item.dropdown.map((subItem) => (
                                            <DropdownMenuItem key={subItem.href} asChild>
                                                <Link href={subItem.href} className="cursor-pointer">
                                                    {subItem.label}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link key={item.href} href={item.href} className="text-foreground hover:text-primary transition-colors">
                                    {item.label}
                                </Link>
                            ),
                        )}
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
                            {navigationConfig.map((item) =>
                                item.dropdown ? (
                                    <div key={item.label}>
                                        <button
                                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                            className="flex items-center justify-between w-full px-3 py-2 text-foreground hover:text-primary transition-colors"
                                        >
                                            {item.label}
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        {mobileServicesOpen && (
                                            <div className="pl-4 space-y-1">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.href}
                                                        href={subItem.href}
                                                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ),
                            )}
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
