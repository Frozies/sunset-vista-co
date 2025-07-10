"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#073763]/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-3">
        <Link href="#" className="flex items-center gap-2">
          <Image src={'/logo.png'} alt={"The Sunset Vista Company"} width={160} height={60} className="h-10 w-auto" />
        </Link>
        
        {/* Desktop Navigation */}
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
          <Link className="px-4 py-2 rounded-full font-semibold text-white hover:bg-[#F0C244]/20 transition" href="/pricing">
            Pricing
          </Link>
          <Link className="px-4 py-2 rounded-full font-semibold text-white hover:bg-[#F0C244]/20 transition" href="#contact">
            Contact
          </Link>
        </nav>
        
        {/* Desktop CTA Button */}
        <Link href="#contact" className="hidden md:inline-flex items-center rounded-full bg-[#F0C244] px-6 py-2 text-[#073763] font-bold shadow hover:bg-[#EC7210] hover:text-white transition ml-4">
          Get a Quote
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-full hover:bg-[#F0C244]/20 transition" 
          aria-label="Open menu"
          onClick={toggleMobileMenu}
        >
          <svg 
            className="w-7 h-7 text-white transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/50" onClick={closeMobileMenu} />
      )}

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 z-50 h-full w-80 bg-[#073763] shadow-xl transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <Link href="#" className="flex items-center gap-2" onClick={closeMobileMenu}>
              <Image src={'/logo.png'} alt={"The Sunset Vista Company"} width={120} height={45} className="h-8 w-auto" />
            </Link>
            <button 
              onClick={closeMobileMenu}
              className="p-2 rounded-full hover:bg-[#F0C244]/20 transition"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col flex-1 p-6">
            <Link 
              className="px-4 py-3 rounded-lg font-semibold text-white hover:bg-[#F0C244]/20 transition mb-2" 
              href="#about"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link 
              className="px-4 py-3 rounded-lg font-semibold text-white hover:bg-[#F0C244]/20 transition mb-2" 
              href="#services"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link 
              className="px-4 py-3 rounded-lg font-semibold text-white hover:bg-[#F0C244]/20 transition mb-2" 
              href="#projects"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link 
              className="px-4 py-3 rounded-lg font-semibold text-white hover:bg-[#F0C244]/20 transition mb-2" 
              href="/pricing"
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
            <Link 
              className="px-4 py-3 rounded-lg font-semibold text-white hover:bg-[#F0C244]/20 transition mb-2" 
              href="#contact"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile CTA Button */}
          <div className="p-6 border-t border-white/20">
            <Link 
              href="#contact" 
              className="w-full inline-flex items-center justify-center rounded-full bg-[#F0C244] px-6 py-3 text-[#073763] font-bold shadow hover:bg-[#EC7210] hover:text-white transition"
              onClick={closeMobileMenu}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};