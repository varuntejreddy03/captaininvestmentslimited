'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import { StudioEnvironment } from './StudioEnvironment';
import { useInView } from './useInView';
import * as THREE from 'three';
import { ACESFilmicToneMapping } from 'three';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { RealExcavatorModel } from './RealExcavatorModel';
import { BUSINESS_INFO, FLEET_MACHINES } from '@/lib/constants';
import {
  RotateCcw,
  Play,
  Pause,
  Tractor,
  Camera,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Layers,
} from 'lucide-react';

/** Dusty site floor that fades smoothly into the background */
function SiteGround({ y }: { y: number }) {
  const map = React.useMemo(() => {
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const g = c.getContext('2d')!;
    const grad = g.createRadialGradient(128, 128, 10, 128, 128, 128);
    grad.addColorStop(0, 'rgba(180,165,145,0.9)');
    grad.addColorStop(0.6, 'rgba(210,195,175,0.5)');
    grad.addColorStop(1, 'rgba(248,250,252,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 256, 256);
    
    // fine gravel speckle
    for (let i = 0; i < 1800; i++) {
      const x = Math.random() * 256, r = Math.random() * 1.2;
      const yy = Math.random() * 256;
      if (Math.hypot(x - 128, yy - 128) > 120) continue;
      g.fillStyle = `rgba(${Math.random() > 0.5 ? '140,120,95' : '90,80,70'},${0.15 + Math.random() * 0.25})`;
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

// Complete reel featuring all 11 verified machinery units from the client fleet
const ALL_FLEET_PHOTOS = [
  { src: '/images/excavator-rocks.jpg', label: 'Heavy Hydraulic Excavators · 21T to 38T with Rock Breaker' },
  { src: '/images/tipper-single-stand-30t.jpg', label: 'Single Stance Tipper Truck · 30 Tonnes (6x4)' },
  { src: '/images/tipper-double-stand-40t.jpg', label: 'Double Stance Tipper Truck · 40 Tonnes (8x4)' },
  { src: '/images/hero-banner.jpg', label: 'Heavy Rotary DTH Borehole Rig · Deep Farm & Mining Drilling' },
  { src: '/images/wheel-loader.jpg', label: 'Front Wheel Loader · 3.0 m³ High-Cycle Bucket' },
  { src: '/images/bulldozer.jpg', label: 'Heavy Crawler Bulldozer · 30 Tonnes with Ripper' },
  { src: '/images/motor-grader.jpg', label: 'Heavy Articulated Motor Grader · 14-ft Moldboard' },
  { src: '/images/soil-compactor.jpg', label: 'Soil Compactor Roller · 11 Tonnes Vibratory' },
  { src: '/images/backhoe-sunset.jpg', label: 'Dual-Purpose Backhoe Loader · 4-in-1 Shovel & Arm' },
  { src: '/images/two-backhoes.jpg', label: 'Paired Backhoe Loaders · Rapid Site Works' },
  { src: '/images/excavator-lowbed.jpg', label: 'Multi-Axle Heavy Lowbed Rig · 50+ Tonnes Nationwide Delivery' },
];

function PhotoReel({ playing }: { playing: boolean }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ALL_FLEET_PHOTOS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [playing]);

  const current = ALL_FLEET_PHOTOS[index];

  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.src}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src={current.src}
            alt={current.label}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation Controls */}
      <div className="absolute inset-y-0 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
        <button
          type="button"
          onClick={() => setIndex((prev) => (prev - 1 + ALL_FLEET_PHOTOS.length) % ALL_FLEET_PHOTOS.length)}
          className="pointer-events-auto p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => setIndex((prev) => (prev + 1) % ALL_FLEET_PHOTOS.length)}
          className="pointer-events-auto p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Caption Bar */}
      <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between text-xs text-white">
        <span className="font-mono bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 font-bold">
          {current.label}
        </span>
        <span className="font-mono bg-black/60 px-2 py-1 rounded-md text-[11px] text-amber-400 font-bold">
          {index + 1} / {ALL_FLEET_PHOTOS.length}
        </span>
      </div>
    </div>
  );
}

export function MachineryStudio3D() {
  const [mode, setMode] = useState<'3d' | 'photos'>('3d');
  const [isPlaying, setIsPlaying] = useState(true);
  const [canRenderWebGL, setCanRenderWebGL] = useState(false);
  const [containerRef, inView] = useInView<HTMLDivElement>('120px');

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const supported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setCanRenderWebGL(supported);
    } catch {
      setCanRenderWebGL(false);
    }
  }, []);

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/20 text-amber-600">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Fleet Studio</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-slate-950 uppercase tracking-tight">
            Explore Our Machinery
          </h2>
          <p className="text-base text-slate-600">
            Rotate the 3D excavator model in real-time or browse high-resolution site photography of all 11 machines in our working fleet.
          </p>
        </div>

        {/* Studio Viewer Container */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="p-4 bg-slate-100/90 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shadow-xs">
              <button
                type="button"
                onClick={() => setMode('3d')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  mode === '3d'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <Tractor className="w-3.5 h-3.5" />
                <span>3D Heavy Excavator</span>
              </button>

              <button
                type="button"
                onClick={() => setMode('photos')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  mode === 'photos'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Live Fleet Photos (11)</span>
              </button>
            </div>

            {/* Play/Pause Button */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 transition-colors shadow-xs"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-500" /> : <Play className="w-3.5 h-3.5 text-emerald-500" />}
              <span>{isPlaying ? 'Simulation Running' : 'Simulation Paused'}</span>
            </button>
          </div>

          {/* Main Visualizer Canvas / Gallery */}
          <div ref={containerRef} className="relative w-full h-[400px] sm:h-[480px] bg-slate-900">
            {mode === '3d' ? (
              canRenderWebGL ? (
                <>
                  <div className="absolute top-3 left-3 z-10 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-slate-200">
                    <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                    <span>Drag to Orbit 360° • Scroll to Zoom</span>
                  </div>

                  <Canvas
                    camera={{ position: [5.2, 2.6, 6.2], fov: 42 }}
                    dpr={[1, 1.5]}
                    frameloop={inView ? 'always' : 'never'}
                    gl={{
                      antialias: true,
                      alpha: false,
                      powerPreference: 'high-performance',
                      toneMapping: ACESFilmicToneMapping,
                      toneMappingExposure: 1.15,
                    }}
                    className="w-full h-full cursor-grab active:cursor-grabbing"
                  >
                    <color attach="background" args={['#0F172A']} />
                    
                    <OrbitControls
                      enablePan={false}
                      minDistance={3.5}
                      maxDistance={12.0}
                      maxPolarAngle={Math.PI / 2 + 0.05}
                      minPolarAngle={Math.PI / 6}
                      autoRotate={!isPlaying}
                      autoRotateSpeed={0.8}
                    />

                    {/* Lighting */}
                    <ambientLight intensity={0.85} />
                    <directionalLight position={[8, 12, 8]} intensity={2.2} castShadow />
                    <directionalLight position={[-8, 6, -6]} intensity={1.2} color="#38BDF8" />
                    <pointLight position={[4, 2, 4]} intensity={2.2} color="#F59E0B" />

                    <StudioEnvironment />
                    <SiteGround y={-1.2} />

                    <ContactShadows
                      position={[0, -1.2, 0]}
                      opacity={0.65}
                      scale={10}
                      blur={2.0}
                      far={4}
                    />

                    <Suspense fallback={null}>
                      <RealExcavatorModel isOperating={isPlaying} />
                    </Suspense>
                  </Canvas>
                </>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center p-6 text-center text-white">
                  <Image
                    src="/images/excavator-rocks.jpg"
                    alt="Heavy Excavator"
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="relative z-10 p-5 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20">
                    <h3 className="font-heading text-xl font-bold">Heavy Hydraulic Excavator</h3>
                    <p className="text-sm text-slate-300 mt-1">21 to 38 Tonnes with Rock Breaker Boom</p>
                  </div>
                </div>
              )
            ) : (
              <PhotoReel playing={isPlaying} />
            )}
          </div>

          {/* Bottom Machine Info Bar */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-slate-900">
                Heavy Hydraulic Excavators (21 to 38 Tonnes)
              </span>
            </div>

            <div className="flex items-center gap-4 text-slate-600 font-mono text-[11px]">
              <span>Rock Breaker Boom</span>
              <span>•</span>
              <span>1.2m³ to 2.2m³ Buckets</span>
              <span>•</span>
              <span className="text-amber-600 font-bold">Certified Operator Included</span>
            </div>

            <Link
              href="/fleet"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 transition-colors shadow-xs"
            >
              <span>View All 11 Machines</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
