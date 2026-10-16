'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { buildQuoteRequestUrl } from '@/lib/whatsapp';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';

const quoteSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name or company (at least 2 characters)' }),
  phoneNumber: z.string().min(8, { message: 'Please enter a valid phone number (e.g. +260 97X XXX XXX)' }),
  serviceType: z.enum([
    'Commercial Farm Borehole (Irrigation & Agriculture)',
    'Mining Borehole Drilling & Dewatering',
    'Mining Soil & Core Sample Collection Drilling',
    'Elevated Steel Tank Stand & Water Storage Tanks',
    'Solar Submersible Pump Set Installation',
    'Electric Submersible Pump Set & Control Panel',
    'Heavy Hydraulic Excavators (21T to 38T) Hire',
    'Single Stance Tipper Truck (30 Tons) Hire',
    'Double Stance Tipper Truck (40 Tons) Hire',
    'Heavy Rotary DTH Borehole Drilling Rig Hire',
    'Heavy Bulldozer, Grader or Compactor Hire',
    'Multi-Axle Heavy Lowbed Transport Rig',
    'Other Specialized Project Inquiry',
  ], {
    errorMap: () => ({ message: 'Please select a service' }),
  }),
  projectLocation: z.string().min(2, { message: 'Please provide the project location or district in Zambia' }),
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
    serviceType: (initialService as any) || 'Commercial Farm Borehole (Irrigation & Agriculture)',
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

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0A5BB5', '#F59E0B', '#3B8FE0', '#0B0B0B'],
      });
    } catch {
      // safe fallback
    }

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
    <div className={`p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden ${className}`}>
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 border border-amber-500/30 text-amber-600 mb-2">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct WhatsApp Quote Dispatch</span>
        </div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
          Request a Rapid Project Quote
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Provide your project requirements across Zambia. We immediately prepare an instant WhatsApp dispatch inquiry for certified pricing.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Your Name / Company <span className="text-amber-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Copperbelt Mining Corp or Farm Operations Ltd"
            className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
              errors.fullName ? 'border-rose-500 bg-rose-50' : 'border-slate-300 hover:border-slate-400'
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Phone / WhatsApp Number <span className="text-amber-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            placeholder="+260 97X XXX XXX"
            className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
              errors.phoneNumber ? 'border-rose-500 bg-rose-50' : 'border-slate-300 hover:border-slate-400'
            }`}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phoneNumber}</span>
            </p>
          )}
        </div>

        {/* Service Type Dropdown */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Service Required in Zambia <span className="text-amber-500">*</span>
          </label>
          <select
            value={formData.serviceType}
            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value as any })}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 hover:border-slate-400 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all cursor-pointer"
          >
            <option value="Commercial Farm Borehole (Irrigation & Agriculture)">Commercial Farm Borehole (Irrigation & Agriculture)</option>
            <option value="Mining Borehole Drilling & Dewatering">Mining Borehole Drilling & Dewatering</option>
            <option value="Mining Soil & Core Sample Collection Drilling">Mining Soil & Core Sample Collection Drilling</option>
            <option value="Elevated Steel Tank Stand & Water Storage Tanks">Elevated Steel Tank Stand & Water Storage Tanks</option>
            <option value="Solar Submersible Pump Set Installation">Solar Submersible Pump Set Installation</option>
            <option value="Electric Submersible Pump Set & Control Panel">Electric Submersible Pump Set & Control Panel</option>
            <option value="Heavy Hydraulic Excavators (21T to 38T) Hire">Heavy Hydraulic Excavators (21T to 38T) Hire</option>
            <option value="Single Stance Tipper Truck (30 Tons) Hire">Single Stance Tipper Truck (30 Tons) Hire</option>
            <option value="Double Stance Tipper Truck (40 Tons) Hire">Double Stance Tipper Truck (40 Tons) Hire</option>
            <option value="Heavy Rotary DTH Borehole Drilling Rig Hire">Heavy Rotary DTH Borehole Drilling Rig Hire</option>
            <option value="Heavy Bulldozer, Grader or Compactor Hire">Heavy Bulldozer, Grader or Compactor Hire</option>
            <option value="Multi-Axle Heavy Lowbed Transport Rig">Multi-Axle Heavy Lowbed Transport Rig</option>
            <option value="Other Specialized Project Inquiry">Other Specialized Project Inquiry</option>
          </select>
          {errors.serviceType && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.serviceType}</span>
            </p>
          )}
        </div>

        {/* Site Location */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Project Location (Any Province in Zambia) <span className="text-amber-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.projectLocation}
            onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
            placeholder="e.g. Copperbelt, Solwezi, Mkushi, Lusaka, Mazabuka"
            className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
              errors.projectLocation ? 'border-rose-500 bg-rose-50' : 'border-slate-300 hover:border-slate-400'
            }`}
          />
          {errors.projectLocation && (
            <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.projectLocation}</span>
            </p>
          )}
        </div>

        {/* Estimated Depth or Duration */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Estimated Scope / Depth / Duration (Optional)
          </label>
          <input
            type="text"
            value={formData.depthOrDuration}
            onChange={(e) => setFormData({ ...formData, depthOrDuration: e.target.value })}
            placeholder="e.g. 100m farm borehole, or 3 months excavator hire"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 hover:border-slate-400 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
          />
        </div>

        {/* Message / Additional Notes */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Additional Specifications (Optional)
          </label>
          <textarea
            rows={3}
            value={formData.messageNotes}
            onChange={(e) => setFormData({ ...formData, messageNotes: e.target.value })}
            placeholder="Specify terrain, water requirements, tank size, or soil sample depths..."
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 hover:border-slate-400 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full group py-3 px-6 rounded-xl font-heading font-black text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-[0_4px_16px_rgba(245,158,11,0.4)] transition-all flex items-center justify-center gap-2 transform active:scale-[0.98] cursor-pointer"
        >
          {submitted ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-950" />
              <span>Opening WhatsApp Direct...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <span>Generate WhatsApp Quote Now</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-slate-500">
          Instant response via WhatsApp. Certified experienced operator included with every machine hire.
        </p>
      </form>
    </div>
  );
}
