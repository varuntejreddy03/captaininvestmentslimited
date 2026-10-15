'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { buildQuoteRequestUrl } from '@/lib/whatsapp';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';

const quoteSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name (at least 2 characters)' }),
  phoneNumber: z.string().min(8, { message: 'Please enter a valid phone number (e.g. +260 97X XXX XXX)' }),
  serviceType: z.enum([
    'Borehole Drilling (Complete Package)',
    'Hydrogeological Ground Survey Only',
    'Earth Movers Hire (Excavator / Dozer / Loader)',
    'Road Grading & Compaction',
    'Solar Pump Installation & Tank Stand',
    'Lowbed Heavy Haul Transport',
    'Other Specialized Request',
  ], {
    errorMap: () => ({ message: 'Please select a service' }),
  }),
  projectLocation: z.string().min(2, { message: 'Please provide the site location or district in Zambia' }),
  depthOrDuration: z.string().optional(),
  messageNotes: z.string().optional(),
});

type FormData = z.infer<typeof quoteSchema>;

interface QuoteFormProps {
  initialService?: string;
  className?: string;
}

export function QuoteForm({ initialService, className = '' }: QuoteFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    serviceType: (initialService as any) || 'Borehole Drilling (Complete Package)',
    projectLocation: '',
    depthOrDuration: '',
    messageNotes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = quoteSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        if (field) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0A5BB5', '#F59E0B', '#3B8FE0', '#FFFFFF'],
      });
    } catch (e) {
      // safe fallback if canvas not available
    }

    // Build prefilled WhatsApp URL and redirect
    const waUrl = buildQuoteRequestUrl({
      fullName: result.data.fullName,
      phoneNumber: result.data.phoneNumber,
      serviceType: result.data.serviceType,
      projectLocation: result.data.projectLocation,
      depthOrDuration: result.data.depthOrDuration,
      messageNotes: result.data.messageNotes,
    });

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 450);
  };

  return (
    <div className={`p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden ${className}`}>
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-2">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct WhatsApp Quote Generator</span>
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
          Request a Rapid Quote
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-1">
          Fill in your site requirements. We immediately compose a prefilled WhatsApp inquiry for instant dispatch review.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Your Name / Company <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Mwansa Banda or Kafue Farming Ltd"
            className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
              errors.fullName ? 'border-rose-500 bg-rose-500/10' : 'border-white/10 hover:border-white/20'
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Contact Phone / WhatsApp <span className="text-amber-400">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            placeholder="+260 97X XXX XXX"
            className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
              errors.phoneNumber ? 'border-rose-500 bg-rose-500/10' : 'border-white/10 hover:border-white/20'
            }`}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phoneNumber}</span>
            </p>
          )}
        </div>

        {/* Service Type Dropdown */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Service Required <span className="text-amber-400">*</span>
          </label>
          <select
            value={formData.serviceType}
            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value as any })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#070D1E] border border-white/10 hover:border-white/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all cursor-pointer"
          >
            <option value="Borehole Drilling (Complete Package)">Borehole Drilling (Complete Package)</option>
            <option value="Hydrogeological Ground Survey Only">Hydrogeological Ground Survey Only</option>
            <option value="Earth Movers Hire (Excavator / Dozer / Loader)">Earth Movers Hire (Excavator / Dozer / Loader)</option>
            <option value="Road Grading & Compaction">Road Grading & Compaction</option>
            <option value="Solar Pump Installation & Tank Stand">Solar Pump Installation & Tank Stand</option>
            <option value="Lowbed Heavy Haul Transport">Lowbed Heavy Haul Transport</option>
            <option value="Other Specialized Request">Other Specialized Request</option>
          </select>
          {errors.serviceType && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.serviceType}</span>
            </p>
          )}
        </div>

        {/* Site Location */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Project Location in Zambia <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.projectLocation}
            onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
            placeholder="e.g. Lusaka East, Chongwe, Chilanga, Kafue, Copperbelt"
            className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
              errors.projectLocation ? 'border-rose-500 bg-rose-500/10' : 'border-white/10 hover:border-white/20'
            }`}
          />
          {errors.projectLocation && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.projectLocation}</span>
            </p>
          )}
        </div>

        {/* Estimated Depth or Duration */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Estimated Scope / Duration (Optional)
          </label>
          <input
            type="text"
            value={formData.depthOrDuration}
            onChange={(e) => setFormData({ ...formData, depthOrDuration: e.target.value })}
            placeholder="e.g. 80m borehole or 2 weeks excavator hire"
            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
          />
        </div>

        {/* Message / Additional Notes */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Additional Details or Specific Machine Needed
          </label>
          <textarea
            rows={3}
            value={formData.messageNotes}
            onChange={(e) => setFormData({ ...formData, messageNotes: e.target.value })}
            placeholder="Mention soil type, access roads, start date, or specific plant requirements..."
            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full group py-3 px-6 rounded-xl font-heading font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all flex items-center justify-center gap-2 transform active:scale-[0.98] cursor-pointer"
        >
          {submitted ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-950" />
              <span>Opening WhatsApp Chat...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <span>Generate WhatsApp Quote Now</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-slate-400">
          No waiting for emails. We respond rapidly via WhatsApp during Lusaka business hours (08:00 - 17:00).
        </p>
      </form>
    </div>
  );
}
