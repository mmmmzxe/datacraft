'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/courses', label: 'Courses' },
  { href: '/programs', label: 'Programs' },
  { href: '/instructors', label: 'Instructors' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About Us' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="border-b border-white/5  ">
      <header className="fixed top-0 left-0 right-0 z-50 px-6  py-6  bg-[#11113F]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group transition-all">
            <div className="relative">
              <div className="absolute inset-0 bg-[#85ECFC]/20 rounded-full blur-md group-hover:blur-lg transition-all" />
              <Image
                src="/images/logo-light.png"
                alt="DataCraft Academy"
                width={44}
                height={44}
                className="relative z-10 w-10 h-10 md:w-11 md:h-11"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base md:text-lg font-black tracking-wide text-white">
                <span className="text-[#85ECFC]">DATA</span>CRAFT
              </span>
              <span className="text-[8px] md:text-[10px] text-[#85ECFC]/70 font-bold tracking-[0.2em] uppercase">Academy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-bold uppercase tracking-widest transition-all relative py-2 ${
                    isActive
                      ? 'text-[#85ECFC]'
                      : 'text-white/60 hover:text-[#85ECFC]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#85ECFC] to-[#5A4DE5] rounded-full shadow-[0_0_10px_rgba(133,236,252,0.5)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:flex bg-linear-to-r from-[#85ECFC] to-[#5A4DE5] hover:from-[#6de0f7] hover:to-[#4a3dd4] text-[#11113F] font-black uppercase tracking-widest text-[11px] px-6 py-2.5 rounded-full transition-all shadow-lg shadow-[#5A4DE5]/20 active:scale-95"
            >
              Enroll Now
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-50 text-white"
              aria-label="Toggle Mobile Menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop blur */}
        <div className="absolute inset-0 bg-[#11113F]/95 backdrop-blur-2xl" />
        
        {/* Menu content */}
        <div className="relative h-full flex flex-col justify-center px-8">
           <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-3xl font-black uppercase tracking-tighter transition-all transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} ${pathname === link.href ? 'text-[#85ECFC]' : 'text-white/40 hover:text-white'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {link.label}
                </Link>
              ))}
              <div className={`pt-10 transition-all transform duration-500 delay-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <Link
                  href="/contact"
                  className="inline-block bg-linear-to-r from-[#85ECFC] to-[#5A4DE5] text-[#11113F] font-black uppercase tracking-widest text-sm px-10 py-4 rounded-2xl shadow-2xl shadow-[#5A4DE5]/20"
                >
                  Enroll Now
                </Link>
              </div>
           </nav>

          
        </div>
      </div>
      
      {/* Spacer to prevent content from going under the fixed header */}
   
    </div>
  );
}
