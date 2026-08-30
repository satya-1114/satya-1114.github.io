import { ArrowUpRight, Github } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ProjectVisual } from '@/components/ProjectVisual'
import type { Project } from '@/data/projects'

export function ProjectDetail({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  return (
    <Dialog open={Boolean(project)} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto rounded-md border-hairline bg-background p-0">
        {project && (
          <>
            <DialogHeader className="space-y-0 border-b border-hairline p-6 text-left md:p-8">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent">
                Project {project.index}
              </p>
              <DialogTitle className="display mt-3 text-3xl md:text-4xl">
                {project.name}
              </DialogTitle>
              <p className="mt-2 text-muted-foreground">{project.tagline}</p>
            </DialogHeader>

            <div className="space-y-8 p-6 md:p-8">
              <ProjectVisual kind={project.visual} nodes={project.architecture} />

              <Block title="Problem">
                <p>{project.problem}</p>
              </Block>
              <Block title="Solution">
                <p>{project.solution}</p>
              </Block>
              <Block title="Features">
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="relative pl-5">
                      <span
                        className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="Technology">
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-hairline px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="Architecture">
                <p className="font-mono text-sm">{project.architecture.join('  →  ')}</p>
              </Block>
              <Block title="My contribution">
                <p>{project.contribution}</p>
              </Block>

              <div className="flex flex-wrap gap-3 border-t border-hairline pt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
                >
                  <Github className="h-4 w-4" strokeWidth={1.6} />
                  View on GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent"
                  >
                    Live demo
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h4 className="eyebrow">{title}</h4>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
        {children}
      </div>
    </section>
  )
}
