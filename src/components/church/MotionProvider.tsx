'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Global motion defaults.
 * `reducedMotion="user"` automatically disables transform animations for
 * visitors who have requested reduced motion at the OS level, while keeping
 * opacity transitions so content still appears correctly.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionConfig>
  );
}
