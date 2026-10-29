"use client"

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react"
import { useTheme } from "next-themes"
import { experiences, profile, projects, skills } from "@/lib/portfolio-data"

type Entry = { id: number; cmd?: string; out: ReactNode }

const COMMANDS = [
  "help", "whoami", "about", "ls", "cat", "skills", "experience",
  "projects", "contact", "theme", "clear", "echo", "date",
]
const FILES = ["about.txt", "skills.json", "contact.md"]
const QUICK = ["help", "about", "skills", "experience", "projects", "contact"]

function A({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http")
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-sky-300 underline decoration-sky-300/40 underline-offset-2 transition-colors hover:text-sky-200"
    >
      {children}
    </a>
  )
}

function Prompt() {
  return (
    <span className="select-none whitespace-pre">
      <span className="text-emerald-400">guest@portfolio</span>
      <span className="text-zinc-500">:</span>
      <span className="text-sky-400">~</span>
      <span className="text-zinc-500">$ </span>
    </span>
  )
}

const Hint = ({ children }: { children: ReactNode }) => (
  <span className="text-zinc-400">{children}</span>
)

export function Terminal() {
  const { setTheme } = useTheme()
  const [entries, setEntries] = useState<Entry[]>([
    {
      id: 0,
      out: (
        <div>
          <div className="text-zinc-100">Welcome to {profile.name}&apos;s interactive portfolio.</div>
          <Hint>
            Type <span className="text-emerald-400">help</span> to see available commands, or tap a shortcut below.
          </Hint>
        </div>
      ),
    },
  ])
  const [value, setValue] = useState("")
  const nextId = useRef(1)
  const history = useRef<string[]>([])
  const historyIdx = useRef(-1)
  const scroller = useRef<HTMLDivElement>(null)
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const el = scroller.current
    if (el) el.scrollTop = el.scrollHeight
  }, [entries])

  const exec = (cmd: string, args: string[]): ReactNode => {
    switch (cmd) {
      case "help":
        return (
          <div className="grid grid-cols-[100px_1fr] gap-x-3 gap-y-0.5">
            {[
              ["about", "who I am (alias: cat about.txt)"],
              ["skills", "tech stack by category"],
              ["experience", "work history"],
              ["projects", "selected work"],
              ["contact", "ways to reach me"],
              ["ls / cat <file>", "browse files"],
              ["theme <mode>", "light | dark | system"],
              ["clear", "clear the terminal"],
            ].map(([c, d]) => (
              <div key={c} className="contents">
                <span className="text-emerald-400">{c}</span>
                <Hint>{d}</Hint>
              </div>
            ))}
          </div>
        )
      case "whoami":
        return (
          <div>
            <span className="text-zinc-100">{profile.name}</span> <Hint>— {profile.role}</Hint>
          </div>
        )
      case "about":
        return (
          <div className="space-y-2">
            {profile.about.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        )
      case "ls":
        return (
          <div className="flex flex-wrap gap-x-5">
            {FILES.map((f) => (
              <span key={f} className="text-zinc-200">{f}</span>
            ))}
            <span className="text-sky-300">experience/</span>
            <span className="text-sky-300">projects/</span>
          </div>
        )
      case "cat": {
        const file = args[0]
        if (!file) return <Hint>usage: cat &lt;file&gt; — try `ls`</Hint>
        if (file === "about.txt") return exec("about", [])
        if (file === "skills.json") return exec("skills", [])
        if (file === "contact.md") return exec("contact", [])
        return <span className="text-red-400">cat: {file}: No such file or directory</span>
      }
      case "skills":
        return (
          <div className="space-y-1">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <span className="text-amber-300">{group}</span> <Hint>→</Hint> {items.join(", ")}
              </div>
            ))}
          </div>
        )
      case "experience":
        return (
          <div className="space-y-2">
            {experiences.map((e) => (
              <div key={e.slug}>
                <span className="text-sky-300">{e.company}</span> <Hint>({e.period})</Hint>
                <div className="pl-3">
                  <Hint>
                    {e.title} · {e.technologies.slice(0, 5).join(", ")}
                  </Hint>
                </div>
              </div>
            ))}
            <Hint>
              Full details in the <A href="#experience">experience timeline</A>.
            </Hint>
          </div>
        )
      case "projects":
        return (
          <div className="space-y-2">
            {projects.map((p) => (
              <div key={p.title}>
                <A href={p.link}>{p.title}</A>
                <div className="pl-3">
                  <Hint>{p.technologies.join(", ")}</Hint>
                </div>
              </div>
            ))}
          </div>
        )
      case "contact":
      case "socials":
        return (
          <div className="space-y-0.5">
            <div>
              <span className="inline-block w-20 text-amber-300">email</span>
              <A href={`mailto:${profile.email}`}>{profile.email}</A>
            </div>
            <div>
              <span className="inline-block w-20 text-amber-300">github</span>
              <A href={profile.github}>{profile.github.replace("https://", "")}</A>
            </div>
            <div>
              <span className="inline-block w-20 text-amber-300">linkedin</span>
              <A href={profile.linkedin}>abdul-moiz-azher</A>
            </div>
          </div>
        )
      case "theme": {
        const mode = args[0]
        if (mode === "light" || mode === "dark" || mode === "system") {
          setTheme(mode)
          return <Hint>theme set to {mode}</Hint>
        }
        return <Hint>usage: theme light | dark | system</Hint>
      }
      case "echo":
        return <span>{args.join(" ")}</span>
      case "date":
        return <span>{new Date().toString()}</span>
      case "sudo":
        return (
          <Hint>
            guest is not in the sudoers file. Try <span className="text-emerald-400">contact</span> instead.
          </Hint>
        )
      default:
        return (
          <span className="text-red-400">
            command not found: {cmd}. Type <span className="text-emerald-400">help</span>.
          </span>
        )
    }
  }

  const run = (raw: string) => {
    const text = raw.trim()
    if (text) {
      history.current.push(text)
    }
    historyIdx.current = -1
    if (!text) {
      setEntries((e) => [...e, { id: nextId.current++, cmd: "", out: null }])
      return
    }
    const [c, ...args] = text.split(/\s+/)
    const cmd = c.toLowerCase()
    if (cmd === "clear") {
      setEntries([])
      return
    }
    setEntries((e) => [...e, { id: nextId.current++, cmd: text, out: exec(cmd, args) }])
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(value)
      setValue("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      const h = history.current
      if (!h.length) return
      historyIdx.current = Math.min(historyIdx.current + 1, h.length - 1)
      setValue(h[h.length - 1 - historyIdx.current])
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      const h = history.current
      historyIdx.current = Math.max(historyIdx.current - 1, -1)
      setValue(historyIdx.current === -1 ? "" : h[h.length - 1 - historyIdx.current])
    } else if (e.key === "Tab") {
      e.preventDefault()
      const parts = value.split(/\s+/)
      if (parts.length === 1) {
        const m = COMMANDS.filter((c) => c.startsWith(parts[0].toLowerCase()))
        if (m.length === 1) setValue(`${m[0]} `)
      } else if (parts[0] === "cat") {
        const m = FILES.filter((f) => f.startsWith(parts[1]))
        if (m.length === 1) setValue(`cat ${m[0]}`)
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault()
      setEntries([])
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0d10] font-mono text-[13px] leading-relaxed text-zinc-300 shadow-2xl shadow-black/25 ring-1 ring-black/5">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span aria-hidden className="size-3 rounded-full bg-[#ff5f57]" />
        <span aria-hidden className="size-3 rounded-full bg-[#febc2e]" />
        <span aria-hidden className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate text-xs text-zinc-500">guest@portfolio: ~</span>
      </div>

      <div
        ref={scroller}
        role="log"
        aria-live="polite"
        onClick={() => input.current?.focus({ preventScroll: true })}
        className="h-[340px] cursor-text overflow-y-auto p-4"
      >
        {entries.map((e) => (
          <div key={e.id} className="mb-2 animate-in fade-in duration-200">
            {e.cmd !== undefined && (
              <div>
                <Prompt />
                <span className="text-zinc-100">{e.cmd}</span>
              </div>
            )}
            {e.out && <div className="mt-1">{e.out}</div>}
          </div>
        ))}
        <label className="flex items-center">
          <Prompt />
          <span className="sr-only">Terminal input</span>
          <input
            ref={input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="type help…"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className="min-w-0 flex-1 bg-transparent text-base text-zinc-100 caret-emerald-400 outline-none placeholder:text-zinc-600 sm:text-[13px]"
          />
        </label>
      </div>

      <div className="flex gap-2 overflow-x-auto border-t border-white/10 bg-white/[0.02] px-3 py-2.5">
        {QUICK.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => run(c)}
            className="shrink-0 rounded-md border border-white/10 px-2.5 py-1 text-xs text-zinc-400 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}
