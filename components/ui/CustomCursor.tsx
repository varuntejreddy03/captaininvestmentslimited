'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    let lastHoverCheck = 0;
    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const now = performance.now();
      if (now - lastHoverCheck > 60) {
        lastHoverCheck = now;
        const target = e.target as HTMLElement | null;
        if (target) {
          const interactive = target.closest('a, button, input, select, textarea, [role="button"], .interactive-hover');
          setIsHovered(!!interactive);
        }
      }
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isClient || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer subtle orange ring - transparent so text is never obscured */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-amber-400/60 pointer-events-none z-50"
        animate={{
          x: pos.x - (isHovered ? 22 : 12),
          y: pos.y - (isHovered ? 22 : 12),
          width: isHovered ? 44 : 24,
          height: isHovered ? 44 : 24,
          borderColor: isHovered ? '#F59E0B' : 'rgba(245, 158, 11, 0.45)',
          backgroundColor: 'transparent', // Never cover letters with solid colors
          scale: isHovered ? 1.15 : 1.0,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.15,
        }}
      />

      {/* Center pinpoint */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-amber-400 pointer-events-none z-50"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          opacity: isHovered ? 0.3 : 1.0,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
        }}
      />
    </div>
  );
}
