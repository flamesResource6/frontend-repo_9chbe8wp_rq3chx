import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      // In a real app, POST to backend. For now, simulate success.
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! We will get back to you within 24 hours.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s build something beautiful</h2>
            <p className="mt-3 text-blue-100/90">Tell us about your goals and we’ll design a path forward.</p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-blue-200">Email</dt>
                  <dd className="font-medium text-white">hello@graphicsco.com</dd>
                </div>
                <div>
                  <dt className="text-sm text-blue-200">Location</dt>
                  <dd className="font-medium text-white">Remote • Worldwide</dd>
                </div>
                <div>
                  <dt className="text-sm text-blue-200">Response time</dt>
                  <dd className="font-medium text-white">Under 24 hours</dd>
                </div>
                <div>
                  <dt className="text-sm text-blue-200">Social</dt>
                  <dd className="font-medium text-white">@graphicsco</dd>
                </div>
              </dl>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="text-sm text-blue-200">Project Type</label>
                <select className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-white">
                  <option>Brand Identity</option>
                  <option>3D & Motion</option>
                  <option>Interactive Web</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-blue-200">Name</label>
                <input className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-white" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-blue-200">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-white" placeholder="jane@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-blue-200">Budget</label>
                <input className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-white" placeholder="$10k - $50k" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-blue-200">Tell us about your project</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 p-3 text-white" placeholder="What are you aiming to achieve?" />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-blue-200/80">We’ll sign an NDA if needed.</p>
              <button disabled={loading} className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white disabled:opacity-50">
                {loading ? 'Sending…' : 'Send Inquiry'}
              </button>
            </div>
            {status && <p className="mt-3 text-sm text-green-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
