'use client';
import Link from "next/link";

const LeadMagnet = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#4dd0e1] flex justify-center" id="free-consultation">
      <div className="max-w-xl w-full bg-white/90 rounded-2xl shadow-2xl border border-[#F0C244]/20 p-8 md:p-12 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4 text-center drop-shadow-lg">Ready to Transform Your Business?</h2>
        <p className="text-lg text-gray-700 mb-6">Get expert advice, a custom plan, and a no-pressure quote—completely free. Let's discuss how we can help you achieve your goals.</p>
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-gray-700">
            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Free 30-minute consultation</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Custom project roadmap</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>No obligation, no pressure</span>
          </div>
        </div>
        <Link 
          href="#contact" 
          className="rounded-full bg-[#F0C244] py-4 px-10 text-lg font-bold text-white outline-none transition hover:bg-[#EC7210] focus:ring-2 focus:ring-[#F0C244] focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Get Your Free Consultation
        </Link>
        <p className="text-sm text-gray-500 mt-4">Limited availability - Book your spot today!</p>
      </div>
    </section>
  );
};

export default LeadMagnet; 