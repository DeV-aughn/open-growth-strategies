import { ArrowUpRight, Calendar, Clock, ShieldCheck } from "lucide-react";
import { brand } from "../content";
import { Reveal, WordReveal } from "../lib/motion";
import { GrowthMap } from "./GrowthMap";

/** The booking module — every CTA on the site lands here. */
export function FinalCTA() {
  return (
    <section id="book" className="relative bg-ink text-paper overflow-hidden">
      <div className="pointer-events-none absolute -top-20 right-0 w-[600px] h-[600px] rounded-full bg-signal/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-signal/5 blur-[110px]" />

      <div className="container-x relative py-24 lg:py-36">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <Reveal>
              <span className="eyebrow text-signal">Let's fill your schedule</span>
            </Reveal>
            <h2 className="mt-6 font-display font-semibold leading-[1.0] tracking-tight text-[clamp(2.4rem,5.6vw,4.6rem)]">
              <WordReveal text="Book a 30-minute intro call." />
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-6 text-[1.15rem] leading-relaxed text-paper/70 max-w-xl">
                No pitch deck, no pressure. We'll look at where your presence leaks
                jobs, and I'll tell you honestly whether {brand.short} is the right
                fit — or point you somewhere better.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-9 flex flex-wrap items-center gap-3.5">
                <a href="#book-form" className="btn btn-signal">
                  Grab a time
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href={`mailto:${brand.email}`}
                  className="btn btn-ghost !border-paper/20 !text-paper hover:!border-paper"
                >
                  Or email me
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                {[
                  { icon: Clock, label: "30 minutes" },
                  { icon: Calendar, label: "Booking August 2026" },
                  { icon: ShieldCheck, label: "No obligation" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5 text-paper/70">
                    <f.icon size={17} className="text-signal" />
                    <span className="text-[0.92rem]">{f.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* booking card (calendar embed placeholder) */}
          <Reveal delay={0.15}>
            <div
              id="book-form"
              className="rounded-3xl border border-paper/12 bg-paper/[0.04] p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-signal text-ink">
                  <Calendar size={20} />
                </span>
                <div>
                  <div className="font-display text-[1.2rem] font-semibold">
                    Intro call · {brand.founder}
                  </div>
                  <div className="text-[0.85rem] text-paper/55">30 min · video or phone</div>
                </div>
              </div>

              <div className="opacity-70 -mx-2">
                <GrowthMap />
              </div>

              <p className="mt-4 text-center text-[0.82rem] font-mono text-paper/45">
                ↑ Your calendar embed drops in here (Calendly / SavvyCal)
              </p>

              <a href={`mailto:${brand.email}`} className="btn btn-signal w-full justify-center mt-5">
                Request a time
                <ArrowUpRight size={17} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
