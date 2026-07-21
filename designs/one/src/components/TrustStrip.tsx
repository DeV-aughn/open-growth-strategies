import { trustWords } from "../content";

export function TrustStrip() {
  const row = [...trustWords, ...trustWords];
  return (
    <section className="bg-paper py-10 border-b border-line-soft">
      <p className="container-x eyebrow text-ink-mute text-center mb-6">
        A growth engine built for high-margin service businesses
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max gap-3">
          {row.map((w, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-line px-5 py-2.5 text-[0.95rem] font-medium text-ink/75"
            >
              {w}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
