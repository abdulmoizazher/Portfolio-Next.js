import Link from "next/link"
import { Greeting } from "@/components/greeting"
import { TypingText } from "@/components/typing-text"
import { Terminal } from "@/components/terminal"

const roles = [
  "Full-Stack Developer",
  "React & TypeScript Engineer",
  ".NET Core Developer",
  "AI-Powered App Builder",
]

export function Hero() {
  return (
    <section id="about" className="relative pt-28 pb-16 lg:pt-36 lg:pb-28">
      {/* Subtle dot grid, fades out toward the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in oklab, var(--foreground) 14%, transparent) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 70% 60% at 30% 0%, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 30% 0%, black, transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div className="min-w-0">
            <p className="mb-4 font-mono text-sm tracking-wide text-muted-foreground">
              <span className="text-foreground/40">{"// "}</span>
              <Greeting />
            </p>
            <h1 className="mb-6 text-3xl font-medium leading-tight text-balance text-foreground lg:text-4xl xl:text-[2.6rem]">
              {"I'm a software engineer passionate about building scalable applications and turning ideas into practical, user-focused solutions."}
            </h1>
            <p className="mb-8 h-6 font-mono text-sm text-muted-foreground">
              <span className="text-foreground/60">{"> "}</span>
              <TypingText words={roles} />
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                Get in touch
              </Link>
              <Link
                href="#experience"
                className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                View experience
              </Link>
              <Link
                href="#projects"
                className="group inline-flex items-center gap-1.5 px-3 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                ./projects
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            <Terminal />
            <p className="mt-3 hidden font-mono text-xs text-muted-foreground sm:block">
              tip: press <kbd className="rounded border border-border px-1">Tab</kbd> to autocomplete,{" "}
              <kbd className="rounded border border-border px-1">↑</kbd> for history
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
