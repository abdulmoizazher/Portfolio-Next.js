"use client"

import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { experiences, getHighlights } from "@/lib/portfolio-data"

export function Experience() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(0)
  const exp = experiences[selected]

  const show = (i: number) => {
    setSelected(i)
    setOpen(true)
  }

  const metrics = [
    { label: "Duration", value: exp.duration },
    { label: "Type", value: exp.type },
    { label: "Focus", value: exp.focus },
    { label: "Stack", value: `${exp.technologies.length} tools` },
    ...(exp.metrics ?? []),
  ]

  return (
    <section id="experience" className="bg-secondary/30 py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="mb-12 font-mono text-sm tracking-wide text-muted-foreground">
          <span className="text-foreground/40">~/</span>experience
        </h2>

        <ol className="relative max-w-3xl space-y-6">
          <span aria-hidden className="absolute top-6 bottom-6 left-[7px] w-px bg-border" />
          {experiences.map((e, i) => {
            const highlights = getHighlights(e)
            return (
              <Reveal key={e.slug} delay={i * 120}>
                <li className="group relative pl-10">
                  <span
                    aria-hidden
                    className="absolute top-6 left-0 size-[15px] rounded-full border-2 border-foreground/30 bg-background transition-all duration-300 group-hover:scale-110 group-hover:border-foreground group-hover:bg-foreground"
                  />
                  <button
                    type="button"
                    onClick={() => show(i)}
                    aria-haspopup="dialog"
                    className="block w-full rounded-lg border border-border bg-card/60 p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-card hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    <div className="mb-2 font-mono text-xs text-muted-foreground">{e.period}</div>
                    <h3 className="text-lg font-medium text-foreground">{e.title}</h3>
                    <div className="mb-3 text-sm text-muted-foreground">{e.company}</div>
                    <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {highlights[0]}.
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {e.technologies.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-[11px] text-foreground"
                        >
                          {t}
                        </span>
                      ))}
                      {e.technologies.length > 4 && (
                        <span className="font-mono text-[11px] text-muted-foreground">
                          +{e.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    <div className="mt-4 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                      $ open ./{e.slug}{" "}
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </button>
                </li>
              </Reveal>
            )
          })}
        </ol>
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed inset-y-0 right-0 z-[80] flex w-full max-w-lg flex-col border-l border-border bg-background shadow-2xl duration-300 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right">
            <div className="flex items-start justify-between gap-4 border-b border-border p-6">
              <div className="min-w-0">
                <div className="mb-2 font-mono text-xs text-muted-foreground">
                  ~/experience/{exp.slug}
                </div>
                <Dialog.Title className="text-xl font-medium text-foreground">{exp.title}</Dialog.Title>
                <Dialog.Description className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                  {exp.companyUrl === "#" ? (
                    <span>{exp.company}</span>
                  ) : (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-foreground hover:text-muted-foreground"
                    >
                      {exp.company}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  )}
                  <span aria-hidden>·</span>
                  <span className="font-mono text-xs">{exp.period}</span>
                </Dialog.Description>
              </div>
              <Dialog.Close
                aria-label="Close details"
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="size-4" />
              </Dialog.Close>
            </div>

            <div className="flex-1 space-y-8 overflow-y-auto p-6">
              <div className="grid grid-cols-2 gap-3">
                {metrics.map((m) => (
                  <div key={m.label} className="rounded-lg border border-border bg-card p-3">
                    <div className="font-mono text-[11px] text-muted-foreground">{m.label}</div>
                    <div className="mt-1 text-sm font-medium text-foreground">{m.value}</div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="mb-3 font-mono text-xs text-muted-foreground">
                  <span className="text-foreground/40">## </span>achievements
                </h4>
                <ul className="space-y-3">
                  {getHighlights(exp).map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden className="mt-0.5 font-mono text-foreground/50">▸</span>
                      <span>{h}.</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-mono text-xs text-muted-foreground">
                  <span className="text-foreground/40">## </span>stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-border p-4 font-mono text-xs">
              <button
                type="button"
                disabled={selected === 0}
                onClick={() => setSelected(selected - 1)}
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronLeft className="size-3.5" />
                newer
              </button>
              <span className="text-muted-foreground">
                {selected + 1} / {experiences.length}
              </span>
              <button
                type="button"
                disabled={selected === experiences.length - 1}
                onClick={() => setSelected(selected + 1)}
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
              >
                older
                <ChevronRight className="size-3.5" />
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  )
}
