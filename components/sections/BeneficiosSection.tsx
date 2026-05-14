import { CheckCircle2 } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface Beneficio {
  icon: LucideIcon
  title: string
  description: string
}

interface ExplanationItem {
  title: string
  text: string
}

interface BeneficiosSectionProps {
  productName: string
  intro: string
  beneficios: Beneficio[]
  explanation: ExplanationItem[]
}

export default function BeneficiosSection({
  productName,
  intro,
  beneficios,
  explanation,
}: BeneficiosSectionProps) {
  return (
    <section
      className="section-padding bg-background relative overflow-hidden bg-[url('/images/media/paraguas.png')] bg-no-repeat bg-right bg-[length:auto_40%] md:bg-[length:auto_70%]"
    >
      <div className="container-max">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-secondary mb-3 block">
            {productName}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Cobertura integral para su tranquilidad
          </h2>
          <p className="text-muted-foreground leading-relaxed font-sans">{intro}</p>
          <p className="mt-4 text-sm font-medium text-foreground/80">
            Como un paraguas cuando llueve, un buen seguro te protege para que no te mojes cuando pasa un siniestro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {beneficios.map((b, i) => {
              const Icon = b.icon
              return (
                <div
                  key={i}
                  className="flex flex-col gap-3 p-5 rounded-xl bg-white border border-border hover:border-primary/20 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-foreground">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                </div>
              )
            })}
          </div>

          {/* Explanation */}
          <div className="flex flex-col gap-8">
            {explanation.map((e, i) => (
              <div key={i} className="border-l-2 border-secondary pl-5">
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{e.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.text}</p>
              </div>
            ))}

            <div className="mt-2 p-5 rounded-xl bg-primary text-white">
              <p className="font-serif text-lg font-bold mb-2">¿Por qué elegir Olea Seguros y Fianzas?</p>
              <ul className="flex flex-col gap-2">
                {[
                  'Asesoría personalizada con experiencia en tu giro de negocio',
                  'Gestión de siniestros',
                  'Acceso a las mejores aseguradoras del mercado',
                  'Más de 35 años de experiencia comprobada',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
