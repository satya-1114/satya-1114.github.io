import { motion, useReducedMotion } from 'framer-motion'
import type { ProjectVisual as VisualKind } from '@/data/projects'
import { cn } from '@/lib/utils'

interface Props {
  kind: VisualKind
  nodes: string[]
  className?: string
}

/**
 * Project-specific abstract architecture diagrams — no stock photography.
 * Rendered from the project's own architecture nodes.
 */
export function ProjectVisual({ kind, nodes, className }: Props) {
  const reduce = useReducedMotion()

  return (
    <div
      className={cn(
        'relative aspect-[4/3] w-full overflow-hidden rounded-md border border-hairline bg-surface-muted',
        className,
      )}
      role="img"
      aria-label={`Architecture diagram: ${nodes.join(' → ')}`}
    >
      <Grid />
      <div className="absolute inset-0 grid place-items-center p-6 sm:p-10">
        {kind === 'radial' ? (
          <Radial nodes={nodes} reduce={!!reduce} />
        ) : kind === 'grid' ? (
          <GridNodes nodes={nodes} />
        ) : kind === 'nodes' ? (
          <Nodes nodes={nodes} reduce={!!reduce} />
        ) : (
          <Flow nodes={nodes} vertical={kind === 'layers'} />
        )}
      </div>
    </div>
  )
}

function Grid() {
  return (
    <svg className="absolute inset-0 h-full w-full text-border" aria-hidden="true">
      <defs>
        <pattern id="pv-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pv-grid)" />
    </svg>
  )
}

const chip =
  'rounded border border-hairline bg-background/80 px-3 py-2 text-center font-mono text-[0.62rem] uppercase leading-tight tracking-[0.12em] backdrop-blur'

function Flow({ nodes, vertical }: { nodes: string[]; vertical?: boolean }) {
  return (
    <div
      className={cn(
        'flex w-full items-stretch justify-center gap-2',
        vertical ? 'flex-col' : 'flex-col sm:flex-row sm:items-center',
      )}
    >
      {nodes.map((n, i) => (
        <div key={n} className={cn('flex items-center gap-2', vertical ? '' : 'sm:flex-1')}>
          <span className={cn(chip, 'flex-1')}>{n}</span>
          {i < nodes.length - 1 && (
            <span aria-hidden="true" className="font-mono text-xs text-accent">
              {vertical ? '↓' : '→'}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

function GridNodes({ nodes }: { nodes: string[] }) {
  return (
    <div className="grid w-full grid-cols-2 gap-2">
      {nodes.map((n) => (
        <span key={n} className={chip}>
          {n}
        </span>
      ))}
    </div>
  )
}

function Nodes({ nodes, reduce }: { nodes: string[]; reduce: boolean }) {
  return (
    <div className="flex w-full flex-col gap-2">
      {nodes.map((n, i) => (
        <motion.div
          key={n}
          className="flex items-center gap-3"
          initial={reduce ? {} : { opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span className="h-px flex-1 bg-border" />
          <span className={chip}>{n}</span>
        </motion.div>
      ))}
    </div>
  )
}

function Radial({ nodes, reduce }: { nodes: string[]; reduce: boolean }) {
  const outer = nodes.slice(1)
  return (
    <div className="relative grid h-full w-full place-items-center">
      <motion.span
        className={cn(chip, 'z-10 border-accent/50')}
        animate={reduce ? {} : { scale: [1, 1.03, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {nodes[0]}
      </motion.span>
      <div className="absolute inset-0 grid grid-cols-2 content-between gap-2 p-2 sm:p-4">
        {outer.map((n, i) => (
          <span
            key={n}
            className={cn(chip, 'self-start', i % 2 ? 'justify-self-end' : 'justify-self-start')}
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  )
}
