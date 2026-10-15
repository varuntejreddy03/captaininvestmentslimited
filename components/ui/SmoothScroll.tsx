'use client';

import React from 'react';

/**
 * Native scrolling is used on purpose: JS smooth-scroll libraries add input lag and
 * fight with the sticky scroll-driven scenes on phones and low-end laptops.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
