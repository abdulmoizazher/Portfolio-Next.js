// Single source of truth for the terminal, the experience timeline and the projects grid.
// Edit content here and every section updates.

export const profile = {
  name: "Abdul Moiz Azher",
  role: "Software Engineer",
  email: "abdulmoizazher@gmail.com",
  github: "https://github.com/abdulmoizazher",
  linkedin: "https://www.linkedin.com/in/abdul-moiz-azher-366356241/?skipRedirect=true",
  about: [
    "Software engineer passionate about building scalable applications and turning ideas into practical, user-focused solutions.",
    "Experience across React / TypeScript frontends, ASP.NET Core and Node / Nest.js backends, and SQL Server / Oracle databases.",
  ],
}

export const skills: Record<string, string[]> = {
  frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui"],
  backend: ["C#", "ASP.NET Core", "Node.js", "Nest.js", "REST APIs"],
  databases: ["SQL Server", "Oracle PL/SQL", "Oracle Apex"],
  "ai / ml": ["Python", "Hugging Face Transformers", "BERT (fine-tuned)"],
  tooling: ["Git", "GitHub Actions (CI/CD)"],
}

export type Experience = {
  slug: string
  period: string
  duration: string
  type: string
  focus: string
  title: string
  company: string
  companyUrl: string
  description: string
  technologies: string[]
  // Optional: add real numbers here and they appear in the drawer, e.g.
  // metrics: [{ label: "API latency", value: "-40%" }]
  metrics?: { label: string; value: string }[]
}

export const experiences: Experience[] = [
  {
    slug: "algorithm-consulting",
    period: "Nov 2025 – Apr 2026",
    duration: "6 months",
    type: "Internship",
    focus: "Full-stack",
    title: "Software Development Intern",
    company: "Algorithm Consulting",
    companyUrl: "#",
    description:
      "Built reusable UI components in React.js and managed application state using hooks. Developed and consumed RESTful APIs by integrating React frontend with ASP.NET Core backend. Implemented CI/CD pipelines using GitHub Actions and followed Git branching workflows for collaborative development. Wrote and optimized SQL Server queries including stored procedures and triggers.",
    technologies: ["React", "TypeScript", "Tailwind CSS", ".NET Core", "C#", "SQL", "Github"],
  },
  {
    slug: "oclits",
    period: "May 2023 – Aug 2023",
    duration: "4 months",
    type: "Internship",
    focus: "Databases",
    title: "Oracle Developer Intern",
    company: "Oclits",
    companyUrl: "https://oclits.com",
    description:
      "Assisted in database design and normalization for enterprise-level applications, ensuring data integrity and reducing redundancy. Analyzed existing Oracle database structures to identify inefficiencies and proposed schema-level improvements. Gained hands-on experience with Oracle tools such as SQL Developer and Oracle Forms for UI-driven data manipulation.",
    technologies: ["PL/SQL", "Oracle Apex"],
  },
]

/** Splits a description into one achievement per sentence. */
export function getHighlights(exp: Experience): string[] {
  return exp.description
    .split(/\.\s+/)
    .map((s) => s.replace(/\.$/, "").trim())
    .filter(Boolean)
}

export type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
}

export const projects: Project[] = [
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
      "SentiCare is an AI-powered mental health support mobile application designed to analyze users’ emotional states and provide personalized assistance. It uses a fine-tuned BERT-based sentiment and emotion analysis model to detect a wide range of emotions, including mental health–specific conditions such as depression, anxiety, stress, and suicidal tendencies. Based on the detected emotional state, the system offers tailored responses, self-help resources, and supportive interactions through an integrated chatbot.",
    image: "/senticare.png",
    technologies: ["Node", "Nest.js", "Python", "hugging face transformers"],
    link: "https://github.com/abdulmoizazher/server",
  },
]
