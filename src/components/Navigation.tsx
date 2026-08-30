import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Instagram, Linkedin, Menu, X } from 'lucide-react'
import { links, sections } from '@/data/links'
import { useActiveSection } from '@/hooks/useActiveSection'
import { ThemeToggle } from '@/components/ThemeToggle'
import { CommandMenuTrigger } from '@/components/CommandMenu'
import { cn } from '@/lib/utils'

const sectionIds = sections.map((s) => s.id)

export function Navigation({ onOpenCommand }: { onOpenCommand: () => void }) {
  const active = useActiveSection(sectionIds)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const go = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-hairline bg-background/80 backdrop-blur-xl'
            : 'border-b border-transparent',
        )}
      >
        <nav className="shell flex h-16 items-center justify-between gap-6 md:h-20" aria-label="Primary">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-left font-display text-[0.72rem] font-semibold uppercase leading-[1.15] tracking-[0.16em]"
          >
            Annamneedi
            <br />
            <span className="text-muted-foreground">Satyanarayana</span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => go(s.id)}
                  aria-current={active === s.id ? 'true' : undefined}
                  className={cn(
                    'relative rounded-full px-3 py-1.5 text-[0.8rem] transition-colors duration-300',
                    active === s.id
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-muted"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  {s.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 md:flex">
              <IconLink href={links.github} label="GitHub profile">
                <Github className="h-4 w-4" strokeWidth={1.6} />
              </IconLink>
              <IconLink href={links.linkedin} label="LinkedIn profile">
                <Linkedin className="h-4 w-4" strokeWidth={1.6} />
              </IconLink>
              <IconLink href={links.instagram} label="Content creation on Instagram" accent>
                <Instagram className="h-4 w-4" strokeWidth={1.6} />
              </IconLink>
            </div>
            <CommandMenuTrigger onClick={onOpenCommand} />
            <ThemeToggle className="hidden sm:inline-flex" />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="grid h-9 w-9 place-items-center rounded-full border border-hairline lg:hidden"
            >
              <Menu className="h-4 w-4" strokeWidth={1.6} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] bg-background lg:hidden"
          >
            <div className="shell flex h-16 items-center justify-between md:h-20">
              <span className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em]">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="grid h-9 w-9 place-items-center rounded-full border border-hairline"
              >
                <X className="h-4 w-4" strokeWidth={1.6} />
              </button>
            </div>
            <nav className="shell mt-6" aria-label="Mobile">
              <ul className="divide-y divide-hairline border-y border-hairline">
                {sections.map((s, i) => (
                  <motion.li
                    key={s.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.35 }}
                  >
                    <button
                      type="button"
                      onClick={() => go(s.id)}
                      className="flex w-full items-baseline justify-between py-4 text-left"
                    >
                      <span className="display text-3xl">{s.label}</span>
                      <span className="font-mono text-[0.65rem] text-muted-foreground">
                        0{i + 1}
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <a href={links.github} target="_blank" rel="noreferrer" className="link-underline">
                    GitHub
                  </a>
                  <a href={links.linkedin} target="_blank" rel="noreferrer" className="link-underline">
                    LinkedIn
                  </a>
                  <a
                    href={links.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-accent"
                  >
                    Creative
                  </a>
                </div>
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function IconLink({
  href,
  label,
  children,
  accent,
}: {
  href: string
  label: string
  children: React.ReactNode
  accent?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className={cn(
        'grid h-8 w-8 place-items-center rounded-full transition-colors duration-300 hover:bg-muted',
        accent ? 'text-accent' : 'text-muted-foreground hover:text-foreground',
      )}
    >
      {children}
    </a>
  )
}
