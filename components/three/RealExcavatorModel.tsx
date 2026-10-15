'use client';

import React, { useRef, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RealExcavatorProps {
  isOperating?: boolean;
}

export function RealExcavatorModel({ isOperating = true }: RealExcavatorProps) {
  const { scene } = useGLTF('/models/excavator.glb');
  const groupRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Group>(null);
  const intro = useRef(0);

  // Keep the model's authored PBR materials (matte paint, rubber, dark steel);
  // only tune reflection strength so the paint reads as real, not chrome.
  const clonedScene = useMemo(() => {
    const cloned = scene.clone(true);
    cloned.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (!mesh.isMesh) return;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      const tune = (m: THREE.Material) => {
        const mat = m.clone() as THREE.MeshStandardMaterial;
        mat.envMapIntensity = 0.85;
        if (!mat.transparent) {
          mat.roughness = Math.max(mat.roughness, 0.55);
          mat.metalness = Math.min(mat.metalness, 0.25);
        }
        return mat;
      };
      mesh.material = Array.isArray(mesh.material) ? mesh.material.map(tune) : tune(mesh.material);
    });
    return cloned;
  }, [scene]);

  useFrame((state, delta) => {
    // Ease the machine in once, then settle into a living idle
    intro.current = Math.min(1, intro.current + delta * 0.9);
    const ease = 1 - Math.pow(1 - intro.current, 3);
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.position.y = -1.2 + (1 - ease) * 0.6;
      groupRef.current.rotation.y = (1 - ease) * -0.9;
      groupRef.current.scale.setScalar(0.94 + ease * 0.06);
    }
    if (bodyRef.current) {
      // Diesel idle: low-amplitude shudder plus a slow settling sway of the hydraulics
      const idle = isOperating ? 1 : 0;
      bodyRef.current.position.y = Math.sin(t * 17) * 0.0022 * idle;
      bodyRef.current.rotation.z = Math.sin(t * 0.9) * 0.0035 * idle;
      bodyRef.current.rotation.x = Math.sin(t * 0.7 + 1) * 0.0025 * idle;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.2, 0]}>
      <group ref={bodyRef}>
        <primitive object={clonedScene} scale={0.058} rotation={[0, 0.65 + Math.PI, 0]} />
      </group>
    </group>
  );
}

useGLTF.preload('/models/excavator.glb');
