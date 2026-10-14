import * as THREE from 'three';

/**
 * Custom GLSL Shader for the animated water wave ring echoing the Captain Investments logo
 */
export const WaveRingShaderMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColorA: { value: new THREE.Color('#0A1F6B') },
    uColorB: { value: new THREE.Color('#0A5BB5') },
    uColorC: { value: new THREE.Color('#3B8FE0') },
    uColorGold: { value: new THREE.Color('#F59E0B') },
  },
  vertexShader: `
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      
      vec3 pos = position;
      // Procedural wave curl displacement
      float angle = atan(pos.z, pos.x);
      float radius = length(pos.xz);
      float wave = sin(angle * 3.0 + uTime * 2.5) * 0.15 + cos(radius * 2.0 - uTime * 1.5) * 0.1;
      
      pos.y += wave;
      vPosition = pos;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    uniform vec3 uColorC;
    uniform vec3 uColorGold;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      // Dynamic color gradient mimicking the logo wave
      float waveFactor = sin(vUv.x * 6.28 + uTime * 2.0) * 0.5 + 0.5;
      vec3 waterColor = mix(uColorA, uColorB, vUv.y);
      waterColor = mix(waterColor, uColorC, waveFactor);
      
      // Crest edge highlight
      float rim = 1.0 - max(dot(vNormal, vec3(0.0, 1.0, 0.0)), 0.0);
      waterColor = mix(waterColor, uColorGold, pow(rim, 4.0) * 0.4);

      // Transparency fade at boundaries
      float alpha = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.75, vUv.y) * 0.82;

      gl_FragColor = vec4(waterColor, alpha);
    }
  `,
};
