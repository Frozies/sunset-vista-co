'use client';

import { useState } from "react";
import { FaSearch, FaSpinner, FaCheckCircle, FaExclamationTriangle, FaUser, FaGlobe } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AuditForm {
    name: string;
    email: string;
    website: string;
    businessType: string;
    goals: string;
}

interface AuditResults {
    lighthouse: any;
    pa11y: any;
    recommendations: string[];
}

export const WebsiteAuditForm = () => {
    const [formData, setFormData] = useState<AuditForm>({
        name: "",
        email: "",
        website: "",
        businessType: "",
        goals: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [auditResults, setAuditResults] = useState<AuditResults | null>(null);

    const handleInputChange = (field: keyof AuditForm, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const validateUrl = (url: string) => {
        try {
            const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
            return urlObj.href;
        } catch {
            return null;
        }
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        const validatedUrl = validateUrl(formData.website);
        if (!validatedUrl) {
            setSubmitStatus("error");
            setErrorMessage("Please enter a valid website URL");
            setIsSubmitting(false);
            return;
        }

        try {
            // Call the real audit API
            const response = await fetch("/api/audit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    url: validatedUrl,
                    name: formData.name,
                    email: formData.email,
                    businessType: formData.businessType,
                    goals: formData.goals
                }),
            });

            if (response.ok) {
                const data = await response.json();
                
                // Store results in sessionStorage for the results page
                sessionStorage.setItem('auditResults', JSON.stringify(data));
                
                // Redirect to results page
                window.location.href = '/audit/results';
            } else {
                const errorData = await response.json();
                setSubmitStatus("error");
                setErrorMessage(errorData.error || "Failed to run website audit");
            }
        } catch (error) {
            setSubmitStatus("error");
            setErrorMessage("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                <h2 className="text-3xl font-bold mb-4">Start Your Free Website Audit</h2>
                <p className="text-blue-100">Enter your website details below and we&apos;ll run a comprehensive analysis using industry-standard tools.</p>
            </div>
            
            <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <FaUser className="text-blue-600" />
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
                    </div>

                    {/* Website Information */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <FaGlobe className="text-blue-600" />
                            Website Information
                        </h3>
                        
                        <div>
                            <Label htmlFor="website" className="text-gray-700 font-medium">
                                Website URL *
                            </Label>
                            <Input
                                id="website"
                                type="url"
                                value={formData.website}
                                onChange={(e) => handleInputChange("website", e.target.value)}
                                required
                                className="mt-1"
                                placeholder="https://yourwebsite.com"
                            />
                        </div>

                        <div>
                            <Label htmlFor="businessType" className="text-gray-700 font-medium">
                                Business Type
                            </Label>
                            <Input
                                id="businessType"
                                type="text"
                                value={formData.businessType}
                                onChange={(e) => handleInputChange("businessType", e.target.value)}
                                className="mt-1"
                                placeholder="e.g., E-commerce, Service Business, Portfolio"
                            />
                        </div>

                        <div>
                            <Label htmlFor="goals" className="text-gray-700 font-medium">
                                What are your main goals for the website?
                            </Label>
                            <Textarea
                                id="goals"
                                value={formData.goals}
                                onChange={(e) => handleInputChange("goals", e.target.value)}
                                className="mt-1"
                                placeholder="e.g., Increase conversions, improve user experience, boost SEO rankings"
                                rows={3}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                        <Button
                            type="submit"
                            disabled={isSubmitting || isScanning}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-lg hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 text-lg"
                        >
                            {isScanning ? (
                                <>
                                    <FaSpinner className="w-5 h-5 mr-2 animate-spin" />
                                    Running Website Audit...
                                </>
                            ) : isSubmitting ? (
                                <>
                                    <FaSpinner className="w-5 h-5 mr-2 animate-spin" />
                                    Sending Report...
                                </>
                            ) : (
                                <>
                                    <FaSearch className="w-5 h-5 mr-2" />
                                    Start Free Website Audit
                                </>
                            )}
                        </Button>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <div className="flex items-center gap-2">
                                <FaCheckCircle className="w-5 h-5 text-green-600" />
                                <span className="text-green-800 font-medium">
                                    Audit completed! Check your email for the detailed report.
                                </span>
                            </div>
                        </div>
                    )}

                    {submitStatus === "error" && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <div className="flex items-center gap-2">
                                <FaExclamationTriangle className="w-5 h-5 text-red-600" />
                                <span className="text-red-800 font-medium">
                                    {errorMessage}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Audit Results Preview */}
                    {auditResults && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                            <h3 className="text-lg font-bold text-blue-900 mb-4">Audit Results Preview</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-blue-800 mb-2">Lighthouse Scores</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600">Performance:</span>
                                            <span className="font-medium">{auditResults.lighthouse.performance}/100</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600">Accessibility:</span>
                                            <span className="font-medium">{auditResults.lighthouse.accessibility}/100</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600">Best Practices:</span>
                                            <span className="font-medium">{auditResults.lighthouse.bestPractices}/100</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600">SEO:</span>
                                            <span className="font-medium">{auditResults.lighthouse.seo}/100</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-800 mb-2">Accessibility Issues</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600">Violations:</span>
                                            <span className="font-medium text-red-600">{auditResults.pa11y.violations}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600">Passes:</span>
                                            <span className="font-medium text-green-600">{auditResults.pa11y.passes}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-600">Total Issues:</span>
                                            <span className="font-medium">{auditResults.pa11y.totalIssues}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <p className="text-sm text-yellow-800">
                                    <strong>Note:</strong> Your website needs improvements to meet modern web standards. 
                                    A detailed report with specific recommendations has been sent to your email.
                                </p>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}; 