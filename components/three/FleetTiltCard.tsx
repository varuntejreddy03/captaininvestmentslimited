'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { FleetItem } from '@/lib/constants';
import { buildMachineRequestUrl } from '@/lib/whatsapp';
import { MessageSquare, Check, Sparkles } from 'lucide-react';

interface FleetTiltCardProps {
  machine: FleetItem;
}

export function FleetTiltCard({ machine }: FleetTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const tiltOn = useRef(false);
  const [isHovered, setIsHovered] = useState(false);

  // Tilt is written straight to the element (no React re-render per mouse move) and only
  // for real mice, so touch scrolling never triggers it.
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el || !tiltOn.current) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const rotateX = ((clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -8;
      const rotateY = ((clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 8;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
  };

  const handleMouseEnter = () => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    tiltOn.current = true;
    setIsHovered(true);
    if (cardRef.current) cardRef.current.style.transition = 'transform 0.12s ease-out, box-shadow 0.3s';
  };
  const handleMouseLeave = () => {
    tiltOn.current = false;
    setIsHovered(false);
    cancelAnimationFrame(frame.current);
    if (cardRef.current) {
      cardRef.current.style.transition = 'transform 0.5s ease-out, box-shadow 0.3s';
      cardRef.current.style.transform = '';
    }
  };

  const whatsappUrl = buildMachineRequestUrl(machine.name, machine.model);

  return (
    <div
      ref={cardRef}
      id={machine.id}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col justify-between rounded-3xl bg-white p-6 border border-slate-200 hover:border-amber-400 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* 3D Track Accent Pattern on Top Card Rim */}
      <div className="absolute top-0 left-0 right-0 h-1.5 track-pattern bg-amber-400/40 group-hover:bg-amber-500 transition-colors" />

      {/* Top Details & 3D Rotating Gear/Track Accent */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-amber-50 text-amber-900 border border-amber-200">
            {machine.category}
          </span>

          {/* 3D Animated Sprocket / Wheel Accent */}
          <div
            className={`w-7 h-7 rounded-full border-2 border-dashed border-blue-400 flex items-center justify-center transition-transform duration-700 ${
              isHovered ? 'rotate-180 scale-110 border-amber-500' : ''
            }`}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          </div>
        </div>

        {/* Machine Image with Zoom on Hover */}
        <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-5 shadow-inner">
          <Image
            src={machine.image}
            alt={`${machine.name} - ${machine.model} hired by Captain Investments Limited Zambia`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
            <span className="font-semibold">{machine.model}</span>
            <span className="text-amber-300 flex items-center gap-1 font-bold text-[11px]">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Verified Fleet
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
          {machine.name}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
          {machine.description}
        </p>

        {/* Machine Technical Specifications Grid */}
        <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 mb-5 text-xs font-mono">
          {machine.specs.map((spec, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase tracking-tight font-medium">
                {spec.label}
              </span>
              <span className="font-bold text-slate-800 truncate">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        {/* Ideal Project Applications */}
        <div className="space-y-1 mb-6">
          <span className="text-[11px] font-mono text-slate-500 block mb-1 font-semibold uppercase tracking-wider">
            Application Strengths:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {machine.idealFor.map((app, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 font-medium"
              >
                <Check className="w-2.5 h-2.5 text-emerald-600" />
                <span>{app}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action CTA: Pre-filled WhatsApp Trigger */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:scale-[1.01] active:scale-95"
      >
        <MessageSquare className="w-4 h-4 text-slate-950" />
        <span>Request This Machine</span>
      </a>
    </div>
  );
}
