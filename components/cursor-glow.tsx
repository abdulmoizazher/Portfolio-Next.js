"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const el = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || reduced) return

    let frame = 0
    let x = 0
    let y = 0
    const paint = () => {
      frame = 0
      if (el.current) {
        el.current.style.setProperty("--x", `${x}px`)
        el.current.style.setProperty("--y", `${y}px`)
        el.current.style.opacity = "1"
      }
    }
    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (!frame) frame = requestAnimationFrame(paint)
    }
    const onLeave = () => {
      if (el.current) el.current.style.opacity = "0"
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    document.documentElement.addEventListener("pointerleave", onLeave)
    return () => {
      window.removeEventListener("pointermove", onMove)
      document.documentElement.removeEventListener("pointerleave", onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={el}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(500px circle at var(--x, 50%) var(--y, 50%), color-mix(in oklab, var(--foreground) 7%, transparent), transparent 65%)",
      }}
    />
  )
}
