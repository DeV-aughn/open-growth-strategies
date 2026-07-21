import { useEffect, useState } from "react";
import { brand, nav } from "../content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-canvas/85 backdrop-blur-md border-b border-hairline" : ""
      }`}
    >
      <div className="container-x flex h-14 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 100 100" aria-hidden>
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
          <span className="text-[0.95rem] font-semibold tracking-tight">
            {brand.short}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-subtle hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={brand.calLink} className="btn btn-primary">
            Book a fit call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block h-px w-5 bg-ink transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline bg-canvas/95 backdrop-blur-md">
          <div className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[0.95rem] text-ink-muted hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={brand.calLink}
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-3 w-full"
            >
              Book a fit call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
