import { Reveal } from "@/components/reveal"

const STEPS = [
  {
    step: "01",
    title: "Очищення та піскострум",
    body: "Старі покриття, іржу й оливу знімаємо абразивом до чистого світлого металу, готового до зчеплення.",
  },
  {
    step: "02",
    title: "Підготовка та маскування",
    body: "Деталі проходять хімічну обробку, фосфатне промивання й точне маскування, щоб різьба та стикові поверхні лишалися чистими.",
  },
  {
    step: "03",
    title: "Електростатичне покриття",
    body: "Заряджений порошок напилюється на заземлену деталь, огортаючи кожен край і заглиблення рівною однорідною плівкою.",
  },
  {
    step: "04",
    title: "Запікання в печі",
    body: "Покриття розтікається й полімеризується за 200°C, сплавляючись у суцільну оболонку, готову до використання за кілька годин.",
  },
]

export function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Процес
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight text-balance text-foreground sm:text-5xl">
            Чотири етапи — від голого металу до невразливого покриття.
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
