'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-5px_25px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={BUSINESS_INFO.telLink}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-50 hover:bg-slate-100 active:scale-95 text-slate-800 border border-slate-200 transition-all text-center"
          aria-label="Call Captain Investments"
        >
          <Phone className="w-4 h-4 text-blue-600 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Call</span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={BUSINESS_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 active:scale-95 text-emerald-800 border border-emerald-300 transition-all text-center"
          aria-label="WhatsApp Chat"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Get a Quote */}
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 font-black shadow-md transition-all text-center"
          aria-label="Get a Free Quote"
        >
          <FileText className="w-4 h-4 text-slate-950 mb-0.5" />
          <span className="text-[11px] font-black tracking-tight">Quote</span>
        </Link>
      </div>
    </div>
  );
}
