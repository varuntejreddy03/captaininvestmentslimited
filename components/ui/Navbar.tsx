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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-2.5'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo: Official brand lockup */}
            <BrandLogo size="md" />

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-slate-100/90 border border-slate-200"
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
                      isActive ? 'text-slate-950 font-bold' : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-white shadow-sm border border-slate-200/80"
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
                className="flex items-center justify-center gap-2 h-10 px-3.5 xl:px-4 rounded-full text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200/80 border border-slate-200/90 transition-colors shadow-xs"
                title={`Call ${BUSINESS_INFO.phone}`}
                aria-label={`Call ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
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
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 transition-colors"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/40 backdrop-blur-xs lg:hidden"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed inset-x-0 top-[64px] z-30 lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl px-4 py-5"
            >
              <div className="max-w-md mx-auto space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                    Zambia Operating Hours
                  </span>
                  <LiveHoursBadge showTime />
                </div>

                <nav className="flex flex-col gap-1" aria-label="Mobile">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                          isActive
                            ? 'bg-amber-400/20 text-slate-950 border border-amber-400/40'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    );
                  })}
                </nav>

                <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-100">
                  <a
                    href={BUSINESS_INFO.telLink}
                    className="flex items-center justify-center gap-2 h-11 px-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200"
                  >
                    <Phone className="w-4 h-4 text-amber-500" />
                    <span>Call Now</span>
                  </a>

                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 h-11 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 shadow-sm"
                  >
                    <span>Get Quote</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
