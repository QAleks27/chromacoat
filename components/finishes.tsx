import { Reveal } from "@/components/reveal"

const FINISHES = [
  { name: "Сигнальний червоний", type: "Глянець", color: "var(--paint-1)" },
  { name: "Помаранчевий", type: "Текстура", color: "var(--paint-2)" },
  { name: "Яскраво-жовтий", type: "Глянець", color: "var(--paint-3)" },
  { name: "Лісовий зелений", type: "Мат", color: "var(--paint-4)" },
  { name: "Кобальтовий синій", type: "Металік", color: "var(--paint-5)" },
  { name: "Королівський фіолет", type: "Кенді", color: "var(--paint-6)" },
  { name: "Пурпуровий", type: "Глянець", color: "var(--paint-7)" },
  { name: "Графіт", type: "Шагрень", color: "oklch(0.32 0.01 260)" },
  { name: "Хромоване срібло", type: "Металік", color: "oklch(0.78 0.008 260)" },
  { name: "Мідна жилка", type: "Текстура", color: "oklch(0.58 0.13 55)" },
  { name: "Бірюзовий", type: "Глянець", color: "oklch(0.66 0.12 195)" },
  { name: "Глибокий чорний", type: "Мат", color: "oklch(0.22 0.008 260)" },
]

export function Finishes() {
  return (
    <section id="finishes" className="relative mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Покриття
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight text-balance text-foreground sm:text-5xl">
            Оберіть колір. Ми підберемо будь-який.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Глянець, мат, текстура, металік, кенді та шагрень — а ще підбір
            індивідуального кольору за будь-яким вашим зразком.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {FINISHES.map((f, i) => (
          <Reveal key={f.name} delay={(i % 4) * 70}>
            <div className="group overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <div
                className="relative h-32 w-full"
                style={{ backgroundColor: f.color }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/30" />
                <div className="absolute left-4 top-4 h-8 w-8 rounded-full bg-white/35 blur-md" />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-sm font-semibold text-card-foreground">
                  {f.name}
                </span>
                <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                  {f.type}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
