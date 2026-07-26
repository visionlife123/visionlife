import type { Variants, Transition } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Easing curves                                                      */
/* ------------------------------------------------------------------ */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;
export const SPRING: Transition = { type: 'spring', stiffness: 220, damping: 26 };

/* ------------------------------------------------------------------ */
/*  Scroll-reveal variants (use with motion + whileInView)            */
/* ------------------------------------------------------------------ */

export const fadeInUp: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 1, x: 0 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE_OUT } },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 1, x: 0 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE_OUT } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 1, scale: 1 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE_OUT } },
};

export const blurIn: Variants = {
  hidden: { opacity: 1, filter: 'blur(0px)', y: 0 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const rotateIn: Variants = {
  hidden: { opacity: 1, rotate: 0, scale: 1 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const flipIn: Variants = {
  hidden: { opacity: 1, rotateX: 0, y: 0 },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

export const clipReveal: Variants = {
  hidden: { opacity: 1, clipPath: 'inset(0 0% 0 0)' },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.9, ease: EASE_IN_OUT },
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
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

export const staggerItemScale: Variants = {
  hidden: { opacity: 1, scale: 1 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE_OUT } },
};

/* ------------------------------------------------------------------ */
/*  Common viewport config                                             */
/* ------------------------------------------------------------------ */
export const viewportOnce = { once: true, margin: '2000px', amount: 0 } as const;

/* ------------------------------------------------------------------ */
/*  Hover presets                                                      */
/* ------------------------------------------------------------------ */
export const hoverLift = {
  whileHover: { y: -8, transition: { duration: 0.3, ease: EASE_OUT } },
  whileTap: { y: -4, scale: 0.99 },
};

export const hoverScale = {
  whileHover: { scale: 1.05, transition: { duration: 0.3, ease: EASE_OUT } },
  whileTap: { scale: 0.97 },
};

export const hoverTilt = {
  whileHover: { rotate: -1.5, scale: 1.03, transition: { duration: 0.3, ease: EASE_OUT } },
  whileTap: { scale: 0.98 },
};

export const hoverGlow = {
  whileHover: {
    scale: 1.03,
    boxShadow: '0 0 30px rgba(255, 215, 0, 0.45)',
    transition: { duration: 0.35, ease: EASE_OUT },
  },
  whileTap: { scale: 0.98 },
};
