import { Car, Building2, Factory, Bike } from "lucide-react"
import { Reveal } from "@/components/reveal"

const SERVICES = [
  {
    icon: Car,
    title: "Automotive",
    body: "Wheels, calipers, frames, and trim finished to show quality with heat-stable coatings that survive the road.",
    accent: "var(--paint-1)",
  },
  {
    icon: Building2,
    title: "Architectural",
    body: "Railings, facades, and fixtures with AAMA-rated coatings engineered for decades of UV and weather exposure.",
    accent: "var(--paint-5)",
  },
  {
    icon: Factory,
    title: "Industrial",
    body: "High-volume production runs on equipment, brackets, and enclosures with consistent film build every time.",
    accent: "var(--paint-4)",
  },
  {
    icon: Bike,
    title: "Restoration",
    body: "Bringing vintage frames, patio sets, and heirloom metal back to life — stripped, repaired, and recolored.",
    accent: "var(--paint-6)",
  },
]

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          What we coat
        </p>
        <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-balance text-foreground sm:text-5xl">
          One shop, every kind of metal.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <article className="group h-full rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <span
                className="flex size-12 items-center justify-center rounded-xl text-background"
                style={{ backgroundColor: s.accent }}
              >
                <s.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-card-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
