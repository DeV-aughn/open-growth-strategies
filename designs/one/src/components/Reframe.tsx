import { Reveal, WordReveal } from "../lib/motion";

/** Principle 9 — reframe the buyer's assumption. */
export function Reframe() {
  return (
    <section className="bg-paper py-24 lg:py-36">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow text-accent">The real problem</span>
        </Reveal>
        <div className="mt-6 max-w-4xl">
          <h2 className="font-display font-medium leading-[1.08] tracking-tight text-[clamp(1.9rem,4.4vw,3.4rem)]">
            <WordReveal text="Your competitors aren't better than you." />{" "}
            <span className="text-ink-mute">
              <WordReveal
                text="They're just easier to find at 2pm on a Tuesday — and easier to say yes to."
                delay={0.2}
              />
            </span>
          </h2>
        </div>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-[1.1rem] leading-relaxed text-ink/70">
            Most owners think they need more leads. Usually they need a{" "}
            <strong className="font-semibold text-ink">presence</strong> — a brand,
            a site, and a system that makes choosing you the obvious move. That's the
            entire job of {" "}
            <span className="text-accent font-semibold">The Full-Book System.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
