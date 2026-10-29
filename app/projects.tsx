import Image from "next/image"
import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { TiltCard } from "@/components/tilt-card"

const projects = [
  {
    title: "Dashboard",
    description:
      "This project is a frontend dashboard showcase application built to demonstrate modern UI/UX design and component-based architecture. It focuses on creating a clean, responsive, and interactive dashboard interface using modern web technologies rather than building a full backend system.",
    image: "/img.png",
    technologies: ["Reactjs", "Shadcn"],
    link: "https://github.com/abdulmoizazher171/dashboard",
  },
  {
    title: "Senticare",
    description:
      "\n" +
        "SentiCare is an AI-powered mental health support mobile application designed to analyze users’ emotional states and provide personalized assistance. It uses a fine-tuned BERT-based sentiment and emotion analysis model to detect a wide range of emotions, including mental health–specific conditions such as depression, anxiety, stress, and suicidal tendencies. Based on the detected emotional state, the system offers tailored responses, self-help resources, and supportive interactions through an integrated chatbot.",
    image: "/senticare.png",
    technologies: ["Node", "Nest.js", "Python", "hugging face transformers"],
    link: "https://github.com/abdulmoizazher/server",
  },
  // {
  //   title: "Design System",
  //   description:
  //     "A comprehensive design system with reusable components and documentation for consistent UI development.",
  //   image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
  //   technologies: ["Figma", "Storybook", "React"],
  //   link: "#",
  // }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Selected Work
          </h2>
          <Link
            href="https://github.com/abdulmoizazher"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            More on GitHub
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              ↗
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 120}>
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
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground transition-colors duration-300 group-hover:border-foreground/30 group-hover:text-foreground"
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
