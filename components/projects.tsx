import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { TiltCard } from "@/components/tilt-card"
import { profile, projects } from "@/lib/portfolio-data"

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-mono text-sm tracking-wide text-muted-foreground">
            <span className="text-foreground/40">~/</span>selected-work
          </h2>
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            more on github
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 120}>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <TiltCard className="mb-4 aspect-[4/3] overflow-hidden rounded-lg bg-secondary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </TiltCard>
                <h3 className="mb-2 flex items-center gap-1.5 text-lg font-medium text-foreground">
                  {project.title}
                  <span className="-translate-x-1 translate-y-1 text-base text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                    ↗
                  </span>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors duration-300 group-hover:border-foreground/30 group-hover:text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
