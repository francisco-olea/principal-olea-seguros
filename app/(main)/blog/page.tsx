import Link from 'next/link'
import { Clock, Tag, ArrowRight } from 'lucide-react'
import NewsletterSection from '@/components/sections/NewsletterSection'

export const metadata = {
  title: 'Blog & Recursos — Olea Seguros y Fianzas',
  description:
    'Artículos especializados sobre seguros, fianzas, protección patrimonial y planificación financiera. Información de valor para tomar mejores decisiones.',
}

const posts = [
  {
    slug: 'por-que-asegurar-tu-nave-industrial',
    category: 'Nave Industrial',
    title: '¿Por qué es crucial asegurar tu nave industrial en 2025?',
    excerpt: 'Los riesgos operativos, incendios y desastres naturales representan amenazas reales para tu inversión. Descubre cómo una póliza bien estructurada puede marcar la diferencia.',
    date: 'Mayo 2025',
    readTime: '5 min',
    author: 'Ing. Francisco Olea',
  },
  {
    slug: 'flotillas-vehiculares-beneficios',
    category: 'Vehículos y Flotillas',
    title: 'Cómo optimizar el seguro de tu flotilla vehicular y reducir costos',
    excerpt: 'Gestionar múltiples vehículos puede ser complejo. Conoce las estrategias que utilizan las empresas líderes para obtener la mejor cobertura al menor costo.',
    date: 'Abril 2025',
    readTime: '4 min',
    author: 'Lic. Francisco Olea',
  },
  {
    slug: 'gastos-medicos-mayores-guia',
    category: 'Médico y Vida',
    title: 'Guía completa de Gastos Médicos Mayores: Todo lo que debes saber',
    excerpt: 'Suma asegurada, deducible, coaseguro, tope de coaseguro. Entender tu póliza médica puede salvar tu patrimonio. Te explicamos cada concepto de forma clara.',
    date: 'Marzo 2025',
    readTime: '7 min',
    author: 'Lic. Melissa Olea',
  },
  {
    slug: 'fianzas-construccion-guia',
    category: 'Fianzas',
    title: 'Fianzas de construcción: Todo lo que un contratista necesita saber',
    excerpt: 'Si participas en licitaciones públicas o contratos privados, las fianzas son obligatorias. Conoce los tipos, requisitos y proceso de contratación.',
    date: 'Febrero 2025',
    readTime: '6 min',
    author: 'Ing. Francisco Olea',
  },
  {
    slug: 'seguro-vida-planeacion-patrimonial',
    category: 'Médico y Vida',
    title: 'El seguro de vida como herramienta de planeación patrimonial',
    excerpt: 'Más allá de la protección ante fallecimiento, el seguro de vida es uno de los instrumentos más poderosos para construir y preservar el patrimonio familiar.',
    date: 'Enero 2025',
    readTime: '5 min',
    author: 'Lic. Melissa Olea',
  },
  {
    slug: 'maquinaria-industrial-coberturas',
    category: 'Maquinaria',
    title: 'Coberturas esenciales para maquinaria industrial: no dejes brechas',
    excerpt: 'Una avería de maquinaria no planificada puede paralizar tu producción durante semanas. Aprende qué coberturas son indispensables y cuáles son opcionales.',
    date: 'Diciembre 2024',
    readTime: '5 min',
    author: 'Ing. Francisco Olea',
  },
]

const categoryColors: Record<string, string> = {
  'Nave Industrial': 'text-blue-700 bg-blue-100',
  'Vehículos y Flotillas': 'text-green-700 bg-green-100',
  'Médico y Vida': 'text-purple-700 bg-purple-100',
  Fianzas: 'text-amber-700 bg-amber-100',
  Maquinaria: 'text-orange-700 bg-orange-100',
  Empresarial: 'text-teal-700 bg-teal-100',
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16 px-4 md:px-8 lg:px-16">
        <div className="container-max max-w-2xl">
          <span className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-secondary mb-4 block">
            Blog & Recursos
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Artículos de interés sobre seguros y fianzas
          </h1>
          <p className="text-[#b0bec5] leading-relaxed">
            Contenido especializado redactado por nuestros agentes para ayudarte a tomar decisiones informadas sobre la protección de tu patrimonio.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <span className={`inline-flex items-center gap-1.5 w-fit text-xs font-sans font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'text-gray-700 bg-gray-100'}`}>
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <h2 className="font-serif text-lg font-bold text-foreground leading-snug text-balance flex-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="px-6 pb-6 flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-semibold text-foreground">{post.author}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-sans font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    Leer
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
