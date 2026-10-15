'use client';

import React from 'react';
import { QuoteForm } from './QuoteForm';
import { LiveHoursBadge } from './LiveHoursBadge';
import { BUSINESS_INFO } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock, ExternalLink, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export function ContactSection({ initialService }: ContactSectionProps) {
  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-[#070D1E] overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-amber-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Lusaka Dispatch & Support Desk</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white uppercase tracking-normal">
            Connect With Our Engineers
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Get instant plant availability, schedule a hydrogeological survey, or dispatch heavy machinery to your site today.
          </p>
        </div>

        {/* Split Layout: Left Details + Map, Right Quote Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business Details, Live Hours, Embedded Map, Facebook */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel space-y-5 border border-white/10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Office Status
                </span>
                <LiveHoursBadge showTime />
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center shrink-0 text-amber-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">
                      Direct Hotline & WhatsApp
                    </span>
                    <div className="flex flex-col gap-1 mt-0.5">
                      <a
                        href={BUSINESS_INFO.telLink}
                        className="font-heading text-lg font-bold text-white hover:text-amber-400 transition-colors"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                      <a
                        href={BUSINESS_INFO.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:underline font-semibold"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Chat directly on WhatsApp (wa.me)</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center shrink-0 text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">
                      Email Address
                    </span>
                    <p className="mt-0.5">
                      <a
                        href={BUSINESS_INFO.mailtoLink}
                        className="text-sm font-medium text-white hover:text-amber-400 transition-colors break-all"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">
                      Operating Headquarters
                    </span>
                    <p className="text-sm font-medium text-white mt-0.5">
                      {BUSINESS_INFO.address.full}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Fast plant lowbed dispatch throughout Lusaka Province, Central, and Copperbelt.
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">
                      Business Operating Hours
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {BUSINESS_INFO.hours.days}: {BUSINESS_INFO.hours.time}
                    </p>
                    <p className="text-xs text-rose-400">
                      Sunday: {BUSINESS_INFO.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Facebook Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-sky-400" />
                  <span>Visit Captain Investments Limited on Facebook</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map of Lusaka, Zambia */}
            <div className="rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-xl">
              <div className="p-3 bg-black/40 border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Coverage Map: Lusaka, Zambia</span>
                </span>
                <span className="text-[10px] text-emerald-400">Live GPS Zone</span>
              </div>
              <div className="relative w-full h-56 sm:h-64">
                <iframe
                  title="Captain Investments Limited Lusaka Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123063.3087328905!2d28.218556734185194!3d-15.416666700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f367e9b8f2c3%3A0xb68b200b3e5b1574!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2szm!4v1710000000000!5m2!1sen!2szm"
                  className="w-full h-full border-0 filter contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Right Column: Zod-Validated Quote Form */}
          <div className="lg:col-span-7">
            <QuoteForm initialService={initialService} />
          </div>
        </div>
      </div>
    </section>
  );
}
