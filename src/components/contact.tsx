"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"
import { Handshake, CheckCircle, ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { trackContactSubmission } from "@/lib/analytics"

export type FormData = {
    name: string
    email: string
    message: string
    phone?: string
}

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function onSubmit(data: FormData) {
        setIsSubmitting(true)
        setError(null)

        const fullMessage = data.message + (data.phone ? `\nPhone: ${data.phone}` : "")

        trackContactSubmission()

        try {
            const response = await fetch("/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...data, message: fullMessage }),
            })

            const result = await response.json()

            if (response.ok) {
                setIsSubmitted(true)
            } else {
                setError(result.message || "Something went wrong. Please try again.")
            }
        } catch (err) {
            setError("Failed to send message. Please try again or call us directly.")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted py-12 px-4">
                <div className="container mx-auto">
                    <div className="max-w-2xl mx-auto text-center bg-card rounded-2xl shadow-2xl border border-border p-6 sm:p-12">
                        <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-4 sm:mb-6" />
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Thank You!</h1>
                        <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6">
                            We&apos;ve received your message and will get back to you within 24 hours.
                        </p>
                        <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                            We look forward to helping your Southwest Florida business succeed online.
                        </p>
                        <button
                            onClick={() => (window.location.href = "/")}
                            className="inline-flex items-center gap-2 rounded-full bg-[#F0C244] py-2.5 px-6 sm:py-3 sm:px-8 text-base sm:text-lg font-bold text-white hover:bg-[#EC7210] transition"
                        >
                            Return to Homepage
                            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="relative py-12 sm:py-16 md:py-24 lg:py-36 bg-gradient-to-br from-background via-background to-muted">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
                    <div className="space-y-6 sm:space-y-8 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/50 p-6 sm:p-8 md:p-12">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <Handshake className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-2" />
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-2">
                                Let&apos;s Connect
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl font-medium">
                                Ready to start your next project or have questions? Fill out the form and we&apos;ll get back to you
                                fast.
                            </p>
                        </div>

                        {error && (
                            <div className="w-full bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{error}</div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="w-full grid gap-4 sm:gap-6">
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                                <div className="grid gap-2">
                                    <label htmlFor="name" className="block text-sm sm:text-base font-semibold text-foreground mb-1">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full rounded-lg border border-input bg-background py-2.5 px-4 sm:py-3 sm:px-6 text-sm sm:text-base font-medium text-foreground outline-none focus:border-[#F0C244] focus:ring-2 focus:ring-[#F0C244]/20 transition"
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name && <span className="text-xs sm:text-sm text-red-600">Name is required</span>}
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-foreground mb-1">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full rounded-lg border border-input bg-background py-2.5 px-4 sm:py-3 sm:px-6 text-sm sm:text-base font-medium text-foreground outline-none focus:border-[#F0C244] focus:ring-2 focus:ring-[#F0C244]/20 transition"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <span className="text-xs sm:text-sm text-red-600">Email is required</span>}
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="phone" className="block text-sm sm:text-base font-semibold text-foreground mb-1">
                                        Phone (optional)
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="w-full rounded-lg border border-input bg-background py-2.5 px-4 sm:py-3 sm:px-6 text-sm sm:text-base font-medium text-foreground outline-none focus:border-[#F0C244] focus:ring-2 focus:ring-[#F0C244]/20 transition"
                                        {...register("phone")}
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="message" className="mb-2 block text-sm sm:text-base font-semibold text-foreground">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Tell us about your project"
                                    className="w-full resize-none rounded-lg border border-input bg-background py-2.5 px-4 sm:py-3 sm:px-6 text-sm sm:text-base font-medium text-foreground outline-none focus:border-[#F0C244] focus:ring-2 focus:ring-[#F0C244]/20 transition"
                                    {...register("message", { required: true })}
                                ></textarea>
                                {errors.message && <span className="text-xs sm:text-sm text-red-600">Message is required</span>}
                            </div>
                            <button
                                className="hover:shadow-lg rounded-full bg-primary py-3 px-8 sm:py-4 sm:px-10 text-base sm:text-lg font-bold text-white outline-none transition hover:bg-[#EC7210] focus:ring-2 focus:ring-[#F0C244] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                    <div className="space-y-6 sm:space-y-8">
                        <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50 p-6 sm:p-8">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Get In Touch</h2>
                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">Phone</h3>
                                        <a
                                            href="tel:+19415291858"
                                            className="text-sm sm:text-base text-muted-foreground hover:text-primary transition break-all"
                                        >
                                            (941) 529-1858
                                        </a>
                                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">Mon-Fri, 9am-5pm EST</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">Email</h3>
                                        <a
                                            href="mailto:info@sunsetvista.co"
                                            className="text-sm sm:text-base text-muted-foreground hover:text-primary transition break-all"
                                        >
                                            info@sunsetvista.co
                                        </a>
                                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">We&apos;ll respond within 24 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">Location</h3>
                                        <p className="text-sm sm:text-base text-muted-foreground">Fort Myers, FL</p>
                                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">Serving all of Southwest Florida</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50 p-6 sm:p-8">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Why Choose Us?</h2>
                            <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Free initial consultation and website audit</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Local Southwest Florida team with in-person support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Custom solutions tailored to your business goals</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Transparent pricing with no hidden fees</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>Proven track record with Southwest Florida businesses</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-gradient-to-br from-[#F0C244]/10 to-[#EC7210]/10 backdrop-blur-sm rounded-2xl shadow-xl border border-[#F0C244]/20 p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Frequently Asked Questions</h2>
                        <div className="space-y-3 sm:space-y-4">
                            <div>
                                <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1.5 sm:mb-2">
                                    How quickly will you respond?
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">
                                    We typically respond to all inquiries within 24 hours during business days.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1.5 sm:mb-2">
                                    Do you offer free consultations?
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">
                                    Yes! We offer free initial consultations and website audits to understand your needs.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1.5 sm:mb-2">
                                    What areas do you serve?
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">
                                    We serve Fort Myers, Naples, Cape Coral, and all of Southwest Florida with in-person support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
