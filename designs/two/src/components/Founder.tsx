import { Reveal } from "../lib/motion";
import { founder } from "../content";

export function Founder() {
  return (
    <section id="founder" className="section-rule py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="section-no">{founder.no}</span>
            <span className="eyebrow">{founder.eyebrow}</span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
          <Reveal delay={0.05}>
            <div className="card edge-lit p-7">
              {/* Portrait placeholder — swap for a real photo (principle 10) */}
              <div className="flex h-44 items-center justify-center rounded-lg bg-surface-3 font-mono text-3xl text-ink-3">
                AS
              </div>
              <div className="mt-5">
                <div className="text-lg font-medium tracking-tight">
                  {founder.name}
                </div>
                <div className="mt-0.5 text-[0.85rem] text-ink-subtle">
                  {founder.role}
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {founder.credentials.map((c) => (
                  <span key={c} className="pill text-[0.7rem]!">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="max-w-xl">
              {founder.bio.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="mt-5 first:mt-0 text-[1.05rem] leading-relaxed text-ink-muted"
                >
                  {p}
                </p>
              ))}

              {/* The pledge — Golden Rule equivalent, with signature */}
              <div className="card edge-lit mt-8 p-6">
                <p className="text-[0.98rem] leading-relaxed text-ink">
                  “{founder.pledge}”
                </p>
                <div className="mt-4 font-mono text-[0.85rem] text-accent-hover">
                  {founder.signature}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
