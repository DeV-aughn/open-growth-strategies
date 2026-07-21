import { brand } from "../content";

const cols = [
  {
    title: "Company",
    links: [
      { label: "The System", href: "#system" },
      { label: "Results", href: "#results" },
      { label: "Pricing", href: "#pricing" },
      { label: "About", href: "#about" },
    ],
  },
  {
    title: "Who we help",
    links: [
      { label: "HVAC", href: "#" },
      { label: "Pool & Spa", href: "#" },
      { label: "Plumbing", href: "#" },
      { label: "Junk Removal", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "The Playbook", href: "#" },
      { label: "Case studies", href: "#results" },
      { label: "Book a call", href: "#book" },
      { label: "Contact", href: `mailto:${brand.email}` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-x pt-20 pb-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 lg:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-paper/10">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
                  <path
                    d="M24 66 L44 44 L58 56 L78 30"
                    stroke="#1fe089"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="78" cy="30" r="7" fill="#1fe089" />
                </svg>
              </span>
              <span className="font-display font-semibold text-[1.1rem] tracking-tight">
                {brand.name}
              </span>
            </div>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-paper/60 max-w-xs">
              The growth partner that puts the price on the page. Built for service
              businesses in {brand.location} and beyond.
            </p>
            <div className="mt-6 flex flex-col gap-1 text-[0.92rem] text-paper/70">
              <a href={`mailto:${brand.email}`} className="hover:text-signal transition-colors">
                {brand.email}
              </a>
              <a href={`tel:${brand.phone}`} className="hover:text-signal transition-colors">
                {brand.phone}
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="eyebrow text-paper/40 mb-5">{col.title}</div>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[0.95rem] text-paper/70 hover:text-paper transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-paper/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.85rem] text-paper/45">
            © 2026 {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[0.85rem] text-paper/45">
            <a href="#" className="hover:text-paper/70 transition-colors">Privacy</a>
            <a href="#" className="hover:text-paper/70 transition-colors">Terms</a>
            <span>Made in {brand.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
