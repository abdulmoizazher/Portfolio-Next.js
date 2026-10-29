"use client"

import { useEffect, useState } from "react"

export function TypingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(words[0])
  const [deleting, setDeleting] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  useEffect(() => {
    if (reduced) return
    const word = words[index]
    let t: ReturnType<typeof setTimeout>

    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && text === "") {
      t = setTimeout(() => {
        setDeleting(false)
        setIndex((index + 1) % words.length)
      }, 250)
    } else {
      t = setTimeout(
        () =>
          setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? 35 : 70,
      )
    }
    return () => clearTimeout(t)
  }, [text, deleting, index, words, reduced])

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden>
        {text}
        <span
          className={`ml-0.5 inline-block h-[1.1em] w-0.5 translate-y-[0.15em] bg-foreground ${
            reduced ? "" : "animate-pulse"
          }`}
        />
      </span>
    </>
  )
}
