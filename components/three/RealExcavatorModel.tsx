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

  // Clone scene to avoid shared mutation
  const clonedScene = useMemo(() => {
    const cloned = scene.clone(true);

    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (mesh.material) {
          const mat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
          mat.roughness = 0.38;
          mat.metalness = 0.55;
          mat.envMapIntensity = 1.8;
          mesh.material = mat;
        }
      }
    });

    return cloned;
  }, [scene]);

  useFrame((state) => {
    if (groupRef.current && isOperating) {
      const t = state.clock.getElapsedTime();
      // Realistic heavy engine idle micro-vibration
      groupRef.current.position.y = -1.2 + Math.sin(t * 22) * 0.0025;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.2, 0]}>
      <primitive
        object={clonedScene}
        scale={0.042}
        rotation={[0, 0.65, 0]}
        position={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/excavator.glb');
