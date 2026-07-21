import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { faqs } from "../content";
import { Reveal } from "../lib/motion";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-paper py-24 lg:py-36">
      <div className="container-x grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow text-accent">Straight answers</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display font-semibold leading-[1.03] tracking-tight text-[clamp(2rem,4.4vw,3.4rem)]">
              Questions, answered plainly.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 text-[1.05rem] text-ink/70 max-w-sm">
              Still wondering something? That's what the intro call is for — no pitch,
              just answers.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className="border-b border-line">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  >
                    <span className="font-display text-[1.22rem] font-medium tracking-tight group-hover:text-accent transition-colors">
                      {f.q}
                    </span>
                    <span
                      className={`grid place-items-center w-8 h-8 rounded-full border border-line shrink-0 transition-all duration-300 ${
                        isOpen ? "rotate-45 bg-ink text-paper border-ink" : "text-ink"
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-12 text-[1.02rem] leading-relaxed text-ink/70">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
