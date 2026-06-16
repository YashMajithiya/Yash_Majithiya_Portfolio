import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="text-center py-6 text-slate-500 text-sm border-t border-white/5">
        <p>Designed & Built by <span className="text-primary">Yash Majithiya</span></p>
      </footer>
    </div>
  )
}
