import { motion } from "motion/react";
import { Reveal, stagger, staggerChild } from "../lib/motion";
import { engine, dashboard } from "../content";
import { SectionHeader } from "./SectionHeader";

export function Engine() {
  return (
    <section id="engine" className="section-rule py-20 md:py-28">
      <div className="container-x">
        <SectionHeader
          no={engine.no}
          eyebrow={engine.eyebrow}
          heading={engine.heading}
          sub={engine.sub}
        />

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-70px" }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {engine.steps.map((step) => (
            <motion.li
              key={step.no}
              variants={staggerChild}
              className="card edge-lit p-6"
            >
              <span className="section-no">{step.no}</span>
              <h3 className="mt-3 text-lg font-medium tracking-tight">
                {step.name}
              </h3>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-muted">
                {step.desc}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        {/* The dashboard mock — signature visual asset, framed like a product screenshot */}
        <Reveal delay={0.1} className="mt-14">
          <div className="card edge-lit rounded-2xl! p-3 md:p-5">
            <div className="rounded-xl border border-hairline bg-canvas overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center justify-between border-b border-hairline px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-surface-4" />
                  <span className="h-2.5 w-2.5 rounded-full bg-surface-4" />
                  <span className="h-2.5 w-2.5 rounded-full bg-surface-4" />
                </div>
                <span className="font-mono text-[0.7rem] text-ink-3">
                  {dashboard.title}
                </span>
                <span className="pill py-0.5! text-[0.68rem]!">{dashboard.period}</span>
              </div>

              {/* Stat row */}
              <div className="grid grid-cols-2 gap-px bg-hairline md:grid-cols-4">
                {dashboard.stats.map((s) => (
                  <div key={s.label} className="bg-canvas px-5 py-4">
                    <div className="text-[0.72rem] text-ink-subtle">{s.label}</div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="metric text-xl text-ink">{s.value}</span>
                      <span
                        className={`font-mono text-[0.68rem] ${
                          s.delta === "flat" ? "text-ink-3" : "text-success"
                        }`}
                      >
                        {s.delta === "flat" ? "capped" : `↑ ${s.delta.replace("+", "")}`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Source rows */}
              <div className="border-t border-hairline">
                <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-5 py-2 font-mono text-[0.66rem] uppercase tracking-wider text-ink-3">
                  <span>Source</span>
                  <span className="w-14 text-right">Calls</span>
                  <span className="w-14 text-right">Jobs</span>
                </div>
                {dashboard.rows.map((r) => (
                  <div
                    key={r.source}
                    className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-t border-hairline px-5 py-3"
                  >
                    <span className="truncate text-[0.85rem] text-ink-muted">
                      {r.source}
                    </span>
                    <span className="metric w-14 text-right text-[0.85rem] text-ink">
                      {r.calls}
                    </span>
                    <span className="metric w-14 text-right text-[0.85rem] text-success">
                      {r.jobs}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="px-2 pt-3 pb-1 text-center text-[0.78rem] text-ink-subtle">
              Every client gets this dashboard. It's how a per-job fee stays auditable.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
