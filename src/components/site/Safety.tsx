import safety from "@/assets/safety-dashboard.jpg";
import { Fingerprint, Radio, Bell, Heart, Camera, Lock } from "lucide-react";

const features = [
  { icon: Fingerprint, title: "Biometric Entry", desc: "Only verified guardians cross the threshold." },
  { icon: Radio, title: "RFID Child Tracking", desc: "Real-time presence within secure campus bounds." },
  { icon: Camera, title: "Encrypted Live Feeds", desc: "Watch your child's day from anywhere." },
  { icon: Bell, title: "Parent Notifications", desc: "Arrivals, naps, meals — never miss a moment." },
  { icon: Heart, title: "Health Sentinel", desc: "Continuous temperature & wellness monitoring." },
  { icon: Lock, title: "Emergency Protocols", desc: "AI-coordinated response, verified drills." },
];

export function Safety() {
  return (
    <section id="safety" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sky-pink font-semibold tracking-[0.2em] uppercase text-xs">
              Safety Intelligence
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-semibold mt-4 leading-[1.05] text-balance">
              Fortified by love. <br />
              <span className="text-gradient-cosmic italic">Secured by intelligence.</span>
            </h2>
            <p className="mt-6 text-foreground/60 text-lg max-w-xl">
              Our QuantumVerse safety system gives you peace of mind so your child
              can fully give themselves to wonder.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass rounded-2xl p-5 hover:bg-white/10 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 size-9 rounded-xl grid place-items-center bg-aqua-dream/15">
                      <Icon className="size-4 text-aqua-dream" />
                    </span>
                    <div>
                      <p className="font-semibold text-sm">{title}</p>
                      <p className="text-xs text-foreground/50 mt-1">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -m-8 bg-cosmic-purple/15 blur-3xl rounded-full" />
            <div className="relative rounded-[40px] glass-strong p-2 shadow-[var(--shadow-glow-cyan)]">
              <img
                src={safety}
                alt="Live daycare safety dashboard"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full aspect-square object-cover rounded-[32px]"
              />
            </div>
            <div className="absolute -top-6 -left-6 glass-strong rounded-2xl p-4 max-w-[200px] shadow-xl">
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-1">
                ● All Secure
              </p>
              <p className="text-sm font-semibold">Attendance: 142 / 142</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
