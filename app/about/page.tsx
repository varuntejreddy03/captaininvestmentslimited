import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BrandLogo, BrandMotifSVG } from '@/components/ui/BrandLogo';
import { LiveHoursBadge } from '@/components/ui/LiveHoursBadge';
import { BUSINESS_INFO, WHY_CHOOSE_US } from '@/lib/constants';
import { ShieldCheck, MapPin, Phone, Mail, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Captain Investments Limited | Lusaka Borehole & Plant Hire Contractors',
  description:
    'Learn about Captain Investments Limited, Lusaka’s premier contractor for borehole drilling and heavy earth-moving plant hire in Zambia. Our mission, fleet standards, and operators.',
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-[#070D1E] text-white">
      {/* About Hero Header */}
      <section className="relative py-16 lg:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[#0A5BB5]/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Company Profile & Standards</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-normal text-white">
              Built on Strength. <br />
              <span className="text-amber-400">Driven by Integrity.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Captain Investments Limited is a 100% Zambian-focused contractor providing precision borehole drilling and heavy earth-moving plant hire to developers, agricultural farms, civil infrastructure projects, and mining sites across Zambia.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Motif Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl flex flex-col items-center text-center">
              <div className="relative w-44 h-44 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Captain Investments Limited Logo Motif"
                  fill
                  className="object-contain drop-shadow-[0_0_35px_rgba(10,91,181,0.5)]"
                />
              </div>
              <span className="font-heading text-xl font-bold text-white">
                The Captain Emblem
              </span>
              <span className="text-xs font-mono text-amber-400 mt-1">
                Wave &bull; Auger &bull; Crawler Track
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              The Meaning Behind Our Motif
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Our emblem represents our dual pillars of industrial excellence in Zambia:
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center shrink-0 font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm">
                      The Ocean Blue Wave
                    </h4>
                    <p className="text-xs text-slate-300">
                      Curling into a &quot;C&quot; for Captain, it represents our commitment to discovering sustainable, clean underground water aquifers that power homes, crops, and industries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0 font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm">
                      The Golden Drill Auger
                    </h4>
                    <p className="text-xs text-slate-300">
                      Positioned at the core, it symbolizes engineering precision and the powerful rotary percussion mechanics used to pierce tough Zambian rock formations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-700 text-slate-200 border border-slate-600 flex items-center justify-center shrink-0 font-bold text-xs">
                    03
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm">
                      The Heavy Excavator Track
                    </h4>
                    <p className="text-xs text-slate-300">
                      The solid foundation beneath the mark, reflecting our fleet of rugged earthmovers—excavators, bulldozers, and loaders ready to tackle any terrain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Commitments */}
      <section className="py-20 bg-[#050811] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 block mb-2">
              Our Core Principles
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white uppercase">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
                <span className="font-mono text-xs text-amber-400 font-bold">
                  Principle 0{idx + 1}
                </span>
                <h3 className="font-heading text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lusaka Base & Contact CTA */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2">
            <LiveHoursBadge showTime />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white uppercase">
            Headquartered in Lusaka, Zambia
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Open Monday to Saturday, 08:00 to 17:00. Call or visit our dispatch desk to discuss your site needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
            >
              Get in Touch with Captain
            </Link>
            <a
              href={BUSINESS_INFO.telLink}
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-heading font-bold text-xs uppercase tracking-wider border border-white/15 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
