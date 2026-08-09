import { ArrowRight, Sparkles } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 pt-28 pb-20"
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
          <Sparkles className="size-3.5 text-accent" />
          Запікання в печі. Захист від корозії. Довговічніше за сам метал.
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight text-balance text-foreground sm:text-7xl lg:text-8xl">
          Ми вдягаємо метал
          <br />
          <span className="bg-gradient-to-r from-paint-1 via-paint-6 to-paint-5 bg-clip-text text-transparent">
            у колір
          </span>{" "}
          на все життя.
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Chroma Coat — це майстерня прецизійного порошкового фарбування. Ми
          піскоструїмо, наносимо покриття та запікаємо ваші деталі в тисячах
          кольорів і фактур — зчеплення, яке не бере ані сколи, ані вигорання,
          ані іржа.
        </p>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#quote"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
          >
            Розпочати проєкт
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#finishes"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background/70 px-7 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-muted"
          >
            Переглянути покриття
          </a>
        </div>
      </Reveal>

      <Reveal delay={320}>
        <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border/70 pt-8">
          {[
            { n: "18k+", l: "деталей пофарбовано" },
            { n: "6 000+", l: "кольорів у каталозі" },
            { n: "72 год", l: "середній термін виконання" },
          ].map((s) => (
            <div key={s.l}>
              <dt className="font-display text-3xl font-extrabold text-foreground">
                {s.n}
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">{s.l}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
