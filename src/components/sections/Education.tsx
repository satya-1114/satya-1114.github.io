import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { education } from '@/data/education'

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="section border-t border-hairline"
    >
      <div className="shell">
        <SectionHeading id="education" eyebrow="Education" title="Education" />

        <ol className="border-t border-hairline">
          {education.map((item, i) => (
            <Reveal as="li" key={item.institution} delay={i * 0.06}>
              <article className="grid gap-3 border-b border-hairline py-8 md:grid-cols-[10rem_1fr_auto] md:items-baseline md:gap-10 md:py-10">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {item.period}
                </p>
                <div>
                  <h3 className="display text-2xl md:text-3xl">{item.institution}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {item.qualification}
                    {item.meta && ` · ${item.meta}`}
                  </p>
                </div>
                <p className="font-mono text-sm text-accent">{item.result}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
