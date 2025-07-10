'use client';
import Link from "next/link";
import { FaSearch, FaChartLine, FaMobile, FaRocket } from "react-icons/fa";

const WebsiteAuditLeadMagnet = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] flex justify-center" id="website-audit">
      <div className="max-w-4xl w-full bg-white/95 rounded-2xl shadow-2xl border border-blue-200/20 p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <FaSearch className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">
            Free Website Audit
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            Discover what&apos;s holding your website back and get actionable insights to improve performance, accessibility, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FaChartLine className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Performance Analysis</h3>
            <p className="text-sm text-gray-600">Speed, Core Web Vitals, and optimization opportunities</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FaMobile className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Accessibility Check</h3>
            <p className="text-sm text-gray-600">WCAG compliance and inclusive design recommendations</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FaRocket className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Action Plan</h3>
            <p className="text-sm text-gray-600">Prioritized recommendations to boost your results</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">What You&apos;ll Get:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Detailed performance report</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Accessibility compliance score</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>SEO optimization insights</span>
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Mobile responsiveness check</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Security vulnerability scan</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Custom improvement roadmap</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/website-audit" 
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 py-4 px-10 text-lg font-bold text-white outline-none transition hover:from-indigo-600 hover:to-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Your Free Website Audit
          </Link>
          <p className="text-sm text-gray-500 mt-4">Takes just 2 minutes • No credit card required</p>
        </div>
      </div>
    </section>
  );
};

export default WebsiteAuditLeadMagnet; 