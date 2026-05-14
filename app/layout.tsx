import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Olea Seguros y Fianzas — Protección que inspira confianza',
  description:
    'Olea Seguros y Fianzas ofrece soluciones integrales en seguros industriales, vehiculares, empresariales, de maquinaria, médicos, de vida y fianzas. Más de 35 años de experiencia al servicio de México.',
  keywords:
    'seguros, fianzas, nave industrial, vehículos, flotillas, empresarial, maquinaria, gastos médicos, seguro de vida, México',
  authors: [{ name: 'Olea Seguros y Fianzas' }],
  openGraph: {
    title: 'Olea Seguros y Fianzas',
    description: 'Protección que inspira confianza — Más de 35 años de experiencia.',
    type: 'website',
  },
  icons: {
    icon: '/images/media/logotipo-48x48-nuevo.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
