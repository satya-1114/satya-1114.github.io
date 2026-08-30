import { useEffect, useState } from 'react'
import {
  ArrowDownToLine,
  Github,
  Instagram,
  Linkedin,
  Monitor,
  Moon,
  Search,
  Sun,
} from 'lucide-react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { links, sections } from '@/data/links'
import { useTheme } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

export function useCommandMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return { open, setOpen }
}

export function CommandMenuTrigger({
  onClick,
  className,
}: {
  onClick: () => void
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open command menu"
      className={cn(
        'group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/70 py-1.5 pl-3 pr-2 text-xs text-muted-foreground backdrop-blur transition-colors hover:border-accent/50 hover:text-foreground',
        className,
      )}
    >
      <Search className="h-3.5 w-3.5" strokeWidth={1.75} />
      <span className="hidden sm:inline">Search</span>
      <kbd className="rounded border border-hairline bg-muted px-1.5 py-0.5 font-mono text-[0.6rem] tracking-wider">
        ⌘K
      </kbd>
    </button>
  )
}

export function CommandMenu({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) {
  const { setTheme } = useTheme()

  const run = (fn: () => void) => {
    setOpen(false)
    // let the dialog close before scrolling / navigating
    requestAnimationFrame(fn)
  }

  const goTo = (id: string) =>
    run(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }))

  const openUrl = (url: string) => run(() => window.open(url, '_blank', 'noopener,noreferrer'))

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Jump to a section or open a link…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {sections.map((s) => (
            <CommandItem key={s.id} value={`Go to ${s.label}`} onSelect={() => goTo(s.id)}>
              Go to {s.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Links">
          <CommandItem value="Open GitHub" onSelect={() => openUrl(links.github)}>
            <Github className="mr-2 h-4 w-4" /> Open GitHub
          </CommandItem>
          <CommandItem value="Open LinkedIn" onSelect={() => openUrl(links.linkedin)}>
            <Linkedin className="mr-2 h-4 w-4" /> Open LinkedIn
          </CommandItem>
          <CommandItem value="Open Instagram creative work" onSelect={() => openUrl(links.instagram)}>
            <Instagram className="mr-2 h-4 w-4" /> Open Instagram — creative work
          </CommandItem>
          <CommandItem value="Download resume" onSelect={() => openUrl(links.resume)}>
            <ArrowDownToLine className="mr-2 h-4 w-4" /> Download Resume
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Theme">
          <CommandItem value="Theme light" onSelect={() => run(() => setTheme('light'))}>
            <Sun className="mr-2 h-4 w-4" /> Light
          </CommandItem>
          <CommandItem value="Theme dark" onSelect={() => run(() => setTheme('dark'))}>
            <Moon className="mr-2 h-4 w-4" /> Dark
          </CommandItem>
          <CommandItem value="Theme system" onSelect={() => run(() => setTheme('system'))}>
            <Monitor className="mr-2 h-4 w-4" /> System
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
