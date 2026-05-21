import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Universe", href: "#hero" },
  { label: "Learning", href: "#learning" },
  { label: "Classroom", href: "#classroom" },
  { label: "Safety", href: "#safety" },
  { label: "Gallery", href: "#gallery" },
  { label: "Parents", href: "#parents" },
  { label: "Admissions", href: "#admissions" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-7xl glass-strong rounded-[2rem] px-4 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between shadow-[0_8px_32px_-8px_oklch(0_0_0/0.5)] gap-2">
        <a href="#hero" className="flex items-center gap-2 sm:gap-2.5 group min-w-0">
          <span className="relative shrink-0 size-8 sm:size-9 rounded-xl bg-[var(--gradient-cosmic)] grid place-items-center shadow-[var(--shadow-glow-purple)] transition-transform group-hover:scale-105">
            <Sparkles className="size-3.5 sm:size-4 text-premium-dark" strokeWidth={2.5} />
          </span>
          <span className="font-display text-base sm:text-xl font-semibold tracking-tight truncate">
            Kidzania <span className="text-aqua-dream">Daycare</span>
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-medium uppercase tracking-[0.18em] text-foreground/60">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-sky-pink transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <a
            href="#admissions"
            className="hidden md:inline-flex px-5 py-2 rounded-full text-sm font-bold bg-[var(--gradient-cosmic)] text-white drop-shadow-md shadow-[var(--shadow-glow-pink)] hover:scale-[1.03] transition-transform"
          >
            Enroll Now
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-full glass-strong text-foreground"
          >
            {isOpen ? <X className="size-4 sm:size-5" /> : <Menu className="size-4 sm:size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 glass-strong rounded-2xl p-4 shadow-[0_8px_32px_-8px_oklch(0_0_0/0.5)] flex flex-col gap-4 border border-white/5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl hover:bg-white/5 transition-colors text-sm font-medium uppercase tracking-[0.18em] text-foreground/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#admissions"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full text-center px-5 py-3 rounded-xl text-sm font-bold bg-[var(--gradient-cosmic)] text-white drop-shadow-md shadow-[var(--shadow-glow-pink)]"
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
}
