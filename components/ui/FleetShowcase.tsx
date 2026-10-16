'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { FLEET_MACHINES } from '@/lib/constants';
import { FleetTiltCard } from '@/components/three/FleetTiltCard';
import { ChevronLeft, ChevronRight, Truck, ArrowRight } from 'lucide-react';

export function FleetShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Excavation', 'Earth Moving', 'Haulage', 'Drilling', 'Compaction', 'Grading'];

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
    <section className="relative py-16 sm:py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      {/* Background Track Accent */}
      <div className="absolute inset-0 track-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-300 text-amber-900 mb-3">
              <Truck className="w-3.5 h-3.5 text-amber-600" />
              <span>Plant & Equipment for Hire</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-slate-900 uppercase tracking-normal">
              Our Heavy Machinery Fleet
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Inspect our full 11-unit specialized machinery fleet available for wet or dry hire across Zambia with rapid lowbed deployment.
            </p>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-2xl bg-white hover:bg-slate-100 active:scale-95 text-slate-800 border border-slate-200 shadow-sm transition-all cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-2xl bg-white hover:bg-slate-100 active:scale-95 text-slate-800 border border-slate-200 shadow-sm transition-all cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <Link
              href="/fleet"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl bg-[#0A5BB5] hover:bg-[#0A1F6B] text-white text-xs font-bold tracking-wider uppercase shadow-md transition-colors"
            >
              <span>Full Specs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 sm:mb-6 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-slate-950 font-black shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Pin-Scroll Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-px-4 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {filteredMachines.map((machine) => (
            <div
              key={machine.id}
              className="w-[84vw] max-w-[380px] sm:w-[360px] md:w-[380px] snap-center shrink-0"
            >
              <FleetTiltCard machine={machine} />
            </div>
          ))}
        </div>

        {/* Bottom helper */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 font-mono">
          <span>&larr; Swipe or use arrows to explore all 11 machines &rarr;</span>
          <Link href="/fleet" className="text-blue-700 font-semibold hover:underline inline-flex items-center gap-1">
            <span>View technical dimensions & hire terms</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
