'use client';

import React from 'react';
import { QuoteForm } from './QuoteForm';
import { LiveHoursBadge } from './LiveHoursBadge';
import { BUSINESS_INFO } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock, ExternalLink, MessageSquare, Instagram, Globe } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export function ContactSection({ initialService }: ContactSectionProps) {
  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-slate-50 overflow-hidden border-t border-slate-200">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-300 text-amber-900 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Countrywide Operations &bull; Lusaka HQ</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-900 uppercase tracking-normal">
            Connect With Our Engineers
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Get instant plant availability, schedule a hydrogeological survey, or dispatch heavy machinery anywhere across all 10 provinces of Zambia.
          </p>
        </div>

        {/* Split Layout: Left Details + Map, Right Quote Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business Details, Live Hours, Embedded Map, Social Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  Office Status
                </span>
                <LiveHoursBadge showTime />
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center shrink-0 text-amber-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase font-semibold">
                      Direct Hotline & WhatsApp
                    </span>
                    <div className="flex flex-col gap-1 mt-0.5">
                      <a
                        href={BUSINESS_INFO.telLink}
                        className="font-heading text-lg font-bold text-slate-900 hover:text-amber-600 transition-colors"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                      <a
                        href={BUSINESS_INFO.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-600 hover:underline font-semibold"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Chat directly on WhatsApp (wa.me)</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center shrink-0 text-blue-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase font-semibold">
                      Email Address
                    </span>
                    <p className="mt-0.5">
                      <a
                        href={BUSINESS_INFO.mailtoLink}
                        className="text-sm font-medium text-slate-900 hover:text-amber-600 transition-colors break-all"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Address & Scope */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase font-semibold">
                      Headquarters & Scope
                    </span>
                    <p className="text-sm font-semibold text-slate-900 mt-0.5">
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.country}
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {BUSINESS_INFO.coverageNote}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase font-semibold">
                      Business Operating Hours
                    </span>
                    <p className="text-sm font-semibold text-slate-900 mt-0.5">
                      {BUSINESS_INFO.hours.days}: {BUSINESS_INFO.hours.time}
                    </p>
                    <p className="text-xs text-rose-600 font-medium">
                      Sunday: {BUSINESS_INFO.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Buttons: Facebook & Instagram */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                  <span>Facebook Page</span>
                </a>
                <a
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-pink-50 to-amber-50 hover:from-pink-100 hover:to-amber-100 border border-pink-200 text-pink-900 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map of Entire Zambia */}
            <div className="rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl">
              <div className="p-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs font-mono text-slate-700">
                <span className="flex items-center gap-1.5 font-semibold">
                  <Globe className="w-3.5 h-3.5 text-amber-500" />
                  <span>National Coverage: All Over Zambia</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  All 10 Provinces
                </span>
              </div>
              <div className="relative w-full h-56 sm:h-64">
                <iframe
                  title="Captain Investments Limited All Zambia Coverage Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7775084.770983897!2d23.63914853037618!3d-13.44754719230553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f367e9b8f2c3%3A0xb68b200b3e5b1574!2sZambia!5e0!3m2!1sen!2szm!4v1710000000000!5m2!1sen!2szm"
                  className="w-full h-full border-0"
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
