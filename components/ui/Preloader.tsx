'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setLoading(false);
      return;
    }

    // Fast, crisp animation under 1.0s total
    const startTime = Date.now();
    const duration = 850; // ms

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 120);
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-slate-900 select-none pointer-events-auto"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-radial from-blue-500/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative flex flex-col items-center gap-6 px-6 text-center">
            {/* Official Brand Logo Mark */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative p-2 flex items-center justify-center"
            >
              <Image
                src="/images/logo-mark.png"
                alt="Captain Investments Emblem"
                width={96}
                height={96}
                className="object-contain drop-shadow-md"
                priority
              />
            </motion.div>

            {/* Official Logo Text Graphic */}
            <div className="space-y-1.5 flex flex-col items-center">
              <div className="relative w-56 h-10">
                <Image
                  src="/images/logo-text-dark.png"
                  alt="Captain Investments Limited"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="font-mono text-xs text-blue-700 font-semibold tracking-[0.25em] uppercase"
              >
                Zambia &bull; Boreholes & Heavy Plant
              </motion.p>
            </div>

            {/* Progress Bar & Percentage */}
            <div className="w-48 sm:w-64 space-y-2">
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#0A5BB5] via-[#3B8FE0] to-[#F59E0B] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[11px] font-mono text-slate-500">
                <span>SYSTEM INITIALIZING</span>
                <span className="text-amber-600 font-bold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
