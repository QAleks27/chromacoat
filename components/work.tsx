import Image from "next/image"
import { Reveal } from "@/components/reveal"

const WORK = [
  {
    src: "/work/red-wheel.png",
    title: "Signal Red wheels",
    tag: "Automotive · Gloss",
    span: "lg:col-span-2",
  },
  {
    src: "/work/black-frame.png",
    title: "Matte black frame",
    tag: "Restoration · Matte",
    span: "",
  },
  {
    src: "/work/blue-parts.png",
    title: "Cobalt brackets",
    tag: "Industrial · Metallic",
    span: "",
  },
]

export function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Recent work
        </p>
        <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-balance text-foreground sm:text-5xl">
          Off the rack, out of the oven.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WORK.map((w, i) => (
          <Reveal key={w.title} delay={i * 100} className={w.span}>
            <figure className="group relative aspect-4/3 h-full overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src={w.src || "/placeholder.svg"}
                alt={w.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                  {w.tag}
                </p>
                <p className="mt-1 text-lg font-bold text-white">{w.title}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
