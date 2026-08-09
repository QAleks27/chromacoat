import { Reveal } from "@/components/reveal"

const STEPS = [
  {
    step: "01",
    title: "Strip & blast",
    body: "Old coatings, rust, and oil are media-blasted away until we reach clean, bright bare metal ready to bond.",
  },
  {
    step: "02",
    title: "Prep & mask",
    body: "Parts are chemically treated, phosphate-rinsed, and precision-masked so threads and mating surfaces stay clean.",
  },
  {
    step: "03",
    title: "Electrostatic coat",
    body: "Charged powder is sprayed onto the grounded part, wrapping every edge and recess in an even, uniform film.",
  },
  {
    step: "04",
    title: "Oven cure",
    body: "The coating flows and cross-links at 400°F, fusing into a single continuous shell that's ready to handle in hours.",
  },
]

export function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            The process
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-balance text-foreground sm:text-5xl">
            Four stages from bare metal to bulletproof finish.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 90} className="h-full">
              <div className="flex h-full flex-col bg-card/90 p-7 backdrop-blur-sm">
                <span className="font-display text-5xl font-extrabold text-muted/70 tabular-nums">
                  {s.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-card-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
