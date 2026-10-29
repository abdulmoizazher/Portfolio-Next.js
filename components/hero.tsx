import Link from "next/link"
import { Greeting } from "@/components/greeting"
import { TypingText } from "@/components/typing-text"

const roles = [
  "Full-Stack Developer",
  "React & TypeScript Engineer",
  ".NET Core Developer",
  "AI-Powered App Builder",
]

export function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
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
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">
            <Greeting />
          </p>
          <h1 className="text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6 text-balance">
            {"I'm a software engineer passionate about building scalable applications and turning ideas into practical, user-focused solutions.\n"}
          </h1>
          <p className="mb-8 h-6 font-mono text-sm text-muted-foreground">
            <span className="text-foreground/60">{"> "}</span>
            <TypingText words={roles} />
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium border border-border rounded-md text-foreground hover:bg-secondary transition-colors"
            >
              Get in touch
            </Link>
            <Link
              href="#projects"
              className="group inline-flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View projects
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
