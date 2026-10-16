import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SERVICES, BUSINESS_INFO } from '@/lib/constants';
import { Droplets, Tractor, ArrowRight, ShieldCheck, MapPin, CheckCircle2, ChevronRight, Phone, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Borehole Drilling & Heavy Earth-Moving Equipment Hire Services across Zambia',
  description:
    'Comprehensive overview of Captain Investments Limited services: commercial borehole drilling for farms and mines, soil core sampling, solar pump installations, elevated tank stands, and heavy plant earthmover hire across Zambia.',
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-12 sm:pb-20 bg-white text-slate-900">
      {/* Services Hub Hero Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="absolute inset-0 bg-radial from-blue-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-300 text-amber-900">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>All Over Zambia &bull; Lusaka HQ</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-normal text-slate-900">
              We Drill. We Dig. <br />
              <span className="text-amber-500">We Deliver Results.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              From precision hydrogeological surveys, farm & mining commercial borehole drilling, soil sampling, and solar pump installations to heavy 21T–38T excavators, 30T/40T tippers, and bulldozers, Captain Investments Limited equips Zambia with the best plant.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Deep Dive Section */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Service 1: Borehole Drilling */}
          <div className="rounded-3xl bg-white p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>Service Division 01</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                  Turnkey Borehole Drilling & Water Systems
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Water security is critical for agricultural farms, mining operations, commercial facilities, and residential developments across Zambia. We deploy heavy-duty rotary percussion DTH drill rigs to penetrate difficult dolomitic limestone, quartzites, and fractured rock layers to tap pure, high-yield aquifers. We also provide core & soil sample collection drilling for mining, build elevated tank stands (3m–12m+), install water tanks (5,000L–20,000L+), and install solar & electric submersible pumps.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  {SERVICES[0].features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/services/borehole-drilling"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A5BB5] to-[#0A1F6B] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 transition-all"
                  >
                    <span>Full Borehole Process Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-900 font-mono font-semibold transition-colors"
                  >
                    <span>Get Borehole Quote</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                <Image
                  src="/images/drilling-rig-truck.jpg"
                  alt="Captain Investments truck-mounted rotary borehole drilling rig in Zambia"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-white">
                  <span className="text-amber-300 font-bold block">Commercial & Mining Grade</span>
                  Precision siting with WARMA compliance and solar pumping integration.
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Earth Movers for Hire */}
          <div className="rounded-3xl bg-white p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                <Image
                  src="/images/excavator-rocks.jpg"
                  alt="Heavy hydraulic crawler excavator on rocky terrain"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-white">
                  <span className="text-amber-300 font-bold block">Rapid Mobilization</span>
                  In-house multi-axle lowbed transport for rapid dispatch across Zambia.
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200">
                  <Tractor className="w-3.5 h-3.5 text-amber-600" />
                  <span>Service Division 02</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                  Heavy Plant & Earth Movers for Hire
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Whether cutting civil access roads, preparing factory building pads, hauling mining bulk with 30T/40T tippers, or trenching with 21T–38T heavy excavators, our fleet of 11 modern machines is maintained to the highest mechanical standards. Every hire includes our certified operator.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  {SERVICES[1].features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/services/equipment-hire"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                  >
                    <span>Inspect Hire Packages & Terms</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/fleet"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-900 font-mono font-semibold transition-colors"
                  >
                    <span>View All 11 Machines</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zambian Coverage & Logistics Banner */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-heading font-bold text-lg">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>Nationwide All-Zambia Coverage</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Operating from Lusaka HQ with fast lowbed plant mobilization across Copperbelt, Central, Southern, North-Western, and all 10 provinces of Zambia.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-heading font-bold text-lg">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Certified Operators Included</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Even on dry hire, we provide our certified operator (client supplies fuel). Full safety compliance, PPE, and medical fitness verified.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-heading font-bold text-lg">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <span>Fast WhatsApp Dispatch</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Contact our dispatch desk directly at +260 974 333 999 for instant machinery availability checks and quotation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Call to Action */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 uppercase">
            Ready to mobilize to your site?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Tell us your project scope, location in Zambia, and machinery requirements. We generate transparent quotes tailored to your schedule.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all"
            >
              Request a Free Quote
            </Link>
            <a
              href={BUSINESS_INFO.telLink}
              className="px-8 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-bold text-xs uppercase tracking-wider border border-slate-300 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call +260 974 333 999</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
