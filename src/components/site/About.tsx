import { Heart, Sparkles, Users, Lightbulb, Shield, GraduationCap } from "lucide-react";

const pillars = [
  { icon: Shield, title: "Safe Environment", desc: "Biometric entry, RFID tracking, 24/7 monitoring." },
  { icon: Lightbulb, title: "Creative Learning", desc: "Holographic play meets sensory discovery." },
  { icon: Users, title: "Role-Play Worlds", desc: "Miniature cities for real-world skill mastery." },
  { icon: Heart, title: "Emotional Care", desc: "Mood-aware caregivers and reflection rituals." },
  { icon: GraduationCap, title: "Pro Caretakers", desc: "Certified educators, child psychology trained." },
  { icon: Sparkles, title: "Learn Through Play", desc: "Every interaction designed to wonder first." },
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <span className="text-aqua-dream font-semibold tracking-[0.2em] uppercase text-xs">
            Our Vision
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-semibold mt-4 leading-[1.05] text-balance">
            A daycare reimagined as a <span className="text-gradient-cosmic">universe of wonder</span>.
          </h2>
          <p className="mt-6 text-lg text-foreground/60 text-pretty">
            Kidzania QuantumVerse blends luxury aesthetics with revolutionary early
            childhood education, designed for the parents and children of tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group glass rounded-3xl p-7 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className="size-12 rounded-2xl mb-5 grid place-items-center"
                style={{
                  background:
                    i % 3 === 0
                      ? "var(--gradient-cosmic)"
                      : i % 3 === 1
                        ? "var(--gradient-warm)"
                        : "linear-gradient(135deg, var(--aqua-dream), var(--cosmic-purple))",
                }}
              >
                <Icon className="size-5 text-premium-dark" strokeWidth={2.4} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
              <p className="text-foreground/55 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
