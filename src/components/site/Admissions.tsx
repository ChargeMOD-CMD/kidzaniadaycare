import { useState } from "react";
import { Sparkles, Check } from "lucide-react";

export function Admissions() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="admissions" className="py-32 px-6 relative">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] bg-cosmic-purple/10 blur-3xl pointer-events-none" />
      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-aqua-dream font-semibold tracking-[0.2em] uppercase text-xs">
            Smart Admission Portal
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-4 text-balance">
            Begin your child's <span className="text-gradient-cosmic">QuantumVerse</span> journey
          </h2>
        </div>

        <div className="glass-strong rounded-[40px] p-8 sm:p-12 shadow-[var(--shadow-glow-purple)] relative overflow-hidden">
          <div className="absolute -top-20 -right-20 size-60 bg-sky-pink/30 rounded-full blur-3xl" />

          {submitted ? (
            <div className="text-center py-12 relative">
              <div className="mx-auto size-16 rounded-full bg-[var(--gradient-cosmic)] grid place-items-center mb-6 animate-[pulse-glow_2s_ease-in-out_infinite]">
                <Check className="size-7 text-premium-dark" strokeWidth={3} />
              </div>
              <h3 className="font-display text-3xl font-semibold mb-2">
                Welcome to the Universe
              </h3>
              <p className="text-foreground/60">
                We've received your application. Our team will reach out within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5 relative"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Parent name" placeholder="Alex Rivera" />
                <Field label="Email" type="email" placeholder="alex@future.com" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Child's name" placeholder="Leo" />
                <SelectField
                  label="Age range"
                  options={["Infant (6m–18m)", "Explorer (18m–3y)", "Innovator (3y–5y)"]}
                />
              </div>
              <Field label="Phone" type="tel" placeholder="+1 (555) 010-2025" />
              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-[var(--gradient-cosmic)] text-premium-dark font-semibold shadow-[var(--shadow-glow-pink)] hover:scale-[1.01] transition-transform"
              >
                <Sparkles className="size-4" />
                Submit Application
              </button>
              <p className="text-center text-xs text-foreground/40 pt-2">
                Encrypted and securely processed. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/50 px-1">
        {label}
      </span>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-aqua-dream/60 focus:bg-white/10 transition-all"
      />
    </label>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/50 px-1">
        {label}
      </span>
      <select
        required
        className="mt-2 w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-foreground focus:outline-none focus:border-aqua-dream/60 focus:bg-white/10 transition-all appearance-none"
      >
        {options.map((o) => (
          <option key={o} className="bg-premium-dark">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
