import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 pt-16 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 pb-12">
          <div className="max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-5">
              <span className="size-9 rounded-xl bg-[var(--gradient-cosmic)] grid place-items-center">
                <Sparkles className="size-4 text-premium-dark" strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl font-semibold">Kidzania Quantum</span>
            </div>
            <p className="text-sm text-foreground/45 leading-relaxed">
              The world's first cinematic preschool ecosystem — redefining early
              childhood education through the lens of wonder.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 text-sm w-full lg:w-auto mt-8 lg:mt-0 text-center sm:text-left">
            <FooterCol
              title="Universe"
              items={["Curriculum", "Classroom", "Safety", "Admissions"]}
            />
            <FooterCol title="Parents" items={["Portal", "Events", "Memory Wall", "Support"]} />
            <div className="col-span-2 sm:col-span-1 mt-4 sm:mt-0">
              <FooterCol title="Connect" items={["WhatsApp", "Instagram", "Location", "Press"]} />
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.2em] text-foreground/30 text-center md:text-left">
          <span>© 2026 Kidzania QuantumVerse</span>
          <span className="flex flex-wrap justify-center gap-2">
            <span>Made with wonder</span>
            <span className="hidden sm:inline">·</span>
            <span>Privacy</span>
            <span className="hidden sm:inline">·</span>
            <span>Terms</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/60 mb-4">
        {title}
      </h5>
      <ul className="space-y-2 text-foreground/45">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="hover:text-foreground transition-colors">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
