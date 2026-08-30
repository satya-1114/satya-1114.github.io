import { motion, useReducedMotion } from 'framer-motion'
import profileImg from '@/assets/profile.jpg'

export function HeroPortrait() {
  const reduce = useReducedMotion()

  return (
    <motion.figure
      className="relative w-full max-w-md overflow-hidden rounded-md border border-hairline bg-surface-muted lg:ml-auto"
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
    >
      <img
        src={profileImg}
        alt="Annamneedi Satyanarayana"
        loading="eager"
        decoding="async"
        className="h-full w-full object-cover"
      />
      <figcaption className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent px-4 pb-3 pt-10 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted-foreground">
        Annamneedi Satyanarayana
      </figcaption>
    </motion.figure>
  )
}
