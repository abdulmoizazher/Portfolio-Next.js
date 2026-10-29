import { Reveal } from "@/components/reveal"

const experiences = [

    {
    period: "Oct 2026 - Present",
    title: "Junior Software developer",
    company: "pixcile technologies",
    companyUrl: "https://www.pixciletechnologies.com/",
    description:
      "Develop and maintain RESTful Web APIs and backend application logic using C# and .NET. Build modular, responsive web application components using React.js and TypeScript, integrating frontend interfaces with backend services and databases. Perform functional and regression testing to ensure application reliability and stability. Collaborate with cross-functional teams during Agile sprints, resolve software defects, and contribute to application development and continuous improvement throughout the software development lifecycle.",
    technologies: ["React", "TypeScript", "Tailwind CSS", ".NET Core", "C#", "SQL" ,"Github" ],
  },
  {
    period: "Nov 2025- April 2026",
    title: "Software Development Intern",
    company: "Algorithm Consulting",
    companyUrl: "#",
    description:
      "Built reusable UI components in React.js and managed application state using hooks. Developed and consumed RESTful APIs by integrating React frontend with ASP.NET Core backend. Implemented CI/CD pipelines using GitHub Actions and followed Git branching workflows for collaborative development. Wrote and optimized SQL Server queries including stored procedures and triggers.",
    technologies: ["React", "TypeScript",  "Tailwind CSS", ".NET Core", "C#", "SQL" ,"Github" ],
  },
  {
    period: "May 2023 – Aug 2023",
    title:  "Oracle developer Intern",
    company: "Oclits" ,

    companyUrl: "https://oclits.com",
    description:
      "Assisted in database design and normalization for enterprise-level applications, ensuring data integrity and reducing redundancy. Analyzed existing Oracle database structures to identify inefficiencies and proposed schema-level improvements. Gained hands-on experience with Oracle tools such as SQL Developer and Oracle Forms for UI-driven data manipulation.",
    technologies: ["PL/SQL", "Oracle Apex"],
  }



]

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-12">
          Experience
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <Reveal key={index} delay={index * 120}>
              <div className="group -mx-4 grid gap-4 rounded-lg px-4 py-6 transition-colors duration-300 hover:bg-card md:grid-cols-[200px_1fr] md:gap-8">
                <div className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {exp.period}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">
                    {exp.title} ·{" "}
                    {exp.companyUrl === "#" ? (
                      <span>{exp.company}</span>
                    ) : (
                      <a
                        href={exp.companyUrl}
                        className="group/link inline-flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exp.company}
                        <svg
                          className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M7 17L17 7M17 7H7M17 7V17"
                          />
                        </svg>
                      </a>
                    )}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-foreground bg-secondary rounded-full transition-transform duration-300 hover:-translate-y-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
