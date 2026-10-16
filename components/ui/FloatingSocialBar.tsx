'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

/**
 * Clean, floating left-side social & quick-contact pill bar
 */
export function FloatingSocialBar() {
  return (
    <aside
      aria-label="Quick contact and social links"
      className="fixed left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2.5"
    >
      <div className="flex flex-col items-center gap-2 p-1.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/40 transition-all">
        
        {/* WhatsApp Direct Chat */}
        <a
          href={BUSINESS_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white transition-all duration-200 hover:scale-110 shadow-sm"
          aria-label="Chat with Captain Investments on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="pointer-events-none absolute left-12 px-2.5 py-1 rounded-lg bg-black/90 border border-white/10 text-white text-[11px] font-semibold whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shadow-md">
            Chat on WhatsApp
          </span>
        </a>

        {/* Facebook Page */}
        <a
          href={BUSINESS_INFO.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#1877F2]/20 hover:bg-[#1877F2] text-[#1877F2] hover:text-white transition-all duration-200 hover:scale-110 shadow-sm"
          aria-label="Visit Captain Investments Limited on Facebook"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <span className="pointer-events-none absolute left-12 px-2.5 py-1 rounded-lg bg-black/90 border border-white/10 text-white text-[11px] font-semibold whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shadow-md">
            Follow on Facebook
          </span>
        </a>

        {/* Instagram Profile */}
        <a
          href={BUSINESS_INFO.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F58529]/20 via-[#DD2A7B]/20 to-[#8134AF]/20 hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] text-[#E4405F] hover:text-white transition-all duration-200 hover:scale-110 shadow-sm"
          aria-label="Follow Captain Investments on Instagram"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span className="pointer-events-none absolute left-12 px-2.5 py-1 rounded-lg bg-black/90 border border-white/10 text-white text-[11px] font-semibold whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shadow-md">
            Follow on Instagram
          </span>
        </a>

        {/* Direct Phone Call */}
        <a
          href={BUSINESS_INFO.telLink}
          className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/20 hover:bg-amber-500 text-amber-400 hover:text-slate-950 transition-all duration-200 hover:scale-110 shadow-sm"
          aria-label="Call Captain Investments directly"
        >
          <Phone className="w-4 h-4" />
          <span className="pointer-events-none absolute left-12 px-2.5 py-1 rounded-lg bg-black/90 border border-white/10 text-white text-[11px] font-semibold whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shadow-md">
            Call: {BUSINESS_INFO.phone}
          </span>
        </a>
      </div>
    </aside>
  );
}
