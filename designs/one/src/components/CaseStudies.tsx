import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cases, brand } from "../content";
import { Reveal, easeExpo } from "../lib/motion";

/** Principle 7 — case study titles are the outcome, not the client name. */
export function CaseStudies() {
  return (
    <section id="results" className="bg-paper py-24 lg:py-36">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow text-accent">Proof, not promises</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display font-semibold leading-[1.03] tracking-tight text-[clamp(2rem,4.6vw,3.6rem)]">
                Outcomes we can put a number on.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <a href={brand.calLink} className="btn btn-ghost shrink-0">
              Get results like these
              <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: easeExpo, delay: (i % 3) * 0.1 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-line bg-paper-warm/60 p-7 hover:border-ink/25 hover:-translate-y-1 transition-all duration-500 min-h-[280px]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="rounded-full bg-ink/5 px-3 py-1 text-[0.75rem] font-mono font-medium text-ink/70">
                    {c.vertical}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-ink/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display text-[2.6rem] font-semibold leading-none text-accent">
                    {c.metric}
                  </span>
                  <span className="text-[0.85rem] text-ink-mute leading-tight max-w-[7rem]">
                    {c.metricLabel}
                  </span>
                </div>
                <h3 className="font-display text-[1.28rem] font-medium leading-snug tracking-tight">
                  {c.title}
                </h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-line-soft">
                {c.tags.map((t) => (
                  <span key={t} className="text-[0.76rem] text-ink-mute">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
