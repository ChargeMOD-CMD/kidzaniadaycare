import classroom from "@/assets/classroom.jpg";
import { Activity, Sparkles, Users, BookOpen } from "lucide-react";

const stats = [
  { icon: Users, label: "Live class size", value: "1:6" },
  { icon: Activity, label: "Activities daily", value: "14" },
  { icon: BookOpen, label: "Story worlds", value: "120+" },
  { icon: Sparkles, label: "Smiles per hour", value: "∞" },
];

export function Classroom() {
  return (
    <section id="classroom" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="relative">
            <div className="rounded-[48px] glass-strong p-2 shadow-[var(--shadow-glow-pink)]">
              <img
                src={classroom}
                alt="Children silhouettes playing with floating alphabets"
                width={1280}
                height={800}
                loading="lazy"
                className="w-full aspect-[16/10] object-cover rounded-[40px]"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 sm:-right-8 glass-strong rounded-3xl p-5 max-w-[240px] shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60">
                  Live Activity
                </span>
              </div>
              <p className="text-sm font-semibold">Storytime: The Cloud Whale</p>
              <p className="text-xs text-foreground/50 mt-1">Room: Aurora · Ages 3–5</p>
            </div>
          </div>

          <div>
            <span className="text-aqua-dream font-semibold tracking-[0.2em] uppercase text-xs">
              Inside the Classroom
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-4 leading-tight text-balance">
              A virtual classroom that <span className="text-gradient-warm">breathes with imagination</span>.
            </h2>
            <p className="mt-6 text-foreground/60 text-lg">
              Animated toy shelves, floating alphabets, responsive illustrations and
              live activity indicators turn every minute into an adventure.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="glass rounded-2xl p-5">
                  <Icon className="size-5 text-aqua-dream mb-3" />
                  <p className="font-display text-3xl font-semibold">{value}</p>
                  <p className="text-xs text-foreground/55 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
