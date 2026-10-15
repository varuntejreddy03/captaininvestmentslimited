'use client';

import React from 'react';
import { Environment, Lightformer } from '@react-three/drei';

/**
 * Self-contained studio reflections built from light panels.
 * No HDR is downloaded, so the scene never fails when a CDN is blocked offline.
 */
export function StudioEnvironment() {
  return (
    <Environment resolution={256} frames={1}>
      {/* Overcast sky dome */}
      <Lightformer form="rect" intensity={1.6} color="#dbe7f5" position={[0, 8, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[18, 18, 1]} />
      {/* Warm low sun key */}
      <Lightformer form="rect" intensity={3.2} color="#ffd9a8" position={[7, 4, 5]} rotation={[0, -Math.PI / 3, 0]} scale={[8, 4, 1]} />
      {/* Cool fill */}
      <Lightformer form="rect" intensity={1.1} color="#b9d0ea" position={[-8, 3, -3]} rotation={[0, Math.PI / 2.5, 0]} scale={[8, 5, 1]} />
      {/* Ground bounce */}
      <Lightformer form="rect" intensity={0.5} color="#8a7a66" position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[16, 16, 1]} />
    </Environment>
  );
}
