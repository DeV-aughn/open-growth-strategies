import { motion } from "motion/react";
import { ArrowUpRight, Star } from "lucide-react";
import { brand, proof } from "../content";
import { GrowthMap } from "./GrowthMap";
import { easeExpo } from "../lib/motion";

export function Hero() {
  return (
    <section id="top" className="relative bg-ink text-paper overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[680px] h-[680px] rounded-full bg-signal/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[420px] h-[420px] rounded-full bg-signal/5 blur-[100px]" />

      <div className="container-x relative pt-36 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-8 items-center">
          {/* left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeExpo, delay: 0.3 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-paper/15 bg-paper/5 px-4 py-1.5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
              </span>
              <span className="eyebrow text-paper/80">
                Now booking service businesses · {brand.location}
              </span>
            </motion.div>

            <h1 className="font-display font-semibold leading-[0.98] tracking-tight text-[clamp(2.7rem,6.2vw,5.1rem)]">
              <Line delay={0.35}>Fill your schedule.</Line>
              <Line delay={0.47}>
                <span className="marker">
                  <span>On purpose.</span>
                </span>
              </Line>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeExpo, delay: 0.7 }}
              className="mt-7 text-[1.12rem] leading-relaxed text-paper/70 max-w-xl"
            >
              You don't have a lead problem — you have a{" "}
              <span className="text-paper font-medium">presence problem</span>. We
              make your service business the obvious choice online, then turn that
              attention into booked, paying jobs. With pricing you can actually see.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeExpo, delay: 0.85 }}
              className="mt-9 flex flex-wrap items-center gap-3.5"
            >
              <a href={brand.calLink} className="btn btn-signal">
                Book an intro call
                <ArrowUpRight size={18} />
              </a>
              <a href="#results" className="btn btn-ghost !border-paper/20 !text-paper hover:!border-paper">
                See the results
              </a>
            </motion.div>

            {/* Principle 2 — three aggregate proof numbers above the fold */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.05 }}
              className="mt-14 grid grid-cols-3 gap-4 max-w-xl border-t border-paper/10 pt-8"
            >
              {proof.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: easeExpo, delay: 1.1 + i * 0.12 }}
                >
                  <div className="font-display text-[1.9rem] sm:text-[2.3rem] font-semibold leading-none text-signal">
                    {p.value}
                  </div>
                  <div className="mt-2 text-[0.82rem] leading-snug text-paper/60">
                    {p.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* right: signature growth map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: easeExpo, delay: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-paper/10 bg-gradient-to-b from-paper/[0.06] to-transparent p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-signal" />
                  <span className="eyebrow text-paper/60">Live territory</span>
                </div>
                <div className="flex items-center gap-1 text-signal">
                  <Star size={13} className="fill-signal" />
                  <span className="text-[0.78rem] font-mono">booking up</span>
                </div>
              </div>
              <GrowthMap />
              <div className="mt-4 flex items-center justify-between text-[0.78rem] font-mono text-paper/50">
                <span>7 accounts active</span>
                <span className="text-signal">revenue ↑ 214%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* bottom scallop into paper */}
      <div className="h-10 bg-paper rounded-t-[2.5rem] relative z-10" />
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: easeExpo, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
