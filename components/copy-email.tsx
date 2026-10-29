"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Check, Copy } from "lucide-react"

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <div className="flex items-center gap-3">
      <Link
        href={`mailto:${email}`}
        className="text-sm text-foreground hover:text-muted-foreground transition-colors"
      >
        {email}
      </Link>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy email address"
        className="inline-flex items-center gap-1.5 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  )
}
