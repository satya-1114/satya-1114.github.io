import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { snapshot } from '@/data/education'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section border-t border-hairline">
      <div className="shell">
        <SectionHeading
          id="about"
          eyebrow="About"
          title="About"
          lead="Computer Science & Engineering undergraduate, graduating in 2027, focused on building software that holds up outside a demo."
        />

        <Reveal>
          <p className="max-w-4xl text-statement font-display font-medium">
            Building software at the intersection of backend engineering, cloud infrastructure and
            AI.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-hairline pt-10 md:grid-cols-2 lg:gap-20">
          <Reveal delay={0.05}>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              I am a CSE undergraduate at Bonam Venkata Chalamayya Engineering College with an 8.5/10
              CGPA, working mainly on backend and full-stack applications. Most of what I know comes
              from building — REST APIs, relational data models, authentication and access control,
              and deploying those services to the cloud.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Alongside coursework in object-oriented programming, data structures, algorithms, DBMS
              and operating systems, I have worked through internships in AWS cloud and DevOps, AI/ML
              and web development, and published research on blockchain-based news verification. I am
              currently deepening my work in AI engineering and cloud architecture.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-hairline bg-hairline lg:grid-cols-4">
          {snapshot.map((item, i) => (
            <Reveal as="li" key={item.label} delay={i * 0.06} className="bg-background p-6 md:p-8">
              <p className="display text-3xl md:text-4xl">{item.value}</p>
              <p className="mt-3 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
                {item.label}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
