import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { easeExpo, stagger, staggerChild } from "../lib/motion";
import { faq } from "../content";
import { SectionHeader } from "./SectionHeader";

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="section-rule py-20 md:py-28">
      <div className="container-x">
        <SectionHeader no={faq.no} eyebrow={faq.eyebrow} heading={faq.heading} />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-70px" }}
          className="mt-12 max-w-3xl divide-y divide-hairline border-y border-hairline"
        >
          {faq.items.map((item, i) => {
            const open = openIdx === i;
            return (
              <motion.div key={item.q} variants={staggerChild}>
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-[1rem] font-medium text-ink">
                    {item.q}
                  </span>
                  <span
                    className={`font-mono text-ink-3 transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: easeExpo }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-[0.95rem] leading-relaxed text-ink-muted">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
