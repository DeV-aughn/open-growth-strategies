import { motion } from "motion/react";
import { Reveal, stagger, staggerChild } from "../lib/motion";
import { proofSection } from "../content";
import { SectionHeader } from "./SectionHeader";
import { BackgroundPaths } from "./ui/background-paths";

export function Proof() {
  return (
    <section
      id="proof"
      className="section-rule overflow-hidden py-20 md:py-28"
    >
      {/* Animated background paths — native recreation of kokonutd/background-paths */}
      <BackgroundPaths color="#5e6ad2" className="opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-canvas to-transparent" />

      <div className="container-x relative z-10">
        <SectionHeader
          no={proofSection.no}
          eyebrow={proofSection.eyebrow}
          heading={proofSection.heading}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-70px" }}
          className="mt-12 grid gap-4 lg:grid-cols-3"
        >
          {proofSection.operators.map((op) => (
            <motion.figure
              key={op.name}
              variants={staggerChild}
              className="card edge-lit flex flex-col p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-3 font-mono text-[0.78rem] text-ink-muted">
                    {op.initials}
                  </span>
                  <div>
                    <figcaption className="text-[0.92rem] font-medium">
                      {op.name}
                    </figcaption>
                    <div className="text-[0.78rem] text-ink-subtle">
                      {op.company} · {op.trade}
                    </div>
                  </div>
                </div>
              </div>

              <blockquote className="mt-5 flex-1 text-[1.02rem] leading-relaxed text-ink-muted">
                “{op.quote}”
              </blockquote>

              <div className="mt-6 flex items-baseline gap-2 border-t border-hairline pt-4">
                <span className="metric text-xl text-accent-hover">{op.metric}</span>
                <span className="text-[0.8rem] text-ink-subtle">
                  {op.metricLabel}
                </span>
              </div>
            </motion.figure>
          ))}
        </motion.div>

        {/* Recent builds strip */}
        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
            <span className="eyebrow mr-3">{proofSection.buildsLabel}</span>
            {proofSection.builds.map((b) => (
              <span key={b.name} className="pill">
                <span className="text-ink">{b.name}</span>
                <span className="text-ink-3">{b.meta}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
