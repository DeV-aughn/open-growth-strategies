import { motion } from "motion/react";
import { Star } from "lucide-react";
import { testimonials } from "../content";
import { Reveal, easeExpo } from "../lib/motion";

/** Principles 8 & 10 — social proof with real names. */
export function Testimonials() {
  return (
    <section className="bg-paper py-24 lg:py-36">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow text-accent">In their words</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display font-semibold leading-[1.03] tracking-tight text-[clamp(2rem,4.6vw,3.6rem)]">
                Owners who stopped chasing work.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <div className="flex items-center gap-3 rounded-full border border-line px-5 py-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <span className="text-[0.9rem] font-medium">4.9 · 40+ reviews</span>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: easeExpo, delay: (i % 2) * 0.1 }}
              className="rounded-2xl border border-line bg-paper-warm/50 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex mb-5">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="font-display text-[1.35rem] leading-snug tracking-tight text-ink">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-7 flex items-center gap-3.5 pt-6 border-t border-line-soft">
                <div className="grid place-items-center w-11 h-11 rounded-full bg-ink text-paper font-display font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[0.98rem]">{t.name}</div>
                  <div className="text-[0.85rem] text-ink-mute">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
