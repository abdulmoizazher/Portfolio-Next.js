"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { ArrowUp, Moon, Sun } from "lucide-react"

const btn =
  "flex size-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-sm backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2"

export function FloatingControls() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const dark = resolvedTheme === "dark"

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-2">
      <button
        type="button"
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${btn} ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <ArrowUp className="size-4" />
      </button>
      <button
        type="button"
        aria-label="Toggle theme"
        onClick={() => setTheme(dark ? "light" : "dark")}
        className={btn}
      >
        {mounted ? dark ? <Sun className="size-4" /> : <Moon className="size-4" /> : <span className="size-4" />}
      </button>
    </div>
  )
}
