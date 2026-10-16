'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';
import {
  Phone,
  ArrowRight,
  Compass,
  Droplets,
  Tractor,
  ShieldCheck,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
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
        {/* Modern clean gradients: soft light gradient on left/center for maximum text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40 lg:via-white/75 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6 text-left">
          
          {/* Nationwide Mobilization Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-white/95 border border-slate-200/90 text-slate-800 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Headquartered in Lusaka • Serving All Over Zambia</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Site-Ready Plant & Rigs</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-slate-950 leading-[1.02]">
              We Drill. <br />
              <span className="text-amber-500">We Dig.</span> <br />
              We Deliver.
            </h1>
            <p className="text-base sm:text-lg text-slate-700 font-medium max-w-2xl leading-relaxed">
              Commercial borehole drilling for farms and mining, soil sample collection drilling for exploration, and certified heavy earth-moving plant hire across all provinces of Zambia.
            </p>
          </div>

          {/* Industrial Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-800">
            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm">
              <Droplets className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Commercial Boreholes & Tanks</span>
                <span className="text-xs text-slate-600">Farm irrigation, mining dewatering, tank stands & solar pumps</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm">
              <Tractor className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Heavy Plant & Tippers for Hire</span>
                <span className="text-xs text-slate-600">Excavators (21T–38T), 30T/40T tippers & dozers with operators</span>
              </div>
            </div>
          </div>

          {/* Call To Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
            <Link
              href="/contact"
              className="group px-8 py-4 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-[0_4px_20px_rgba(245,158,11,0.4)] transition-all flex items-center justify-center gap-2.5 active:scale-95"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={BUSINESS_INFO.telLink}
              className="px-7 py-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2.5 active:scale-95"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300/80 shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Quick Trust Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Certified Operators Included</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Exploratory Soil Core Drilling</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Prompt Nationwide Lowbed Transport</span>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 track-pattern bg-slate-200 border-t border-slate-200 pointer-events-none" />
    </section>
  );
}
