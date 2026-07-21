import { Reveal } from "../lib/motion";
import { brand, finalCta } from "../content";
import { AIBookingAgent } from "./ui/ai-booking-agent";

export function FinalCTA() {
  return (
    <section id="book" className="section-rule py-16 md:py-24">
      <div className="container-x">
        <Reveal>
          <div className="card edge-lit rounded-3xl! p-6 md:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left — the pitch + book button */}
              <div className="text-center lg:text-left">
                <span className="pill">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  {brand.scarcity}
                </span>
                <h2 className="display-md mt-5 text-[1.7rem] md:text-4xl">
                  {finalCta.heading}
                </h2>
                <p className="mx-auto mt-4 max-w-md text-[0.98rem] leading-relaxed text-ink-muted lg:mx-0">
                  {finalCta.sub}
                </p>
                <div className="mt-6">
                  <a
                    href={`mailto:${brand.email}`}
                    className="btn btn-primary btn-lg"
                  >
                    {finalCta.cta}
                  </a>
                </div>
                <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
                  {finalCta.meta.map((m) => (
                    <li
                      key={m}
                      className="flex items-center gap-1.5 text-[0.8rem] text-ink-subtle"
                    >
                      <span className="text-success" aria-hidden>
                        ✓
                      </span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — the AI booking agent, side by side */}
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="hairline-x flex-1" />
                  <span className="text-[0.72rem] uppercase tracking-wider text-ink-3">
                    or book instantly
                  </span>
                  <span className="hairline-x flex-1" />
                </div>
                <AIBookingAgent />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
