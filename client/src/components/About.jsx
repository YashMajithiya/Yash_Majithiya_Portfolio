import { useLanguage } from '../i18n/LangContext'

const STATS = [
  { val: '3+',  label: 'Years Exp.',   col: 'var(--a)'   },
  { val: '20+', label: 'Projects',     col: '#10b981'    },
  { val: '10+', label: 'Clients',      col: '#f59e0b'    },
  { val: '5+',  label: 'OS Contribs',  col: '#ec4899'    },
]

const STACK = ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Next.js', 'Docker']

const VALUES = [
  { icon: '✦', text: 'Clean code over clever code' },
  { icon: '✦', text: 'User experience is everyone\'s job' },
  { icon: '✦', text: 'Ship fast, iterate often' },
  { icon: '✦', text: 'Transparent, async-first communication' },
]

const OPEN_TO = [
  { label: 'Full-time roles',   icon: '💼', col: { from: '#5b50f0', rgb: '91,80,240' }    },
  { label: 'Freelance projects', icon: '🤝', col: { from: '#10b981', rgb: '16,185,129' }   },
  { label: 'Consulting calls',   icon: '📞', col: { from: '#f59e0b', rgb: '245,158,11' }   },
  { label: 'Open-source collab', icon: '🌐', col: { from: '#0ea5e9', rgb: '14,165,233' }   },
]

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        <div className="sr">
          <p className="eyebrow">01 — {t.about.sub}</p>
          <h2 className="h-section mb-4">
            {t.about.h1}<br /><span className="grad">{t.about.h2}</span>
          </h2>
        </div>

        <div className="sep mt-8 mb-12" />

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min">

          {/* ── Main Bio — 2 cols × 2 rows ── */}
          <div className="sr bento-card sm:col-span-2 lg:row-span-2 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(var(--a-rgb),.1) 0%, transparent 70%)' }} />

            {/* Avatar row */}
            <div className="flex items-center gap-4 mb-7">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl select-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(var(--a-rgb),.15), rgba(var(--a-rgb),.05))',
                    border: '1px solid rgba(var(--a-rgb),.2)',
                  }}>
                  👨‍💻
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-400"
                  style={{ border: '2px solid var(--bg)' }} />
              </div>
              <div>
                <p className="font-bold text-t1 text-lg leading-tight">Yash Majithiya</p>
                <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--a)' }}>Full Stack Developer · India</p>
                <p className="text-[10px] font-mono text-t3 mt-0.5">IST · UTC+5:30 · Remote-first</p>
              </div>
            </div>

            {/* Bio text */}
            <div className="space-y-4 text-[0.93rem] leading-[1.8] text-t2 mb-7">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {/* Core stack pills */}
            <div className="mb-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-2.5">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {STACK.map((s) => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-xl font-medium transition-all hover:-translate-y-0.5"
                    style={{
                      background: 'rgba(var(--a-rgb),.08)',
                      color: 'var(--a)',
                      border: '1px solid rgba(var(--a-rgb),.18)',
                    }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="pt-5" style={{ borderTop: '1px solid var(--border)' }}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-3">I believe in</p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {VALUES.map(({ icon, text }) => (
                  <p key={text} className="text-xs text-t2 flex items-start gap-2">
                    <span style={{ color: 'var(--a)' }}>{icon}</span>{text}
                  </p>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="inline-flex items-center gap-2 mt-6 text-xs font-mono text-t3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative rounded-full h-1.5 w-1.5 bg-green-400" />
              </span>
              {t.about.location}
            </div>
          </div>

          {/* ── Currently card ── */}
          <div className="sr bento-card sr-d1">
            <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-4">Currently</p>
            <div className="space-y-3.5">
              {[
                { icon: '🏢', bg: 'rgba(var(--a-rgb),.1)', border: 'rgba(var(--a-rgb),.18)', title: 'The Gateway Corp', sub: 'Full Stack Developer', subCol: 'var(--a)' },
                { icon: '📱', bg: 'rgba(16,185,129,.1)',    border: 'rgba(16,185,129,.2)',    title: 'AFX DSO Platform', sub: 'Enterprise mobile platform' },
                { icon: '📚', bg: 'rgba(245,158,11,.1)',    border: 'rgba(245,158,11,.2)',    title: 'Studying', sub: 'AWS, System Design, tRPC' },
              ].map(({ icon, bg, border, title, sub, subCol }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-base"
                    style={{ background: bg, border: `1px solid ${border}` }}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-t1 leading-tight">{title}</p>
                    <p className="text-xs mt-0.5" style={{ color: subCol || 'var(--t3)' }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Stats card ── */}
          <div className="sr bento-card sr-d2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-4">At a Glance</p>
            <div className="grid grid-cols-2 gap-2.5">
              {STATS.map(({ val, label, col }, i) => (
                <div key={i} className="rounded-xl p-3 text-center"
                  style={{ background: 'rgba(var(--a-rgb),.05)', border: '1px solid rgba(var(--a-rgb),.1)' }}>
                  <p className="font-black text-2xl tracking-tight leading-none mb-1" style={{ color: col }}>{val}</p>
                  <p className="text-[10px] text-t3 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Open to card ── */}
          <div className="sr bento-card sr-d3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-4">Open to</p>
            <div className="space-y-2.5">
              {OPEN_TO.map(({ label, icon, col }) => (
                <div key={label} className="flex items-center gap-3 rounded-xl px-3 py-2.5"
                  style={{ background: `rgba(${col.rgb},.07)`, border: `1px solid rgba(${col.rgb},.14)` }}>
                  <span className="text-base">{icon}</span>
                  <span className="text-sm font-medium" style={{ color: col.from }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Working style card ── */}
          <div className="sr bento-card sr-d2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-4">Working Style</p>
            <div className="space-y-3 text-[0.85rem] text-t2">
              {[
                { label: 'Timezone', val: 'IST · UTC+5:30',         icon: '🕐' },
                { label: 'Mode',     val: 'Remote-first, async-ok',  icon: '🌐' },
                { label: 'Overlap',  val: 'Flexible for EU/US calls', icon: '📞' },
                { label: 'Reviews',  val: 'Enjoy giving feedback',    icon: '🔍' },
              ].map(({ label, val, icon }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-base w-6 flex-shrink-0">{icon}</span>
                  <div>
                    <p className="text-[10px] font-mono text-t3 leading-none mb-0.5 uppercase tracking-wide">{label}</p>
                    <p className="text-sm font-medium text-t1">{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Philosophy — full width ── */}
          <div className="sr bento-card sm:col-span-2 lg:col-span-3 relative overflow-hidden">
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(var(--a-rgb),.08) 0%, transparent 70%)' }} />
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
                style={{ background: 'linear-gradient(135deg, var(--a), var(--a2))' }}>
                💡
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-t3 mb-2">My Approach</p>
                <p className="text-[0.95rem] leading-relaxed text-t1 font-medium">
                  "Clean code is not written by following a set of rules — it emerges from caring about your craft.
                  I build for performance, maintainability, and the developer who reads the code at 2 AM."
                </p>
                <p className="text-xs text-t3 font-mono mt-3">
                  — remote, async, and always down for a good architecture conversation
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
