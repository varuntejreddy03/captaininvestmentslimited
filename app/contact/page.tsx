import React from 'react';
import type { Metadata } from 'next';
import { ContactSection } from '@/components/ui/ContactSection';
import { BUSINESS_INFO } from '@/lib/constants';
import { HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Instant WhatsApp Quote | Captain Investments Limited Zambia',
  description:
    'Contact Captain Investments Limited for commercial borehole drilling, mining soil sampling, and heavy plant equipment hire quotes across all Zambia. Call +260 974 333 999 or chat directly via WhatsApp.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-12 sm:pb-20 bg-white text-slate-900">
      {/* Contact Section Component (with Split Layout, Live Hours, National Zambia Map, and Zod Form) */}
      <ContactSection />

      {/* Frequently Asked Questions */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 border border-amber-300 text-amber-900">
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>Quick Answers</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 uppercase">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-heading font-bold text-slate-900 text-base">
                Do your services cover areas outside of Lusaka?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Yes! Our services operate all over Zambia, not only in Lusaka. We mobilize heavy earthmoving equipment and rotary DTH borehole drilling rigs across all 10 provinces of Zambia (including Copperbelt, North-Western, Central, Southern, and Eastern provinces) using our multi-axle heavy transport lowbeds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-heading font-bold text-slate-900 text-base">
                What is the difference between Wet and Dry machine hire?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Even in dry hire, we provide our certified operator (client supplies fuel). Wet hire includes both certified operator and fuel. Having our experienced operator on every project ensures optimal machine productivity, site safety, and avoids costly mechanical downtime.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-heading font-bold text-slate-900 text-base">
                What borehole drilling services do you provide?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We provide commercial borehole drilling for agricultural farms and mining operations (including dewatering and processing), exploratory borehole drilling for mining soil and rock core sample collections, elevated steel tank stand fabrication (3m to 12m+), water storage tank installation (5,000L to 20,000L+), and both solar and electric submersible pump set installations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-heading font-bold text-slate-900 text-base">
                How quickly can equipment be mobilized to my site?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For sites in Lusaka and surrounding regions, lowbed mobilization typically occurs within 24 to 48 hours of contract confirmation. For regional provinces across Zambia, mobilization is coordinated based on route permits and site readiness.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-heading font-bold text-slate-900 text-base">
                What are your operating hours?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our dispatch desk operates Monday to Saturday from 08:00 to 17:00 Central Africa Time (CAT). We are closed on Sundays, but WhatsApp inquiries sent via our website are reviewed promptly at opening on Monday.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
