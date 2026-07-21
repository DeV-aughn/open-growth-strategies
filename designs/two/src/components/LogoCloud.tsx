import type { ReactNode } from "react";

/**
 * Logo cloud (native recreation of sshahaider/logo-cloud-3) — the tech stack as
 * a centered, slowly rotating marquee that pauses on hover; each item colorizes
 * to its brand hue. Icons are simplified, brand-neutral marks by their label.
 */
const logos: { name: string; color: string; icon: ReactNode }[] = [
  {
    name: "Antigravity",
    color: "#8ab4f8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8.5" r="3.3" />
        <path d="M12 2.4v1.4" />
        <path d="M5.8 14.5c1.6 2 3.8 3 6.2 3s4.6-1 6.2-3" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    color: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3.5 22 20.5H2Z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    color: "#3ecf8e",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.7 2.6c.45-.55 1.35-.13 1.35.58v6.32h4.9c.9 0 1.35 1.06.72 1.7l-9.4 9.9c-.45.55-1.35.13-1.35-.58v-6.32H5.3c-.9 0-1.35-1.06-.72-1.7L13.7 2.6Z" />
      </svg>
    ),
  },
  {
    name: "Pinecone",
    color: "#4fd1c5",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c2.6 1.7 4 4.5 4 8.3 0 4.3-2 8.2-4 9.7-2-1.5-4-5.4-4-9.7C8 6.5 9.4 3.7 12 2Z" opacity="0.28" />
        <path d="M12 4.4 9.6 8h4.8L12 4.4ZM8.9 8.6 12 12l3.1-3.4H8.9ZM8.3 12.6 12 16l3.7-3.4H8.3Z" />
      </svg>
    ),
  },
  {
    name: "Obsidian",
    color: "#a78bfa",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2 19 8 12 22 5 8Z" opacity="0.5" />
        <path d="M5 8 12 2 19 8 12 11Z" />
      </svg>
    ),
  },
  {
    name: "NVIDIA",
    color: "#76b900",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.6 9.2C7.2 6 12 4.9 16.2 6.6c3 1.2 4.4 3.6 4.4 3.6s-3 4.9-8.9 4.9c-2.2 0-4.1-.6-5.4-1.5 1.3.5 2.8.7 4.2.4 2.4-.5 3.9-2.5 3.6-4.6-.3-2-2.1-3.3-4.2-3.1-2.2.2-3.9 1.6-4.9 3.2-1.2.4-2.4 1.1-3.4 2.1.5-2 1.5-3.9 2.9-5.4-.7.4-1.4 1-1.9 1.6Z" />
      </svg>
    ),
  },
  {
    name: "Claude",
    color: "#d97757",
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          const r1 = 3;
          const r2 = i % 2 === 0 ? 9.3 : 7;
          return (
            <line
              key={i}
              x1={12 + Math.cos(a) * r1}
              y1={12 + Math.sin(a) * r1}
              x2={12 + Math.cos(a) * r2}
              y2={12 + Math.sin(a) * r2}
            />
          );
        })}
      </svg>
    ),
  },
];

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-x-14 pr-14"
      aria-hidden={ariaHidden || undefined}
    >
      {logos.map((l) => (
        <div
          key={l.name}
          className="group flex items-center gap-2.5"
          style={{ ["--c" as string]: l.color }}
        >
          <span className="h-9 w-9 text-ink-3 transition-colors duration-300 group-hover:text-[var(--c)]">
            {l.icon}
          </span>
          <span className="whitespace-nowrap text-[1.05rem] font-medium text-ink-subtle transition-colors duration-300 group-hover:text-ink">
            {l.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export function LogoCloud() {
  return (
    <section className="section-rule py-12 md:py-16">
      <div className="container-x mb-9">
        <p
          className="eyebrow text-center text-ink-3"
          style={{ fontSize: "1.1rem" }}
        >
          The stack behind the engine
        </p>
      </div>
      <div className="container-x">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div
            className="marquee-track flex w-max justify-center hover:[animation-play-state:paused]"
            style={{ animationDuration: "57s", animationDelay: "1.2s" }}
          >
            <LogoRow />
            <LogoRow ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
