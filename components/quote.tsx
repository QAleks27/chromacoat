"use client"

import { useState } from "react"
import { Check, ShieldCheck, Clock, Palette } from "lucide-react"
import { Reveal } from "@/components/reveal"

const PERKS = [
  { icon: ShieldCheck, label: "5 років гарантії на покриття" },
  { icon: Clock, label: "Стандартний термін — 72 години" },
  { icon: Palette, label: "Безкоштовний підбір кольору" },
]

export function Quote() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="quote" className="relative mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-border bg-primary text-primary-foreground">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
                Отримайте кошторис за один день.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-primary-foreground/70">
                Розкажіть, що фарбуємо й у який колір. Ми надішлемо ціну та
                орієнтовний термін виконання — зазвичай того ж робочого дня.
              </p>

              <ul className="mt-8 space-y-3">
                {PERKS.map((p) => (
                  <li key={p.label} className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-primary-foreground/10">
                      <p.icon className="size-4" />
                    </span>
                    <span className="text-sm font-medium text-primary-foreground/90">
                      {p.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-background p-6 text-foreground sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-paint-4/15 text-paint-4">
                    <Check className="size-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">Заявку отримано</h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    Дякуємо — наша майстерня незабаром зв&apos;яжеться з вами
                    щодо кошторису.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Ім'я" name="name" placeholder="Ірина Коваль" />
                    <Field
                      label="Пошта"
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                    />
                  </div>
                  <Field
                    label="Що фарбуємо?"
                    name="part"
                    placeholder="напр. 4 литі диски + супорти"
                  />
                  <div>
                    <label
                      htmlFor="details"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Колір і фактура
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={3}
                      placeholder="Глянцевий сигнальний червоний, сатиновий лак…"
                      className="w-full resize-none rounded-lg border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-1 inline-flex h-11 w-full items-center justify-center rounded-full bg-accent text-base font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Надіслати заявку
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/30"
      />
    </div>
  )
}
