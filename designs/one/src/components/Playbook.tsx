import { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, ArrowRight, Check } from "lucide-react";
import { Reveal, easeExpo } from "../lib/motion";

const chapters = [
  "Why more leads won't fix a presence problem",
  "The six-second test every service site fails",
  "How to price so buyers qualify themselves",
  "The follow-up sequence that books the job",
  "Reading your numbers without a data team",
];

/** Principle 11 — a signature guide as the authority flywheel, email-gated. */
export function Playbook() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-paper-dim py-24 lg:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* book mock */}
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <motion.div
                initial={{ rotate: -6, y: 20, opacity: 0 }}
                whileInView={{ rotate: -6, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: easeExpo }}
                whileHover={{ rotate: 0, y: -6 }}
                className="relative rounded-r-xl rounded-l-md bg-ink text-paper p-9 shadow-2xl shadow-ink/30 aspect-[3/4] flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute left-0 inset-y-0 w-2 bg-signal/80" />
                <div className="pointer-events-none absolute -right-16 -top-16 w-56 h-56 rounded-full bg-signal/10 blur-2xl" />
                <div>
                  <BookOpen size={30} className="text-signal" />
                  <div className="mt-6 eyebrow text-paper/50">The free playbook</div>
                </div>
                <div>
                  <h3 className="font-display text-[2.1rem] font-semibold leading-[1.05] tracking-tight">
                    The Boring Business Growth Playbook
                  </h3>
                  <p className="mt-3 text-[0.9rem] text-paper/60">
                    How high-margin service businesses fill their schedule in 90 days.
                  </p>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* capture */}
          <div>
            <Reveal>
              <span className="eyebrow text-accent">Steal the system</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display font-semibold leading-[1.05] tracking-tight text-[clamp(1.9rem,4.2vw,3.2rem)]">
                The whole playbook. Free. No call required.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <ul className="mt-8 flex flex-col gap-3">
                {chapters.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[1.02rem] text-ink/80">
                    <span className="mt-1 grid place-items-center w-4 h-4 rounded-full bg-accent/12 text-accent shrink-0">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              {sent ? (
                <div className="mt-9 flex items-center gap-3 rounded-full bg-accent/10 px-6 py-4 text-accent font-medium">
                  <Check size={18} /> On its way to your inbox. Check your spam, just in case.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email.includes("@")) setSent(true);
                  }}
                  className="mt-9 flex flex-col sm:flex-row gap-3 max-w-md"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourbusiness.com"
                    className="flex-1 rounded-full border border-line bg-paper px-5 py-3.5 text-[0.98rem] outline-none focus:border-ink transition-colors"
                  />
                  <button type="submit" className="btn btn-primary justify-center whitespace-nowrap">
                    Send it
                    <ArrowRight size={17} />
                  </button>
                </form>
              )}
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-4 text-[0.85rem] text-ink-mute">
                No spam. Unsubscribe anytime. It's genuinely useful — that's the point.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
