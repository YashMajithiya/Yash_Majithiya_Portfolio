import { useState } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || '/api'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'loading' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await axios.post(`${API_URL}/contact`, form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <p className="section-sub">// 05. contact</p>
      <h2 className="section-heading">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-12 mt-10">
        {/* Left text */}
        <div>
          <p className="text-slate-400 leading-relaxed mb-6">
            Whether you have a project in mind, a job opportunity, or just want to say hi —
            my inbox is always open. I&apos;ll try my best to get back to you!
          </p>

          <div className="space-y-4">
            {[
              { icon: '📧', label: 'Email', value: 'yash.majithiya@example.com', href: 'mailto:yash.majithiya@example.com' },
              { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/yashmajithiya', href: 'https://linkedin.com/in/yashmajithiya' },
              { icon: '🐙', label: 'GitHub', value: 'github.com/yashmajithiya', href: 'https://github.com/yashmajithiya' },
            ].map(({ icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors group">
                <span className="text-xl">{icon}</span>
                <div>
                  <p className="text-xs text-slate-600 font-mono">{label}</p>
                  <p className="text-sm group-hover:text-primary transition-colors">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="card space-y-5">
          <div>
            <label className="block text-sm text-slate-400 mb-1.5 font-mono">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1.5 font-mono">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1.5 font-mono">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project or idea..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-sm text-center font-mono">
              ✓ Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm text-center font-mono">
              ✗ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
