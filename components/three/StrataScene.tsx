'use client';

import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const BLOCK_W = 4.4;
const BLOCK_H = 7.2;
const BLOCK_D = 1.5;
const TOP_Y = 3.2;
/** Bit tip travel: surface to 120 m */
const START_Y = TOP_Y;
const END_Y = TOP_Y - BLOCK_H * 0.93;

/** Layer boundaries as a fraction of block height (matches 15 / 60 / 90 / 120 m steps). */
const LAYERS = [
  { to: 0.117, base: [74, 52, 34], speck: [[52, 36, 24], [96, 72, 48], [40, 30, 20]], rough: 0.95 },
  { to: 0.465, base: [150, 92, 54], speck: [[176, 112, 66], [118, 70, 42], [196, 140, 92]], rough: 0.92 },
  { to: 0.698, base: [122, 118, 108], speck: [[96, 92, 84], [152, 146, 134], [78, 74, 68]], rough: 0.85 },
  { to: 0.93, base: [166, 164, 158], speck: [[134, 132, 126], [196, 194, 186], [104, 102, 98]], rough: 0.8 },
  { to: 1.0, base: [62, 74, 82], speck: [[44, 56, 66], [86, 100, 108], [34, 44, 52]], rough: 0.55 },
] as const;

function rand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/** Paint a believable geological section: grain, bedding planes, pebbles, fractures. */
function makeStrataTextures() {
  const W = 512;
  const H = 1024;
  const color = document.createElement('canvas');
  const bump = document.createElement('canvas');
  color.width = bump.width = W;
  color.height = bump.height = H;
  const c = color.getContext('2d')!;
  const b = bump.getContext('2d')!;
  const r = rand(7919);

  b.fillStyle = '#808080';
  b.fillRect(0, 0, W, H);

  let prev = 0;
  LAYERS.forEach((layer, li) => {
    const y0 = Math.round(prev * H);
    const y1 = Math.round(layer.to * H);
    prev = layer.to;
    const [br, bg, bb] = layer.base;
    c.fillStyle = `rgb(${br},${bg},${bb})`;
    c.fillRect(0, y0, W, y1 - y0 + 2);

    // Grain
    const area = W * (y1 - y0);
    for (let i = 0; i < area / 14; i++) {
      const x = r() * W;
      const y = y0 + r() * (y1 - y0);
      const s = layer.speck[Math.floor(r() * layer.speck.length)];
      c.fillStyle = `rgba(${s[0]},${s[1]},${s[2]},${0.25 + r() * 0.45})`;
      const sz = 0.8 + r() * 2.4;
      c.fillRect(x, y, sz * (1 + r() * 2), sz);
      const v = Math.floor(80 + r() * 100);
      b.fillStyle = `rgba(${v},${v},${v},0.5)`;
      b.fillRect(x, y, sz * 1.5, sz);
    }

    // Bedding planes (stronger in schist and dolomite)
    const beds = li >= 2 ? 26 : 10;
    for (let i = 0; i < beds; i++) {
      const y = y0 + r() * (y1 - y0);
      const amp = 2 + r() * 6;
      const f = 0.01 + r() * 0.02;
      c.strokeStyle = `rgba(0,0,0,${0.08 + r() * 0.16})`;
      c.lineWidth = 0.8 + r() * 1.6;
      c.beginPath();
      for (let x = 0; x <= W; x += 8) c.lineTo(x, y + Math.sin(x * f + i) * amp);
      c.stroke();
    }

    // Stones / cobbles in the soil layers
    if (li <= 1) {
      for (let i = 0; i < 38; i++) {
        const x = r() * W, y = y0 + r() * (y1 - y0), rad = 2 + r() * 7;
        const g = 90 + r() * 70;
        c.fillStyle = `rgba(${g},${g - 6},${g - 14},0.85)`;
        c.beginPath(); c.ellipse(x, y, rad * 1.3, rad, r() * 3, 0, 7); c.fill();
        b.fillStyle = 'rgba(200,200,200,0.8)';
        b.beginPath(); b.ellipse(x, y, rad * 1.3, rad, 0, 0, 7); b.fill();
      }
    }

    // Fractures and calcite veins in the hard rock
    if (li === 2 || li === 3) {
      for (let i = 0; i < 14; i++) {
        let x = r() * W, y = y0 + r() * (y1 - y0);
        c.strokeStyle = li === 3 ? 'rgba(235,235,228,0.55)' : 'rgba(30,28,26,0.55)';
        c.lineWidth = 0.7 + r() * 1.3;
        c.beginPath(); c.moveTo(x, y);
        for (let k = 0; k < 9; k++) { x += (r() - 0.5) * 36; y += (r() - 0.35) * 22; c.lineTo(x, y); }
        c.stroke();
        b.strokeStyle = 'rgba(20,20,20,0.9)'; b.lineWidth = 1.5;
        b.beginPath(); b.moveTo(x, y); b.lineTo(x + 20, y + 14); b.stroke();
      }
    }

    // Water saturation darkening towards the aquifer
    if (li === 4) {
      const grad = c.createLinearGradient(0, y0, 0, y1);
      grad.addColorStop(0, 'rgba(20,50,80,0)');
      grad.addColorStop(1, 'rgba(14,52,96,0.55)');
      c.fillStyle = grad;
      c.fillRect(0, y0, W, y1 - y0);
    }

    // Soft transition shadow at each boundary
    const sh = c.createLinearGradient(0, y0, 0, y0 + 14);
    sh.addColorStop(0, 'rgba(0,0,0,0.35)');
    sh.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = sh;
    c.fillRect(0, y0, W, 14);
  });

  const map = new THREE.CanvasTexture(color);
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 4;
  const bumpMap = new THREE.CanvasTexture(bump);
  return { map, bumpMap };
}

const steel = { color: '#6b7078', metalness: 0.85, roughness: 0.38 } as const;
const darkSteel = { color: '#34383e', metalness: 0.8, roughness: 0.5 } as const;

function DrillString() {
  const buttons = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * Math.PI * 2;
        return [Math.cos(a) * 0.19, -0.04, Math.sin(a) * 0.19] as [number, number, number];
      }),
    []
  );
  const joints = useMemo(() => Array.from({ length: 6 }, (_, i) => 1.1 + i * 1.5), []);
  return (
    <group>
      {/* Drill rod string running up out of the hole */}
      <mesh position={[0, 4.5, 0]} castShadow>
        <cylinderGeometry args={[0.085, 0.085, 9, 20]} />
        <meshStandardMaterial {...steel} />
      </mesh>
      {joints.map((y) => (
        <mesh key={y} position={[0, y, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.12, 0.26, 20]} />
          <meshStandardMaterial {...darkSteel} />
        </mesh>
      ))}
      {/* DTH hammer body */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.7, 24]} />
        <meshStandardMaterial {...darkSteel} />
      </mesh>
      <mesh position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.11, 0.15, 0.1, 24]} />
        <meshStandardMaterial {...steel} />
      </mesh>
      {/* Bit head with tungsten carbide buttons */}
      <mesh position={[0, 0.08, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.17, 0.2, 24]} />
        <meshStandardMaterial color="#8d9299" metalness={0.9} roughness={0.28} />
      </mesh>
      {buttons.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.028, 10, 10]} />
          <meshStandardMaterial color="#c9ccd1" metalness={1} roughness={0.15} />
        </mesh>
      ))}
      <mesh position={[0, -0.04, 0]}>
        <sphereGeometry args={[0.032, 10, 10]} />
        <meshStandardMaterial color="#c9ccd1" metalness={1} roughness={0.15} />
      </mesh>
    </group>
  );
}

export function StrataScene({ progressRef }: { progressRef: React.MutableRefObject<number> }) {
  const drillRef = useRef<THREE.Group>(null);
  const holeRef = useRef<THREE.Mesh>(null);
  const waterRef = useRef<THREE.Mesh>(null);
  const dustRef = useRef<THREE.Points>(null);
  const lampRef = useRef<THREE.PointLight>(null);
  const bitY = useRef(START_Y);

  const { map, bumpMap } = useMemo(() => makeStrataTextures(), []);

  const dust = useMemo(() => {
    const n = 90;
    return { pos: new Float32Array(n * 3), life: new Float32Array(n).map(() => Math.random()), n };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const target = START_Y - progressRef.current * (START_Y - END_Y);
    // Critically-damped follow: smooth with scroll, frame-rate independent
    bitY.current += (target - bitY.current) * (1 - Math.exp(-delta * 6));
    const moving = Math.abs(target - bitY.current) > 0.002;
    const drilling = progressRef.current > 0.001 && progressRef.current < 0.999;

    if (drillRef.current) {
      drillRef.current.position.y = bitY.current + (drilling ? Math.sin(t * 42) * 0.006 : 0);
      drillRef.current.rotation.y = t * (drilling ? 9 : 1.2);
    }

    // Drilled hole darkens the section behind the string
    if (holeRef.current) {
      const depth = Math.max(0.001, TOP_Y - bitY.current);
      holeRef.current.scale.y = depth;
      holeRef.current.position.y = TOP_Y - depth / 2;
    }

    // Water rises in the hole once the aquifer is struck
    if (waterRef.current) {
      const aquiferTop = TOP_Y - BLOCK_H * 0.93;
      const struck = THREE.MathUtils.smoothstep(progressRef.current, 0.93, 1);
      waterRef.current.visible = struck > 0.01;
      waterRef.current.scale.y = Math.max(0.001, struck * 1.6);
      waterRef.current.position.y = aquiferTop + (struck * 1.6) / 2 - 0.1;
    }

    if (dustRef.current) {
      const arr = dustRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < dust.n; i++) {
        dust.life[i] += delta * (0.5 + (i % 5) * 0.12);
        if (dust.life[i] > 1) dust.life[i] = 0;
        const l = dust.life[i];
        const a = i * 2.399;
        arr[i * 3] = Math.cos(a) * (0.1 + l * 0.35);
        arr[i * 3 + 1] = bitY.current + 0.05 + l * 0.9;
        arr[i * 3 + 2] = 0.78 + Math.sin(a) * 0.05;
      }
      dustRef.current.geometry.attributes.position.needsUpdate = true;
      dustRef.current.visible = drilling;
      (dustRef.current.material as THREE.PointsMaterial).opacity = moving ? 0.6 : 0.35;
    }

    if (lampRef.current) lampRef.current.position.y = bitY.current + 0.6;
  });

  const blockCenterY = TOP_Y - BLOCK_H / 2;

  return (
    <group>
      {/* Geological block: textured cut face, rough earth sides */}
      <mesh position={[0, blockCenterY, 0]} receiveShadow>
        <boxGeometry args={[BLOCK_W, BLOCK_H, BLOCK_D]} />
        <meshStandardMaterial attach="material-0" color="#2b2118" roughness={1} />
        <meshStandardMaterial attach="material-1" color="#2b2118" roughness={1} />
        <meshStandardMaterial attach="material-2" color="#3b2c1f" roughness={1} />
        <meshStandardMaterial attach="material-3" color="#15110d" roughness={1} />
        <meshStandardMaterial attach="material-4" map={map} bumpMap={bumpMap} bumpScale={2.2} roughness={0.95} metalness={0} />
        <meshStandardMaterial attach="material-5" color="#2b2118" roughness={1} />
      </mesh>

      {/* Grass / topsoil lip */}
      <mesh position={[0, TOP_Y + 0.03, 0]} receiveShadow>
        <boxGeometry args={[BLOCK_W + 0.02, 0.07, BLOCK_D + 0.02]} />
        <meshStandardMaterial color="#4a5a2a" roughness={1} />
      </mesh>

      {/* Borehole: dark cavity growing with the bit */}
      <mesh ref={holeRef} position={[0, TOP_Y, BLOCK_D / 2 + 0.004]}>
        <planeGeometry args={[0.44, 1]} />
        <meshStandardMaterial color="#0b0907" roughness={1} />
      </mesh>

      {/* Standing water in the borehole after aquifer strike */}
      <mesh ref={waterRef} position={[0, 0, BLOCK_D / 2 + 0.008]} visible={false}>
        <planeGeometry args={[0.44, 1]} />
        <meshPhysicalMaterial color="#2c6f9e" roughness={0.05} metalness={0} transmission={0.2} transparent opacity={0.8} />
      </mesh>

      {/* Surface collar */}
      <mesh position={[0, TOP_Y + 0.09, BLOCK_D / 2 - 0.02]} castShadow>
        <boxGeometry args={[0.62, 0.12, 0.2]} />
        <meshStandardMaterial {...darkSteel} />
      </mesh>

      <group ref={drillRef} position={[0, START_Y, BLOCK_D / 2 + 0.06]}>
        <DrillString />
      </group>

      {/* Cuttings kicked up by the bit */}
      <points ref={dustRef} visible={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dust.pos, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.035} color="#b9a78f" transparent opacity={0.5} depthWrite={false} sizeAttenuation />
      </points>

      <pointLight ref={lampRef} position={[0, TOP_Y, 1.8]} intensity={1.4} distance={3.2} color="#ffd9a0" />
    </group>
  );
}
