import heroIsland from "@/assets/hero-island.jpg";
import stemIsland from "@/assets/stem-island.jpg";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative pt-36 pb-24 px-6 overflow-hidden">
      <div className="absolute -top-20 -left-20 size-[500px] bg-sky-pink rounded-full orb-glow" />
      <div className="absolute top-40 -right-32 size-[600px] bg-aqua-dream rounded-full orb-glow" />
      <div className="absolute bottom-0 left-1/3 size-[450px] bg-cosmic-purple rounded-full orb-glow" />

      <div className="relative max-w-7xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-[0.2em] uppercase text-aqua-dream mb-8">
          <span className="size-1.5 rounded-full bg-aqua-dream animate-pulse" />
          The Future of Early Learning
        </span>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-semibold leading-[0.95] text-balance">
          Where Little Dreams
          <br />
          <span className="text-gradient-cosmic">Begin Their Future</span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg text-foreground/65 text-pretty leading-relaxed">
          A premium AI-enhanced daycare ecosystem where imagination meets cognitive
          development inside a magical, secure, and emotionally intelligent learning
          universe.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#admissions"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--gradient-cosmic)] text-white drop-shadow-md font-bold shadow-[var(--shadow-glow-purple)] hover:scale-[1.04] transition-transform"
          >
            Begin Enrollment
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#classroom"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-strong font-semibold hover:bg-white/15 transition-colors"
          >
            <Play className="size-4 fill-current" />
            Virtual Tour
          </a>
        </div>

        {/* Floating islands */}
        <div className="relative h-[480px] sm:h-[560px] mt-20">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[420px] bg-cosmic-purple/20 blur-3xl rounded-full" />

          <div className="absolute left-1/2 -translate-x-1/2 top-4 w-[min(620px,90%)] animate-float">
            <div className="rounded-[40px] glass-strong p-2 shadow-[var(--shadow-glow-pink)]">
              <img
                src={heroIsland}
                alt="Floating Kidzania daycare island in the clouds"
                width={1280}
                height={960}
                className="w-full aspect-[4/3] object-cover rounded-[32px]"
              />
            </div>
          </div>

          <div
            className="absolute right-2 sm:right-10 bottom-0 w-[180px] sm:w-[240px] animate-float"
            style={{ animationDelay: "-2s" }}
          >
            <div className="rounded-3xl glass-strong p-1.5 shadow-[var(--shadow-glow-cyan)]">
              <img
                src={stemIsland}
                alt="STEM nebula classroom"
                width={1024}
                height={768}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover rounded-2xl"
              />
            </div>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-aqua-dream">
              STEM Nebula
            </p>
          </div>

          <div
            className="absolute left-2 sm:left-10 bottom-10 w-[150px] sm:w-[180px] animate-float-slow glass-strong rounded-3xl p-4 text-left"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">
                Live Now
              </span>
            </div>
            <p className="text-sm font-semibold">142 little dreamers</p>
            <p className="text-xs text-foreground/50">creating today</p>
          </div>
        </div>
      </div>
    </section>
  );
}
