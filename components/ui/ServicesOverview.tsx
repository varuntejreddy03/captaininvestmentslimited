'use client';

import React from 'react';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import { Droplets, Tractor, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export function ServicesOverview() {
  return (
    <section id="services" className="relative py-16 sm:py-24 bg-white border-t border-slate-200 overflow-hidden">
      {/* Background track line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 track-pattern bg-slate-100" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-800 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Core Capabilities Across Zambia</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-900 uppercase tracking-normal">
            Our Primary Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Commercial borehole drilling, mining soil exploration sampling, tank & solar pump installations, and heavy earth-moving equipment hire engineered for Zambian ground conditions.
          </p>
        </div>

        {/* 2 Primary Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Borehole Drilling */}
          <div className="relative group rounded-3xl bg-white p-8 sm:p-10 border border-slate-200 hover:border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top background accent */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/10 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A5BB5] to-[#0A1F6B] flex items-center justify-center text-white shadow-md">
                  <Droplets className="w-7 h-7 text-sky-200" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-blue-800 font-bold px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                  Service 01 &bull; Nationwide
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                Borehole Drilling & Water Systems
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Turnkey commercial borehole solutions for agricultural farms, mining facilities, institutions, and residential estates. We also perform specialized core and soil sample collection drilling for mining exploration, construct elevated steel tank stands (3m–12m+), install water storage tanks (5,000L–20,000L+), and commission electric and solar submersible pump sets.
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2.5 mb-8">
                {SERVICES[0].features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <Link
                href="/services/borehole-drilling"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A5BB5] to-[#0A1F6B] hover:from-[#0A1F6B] hover:to-[#0A5BB5] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <span>Borehole Process & Systems</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-xs text-blue-700 hover:text-blue-900 font-mono font-semibold transition-colors"
              >
                Request Siting Survey &rarr;
              </Link>
            </div>
          </div>

          {/* Card 2: Earth Movers for Hire */}
          <div className="relative group rounded-3xl bg-white p-8 sm:p-10 border border-slate-200 hover:border-amber-500 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top background accent */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-md">
                  <Tractor className="w-7 h-7 text-slate-950" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-amber-900 font-bold px-3 py-1 rounded-full bg-amber-50 border border-amber-200">
                  Service 02 &bull; Countrywide
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                Earth Movers & Heavy Plant Hire
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Heavy plant machinery for commercial earthworks, mining haulage, access road grading, dam excavation, and bulk site clearing across Zambia. Featuring 21T to 38T crawler excavators, 30T single stance and 40T double stance tipper trucks, bulldozers, graders, and rollers on flexible wet or dry hire terms.
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2.5 mb-8">
                {SERVICES[1].features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <Link
                href="/services/equipment-hire"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <span>Hire Terms & Rates</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/fleet"
                className="inline-flex items-center justify-center text-xs text-amber-800 hover:text-amber-950 font-mono font-semibold transition-colors"
              >
                Browse 11 Machines &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
