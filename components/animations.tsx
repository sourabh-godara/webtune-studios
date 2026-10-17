"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";

/* ----------------------------------------------------------------
   Shared animation variants matching the Crafto reference timings:
   600-800ms, easeOutQuad, translateY 30→0, opacity 0→1
----------------------------------------------------------------- */

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
    },
  }),
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

/* ----------------------------------------------------------------
   Reusable scroll-triggered section wrapper
----------------------------------------------------------------- */

const motionComponents = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

export function AnimateOnScroll({
  children,
  className,
  variants = fadeUpVariants,
  custom,
  once = true,
  amount = 0.2,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  custom?: number;
  once?: boolean;
  amount?: number;
  as?: keyof typeof motionComponents;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });
  const Component = motionComponents[as] || motion.div;

  return (
    <Component
      ref={ref as any}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={custom}
      className={className}
    >
      {children}
    </Component>
  );
}

/* ----------------------------------------------------------------
   Animated counter for stats — counts up from 0 to target
----------------------------------------------------------------- */

export function AnimatedCounter({
  target,
  suffix = "",
  className,
}: {
  target: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 30,
    duration: 2,
  });
  const display = useTransform(springValue, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{display}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}
