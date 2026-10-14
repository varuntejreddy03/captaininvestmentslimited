'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { BOREHOLE_PROCESS_STEPS } from '@/lib/constants';
import { DrillAuger } from './DrillAuger';
import { CheckCircle2, Droplets, Layers, ArrowDown, Activity, Gauge } from 'lucide-react';

/**
 * Photorealistic Geotechnical Strata Cross-Section & Dynamic Drilling System
 * Back 180-deg curved geological cutaway allows full front visibility of the rotating drill bit!
 */
function RealisticStrataCutaway({
  progressRef,
}: {
  progressRef: React.MutableRefObject<number>;
}) {
  const drillGroupRef = useRef<THREE.Group>(null);
  const waterRef = useRef<THREE.Mesh>(null);
  const rockParticlesRef = useRef<THREE.Points>(null);
  const waterParticlesRef = useRef<THREE.Points>(null);

  // Rock chipping particles
  const rockParticles = React.useMemo(() => {
    const count = 100;
    const pos = new Float32Array(count * 3);
    const vels = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.4;
      pos[i * 3 + 1] = 0;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.4;

      vels[i * 3] = (Math.random() - 0.5) * 1.4;
      vels[i * 3 + 1] = Math.random() * 1.2 + 0.3;
      vels[i * 3 + 2] = (Math.random() - 0.5) * 1.4;
    }
    return { pos, vels, count };
  }, []);

  // Water spray particles in aquifer
  const waterParticles = React.useMemo(() => {
    const count = 120;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.8;
      pos[i * 3 + 1] = -3.2 + Math.random() * 1.8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.8;
    }
    return { pos, count };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const progress = progressRef.current;

    // Target drill bit Y position: starts at 2.4 (surface) down to -3.8 (deep aquifer)
    const targetY = 2.4 - progress * 6.2;

    if (drillGroupRef.current) {
      // Smooth interpolation for zero scroll lag / jitter
      drillGroupRef.current.position.y = THREE.MathUtils.lerp(
        drillGroupRef.current.position.y,
        targetY,
        0.12
      );

      // Heavy DTH percussion hammer micro-vibration while drilling
      const vibration = Math.sin(t * 36) * 0.015;
      drillGroupRef.current.position.x = Math.sin(t * 24) * 0.003;
      drillGroupRef.current.position.y += vibration;
    }

    // Rock cuttings particles when drilling rock layers
    if (rockParticlesRef.current && drillGroupRef.current) {
      const positions = rockParticlesRef.current.geometry.attributes.position.array as Float32Array;
      const drillCurrY = drillGroupRef.current.position.y - 1.4;

      for (let i = 0; i < rockParticles.count; i++) {
        positions[i * 3 + 1] += rockParticles.vels[i * 3 + 1] * delta;
        positions[i * 3] += rockParticles.vels[i * 3] * delta * 0.5;
        positions[i * 3 + 2] += rockParticles.vels[i * 3 + 2] * delta * 0.5;

        // Reset particle
        if (positions[i * 3 + 1] > drillCurrY + 1.2 || Math.random() < 0.03) {
          positions[i * 3] = (Math.random() - 0.5) * 0.35;
          positions[i * 3 + 1] = drillCurrY;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 0.35;
        }
      }
      rockParticlesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Animated water table shimmer & rising bubbles in aquifer
    if (waterRef.current) {
      waterRef.current.position.y = -3.4 + Math.sin(t * 2.2) * 0.04;
      (waterRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
        0.55 + Math.sin(t * 3.5) * 0.25;
    }

    // Aquifer rising bubbles
    if (waterParticlesRef.current) {
      const positions = waterParticlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < waterParticles.count; i++) {
        positions[i * 3 + 1] += delta * 0.8;
        if (positions[i * 3 + 1] > -2.3) {
          positions[i * 3 + 1] = -4.2;
          positions[i * 3] = (Math.random() - 0.5) * 0.7;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 0.7;
        }
      }
      waterParticlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* ========================================================
          GEOLOGICAL STRATA CUTAWAY SHELL (Back half-cylinder)
          Front 180 degrees is 100% open so the rotating drill bit
          is completely visible to the camera!
         ======================================================== */}

      {/* Layer 1: Topsoil & Organic Alluvium (Y: 2.8 to 1.3) */}
      <mesh position={[0, 2.05, 0]}>
        <cylinderGeometry args={[1.7, 1.7, 1.5, 32, 1, false, Math.PI * 0.5, Math.PI]} />
        <meshStandardMaterial
          color="#422511"
          roughness={0.95}
          metalness={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Surface Wellhead Guide Casing Collar */}
      <mesh position={[0, 2.8, 0]}>
        <cylinderGeometry args={[0.5, 0.55, 0.35, 24]} />
        <meshStandardMaterial color="#334155" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Layer 2: Metamorphic Schist & Clay Strata (Y: 1.3 to -0.3) */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1.7, 1.7, 1.6, 32, 1, false, Math.PI * 0.5, Math.PI]} />
        <meshStandardMaterial
          color="#7C4A27"
          roughness={0.85}
          metalness={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Layer 3: Hard Lusaka Dolomite & Limestone Bedrock (Y: -0.3 to -2.3) */}
      <mesh position={[0, -1.3, 0]}>
        <cylinderGeometry args={[1.7, 1.7, 2.0, 32, 1, false, Math.PI * 0.5, Math.PI]} />
        <meshStandardMaterial
          color="#1E293B"
          roughness={0.65}
          metalness={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Geological Boundary Ring Highlights */}
      <mesh position={[0, 1.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.7, 0.03, 8, 24, Math.PI]} />
        <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[0, -0.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.7, 0.03, 8, 24, Math.PI]} />
        <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[0, -2.3, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.7, 0.03, 8, 24, Math.PI]} />
        <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={0.8} />
      </mesh>

      {/* Layer 4: Deep Subterranean Aquifer Water Table (Y: -2.3 to -4.5) */}
      <mesh ref={waterRef} position={[0, -3.4, 0]}>
        <cylinderGeometry args={[1.68, 1.68, 2.2, 32, 1, false, Math.PI * 0.5, Math.PI]} />
        <meshStandardMaterial
          color="#0A5BB5"
          emissive="#38BDF8"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.2}
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Water Aquifer Core Column */}
      <mesh position={[0, -3.4, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 2.2, 24]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#0284C7"
          emissiveIntensity={0.7}
          transparent
          opacity={0.65}
          roughness={0.1}
        />
      </mesh>

      {/* Rising Aquifer Water Bubbles */}
      <points ref={waterParticlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[waterParticles.pos, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          color="#BAE6FD"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Rock Cuttings Particle Spray */}
      <points ref={rockParticlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[rockParticles.pos, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#FBBF24"
          transparent
          opacity={0.9}
        />
      </points>

      {/* ========================================================
          ROTARY DTH DRILL AUGER & PERCUSSION BIT ASSEMBLY
          Centered at z = 0, fully unblocked & dynamically driven!
         ======================================================== */}
      <group ref={drillGroupRef} position={[0, 2.4, 0]}>
        <DrillAuger
          scale={0.72}
          speed={3.5}
          position={[0, 0, 0]}
        />
      </group>
    </group>
  );
}

export function DrillScene() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const depthTextRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef(0);
  const activeStepRef = useRef(0);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const supported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setHasWebGL(supported);
    } catch {
      setHasWebGL(false);
    }

    let ticking = false;
    const handleScroll = () => {
      if (!containerRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const totalDist = rect.height - windowHeight;

          if (totalDist > 0) {
            const currentProgress = Math.max(0, Math.min(1, -rect.top / totalDist));
            progressRef.current = currentProgress;

            // Update live depth label directly in DOM without triggering React re-renders
            if (depthTextRef.current) {
              depthTextRef.current.textContent = `${Math.round(currentProgress * 120)}m`;
            }

            const stepIndex = Math.min(
              BOREHOLE_PROCESS_STEPS.length - 1,
              Math.floor(currentProgress * BOREHOLE_PROCESS_STEPS.length)
            );

            // Only trigger React state update when step index actually changes!
            if (stepIndex !== activeStepRef.current) {
              activeStepRef.current = stepIndex;
              setActiveStep(stepIndex);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-[220vh] bg-[#070D1E] py-16">
      {/* Sticky viewport frame */}
      <div className="sticky top-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-sky-400 mb-3">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive 3D Strata Descent</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            The Borehole Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Scroll down to watch our heavy rotary rig penetrate Lusaka geology from topsoil to pristine high-yield aquifer.
          </p>
        </div>

        {/* Interactive Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 3D Visualization */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] rounded-3xl glass-panel overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center bg-gradient-to-b from-[#0A1224] to-[#040814]">
            
            {/* Top Telemetry Overlay */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 font-mono text-[10px] sm:text-xs">
              <span className={`px-2.5 py-1 rounded-lg border backdrop-blur-md transition-all ${activeStep === 0 ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold shadow-[0_0_12px_rgba(245,158,11,0.3)]' : 'bg-black/50 border-white/10 text-slate-400'}`}>
                0-15m: Topsoil & Alluvium
              </span>
              <span className={`px-2.5 py-1 rounded-lg border backdrop-blur-md transition-all ${activeStep === 1 ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold shadow-[0_0_12px_rgba(245,158,11,0.3)]' : 'bg-black/50 border-white/10 text-slate-400'}`}>
                15-60m: Schist & Weathered Clay
              </span>
              <span className={`px-2.5 py-1 rounded-lg border backdrop-blur-md transition-all ${activeStep === 2 ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold shadow-[0_0_12px_rgba(245,158,11,0.3)]' : 'bg-black/50 border-white/10 text-slate-400'}`}>
                60-90m: Lusaka Dolomite Rock
              </span>
              <span className={`px-2.5 py-1 rounded-lg border backdrop-blur-md transition-all ${activeStep === 3 ? 'bg-sky-500/30 border-sky-400 text-sky-300 font-bold shadow-[0_0_18px_rgba(56,189,248,0.5)]' : 'bg-black/50 border-white/10 text-slate-400'}`}>
                90-120m+: Pristine Water Table
              </span>
            </div>

            {/* Live Depth Indicator Needle */}
            <div className="absolute bottom-4 right-4 z-10 bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 font-mono text-xs flex items-center gap-2.5 shadow-xl">
              <Activity className="w-4 h-4 text-amber-400 animate-pulse" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Well Depth</span>
                <span ref={depthTextRef} className="text-amber-400 font-black text-sm">
                  0m
                </span>
              </div>
            </div>

            {/* Telemetry Status Pill Left Bottom */}
            <div className="absolute bottom-4 left-4 z-10 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 font-mono text-[10px] text-slate-300 hidden sm:flex items-center gap-2">
              <Gauge className="w-3.5 h-3.5 text-sky-400" />
              <span>DTH Pressure: 24.5 BAR</span>
            </div>

            {hasWebGL ? (
              <Canvas
                camera={{ position: [0.6, 0.2, 5.0], fov: 42 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                className="w-full h-full"
              >
                <ambientLight intensity={0.9} />
                <directionalLight position={[5, 8, 5]} intensity={2.2} color="#FFFFFF" />
                <directionalLight position={[-4, 2, -2]} intensity={1.0} color="#38BDF8" />
                <pointLight position={[0, 0, 3]} intensity={2.5} color="#F59E0B" />
                <pointLight position={[0, -3.5, 2]} intensity={3.0} color="#0A5BB5" />
                <RealisticStrataCutaway progressRef={progressRef} />
              </Canvas>
            ) : (
              <div className="flex flex-col items-center justify-center p-6 text-center">
                <Droplets className="w-16 h-16 text-sky-400 animate-bounce mb-3" />
                <p className="font-heading font-bold text-white text-lg">Active Drilling Simulator</p>
                <p className="text-xs text-slate-300">Simulating penetration across Lusaka strata</p>
              </div>
            )}
          </div>

          {/* Right Column: Step by Step Information Cards */}
          <div className="lg:col-span-7 space-y-4">
            {BOREHOLE_PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => {
                    setActiveStep(idx);
                    activeStepRef.current = idx;
                  }}
                  className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'glass-panel-glow border-amber-400/50 scale-[1.01] shadow-[0_0_25px_rgba(245,158,11,0.2)]'
                      : 'glass-panel-light opacity-65 hover:opacity-90'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-8 h-8 rounded-xl font-mono text-sm font-black flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-amber-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                            : 'bg-white/10 text-slate-400'
                        }`}
                      >
                        0{step.step}
                      </span>
                      <div>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                          {step.title}
                        </h3>
                        <p className="font-mono text-xs text-sky-400">
                          {step.strata} • Depth: {step.depth}
                        </p>
                      </div>
                    </div>

                    {isActive && (
                      <span className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40 animate-pulse">
                        ACTIVE DRILL PHASE
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 pl-11">
                    {step.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3.5 pl-11">
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll helper indicator */}
        <div className="mt-8 flex justify-center items-center gap-2 text-xs font-mono text-slate-400">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-amber-400" />
          <span>Keep scrolling down to complete the borehole aquifer strike</span>
        </div>
      </div>
    </div>
  );
}
