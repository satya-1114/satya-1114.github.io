import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  id: string
  eyebrow: string
  title: string
  lead?: string
  align?: 'left' | 'split'
  className?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = 'split',
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn('mb-14 md:mb-20', className)}>
      <Reveal>
        <p className="eyebrow flex items-center gap-3">
          <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
      </Reveal>
      <div
        className={cn(
          'mt-6 gap-8',
          align === 'split' ? 'grid items-end lg:grid-cols-[1.2fr_1fr]' : 'block',
        )}
      >
        <Reveal delay={0.05}>
          <h2 id={`${id}-title`} className="display text-section">
            {title}
          </h2>
        </Reveal>
        {lead && (
          <Reveal delay={0.12}>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {lead}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  )
}
