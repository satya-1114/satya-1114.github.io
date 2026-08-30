import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, Loader2 } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { links } from '@/data/links'

interface Errors {
  name?: string
  email?: string
  message?: string
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const set = (key: keyof typeof values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = () => {
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) next.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = 'Please enter a valid email address.'
    if (values.message.trim().length < 10) next.message = 'Please write at least 10 characters.'
    return next
  }

  /**
   * No backend is connected. Submissions open the visitor's mail client via mailto.
   * Replace this handler to wire up a real email service later.
   */
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setStatus('error')
      return
    }
    setStatus('sending')
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name.trim()}`)
    const body = encodeURIComponent(`${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`)
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`
    window.setTimeout(() => setStatus('sent'), 600)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="section border-t border-hairline">
      <div className="shell">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
            Contact
          </p>
          <h2 id="contact-title" className="display mt-8 max-w-4xl text-hero">
            Let&apos;s build something useful.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 border-t border-hairline pt-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <Reveal>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              Open to software engineering opportunities, internships, collaborations and
              interesting technical projects.
            </p>
            <ul className="mt-10 space-y-3">
              <li>
                <a href={`mailto:${links.email}`} className="link-underline text-base">
                  {links.email} <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-base"
                >
                  LinkedIn <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
              <li>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-base"
                >
                  GitHub <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} noValidate className="space-y-6">
              <Field
                id="contact-name"
                label="Name"
                value={values.name}
                onChange={set('name')}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                id="contact-email"
                label="Email"
                type="email"
                value={values.email}
                onChange={set('email')}
                error={errors.email}
                autoComplete="email"
              />
              <Field
                id="contact-message"
                label="Message"
                value={values.message}
                onChange={set('message')}
                error={errors.message}
                multiline
              />

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {status === 'sending' && <Loader2 className="h-4 w-4 animate-spin" />}
                  Send message
                </button>
                <p aria-live="polite" className="text-sm text-muted-foreground">
                  {status === 'sent' && (
                    <span className="inline-flex items-center gap-2 text-accent">
                      <Check className="h-4 w-4" /> Your mail client should now be open.
                    </span>
                  )}
                  {status === 'error' && Object.keys(errors).length > 0 && (
                    <span className="text-destructive">Please fix the fields above.</span>
                  )}
                </p>
              </div>
              <p className="text-xs text-muted-foreground">
                This form opens your email client — no message is stored anywhere.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

interface FieldProps {
  id: string
  label: string
  value: string
  onChange: (e: { target: { value: string } }) => void
  error?: string
  type?: string
  multiline?: boolean
  autoComplete?: string
}

function Field({ id, label, value, onChange, error, type = 'text', multiline, autoComplete }: FieldProps) {
  const shared = {
    id,
    value,
    onChange,
    autoComplete,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? `${id}-error` : undefined,
    className:
      'w-full border-b border-hairline bg-transparent py-3 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-accent',
  }

  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      {multiline ? (
        <textarea {...shared} rows={4} placeholder="What would you like to build?" />
      ) : (
        <input {...shared} type={type} placeholder={label} />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
