import { lazy, Suspense } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { easeExpo } from "../lib/motion";
import { brand, hero, proof } from "../content";

// Code-split Three.js so it doesn't block first paint (~500KB off the initial bundle).
const WebGLShader = lazy(() =>
  import("./ui/web-gl-shader").then((m) => ({ default: m.WebGLShader }))
);

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-32 pb-20 md:pt-36"
    >
      {/* WebGL shader background — 21st.dev · designali-in/web-gl-shader, scoped to the hero */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Suspense fallback={null}>
          <WebGLShader className="absolute inset-0 block h-full w-full" />
        </Suspense>
        {/* readability wash + seam fades top/bottom into the canvas */}
        <div className="absolute inset-0 bg-canvas/40" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-canvas to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-canvas" />
        {/* Vignette — fade the shader to black around the entire hero perimeter */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(100% 88% at 50% 44%, transparent 20%, rgba(1,1,2,0.62) 48%, var(--color-canvas) 78%)",
          }}
        />
        {/* Side fades — guarantee the left/right edges read fully black */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-canvas to-transparent" />
        <div className="absolute inset-y-0 right-0 w-52 bg-gradient-to-l from-canvas to-transparent" />
      </div>

      <div className="container-x relative z-10">
        {/* Scarcity pill — the waitlist move */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeExpo }}
        >
          <span className="pill">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            {brand.scarcity}
          </span>
        </motion.div>

        {/* Quantified transformation, six-ish words */}
        <h1 className="display mt-7 max-w-[13ch] text-[2.6rem] md:text-7xl lg:text-[5rem]">
          {hero.headline[0]}
          <br />
          <span className="text-ink">{hero.line2Lead}</span>
          <span className="chroma-text">{hero.line2Accent}</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeExpo, delay: 0.15 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted"
        >
          {hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeExpo, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href={brand.calLink} className="btn btn-primary btn-lg">
            {hero.ctaPrimary}
          </a>
          <a href="#engine" className="btn btn-secondary btn-lg">
            {hero.ctaSecondary}
            <ArrowRight size={17} aria-hidden />
          </a>
        </motion.div>

        {/* Three aggregate proof numbers — principle 2 */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-3"
        >
          {proof.map((p) => (
            <div key={p.label} className="flex flex-col bg-surface-1 px-6 py-5 edge-lit">
              <dt className="order-2 mt-1 text-[0.82rem] text-ink-subtle">
                {p.label}
              </dt>
              <dd className="metric text-2xl text-ink">{p.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
