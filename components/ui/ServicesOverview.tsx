'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/lib/constants';
import { Droplets, Tractor, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export function ServicesOverview() {
  return (
    <section id="services" className="relative py-24 bg-[#070D1E] overflow-hidden">
      {/* Background track line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 track-pattern bg-white/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-sky-500/10 border border-sky-500/20 text-sky-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Core Capabilities in Zambia</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white uppercase tracking-normal">
            Our Primary Services
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Industrial-grade water borehole drilling and modern earth-moving machinery hire engineered for Zambian ground conditions.
          </p>
        </div>

        {/* 2 Primary Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Borehole Drilling */}
          <div className="relative group rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 hover:border-sky-400/50 shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top background accent */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A5BB5] to-[#0A1F6B] flex items-center justify-center text-white shadow-[0_0_25px_rgba(10,91,181,0.5)]">
                  <Droplets className="w-7 h-7 text-sky-300" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-sky-400 font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  Service 01 &bull; Lusaka
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                Borehole Drilling
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Turnkey residential, agricultural, and industrial borehole solutions. We handle the entire lifecycle from scientific resistivity siting and rotary DTH rock drilling to high-pressure casing and solar submersible pump installation.
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2.5 mb-8">
                {SERVICES[0].features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <Link
                href="/services/borehole-drilling"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A5BB5] to-[#0A1F6B] hover:from-[#0A1F6B] hover:to-[#0A5BB5] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(10,91,181,0.4)] transition-all"
              >
                <span>Borehole Process & Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-xs text-sky-400 hover:text-white font-mono transition-colors"
              >
                Request Siting Survey &rarr;
              </Link>
            </div>
          </div>

          {/* Card 2: Earth Movers for Hire */}
          <div className="relative group rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 hover:border-amber-400/50 shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top background accent */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 shadow-[0_0_25px_rgba(245,158,11,0.4)]">
                  <Tractor className="w-7 h-7 text-slate-950" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  Service 02 &bull; Countrywide
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                Earth Movers for Hire
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Heavy plant machinery for commercial earthworks, mining access roads, dam excavations, pad leveling, and trenching. Available on flexible wet (with operator & fuel) or dry hire contracts with lowbed transport.
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2.5 mb-8">
                {SERVICES[1].features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <Link
                href="/services/equipment-hire"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
              >
                <span>Hire Terms & Rates</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/fleet"
                className="inline-flex items-center justify-center text-xs text-amber-400 hover:text-white font-mono transition-colors"
              >
                Browse 8 Machines &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
