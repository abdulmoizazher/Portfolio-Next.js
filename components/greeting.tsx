"use client"

import { useEffect, useState } from "react"

export function Greeting() {
  const [greeting, setGreeting] = useState("Hello")

  useEffect(() => {
    const h = new Date().getHours()
    setGreeting(h < 5 ? "Good evening" : h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening")
  }, [])

  return <>{greeting}</>
}
