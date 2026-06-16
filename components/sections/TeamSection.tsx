import Image from 'next/image'
import Link from 'next/link'

const agents = [
  {
    name: 'Lic. Francisco Olea',
    role: 'Agente Senior',
    description:
      'Con más de 35 años de trayectoria en el sector asegurador, el Lic. Francisco Olea es el pilar de la oficina. Su profundo conocimiento del mercado y sus relaciones con las principales aseguradoras garantizan las mejores coberturas para cada cliente.',
    expertise: ['Seguros Empresariales', 'Fianzas', 'Propiedad Industrial'],
    years: '35+',
    image: '/images/agents/francisco-olea-sr.jpg',
  },
  {
    name: 'Lic. Melissa Olea',
    role: 'Agente Especialista',
    description:
      'Especializada en seguros de gastos médicos y de vida, la Lic. Melissa Olea combina calidez humana con un profundo conocimiento técnico para brindar la mejor protección a familias y ejecutivos.',
    expertise: ['Gastos Médicos Mayores', 'Seguro de Vida', 'Planes de Retiro'],
    years: '7+',
    image: '/images/agents/melissa-olea.jpg',
  },
  {
    name: 'Ing. Francisco Olea',
    role: 'Agente Especialista en Daños y Fianzas',
    description:
      'Aporta la energía, innovación y actualización tecnológica al equipo. Su formación en ingeniería le permite comprender a fondo las necesidades de manufactura e industria, siendo el experto en daños a la propiedad y fianzas de obra.',
    expertise: ['Daños a la Propiedad', 'Maquinaria', 'Fianzas de Construcción'],
    years: '2+',
    image: '/images/agents/francisco-olea-jr.jpg',
  },
]

export default function TeamSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-secondary mb-3 block">
            Nuestro equipo
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Conoce a tus agentes
          </h2>
          <p className="text-muted-foreground leading-relaxed font-sans">
            Un equipo familiar con décadas de experiencia, comprometido con brindarte la mejor protección y el servicio más personalizado.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <article
              key={agent.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative h-72 bg-primary/10 overflow-hidden">
                {agent.image ? (
                  <Image
                    src={agent.image}
                    alt={`Fotografía de ${agent.name}`}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-muted-foreground font-sans">
                    Imagen temporalmente no disponible
                  </div>
                )}
                {/* Experience badge */}
                <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-sans font-bold px-3 py-1.5 rounded-full shadow">
                  {agent.years} años
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">{agent.name}</h3>
                  <p className="text-secondary font-sans text-sm font-semibold mt-0.5">{agent.role}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{agent.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {agent.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-sans px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contacto"
                  className="mt-2 text-sm font-sans font-semibold text-primary hover:text-secondary transition-colors inline-flex items-center gap-1"
                >
                  Contactar agente →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
