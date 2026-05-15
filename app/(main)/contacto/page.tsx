'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from 'lucide-react'

const products = [
  'Nave Industrial',
  'Vehículos y Flotillas',
  'Empresarial',
  'Maquinaria',
  'Médico y Vida',
  'Fianzas',
  'Otro',
]

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  })

  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el mensaje')
      }

      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', product: '', message: '' })
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Error desconocido al enviar.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16 px-4 md:px-8 lg:px-16">
        <div className="container-max max-w-2xl">
          <span className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-secondary mb-4 block">
            Contáctanos
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Estamos para asesorarte sin compromiso
          </h1>
          <p className="text-[#b0bec5] leading-relaxed">
            Un agente especializado se pondrá en contacto contigo para brindarte una cotización personalizada y resolver todas tus dudas.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-max grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-xl font-bold text-foreground mb-5">Información de contacto</h2>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Dirección</p>
                    <p className="text-sm text-muted-foreground">
                      Av. Álvaro Obregón 2208, 83448<br />
                      San Luis RC, Sonora, México
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Av Reforma 1161, Centro, Nueva,<br />
                      21100 Mexicali, B.C., México
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Teléfono</p>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+526535349720" className="text-sm text-muted-foreground hover:text-secondary transition-colors">(653) 534-9720</a>
                      <a href="tel:+526535365150" className="text-sm text-muted-foreground hover:text-secondary transition-colors">(653) 536-5150</a>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Correo electrónico</p>
                    <a href="mailto:contacto@oleaasociados.com" className="text-sm text-muted-foreground hover:text-secondary transition-colors">contacto@oleaasociados.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Horario de atención</p>
                    <p className="text-sm text-muted-foreground">Lunes a Viernes: 8:00 – 18:00 hrs<br />Sábado: 8:00 – 14:00 hrs</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-border bg-muted h-48 flex items-center justify-center relative group cursor-pointer">
              <a
                href="https://maps.app.goo.gl/GUo1gYbBjRqMqexM8"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Ver ubicación en Google Maps"
              />
              <img
                src="/images/media/oficina.png"
                alt="Oficina de Olea Seguros y Fianzas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-sans text-sm font-semibold">Da click para ver ubicación</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                  <CheckCircle2 className="w-14 h-14 text-secondary" />
                  <h3 className="font-serif text-2xl font-bold text-foreground">¡Mensaje recibido!</h3>
                  <p className="text-muted-foreground text-sm max-w-sm">
                    Uno de nuestros agentes se pondrá en contacto contigo a la brevedad para atender tu solicitud.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-xl font-bold text-foreground mb-6">Envíanos un mensaje</h2>
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-sans font-semibold text-foreground uppercase tracking-wide">
                        Nombre completo *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Lic. Juan Perez"
                        className="px-3.5 py-2.5 rounded-md border border-input text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-sans font-semibold text-foreground uppercase tracking-wide">
                        Correo electrónico *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="juan@empresa.com"
                        className="px-3.5 py-2.5 rounded-md border border-input text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-sans font-semibold text-foreground uppercase tracking-wide">
                        Teléfono *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(123) 000-0000"
                        className="px-3.5 py-2.5 rounded-md border border-input text-sm font-sans focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>

                    {/* Product */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="product" className="text-xs font-sans font-semibold text-foreground uppercase tracking-wide">
                        Producto de interés
                      </label>
                      <select
                        id="product"
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        className="px-3.5 py-2.5 rounded-md border border-input text-sm font-sans bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      >
                        <option value="">Seleccionar...</option>
                        {products.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2 flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-xs font-sans font-semibold text-foreground uppercase tracking-wide">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Cuéntanos sobre tus necesidades de seguro..."
                        className="px-3.5 py-2.5 rounded-md border border-input text-sm font-sans resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      {errorMessage ? (
                        <p className="text-sm text-error mb-3">{errorMessage}</p>
                      ) : null}
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-sans font-semibold text-sm rounded-md hover:bg-navy-light disabled:opacity-60 transition-all duration-200"
                      >
                        {loading ? (
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )}
                        {loading ? 'Enviando...' : 'Enviar mensaje'}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
