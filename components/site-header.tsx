"use client"

import { useEffect, useState } from "react"

const NAV = [
  { label: "Послуги", href: "#services" },
  { label: "Процес", href: "#process" },
  { label: "Покриття", href: "#finishes" },
  { label: "Роботи", href: "#work" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-paint-1 via-paint-6 to-paint-5 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-background" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
            Chroma<span className="text-accent">Coat</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#quote"
          className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
        >
          Отримати кошторис
        </a>
      </div>
    </header>
  )
}
