import TeamSection from '@/components/sections/TeamSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import { CheckCircle2, Award, Users, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Nosotros — Olea Seguros y Fianzas',
  description:
    'Conoce la historia, valores y equipo de Olea Seguros y Fianzas. Más de 35 años protegiendo a familias y empresas en México.',
}

const valores = [
  {
    icon: CheckCircle2,
    title: 'Integridad',
    text: 'Actuamos con transparencia y honestidad en cada interacción con nuestros clientes.',
  },
  {
    icon: Award,
    title: 'Excelencia',
    text: 'Nos comprometemos con la calidad en el servicio y la actualización constante.',
  },
  {
    icon: Users,
    title: 'Compromiso',
    text: 'Somos aliados de nuestros clientes, no sólo proveedores de pólizas.',
  },
  {
    icon: TrendingUp,
    title: 'Innovación',
    text: 'Adoptamos tecnología y nuevas prácticas para ofrecer el mejor servicio del mercado.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-20 px-4 md:px-8 lg:px-16">
        <div className="container-max">
          <div className="max-w-3xl">
            <span className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-secondary mb-4 block">
              Quiénes somos
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Tres generaciones protegiendo lo que más te importa
            </h1>
            <p className="text-[#b0bec5] text-lg leading-relaxed">
              Olea Seguros y Fianzas nació de la vocación de servicio del Lic. Efraín Olea, quien fundó la oficina con la firme convicción de que cada cliente merece una asesoría honesta, personalizada y de la más alta calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="section-padding bg-background">
        <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-secondary mb-3 block">
              Nuestra historia
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-5 text-balance">
              35 años de trayectoria y confianza
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Desde sus inicios, Olea Seguros y Fianzas se ha consolidado como una de las agencias de seguros más reconocidas de la región, gracias a la experiencia, compromiso y seguimiento de hijo Lic. Francisco Olea.
              </p>
              <p>
                A lo largo de más de tres décadas, hemos acompañado a cientos de familias y empresas en momentos críticos, gestionando siniestros con agilidad y eficiencia, y brindando la tranquilidad que sólo una asesoría de confianza puede otorgar.
              </p>
              <p>
                Hoy, con la incorporación de la segunda y tercera generación, Olea Seguros y Fianzas combina la sabiduría y la experiencia con la energía, la tecnología y la especialización para ofrecer un servicio de vanguardia sin perder su esencia humana.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { num: '35+', label: 'Años de experiencia' },
              { num: '3,000+', label: 'Clientes satisfechos' },
              { num: '15+', label: 'Aseguradoras aliadas' },
              { num: '6', label: 'Líneas de negocio' },
            ].map((s) => (
              <div
                key={s.label}
                className="p-6 rounded-xl bg-white border border-border flex flex-col gap-2 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <p className="font-serif text-4xl font-bold text-primary">{s.num}</p>
                <p className="text-sm text-muted-foreground font-sans">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-secondary mb-3 block">
              Nuestros valores
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground text-balance">
              Los principios que guían nuestro trabajo
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="bg-white p-6 rounded-xl border border-border hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <TeamSection />
      <NewsletterSection />
    </>
  )
}
