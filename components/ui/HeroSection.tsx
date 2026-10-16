'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';
import {
  Phone,
  ArrowRight,
  Droplets,
  Tractor,
  MapPin,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-28 lg:pb-16 overflow-hidden bg-white">
      {/* Background Cinematic Industrial Banner */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-banner.jpg"
          alt="Captain Investments Heavy Excavation and Borehole Drilling Operations in Zambia"
          fill
          priority
          quality={95}
          className="object-cover object-center"
        />
        {/* Soft, clean gradient shield on the left half to guarantee 100% contrast & legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 lg:from-white lg:via-white/90 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
      </div>

      {/* Hero Content Container with left clearance for the floating social bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:pl-24 md:pr-8 lg:pl-28 lg:pr-10">
        <div className="max-w-xl lg:max-w-2xl space-y-4 text-left">
          
          {/* Nationwide Mobilization Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold bg-white/95 border border-slate-200 text-slate-800 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Headquartered in Lusaka • Serving All Over Zambia</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Site-Ready Plant & Rigs</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-950 leading-[1.05]">
              We Drill. <br />
              <span className="text-amber-500">We Dig.</span> <br />
              We Deliver.
            </h1>
            <p className="text-sm sm:text-base text-slate-700 font-medium max-w-xl leading-relaxed">
              Commercial borehole drilling for farms and mining, soil sample collection drilling for exploration, and certified heavy earth-moving equipment hire across all provinces of Zambia.
            </p>
          </div>

          {/* Call To Actions - Positioned prominently above the fold */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/contact"
              className="group px-6 sm:px-7 py-3.5 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-[0_4px_20px_rgba(245,158,11,0.35)] transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={BUSINESS_INFO.telLink}
              className="px-5 sm:px-6 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Call Now</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-6 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300/80 shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Industrial Highlights Grid - Sleek, compact and non-intrusive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-w-xl">
            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xs">
              <Droplets className="w-4 h-4 text-sky-600 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">Commercial Boreholes & Tanks</span>
                <span className="text-[11px] text-slate-500">Farms, mining dewatering & solar pumps</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xs">
              <Tractor className="w-4 h-4 text-amber-500 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">Heavy Plant & Tippers for Hire</span>
                <span className="text-[11px] text-slate-500">Excavators (21T–38T), 30T/40T tippers</span>
              </div>
            </div>
          </div>

          {/* Quick Trust Bar */}
          <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Certified Operators Included</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Mining Soil Sampling</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Nationwide Lowbed Dispatch</span>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 track-pattern bg-slate-200 border-t border-slate-200 pointer-events-none" />
    </section>
  );
}
