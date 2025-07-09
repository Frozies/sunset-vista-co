import Image from "next/image";
import Link from "next/link";

const AboutMe = () => (
  <section className="relative py-28 md:py-40 bg-gradient-to-br from-[#f8fafc] via-[#fffbe6] to-[#ffe0b2]" id="about-me">
    <div className="container mx-auto px-4 md:px-8 max-w-4xl flex flex-col md:flex-row items-center gap-0 md:gap-12 relative z-10">
      {/* Card with vertical accent bar */}
      <div className="relative flex-1 bg-white/95 rounded-3xl shadow-2xl border border-[#F0C244]/30 p-10 md:pl-16 flex flex-col justify-center min-h-[340px]">
        <div className="absolute left-0 top-8 bottom-8 w-2 bg-gradient-to-b from-[#F0C244] to-[#EC7210] rounded-full hidden md:block" />
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#073763] mb-4 drop-shadow-lg">Meet Davin Young</h2>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold text-[#F0C244]">Founder, Inventor, Developer, Problem Solver.</span> I’m Davin, the person behind Sunset Vista Co. I help businesses and entrepreneurs turn ideas into beautiful, high-performing digital products, websites, ecommerce, SaaS, and more.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          My approach is hands-on, collaborative, and focused on results. Whether you’re a local shop or a global brand, I’ll help you grow with clean design, scalable tech, and a personal touch. Let’s build something great together!
        </p>
        <Link href="https://www.linkedin.com/in/davin-young-9463841a7/" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[#F0C244] px-8 py-3 text-lg text-[#073763] font-bold shadow-lg hover:bg-[#EC7210] hover:text-white transition">
          View LinkedIn
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
        </Link>
      </div>
      {/* Overlapping photo */}
      <div className="relative -ml-8 md:-ml-16 z-20 mt-[-60px] md:mt-0">
        <div className="rounded-full shadow-2xl border-4 border-[#F0C244] bg-white p-2">
          <Image
            src="/davin.jpg"
            alt="Davin Young"
            width={260}
            height={260}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe; 