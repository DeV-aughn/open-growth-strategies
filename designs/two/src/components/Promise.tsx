import { motion } from "motion/react";
import { stagger, staggerChild } from "../lib/motion";
import { promise } from "../content";
import { SectionHeader } from "./SectionHeader";

export function Promise() {
  return (
    <section id="promise" className="section-rule py-20 md:py-28">
      <div className="container-x">
        <SectionHeader
          no={promise.no}
          eyebrow={promise.eyebrow}
          heading={promise.heading}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-70px" }}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {promise.items.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerChild}
              className="card edge-lit p-6"
            >
              <div className="flex items-baseline gap-2">
                <span className="metric text-3xl text-ink">{item.metric}</span>
                <span className="text-[0.95rem] text-ink-subtle">
                  {item.title}
                </span>
              </div>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-muted">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
