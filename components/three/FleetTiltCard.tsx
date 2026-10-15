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
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // max 10 deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotX(rotateX);
    setRotY(rotateY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotX(0);
    setRotY(0);
  };

  const whatsappUrl = buildMachineRequestUrl(machine.name, machine.model);

  return (
    <div
      ref={cardRef}
      id={machine.id}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className="group relative flex flex-col justify-between rounded-3xl glass-panel p-6 border border-white/10 hover:border-amber-400/40 shadow-xl hover:shadow-[0_15px_40px_rgba(10,91,181,0.25)] transition-shadow duration-300 overflow-hidden"
    >
      {/* 3D Track Accent Pattern on Top Card Rim */}
      <div className="absolute top-0 left-0 right-0 h-1.5 track-pattern bg-amber-400/30 group-hover:bg-amber-400 transition-colors" />

      {/* Top Details & 3D Rotating Gear/Track Accent */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-white/10 text-amber-400 border border-white/10">
            {machine.category}
          </span>

          {/* 3D Animated Sprocket / Wheel Accent */}
          <div
            className={`w-7 h-7 rounded-full border-2 border-dashed border-sky-400/60 flex items-center justify-center transition-transform duration-700 ${
              isHovered ? 'rotate-180 scale-110 border-amber-400' : ''
            }`}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          </div>
        </div>

        {/* Machine Image with Zoom on Hover */}
        <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden bg-black/40 border border-white/10 mb-5">
          <Image
            src={machine.image}
            alt={`${machine.name} - ${machine.model} hired by Captain Investments Limited Lusaka`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E] via-transparent to-transparent opacity-60" />

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
            <span>{machine.model}</span>
            <span className="text-amber-400 flex items-center gap-1 font-semibold">
              <Sparkles className="w-3 h-3" />
              Verified Fleet
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
          {machine.name}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">
          {machine.description}
        </p>

        {/* Machine Technical Specifications Grid */}
        <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/5 border border-white/5 mb-5 text-xs font-mono">
          {machine.specs.map((spec, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase tracking-tight">
                {spec.label}
              </span>
              <span className="font-semibold text-white truncate">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        {/* Ideal Project Applications */}
        <div className="space-y-1 mb-6">
          <span className="text-[11px] font-mono text-slate-400 block mb-1">
            Application Strengths:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {machine.idealFor.map((app, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
              >
                <Check className="w-2.5 h-2.5 text-emerald-400" />
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
        className="w-full py-3 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-95"
      >
        <MessageSquare className="w-4 h-4 text-slate-950" />
        <span>Request This Machine</span>
      </a>
    </div>
  );
}
