"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Mail, ArrowLeft } from "lucide-react"

export default function NotFoundClient() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-orange-500/5">
            <div className="container mx-auto px-4 py-16 text-center">
                <div className="max-w-2xl mx-auto">
                    {/* 404 Number */}
                    <div className="mb-8">
                        <h1 className="text-9xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                            404
                        </h1>
                    </div>

                    {/* Message */}
                    <div className="mb-8 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Page Not Found</h2>
                        <p className="text-lg text-muted-foreground max-w-md mx-auto">
                            Looks like this page took a sunset cruise and didn&apos;t come back. Let&apos;s get you back on track.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button asChild size="lg">
                            <Link href="/">
                                <Home className="mr-2 h-5 w-5" />
                                Go Home
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/contact">
                                <Mail className="mr-2 h-5 w-5" />
                                Contact Us
                            </Link>
                        </Button>
                    </div>

                    {/* Quick Links */}
                    <div className="border-t border-border pt-8">
                        <p className="text-sm text-muted-foreground mb-4">Or try one of these popular pages:</p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link href="/services" className="text-sm text-primary hover:underline">
                                Our Services
                            </Link>
                            <span className="text-muted-foreground">•</span>
                            <Link href="/website-audit" className="text-sm text-primary hover:underline">
                                Free Website Audit
                            </Link>
                        </div>
                    </div>

                    {/* Back Button */}
                    <div className="mt-8">
                        <Button
                            variant="ghost"
                            onClick={() => window.history.back()}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Go Back
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
