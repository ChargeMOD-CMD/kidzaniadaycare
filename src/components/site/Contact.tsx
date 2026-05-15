import { MessageCircle, MapPin, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div>
            <span className="text-aqua-dream font-semibold tracking-[0.2em] uppercase text-xs">
              Visit the Universe
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-4 leading-tight text-balance">
              Let's start the <span className="text-gradient-cosmic">journey together</span>.
            </h2>
            <p className="mt-5 text-foreground/60 max-w-md">
              Drop by, call, or chat. Our doors and our hearts are open.
            </p>

            <div className="mt-10 space-y-3">
              <ContactCard icon={MapPin} label="Main Campus" value="127 Quantum Avenue, Dreamscape District" />
              <ContactCard icon={Phone} label="Reception" value="+1 (555) 010-2025" />
              <ContactCard icon={Mail} label="Admissions" value="hello@kidzania.quantum" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--gradient-cosmic)] text-white drop-shadow-md font-bold shadow-[var(--shadow-glow-pink)] hover:scale-[1.03] transition-transform"
              >
                <MessageCircle className="size-4" />
                WhatsApp Us
              </a>
              <div className="flex gap-2">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="size-11 rounded-full glass grid place-items-center hover:bg-white/15 transition-colors"
                    aria-label="social"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map / location universe */}
          <div className="relative rounded-[40px] glass-strong p-2 min-h-[440px] overflow-hidden">
            <div className="absolute inset-2 rounded-[32px] overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, oklch(0.7 0.16 285 / 0.5), transparent 50%), radial-gradient(circle at 70% 70%, oklch(0.85 0.12 340 / 0.4), transparent 50%), linear-gradient(180deg, oklch(0.22 0.04 265), oklch(0.18 0.04 265))",
                }}
              />
              {/* Grid */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              {/* Path */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
                <path
                  d="M 40 340 Q 150 280 180 200 T 340 80"
                  stroke="url(#pathGrad)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 6"
                />
                <defs>
                  <linearGradient id="pathGrad" x1="0" x2="1">
                    <stop offset="0" stopColor="oklch(0.85 0.12 340)" />
                    <stop offset="1" stopColor="oklch(0.88 0.1 210)" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Pin */}
              <div className="absolute top-[18%] right-[15%] animate-float">
                <div className="size-14 rounded-full bg-[var(--gradient-cosmic)] grid place-items-center shadow-[var(--shadow-glow-pink)]">
                  <MapPin className="size-6 text-premium-dark" strokeWidth={2.4} />
                </div>
                <div className="mt-3 glass-strong px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap">
                  Kidzania HQ
                </div>
              </div>
              {/* Floating clouds */}
              <div className="absolute top-10 left-10 size-24 rounded-full bg-white/10 blur-2xl animate-float-slow" />
              <div className="absolute bottom-20 right-20 size-32 rounded-full bg-sky-pink/20 blur-2xl animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white/10 transition-colors">
      <span className="size-11 rounded-xl bg-aqua-dream/15 grid place-items-center shrink-0">
        <Icon className="size-5 text-aqua-dream" />
      </span>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">{label}</p>
        <p className="font-semibold text-sm mt-0.5">{value}</p>
      </div>
    </div>
  );
}
