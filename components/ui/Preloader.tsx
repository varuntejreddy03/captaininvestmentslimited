'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandMotifSVG } from './BrandLogo';

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

    // Fast, crisp animation under 1.1s total
    const startTime = Date.now();
    const duration = 900; // ms

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 150);
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
          exit={{ opacity: 0, y: -20, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070D1E] text-white select-none pointer-events-auto"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-radial from-[#0A5BB5]/20 via-transparent to-transparent pointer-events-none" />

          <div className="relative flex flex-col items-center gap-6 px-6 text-center">
            {/* Official Brand Logo Mark */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative p-2 flex items-center justify-center"
            >
              <Image
                src="/images/logo-mark.png"
                alt="Captain Investments Emblem"
                width={96}
                height={96}
                className="object-contain filter drop-shadow-[0_0_25px_rgba(245,158,11,0.5)]"
                priority
              />
            </motion.div>

            {/* Typography */}
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="font-heading text-xl md:text-2xl font-black tracking-wider text-white"
              >
                CAPTAIN <span className="text-amber-400">INVESTMENTS</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="font-mono text-xs text-sky-400 tracking-[0.25em] uppercase"
              >
                Lusaka • Boreholes & Heavy Plant
              </motion.p>
            </div>

            {/* Progress Bar & Percentage */}
            <div className="w-48 sm:w-64 space-y-2">
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#0A5BB5] via-[#3B8FE0] to-[#F59E0B] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[11px] font-mono text-slate-400">
                <span>SYSTEM INITIALIZING</span>
                <span className="text-amber-400 font-bold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
