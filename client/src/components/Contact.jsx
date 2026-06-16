import { useState } from 'react'
import axios from 'axios'
import { useLanguage } from '../i18n/LangContext'

const API_URL = import.meta.env.VITE_API_URL || '/api'

const GHIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)
const LIIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
)

const INFO_PANELS = [
  {
    icon: (
      <span className="relative flex h-2 w-2 flex-shrink-0 mt-0.5">
        <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-70" />
        <span className="relative rounded-full h-2 w-2 bg-green-400" />
      </span>
    ),
    label: 'Availability',
    value: (t) => t.contact.availability,
    accent: true,
  },
  {
    icon: (
      <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    label: 'Response Time',
    value: (t) => t.contact.responseTime,
  },
  {
    icon: (
      <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
      </svg>
    ),
    label: 'Timezone',
    value: () => 'IST · UTC+5:30',
  },
  {
    icon: (
      <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"/>
      </svg>
    ),
    label: 'Open to',
    value: () => 'Full-time · Freelance · Consulting',
  },
]

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/yashmajithiya',     icon: <GHIcon /> },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yashmajithiya', icon: <LIIcon /> },
  { label: 'Email',    href: 'mailto:yash.majithiya@example.com',     icon: <MailIcon /> },
]

export default function Contact() {
  const { t } = useLanguage()
  const f = t.contact.form
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [state, setState] = useState('idle')

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setState('loading')
    try {
      await axios.post(`${API_URL}/contact`, form)
      setState('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setState('error')
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="sr">
          <p className="eyebrow">05 — {t.contact.sub}</p>
          <h2 className="h-section mb-4">
            {t.contact.h1} <span className="grad">{t.contact.h2}</span>
          </h2>
          <p className="text-t2 text-[0.92rem] leading-relaxed" style={{ maxWidth: '48ch' }}>
            {t.contact.description}
          </p>
        </div>

        <div className="sep mt-8 mb-12" />

        <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">

          {/* ── Left: Info ── */}
          <div className="sr space-y-6">

            {/* Direct email CTA */}
            <a href="mailto:yash.majithiya@example.com"
              className="block rounded-[var(--radius-lg)] p-5 transition-all hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, rgba(var(--a-rgb),.1) 0%, rgba(var(--a-rgb),.04) 100%)',
                border: '1px solid rgba(var(--a-rgb),.2)',
              }}>
              <p className="font-mono text-[10px] uppercase tracking-widest mb-2" style={{ color: 'var(--a)' }}>
                Direct email
              </p>
              <p className="font-bold text-t1 text-[0.9rem] break-all">yash.majithiya@example.com</p>
              <p className="text-xs text-t3 font-mono mt-1">Click to open in mail client →</p>
            </a>

            {/* Info panels */}
            <div className="space-y-2.5">
              {INFO_PANELS.map(({ icon, label, value, accent }, i) => (
                <div key={i} className="panel flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'var(--a-dim)', color: 'var(--a)' }}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-t3 uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-sm font-semibold" style={{ color: accent ? '#22c55e' : 'var(--t1)' }}>
                      {value(t)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-3">Links</p>
              <div className="flex gap-2">
                {SOCIALS.map(({ label, href, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center gap-2 text-t3 transition-all hover:text-a hover:border-[var(--a)] hover:-translate-y-0.5"
                    style={{ border: '1px solid var(--border)' }}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Closing note */}
            <div className="rounded-xl p-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <p className="text-[0.82rem] leading-relaxed text-t3 font-mono">
                No recruitment agency messages please. If you're hiring or have a project — reach out directly, I read every message.
              </p>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="sr">
            {state === 'success' ? (
              <div className="card flex flex-col items-center justify-center text-center py-16 gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-green-500"
                  style={{ background: 'rgba(34,197,94,.1)', border: '1px solid rgba(34,197,94,.25)' }}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <p className="font-black text-xl text-t1">{f.success}</p>
                  <p className="text-sm text-t2 mt-1">I'll get back to you within 24 hours.</p>
                </div>
                <button className="btn-outline mt-2 text-xs" onClick={() => setState('idle')}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-mono text-t3 uppercase tracking-widest block mb-1.5">{f.name}</span>
                    <input name="name" required value={form.name} onChange={handleChange}
                      placeholder={f.namePH || 'John Doe'}
                      className="field w-full" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-mono text-t3 uppercase tracking-widest block mb-1.5">{f.email}</span>
                    <input name="email" type="email" required value={form.email} onChange={handleChange}
                      placeholder={f.emailPH || 'john@example.com'}
                      className="field w-full" />
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs font-mono text-t3 uppercase tracking-widest block mb-1.5">Subject</span>
                  <input name="subject" required value={form.subject} onChange={handleChange}
                    placeholder="Let's work together"
                    className="field w-full" />
                </label>
                <label className="block">
                  <span className="text-xs font-mono text-t3 uppercase tracking-widest block mb-1.5">{f.message}</span>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder={f.messagePH || 'Tell me about your project...'}
                    className="field w-full resize-none" />
                </label>

                {state === 'error' && (
                  <p className="text-xs font-mono" style={{ color: '#ef4444' }}>{f.error}</p>
                )}

                <button type="submit" className="btn-primary w-full" disabled={state === 'loading'}
                  style={{ opacity: state === 'loading' ? 0.7 : 1 }}>
                  {state === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      {f.sending}
                    </>
                  ) : (
                    <>
                      {f.send}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-t3 font-mono text-center">
                  No spam. I respond to every genuine message.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
