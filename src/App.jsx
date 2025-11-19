import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(600px_circle_at_100%_0%,rgba(59,130,246,0.12),transparent_40%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Work />
        <Services />
        <Contact />
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-blue-100/80">© {new Date().getFullYear()} Graphics Company. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-blue-100/80">
              <a href="#work" className="hover:text-white">Work</a>
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
