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
  // TODO_CLIENT_TO_CONFIRM: When client confirms verified numbers, enable SHOW_STATS_COUNTERS in lib/constants.ts
  const unconfirmedPlaceholderMetrics = [
    { label: 'Years of Operation', value: '5+', comment: 'TODO_CLIENT_TO_CONFIRM: Exact incorporation year' },
    { label: 'Boreholes Completed', value: '350+', comment: 'TODO_CLIENT_TO_CONFIRM: Total completed borehole tally' },
    { label: 'Heavy Machinery in Fleet', value: '11', comment: 'TODO_CLIENT_TO_CONFIRM: 11 verified fleet units' },
    { label: 'Operator Safety Compliance', value: '100%', comment: 'TODO_CLIENT_TO_CONFIRM: Safety audit rating' },
  ];

  return (
    <div className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xl backdrop-blur-xl">
        {FEATURE_FLAGS.SHOW_STATS_COUNTERS ? (
          /* Feature Flag ON: Render Verified Counters */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {unconfirmedPlaceholderMetrics.map((stat, idx) => (
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
