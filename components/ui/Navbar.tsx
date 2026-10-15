'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from './BrandLogo';
import { LiveHoursBadge } from './LiveHoursBadge';
import { BUSINESS_INFO, NAV_LINKS } from '@/lib/constants';
import { Phone, MessageSquare, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
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
            ? 'bg-[#070D1E]/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/40 py-3'
            : 'bg-gradient-to-b from-[#070D1E]/95 via-[#070D1E]/70 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo: Clean transparent mark + bold typography */}
            <BrandLogo size="md" />

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md"
              aria-label="Primary"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 ${
                      isActive ? 'text-slate-950' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 shadow-[0_4px_16px_-4px_rgba(245,158,11,0.6)]"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Area */}
            <div className="hidden lg:flex items-center gap-2.5">
              <div className="hidden xl:block">
                <LiveHoursBadge />
              </div>

              <a
                href={BUSINESS_INFO.telLink}
                className="flex items-center justify-center gap-2 h-10 px-3 xl:px-4 rounded-full text-xs font-semibold text-slate-100 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
                title={`Call ${BUSINESS_INFO.phone}`}
                aria-label={`Call ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="hidden xl:inline font-mono whitespace-nowrap">{BUSINESS_INFO.phone}</span>
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 h-10 px-5 rounded-full text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-b from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_6px_20px_-6px_rgba(245,158,11,0.7)] transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
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
                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-30 lg:hidden bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-3 top-[76px] z-40 lg:hidden max-h-[calc(100dvh-92px)] overflow-y-auto rounded-3xl bg-[#0a1226]/95 backdrop-blur-xl border border-white/15 shadow-2xl p-4"
            >
              <div className="min-[500px]:hidden flex items-center justify-between px-1 pb-3 mb-2 border-b border-white/10">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">Lusaka office</span>
                <LiveHoursBadge showTime />
              </div>
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i + 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={isActive ? 'page' : undefined}
                        className={`flex items-center justify-between h-12 px-4 rounded-2xl text-[15px] font-semibold transition-colors ${
                          isActive
                            ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950'
                            : 'text-slate-100 hover:bg-white/[0.07]'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className={`w-4 h-4 ${isActive ? 'text-slate-900' : 'text-slate-500'}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-2 gap-2.5">
                <a
                  href={BUSINESS_INFO.telLink}
                  className="flex items-center justify-center gap-2 h-12 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 h-12 rounded-2xl bg-[#25D366] hover:bg-[#2fe074] text-slate-950 font-bold text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="col-span-2 flex items-center justify-center gap-1.5 h-12 rounded-2xl bg-gradient-to-b from-amber-300 to-amber-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider"
                >
                  <span>Get a Free Quote</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="mt-3 text-center text-[11px] font-mono text-slate-500">{BUSINESS_INFO.phone}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
