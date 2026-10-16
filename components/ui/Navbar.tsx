'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { LiveHoursBadge } from './LiveHoursBadge';
import { BUSINESS_INFO, NAV_LINKS } from '@/lib/constants';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomeHero = pathname === '/' && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isHomeHero
            ? 'bg-black/50 backdrop-blur-md border-b border-white/10 text-white py-3.5'
            : isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-2.5 text-slate-900'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 text-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo: Inverted white logo over dark hero, dark logo over white background */}
            <BrandLogo size="md" invert={isHomeHero} />

            {/* Desktop Navigation Links */}
            <nav
              className={`hidden lg:flex items-center gap-0.5 p-1 rounded-full transition-colors ${
                isHomeHero
                  ? 'bg-white/10 border border-white/15'
                  : 'bg-slate-100/90 border border-slate-200'
              }`}
              aria-label="Primary"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition-colors duration-200 ${
                      isActive
                        ? isHomeHero
                          ? 'text-slate-950 font-bold'
                          : 'text-slate-950 font-bold'
                        : isHomeHero
                        ? 'text-slate-200 hover:text-white'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className={`absolute inset-0 rounded-full shadow-sm ${
                          isHomeHero
                            ? 'bg-amber-400'
                            : 'bg-white border border-slate-200/80'
                        }`}
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Area */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="hidden xl:block">
                <LiveHoursBadge />
              </div>

              <a
                href={BUSINESS_INFO.telLink}
                className={`flex items-center justify-center gap-2 h-10 px-3.5 xl:px-4 rounded-full text-xs font-bold transition-colors shadow-xs ${
                  isHomeHero
                    ? 'text-white bg-white/10 hover:bg-white/20 border border-white/15'
                    : 'text-slate-800 bg-slate-100 hover:bg-slate-200/80 border border-slate-200/90'
                }`}
                title={`Call ${BUSINESS_INFO.phone}`}
                aria-label={`Call ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-mono whitespace-nowrap">{BUSINESS_INFO.phone}</span>
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 h-10 px-5 rounded-full text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-[0_4px_14px_-2px_rgba(245,158,11,0.5)] transition-all active:scale-95"
              >
                <span>Get Quote</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <div className="hidden min-[500px]:block">
                <LiveHoursBadge />
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors cursor-pointer ${
                  isHomeHero
                    ? 'text-white hover:bg-white/10'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slideover */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 lg:hidden bg-slate-950/80 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <LiveHoursBadge showTime />
              </div>

              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between p-3.5 rounded-xl font-heading text-lg font-bold transition-all ${
                        isActive
                          ? 'bg-amber-400 text-slate-950 font-black'
                          : 'text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-60" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href={BUSINESS_INFO.telLink}
                className="w-full py-3.5 px-4 rounded-xl font-heading font-bold text-sm text-white bg-white/10 hover:bg-white/15 flex items-center justify-center gap-2 border border-white/15 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <Link
                href="/contact"
                className="w-full py-3.5 px-4 rounded-xl font-heading font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>Request a Free Quote</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
