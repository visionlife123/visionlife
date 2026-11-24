import type { Variants, Transition } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Easing curves                                                      */
/* ------------------------------------------------------------------ */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;
export const SPRING: Transition = { type: 'spring', stiffness: 220, damping: 26 };

/* ------------------------------------------------------------------ */
/*  Scroll-reveal variants (use with motion + whileInView)            */
/*  MotionConfig reducedMotion="user" disables the transforms for      */
/*  visitors who prefer reduced motion.                                */
/* ------------------------------------------------------------------ */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_OUT },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_OUT },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: EASE_OUT },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: EASE_OUT },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.965 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: EASE_OUT },
  },
};

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)', y: 22 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 1, ease: EASE_OUT },
  },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -2, scale: 0.97 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE_OUT },
  },
};

export const flipIn: Variants = {
  hidden: { opacity: 0, rotateX: 12, y: 20 },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 1, ease: EASE_OUT },
  },
};

export const clipReveal: Variants = {
  hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1.2, ease: EASE_IN_OUT },
  },
};

/** Masked image reveal — pair with an overflow-hidden wrapper */
export const imageReveal: Variants = {
  hidden: { clipPath: 'inset(0 0 100% 0)', scale: 1.08 },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    scale: 1,
    transition: { duration: 1.3, ease: EASE_IN_OUT },
  },
};

/* ------------------------------------------------------------------ */
/*  Stagger containers                                                 */
/* ------------------------------------------------------------------ */
export const staggerContainer = (stagger = 0.1, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE_OUT },
  },
};

export const staggerItemScale: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, ease: EASE_OUT },
  },
};

/* ------------------------------------------------------------------ */
/*  Common viewport config                                             */
/* ------------------------------------------------------------------ */
export const viewportOnce = { once: true, amount: 0.15 } as const;
export const viewportEarly = { once: true, amount: 0.05 } as const;

/* ------------------------------------------------------------------ */
/*  Hover presets                                                      */
/* ------------------------------------------------------------------ */
export const hoverLift = {
  whileHover: { y: -6, transition: { duration: 0.4, ease: EASE_OUT } },
  whileTap: { y: -2, scale: 0.995 },
};

export const hoverScale = {
  whileHover: { scale: 1.03, transition: { duration: 0.4, ease: EASE_OUT } },
  whileTap: { scale: 0.985 },
};

export const hoverTilt = {
  whileHover: {
    rotate: -1,
    scale: 1.015,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
  whileTap: { scale: 0.99 },
};

export const hoverGlow = {
  whileHover: {
    scale: 1.02,
    boxShadow: '0 0 40px rgba(255, 215, 0, 0.32)',
    transition: { duration: 0.4, ease: EASE_OUT },
  },
  whileTap: { scale: 0.99 },
};
