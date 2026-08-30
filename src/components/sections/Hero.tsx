import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownToLine, ArrowUpRight } from 'lucide-react'
import { links } from '@/data/links'
import { HeroPortrait } from '@/components/sections/HeroPortrait'

const roles = ['Full-Stack Developer', 'Backend Developer', 'AI / Cloud Enthusiast']
const meta = ['CSE · JNTUK', 'India', 'Graduating 2027']

export function Hero() {
  const reduce = useReducedMotion()

  const line = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: '40%' },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36 lg:pt-44">
      <div className="shell">
        <motion.p
          className="eyebrow mb-8 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
          Software · AI · Cloud · Creative
        </motion.p>

        <h1 className="display text-[clamp(3rem,7.2vw,6.75rem)] leading-[0.92] tracking-[-0.045em]">
          <span className="block overflow-hidden">
            <motion.span className="block" {...line(0.05)}>
              Annamneedi
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span className="block text-muted-foreground" {...line(0.15)}>
              Satyanarayana
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <div>
            <motion.ul
              className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-hairline pt-6 font-mono text-[0.72rem] uppercase tracking-[0.16em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              {roles.map((r) => (
                <li key={r} className="flex items-center gap-4">
                  {r}
                  <span className="h-1 w-1 rounded-full bg-accent last:hidden" aria-hidden="true" />
                </li>
              ))}
            </motion.ul>

            <motion.p
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              Computer Science undergraduate building full-stack applications, backend systems,
              AI-enabled products and cloud solutions.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <a
                href={links.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                Download Resume
                <ArrowDownToLine className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-muted-foreground hover:text-foreground"
              >
                GitHub <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-muted-foreground hover:text-foreground"
              >
                LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-accent"
              >
                Indiawind <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <HeroPortrait />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-16 flex items-center justify-between border-t border-hairline pt-5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {meta.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <span aria-hidden="true" className="hidden items-center gap-2 sm:flex">
            Scroll
            <motion.span
              animate={reduce ? {} : { y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              ↓
            </motion.span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}
