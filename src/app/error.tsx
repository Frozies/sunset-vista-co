"use client"
import {Navigation} from "@/components/v2/navigation";
import {Footer} from "@/components/v2/footer";
import type { Metadata } from "next"
import {useEffect} from "react";
import {Button} from "@/components/ui/button";
import {Home, Mail, RefreshCw} from "lucide-react";
import Link from "next/link";
export const metadata: Metadata = {
    metadataBase: new URL("https://sunsetvista.co"),
    title: "Server Error | Sunset Vista Co",
    description:
        "Something went wrong on our end. Please try again or return to the homepage. If the problem continues, contact Sunset Vista Co support.",
    keywords: [
        "500 error",
        "server error",
        "internal server error",
        "Sunset Vista Co"
    ],
    robots: { index: false, follow: true },
    alternates: { canonical: "https://sunsetvista.co/500" },
    openGraph: {
        title: "Server Error | Sunset Vista Co",
        description:
            "We are experiencing a temporary issue. Please try again or head back to the homepage.",
        url: "https://sunsetvista.co/500",
        siteName: "Sunset Vista Co",
        images: [
            {
                url: "https://sunsetvista.co/og-image.png",
                width: 1200,
                height: 630,
                alt: "Server Error - Sunset Vista Co"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Server Error | Sunset Vista Co",
        description:
            "Something went wrong. Please try again or return to the homepage.",
        images: ["https://sunsetvista.co/og-image.png"],
        creator: "@sunsetvistaco"
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/icon1.png",
        apple: "/apple-icon.png",
        other: [{ rel: "manifest", url: "/manifest.json" }]
    },
    category: "business"
}
export default function ErrorPage({
                                      error,
                                      reset,
                                  }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen">
            <Navigation/>
            <div className="flex items-center justify-center bg-gradient-to-br from-background via-background to-orange-500/5">
                <div className="container mx-auto px-4 py-16 text-center">
                    <div className="max-w-2xl mx-auto">
                        {/* Error Heading */}
                        <div className="mb-8">
                            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                                Oops!
                            </h1>
                        </div>

                        {/* Message */}
                        <div className="mb-8 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Something Went Wrong</h2>
                            <p className="text-lg text-muted-foreground max-w-md mx-auto">
                                We encountered an unexpected error. Don&apos;t worry, our team has been notified and we&apos;re working on
                                it.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Button onClick={reset} size="lg">
                                <RefreshCw className="mr-2 h-5 w-5" />
                                Try Again
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/">
                                    <Home className="mr-2 h-5 w-5" />
                                    Go Home
                                </Link>
                            </Button>
                        </div>

                        {/* Quick Links */}
                        <div className="border-t border-border pt-8">
                            <p className="text-sm text-muted-foreground mb-4">Need help? We&apos;re here for you:</p>
                            <div className="flex flex-wrap gap-3 justify-center">
                                <Link href="/contact" className="text-sm text-primary hover:underline">
                                    Contact Support
                                </Link>
                                <Link href="/services" className="text-sm text-primary hover:underline">
                                    Our Services
                                </Link>
                                <Link href="/website-audit" className="text-sm text-primary hover:underline">
                                    Free Website Audit
                                </Link>
                            </div>
                        </div>

                        {/* Contact CTA */}
                        <div className="mt-8">
                            <Button asChild variant="ghost">
                                <Link href="/contact">
                                    <Mail className="mr-2 h-4 w-4" />
                                    Get In Touch
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
