import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Search } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { certCategories, certifications } from '@/data/certifications'
import { cn } from '@/lib/utils'

type Category = (typeof certCategories)[number]

export function Certifications() {
  const [category, setCategory] = useState<Category>('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return certifications.filter((c) => {
      const inCategory = category === 'All' || c.category === category
      const inQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.issuer.toLowerCase().includes(q) ||
        c.kind.toLowerCase().includes(q)
      return inCategory && inQuery
    })
  }, [category, query])

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="section border-t border-hairline"
    >
      <div className="shell">
        <SectionHeading
          id="certifications"
          eyebrow="Credentials"
          title="Certifications"
          lead="Courses, bootcamps, virtual internships and achievements — each labelled for what it is, and each backed by the original certificate."
        />

        <div className="flex flex-col gap-4 border-y border-hairline py-4 lg:flex-row lg:items-center lg:justify-between">
          <div role="tablist" aria-label="Certificate categories" className="flex flex-wrap gap-2">
            {certCategories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                onClick={() => setCategory(c)}
                className={cn(
                  'rounded-full border px-4 py-1.5 text-sm transition-colors duration-300',
                  category === c
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-hairline text-muted-foreground hover:text-foreground',
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-64">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              strokeWidth={1.6}
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search certificates"
              aria-label="Search certificates"
              className="w-full rounded-full border border-hairline bg-transparent py-2 pl-9 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent"
            />
          </div>
        </div>

        <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
          {filtered.length} of {certifications.length} credentials
        </p>

        <motion.ul layout className="mt-6 grid gap-px bg-hairline md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((c) => (
              <motion.li
                key={c.slug}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.28 }}
                className="bg-background"
              >
                <article className="flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[0.56rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {c.kind}
                    </span>
                    <span className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-accent">
                      {c.category}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-medium leading-snug tracking-tight">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
                  {c.date !== '—' && (
                    <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground/80">
                      {c.date}
                    </p>
                  )}
                  {c.credential && (
                    <p className="mt-3 break-words font-mono text-[0.58rem] text-muted-foreground/70">
                      {c.credential}
                    </p>
                  )}
                  <div className="mt-auto pt-6">
                    {c.file && (
                      <a
                        href={c.file}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline text-sm"
                      >
                        View certificate <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {filtered.length === 0 && (
          <p className="mt-10 text-sm text-muted-foreground">
            No credentials match that search.
          </p>
        )}
      </div>
    </section>
  )
}
