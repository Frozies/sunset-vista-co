"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackButtonClick, trackNavigation } from "@/lib/analytics";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isPricingPage = pathname === "/pricing";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Helper function to create navigation links
  const createNavLink = (href: string, label: string, className: string) => {
    const handleClick = () => {
      trackNavigation(label);
      closeMobileMenu();
    };

    if (isPricingPage && href.startsWith("#")) {
      // If on pricing page and link is a section, go to main page first
      return (
        <Link 
          className={className} 
          href={`/${href}`}
          onClick={handleClick}
        >
          {label}
        </Link>
      );
    } else {
      // Normal navigation
      return (
        <Link 
          className={className} 
          href={href}
          onClick={handleClick}
        >
          {label}
        </Link>
      );
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay - Outside header to cover full viewport */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-black/50" 
          onClick={closeMobileMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 40
          }}
        />
      )}

      <header className="sticky top-0 z-50 bg-[#073763]/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src={'/logo.png'} alt={"The Sunset Vista Company"} width={160} height={60} className="h-10 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {createNavLink("#about", "Home", "px-4 py-2 rounded-full font-semibold text-white hover:bg-[#F0C244]/20 transition")}
            {createNavLink("#projects", "Projects", "px-4 py-2 rounded-full font-semibold text-white hover:bg-[#F0C244]/20 transition")}
            {createNavLink("#services", "Services", "px-4 py-2 rounded-full font-semibold text-white hover:bg-[#F0C244]/20 transition")}
            {createNavLink("#about-me", "About", "px-4 py-2 rounded-full font-semibold text-white hover:bg-[#F0C244]/20 transition")}
            {createNavLink("/pricing", "Pricing", "px-4 py-2 rounded-full font-semibold text-white hover:bg-[#F0C244]/20 transition")}
            {createNavLink("/website-audit", "Free Audit", "px-4 py-2 rounded-full font-semibold text-white hover:bg-[#F0C244]/20 transition")}
            {createNavLink("#contact", "Contact", "px-4 py-2 rounded-full font-semibold text-white hover:bg-[#F0C244]/20 transition")}
          </nav>
          
          {/* Desktop CTA Button */}
          <Link 
            href={isPricingPage ? "/#contact" : "#contact"} 
            className="hidden md:inline-flex items-center rounded-full bg-[#F0C244] px-6 py-2 text-[#073763] font-bold shadow hover:bg-[#EC7210] hover:text-white transition ml-4"
            onClick={() => trackButtonClick("Get a Quote", "header_desktop")}
          >
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

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 right-0 z-[60] h-screen w-80 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`} style={{ 
          backgroundColor: '#073763',
          boxShadow: '0 0 25px rgba(0, 0, 0, 0.3)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
          height: '100vh'
        }}>
          <div className="flex flex-col h-screen w-full" style={{ backgroundColor: '#073763' }}>
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/20" style={{ backgroundColor: '#073763' }}>
              <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
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
            <nav className="flex flex-col flex-1 p-6" style={{ backgroundColor: '#073763' }}>
              {createNavLink("#about", "Home", "px-4 py-3 rounded-lg font-semibold text-white hover:bg-[#F0C244]/20 transition mb-2")}
              {createNavLink("#projects", "Projects", "px-4 py-3 rounded-lg font-semibold text-white hover:bg-[#F0C244]/20 transition mb-2")}
              {createNavLink("#services", "Services", "px-4 py-3 rounded-lg font-semibold text-white hover:bg-[#F0C244]/20 transition mb-2")}
              {createNavLink("#about-me", "About", "px-4 py-3 rounded-lg font-semibold text-white hover:bg-[#F0C244]/20 transition mb-2")}
              {createNavLink("/pricing", "Pricing", "px-4 py-3 rounded-lg font-semibold text-white hover:bg-[#F0C244]/20 transition mb-2")}
              {createNavLink("/website-audit", "Free Audit", "px-4 py-3 rounded-lg font-semibold text-white hover:bg-[#F0C244]/20 transition mb-2")}
              {createNavLink("#contact", "Contact", "px-4 py-3 rounded-lg font-semibold text-white hover:bg-[#F0C244]/20 transition mb-2")}
            </nav>

            {/* Mobile CTA Button */}
            <div className="p-6 border-t border-white/20" style={{ backgroundColor: '#073763' }}>
              <Link 
                href={isPricingPage ? "/#contact" : "#contact"}
                className="w-full inline-flex items-center justify-center rounded-full bg-[#F0C244] px-6 py-3 text-[#073763] font-bold shadow hover:bg-[#EC7210] hover:text-white transition"
                onClick={() => {
                  trackButtonClick("Get a Quote", "header_mobile");
                  closeMobileMenu();
                }}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};