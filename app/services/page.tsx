import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SERVICES, FLEET_MACHINES, BUSINESS_INFO } from '@/lib/constants';
import { Droplets, Tractor, ArrowRight, ShieldCheck, MapPin, CheckCircle2, ChevronRight, Phone, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Borehole Drilling & Earth Moving Equipment Hire Services',
  description:
    'Comprehensive overview of Captain Investments Limited services: borehole hydrogeological surveys, rotary DTH drilling, submersible pump installation, and heavy plant earthmover hire across Lusaka and Zambia.',
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-12 sm:pb-20 bg-[#070D1E] text-white">
      {/* Services Hub Hero Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-radial from-[#0A5BB5]/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Zambian Industrial Solutions</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-normal text-white">
              We Drill. We Dig. <br />
              <span className="text-amber-400">We Deliver Results.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              From precision hydrogeological surveys and high-yield borehole drilling to heavy crawler excavators and bulldozers, Captain Investments Limited equips private developers, commercial farms, and civil contractors with the best plant in Zambia.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Deep Dive Section */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Service 1: Borehole Drilling */}
          <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>Service Division 01</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                  Turnkey Borehole Drilling Solutions
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Water security is critical for Lusaka residences, agricultural holdings, and commercial facilities. We deploy heavy-duty rotary percussion DTH drill rigs to penetrate difficult dolomitic limestone, quartzites, and fractured rock layers to reach uncontaminated, high-yield aquifers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                  {SERVICES[0].features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/services/borehole-drilling"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A5BB5] to-[#0A1F6B] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(10,91,181,0.4)] hover:brightness-110 transition-all"
                  >
                    <span>Full Borehole Process Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-white font-mono transition-colors"
                  >
                    <span>Get Borehole Quote</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                <Image
                  src="/images/backhoe-sunset.jpg"
                  alt="Borehole site operation Lusaka"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300">
                  <span className="text-sky-400 font-bold block">Hydrogeological Guarantee</span>
                  Precision siting with WARMA compliance support.
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Earth Movers for Hire */}
          <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                <Image
                  src="/images/excavator-rocks.jpg"
                  alt="SANY heavy excavator on rocks"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300">
                  <span className="text-amber-400 font-bold block">Rapid Mobilization</span>
                  In-house multi-axle lowbed transport for zero delay.
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Tractor className="w-3.5 h-3.5" />
                  <span>Service Division 02</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                  Heavy Plant & Earth Movers for Hire
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Whether preparing building pads, cutting stormwater drainage channels, grading farm access roads, or bulk loading quarry aggregates, our fleet of 8 modern machines is maintained to the highest mechanical standards.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                  {SERVICES[1].features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/services/equipment-hire"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
                  >
                    <span>Inspect Hire Packages & Terms</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/fleet"
                    className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-white font-mono transition-colors"
                  >
                    <span>View All 8 Machines</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zambian Coverage & Logistics Banner */}
      <section className="py-16 bg-[#050811] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-heading font-bold text-lg">
                <MapPin className="w-5 h-5" />
                <span>Lusaka Operating Hub</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Strategic depot base allowing immediate equipment departure to Lusaka East, Leopards Hill, Chongwe, Chilanga, Makeni, and Kafue.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-heading font-bold text-lg">
                <ShieldCheck className="w-5 h-5" />
                <span>Safety & Operator Training</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Every operator is certified with medical fitness, site PPE compliance, and defensive operation certification.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-heading font-bold text-lg">
                <MessageSquare className="w-5 h-5" />
                <span>Fast WhatsApp Dispatch</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Contact our dispatch desk directly at +260 974 333 999 for availability checks within minutes during working hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Call to Action */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white uppercase">
            Ready to mobilze to your site?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Tell us your project scope, location, and machinery requirements. We generate transparent quotes tailored to your schedule.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
            >
              Request a Free Quote
            </Link>
            <a
              href={BUSINESS_INFO.telLink}
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-heading font-bold text-xs uppercase tracking-wider border border-white/15 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call +260 974 333 999</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
