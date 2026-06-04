import type { Variants } from "framer-motion";
import { ANIMATION } from "./constants";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.ease,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.ease,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION.stagger,
      delayChildren: 0.1,
    },
  },
};
