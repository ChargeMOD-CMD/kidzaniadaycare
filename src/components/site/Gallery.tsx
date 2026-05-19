import daycare1 from "@/assets/daycare-1.jpg";
import daycare2 from "@/assets/daycare-2.jpg";
import daycare3 from "@/assets/daycare-3.jpg";
import daycare4 from "@/assets/daycare-4.jpg";
import daycare5 from "@/assets/daycare-5.jpg";

const photos = [
  daycare1,
  daycare2,
  daycare3,
  daycare4,
  daycare5,
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-aqua-dream font-semibold tracking-[0.2em] uppercase text-xs">
            Our Environment
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-4 text-balance">
            Explore Kidzania <span className="text-gradient-cosmic">Daycare</span>
          </h2>
          <p className="mt-4 text-foreground/60 max-w-2xl mx-auto">
            Take a look inside our nurturing environment, designed to spark joy, imagination, and learning in every child.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((src, idx) => (
            <div key={idx} className={`relative overflow-hidden rounded-3xl glass-strong p-2 shadow-[var(--shadow-glow-cyan)] ${idx === 0 || idx === 3 ? "lg:col-span-2" : ""}`}>
              <img
                src={src}
                alt={`Daycare environment ${idx + 1}`}
                loading="lazy"
                className="w-full h-64 sm:h-80 object-cover rounded-2xl hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
