'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

const mainNav = [
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
  { label: 'Blog', href: '/blog' },
  { label: 'Siniestros', href: '/siniestros' },
]

const products = [
  { label: 'Nave Industrial', href: '/productos/nave-industrial' },
  { label: 'Vehículos y Flotillas', href: '/productos/vehiculos-flotillas' },
  { label: 'Empresarial', href: '/productos/empresarial' },
  { label: 'Maquinaria', href: '/productos/maquinaria' },
  { label: 'Médico y Vida', href: '/productos/medico-vida' },
  { label: 'Fianzas', href: '/productos/fianzas' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isProductActive = (href: string) => pathname === href
  const isMainActive = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-brand-navy text-white">
        <div className="container-max flex items-center justify-between px-4 md:px-8 lg:px-16 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center leading-none">
            <Image
              src="/images/media/olealogo-horizontal.png"
              alt="Olea Seguros y Fianzas"
              width={220}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop main nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-sans font-medium tracking-wide transition-colors duration-200',
                  isMainActive(item.href)
                    ? 'text-white border-b-2 border-secondary pb-0.5'
                    : 'text-[#b0bec5] hover:text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact info */}
          <div className="hidden lg:flex items-center gap-4 text-xs text-[#b0bec5]">
            <a href="tel:+526535349720" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>(653) 534-9720</span>
            </a>
            <a href="tel:+526535365150" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>(653) 536-5150</span>
            </a>
            <a href="mailto:contacto@oleaasociados.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>contacto@oleaasociados.com</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Products bar */}
      <div className="bg-white border-b border-border shadow-sm hidden md:block">
        <div className="container-max px-4 md:px-8 lg:px-16">
          <nav className="flex items-center gap-1" aria-label="Productos">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className={cn(
                  'px-4 py-3 text-sm font-sans font-medium tracking-wide transition-all duration-200 border-b-2 whitespace-nowrap',
                  isProductActive(product.href)
                    ? 'text-primary border-secondary bg-accent'
                    : 'text-muted-foreground border-transparent hover:text-primary hover:border-brand-steel'
                )}
              >
                {product.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-navy text-white shadow-xl">
          <div className="px-4 py-4 flex flex-col gap-1 border-b border-white/10">
            <p className="text-xs font-sans text-[#b0bec5] uppercase tracking-widest mb-2">Menú</p>
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm font-medium text-white/90 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="px-4 py-4 flex flex-col gap-1">
            <p className="text-xs font-sans text-[#b0bec5] uppercase tracking-widest mb-2">Productos</p>
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className={cn(
                  'py-2 text-sm font-medium',
                  isProductActive(product.href)
                    ? 'text-secondary'
                    : 'text-white/80 hover:text-white'
                )}
                onClick={() => setMobileOpen(false)}
              >
                {product.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 h-px bg-white/20 shadow-[0_8px_16px_-10px_rgba(0,0,0,0.5)]" />
        </div>
      )}
    </header>
  )
}
