import Image from "next/image"
import Link from "next/link"

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
    technologies: ["Node", "Nest,js", "Python", "hugging face transformers"],
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
          <div className="flex items-center gap-2">
            <button
              className="p-2 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group block"
            >
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-secondary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground"
                  >
                    {tech}
                    {tech !== project.technologies[project.technologies.length - 1] && " ·"}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
