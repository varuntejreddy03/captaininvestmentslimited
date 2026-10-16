import React from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import { LiveHoursBadge } from './LiveHoursBadge';
import { BUSINESS_INFO, SERVICES, FLEET_MACHINES } from '@/lib/constants';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-[#070D1E] text-white border-t border-slate-800 overflow-hidden">
      {/* Track pattern top accent */}
      <div className="h-1.5 w-full track-pattern bg-amber-400/20" />

      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-36 bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <BrandLogo size="lg" invert />
            <p className="text-sm text-slate-300 leading-relaxed">
              Zambia&apos;s trusted specialists in commercial and farm borehole drilling, mining soil core sampling, and certified heavy earth-moving equipment hire. Headquartered in Lusaka with operations and plant mobilization across all 10 provinces of Zambia.
            </p>

            <div className="pt-1">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono block mb-1.5">
                Current Office Status
              </span>
              <LiveHoursBadge showTime />
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-semibold transition-colors"
              >
                <span>Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 border border-pink-500/30 text-xs font-semibold transition-colors"
              >
                <span>Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-amber-400 rounded-sm" />
              Services Across Zambia
            </h3>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={srv.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services/borehole-drilling"
                  className="text-slate-400 hover:text-white text-xs pl-5 block transition-colors"
                >
                  Commercial Farm & Mining Boreholes
                </Link>
              </li>
              <li>
                <Link
                  href="/services/borehole-drilling"
                  className="text-slate-400 hover:text-white text-xs pl-5 block transition-colors"
                >
                  Mining Soil & Geological Core Sampling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/borehole-drilling"
                  className="text-slate-400 hover:text-white text-xs pl-5 block transition-colors"
                >
                  Elevated Tank Stands & Solar Pumps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/equipment-hire"
                  className="text-slate-400 hover:text-white text-xs pl-5 block transition-colors"
                >
                  Certified Operators Included (Wet & Dry)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Fleet */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-amber-400 rounded-sm" />
              Heavy Fleet (11 Units)
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FLEET_MACHINES.slice(0, 5).map((machine) => (
                <li key={machine.id}>
                  <Link
                    href={`/fleet#${machine.id}`}
                    className="text-slate-300 hover:text-white transition-colors flex items-center justify-between text-xs group"
                  >
                    <span className="group-hover:text-amber-400 transition-colors truncate max-w-[180px]">{machine.name}</span>
                    <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-white/5 shrink-0 ml-1">
                      {machine.category}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/fleet"
                  className="text-sky-400 hover:text-sky-300 text-xs font-semibold inline-flex items-center gap-1"
                >
                  <span>View All 11 Machines & Rigs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Hours */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-amber-400 rounded-sm" />
              Lusaka HQ & Contact
            </h3>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Lusaka Headquarters</p>
                  <p className="text-xs text-slate-400">Serving All 10 Provinces Across Zambia</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.telLink}
                  className="font-mono text-white hover:text-amber-400 transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.mailtoLink}
                  className="text-xs text-slate-300 hover:text-white transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="pt-2 border-t border-white/10">
                <div className="text-xs font-mono text-slate-400 space-y-1">
                  <div className="flex justify-between">
                    <span>{BUSINESS_INFO.hours.days}:</span>
                    <span className="text-white font-medium">{BUSINESS_INFO.hours.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-rose-400">{BUSINESS_INFO.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>&copy; 2026 Captain Investments Limited. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Nationwide Zambia</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">
              Dispatch Desk
            </Link>
            <span>•</span>
            <a href={BUSINESS_INFO.whatsappLink} className="hover:text-amber-400 transition-colors">
              Direct WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
