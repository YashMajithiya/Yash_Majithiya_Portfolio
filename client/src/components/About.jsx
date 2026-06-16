export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <p className="section-sub">// 01. about me</p>
      <h2 className="section-heading">About Me</h2>

      <div className="grid md:grid-cols-2 gap-12 mt-10 items-center">
        <div className="space-y-4 text-slate-400 leading-relaxed">
          <p>
            Hey! I&apos;m <span className="text-primary font-semibold">Yash Majithiya</span>, a Full Stack Developer
            based in India with a passion for crafting digital experiences that live on the internet.
          </p>
          <p>
            I specialize in the <span className="text-white font-medium">MERN stack</span> — MongoDB, Express, React,
            and Node.js — and I love building products from zero to production. Whether it&apos;s a sleek
            front-end interface or a robust REST API, I care deeply about performance, scalability, and clean code.
          </p>
          <p>
            When I&apos;m not pushing commits, you&apos;ll find me exploring new technologies, contributing to
            open-source, or diving into system design concepts.
          </p>
          <p className="font-mono text-sm text-slate-500">
            📍 India &nbsp;|&nbsp; Open to remote opportunities
          </p>
        </div>

        {/* Avatar placeholder */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="text-7xl mb-3">👨‍💻</div>
                <p className="text-slate-500 text-sm font-mono">Add your photo</p>
                <p className="text-slate-600 text-xs">Replace with &lt;img&gt; tag</p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl border-2 border-primary/40 translate-x-3 translate-y-3 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  )
}
