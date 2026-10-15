'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { FLEET_MACHINES } from '@/lib/constants';
import { FleetTiltCard } from '@/components/three/FleetTiltCard';
import { ChevronLeft, ChevronRight, Truck, ArrowRight } from 'lucide-react';

export function FleetShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Excavation', 'Earth Moving', 'Compaction', 'Grading', 'Haulage'];

  const filteredMachines =
    selectedCategory === 'All'
      ? FLEET_MACHINES
      : FLEET_MACHINES.filter((m) => m.category === selectedCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 380;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative py-24 bg-[#070D1E] overflow-hidden">
      {/* Background Track Accent */}
      <div className="absolute inset-0 track-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-3">
              <Truck className="w-3.5 h-3.5" />
              <span>Plant & Equipment for Hire</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white uppercase tracking-normal">
              Our Heavy Machinery Fleet
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-xl">
              Inspect our 8 specialized machines available for wet or dry hire across Zambia with rapid lowbed deployment.
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 active:scale-95 text-white border border-white/10 transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 active:scale-95 text-white border border-white/10 transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <Link
              href="/fleet"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-[#0A5BB5] hover:bg-[#0A1F6B] text-white text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <span>Full Specs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-slate-950 font-black shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Pin-Scroll Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {filteredMachines.map((machine) => (
            <div
              key={machine.id}
              className="min-w-[300px] sm:min-w-[360px] md:min-w-[380px] snap-center shrink-0"
            >
              <FleetTiltCard machine={machine} />
            </div>
          ))}
        </div>

        {/* Bottom helper */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>&larr; Drag or swipe to explore all 8 machines &rarr;</span>
          <Link href="/fleet" className="text-amber-400 hover:underline inline-flex items-center gap-1">
            <span>View technical dimensions & hire terms</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
