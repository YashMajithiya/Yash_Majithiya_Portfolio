const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'TypeScript', level: 75 },
      { name: 'HTML / CSS', level: 92 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'REST APIs', level: 88 },
      { name: 'MongoDB', level: 80 },
      { name: 'Mongoose', level: 78 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 65 },
      { name: 'Postman', level: 88 },
      { name: 'VS Code', level: 95 },
      { name: 'Linux / Bash', level: 70 },
    ],
  },
]

function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-primary font-mono text-sm">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-sub">// 02. skills</p>
        <h2 className="section-heading">Tech Stack</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {skillGroups.map(({ category, icon, skills }) => (
            <div key={category} className="card">
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                <span>{icon}</span> {category}
              </h3>
              {skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          ))}
        </div>

        {/* Additional tech badges */}
        <div className="mt-12">
          <p className="text-slate-500 font-mono text-sm mb-4">// Also familiar with</p>
          <div className="flex flex-wrap gap-3">
            {['SQL', 'PostgreSQL', 'Redis', 'GraphQL', 'Firebase', 'Vercel', 'Railway', 'NGINX', 'JWT', 'OAuth2'].map((tech) => (
              <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-slate-400 text-sm font-mono hover:border-primary/40 hover:text-primary transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
