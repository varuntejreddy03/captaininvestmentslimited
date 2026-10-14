'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RealisticDrillRigProps {
  isDrilling?: boolean;
}

/**
 * Photorealistic Industrial Rotary Drill Rig & Tri-Cone Bit
 * Designed with authentic engineering proportions, PBR materials, and hydraulic assemblies.
 */
export function RealisticDrillRig({ isDrilling = true }: RealisticDrillRigProps) {
  const rigRef = useRef<THREE.Group>(null);
  const bitRef = useRef<THREE.Group>(null);
  const topDriveRef = useRef<THREE.Group>(null);
  const sprayRef = useRef<THREE.Points>(null);

  // Materials
  const materials = useMemo(() => {
    return {
      yellowPaint: new THREE.MeshStandardMaterial({
        color: '#EAB308', // Industrial Equipment Yellow
        roughness: 0.35,
        metalness: 0.4,
      }),
      orangePaint: new THREE.MeshStandardMaterial({
        color: '#F59E0B',
        roughness: 0.3,
        metalness: 0.5,
      }),
      darkSteel: new THREE.MeshStandardMaterial({
        color: '#1E293B',
        roughness: 0.6,
        metalness: 0.85,
      }),
      castIron: new THREE.MeshStandardMaterial({
        color: '#0F172A',
        roughness: 0.75,
        metalness: 0.6,
      }),
      chromeHydraulic: new THREE.MeshStandardMaterial({
        color: '#F8FAFC',
        roughness: 0.08,
        metalness: 0.98,
      }),
      carbideGold: new THREE.MeshStandardMaterial({
        color: '#F59E0B',
        roughness: 0.25,
        metalness: 0.9,
      }),
      tungstenTeeth: new THREE.MeshStandardMaterial({
        color: '#CBD5E1',
        roughness: 0.15,
        metalness: 0.95,
      }),
      glass: new THREE.MeshStandardMaterial({
        color: '#0284C7',
        roughness: 0.1,
        metalness: 0.9,
        transparent: true,
        opacity: 0.65,
      }),
    };
  }, []);

  // Water spray particles from the drill bit
  const [sprayPositions, sprayVelocities] = useMemo(() => {
    const count = 180;
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.4;
      pos[i * 3 + 1] = -2.1 + (Math.random() - 0.5) * 0.3;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.4;

      vel[i * 3] = (Math.random() - 0.5) * 2.5;
      vel[i * 3 + 1] = Math.random() * 1.8 + 0.5;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 2.5;
    }
    return [pos, vel];
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Rotate Tri-Cone drill bit and string at authentic drilling RPM
    if (bitRef.current && isDrilling) {
      bitRef.current.rotation.y += delta * 7.5;
      // Authentic DTH percussion hammer micro-vibration
      bitRef.current.position.y = -0.05 + Math.sin(time * 35) * 0.02;
    }

    // Top-drive subtle movement along mast
    if (topDriveRef.current && isDrilling) {
      topDriveRef.current.position.y = 1.2 + Math.sin(time * 0.8) * 0.15;
    }

    // Animate high-pressure water spray & rock dust particles
    if (sprayRef.current && isDrilling) {
      const positions = sprayRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < sprayPositions.length / 3; i++) {
        const i3 = i * 3;
        positions[i3] += sprayVelocities[i3] * delta;
        positions[i3 + 1] += (sprayVelocities[i3 + 1] - 4.5 * delta) * delta;
        positions[i3 + 2] += sprayVelocities[i3 + 2] * delta;

        // Reset particle lifecycle
        if (positions[i3 + 1] < -2.4 || positions[i3 + 1] > 0.5) {
          positions[i3] = (Math.random() - 0.5) * 0.3;
          positions[i3 + 1] = -2.0;
          positions[i3 + 2] = (Math.random() - 0.5) * 0.3;
        }
      }
      sprayRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={rigRef} position={[0, -0.6, 0]}>
      {/* =========================================
          1. HEAVY CRAWLER TRACK UNDERCARRIAGE
         ========================================= */}
      {/* Left Track Assembly */}
      <group position={[-1.3, -1.8, 0]}>
        {/* Track Frame Beam */}
        <mesh material={materials.darkSteel}>
          <boxGeometry args={[0.55, 0.45, 3.8]} />
        </mesh>
        {/* Track Chain Shoes */}
        <mesh position={[0, 0, 0]} material={materials.castIron}>
          <boxGeometry args={[0.62, 0.55, 3.9]} />
        </mesh>
        {/* Front Idler Wheel */}
        <mesh position={[0, 0.05, 1.8]} rotation={[0, 0, Math.PI / 2]} material={materials.darkSteel}>
          <cylinderGeometry args={[0.32, 0.32, 0.58, 20]} />
        </mesh>
        {/* Rear Drive Sprocket */}
        <mesh position={[0, 0.05, -1.8]} rotation={[0, 0, Math.PI / 2]} material={materials.darkSteel}>
          <cylinderGeometry args={[0.34, 0.34, 0.58, 16]} />
        </mesh>
        {/* Track Rollers (5 units) */}
        {[-1.2, -0.6, 0, 0.6, 1.2].map((z, idx) => (
          <mesh key={idx} position={[0, -0.15, z]} rotation={[0, 0, Math.PI / 2]} material={materials.darkSteel}>
            <cylinderGeometry args={[0.15, 0.15, 0.58, 12]} />
          </mesh>
        ))}
      </group>

      {/* Right Track Assembly */}
      <group position={[1.3, -1.8, 0]}>
        <mesh material={materials.darkSteel}>
          <boxGeometry args={[0.55, 0.45, 3.8]} />
        </mesh>
        <mesh material={materials.castIron}>
          <boxGeometry args={[0.62, 0.55, 3.9]} />
        </mesh>
        <mesh position={[0, 0.05, 1.8]} rotation={[0, 0, Math.PI / 2]} material={materials.darkSteel}>
          <cylinderGeometry args={[0.32, 0.32, 0.58, 20]} />
        </mesh>
        <mesh position={[0, 0.05, -1.8]} rotation={[0, 0, Math.PI / 2]} material={materials.darkSteel}>
          <cylinderGeometry args={[0.34, 0.34, 0.58, 16]} />
        </mesh>
        {[-1.2, -0.6, 0, 0.6, 1.2].map((z, idx) => (
          <mesh key={idx} position={[0, -0.15, z]} rotation={[0, 0, Math.PI / 2]} material={materials.darkSteel}>
            <cylinderGeometry args={[0.15, 0.15, 0.58, 12]} />
          </mesh>
        ))}
      </group>

      {/* Center Carbody / Cross Beams */}
      <mesh position={[0, -1.65, 0]} material={materials.darkSteel}>
        <boxGeometry args={[2.2, 0.3, 2.4]} />
      </mesh>
      {/* Heavy Slewing Ring / Turntable */}
      <mesh position={[0, -1.45, 0]} material={materials.chromeHydraulic}>
        <cylinderGeometry args={[0.85, 0.85, 0.15, 32]} />
      </mesh>

      {/* =========================================
          2. UPPERSTRUCTURE, CHASSIS & CABIN
         ========================================= */}
      <group position={[0, -1.2, -0.2]}>
        {/* Main Equipment Deck */}
        <mesh position={[0, 0.15, 0]} material={materials.yellowPaint}>
          <boxGeometry args={[2.3, 0.45, 3.2]} />
        </mesh>

        {/* Engine Compartment / Rear Hood */}
        <mesh position={[0, 0.65, -0.8]} material={materials.orangePaint}>
          <boxGeometry args={[2.1, 0.7, 1.4]} />
        </mesh>
        {/* Counterweight Block */}
        <mesh position={[0, 0.6, -1.55]} material={materials.castIron}>
          <boxGeometry args={[2.2, 0.8, 0.35]} />
        </mesh>

        {/* Exhaust Muffler Pipe */}
        <mesh position={[0.7, 1.3, -1.0]} material={materials.darkSteel}>
          <cylinderGeometry args={[0.08, 0.08, 0.7, 12]} />
        </mesh>

        {/* Operator Safety Cabin (Left side) */}
        <group position={[-0.75, 0.85, 0.5]}>
          <mesh material={materials.yellowPaint}>
            <boxGeometry args={[0.75, 1.0, 1.2]} />
          </mesh>
          {/* Cabin Glass Windshield & Windows */}
          <mesh position={[0, 0.1, 0.61]} material={materials.glass}>
            <planeGeometry args={[0.65, 0.7]} />
          </mesh>
          <mesh position={[-0.38, 0.1, 0]} rotation={[0, -Math.PI / 2, 0]} material={materials.glass}>
            <planeGeometry args={[0.9, 0.65]} />
          </mesh>
          <mesh position={[0.38, 0.1, 0]} rotation={[0, Math.PI / 2, 0]} material={materials.glass}>
            <planeGeometry args={[0.9, 0.65]} />
          </mesh>
          {/* ROPS Roll-Cage Frame Beams */}
          <mesh position={[0, 0.52, 0]} material={materials.darkSteel}>
            <boxGeometry args={[0.78, 0.06, 1.25]} />
          </mesh>
        </group>

        {/* Hydraulic Valve Bank & Reservoir */}
        <mesh position={[0.7, 0.6, 0.3]} material={materials.darkSteel}>
          <boxGeometry args={[0.65, 0.6, 0.8]} />
        </mesh>
      </group>

      {/* =========================================
          3. HEAVY DRILLING MAST / DERRICK TOWER
         ========================================= */}
      <group position={[0, 0.4, 1.3]}>
        {/* Main Tubular Steel Mast Uprights */}
        {/* Left Column */}
        <mesh position={[-0.55, 1.2, 0]} material={materials.yellowPaint}>
          <boxGeometry args={[0.16, 4.4, 0.22]} />
        </mesh>
        {/* Right Column */}
        <mesh position={[0.55, 1.2, 0]} material={materials.yellowPaint}>
          <boxGeometry args={[0.16, 4.4, 0.22]} />
        </mesh>
        {/* Rear Guide Channel */}
        <mesh position={[0, 1.2, -0.2]} material={materials.darkSteel}>
          <boxGeometry args={[1.1, 4.4, 0.1]} />
        </mesh>

        {/* Mast Lattice Cross-Braces */}
        {[-0.6, 0.2, 1.0, 1.8, 2.6].map((y, idx) => (
          <group key={idx} position={[0, y, 0]}>
            <mesh material={materials.darkSteel}>
              <boxGeometry args={[1.15, 0.08, 0.15]} />
            </mesh>
            {/* Diagonal strut */}
            <mesh rotation={[0, 0, (idx % 2 === 0 ? 1 : -1) * 0.45]} material={materials.darkSteel}>
              <boxGeometry args={[1.2, 0.04, 0.06]} />
            </mesh>
          </group>
        ))}

        {/* Crown Sheave Block at the very top */}
        <group position={[0, 3.45, 0]}>
          <mesh material={materials.orangePaint}>
            <boxGeometry args={[1.25, 0.3, 0.5]} />
          </mesh>
          {/* Dual Wire Sheave Pulleys */}
          <mesh position={[-0.25, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.darkSteel}>
            <cylinderGeometry args={[0.22, 0.22, 0.08, 16]} />
          </mesh>
          <mesh position={[0.25, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.darkSteel}>
            <cylinderGeometry args={[0.22, 0.22, 0.08, 16]} />
          </mesh>
        </group>

        {/* Mast Raising Hydraulic Cylinders */}
        <group position={[-0.55, -0.8, -0.4]} rotation={[0.4, 0, 0]}>
          <mesh material={materials.darkSteel}>
            <cylinderGeometry args={[0.12, 0.12, 1.4, 16]} />
          </mesh>
          <mesh position={[0, 0.6, 0]} material={materials.chromeHydraulic}>
            <cylinderGeometry args={[0.07, 0.07, 1.2, 16]} />
          </mesh>
        </group>
        <group position={[0.55, -0.8, -0.4]} rotation={[0.4, 0, 0]}>
          <mesh material={materials.darkSteel}>
            <cylinderGeometry args={[0.12, 0.12, 1.4, 16]} />
          </mesh>
          <mesh position={[0, 0.6, 0]} material={materials.chromeHydraulic}>
            <cylinderGeometry args={[0.07, 0.07, 1.2, 16]} />
          </mesh>
        </group>

        {/* =========================================
            4. ROTARY TOP-DRIVE POWERHEAD & DRILL STRING
           ========================================= */}
        <group ref={topDriveRef} position={[0, 1.2, 0]}>
          {/* Top Drive Gearbox Carriage */}
          <mesh material={materials.orangePaint}>
            <boxGeometry args={[0.85, 0.75, 0.6]} />
          </mesh>
          {/* High-Pressure Hydraulic Motor */}
          <mesh position={[0, 0.5, 0]} material={materials.darkSteel}>
            <cylinderGeometry args={[0.25, 0.25, 0.45, 16]} />
          </mesh>
          {/* Mud / Air Swivel Coupler */}
          <mesh position={[0, -0.45, 0]} material={materials.chromeHydraulic}>
            <cylinderGeometry args={[0.2, 0.2, 0.25, 16]} />
          </mesh>

          {/* High-pressure reinforced air hose */}
          <mesh position={[0.35, 0.2, 0]} rotation={[0, 0, 0.4]} material={materials.castIron}>
            <torusGeometry args={[0.3, 0.05, 8, 16, Math.PI]} />
          </mesh>
        </group>

        {/* =========================================
            5. ROTATING DRILL STRING & TRI-CONE BIT
           ========================================= */}
        <group ref={bitRef} position={[0, 0, 0]}>
          {/* Continuous Heavy Steel Drill Pipe (Kelly Stem) */}
          <mesh position={[0, 0.2, 0]} material={materials.darkSteel}>
            <cylinderGeometry args={[0.14, 0.14, 3.8, 16]} />
          </mesh>

          {/* DTH Percussion Hammer Body */}
          <mesh position={[0, -1.4, 0]} material={materials.darkSteel}>
            <cylinderGeometry args={[0.22, 0.22, 1.2, 20]} />
          </mesh>
          <mesh position={[0, -0.9, 0]} material={materials.carbideGold}>
            <cylinderGeometry args={[0.24, 0.24, 0.15, 20]} />
          </mesh>

          {/* =========================================
              TRI-CONE ROLLER ROCK BIT (Industrial Quality)
             ========================================= */}
          <group position={[0, -2.1, 0]}>
            {/* Bit Sub / Shank Collar */}
            <mesh position={[0, 0.15, 0]} material={materials.carbideGold}>
              <cylinderGeometry args={[0.26, 0.22, 0.35, 18]} />
            </mesh>

            {/* 3 Interlocking Conical Cutters */}
            {[0, 1, 2].map((coneIdx) => {
              const angle = (coneIdx * (Math.PI * 2)) / 3;
              const radius = 0.16;

              return (
                <group
                  key={coneIdx}
                  position={[Math.cos(angle) * radius, -0.15, Math.sin(angle) * radius]}
                  rotation={[0.35 * Math.sin(angle), angle, 0.35 * Math.cos(angle)]}
                >
                  {/* Conical Roller Body */}
                  <mesh material={materials.carbideGold}>
                    <coneGeometry args={[0.18, 0.35, 14]} />
                  </mesh>

                  {/* Tungsten Carbide Milled Cutting Teeth (Rows) */}
                  {[0, 1, 2, 3, 4, 5].map((toothIdx) => {
                    const tAngle = (toothIdx * Math.PI * 2) / 6;
                    return (
                      <mesh
                        key={toothIdx}
                        position={[
                          Math.cos(tAngle) * 0.16,
                          -0.08,
                          Math.sin(tAngle) * 0.16,
                        ]}
                        material={materials.tungstenTeeth}
                      >
                        <boxGeometry args={[0.04, 0.08, 0.06]} />
                      </mesh>
                    );
                  })}
                  {/* Tip Carbide Insert */}
                  <mesh position={[0, 0.18, 0]} material={materials.tungstenTeeth}>
                    <sphereGeometry args={[0.04, 8, 8]} />
                  </mesh>
                </group>
              );
            })}

            {/* Center Air / Water Flushing Nozzle */}
            <mesh position={[0, -0.22, 0]} material={materials.darkSteel}>
              <cylinderGeometry args={[0.06, 0.06, 0.1, 12]} />
            </mesh>
          </group>
        </group>

        {/* High-Pressure Water Spray / Dust Particles */}
        <points ref={sprayRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[sprayPositions, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.06}
            color="#38BDF8"
            transparent
            opacity={0.8}
            blending={THREE.AdditiveBlending}
          />
        </points>

        {/* Surface Borehole Collar Casing on Ground */}
        <group position={[0, -2.15, 0]}>
          <mesh material={materials.darkSteel}>
            <cylinderGeometry args={[0.38, 0.38, 0.25, 24, 1, true]} />
          </mesh>
          {/* Surface Casing Flange */}
          <mesh position={[0, 0.1, 0]} material={materials.orangePaint}>
            <cylinderGeometry args={[0.48, 0.48, 0.05, 24]} />
          </mesh>
        </group>
      </group>
    </group>
  );
}
