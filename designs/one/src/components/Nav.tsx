import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { brand } from "../content";

const links = [
  { label: "The System", href: "#system" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-paper/85 backdrop-blur-xl border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="container-x flex items-center justify-between h-[72px]">
          <a href="#top" className="flex items-center gap-2.5 group">
            <Logo />
            <span className="font-display font-semibold text-[1.05rem] tracking-tight leading-none">
              Open Growth
              <span className="text-accent">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.92rem] font-medium text-ink/70 hover:text-ink transition-colors relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-ink hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#pricing" className="text-[0.92rem] font-medium text-ink/70 hover:text-ink transition-colors">
              See pricing
            </a>
            <a href={brand.calLink} className="btn btn-primary !py-2.5 !px-5 !text-[0.9rem]">
              Book an intro call
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-paper border-b border-line"
          >
            <div className="container-x py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium py-1"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={brand.calLink}
                onClick={() => setOpen(false)}
                className="btn btn-primary justify-center mt-2"
              >
                Book an intro call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Logo() {
  return (
    <span className="grid place-items-center w-9 h-9 rounded-xl bg-ink">
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
  );
}
