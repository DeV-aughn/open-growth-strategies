import { Reveal } from "../lib/motion";

/** Numbered section opener — the growthwebsites signature in Linear clothes. */
export function SectionHeader({
  no,
  eyebrow,
  heading,
  sub,
}: {
  no: string;
  eyebrow: string;
  heading: string;
  sub?: string;
}) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4">
        <span className="section-no">{no}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="display-md mt-4 max-w-2xl text-3xl md:text-[2.5rem]">
        {heading}
      </h2>
      {sub && (
        <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-ink-muted">
          {sub}
        </p>
      )}
    </Reveal>
  );
}
