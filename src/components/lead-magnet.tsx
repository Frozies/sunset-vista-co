'use client';
import React, { useState } from "react";

const LeadMagnet = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const business = formData.get("business") as string;
    const message = formData.get("message") as string;
    const fullMessage = `Business/Website: ${business}\n${message}`;
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: fullMessage })
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("Thank you! We'll be in touch soon.");
        form.reset();
      } else {
        setStatus(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#4dd0e1] flex justify-center" id="free-consultation">
      <div className="max-w-xl w-full bg-white/90 rounded-2xl shadow-2xl border border-[#F0C244]/20 p-8 md:p-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-2 text-center drop-shadow-lg">Get a Free Consultation</h2>
        <p className="text-lg text-gray-700 text-center mb-6">Curious how we can help your business? Get expert advice, a custom plan, and a no-pressure quote—free.</p>
        <form className="w-full grid gap-4" onSubmit={handleSubmit}>
          <input name="name" type="text" required placeholder="Your Name" className="rounded-lg border border-gray-300 bg-white py-3 px-5 text-base font-medium text-gray-700 outline-none focus:border-[#F0C244] focus:shadow-md" />
          <input name="email" type="email" required placeholder="Your Email" className="rounded-lg border border-gray-300 bg-white py-3 px-5 text-base font-medium text-gray-700 outline-none focus:border-[#F0C244] focus:shadow-md" />
          <input name="business" type="text" required placeholder="Business or Website (optional)" className="rounded-lg border border-gray-300 bg-white py-3 px-5 text-base font-medium text-gray-700 outline-none focus:border-[#F0C244] focus:shadow-md" />
          <textarea name="message" rows={3} placeholder="Tell us about your project or goals (optional)" className="rounded-lg border border-gray-300 bg-white py-3 px-5 text-base font-medium text-gray-700 outline-none focus:border-[#F0C244] focus:shadow-md resize-none" />
          <button type="submit" disabled={loading} className="rounded-full bg-[#F0C244] py-4 px-10 text-lg font-bold text-white outline-none transition hover:bg-[#EC7210] focus:ring-2 focus:ring-[#F0C244] focus:ring-offset-2 mt-2 disabled:opacity-60">
            {loading ? "Sending..." : "Request Free Consultation"}
          </button>
        </form>
        {status && <div className="mt-4 text-center text-[#073763] font-semibold">{status}</div>}
      </div>
    </section>
  );
};

export default LeadMagnet; 