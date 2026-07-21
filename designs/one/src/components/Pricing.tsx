import { motion } from "motion/react";
import { Check, ArrowUpRight } from "lucide-react";
import { tiers, brand } from "../content";
import { Reveal, easeExpo } from "../lib/motion";

/** Principles 3 & 4 — published pricing, tiered to self-qualify. The moat. */
export function Pricing() {
  return (
    <section id="pricing" className="bg-paper-dim py-24 lg:py-36">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <Reveal>
            <span className="eyebrow text-accent">Real numbers · no forms</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display font-semibold leading-[1.03] tracking-tight text-[clamp(2rem,4.6vw,3.6rem)]">
              We put the price on the page.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 text-[1.1rem] leading-relaxed text-ink/70">
              Almost no one in this industry does this. We do — because if the numbers
              work for you, you'll arrive ready. If they don't, you've saved us both a
              call. That's what "Open" means.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 items-stretch">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.75, ease: easeExpo, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                t.best
                  ? "bg-ink text-paper shadow-2xl shadow-ink/20 lg:-mt-4 lg:mb-4"
                  : "bg-paper border border-line"
              }`}
            >
              {t.best && (
                <span className="absolute -top-3 left-8 rounded-full bg-signal px-3 py-1 text-[0.72rem] font-mono font-semibold text-ink">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-display text-[1.6rem] font-semibold tracking-tight">
                {t.name}
              </h3>
              <p className={`mt-2 text-[0.92rem] leading-snug ${t.best ? "text-paper/60" : "text-ink-mute"}`}>
                {t.tagline}
              </p>

              <div className="mt-7 flex items-baseline gap-2">
                <span className="font-display text-[2.7rem] font-semibold leading-none">
                  {t.price}
                </span>
                <span className={`text-[0.85rem] ${t.best ? "text-paper/55" : "text-ink-mute"}`}>
                  {t.priceNote}
                </span>
              </div>

              <div className={`my-7 h-px ${t.best ? "bg-paper/12" : "bg-line"}`} />

              <ul className="flex flex-col gap-3.5 flex-1">
                {t.features.map((f) => {
                  const isHeader = f.endsWith("plus:");
                  return (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-[0.94rem] leading-snug ${
                        isHeader
                          ? `font-semibold ${t.best ? "text-paper" : "text-ink"}`
                          : t.best
                          ? "text-paper/80"
                          : "text-ink/80"
                      }`}
                    >
                      {!isHeader && (
                        <span
                          className={`mt-0.5 grid place-items-center w-4 h-4 rounded-full shrink-0 ${
                            t.best ? "bg-signal text-ink" : "bg-accent/12 text-accent"
                          }`}
                        >
                          <Check size={11} strokeWidth={3} />
                        </span>
                      )}
                      <span className={isHeader ? "pt-1" : ""}>{f}</span>
                    </li>
                  );
                })}
              </ul>

              <a
                href={brand.calLink}
                className={`btn mt-8 justify-center ${
                  t.best ? "btn-signal" : "btn-primary"
                }`}
              >
                {t.cta}
                <ArrowUpRight size={17} />
              </a>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-[0.95rem] text-ink-mute">
            Not sure which fits?{" "}
            <a href={brand.calLink} className="text-accent font-semibold underline underline-offset-4 hover:no-underline">
              Book a 15-minute qualifier call
            </a>{" "}
            — we'll tell you straight.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
