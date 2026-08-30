import { useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { skillGroups } from '@/data/skills'
import { cn } from '@/lib/utils'

export function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[0].id)
  const active = skillGroups.find((g) => g.id === activeId)!

  return (
    <section id="skills" aria-labelledby="skills-title" className="section border-t border-hairline">
      <div className="shell">
        <SectionHeading
          id="skills"
          eyebrow="Skills"
          title="Skills"
          lead="Grouped by where they are used rather than rated on a scale. Everything listed comes from project work, coursework or an internship."
        />

        <div className="grid gap-px overflow-hidden rounded-md border border-hairline bg-hairline lg:grid-cols-[minmax(0,18rem)_1fr]">
          <ul className="flex gap-px overflow-x-auto bg-hairline lg:flex-col lg:overflow-visible">
            {skillGroups.map((group) => {
              const isActive = group.id === activeId
              return (
                <li key={group.id} className="flex-1 bg-background lg:flex-none">
                  <button
                    type="button"
                    onClick={() => setActiveId(group.id)}
                    onMouseEnter={() => setActiveId(group.id)}
                    onFocus={() => setActiveId(group.id)}
                    aria-pressed={isActive}
                    className={cn(
                      'flex w-full items-center justify-between gap-4 whitespace-nowrap px-5 py-4 text-left text-sm transition-colors duration-300',
                      isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <span className="font-display font-medium tracking-tight">{group.title}</span>
                    <span className="font-mono text-[0.6rem] text-muted-foreground">
                      {String(group.items.length).padStart(2, '0')}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="bg-background p-6 md:p-10">
            <motion.div key={active.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <p className="eyebrow">{active.title}</p>
              <p className="mt-3 max-w-lg text-sm text-muted-foreground">{active.note}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {active.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.035, duration: 0.35 }}
                    className="rounded-full border border-hairline px-4 py-2 text-sm transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
            Select a group to view its stack — no proficiency percentages, they never mean anything.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
