'use client';

import { motion, type MotionProps, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';
import {
  fadeInUp, fadeInDown, fadeInLeft, fadeInRight,
  scaleIn, blurIn, rotateIn, flipIn, clipReveal,
  viewportOnce,
} from '@/lib/animations';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'blur' | 'rotate' | 'flip' | 'clip';

const variantMap: Record<Direction, Variants> = {
  up: fadeInUp,
  down: fadeInDown,
  left: fadeInLeft,
  right: fadeInRight,
  scale: scaleIn,
  blur: blurIn,
  rotate: rotateIn,
  flip: flipIn,
  clip: clipReveal,
};

interface RevealProps extends MotionProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'span' | 'li';
  /** When true, animates immediately on mount instead of waiting for scroll */
  immediate?: boolean;
}

/**
 * Reveal — drop-in scroll-triggered animation wrapper.
 *
 * Usage:
 *   <Reveal direction="up" delay={0.1}>...</Reveal>
 *   <Reveal direction="left" className="grid ...">...</Reveal>
 */
export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration,
  className,
  as = 'div',
  immediate = true,
  ...rest
}: RevealProps) {
  const baseVariants = variantMap[direction];
  const variants: Variants = duration
    ? {
        hidden: baseVariants.hidden,
        visible: { ...baseVariants.visible, transition: { ...baseVariants.visible.transition, duration, delay } },
      }
    : delay
      ? {
          hidden: baseVariants.hidden,
          visible: { ...baseVariants.visible, transition: { ...baseVariants.visible.transition, delay } },
        }
      : baseVariants;

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      {...(immediate ? { animate: 'visible' } : { whileInView: 'visible', viewport: viewportOnce })}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
