import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LiveHoursBadge } from '@/components/ui/LiveHoursBadge';
import { BUSINESS_INFO, WHY_CHOOSE_US } from '@/lib/constants';
import { ShieldCheck, MapPin, Phone, Mail, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Captain Investments Limited | Zambia Borehole & Plant Hire Contractors',
  description:
    'Learn about Captain Investments Limited, Zambia’s premier contractor for borehole drilling, mining soil sampling, and heavy earth-moving plant hire. Our mission, fleet standards, and operators.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-12 sm:pb-20 bg-white text-slate-900">
      {/* About Hero Header */}
      <section className="relative py-16 lg:py-24 border-b border-slate-200 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-radial from-blue-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-300 text-amber-900">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Company Profile & Standards</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-normal text-slate-900">
              Built on Strength. <br />
              <span className="text-amber-500">Driven by Integrity.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Captain Investments Limited is a premier Zambian contractor providing precision borehole drilling, mining exploration soil sampling, water storage tank installations, and heavy earth-moving plant hire across all 10 provinces of Zambia.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Proven Track Record: 300+ Projects, 300+ Positive Clients, 6+ Years Experience, 11 Fleet Units */}
      <section className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 border-b sm:border-b-0 sm:border-r border-slate-100 flex flex-col justify-center">
              <span className="font-heading text-4xl sm:text-5xl font-black text-amber-500 tracking-tight">
                300+
              </span>
              <span className="font-heading text-base sm:text-lg font-bold text-slate-900 mt-2">
                Projects Completed
              </span>
              <p className="text-xs text-slate-500 mt-1">
                Commercial boreholes, mining sampling & bulk earthworks
              </p>
            </div>

            <div className="text-center p-4 border-b sm:border-b-0 sm:border-r border-slate-100 flex flex-col justify-center">
              <span className="font-heading text-4xl sm:text-5xl font-black text-blue-700 tracking-tight">
                300+
              </span>
              <span className="font-heading text-base sm:text-lg font-bold text-slate-900 mt-2">
                Positive Clients
              </span>
              <p className="text-xs text-slate-500 mt-1">
                Farms, mining operators & civil contractors nationwide
              </p>
            </div>

            <div className="text-center p-4 border-b sm:border-b-0 sm:border-r border-slate-100 flex flex-col justify-center">
              <span className="font-heading text-4xl sm:text-5xl font-black text-emerald-600 tracking-tight">
                6+
              </span>
              <span className="font-heading text-base sm:text-lg font-bold text-slate-900 mt-2">
                Years in Zambia
              </span>
              <p className="text-xs text-slate-500 mt-1">
                Proven drilling & plant hire excellence across 10 provinces
              </p>
            </div>

            <div className="text-center p-4 flex flex-col justify-center">
              <span className="font-heading text-4xl sm:text-5xl font-black text-amber-600 tracking-tight">
                11
              </span>
              <span className="font-heading text-base sm:text-lg font-bold text-slate-900 mt-2">
                Specialized Fleet Units
              </span>
              <p className="text-xs text-slate-500 mt-1">
                Modern certified earthmovers, haulage tippers & drill rigs
              </p>
            </div>
          </div>

          {/* Explicit Listing of all 11 Specialized Fleet Types */}
          <div className="pt-6 border-t border-slate-100">
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block mb-3 text-center sm:text-left">
              The 11 Specialized Fleet Units in Operation:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black shrink-0">1</span>
                <span>Heavy Excavators & Rock Breaker (21 to 38 Tons)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black shrink-0">2</span>
                <span>Single Stance Tipper Trucks (30 Tons, 6x4)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black shrink-0">3</span>
                <span>Double Stance Tipper Trucks (40 Tons, 8x4)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black shrink-0">4</span>
                <span>Truck-Mounted Rotary DTH Borehole Drilling Rig</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black shrink-0">5</span>
                <span>Excavator Mounting Rig (Soil Sampling & Exploration)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black shrink-0">6</span>
                <span>Heavy Crawler Bulldozer (30 Tons with Ripper)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black shrink-0">7</span>
                <span>Heavy Front Wheel Loader (3.0 m³ Bucket)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black shrink-0">8</span>
                <span>Heavy Articulated Motor Grader (14-ft Moldboard)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black shrink-0">9</span>
                <span>Vibratory Soil Compactor Roller (11 Tons)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black shrink-0">10</span>
                <span>Dual-Purpose 4-in-1 Backhoe Loader</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-800 flex items-center gap-2.5 sm:col-span-2 lg:col-span-2">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black shrink-0">11</span>
                <span>Multi-Axle Heavy Lowbed Transporter (50+ Tons Nationwide Delivery)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Motif Story */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col items-center text-center max-w-sm w-full">
              <div className="relative w-44 h-44 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Captain Investments Limited Logo Motif"
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>
              <span className="font-heading text-xl font-bold text-slate-900">
                The Captain Emblem
              </span>
              <span className="text-xs font-mono text-amber-600 font-semibold mt-1">
                Wave &bull; Auger &bull; Crawler Track
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
              The Meaning Behind Our Motif
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Our emblem represents our dual pillars of industrial excellence across Zambia:
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center shrink-0 font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm">
                      The Ocean Blue Wave
                    </h4>
                    <p className="text-xs text-slate-600">
                      Curling into a &quot;C&quot; for Captain, it represents our commitment to discovering sustainable, clean underground water aquifers for farms, mining operations, and communities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shrink-0 font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm">
                      The Golden Drill Auger
                    </h4>
                    <p className="text-xs text-slate-600">
                      Positioned at the core, it symbolizes engineering precision and heavy rotary percussion drilling mechanics capable of penetrating difficult Zambian bedrock.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center shrink-0 font-bold text-xs">
                    03
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm">
                      The Heavy Excavator Track
                    </h4>
                    <p className="text-xs text-slate-600">
                      The solid foundation beneath the mark, reflecting our fleet of rugged earthmovers—21T–38T excavators, 30T/40T tippers, bulldozers, and loaders ready to conquer any site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Commitments */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 block mb-2">
              Our Core Principles
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-900 uppercase">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-3">
                <span className="font-mono text-xs text-amber-600 font-bold">
                  Principle 0{idx + 1}
                </span>
                <h3 className="font-heading text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide Base & Contact CTA */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2">
            <LiveHoursBadge showTime />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 uppercase">
            Headquartered in Lusaka &bull; Deploying All Over Zambia
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Open Monday to Saturday, 08:00 to 17:00. Call or WhatsApp our dispatch desk to discuss your site requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all"
            >
              Get in Touch with Captain
            </Link>
            <a
              href={BUSINESS_INFO.telLink}
              className="px-8 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-bold text-xs uppercase tracking-wider border border-slate-300 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
