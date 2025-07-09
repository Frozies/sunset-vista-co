import React from "react";

const faqs = [
  {
    question: "How much does a website or ecommerce project cost?",
    answer: "Every project is unique! After a free consultation, you'll receive a custom quote based on your needs, features, and timeline."
  },
  {
    question: "How long does it take to launch?",
    answer: "Most websites launch in 2-6 weeks, depending on complexity and content readiness. Ecommerce and custom platforms may take longer."
  },
  {
    question: "What is your process?",
    answer: "We start with a free consultation, then move to planning, design, development, and launch. You'll get updates and can give feedback at every step."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes! We offer maintenance, updates, and support packages to keep your site running smoothly."
  },
  {
    question: "Can you help with SEO, analytics, or marketing?",
    answer: "Absolutely. We set up Google Analytics, Search Console, and can advise on SEO and digital marketing best practices."
  }
];

const processSteps = [
  "Free Consultation & Discovery",
  "Custom Proposal & Quote",
  "Design & Content Collaboration",
  "Development & Testing",
  "Launch & Training",
  "Ongoing Support & Growth"
];

export const FAQAndProcess = () => (
  <section className="py-24 md:py-36 bg-gradient-to-br from-[#f8fafc] via-[#f3f4f6] to-[#e5e7eb]" id="faq">
    <div className="container mx-auto px-4 md:px-8 max-w-4xl">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-8 text-center drop-shadow-lg">FAQ & Our Process</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#F0C244]">Frequently Asked Questions</h3>
          <ul className="space-y-6">
            {faqs.map((faq, i) => (
              <li key={i}>
                <div className="font-semibold text-[#073763] mb-1">{faq.question}</div>
                <div className="text-gray-700">{faq.answer}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#F0C244]">How We Work</h3>
          <ol className="space-y-4 list-decimal list-inside text-gray-700">
            {processSteps.map((step, i) => (
              <li key={i} className="font-medium">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default FAQAndProcess; 