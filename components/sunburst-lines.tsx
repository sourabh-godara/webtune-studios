"use client";

import { useRef } from "react";
import { useAnimationFrame, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/* =============================================================================
   Geometry + effect tuning. Everything you might want to tweak is here.

   The effect (from the reference video): the rays are NOT rigidly rotating.
   A "focus" angle sweeps clockwise around the circle. Rays near the focus get
   pulled toward it and bunch into a tight fan, and they also grow longer.
   Rays far from the focus stay evenly spaced.
   ============================================================================= */
const SUNBURST = {
  viewBox: 680,
  rays: 102,
  innerRadius: 65,
  outerRadius: 310,
  strokeWidth: 1.9,
} as const;

const EFFECT = {
  /** Seconds for the focus to complete one full lap. */
  lapSeconds: 9,
  /** Starting angle of the focus in degrees (0 = right, 90 = bottom). */
  startDeg: -30,
  /** How strongly rays are pulled toward the focus (0 = none, <1 keeps order). */
  pull: 0.65,
  /** Angular width of the pull zone in radians (bigger = wider fan). */
  pullSpread: 0.4,
  /** Extra length (viewBox units) added to rays at the focus. */
  stretch: 22,
  /** Angular width of the stretch zone in radians. */
  stretchSpread: 0.3,
  /** How far the inner ends dip inward at the focus (viewBox units). */
  innerDip: 2,
} as const;

const TAU = Math.PI * 2;
const CENTER = SUNBURST.viewBox / 2;
const BASE_ANGLES = Array.from({ length: SUNBURST.rays }, (_, i) => (i / SUNBURST.rays) * TAU);

/** Shortest signed angle from `focus` to `angle`, in (-PI, PI]. */
function angleDelta(angle: number, focus: number) {
  // JS `%` keeps the sign of the dividend, so wrap explicitly in both directions.
  let d = (angle - focus) % TAU;
  if (d > Math.PI) d -= TAU;
  else if (d < -Math.PI) d += TAU;
  return d;
}

/** Build every ray as one path string. `focus === null` gives the undistorted burst. */
function buildPath(focus: number | null) {
  let d = "";
  for (let i = 0; i < SUNBURST.rays; i++) {
    const base = BASE_ANGLES[i];
    let angle = base;
    let inner: number = SUNBURST.innerRadius;
    let outer: number = SUNBURST.outerRadius;

    if (focus !== null) {
      const delta = angleDelta(base, focus);
      const pullU = delta / EFFECT.pullSpread;
      const stretchU = delta / EFFECT.stretchSpread;
      angle = base - EFFECT.pull * delta * Math.exp(-pullU * pullU);
      const lift = Math.exp(-stretchU * stretchU);
      outer += EFFECT.stretch * lift;
      inner -= EFFECT.innerDip * lift;
    }

    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    d += `M${(CENTER + inner * cos).toFixed(2)} ${(CENTER + inner * sin).toFixed(2)}`;
    d += `L${(CENTER + outer * cos).toFixed(2)} ${(CENTER + outer * sin).toFixed(2)}`;
  }
  return d;
}

/* Static fallback: used for SSR, first paint, and reduced-motion users. */
const STATIC_PATH = buildPath(null);

interface SunburstLinesProps {
  /** Any CSS color; defaults to the accent token. */
  color?: string;
  className?: string;
  /** Seconds for the pinch to travel once around the circle. */
  duration?: number;
  /** Rendered width/height in px. */
  size?: number;
}

export function SunburstLines({
  color = "var(--color-signal)",
  className,
  duration = EFFECT.lapSeconds,
  size = SUNBURST.viewBox,
}: SunburstLinesProps) {
  const reduceMotion = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView(svgRef);

  const startRad = (EFFECT.startDeg * Math.PI) / 180;

  // Updates the DOM attribute directly: no React re-renders per frame.
  useAnimationFrame((time) => {
    if (reduceMotion || !inView || !pathRef.current) return;
    const focus = startRad + (time / 1000 / duration) * TAU; // clockwise
    pathRef.current.setAttribute("d", buildPath(focus));
  });

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <svg
        ref={svgRef}
        width={size}
        height={size}
        viewBox={`0 0 ${SUNBURST.viewBox} ${SUNBURST.viewBox}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-95"
        aria-hidden
      >
        <path
          ref={pathRef}
          d={STATIC_PATH}
          style={{ stroke: color }}
          strokeWidth={SUNBURST.strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}