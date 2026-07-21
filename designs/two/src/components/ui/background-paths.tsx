"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Animated flowing SVG paths — a native recreation of kokonutd/background-paths
 * (21st.dev). Two mirrored sets of curved strokes that slowly draw and drift.
 * Colour is driven by `currentColor`, so it inherits the wrapper's text color
 * (defaults to the brand lavender). Respects prefers-reduced-motion.
 */
function FloatingPaths({ position }: { position: number }) {
  const reduce = useReducedMotion();

  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 696 316"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={0.06 + path.id * 0.025}
          initial={{ pathLength: 0.3, opacity: 0.5 }}
          animate={
            reduce
              ? { pathLength: 1, opacity: 0.35 }
              : {
                  pathLength: 1,
                  opacity: [0.2, 0.55, 0.2],
                  pathOffset: [0, 1, 0],
                }
          }
          transition={{
            duration: 18 + (path.id % 14),
            repeat: reduce ? 0 : Infinity,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

export function BackgroundPaths({
  className,
  color = "#5e6ad2",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ color }}
      aria-hidden
    >
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
