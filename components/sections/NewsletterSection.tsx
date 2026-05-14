'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  return (
    <section className="bg-primary py-16">
      <div className="container-max px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-secondary mb-3 block">
              Boletín informativo
            </span>
            <h2 className="font-serif text-3xl font-bold text-white mb-3 text-balance">
              Mantente informado sobre seguros y protección
            </h2>
            <p className="text-[#b0bec5] text-sm leading-relaxed">
              Recibe en tu correo artículos especializados, novedades del mercado asegurador y consejos para proteger lo que más importa. Sin spam, sólo contenido de valor.
            </p>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center gap-3 p-8 rounded-xl bg-white/10 border border-white/20 text-center">
                <CheckCircle2 className="w-10 h-10 text-secondary" />
                <p className="font-serif text-lg font-bold text-white">¡Gracias por suscribirte!</p>
                <p className="text-sm text-[#b0bec5]">
                  Recibirás nuestro próximo boletín en tu bandeja de entrada.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    required
                    className="flex-1 px-4 py-3.5 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm font-sans focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-white font-sans font-semibold text-sm rounded-md hover:bg-green-dark disabled:opacity-60 transition-all duration-200 shrink-0"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {loading ? 'Enviando...' : 'Suscribirme'}
                  </button>
                </div>
                <p className="text-xs text-white/40 font-sans">
                  Al suscribirte aceptas nuestro{' '}
                  <a href="/politica-privacidad" className="underline hover:text-white/70">Aviso de Privacidad</a>.
                  Puedes darte de baja en cualquier momento.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
