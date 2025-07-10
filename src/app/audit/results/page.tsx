'use client';

import { useEffect, useState } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaArrowRight, FaPhone, FaEnvelope, FaCalendar, FaStar, FaChartLine, FaUsers, FaRocket, FaGlobe, FaSearch } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import AuditContactForm from '@/components/audit-contact-form';

interface AuditResults {
    lighthouse: {
        performance: number;
        accessibility: number;
        bestPractices: number;
        seo: number;
        totalScore: number;
    };
    recommendations: string[];
}

interface UserData {
    name: string;
    email: string;
    url: string;
    businessType: string;
    goals: string;
}

export default function AuditResultsPage() {
    const [auditData, setAuditData] = useState<{ results: AuditResults; userData: UserData } | null>(null);
    const [showScheduler, setShowScheduler] = useState(false);

    useEffect(() => {
        const storedData = sessionStorage.getItem('auditResults');
        if (storedData) {
            setAuditData(JSON.parse(storedData));
        }
    }, []);

    if (!auditData) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading your audit results...</p>
                </div>
            </div>
        );
    }

    const { results, userData } = auditData;
    const { lighthouse, recommendations } = results;

    const getScoreColor = (score: number) => {
        if (score >= 90) return 'text-green-600';
        if (score >= 70) return 'text-yellow-600';
        return 'text-red-600';
    };

    const getScoreIcon = (score: number) => {
        if (score >= 90) return <FaCheckCircle className="w-5 h-5 text-green-600" />;
        if (score >= 70) return <FaExclamationTriangle className="w-5 h-5 text-yellow-600" />;
        return <FaExclamationTriangle className="w-5 h-5 text-red-600" />;
    };

    const getOverallRating = () => {
        if (lighthouse.totalScore >= 90) return { text: 'Excellent', color: 'text-green-600', bg: 'bg-green-100' };
        if (lighthouse.totalScore >= 70) return { text: 'Good', color: 'text-yellow-600', bg: 'bg-yellow-100' };
        return { text: 'Needs Improvement', color: 'text-red-600', bg: 'bg-red-100' };
    };

    const overallRating = getOverallRating();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Website Audit Results</h1>
                            <p className="text-gray-600 mt-1">Your comprehensive website analysis is ready</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Analyzed Website</p>
                            <p className="font-medium text-gray-900 flex items-center gap-2">
                                <FaGlobe className="w-4 h-4 text-blue-600" />
                                {userData.url}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Overall Score */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <div className="text-center">
                        <div className={`inline-flex items-center px-4 py-2 rounded-full ${overallRating.bg} mb-4`}>
                            <span className={`font-semibold ${overallRating.color}`}>{overallRating.text}</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">
                            {lighthouse.totalScore}/100
                        </h2>
                        <p className="text-xl text-gray-600 mb-6">Overall Website Score</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="flex items-center justify-center mb-2">
                                    {getScoreIcon(lighthouse.performance)}
                                </div>
                                <p className="text-sm text-gray-600">Performance</p>
                                <p className={`text-2xl font-bold ${getScoreColor(lighthouse.performance)}`}>
                                    {lighthouse.performance}/100
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center mb-2">
                                    {getScoreIcon(lighthouse.accessibility)}
                                </div>
                                <p className="text-sm text-gray-600">Accessibility</p>
                                <p className={`text-2xl font-bold ${getScoreColor(lighthouse.accessibility)}`}>
                                    {lighthouse.accessibility}/100
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center mb-2">
                                    {getScoreIcon(lighthouse.bestPractices)}
                                </div>
                                <p className="text-sm text-gray-600">Best Practices</p>
                                <p className={`text-2xl font-bold ${getScoreColor(lighthouse.bestPractices)}`}>
                                    {lighthouse.bestPractices}/100
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center mb-2">
                                    {getScoreIcon(lighthouse.seo)}
                                </div>
                                <p className="text-sm text-gray-600">SEO</p>
                                <p className={`text-2xl font-bold ${getScoreColor(lighthouse.seo)}`}>
                                    {lighthouse.seo}/100
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Findings */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <FaChartLine className="text-blue-600" />
                            Key Findings
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <FaUsers className="text-blue-600" />
                                <div>
                                    <p className="font-semibold text-gray-900">Performance Score</p>
                                    <p className="text-gray-600">{lighthouse.performance}/100</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaCheckCircle className="text-green-600" />
                                <div>
                                    <p className="font-semibold text-gray-900">Accessibility Score</p>
                                    <p className="text-gray-600">{lighthouse.accessibility}/100</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaExclamationTriangle className="text-yellow-600" />
                                <div>
                                    <p className="font-semibold text-gray-900">SEO Score</p>
                                    <p className="text-gray-600">{lighthouse.seo}/100</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <FaRocket className="text-blue-600" />
                            Growth Opportunities
                        </h3>
                        <div className="space-y-4">
                            <div className="bg-blue-50 rounded-lg p-4">
                                <p className="font-semibold text-blue-900">Performance Optimization</p>
                                <p className="text-blue-700 text-sm">Improve loading speed and user experience</p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4">
                                <p className="font-semibold text-green-900">SEO Enhancement</p>
                                <p className="text-green-700 text-sm">Boost search engine visibility</p>
                            </div>
                            <div className="bg-purple-50 rounded-lg p-4">
                                <p className="font-semibold text-purple-900">Accessibility Compliance</p>
                                <p className="text-purple-700 text-sm">Reach more users with disabilities</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recommendations */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <FaSearch className="text-blue-600" />
                        Priority Recommendations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {recommendations.map((recommendation, index) => (
                            <div key={index} className="bg-slate-50 rounded-lg p-4 border-l-4 border-blue-500 hover:bg-slate-100 transition-colors">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                                        <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                                    </div>
                                    <p className="text-gray-900 font-medium">{recommendation}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-slate-800 to-gray-900 rounded-2xl shadow-xl p-8 text-white">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Website?</h3>
                        <p className="text-xl text-gray-300 mb-8">
                            Your audit reveals {recommendations.length} key opportunities to improve your website&apos;s performance, 
                            accessibility, and search engine rankings. Let&apos;s discuss how we can implement these improvements 
                            to drive more traffic and conversions.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="text-center">
                                <FaChartLine className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                                <h4 className="font-semibold mb-2">Performance Boost</h4>
                                <p className="text-gray-300 text-sm">Faster loading times and better user experience</p>
                            </div>
                            <div className="text-center">
                                <FaUsers className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                                <h4 className="font-semibold mb-2">Accessibility Compliance</h4>
                                <p className="text-gray-300 text-sm">Reach more users and avoid legal issues</p>
                            </div>
                            <div className="text-center">
                                <FaRocket className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                                <h4 className="font-semibold mb-2">SEO Optimization</h4>
                                <p className="text-gray-300 text-sm">Higher search rankings and more organic traffic</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => setShowScheduler(true)}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center gap-2"
                            >
                                <FaEnvelope className="w-5 h-5" />
                                Get in Touch
                            </Button>
                            <Button
                                onClick={() => window.location.href = 'mailto:davin@sunsetvista.co?subject=Website Audit Follow-up'}
                                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg text-lg flex items-center gap-2"
                            >
                                <FaEnvelope className="w-5 h-5" />
                                Email Us
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <FaPhone className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                            <h4 className="font-semibold mb-2">Call Us</h4>
                            <p className="text-gray-600">(239) 770-1730</p>
                        </div>
                        <div className="text-center">
                            <FaEnvelope className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                            <h4 className="font-semibold mb-2">Email Us</h4>
                            <p className="text-gray-600">davin@sunsetvista.co</p>
                        </div>
                        <div className="text-center">
                            <FaCalendar className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                            <h4 className="font-semibold mb-2">Schedule Meeting</h4>
                            <p className="text-gray-600">Free 30-minute consultation</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Modal */}
            {showScheduler && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
                                <Button
                                    onClick={() => setShowScheduler(false)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    ✕
                                </Button>
                            </div>
                            <AuditContactForm />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
} 