import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'

const posts = [
  {
    slug: 'por-que-asegurar-tu-nave-industrial',
    category: 'Nave Industrial',
    title: '¿Por qué es crucial asegurar tu nave industrial en 2025?',
    excerpt:
      'Los riesgos operativos, incendios y desastres naturales representan amenazas reales para tu inversión. Descubre cómo una póliza bien estructurada puede marcar la diferencia.',
    date: 'Mayo 2025',
    readTime: '5 min',
    color: 'bg-blue-50 border-blue-100',
    tagColor: 'text-blue-700 bg-blue-100',
  },
  {
    slug: 'flotillas-vehiculares-beneficios',
    category: 'Vehículos y Flotillas',
    title: 'Cómo optimizar el seguro de tu flotilla vehicular y reducir costos',
    excerpt:
      'Gestionar múltiples vehículos puede ser complejo. Conoce las estrategias que utilizan las empresas líderes para obtener la mejor cobertura al menor costo.',
    date: 'Abril 2025',
    readTime: '4 min',
    color: 'bg-green-50 border-green-100',
    tagColor: 'text-green-700 bg-green-100',
  },
  {
    slug: 'gastos-medicos-mayores-guia',
    category: 'Médico y Vida',
    title: 'Guía completa de Gastos Médicos Mayores: Todo lo que debes saber',
    excerpt:
      'Suma asegurada, deducible, coaseguro, tope de coaseguro. Entender tu póliza médica puede salvar tu patrimonio. Te explicamos cada concepto de forma clara.',
    date: 'Marzo 2025',
    readTime: '7 min',
    color: 'bg-purple-50 border-purple-100',
    tagColor: 'text-purple-700 bg-purple-100',
  },
]

export default function BlogSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-secondary mb-3 block">
              Blog & Recursos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
              Artículos de interés
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-primary hover:text-secondary transition-colors shrink-0"
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className={`rounded-2xl border p-6 flex flex-col gap-4 hover:shadow-md transition-all duration-200 ${post.color}`}
            >
              <div>
                <span className={`inline-flex items-center gap-1.5 text-xs font-sans font-semibold px-2.5 py-1 rounded-full ${post.tagColor}`}>
                  <Tag className="w-3 h-3" />
                  {post.category}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground leading-snug text-balance">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-black/5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-sans font-semibold text-primary hover:text-secondary transition-colors"
                >
                  Leer más →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
