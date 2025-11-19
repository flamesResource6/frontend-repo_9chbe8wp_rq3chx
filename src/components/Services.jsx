const services = [
  {
    title: 'Brand Identity',
    desc: 'Logos, visual systems, guidelines, and launch assets that scale.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 12h8M8 16h8M8 8h8"/></svg>
    ),
  },
  {
    title: '3D & Motion',
    desc: 'Product renders, motion design, and playful 3D for the web.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l9 4.5v9L12 21 3 16.5v-9L12 3z"/></svg>
    ),
  },
  {
    title: 'Interactive Web',
    desc: 'WebGL, microsites, and immersive experiences with performance in mind.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"/></svg>
    ),
  },
]

function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Services</h2>
        <p className="mt-2 text-blue-100/80 max-w-2xl">From strategy to launch, we partner across the full creative lifecycle.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-blue-100/90">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
