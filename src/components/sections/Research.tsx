import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { research } from '@/data/experience'
import { certificateUrl } from '@/data/certifications'

export function Research() {
  const certificate = certificateUrl(research.certificateSlug)

  return (
    <section
      id="research"
      aria-labelledby="research-title"
      className="section border-t border-hairline"
    >
      <div className="shell">
        <SectionHeading id="research" eyebrow="Publication" title="Research" />

        <Reveal>
          <article className="border-t border-hairline pt-10">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent">
              Published · {research.publishedOn}
            </p>
            <h3 className="display mt-5 max-w-4xl text-3xl md:text-5xl">{research.title}</h3>

            <dl className="mt-10 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
              <Field label="Journal" value={research.journal} />
              <Field label="Issue" value={research.issue} />
              <Field label="Paper ID" value={research.paperId} />
              <Field label="Registration ID" value={research.registrationId} />
            </dl>

            <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
              Co-authors: {research.coAuthors.join(', ')}.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {certificate && (
                <a
                  href={certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
                >
                  Publication certificate
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </a>
              )}
              <a
                href={research.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent"
              >
                Repository
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background p-5">
      <dt className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-snug">{value}</dd>
    </div>
  )
}
