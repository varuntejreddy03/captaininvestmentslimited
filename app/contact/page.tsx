import React from 'react';
import type { Metadata } from 'next';
import { ContactSection } from '@/components/ui/ContactSection';
import { BUSINESS_INFO } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock, MessageSquare, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Instant WhatsApp Quote | Captain Investments Limited Lusaka',
  description:
    'Contact Captain Investments Limited in Lusaka, Zambia for borehole drilling inquiries and earth moving equipment hire quotes. Call +260 974 333 999 or chat directly via WhatsApp.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-[#070D1E] text-white">
      {/* Contact Section Component (with Split Layout, Live Hours, Map, and Zod Form) */}
      <ContactSection />

      {/* Frequently Asked Questions */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-amber-400">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Quick Answers</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-2">
              <h3 className="font-heading font-bold text-white text-base">
                How quickly can equipment be mobilized to my site?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                For sites in Lusaka Province (Chongwe, Chilanga, Kafue, Leopards Hill), our heavy lowbed transport can mobilize machinery within 24 to 48 hours of contract confirmation. For regional provinces (Copperbelt, Southern, Central), mobilization is scheduled based on transport route clearances.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-2">
              <h3 className="font-heading font-bold text-white text-base">
                What does a complete borehole drilling package include?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                A turnkey borehole includes geophysical resistivity siting, rotary percussion rock drilling, Class-9 uPVC casing installation, slotted intake screen positioning, graded silica gravel pack, continuous 4–8 hour yield test pumping, and optional solar submersible pump and elevated steel tank stand installation.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-2">
              <h3 className="font-heading font-bold text-white text-base">
                What is the difference between Wet and Dry machine hire?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Wet hire includes the machine, our experienced certified operator, and fuel management per shift. Dry hire provides the machine alone for clients with their own qualified operators and fuel supplies.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-2">
              <h3 className="font-heading font-bold text-white text-base">
                What are your operating hours in Lusaka?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our Lusaka dispatch office operates Monday to Saturday from 08:00 to 17:00 Central Africa Time (CAT). We are closed on Sundays, but WhatsApp quote inquiries sent outside business hours are reviewed promptly at opening on Monday.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
