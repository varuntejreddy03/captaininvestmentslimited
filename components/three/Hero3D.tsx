'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import Image from 'next/image';
import Link from 'next/link';
import { RealExcavatorModel } from './RealExcavatorModel';
import { RealisticDrillRig } from './RealisticDrillRig';
import { BUSINESS_INFO } from '@/lib/constants';
import {
  Phone,
  ArrowRight,
  Compass,
  RotateCcw,
  Play,
  Pause,
  Droplets,
  Tractor,
  Sparkles,
} from 'lucide-react';

function SceneLoader() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#070D1E]/80 backdrop-blur-md z-20">
      <div className="w-10 h-10 border-2 border-amber-400 border-t-transparent rounded-full animate-spin mb-3" />
      <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold">
        Loading 3D Machinery...
      </span>
    </div>
  );
}

export function Hero3D() {
  const [activeMachine, setActiveMachine] = useState<'excavator' | 'drill'>('excavator');
  const [isOperating, setIsOperating] = useState(true);
  const [canRenderWebGL, setCanRenderWebGL] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const nav = navigator as any;
    const isSaveData = nav.connection?.saveData === true;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let hasWebGL = false;
    try {
      const canvas = document.createElement('canvas');
      hasWebGL = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch {
      hasWebGL = false;
    }

    if (hasWebGL && !isSaveData && !prefersReducedMotion) {
      setCanRenderWebGL(true);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#070D1E]">
      {/* Background cinematic radial glows */}
      <div className="absolute top-0 right-1/4 w-[650px] h-[650px] bg-[#0A5BB5]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Split Screen Layout: Left Copy + Right Realistic 3D CAD Machinery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ====================================================
              LEFT COLUMN: EXECUTIVE HEADLINE & PRIMARY ACTIONS
             ==================================================== */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Operational Dispatch Status Row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-sky-300">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Lusaka Operating Hub • Nationwide Mobilization</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Site-Ready Heavy Plant</span>
              </div>
            </div>

            {/* Main Headline with Real Space Grotesk Styling */}
            <div className="space-y-3">
              <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-[1.04]">
                We Drill. <br />
                <span className="text-amber-400">We Dig.</span> <br />
                We Deliver.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal max-w-xl leading-relaxed pt-1">
                {BUSINESS_INFO.subheading} High-yield groundwater borehole drilling and certified earth-moving plant hire for commercial, farm, and mining developments.
              </p>
            </div>

            {/* Industrial Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                <Droplets className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Rotary DTH Percussion Boreholes</span>
              </div>
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/5">
                <Tractor className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Heavy Excavators, Dozers & Graders</span>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <Link
                href="/contact"
                className="group px-8 py-4 rounded-xl font-heading font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all flex items-center justify-center gap-2.5 active:scale-95"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={BUSINESS_INFO.telLink}
                className="px-7 py-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all flex items-center justify-center gap-2.5 active:scale-95"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* ====================================================
              RIGHT COLUMN: REALISTIC 3D HEAVY MACHINERY STUDIO
             ==================================================== */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl glass-panel border border-white/15 shadow-2xl overflow-hidden bg-gradient-to-b from-[#0D1630] to-[#050811]">
              
              {/* Top Studio Control Bar */}
              <div className="p-4 bg-black/40 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 relative z-30">
                {/* Equipment Mode Switcher */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setActiveMachine('excavator')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeMachine === 'excavator'
                        ? 'bg-amber-400 text-slate-950 shadow-md'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Tractor className="w-3.5 h-3.5" />
                    <span>CAT Excavator (3D)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveMachine('drill')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeMachine === 'drill'
                        ? 'bg-amber-400 text-slate-950 shadow-md'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Droplets className="w-3.5 h-3.5" />
                    <span>Borehole Rig</span>
                  </button>
                </div>

                {/* Operation Play/Pause Toggle */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsOperating(!isOperating)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs flex items-center gap-1.5 transition-colors"
                    title={isOperating ? 'Pause Simulation' : 'Run Simulation'}
                  >
                    {isOperating ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
                    <span className="font-mono text-[11px]">{isOperating ? 'Operating' : 'Paused'}</span>
                  </button>
                </div>
              </div>

              {/* 3D Canvas Viewport */}
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[480px]">
                {/* Orbit Help Pill */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                  <RotateCcw className="w-3 h-3 text-sky-400" />
                  <span>Drag to Orbit 360° • Scroll to Zoom</span>
                </div>

                {isMounted && canRenderWebGL ? (
                  <Suspense fallback={<SceneLoader />}>
                    <Canvas
                      camera={{ position: [5.2, 2.6, 6.2], fov: 42 }}
                      dpr={[1, 1.5]}
                      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                      className="w-full h-full cursor-grab active:cursor-grabbing"
                    >
                      <OrbitControls
                        enablePan={false}
                        minDistance={3.5}
                        maxDistance={12.0}
                        maxPolarAngle={Math.PI / 2 + 0.05}
                        minPolarAngle={Math.PI / 6}
                        autoRotate={!isOperating}
                        autoRotateSpeed={0.8}
                      />

                      {/* Industrial Studio & Specular Lighting */}
                      <ambientLight intensity={0.8} />
                      <directionalLight position={[8, 12, 8]} intensity={2.0} color="#FFFFFF" castShadow />
                      <directionalLight position={[-8, 6, -6]} intensity={1.2} color="#38BDF8" />
                      <pointLight position={[4, 2, 4]} intensity={2.2} color="#F59E0B" />
                      <pointLight position={[-4, 1, 2]} intensity={1.8} color="#0A5BB5" />

                      {/* Studio Environment Reflections for Realistic Metal */}
                      <Environment preset="city" />

                      {/* Ground Contact Shadow */}
                      <ContactShadows
                        position={[0, -1.2, 0]}
                        opacity={0.65}
                        scale={10}
                        blur={2.0}
                        far={4}
                      />

                      {/* Ground Reference Grid */}
                      <gridHelper args={[14, 20, '#3B8FE0', '#1E293B']} position={[0, -1.2, 0]} />

                      {/* Render Model */}
                      {activeMachine === 'excavator' ? (
                        <RealExcavatorModel isOperating={isOperating} />
                      ) : (
                        <RealisticDrillRig isDrilling={isOperating} />
                      )}
                    </Canvas>
                  </Suspense>
                ) : (
                  /* High Quality Machinery Fallback */
                  <div className="relative w-full h-full flex items-center justify-center p-6">
                    <Image
                      src={activeMachine === 'excavator' ? '/images/excavator-rocks.jpg' : '/images/backhoe-sunset.jpg'}
                      alt="Captain Investments Heavy Plant"
                      fill
                      className="object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E] via-transparent to-[#070D1E]/40" />
                    <div className="relative z-10 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-center">
                      <Sparkles className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                      <h4 className="font-heading font-bold text-white text-base">
                        {activeMachine === 'excavator' ? 'CAT 336 Heavy Excavator' : 'Rotary DTH Borehole Rig'}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1">High-pressure plant deployed across Lusaka</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Machine Specification Footer Bar */}
              <div className="p-3.5 bg-black/60 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-bold">
                    {activeMachine === 'excavator'
                      ? 'Caterpillar 336 Heavy Excavator'
                      : 'DTH Rotary Percussion Rig'}
                  </span>
                </div>
                <span className="text-amber-400">
                  {activeMachine === 'excavator'
                    ? '22 Tonnes Operating • Heavy Rock Breaker Boom'
                    : 'Tri-Cone Carbide Bit • 120m+ Aquifer Reach'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Excavator Track Pattern Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 track-pattern bg-white/5 border-t border-white/10 pointer-events-none" />
    </section>
  );
}
