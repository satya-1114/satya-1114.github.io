import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { links, PROFILE_NAME } from '@/data/links'

export function Footer() {
  return (
    <footer className="border-t border-hairline py-12">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="display text-2xl md:text-3xl">{PROFILE_NAME}</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <li>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-muted-foreground hover:text-foreground"
              >
                GitHub <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </li>
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-muted-foreground hover:text-foreground"
              >
                LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </li>
            <li>
              <a
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-accent"
              >
                Content Creation <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-hairline pt-6 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
          <p>© {new Date().getFullYear()} {PROFILE_NAME}</p>
          <a href="#top" className="inline-flex items-center gap-2 hover:text-foreground">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
