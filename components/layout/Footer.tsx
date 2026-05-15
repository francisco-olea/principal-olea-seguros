import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react'

const products = [
  { label: 'Nave Industrial', href: '/productos/nave-industrial' },
  { label: 'Vehículos y Flotillas', href: '/productos/vehiculos-flotillas' },
  { label: 'Empresarial', href: '/productos/empresarial' },
  { label: 'Maquinaria', href: '/productos/maquinaria' },
  { label: 'Médico y Vida', href: '/productos/medico-vida' },
  { label: 'Fianzas', href: '/productos/fianzas' },
]

const company = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Blog & Recursos', href: '/blog' },
  { label: 'Siniestros', href: '/siniestros' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="container-max px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="max-w-[260px]">
              <Image
                src="/images/media/olealogo-horizontal-dark.png"
                alt="Olea Seguros y Fianzas"
                width={260}
                height={52}
                className="h-12 w-auto"
                priority
              />
            </div>
            <p className="text-sm text-[#b0bec5] leading-relaxed">
              Más de 35 años de experiencia protegiendo a familias y empresas en México con soluciones integrales de seguros y fianzas.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/oleasegurosyfianzas/" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/oleasegurosyfianzas/" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#b0bec5] mb-5">Productos</h4>
            <ul className="flex flex-col gap-3">
              {products.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm text-white/70 hover:text-secondary transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#b0bec5] mb-5">Empresa</h4>
            <ul className="flex flex-col gap-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-white/70 hover:text-secondary transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#b0bec5] mb-5">Contacto</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">
                  Av. Álvaro Obregón 2208, 83448<br />
                  San Luis RC, Sonora, México<br />
                  <br />
                  Av Reforma 1161, Centro, Nueva,<br />
                  21100 Mexicali, B.C., México
                </span>
              </li>
              <li>
                <a href="tel:+526535349720" className="flex items-center gap-3 text-sm text-white/70 hover:text-secondary transition-colors">
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  (653) 534-9720
                </a>
              </li>
              <li>
                <a href="tel:+526535365150" className="flex items-center gap-3 text-sm text-white/70 hover:text-secondary transition-colors">
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  (653) 536-5150
                </a>
              </li>
              <li>
                <a href="mailto:contacto@oleaasociados.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-secondary transition-colors">
                  <Mail className="w-4 h-4 text-secondary shrink-0" />
                  contacto@oleaasociados.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 md:px-8 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Olea Seguros y Fianzas. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <Link href="/politica-privacidad" className="text-xs text-white/40 hover:text-white/70 transition-colors">Aviso de Privacidad</Link>
            <Link href="/terminos-condiciones" className="text-xs text-white/40 hover:text-white/70 transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
