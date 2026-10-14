'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RealisticExcavatorProps {
  isOperating?: boolean;
}

export function RealisticExcavator({ isOperating = true }: RealisticExcavatorProps) {
  const groupRef = useRef<THREE.Group>(null);
  const houseRef = useRef<THREE.Group>(null);
  const boomRef = useRef<THREE.Group>(null);
  const armRef = useRef<THREE.Group>(null);
  const bucketRef = useRef<THREE.Group>(null);

  const materials = useMemo(() => {
    return {
      yellowPaint: new THREE.MeshStandardMaterial({
        color: '#EAB308',
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
      forgedTeeth: new THREE.MeshStandardMaterial({
        color: '#CBD5E1',
        roughness: 0.2,
        metalness: 0.9,
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

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (isOperating) {
      // Gentle realistic digging / articulation cycle
      if (houseRef.current) {
        houseRef.current.rotation.y = Math.sin(time * 0.4) * 0.25;
      }
      if (boomRef.current) {
        boomRef.current.rotation.z = -0.45 + Math.sin(time * 0.8) * 0.12;
      }
      if (armRef.current) {
        armRef.current.rotation.z = 0.8 + Math.cos(time * 0.8) * 0.15;
      }
      if (bucketRef.current) {
        bucketRef.current.rotation.z = -0.6 + Math.sin(time * 0.8 + 0.5) * 0.22;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
      {/* 1. Track Undercarriage */}
      {/* Left Track */}
      <group position={[-1.3, -1.8, 0]}>
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
      </group>

      {/* Right Track */}
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
      </group>

      {/* Center Frame */}
      <mesh position={[0, -1.65, 0]} material={materials.darkSteel}>
        <boxGeometry args={[2.2, 0.3, 2.4]} />
      </mesh>
      <mesh position={[0, -1.45, 0]} material={materials.chromeHydraulic}>
        <cylinderGeometry args={[0.85, 0.85, 0.15, 32]} />
      </mesh>

      {/* 2. Rotating Superstructure (House) */}
      <group ref={houseRef} position={[0, -1.2, 0]}>
        {/* Main Body */}
        <mesh position={[0, 0.35, -0.4]} material={materials.yellowPaint}>
          <boxGeometry args={[2.3, 0.75, 2.6]} />
        </mesh>
        {/* Rear Counterweight */}
        <mesh position={[0, 0.4, -1.6]} material={materials.castIron}>
          <boxGeometry args={[2.3, 0.85, 0.45]} />
        </mesh>

        {/* Operator Cabin */}
        <group position={[-0.75, 0.95, 0.3]}>
          <mesh material={materials.yellowPaint}>
            <boxGeometry args={[0.75, 1.1, 1.3]} />
          </mesh>
          <mesh position={[0, 0.1, 0.66]} material={materials.glass}>
            <planeGeometry args={[0.65, 0.8]} />
          </mesh>
          <mesh position={[-0.38, 0.1, 0]} rotation={[0, -Math.PI / 2, 0]} material={materials.glass}>
            <planeGeometry args={[1.0, 0.75]} />
          </mesh>
        </group>

        {/* 3. Articulated Boom Assembly */}
        <group position={[0.4, 0.5, 0.8]}>
          {/* Boom Foot Pivot */}
          <group ref={boomRef} position={[0, 0, 0]}>
            {/* Curved Main Excavator Boom */}
            <mesh position={[0, 1.4, 1.1]} rotation={[-0.6, 0, 0]} material={materials.yellowPaint}>
              <boxGeometry args={[0.35, 3.4, 0.45]} />
            </mesh>
            {/* Boom Hydraulic Cylinder */}
            <mesh position={[0, 0.6, 0.6]} rotation={[-0.45, 0, 0]} material={materials.chromeHydraulic}>
              <cylinderGeometry args={[0.09, 0.09, 1.8, 16]} />
            </mesh>

            {/* 4. Arm / Dipper Stick Pivot */}
            <group ref={armRef} position={[0, 2.6, 2.0]}>
              <mesh position={[0, 0.9, 0.3]} rotation={[0.4, 0, 0]} material={materials.yellowPaint}>
                <boxGeometry args={[0.28, 2.4, 0.35]} />
              </mesh>
              {/* Arm Cylinder */}
              <mesh position={[0, 0.5, 0.1]} rotation={[0.3, 0, 0]} material={materials.chromeHydraulic}>
                <cylinderGeometry args={[0.08, 0.08, 1.4, 16]} />
              </mesh>

              {/* 5. Heavy Rock Bucket */}
              <group ref={bucketRef} position={[0, 2.0, 0.8]}>
                {/* Bucket Shell */}
                <mesh material={materials.darkSteel}>
                  <boxGeometry args={[0.85, 0.85, 0.75]} />
                </mesh>
                {/* 5 Heavy Forged Teeth */}
                {[-0.32, -0.16, 0, 0.16, 0.32].map((x, tIdx) => (
                  <mesh key={tIdx} position={[x, 0.45, 0.38]} rotation={[-0.5, 0, 0]} material={materials.forgedTeeth}>
                    <coneGeometry args={[0.05, 0.22, 6]} />
                  </mesh>
                ))}
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
