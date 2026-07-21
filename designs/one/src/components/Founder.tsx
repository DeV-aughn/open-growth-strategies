import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { brand } from "../content";
import { Reveal, easeExpo } from "../lib/motion";

/** Principle 10 — real human, by name + a Golden-Rule-style pledge with signature. */
export function Founder() {
  return (
    <section id="about" className="bg-paper py-24 lg:py-36">
      <div className="container-x">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
          {/* portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easeExpo }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-line aspect-[4/5]">
              <img
                src="/alex-placeholder.svg"
                alt={`${brand.founder}, ${brand.founderRole}`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* floating credential card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeExpo, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl bg-ink text-paper p-5 shadow-xl max-w-[220px]"
            >
              <div className="font-display text-[2rem] font-semibold leading-none text-signal">
                1:1
              </div>
              <p className="mt-2 text-[0.85rem] text-paper/70 leading-snug">
                You work directly with me. No hand-off to a junior you never meet.
              </p>
            </motion.div>
          </motion.div>

          {/* story + pledge */}
          <div>
            <Reveal>
              <span className="eyebrow text-accent">Meet the founder</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-tight text-[clamp(2rem,4.4vw,3.4rem)]">
                Hi, I'm {brand.founder}.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 text-[1.1rem] leading-relaxed text-ink/75 max-w-xl">
                I started {brand.name} because service businesses deserve a marketing
                partner who acts like an owner — not a vendor who hides the price, buries
                the reporting, and disappears after the invoice clears.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-[1.1rem] leading-relaxed text-ink/75 max-w-xl">
                So I built the opposite. Transparent pricing. One clear system. Every
                dollar tracked to the job it created.
              </p>
            </Reveal>

            {/* The pledge */}
            <Reveal delay={0.26}>
              <div className="mt-9 rounded-2xl border border-line bg-paper-warm/50 p-7">
                <span className="eyebrow text-accent">The Open pledge</span>
                <p className="mt-4 font-display text-[1.35rem] leading-snug tracking-tight text-ink">
                  “I'll treat your marketing budget like it's coming out of my own
                  pocket — because the only way I grow is by making you money you can
                  count.”
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <Signature />
                  <div className="text-right">
                    <div className="font-semibold text-[0.95rem]">{brand.founder}</div>
                    <div className="text-[0.82rem] text-ink-mute">{brand.founderRole}</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a href={brand.calLink} className="btn btn-primary mt-8">
                Talk to me directly
                <ArrowUpRight size={18} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Signature() {
  return (
    <svg width="150" height="52" viewBox="0 0 150 52" fill="none" aria-hidden>
      <path
        d="M4 38 C14 20 20 12 24 20 C27 26 20 40 24 42 C30 45 34 20 40 18 C44 17 40 38 44 40 C50 43 54 22 60 24 C64 25 58 40 64 40 C72 40 74 18 82 16 C88 15 82 40 90 40 C100 40 104 22 112 20 C120 18 116 40 124 38 C132 36 138 26 146 22"
        stroke="#0a7a4f"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
