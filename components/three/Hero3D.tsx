'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import { StudioEnvironment } from './StudioEnvironment';
import * as THREE from 'three';
import { ACESFilmicToneMapping } from 'three';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { RealExcavatorModel } from './RealExcavatorModel';
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

/** Dusty site floor that fades smoothly into the background (no hard disc edge). */
function SiteGround({ y }: { y: number }) {
  const map = React.useMemo(() => {
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const g = c.getContext('2d')!;
    const grad = g.createRadialGradient(128, 128, 10, 128, 128, 128);
    grad.addColorStop(0, 'rgba(70,60,48,1)');
    grad.addColorStop(0.55, 'rgba(48,42,34,0.75)');
    grad.addColorStop(1, 'rgba(7,13,30,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 256, 256);
    // fine gravel speckle
    for (let i = 0; i < 2200; i++) {
      const x = Math.random() * 256, r = Math.random() * 1.2;
      const yy = Math.random() * 256;
      if (Math.hypot(x - 128, yy - 128) > 120) continue;
      g.fillStyle = `rgba(${Math.random() > 0.5 ? '120,105,85' : '20,18,15'},${0.15 + Math.random() * 0.25})`;
      g.beginPath(); g.arc(x, yy, r, 0, 7); g.fill();
    }
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, []);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, y, 0]} receiveShadow>
      <circleGeometry args={[10, 64]} />
      <meshStandardMaterial map={map} transparent roughness={1} metalness={0} depthWrite={false} />
    </mesh>
  );
}

const REEL = [
  { src: '/images/excavator-rocks.jpg', label: 'Excavator · rock & trenching' },
  { src: '/images/backhoe-sunset.jpg', label: 'Backhoe loader · site works' },
  { src: '/images/bulldozer.jpg', label: 'Bulldozer · clearing & levelling' },
  { src: '/images/wheel-loader.jpg', label: 'Wheel loader · loading & haulage' },
];

/** Cinematic photo reel: slow push-in (Ken Burns) with soft crossfades between real fleet photos. */
function PhotoReel({ playing }: { playing: boolean }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setI((v) => (v + 1) % REEL.length), 4800);
    return () => clearInterval(id);
  }, [playing]);
  const item = REEL[i];
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <AnimatePresence mode="sync">
        <motion.div
          key={item.src}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: playing ? 1.12 : 1.02 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.1 }, scale: { duration: 6.5, ease: 'linear' } }}
        >
          <Image src={item.src} alt={item.label} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority={i === 0} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E]/90 via-transparent to-[#070D1E]/30 pointer-events-none" />
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
        <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-white">{item.label}</span>
        <div className="flex gap-1.5">
          {REEL.map((r, k) => (
            <button
              key={r.src}
              type="button"
              aria-label={`Show ${r.label}`}
              onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all duration-500 ${k === i ? 'w-6 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

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
  const [activeMachine, setActiveMachine] = useState<'excavator' | 'photos'>('excavator');
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
              <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-bold uppercase tracking-normal text-white leading-[1.04]">
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
                className="group px-8 py-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all flex items-center justify-center gap-2.5 active:scale-95"
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
                    <span>3D Excavator</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveMachine('photos')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeMachine === 'photos'
                        ? 'bg-amber-400 text-slate-950 shadow-md'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Droplets className="w-3.5 h-3.5" />
                    <span>Live Fleet Photos</span>
                  </button>
                </div>

                {/* Operation Play/Pause Toggle */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsOperating(!isOperating)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs flex items-center gap-1.5 transition-colors"
                    title={isOperating ? 'Pause motion' : 'Play motion'}
                  >
                    {isOperating ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
                    <span className="font-mono text-[11px]">{isOperating ? 'Playing' : 'Paused'}</span>
                  </button>
                </div>
              </div>

              {/* 3D Canvas Viewport */}
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[480px]">
                {/* Orbit Help Pill */}
                {activeMachine === 'excavator' && (
                  <div className="absolute top-3 left-3 z-10 pointer-events-none flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
                    <RotateCcw className="w-3 h-3 text-sky-400" />
                    <span>Drag to rotate • Scroll to zoom</span>
                  </div>
                )}

                {activeMachine === 'photos' ? (
                  <PhotoReel playing={isOperating} />
                ) : isMounted && canRenderWebGL ? (
                  <Suspense fallback={<SceneLoader />}>
                    <Canvas
                      camera={{ position: [5.2, 2.0, 6.0], fov: 36 }}
                      shadows
                      onCreated={({ gl }) => { gl.toneMapping = ACESFilmicToneMapping; gl.toneMappingExposure = 1.05; }}
                      dpr={[1, 1.5]}
                      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                      className="w-full h-full cursor-grab active:cursor-grabbing"
                    >
                      <OrbitControls
                        enablePan={false}
                        enableDamping
                        dampingFactor={0.06}
                        minDistance={4}
                        maxDistance={11}
                        maxPolarAngle={Math.PI / 2 - 0.04}
                        minPolarAngle={Math.PI / 5}
                        autoRotate
                        autoRotateSpeed={isOperating ? 0.45 : 0}
                      />

                      {/* Natural daylight: warm low sun, cool sky fill, no coloured neon lights */}
                      <hemisphereLight args={['#cfe0f5', '#5b4a38', 0.55]} />
                      <directionalLight
                        position={[7, 9, 5]}
                        intensity={2.4}
                        color="#fff1dc"
                        castShadow
                        shadow-mapSize={[1024, 1024]}
                      />
                      <directionalLight position={[-6, 4, -5]} intensity={0.6} color="#bcd3ee" />

                      {/* Local studio reflections (no network HDR) */}
                      <StudioEnvironment />

                      {/* Soft grounded shadow on a dusty site floor */}
                      <SiteGround y={-1.205} />
                      <ContactShadows
                        position={[0, -1.19, 0]}
                        opacity={0.75}
                        scale={11}
                        blur={2.6}
                        far={4}
                        resolution={512}
                      />
                      <fog attach="fog" args={['#070D1E', 11, 22]} />

                      <RealExcavatorModel isOperating={isOperating} />
                    </Canvas>
                  </Suspense>
                ) : (
                  /* High Quality Machinery Fallback */
                  <div className="relative w-full h-full flex items-center justify-center p-6">
                    <Image
                      src="/images/excavator-rocks.jpg"
                      alt="Captain Investments Heavy Plant"
                      fill
                      className="object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E] via-transparent to-[#070D1E]/40" />
                    <div className="relative z-10 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-center">
                      <Sparkles className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                      <h4 className="font-heading font-bold text-white text-base">
                        CAT 336 Heavy Excavator
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
                    {activeMachine === 'excavator' ? 'Caterpillar 336 Heavy Excavator' : 'Captain Investments working fleet'}
                  </span>
                </div>
                <span className="text-amber-400">
                  {activeMachine === 'excavator' ? '22 Tonnes Operating • Heavy Rock Breaker Boom' : 'Real machines • Real Zambian sites'}
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
