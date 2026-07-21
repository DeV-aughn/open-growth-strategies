import { brand, footer } from "../content";

export function Footer() {
  return (
    <footer className="section-rule py-14">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <div className="flex items-center gap-2.5">
              <svg width="20" height="20" viewBox="0 0 100 100" aria-hidden>
                <rect width="100" height="100" rx="22" fill="#0f1011" />
                <path
                  d="M26 68 L46 46 L58 58 L76 32"
                  fill="none"
                  stroke="#5e6ad2"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="76" cy="32" r="7" fill="#828fff" />
              </svg>
              <span className="text-[0.92rem] font-semibold tracking-tight">
                {brand.name}
              </span>
            </div>
            <p className="mt-3 text-[0.85rem] text-ink-subtle">{footer.tagline}</p>
          </div>

          <div className="flex gap-16">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <div className="eyebrow">{col.title}</div>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[0.85rem] text-ink-subtle hover:text-ink transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Animated white → black gradient sweep */}
        <div className="footer-sweep mt-14 h-0.5 w-full rounded-full" aria-hidden />

        <div className="mt-8 flex flex-col gap-2 border-t border-hairline pt-6 text-[0.75rem] text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © 2026 {brand.name}, {brand.location}.
          </span>
          <span>{footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
