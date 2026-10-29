import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { ScrollProgress } from "@/components/scroll-progress"
import { CursorGlow } from "@/components/cursor-glow"
import { FloatingControls } from "@/components/floating-controls"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <main>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Hero />
        </div>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <FloatingControls />
    </>
  )
}
