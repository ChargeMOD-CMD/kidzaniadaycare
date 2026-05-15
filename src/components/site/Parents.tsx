import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Aria Chen",
    role: "Mother of Leo, age 4",
    quote:
      "Leo runs into Kidzania every morning. The live updates and the love his caretakers show feel almost cinematic.",
    tint: "from-sky-pink to-cosmic-purple",
  },
  {
    name: "Marco Reyes",
    role: "Father of Mia, age 3",
    quote:
      "The classroom feels like a magical world. I've never seen Mia this curious or this confident — she's blossoming.",
    tint: "from-aqua-dream to-cosmic-purple",
  },
  {
    name: "Priya Anand",
    role: "Mother of twins, age 5",
    quote:
      "From safety to storytelling, every detail is luxury-level. It's the future of childcare we always dreamed of.",
    tint: "from-sunset-gold to-dawn-orange",
  },
];

export function Parents() {
  return (
    <section id="parents" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sky-pink font-semibold tracking-[0.2em] uppercase text-xs">
            Parent Memory Wall
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-semibold mt-4 text-balance">
            Loved by the families who <br />
            <span className="text-gradient-cosmic">trust us with the future</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="group relative glass-strong rounded-[32px] p-8 hover:-translate-y-1 transition-transform duration-500"
            >
              <div
                className={`absolute -top-px left-8 right-8 h-px bg-gradient-to-r ${r.tint} opacity-60`}
              />
              <Quote className="size-7 text-aqua-dream/60 mb-4" />
              <p className="text-foreground/80 leading-relaxed">"{r.quote}"</p>
              <div className="mt-8 flex items-center gap-3">
                <div className={`size-11 rounded-full bg-gradient-to-br ${r.tint}`} />
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-foreground/50">{r.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-sunset-gold text-sunset-gold" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
