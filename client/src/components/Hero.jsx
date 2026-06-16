import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const roles = ['Full Stack Developer', 'MERN Stack Engineer', 'React Developer', 'Node.js Developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-indigo-950/20 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-24 animate-fade-in relative">
        <p className="font-mono text-primary mb-4 text-sm tracking-widest animate-slide-up">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-3 leading-tight">
          Yash Majithiya
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6 min-h-[1.2em]">
          {displayed}
          <span className="animate-blink text-primary">|</span>
        </h2>
        <p className="text-slate-400 max-w-xl text-lg mb-10 leading-relaxed">
          I build fast, scalable, and beautiful web applications end-to-end. Passionate about
          clean code, great developer experience, and turning ideas into production-ready products.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link to="projects" smooth duration={500} offset={-70}>
            <button className="btn-primary text-base">See My Work</button>
          </Link>
          <Link to="contact" smooth duration={500} offset={-70}>
            <button className="btn-outline text-base">Get In Touch</button>
          </Link>
        </div>

        {/* Social links */}
        <div className="flex gap-5 mt-12">
          {[
            { label: 'GitHub', href: 'https://github.com/yashmajithiya', icon: 'GH' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/yashmajithiya', icon: 'LI' },
            { label: 'Email', href: 'mailto:yash.majithiya@example.com', icon: '@' },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all font-mono text-xs"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs font-mono">
        <span>scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  )
}
