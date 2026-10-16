'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { BOREHOLE_PROCESS_STEPS } from '@/lib/constants';
import { StrataScene } from './StrataScene';
import { StudioEnvironment } from './StudioEnvironment';
import { useInView } from './useInView';
import { CheckCircle2, Droplets, Layers, ArrowDown, Activity, Gauge } from 'lucide-react';

const STRATA_LABELS = [
  'Topsoil & alluvium',
  'Schist & weathered clay',
  'Lusaka dolomite bedrock',
  'Water-bearing aquifer',
];

export function DrillScene() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const depthTextRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const activeStepRef = useRef(0);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [canvasBoxRef, canvasVisible] = useInView<HTMLDivElement>();

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      setHasWebGL(
        !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
      );
    } catch {
      setHasWebGL(false);
    }

    let ticking = false;
    const update = () => {
      ticking = false;
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalDist = rect.height - window.innerHeight;
      if (totalDist <= 0) return;
      const p = Math.max(0, Math.min(1, -rect.top / totalDist));
      progressRef.current = p;
      if (depthTextRef.current) depthTextRef.current.textContent = `${Math.round(p * 120)} m`;
      if (barRef.current) barRef.current.style.transform = `scaleY(${p})`;
      const idx = Math.min(BOREHOLE_PROCESS_STEPS.length - 1, Math.floor(p * BOREHOLE_PROCESS_STEPS.length));
      if (idx !== activeStepRef.current) {
        activeStepRef.current = idx;
        setActiveStep(idx);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[320vh] bg-slate-50 border-t border-slate-200">
      <div className="sticky top-0 h-[100svh] flex items-center pt-[72px] pb-[84px] md:pb-6 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-3xl mx-auto mb-3 sm:mb-5 lg:mb-7">
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-800 mb-2">
              <Layers className="w-3.5 h-3.5 text-amber-500" />
              <span>Scroll-driven borehole cross-section</span>
            </div>
            <h2 className="font-heading text-xl sm:text-4xl font-bold text-slate-900 uppercase tracking-normal">
              The Borehole Journey
            </h2>
            <p className="hidden sm:block text-sm text-slate-600 mt-1.5">
              Scroll to follow the rig from topsoil, through Zambian bedrock, down to the pure water-bearing aquifer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
            {/* 3D cross-section */}
            <div ref={canvasBoxRef} className="lg:col-span-5 relative h-[230px] sm:h-[400px] lg:h-[480px] rounded-3xl overflow-hidden border border-slate-300 shadow-2xl bg-gradient-to-b from-[#0c1424] to-[#05070d]">
              <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 font-mono text-[10px] sm:text-xs text-amber-300 transition-all font-semibold">
                {STRATA_LABELS[activeStep]}
              </div>

              <div className="absolute bottom-3 right-3 z-10 bg-black/75 backdrop-blur-md px-3 py-2 rounded-xl border border-white/20 font-mono text-xs flex items-center gap-2.5">
                <Activity className="w-4 h-4 text-amber-400" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Depth</span>
                  <span ref={depthTextRef} className="text-amber-400 font-black text-sm tabular-nums">0 m</span>
                </div>
              </div>

              <div className="absolute bottom-3 left-3 z-10 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 font-mono text-[10px] text-slate-300 hidden sm:flex items-center gap-2">
                <Gauge className="w-3.5 h-3.5 text-sky-400" />
                <span>DTH hammer · 24 bar</span>
              </div>

              {/* depth progress rail */}
              <div className="absolute right-3 top-14 bottom-16 w-1.5 rounded-full bg-white/20 z-10 overflow-hidden">
                <div ref={barRef} className="h-full origin-top bg-gradient-to-b from-amber-400 to-sky-400 scale-y-0" />
              </div>

              {hasWebGL ? (
                <Canvas
                  camera={{ position: [0, -0.35, 15], fov: 34 }}
                  dpr={[1, 1.5]}
                  shadows
                  frameloop={canvasVisible ? 'always' : 'never'}
                  gl={{ antialias: true, powerPreference: 'high-performance' }}
                  onCreated={({ gl }) => {
                    gl.toneMapping = THREE.ACESFilmicToneMapping;
                    gl.toneMappingExposure = 1.0;
                  }}
                  className="w-full h-full"
                >
                  <hemisphereLight args={['#dbe6f3', '#4a3a2a', 0.5]} />
                  <directionalLight position={[3, 6, 8]} intensity={2.2} color="#fff0dc" castShadow />
                  <StudioEnvironment />
                  <StrataScene progressRef={progressRef} />
                </Canvas>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <Droplets className="w-12 h-12 text-sky-400 mb-3" />
                  <p className="font-heading font-bold text-white">Borehole cross-section</p>
                  <p className="text-xs text-slate-300">3D view needs WebGL. Follow the steps alongside.</p>
                </div>
              )}
            </div>

            {/* Steps: only the active one is expanded, so everything fits the viewport */}
            <div className="lg:col-span-7 flex flex-col gap-2 sm:gap-2.5 justify-center">
              {BOREHOLE_PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <motion.div
                    key={step.step}
                    layout
                    transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
                    onClick={() => {
                      const el = containerRef.current;
                      if (!el) return;
                      const total = el.offsetHeight - window.innerHeight;
                      const target = el.getBoundingClientRect().top + window.scrollY + total * ((idx + 0.5) / BOREHOLE_PROCESS_STEPS.length);
                      window.scrollTo({ top: target, behavior: 'smooth' });
                    }}
                    className={`rounded-2xl cursor-pointer border px-4 py-3 sm:px-5 sm:py-3.5 transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-50/90 border-blue-400 shadow-md ring-1 ring-blue-400/30'
                        : 'bg-white border-slate-200 hover:bg-slate-50 shadow-sm'
                    }`}
                  >
                    <motion.div layout="position" className="flex items-center gap-3">
                      <span
                        className={`w-8 h-8 shrink-0 rounded-lg font-mono text-sm font-black flex items-center justify-center transition-colors ${
                          isActive ? 'bg-[#0A5BB5] text-white shadow-sm' : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {step.step}
                      </span>
                      <div className="min-w-0">
                        <h3 className={`font-heading text-[15px] sm:text-lg font-bold truncate transition-colors ${isActive ? 'text-[#0A1F6B]' : 'text-slate-800'}`}>
                          {step.title}
                        </h3>
                        <p className={`font-mono text-[11px] truncate font-medium ${isActive ? 'text-blue-700' : 'text-slate-500'}`}>
                          {step.strata} · {step.depth}
                        </p>
                      </div>
                    </motion.div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="body"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-2.5 sm:mt-3 sm:pl-11">{step.description}</p>
                          <div className="hidden sm:grid grid-cols-2 gap-1.5 mt-3 sm:pl-11 pb-1">
                            {step.deliverables.map((item) => (
                              <div key={item} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-500 pt-1 pl-1">
                <ArrowDown className="w-3.5 h-3.5 text-amber-500 animate-bounce" />
                <span>Keep scrolling to complete the aquifer strike</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
