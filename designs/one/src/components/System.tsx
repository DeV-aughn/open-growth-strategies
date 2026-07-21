import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { pillars, brand } from "../content";
import { Reveal, easeExpo } from "../lib/motion";

/** Principle 6 — the named proprietary system, as a product. */
export function System() {
  return (
    <section id="system" className="relative bg-ink text-paper py-24 lg:py-36 overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-signal/8 blur-[130px]" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow text-signal">The product behind the agency</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display font-semibold leading-[1.02] tracking-tight text-[clamp(2.2rem,5vw,4rem)]">
              {brand.system}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-[1.12rem] leading-relaxed text-paper/65">
              Not a menu of services you have to assemble. One connected system with
              four moving parts — each one measured, each one feeding the next.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: easeExpo, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-paper/12 bg-paper/[0.03] p-7 hover:bg-paper/[0.06] transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute -right-6 -top-8 font-display text-[7rem] font-semibold text-paper/[0.04] leading-none select-none group-hover:text-signal/10 transition-colors duration-500">
                {p.no}
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 mb-5">
                  <span className="h-px w-8 bg-signal" />
                  <span className="font-mono text-[0.72rem] text-signal">{p.no}</span>
                </div>
                <h3 className="font-display text-[1.5rem] font-semibold tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-paper/60">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* connector line motif */}
        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl border border-paper/12 bg-paper/[0.03] p-7">
            <p className="text-[1.05rem] text-paper/75 max-w-xl">
              Every part reports to one live dashboard. You always know your{" "}
              <span className="text-signal font-medium">cost per job</span> and your{" "}
              <span className="text-signal font-medium">booked revenue</span>. No vanity metrics.
            </p>
            <a href={brand.calLink} className="btn btn-signal shrink-0">
              See it on a call
              <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
