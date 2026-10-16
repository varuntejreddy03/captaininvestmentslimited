'use client';

import React from 'react';
import { FEATURE_FLAGS } from '@/lib/constants';
import { Shield, Award, CheckCircle2, Clock } from 'lucide-react';

/**
 * Animated Stats Bar
 * In accordance with client specifications, actual numerical counters are guarded
 * behind the SHOW_STATS_COUNTERS feature flag until verified by Captain Investments Limited.
 */
export function StatsBar() {
  const verifiedClientMetrics = [
    { label: 'Projects Completed', value: '300+' },
    { label: 'Positive Clients', value: '300+' },
    { label: 'Years in Zambia', value: '6+' },
    { label: 'Specialized Fleet Units', value: '11' },
  ];

  return (
    <div className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xl backdrop-blur-xl">
        {FEATURE_FLAGS.SHOW_STATS_COUNTERS ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {verifiedClientMetrics.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-heading text-3xl sm:text-5xl font-bold text-amber-500">
                    {stat.value}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] font-mono text-slate-600 text-center">
              <span className="font-bold text-slate-900 uppercase tracking-wider mr-1">
                11 Fleet Types:
              </span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">1. Excavator with Rock Breaker (21T–38T)</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">2. 30T Tippers</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">3. 40T Tippers</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">4. Truck Borehole Rig</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">5. Excavator Mounting Rig</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">6. 30T Dozer</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">7. 3.0 m³ Loader</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">8. Motor Grader</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">9. 11T Compactor</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">10. 4-in-1 Backhoe</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">11. 50T Lowbed</span>
            </div>
          </>
        ) : (
          /* Feature Flag OFF (Default): Transparent Verified Operational Standards */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-300 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm">
                  100% Certified Plant
                </h4>
                <p className="text-xs text-slate-500">
                  Fully serviced, site-ready earthmoving fleet
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 border border-blue-300 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm">
                  Turnkey Groundwater
                </h4>
                <p className="text-xs text-slate-500">
                  Farm & mining drilling to solar pump sets
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 border border-emerald-300 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm">
                  Flexible Hire Terms
                </h4>
                <p className="text-xs text-slate-500">
                  Wet & dry rates with dedicated operators
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 border border-indigo-300 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm">
                  Mon – Sat 08:00–17:00
                </h4>
                <p className="text-xs text-slate-500">
                  Live Lusaka dispatch desk & WhatsApp
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
