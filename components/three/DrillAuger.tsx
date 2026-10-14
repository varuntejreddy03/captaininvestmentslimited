'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface DrillAugerProps {
  speed?: number;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

class SmoothHelixCurve extends THREE.Curve<THREE.Vector3> {
  radius: number;
  height: number;
  turns: number;

  constructor(radius = 0.55, height = 3.6, turns = 4.5) {
    super();
    this.radius = radius;
    this.height = height;
    this.turns = turns;
  }

  getPoint(t: number, optionalTarget = new THREE.Vector3()) {
    const angle = t * Math.PI * 2 * this.turns;
    const x = Math.cos(angle) * this.radius;
    const y = -this.height / 2 + t * this.height;
    const z = Math.sin(angle) * this.radius;
    return optionalTarget.set(x, y, z);
  }
}

export function DrillAuger({
  speed = 1.0,
  scale = 1.0,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: DrillAugerProps) {
  const groupRef = useRef<THREE.Group>(null);

  const materials = useMemo(() => {
    return {
      flighting: new THREE.MeshStandardMaterial({
        color: '#F59E0B',
        metalness: 0.85,
        roughness: 0.25,
      }),
      stem: new THREE.MeshStandardMaterial({
        color: '#1E293B',
        metalness: 0.9,
        roughness: 0.35,
      }),
      bitCone: new THREE.MeshStandardMaterial({
        color: '#D97706',
        metalness: 0.9,
        roughness: 0.2,
      }),
      tungsten: new THREE.MeshStandardMaterial({
        color: '#F1F5F9',
        metalness: 0.95,
        roughness: 0.1,
      }),
    };
  }, []);

  const helixGeometry = useMemo(() => {
    const curve = new SmoothHelixCurve(0.65, 3.8, 5);
    return new THREE.TubeGeometry(curve, 180, 0.14, 16, false);
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed * 2.2;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      {/* Central Solid Heavy Steel Kelly Bar / Drill Pipe */}
      <mesh position={[0, 0.2, 0]} material={materials.stem}>
        <cylinderGeometry args={[0.22, 0.22, 4.6, 24]} />
      </mesh>

      {/* Top Heavy Chuck / Tool Joint Coupler */}
      <mesh position={[0, 2.45, 0]} material={materials.stem}>
        <cylinderGeometry args={[0.34, 0.3, 0.5, 20]} />
      </mesh>

      {/* Continuous Smooth Parametric Helical Flighting Blade */}
      <mesh geometry={helixGeometry} material={materials.flighting} />

      {/* Heavy-Duty DTH Percussion Sub Assembly */}
      <group position={[0, -2.1, 0]}>
        <mesh position={[0, 0.15, 0]} material={materials.bitCone}>
          <cylinderGeometry args={[0.32, 0.26, 0.4, 20]} />
        </mesh>

        {/* Tri-Cone Roller Cutters */}
        {[0, 1, 2].map((coneIdx) => {
          const angle = (coneIdx * (Math.PI * 2)) / 3;
          const r = 0.18;
          return (
            <group
              key={coneIdx}
              position={[Math.cos(angle) * r, -0.2, Math.sin(angle) * r]}
              rotation={[0.3 * Math.sin(angle), angle, 0.3 * Math.cos(angle)]}
            >
              <mesh material={materials.bitCone}>
                <coneGeometry args={[0.2, 0.4, 14]} />
              </mesh>
              {/* Tungsten carbide teeth buttons */}
              {[0, 1, 2, 3, 4].map((tIdx) => {
                const tAngle = (tIdx * Math.PI * 2) / 5;
                return (
                  <mesh
                    key={tIdx}
                    position={[
                      Math.cos(tAngle) * 0.16,
                      -0.1,
                      Math.sin(tAngle) * 0.16,
                    ]}
                    material={materials.tungsten}
                  >
                    <sphereGeometry args={[0.045, 8, 8]} />
                  </mesh>
                );
              })}
            </group>
          );
        })}
      </group>
    </group>
  );
}
