/**
 * WhatsApp Deep-link Generator for Captain Investments Limited
 * Generates pre-filled WhatsApp click-to-chat links for instantaneous frontend conversion.
 */

import { BUSINESS_INFO } from './constants';

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encoded}`;
}

export function buildMachineRequestUrl(machineName: string, model?: string): string {
  const modelStr = model ? ` (${model})` : '';
  const message = `Hello Captain Investments Limited! I would like to check availability and request a quote for hiring your: *${machineName}${modelStr}*. 

My project details:
- Location / Site in Zambia: 
- Expected Start Date: 
- Duration (Days / Weeks): 
- Operator required (Wet / Dry Hire): `;

  return buildWhatsAppUrl(message);
}

export interface QuoteFormData {
  fullName: string;
  phoneNumber: string;
  serviceType: string;
  projectLocation?: string;
  depthOrDuration?: string;
  messageNotes?: string;
}

export function buildQuoteRequestUrl(data: QuoteFormData): string {
  const lines: string[] = [
    `*NEW INQUIRY - CAPTAIN INVESTMENTS LIMITED*`,
    `----------------------------------------`,
    `*Client Name:* ${data.fullName}`,
    `*Phone Number:* ${data.phoneNumber}`,
    `*Service Requested:* ${data.serviceType}`,
  ];

  if (data.projectLocation) {
    lines.push(`*Site / Location:* ${data.projectLocation}`);
  }

  if (data.depthOrDuration) {
    lines.push(`*Estimated Depth / Duration:* ${data.depthOrDuration}`);
  }

  if (data.messageNotes) {
    lines.push(`*Project Details:* ${data.messageNotes}`);
  }

  lines.push(`----------------------------------------`);
  lines.push(`Sent via captaininvestmentslimited.com`);

  return buildWhatsAppUrl(lines.join('\n'));
}

export function buildQuickBoreholeQuoteUrl(): string {
  const message = `Hello Captain Investments Limited! I would like to request an immediate quote for *Borehole Drilling* in Lusaka / Zambia. 

- Location of plot/farm: 
- Purpose (Residential / Commercial / Agricultural): 
- Do you require full solar pump installation? `;

  return buildWhatsAppUrl(message);
}
