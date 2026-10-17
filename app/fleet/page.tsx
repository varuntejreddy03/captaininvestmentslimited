import React from 'react';
import type { Metadata } from 'next';
import { FLEET_MACHINES, BUSINESS_INFO } from '@/lib/constants';
import { FleetTiltCard } from '@/components/three/FleetTiltCard';
import { Truck, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Heavy Machinery Fleet Zambia | Excavators 21T-38T, 30T/40T Tippers & Drill Rigs',
  description:
    'Explore the complete heavy machinery fleet of Captain Investments Limited in Zambia. Heavy excavators (21T-38T), single stance 30T & double stance 40T tippers, bulldozers, wheel loaders, motor graders, compactors, and drilling rigs for hire.',
};

export default function FleetPage() {
  return (
    <div className="pt-24 pb-12 sm:pb-20 bg-white text-slate-900">
      {/* Fleet Hero Header */}
      <section className="relative py-16 lg:py-24 border-b border-slate-200 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-radial from-blue-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-300 text-amber-900">
              <Truck className="w-3.5 h-3.5 text-amber-600" />
              <span>Full Plant Equipment Inventory</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-normal text-slate-900">
              The Heavy Fleet <br />
              <span className="text-amber-500">Ready for Zambia&apos;s Toughest Sites</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every machine in our fleet is fully serviced, safety-certified, and ready for immediate deployment with certified operators. Review technical specs and book directly via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET_MACHINES.map((machine) => (
            <FleetTiltCard key={machine.id} machine={machine} />
          ))}
        </div>
      </section>

      {/* Fleet Maintenance & Operational Standards */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-heading font-bold text-lg justify-center sm:justify-start">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <span>Rigorous Preventive Servicing</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Hydraulic pressure checks, oil & filter replacements, and track tension adjustments are logged before every site dispatch.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-heading font-bold text-lg justify-center sm:justify-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Certified Operators Included</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Experienced operators with proven track records in mining safety, urban utility line avoidance, and bulk material handling.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-heading font-bold text-lg justify-center sm:justify-start">
                <Truck className="w-5 h-5 text-blue-600" />
                <span>Nationwide Lowbed Mobilization</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                On-time site delivery via our dedicated multi-axle heavy transport rig across Lusaka and all provinces of Zambia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking CTA */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 uppercase">
            Need a custom multi-machine package?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            For long-term mining, agricultural, or civil construction projects, contact our fleet dispatch manager for bundled rates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all"
            >
              Get Multi-Machine Quote
            </Link>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Dispatch</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
