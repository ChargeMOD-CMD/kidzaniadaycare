const activities = [
  { name: "Dance & Movement", emoji: "💃", tint: "from-sky-pink to-cosmic-purple" },
  { name: "Drawing & Painting", emoji: "🎨", tint: "from-sunset-gold to-dawn-orange" },
  { name: "Karate & Kung Fu", emoji: "🥋", tint: "from-aqua-dream to-cosmic-purple" },
  { name: "Science Experiments", emoji: "🔬", tint: "from-cosmic-purple to-aqua-dream" },
  { name: "Leaf & Nature Art", emoji: "🍃", tint: "from-aqua-dream to-sunset-gold" },
  { name: "Music Learning", emoji: "🎵", tint: "from-sky-pink to-sunset-gold" },
  { name: "Creative Storytelling", emoji: "📖", tint: "from-cosmic-purple to-sky-pink" },
  { name: "Reading Adventures", emoji: "🌟", tint: "from-sunset-gold to-sky-pink" },
  { name: "Role-Playing", emoji: "🎭", tint: "from-dawn-orange to-cosmic-purple" },
  { name: "Motor Skills", emoji: "🤸", tint: "from-aqua-dream to-sky-pink" },
  { name: "Toddler STEM", emoji: "🚀", tint: "from-cosmic-purple to-dawn-orange" },
  { name: "Imagination Zones", emoji: "✨", tint: "from-sky-pink to-aqua-dream" },
];

export function LearningGalaxy() {
  return (
    <section id="learning" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 size-[800px] bg-cosmic-purple/15 rounded-full orb-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="text-aqua-dream font-semibold tracking-[0.2em] uppercase text-xs">
            The Curriculum
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-semibold mt-4 text-balance">
            Interactive <span className="text-gradient-cosmic">Learning Galaxy</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-foreground/60">
            Twelve floating orbits, infinite curiosities. Each activity tuned to a
            different developmental constellation.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {activities.map((a, i) => (
            <div
              key={a.name}
              className="group relative aspect-square rounded-[32px] glass p-1 hover:scale-[1.04] transition-transform duration-500"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="relative h-full w-full rounded-[28px] bg-premium-dark/40 border border-white/5 p-5 flex flex-col items-center justify-center text-center overflow-hidden">
                <div
                  className={`absolute -top-10 left-1/2 -translate-x-1/2 size-32 rounded-full bg-gradient-to-br ${a.tint} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}
                />
                <span className="text-5xl mb-3 group-hover:scale-110 transition-transform" aria-hidden>
                  {a.emoji}
                </span>
                <p className="font-display font-semibold text-sm leading-tight">{a.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
