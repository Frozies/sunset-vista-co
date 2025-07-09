import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#073763]/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-3">
        <Link href="#" className="flex items-center gap-2">
          <Image src={'/logo.png'} alt={"The Sunset Vista Company"} width={160} height={60} className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          <Link className="px-4 py-2 rounded-full font-semibold text-white hover:bg-[#F0C244]/20 transition" href="#about">
            About
          </Link>
          <Link className="px-4 py-2 rounded-full font-semibold text-white hover:bg-[#F0C244]/20 transition" href="#services">
            Services
          </Link>
          <Link className="px-4 py-2 rounded-full font-semibold text-white hover:bg-[#F0C244]/20 transition" href="#projects">
            Projects
          </Link>
          <Link className="px-4 py-2 rounded-full font-semibold text-white hover:bg-[#F0C244]/20 transition" href="#contact">
            Contact
          </Link>
        </nav>
        <Link href="#contact" className="hidden md:inline-flex items-center rounded-full bg-[#F0C244] px-6 py-2 text-[#073763] font-bold shadow hover:bg-[#EC7210] hover:text-white transition ml-4">
          Get a Quote
        </Link>
        {/* Mobile menu placeholder (for future expansion) */}
        <button className="md:hidden p-2 rounded-full hover:bg-[#F0C244]/20 transition" aria-label="Open menu">
          <svg className="w-7 h-7 text-[#073763]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};