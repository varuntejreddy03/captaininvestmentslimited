'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';
import {
  Phone,
  ArrowRight,
  Play,
  Clock,
  Zap,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';

export function HeroSection() {
  const scrollToStudio = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById('studio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = 'studio';
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-14 sm:pt-28 sm:pb-16 overflow-hidden bg-slate-950 text-white">
      {/* Background Cinematic Industrial Banner with Dark Lens Vignette (matching client's reference) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-banner.jpg"
          alt="Captain Investments Heavy Excavator & Borehole Drilling Rig in Zambia"
          fill
          priority
          quality={95}
          className="object-cover object-center brightness-95"
        />
        {/* Cinematic dark lens overlay matching the reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/70 pointer-events-none" />
      </div>

      {/* Main Grid: Left content, Center play trigger, Right floating cards */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 md:pl-24 md:pr-8 lg:pl-28 lg:pr-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: Monospace Tag, Big Headline, Refined Italic Subtitle & Pill Buttons */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Top Monospace Tag with Diamond Icon (matching reference ❖ HALEEM 365 DAYS...) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase text-amber-400 bg-amber-400/10 border border-amber-400/25 backdrop-blur-md">
              <span className="text-amber-400">❖</span>
              <span>Commercial Boreholes & Heavy Plant &bull; All Over Zambia</span>
            </div>

            {/* Main Headline (matching reference 'Where every bite tells a Story') */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06]">
              <span className="text-white">We Drill. We Dig.</span> <br />
              <span className="text-white">We </span>
              <span className="text-amber-400 font-extrabold drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]">Deliver</span>.
            </h1>

            {/* Refined Description with high contrast */}
            <p className="text-base sm:text-lg text-slate-100 font-medium max-w-xl leading-relaxed">
              Commercial borehole drilling for farms and mining, exploratory soil core sampling, and certified heavy earth-moving equipment hire across all 10 provinces of Zambia.
            </p>

            {/* Two Pill Buttons (matching reference 'View Our Menu' & 'Book Catering') */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full font-heading font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/fleet"
                className="px-7 py-3.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider text-white hover:text-amber-300 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-amber-400/60 backdrop-blur-md transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 shadow-md"
              >
                <span className="text-white">Browse 11 Machines</span>
              </Link>
            </div>

            {/* Quick Trust Highlights below buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Certified Operators Included</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Mining Soil Sampling</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Nationwide Lowbed Haulage</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Floating Glass Cards matching client's reference */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-4">
            
            {/* Card 1: Top Floating Glass Card (matching reference 'ORDER DELIVERY') */}
            <div className="w-full max-w-sm rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 p-4 sm:p-5 shadow-2xl space-y-3">
              <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Rapid Plant Dispatch</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                  Site-Ready
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Direct machinery mobilization & rig dispatch across all provinces of Zambia.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={BUSINESS_INFO.telLink}
                  className="py-2.5 px-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-heading font-black text-xs uppercase tracking-wider text-center transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Hotline</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-heading font-black text-xs uppercase tracking-wider text-center transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Card 2: Operating Hours Card (matching reference 'MIDNIGHT BIRYANI...') */}
            <div className="w-full max-w-sm rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 p-3.5 sm:p-4 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                  Lusaka Operating Desk
                </span>
                <p className="text-xs text-white font-medium truncate">
                  Mon – Sat 08:00 – 17:00 CAT (Open Now)
                </p>
                <span className="text-[10px] text-slate-400 block">
                  Countrywide Plant Mobilization
                </span>
              </div>
            </div>

            {/* Center / Lower Explore Trigger (matching reference Play Button) */}
            <div className="w-full max-w-sm pt-2 flex items-center justify-center lg:justify-end">
              <a
                href="#studio"
                onClick={scrollToStudio}
                className="group inline-flex items-center gap-3.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-white transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
              >
                <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <div className="text-left pr-2">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider block text-white group-hover:text-amber-400 transition-colors">
                    Explore 3D Machinery & Rig
                  </span>
                  <span className="text-[10px] text-slate-300 font-mono">
                    Interactive 3D model & 11-unit reel &darr;
                  </span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative Bottom Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 track-pattern bg-white/10 border-t border-white/10 pointer-events-none" />
    </section>
  );
}
