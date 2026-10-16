import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BOREHOLE_PROCESS_STEPS, BUSINESS_INFO } from '@/lib/constants';
import { buildQuickBoreholeQuoteUrl } from '@/lib/whatsapp';
import { Droplets, CheckCircle2, Shield, Sun, ArrowRight, MessageSquare, AlertTriangle, Layers, Zap, Compass, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Borehole Drilling, Mining Soil Sampling & Solar Pumps Zambia',
  description:
    'Turnkey commercial borehole drilling for farms and mining, soil sample collection drilling, elevated steel tank stands, and solar/electric submersible pump sets across all Zambia.',
};

export default function BoreholeDrillingPage() {
  const quickWaUrl = buildQuickBoreholeQuoteUrl();

  return (
    <div className="pt-24 pb-12 sm:pb-20 bg-white text-slate-900">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 border-b border-slate-200 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-radial from-blue-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-800">
              <Droplets className="w-3.5 h-3.5 text-blue-600" />
              <span>Groundwater & Drilling Division &bull; Nationwide Zambia</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-normal text-slate-900">
              Commercial Borehole Drilling <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-amber-600">
                Farms, Mining & Exploration
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Industrial groundwater solutions across all 10 provinces of Zambia. From commercial boreholes for large-scale irrigation and mine dewatering to exploratory soil & core sample collection drilling, water tanks, steel tank stands, and solar pump installations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={quickWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-heading font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4 text-slate-950" />
                <span>Request Borehole Quote via WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-heading font-bold text-xs uppercase tracking-wider border border-slate-300 shadow-sm transition-all"
              >
                <span>Site Survey Booking</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Specializations: Commercial Farms, Mining & Soil Sampling */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 block mb-2">
            Specialized Capabilities
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-900 uppercase">
            Commercial & Mining Drilling
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Engineered for high daily yields and geoscientific accuracy throughout Zambia&apos;s diverse geological terrains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Agricultural Farms */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <Droplets className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-slate-900">
              Commercial Farm Boreholes
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              High-capacity, large-diameter boreholes delivering thousands of liters per hour for center pivot irrigation, livestock watering, commercial greenhouses, and agricultural processing facilities across Mkushi, Chisamba, Southern, and Central provinces.
            </p>
            <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Large casing diameters (8&quot; to 12&quot;)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Deep aquifer penetration for all-season volume</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Mining Dewatering & Process */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-slate-900">
              Mining Boreholes & Dewatering
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Industrial borehole drilling for mining operations in Copperbelt, Solwezi, and Kalumbila. Specialized in open pit perimeter dewatering, plant process water supply, camp drinking water systems, and environmental compliance monitoring wells.
            </p>
            <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Pit dewatering & perimeter drawdown wells</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Heavy DTH rotary rock drilling rigs</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Soil Sampling & Mining Exploration */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-slate-900">
              Mining Soil & Core Sampling
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Exploratory borehole drilling dedicated to soil sample collections and geotechnical lithological core analysis. Assisting mining geologists, civil engineers, and exploration teams with precise sub-surface sampling and stratigraphy logs.
            </p>
            <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>Mineral exploration sample collection</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>Geotechnical soil & strata analysis drilling</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4-Stage Geological Workflow */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-700 block mb-2">
            End-to-End Methodology
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-900 uppercase">
            The 4 Stages to Guaranteed Water
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            We follow strict engineering and environmental hydrogeology protocols to guarantee water purity, borehole longevity, and maximum yield.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BOREHOLE_PROCESS_STEPS.map((stage) => (
            <div
              key={stage.step}
              className="rounded-3xl bg-white p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center font-mono text-sm font-black text-blue-700">
                    0{stage.step}
                  </span>
                  <span className="font-mono text-xs text-amber-900 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 font-semibold">
                    {stage.depth} &bull; {stage.strata}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {stage.description}
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-4">
                  <span className="text-[11px] font-mono text-slate-500 block uppercase font-semibold">
                    Deliverables & Standards:
                  </span>
                  {stage.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Geology & Casing Spotlight Card */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-700 text-xs font-mono font-bold uppercase">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>Engineering & Siting Priority in Zambia</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                Why Professional Geophysical Siting & Casing Matter
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Zambian ground conditions vary from karstified dolomites and limestone caves in Lusaka to hard granites, quartzites, and copper-bearing stratas on the Copperbelt and North-Western provinces. Without rigorous geophysical resistivity sounding, there is a serious risk of striking dry fractures or contaminated shallow ground seepage.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Captain Investments Limited uses high-spec Class 9 uPVC full casing columns, pressure-grouted surface sanitary seals, and precision gravel packing to deliver clean, silt-free, and high-yielding water that stands the test of decades.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-md space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-blue-700 font-bold">
                <Shield className="w-4 h-4" />
                <span>Our Engineering Checklist</span>
              </div>
              <div className="space-y-2 text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Sanitary upper seal prevents runoff</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Continuous 4-8 hr yield step test</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>WARMA drilling permit compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Water purity sample analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Turnkey Water Storage Tanks, Elevated Tank Stands & Solar / Electric Pumps */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 sm:p-12 border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200">
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span>Solar & Electric Pumping + Storage</span>
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                Elevated Tank Stands, Storage Tanks & Solar Pump Sets
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Eliminate dependence on load-shedding with our complete off-grid solar groundwater systems. We engineer and erect heavy-duty structural steel elevated tank stands (3m, 6m, 9m, 12m+), install high-capacity water storage tanks (5,000L, 10,000L, 15,000L, 20,000L+), and commission both solar-powered DC submersible pump sets and high-pressure electric AC pump sets with automated float control switches.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                  Solar Submersible Pumps
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                  Electric AC Pump Sets
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                  Elevated Tank Stands (3m–12m+)
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                  Water Tanks (5,000L–20,000L+)
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                  Float Switch Automation
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                  Pressure Booster Systems
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 text-center p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block font-semibold">
                Direct Technical Inquiries & Quotes
              </span>
              <p className="text-2xl font-black font-heading text-slate-900">
                {BUSINESS_INFO.phone}
              </p>
              <p className="text-xs text-slate-600 font-medium">
                Countrywide Zambia Mobilization &bull; Mon - Sat 08:00 - 17:00
              </p>
              <a
                href={quickWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Borehole WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
