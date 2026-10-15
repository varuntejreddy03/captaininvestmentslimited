'use client';

import React from 'react';
import { WHY_CHOOSE_US } from '@/lib/constants';
import { ShieldCheck, Cog, BadgePercent, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function WhyChooseUs() {
  const iconMap = {
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-amber-400" />,
    Cog: <Cog className="w-8 h-8 text-sky-400 group-hover:rotate-90 transition-transform duration-700" />,
    BadgePercent: <BadgePercent className="w-8 h-8 text-emerald-400" />,
    Zap: <Zap className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform" />,
  };

  return (
    <section className="relative py-16 sm:py-24 bg-[#070D1E] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-amber-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Industrial Standards You Can Trust</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white uppercase tracking-normal">
            Why Contractors Choose Captain
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Delivering precision borehole drilling and heavy plant performance with zero compromises on safety, timing, or transparent pricing in Lusaka and Zambia.
          </p>
        </div>

        {/* 4 Glassmorphism Cards with Floating 3D Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              className="group relative p-8 rounded-3xl glass-panel hover:glass-panel-glow border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-slate-500 font-bold">
                  0{idx + 1}
                </span>

                {/* Floating 3D Icon Container */}
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 p-2.5 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all">
                  <div className="absolute inset-0 rounded-2xl bg-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {iconMap[item.icon as keyof typeof iconMap]}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono font-semibold text-sky-400 uppercase tracking-wider block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-amber-400 transition-colors">
                <span>Verified Standard</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#0A1F6B] via-[#0A5BB5]/50 to-[#070D1E] border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-white text-lg">
              Have a high-priority construction or borehole project?
            </h4>
            <p className="text-xs sm:text-sm text-slate-200">
              Speak directly with our technical dispatch lead in Lusaka for immediate equipment availability.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] shrink-0 transition-all active:scale-95"
          >
            Contact Dispatch Desk
          </Link>
        </div>
      </div>
    </section>
  );
}
