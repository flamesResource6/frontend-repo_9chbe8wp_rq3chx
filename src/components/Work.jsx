import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Neon Fintech Rebrand',
    tags: ['Brand', '3D', 'Motion'],
    color: 'from-fuchsia-500 to-violet-500',
    img: 'https://images.unsplash.com/photo-1625841350509-b173b1a92ba5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Playful App Launch',
    tags: ['Campaign', 'Illustration'],
    color: 'from-cyan-500 to-sky-500',
    img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'XR Experience Site',
    tags: ['WebGL', 'Interactive'],
    color: 'from-amber-500 to-rose-500',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
  },
]

function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected Work</h2>
            <p className="mt-2 text-blue-100/80">A glimpse into recent collaborations and experiments.</p>
          </div>
          <a href="#contact" className="hidden rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white md:inline-flex">
            Work with us
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={p.img} alt={p.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${p.color} px-3 py-1 text-xs font-semibold text-white shadow`}>{p.tags.join(' • ')}</div>
                <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
