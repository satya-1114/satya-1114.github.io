import { Navigation } from '@/components/Navigation'
import { CommandMenu, useCommandMenu } from '@/components/CommandMenu'
import { GrainOverlay } from '@/components/GrainOverlay'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Education } from '@/components/sections/Education'
import { Certifications } from '@/components/sections/Certifications'
import { Research } from '@/components/sections/Research'
import { BeyondCode } from '@/components/sections/BeyondCode'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Index() {
  const { open, setOpen } = useCommandMenu()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GrainOverlay />
      <Navigation onOpenCommand={() => setOpen(true)} />
      <CommandMenu open={open} setOpen={setOpen} />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Research />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
