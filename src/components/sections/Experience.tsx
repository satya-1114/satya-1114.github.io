import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section border-t border-hairline"
    >
      <div className="shell">
        <SectionHeading
          id="experience"
          eyebrow="Experience"
          title="Experience"
          lead="Internships and structured programs, labelled by what they actually were. Courses and certificates are kept separate, further down the page."
        />

        <ol className="border-t border-hairline">
          {experience.map((item, i) => (
            <Reveal as="li" key={`${item.role}-${item.org}`} delay={i * 0.04}>
              <article className="group grid gap-4 border-b border-hairline py-8 md:grid-cols-[10rem_1fr] md:gap-10 md:py-10">
                <div className="flex items-start justify-between gap-4 md:flex-col md:justify-start md:gap-3">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {item.period}
                  </p>
                  <span className="inline-flex w-fit items-center rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {item.kind}
                  </span>
                </div>

                <div>
                  <h3 className="display text-2xl transition-colors duration-300 group-hover:text-accent md:text-3xl">
                    {item.role}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.org}</p>
                  <ul className="mt-4 max-w-2xl space-y-2">
                    {item.points.map((p) => (
                      <li
                        key={p}
                        className="relative pl-5 text-sm leading-relaxed text-muted-foreground md:text-base"
                      >
                        <span
                          className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {item.verified && (
                    <p className="mt-4 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted-foreground/70">
                      Verified · {item.verified}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
