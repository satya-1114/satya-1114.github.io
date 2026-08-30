import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { links } from '@/data/links'
import { interests } from '@/data/education'

export function BeyondCode() {
  return (
    <section
      id="beyond"
      aria-labelledby="beyond-title"
      className="section border-t border-hairline"
    >
      <div className="shell grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
            Beyond Code
          </p>
          <h2 id="beyond-title" className="display mt-6 text-4xl md:text-6xl">
            Content &amp; Creative Work
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            I also explore content creation alongside software development. This is a personal
            creative side project, separate from my software engineering career.
          </p>

          <div className="mt-8 rounded-md border border-hairline bg-surface-muted p-6">
            <p className="font-display text-2xl tracking-tight md:text-3xl">Indiawind</p>
            <p className="mt-2 text-muted-foreground">stay ahead or stay behind.</p>
            <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
              news • knowledge • updates ⚡
            </p>
            <a
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-transform duration-300 hover:-translate-y-0.5"
            >
              Visit Indiawind
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="eyebrow">Currently exploring</p>
          <ul className="mt-8 border-t border-hairline">
            {interests.map((interest, i) => (
              <li
                key={interest}
                className="group flex items-baseline gap-5 border-b border-hairline py-4"
              >
                <span className="font-mono text-[0.6rem] text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-lg tracking-tight transition-colors duration-300 group-hover:text-accent md:text-xl">
                  {interest}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">
            These are areas I am actively learning, not claims of mastery.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
