import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-blue-100">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Modern • Interactive • Playful
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            Stunning visual identities and 3D storytelling
          </h1>
          <p className="mt-4 text-lg text-blue-100/90">
            We craft brand systems, motion graphics, and immersive web experiences for ambitious teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20">
              See Our Work
            </a>
            <a href="#contact" className="rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white">
              Start a Project
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/30 to-slate-950"></div>
    </section>
  )
}

export default Hero
