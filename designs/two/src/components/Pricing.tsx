import { motion } from "motion/react";
import { Reveal, stagger, staggerChild } from "../lib/motion";
import { brand, pricing } from "../content";
import { SectionHeader } from "./SectionHeader";

export function Pricing() {
  return (
    <section id="pricing" className="section-rule py-20 md:py-28">
      <div className="container-x">
        <SectionHeader
          no={pricing.no}
          eyebrow={pricing.eyebrow}
          heading={pricing.heading}
          sub={pricing.sub}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-70px" }}
          className="mt-12 grid gap-4 md:grid-cols-2 max-w-4xl"
        >
          {pricing.tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={staggerChild}
              className={`${tier.featured ? "card-2" : "card"} edge-lit flex flex-col p-7`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium tracking-tight">{tier.name}</h3>
                {tier.featured && (
                  <span className="pill text-[0.68rem]! text-accent-hover!">
                    Most operators start here
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="metric text-4xl">{tier.price}</span>
                <span className="text-[0.85rem] text-ink-subtle">
                  {tier.priceNote}
                </span>
              </div>
              <div className="mt-1.5 font-mono text-[0.8rem] text-accent-hover">
                + {tier.plus}
              </div>

              <ul className="mt-6 flex-1 space-y-2.5 border-t border-hairline pt-5">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[0.9rem] text-ink-muted">
                    <span className="mt-[3px] text-success" aria-hidden>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={brand.calLink}
                className={`btn ${tier.featured ? "btn-primary" : "btn-secondary"} mt-7 w-full`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-[0.9rem] leading-relaxed text-ink-subtle">
            {pricing.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
