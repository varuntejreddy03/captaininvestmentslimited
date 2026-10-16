import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BUSINESS_INFO } from '@/lib/constants';
import { Tractor, ShieldCheck, Truck, CheckCircle2, ArrowRight, MessageSquare, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Earth Movers & Heavy Plant Hire Zambia | Excavators 21T-38T, 30T/40T Tippers',
  description:
    'Heavy equipment hire in Zambia. Heavy crawler excavators (21T to 38T), single stance 30T & double stance 40T tippers, bulldozers, motor graders, compactors, and drilling rigs available on wet or dry hire terms with certified operators.',
};

export default function EquipmentHirePage() {
  return (
    <div className="pt-24 pb-12 sm:pb-20 bg-white text-slate-900">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 border-b border-slate-200 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-radial from-amber-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-300 text-amber-900">
              <Tractor className="w-3.5 h-3.5 text-amber-600" />
              <span>Heavy Plant Hire &bull; Countrywide Zambia</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-normal text-slate-900">
              Earth Movers for Hire <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
                Tough, Reliable, Site-Ready
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Rent high-performance 21T–38T excavators, 30T single stance & 40T double stance tippers, bulldozers, wheel loaders, motor graders, rollers, and rotary drilling rigs. Every hire includes our certified operator.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/fleet"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <span>Browse Fleet of 11 Machines</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-heading font-bold text-xs uppercase tracking-wider border border-slate-300 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Check Machine Availability</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wet vs Dry Hire Terms */}
      <section id="wet-dry" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 block mb-2">
            Flexible Commercial Contract Options
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-900 uppercase">
            Wet Hire vs. Dry Hire
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Both packages include our certified, experienced machine operator so your site maintains top efficiency and zero equipment misuse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Wet Hire */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-amber-400 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-300">
                <span>Option A &bull; Full Turnkey Service</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                Wet Hire Package
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ideal for clients wanting complete peace of mind. Captain Investments Limited provides the heavy machine, our certified expert operator, and manages all diesel fuel supply throughout your shifts.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Experienced, safety-certified machine operator included</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Quality diesel fuel supplied and managed by Captain</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Daily routine servicing, greasing & wear-and-tear covered</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transparent shift or hourly billing with zero hidden costs</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6">
              <Link
                href="/contact"
                className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>Request Wet Hire Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Dry Hire */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200">
                <span>Option B &bull; Contractor Fuel Spec</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                Dry Hire Package
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ideal for contractors with on-site bulk diesel storage or dedicated fuel bowsers. Even in dry hire, we provide our certified operator to guarantee safe, optimal machine operation (client supplies fuel).
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Certified Captain operator included (safe machine operation)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Client supplies quality diesel fuel to manufacturer specs</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Cost-effective weekly or monthly long-term rental rates</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Regular inspection and mechanical oversight by our engineers</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6">
              <Link
                href="/contact"
                className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>Request Dry Hire Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lowbed Logistics Strip */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-heading font-bold text-lg justify-center sm:justify-start">
                <Truck className="w-5 h-5 text-amber-500" />
                <span>Heavy Lowbed Mobilization</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Multi-axle heavy transport lowbed ready to mobilize tracked excavators, dozers, and drill rigs to your site anywhere across Zambia with minimal lead time.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-heading font-bold text-lg justify-center sm:justify-start">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Certified Operators on All Hires</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Our plant is operated only by verified, safety-tested operators with valid medical clearance and defensive operation experience.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-heading font-bold text-lg justify-center sm:justify-start">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>Rapid Quotation Desk</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Call +260 974 333 999 or chat directly on WhatsApp for real-time plant availability and formal quotation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 uppercase">
            Need equipment dispatched to your site?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Send us your location, project start date, and machinery requirements for a rapid quotation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all"
            >
              Get Machine Hire Quote
            </Link>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Dispatch Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
