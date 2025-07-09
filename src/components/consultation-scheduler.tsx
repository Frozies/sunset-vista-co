"use client";

import { useState } from "react";
import { FaCalendarAlt, FaClock, FaPhone, FaEnvelope, FaUser, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ConsultationForm {
    name: string;
    email: string;
    phone: string;
    service: string;
    preferredDate: string;
    preferredTime: string;
    projectDetails: string;
    budget: string;
    timeline: string;
}

export const ConsultationScheduler = () => {
    const [formData, setFormData] = useState<ConsultationForm>({
        name: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        projectDetails: "",
        budget: "",
        timeline: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (field: keyof ConsultationForm, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            const response = await fetch("/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: `CONSULTATION REQUEST

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Service Interest:
- Service: ${formData.service}

Preferred Meeting Time:
- Date: ${formData.preferredDate}
- Time: ${formData.preferredTime}

Project Details:
${formData.projectDetails}

Additional Information:
- Budget: ${formData.budget}
- Timeline: ${formData.timeline}

This is a consultation request from the pricing page.`
                }),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    preferredDate: "",
                    preferredTime: "",
                    projectDetails: "",
                    budget: "",
                    timeline: ""
                });
            } else {
                const errorData = await response.json();
                setSubmitStatus("error");
                setErrorMessage(errorData.error || "Failed to send consultation request");
            }
        } catch (error) {
            setSubmitStatus("error");
            setErrorMessage("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative py-24 bg-gradient-to-br from-[#fffbe6] via-[#ffe0b2] to-[#ffb347] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#fffbe6]/80 via-[#ffe0b2]/60 to-transparent z-0 pointer-events-none" />
            <div className="absolute bottom-[-60px] right-[-80px] w-[340px] h-[220px] bg-[#F0C244]/40 rounded-full blur-3xl z-0" />
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-6 drop-shadow-lg">
                            Schedule Your Free Consultation
                        </h2>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                            Let&apos;s discuss your project and find the perfect solution for your business. 
                            No pressure, just a friendly conversation about your goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Consultation Form */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Contact Information */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <FaUser className="text-[#EC7210]" />
                                        Contact Information
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="name" className="text-gray-700 font-medium">
                                                Full Name *
                                            </Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => handleInputChange("name", e.target.value)}
                                                required
                                                className="mt-1"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="email" className="text-gray-700 font-medium">
                                                Email Address *
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange("email", e.target.value)}
                                                required
                                                className="mt-1"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <Label htmlFor="phone" className="text-gray-700 font-medium">
                                            Phone Number
                                        </Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange("phone", e.target.value)}
                                            className="mt-1"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>
                                </div>

                                {/* Service Selection */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <FaCheckCircle className="text-[#F0C244]" />
                                        Service Interest
                                    </h3>
                                    
                                    <div>
                                        <Label htmlFor="service" className="text-gray-700 font-medium">
                                            Which service are you interested in? *
                                        </Label>
                                        <select
                                            id="service"
                                            value={formData.service}
                                            onChange={(e) => handleInputChange("service", e.target.value)}
                                            required
                                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F0C244] focus:border-transparent"
                                        >
                                            <option value="">Select a service...</option>
                                            <option value="Small Business Starter ($1,750 - was $2,000)">Small Business Starter ($1,750 - was $2,000)</option>
                                            <option value="Professional Starter Website ($3,000)">Professional Starter Website ($3,000)</option>
                                            <option value="Ecommerce Business Launch ($8,000)">Ecommerce Business Launch ($8,000)</option>
                                            <option value="Custom Web Application ($12,000+)">Custom Web Application ($12,000+)</option>
                                            <option value="SEO & Content Strategy ($1,500)">SEO & Content Strategy ($1,500)</option>
                                            <option value="Branding & Visual Identity ($2,500)">Branding & Visual Identity ($2,500)</option>
                                            <option value="Performance & Security ($1,200)">Performance & Security ($1,200)</option>
                                            <option value="Monthly Support & Maintenance">Monthly Support & Maintenance</option>
                                            <option value="Analytics & Reporting Dashboard ($1,000)">Analytics & Reporting Dashboard ($1,000)</option>
                                            <option value="Conversion Optimization ($1,500)">Conversion Optimization ($1,500)</option>
                                            <option value="Express Delivery">Express Delivery</option>
                                            <option value="Not sure yet - need consultation">Not sure yet - need consultation</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Meeting Time */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <FaCalendarAlt className="text-[#F7931A]" />
                                        Preferred Meeting Time
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="preferredDate" className="text-gray-700 font-medium">
                                                Preferred Date *
                                            </Label>
                                            <Input
                                                id="preferredDate"
                                                type="date"
                                                value={formData.preferredDate}
                                                onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                                                required
                                                className="mt-1"
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="preferredTime" className="text-gray-700 font-medium">
                                                Preferred Time *
                                            </Label>
                                            <select
                                                id="preferredTime"
                                                value={formData.preferredTime}
                                                onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                                                required
                                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F0C244] focus:border-transparent"
                                            >
                                                <option value="">Select a time...</option>
                                                <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                                                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                                                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                                                <option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
                                                <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                                                <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                                                <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                                                <option value="Flexible - you choose">Flexible - you choose</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <FaEnvelope className="text-[#EC7210]" />
                                        Project Details
                                    </h3>
                                    
                                    <div>
                                        <Label htmlFor="projectDetails" className="text-gray-700 font-medium">
                                            Tell us about your project *
                                        </Label>
                                        <Textarea
                                            id="projectDetails"
                                            value={formData.projectDetails}
                                            onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                                            required
                                            className="mt-1 min-h-[100px]"
                                            placeholder="Describe your project goals, current challenges, and what you hope to achieve..."
                                        />
                                    </div>
                                </div>

                                {/* Additional Information */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <FaClock className="text-[#F0C244]" />
                                        Additional Information
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="budget" className="text-gray-700 font-medium">
                                                Budget Range
                                            </Label>
                                            <select
                                                id="budget"
                                                value={formData.budget}
                                                onChange={(e) => handleInputChange("budget", e.target.value)}
                                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F0C244] focus:border-transparent"
                                            >
                                                <option value="">Select budget range...</option>
                                                <option value="Under $5,000">Under $5,000</option>
                                                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                                <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                                                <option value="$20,000 - $50,000">$20,000 - $50,000</option>
                                                <option value="Over $50,000">Over $50,000</option>
                                                <option value="Need to discuss">Need to discuss</option>
                                            </select>
                                        </div>
                                        <div>
                                            <Label htmlFor="timeline" className="text-gray-700 font-medium">
                                                Timeline
                                            </Label>
                                            <select
                                                id="timeline"
                                                value={formData.timeline}
                                                onChange={(e) => handleInputChange("timeline", e.target.value)}
                                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F0C244] focus:border-transparent"
                                            >
                                                <option value="">Select timeline...</option>
                                                <option value="ASAP (1-2 weeks)">ASAP (1-2 weeks)</option>
                                                <option value="1-2 months">1-2 months</option>
                                                <option value="2-3 months">2-3 months</option>
                                                <option value="3-6 months">3-6 months</option>
                                                <option value="6+ months">6+ months</option>
                                                <option value="Flexible">Flexible</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-[#EC7210] to-[#F0C244] text-white font-bold py-4 px-8 rounded-lg hover:from-[#F0C244] hover:to-[#EC7210] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Schedule Free Consultation"}
                                    </Button>
                                </div>

                                {/* Status Messages */}
                                {submitStatus === "success" && (
                                    <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <FaCheckCircle className="text-green-500" />
                                        <span className="text-green-700 font-medium">
                                            Consultation request sent successfully! We&apos;ll get back to you within 24 hours.
                                        </span>
                                    </div>
                                )}

                                {submitStatus === "error" && (
                                    <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <FaExclamationCircle className="text-red-500" />
                                        <span className="text-red-700 font-medium">
                                            {errorMessage}
                                        </span>
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Information Panel */}
                        <div className="space-y-8">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">What to Expect</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-[#EC7210] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white font-bold text-sm">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Discovery Call</h4>
                                            <p className="text-gray-600">We&apos;ll discuss your business goals, current challenges, and project requirements.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-[#F0C244] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white font-bold text-sm">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Solution Proposal</h4>
                                            <p className="text-gray-600">We&apos;ll provide a tailored proposal with timeline, deliverables, and investment.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-[#F7931A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white font-bold text-sm">3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-2">Project Kickoff</h4>
                                            <p className="text-gray-600">Once approved, we&apos;ll begin development with regular updates and communication.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">Why Choose Us?</h3>
                                <ul className="space-y-4 text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Free consultation with no pressure or obligation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Transparent pricing with no hidden fees</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Local SW Florida business serving your community</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Ongoing support and maintenance available</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>Modern technologies and best practices</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}; 