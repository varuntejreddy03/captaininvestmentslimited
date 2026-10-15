import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { BOREHOLE_PROCESS_STEPS, BUSINESS_INFO } from '@/lib/constants';
import { buildQuickBoreholeQuoteUrl } from '@/lib/whatsapp';
import { Droplets, CheckCircle2, Shield, Sun, ArrowRight, Phone, MessageSquare, AlertTriangle, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Borehole Drilling Contractors Lusaka, Zambia | Turnkey Water Solutions',
  description:
    'Professional borehole drilling in Lusaka, Zambia. Comprehensive hydrogeological surveys, rotary DTH rock drilling, uPVC casing, test pumping, and solar pumping installations by Captain Investments Limited.',
};

export default function BoreholeDrillingPage() {
  const quickWaUrl = buildQuickBoreholeQuoteUrl();

  return (
    <div className="pt-24 pb-20 bg-[#070D1E] text-white">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[#0A5BB5]/25 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <Droplets className="w-3.5 h-3.5" />
              <span>Groundwater Division &bull; Lusaka, Zambia</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-normal text-white">
              Borehole Drilling <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-amber-400">
                Engineered for High Yield
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Clean, sustainable water on tap. We pair high-precision geophysical surveying with heavy DTH rotary percussion rigs to tap deep, uncontaminated aquifers across Lusaka and Zambia.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={quickWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
              >
                <MessageSquare className="w-4 h-4 text-slate-950" />
                <span>Request Borehole Quote via WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-heading font-bold text-xs uppercase tracking-wider border border-white/15 transition-all"
              >
                <span>Site Survey Booking</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Geological Workflow */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 block mb-2">
            End-to-End Methodology
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white uppercase">
            The 4 Stages to Clean Water
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            We follow strict engineering and environmental hydrogeology protocols to guarantee water purity, borehole longevity, and maximum yield.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BOREHOLE_PROCESS_STEPS.map((stage) => (
            <div
              key={stage.step}
              className="rounded-3xl glass-panel p-8 border border-white/10 hover:border-sky-400/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-[#0A5BB5]/30 border border-blue-400/30 flex items-center justify-center font-mono text-sm font-black text-sky-300">
                    0{stage.step}
                  </span>
                  <span className="font-mono text-xs text-amber-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    {stage.depth} &bull; {stage.strata}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {stage.description}
                </p>

                <div className="space-y-2 border-t border-white/10 pt-4">
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">
                    Deliverables & Standards:
                  </span>
                  {stage.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lusaka Geology Spotlight Card */}
      <section className="py-16 bg-[#050811] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>Lusaka Dolomite Geology Warning</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Why Siting & Professional Casing Matter in Lusaka
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Lusaka is primarily underlain by karstified limestone and dolomite formations with underground caves and fissures. If a borehole is drilled without proper geophysical siting, there is high risk of striking dry voids or shallow contaminated surface runoff from unsealed septic soakaways.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Captain Investments Limited installs heavy-gauge Class 9 uPVC full-column casing, properly seals the upper sanitary annulus with cement grout, and packs bottom screens with round silica gravel to prevent silt intrusion and deliver pristine drinking water.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl glass-panel border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-sky-400 font-bold">
                <Shield className="w-4 h-4" />
                <span>Our Quality Checklist</span>
              </div>
              <div className="space-y-2 text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Sanitary upper seal prevents runoff</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Continuous 4-8 hr yield step test</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>WARMA drilling permit compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Laboratory water sample testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Submersible & Tank Stand Systems */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Sun className="w-3.5 h-3.5" />
                <span>Zero Load-Shedding Dependency</span>
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Turnkey Solar Pumping & Elevated Tank Stands
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                With frequent electrical grid load-shedding in Zambia, a borehole is only as dependable as its power source. We supply and commission complete solar-powered DC submersible pumps, mono-crystalline solar panels, automatic dry-run controllers, and engineered elevated steel tank stands (3m, 6m, 9m).
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200">
                  Solar Submersible Pumps
                </span>
                <span className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200">
                  Elevated Steel Tank Stands
                </span>
                <span className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200">
                  Float Switch Automation
                </span>
                <span className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200">
                  Pressure Booster Pumps
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 text-center p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
                Borehole Direct Inquiries
              </span>
              <p className="text-2xl font-black font-heading text-amber-400">
                {BUSINESS_INFO.phone}
              </p>
              <p className="text-xs text-slate-300">
                Monday to Saturday &bull; 08:00 - 17:00 CAT
              </p>
              <a
                href={quickWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Borehole WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
