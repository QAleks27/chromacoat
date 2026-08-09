"use client"

import { useEffect, useRef, useState } from "react"

type Streak = {
  left: number // percentage
  width: number // px
  color: string
  start: number // 0..1 scroll progress when it begins flowing
  reach: number // max height in vh
  bead: number // extra drip bead diameter in px
}

// Multi-colored paint streaks spread across the wall.
const STREAKS: Streak[] = [
  { left: 4, width: 30, color: "var(--paint-5)", start: 0.02, reach: 118, bead: 20 },
  { left: 11, width: 14, color: "var(--paint-3)", start: 0.06, reach: 74, bead: 10 },
  { left: 18, width: 52, color: "var(--paint-1)", start: 0.0, reach: 132, bead: 34 },
  { left: 27, width: 20, color: "var(--paint-6)", start: 0.12, reach: 88, bead: 14 },
  { left: 35, width: 40, color: "var(--paint-4)", start: 0.04, reach: 108, bead: 26 },
  { left: 44, width: 12, color: "var(--paint-7)", start: 0.18, reach: 66, bead: 9 },
  { left: 50, width: 34, color: "var(--paint-2)", start: 0.08, reach: 124, bead: 22 },
  { left: 59, width: 22, color: "var(--paint-5)", start: 0.14, reach: 82, bead: 15 },
  { left: 66, width: 48, color: "var(--paint-6)", start: 0.0, reach: 120, bead: 30 },
  { left: 75, width: 16, color: "var(--paint-3)", start: 0.1, reach: 72, bead: 11 },
  { left: 81, width: 38, color: "var(--paint-7)", start: 0.05, reach: 114, bead: 24 },
  { left: 89, width: 18, color: "var(--paint-4)", start: 0.16, reach: 78, bead: 12 },
  { left: 95, width: 28, color: "var(--paint-1)", start: 0.03, reach: 100, bead: 18 },
]

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function PaintFlowBackground() {
  const [progress, setProgress] = useState(0)
  const raf = useRef(0)

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      setProgress(p)
      raf.current = 0
    }
    const onScroll = () => {
      if (raf.current) return
      raf.current = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* The white wall with a faint plaster texture + vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, #ffffff 0%, var(--background) 55%, oklch(0.94 0.004 260) 100%)",
        }}
      />

      {/* Paint reservoir ledge at the very top that the drips pour from */}
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-paint-1 via-paint-4 to-paint-6 opacity-80" />

      {STREAKS.map((s, i) => {
        const local = (progress - s.start) / (1 - s.start)
        const eased = easeOutCubic(Math.min(1, Math.max(0, local)))
        const heightVh = eased * s.reach
        const visible = heightVh > 0.5
        return (
          <div
            key={i}
            className="absolute top-0"
            style={{
              left: `${s.left}%`,
              width: s.width,
              height: `${heightVh}vh`,
              transform: "translateX(-50%)",
              opacity: visible ? 0.92 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            {/* main body of the drip */}
            <div
              className="h-full w-full"
              style={{
                background: `linear-gradient(180deg, color-mix(in oklch, ${s.color}, black 18%) 0%, ${s.color} 40%)`,
                borderBottomLeftRadius: s.width,
                borderBottomRightRadius: s.width,
                boxShadow: `0 0 ${s.width * 0.6}px color-mix(in oklch, ${s.color}, transparent 55%)`,
              }}
            />
            {/* glossy highlight running down the left edge */}
            <div
              className="absolute inset-y-0 left-[18%] w-[22%] rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.05))",
                opacity: 0.5,
              }}
            />
            {/* heavy paint bead hanging at the tip */}
            {visible && (
              <div
                className="paint-drip-anim absolute left-1/2"
                style={{
                  bottom: -s.bead * 0.55,
                  width: s.bead,
                  height: s.bead,
                  transform: "translateX(-50%)",
                  borderRadius: "50%",
                  background: `radial-gradient(circle at 35% 30%, color-mix(in oklch, ${s.color}, white 40%) 0%, ${s.color} 45%, color-mix(in oklch, ${s.color}, black 25%) 100%)`,
                  boxShadow: `0 6px ${s.bead}px color-mix(in oklch, ${s.color}, transparent 45%)`,
                }}
              />
            )}
          </div>
        )
      })}

      {/* soft white haze so content stays readable over the paint */}
      <div className="absolute inset-0 bg-background/45" />
    </div>
  )
}
