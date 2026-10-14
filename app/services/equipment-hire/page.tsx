import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { FLEET_MACHINES, BUSINESS_INFO } from '@/lib/constants';
import { Tractor, ShieldCheck, Truck, CheckCircle2, ArrowRight, MessageSquare, Phone, Cog } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Earth Movers for Hire Lusaka | Excavator, Bulldozer & Grader Plant Zambia',
  description:
    'Heavy equipment hire in Lusaka, Zambia. SANY excavators, CAT bulldozers, wheel loaders, motor graders, and Volvo compactors available on flexible wet or dry hire terms with lowbed mobilization.',
};

export default function EquipmentHirePage() {
  return (
    <div className="pt-24 pb-20 bg-[#070D1E] text-white">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-radial from-amber-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Tractor className="w-3.5 h-3.5" />
              <span>Heavy Plant Hire &bull; Lusaka & Zambia</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
              Earth Movers for Hire <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Tough, Reliable, Site-Ready
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Rent high-performance excavators, bulldozers, wheel loaders, motor graders, and rollers with experienced operators. Flexible wet and dry contracts tailored to civil infrastructure, farming, and mining projects.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/fleet"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
              >
                <span>Browse Fleet of 8 Machines</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-heading font-bold text-xs uppercase tracking-wider border border-white/15 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Check Machine Availability</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wet vs Dry Hire Terms */}
      <section id="wet-dry" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 block mb-2">
            Flexible Commercial Contract Options
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase">
            Wet Hire vs. Dry Hire
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Choose the plant hire model that best suits your site management and fuel logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Wet Hire */}
          <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-amber-400/40 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-400/15 text-amber-400 border border-amber-400/30">
                <span>Option A &bull; Turnkey Execution</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">
                Wet Hire Package
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ideal for clients who want full peace of mind. Captain Investments Limited provides the heavy machine, verified expert operator, fuel management, and routine servicing.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Experienced, safety-certified machine operator included</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Quality diesel fuel supplied or coordinated per shift</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Daily routine maintenance & lubrication handled by us</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clear hourly or daily shift billing structure</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6">
              <Link
                href="/contact"
                className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <span>Request Wet Hire Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Dry Hire */}
          <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 hover:border-sky-400/40 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <span>Option B &bull; Long-Term Contractor Spec</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">
                Dry Hire Package
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Ideal for established construction, civil, and mining contractors with existing in-house operator teams and bulk diesel storage on site.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Cost-effective weekly or monthly long-term plant rental</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Client utilizes their own vetted & certified operators</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Client provides fuel to manufacturer specifications</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Periodic preventive inspection by Captain mechanics</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6">
              <Link
                href="/contact"
                className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-heading font-bold text-xs uppercase tracking-wider border border-white/15 flex items-center justify-center gap-2 transition-all"
              >
                <span>Request Dry Hire Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lowbed Logistics Spotlight */}
      <section className="py-16 bg-[#050811] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/excavator-lowbed.jpg"
                alt="Captain heavy lowbed transport hauling excavator"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-mono font-bold uppercase">
                <Truck className="w-4 h-4 text-amber-400" />
                <span>Heavy Plant Mobilization</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">
                Dedicated Multi-Axle Lowbed Transport
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Transporting 20 to 50-tonne heavy equipment safely on Zambian roads requires proper permits, escort coordination, and purpose-built lowbed rigs. We operate dedicated heavy haulers to mobilize excavators and bulldozers directly to your project site without delay.
              </p>
              <div className="flex items-center gap-3 pt-2 text-xs font-mono text-amber-400">
                <span>&bull; Lusaka Province</span>
                <span>&bull; Copperbelt</span>
                <span>&bull; Central Province</span>
                <span>&bull; Southern Province</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
