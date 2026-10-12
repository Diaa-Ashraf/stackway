import type { Variants } from 'framer-motion';

export const CUBIC_EASE = [0.22, 1, 0.36, 1] as const;

export const DURATIONS = {
  micro: 0.25,
  reveal: 0.6,
  hero: 0.9,
} as const;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATIONS.reveal, ease: CUBIC_EASE },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.reveal, ease: CUBIC_EASE },
  },
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const lineMaskReveal: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: 0,
    transition: { duration: DURATIONS.hero, ease: CUBIC_EASE },
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATIONS.reveal, ease: CUBIC_EASE },
  },
};
