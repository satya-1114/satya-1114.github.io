import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Github, Plus } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { ProjectVisual } from '@/components/ProjectVisual'
import { ProjectDetail } from '@/components/sections/ProjectDetail'
import { featuredProjects, moreProjects, type Project } from '@/data/projects'

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [showMore, setShowMore] = useState(true)

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section border-t border-hairline"
    >
      <div className="shell">
        <SectionHeading
          id="projects"
          eyebrow="Selected Work"
          title="Projects"
          lead="Every project below is a real repository on GitHub. Open one for the problem it solves, its architecture and what I built."
        />

        <div className="space-y-24 md:space-y-32">
          {featuredProjects.map((project, i) => (
            <Reveal as="article" key={project.id} delay={0.04}>
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-accent">
                    Project {project.index}
                  </p>
                  <h3 className="display mt-4 text-4xl md:text-6xl">{project.name}</h3>
                  <p className="mt-3 text-lg text-muted-foreground md:text-xl">{project.tagline}</p>
                  <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-hairline px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      Project Details
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                      <Github className="h-4 w-4" strokeWidth={1.6} />
                      View on GitHub
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  aria-label={`Open details for ${project.name}`}
                  className="group block w-full text-left"
                >
                  <ProjectVisual
                    kind={project.visual}
                    nodes={project.architecture}
                    className="transition-transform duration-500 group-hover:-translate-y-1"
                  />
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* More projects */}
        <div className="mt-24 border-t border-hairline pt-10 md:mt-32">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="display text-3xl md:text-4xl">More Projects</h3>
            <button
              type="button"
              onClick={() => setShowMore((v) => !v)}
              aria-expanded={showMore}
              className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <Plus
                className={`h-4 w-4 transition-transform duration-300 ${showMore ? 'rotate-45' : ''}`}
                strokeWidth={1.75}
              />
              {showMore ? 'Show less' : `View ${moreProjects.length} more projects`}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {showMore && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-px overflow-hidden bg-hairline md:grid-cols-2 lg:grid-cols-3"
              >
                {moreProjects.map((project, i) => (
                  <motion.li
                    key={project.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                    className="bg-background"
                  >
                    <article className="flex h-full flex-col p-6 md:p-8">
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {project.index}
                      </p>
                      <h4 className="display mt-3 text-xl">{project.name}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{project.tagline}</p>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground/85">
                        {project.summary}
                      </p>
                      <div className="mt-6 flex items-center gap-4 text-sm">
                        <button
                          type="button"
                          onClick={() => setSelected(project)}
                          className="link-underline"
                        >
                          Details
                        </button>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="link-underline text-muted-foreground hover:text-foreground"
                        >
                          GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="link-underline text-accent"
                          >
                            Live <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </article>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>

      <ProjectDetail project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
