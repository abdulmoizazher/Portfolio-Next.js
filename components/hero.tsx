import Link from "next/link"

export function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase">
            Good morning
          </p>
          <h1 className="text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6 text-balance">
            {"I'm a software engineer passionate about building scalable applications and turning ideas into practical, user-focused solutions.\n"}
          </h1>
          {/*<p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">*/}
          {/*  Currently, I build accessible, pixel-perfect digital experiences at{" "}*/}
          {/*  <Link href="#" className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">*/}
          {/*    Company*/}
          {/*  </Link>*/}
          {/*  , specializing in frontend development and design systems.*/}
          {/*</p>*/}
          <Link
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium border border-border rounded-md text-foreground hover:bg-secondary transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
