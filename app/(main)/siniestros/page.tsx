import Link from 'next/link'
import {
  AlertTriangle,
  Phone,
  FileText,
  Camera,
  Clock,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import NewsletterSection from '@/components/sections/NewsletterSection'

export const metadata = {
  title: 'Siniestros — Olea Seguros y Fianzas',
  description:
    'Reporte un siniestro con Olea Seguros. Guía paso a paso, números de emergencia y formulario de reporte. Estamos contigo en los momentos más importantes.',
}

const steps = [
  {
    number: '01',
    icon: AlertTriangle,
    title: 'Notifica a las autoridades',
    text: 'En caso de robo, accidente o siniestro con terceros, llama a las autoridades (policía, bomberos, paramédicos) de inmediato. Tu seguridad es primero.',
  },
  {
    number: '02',
    icon: Camera,
    title: 'Documenta el siniestro',
    text: 'Toma fotografías y videos del daño antes de mover cualquier objeto. Recaba números de reporte policial y datos de testigos si los hay.',
  },
  {
    number: '03',
    icon: Phone,
    title: 'Contacta a tu agente',
    text: 'Llama de inmediato a Olea Seguros. Nuestros agentes te orientarán sobre los pasos específicos según tu póliza y tipo de siniestro.',
  },
  {
    number: '04',
    icon: FileText,
    title: 'Reúne la documentación',
    text: 'Prepara tu póliza, identificación oficial, documentos del bien siniestrado y todos los comprobantes del daño para agilizar el trámite.',
  },
  {
    number: '05',
    icon: Clock,
    title: 'Seguimiento del trámite',
    text: 'Tu agente de Olea te mantendrá informado en cada etapa del proceso con la aseguradora hasta la resolución satisfactoria del siniestro.',
  },
  {
    number: '06',
    icon: CheckCircle2,
    title: 'Resolución del siniestro',
    text: 'Una vez aprobado el siniestro, la aseguradora procederá al pago de la indemnización o reparación conforme a las condiciones de tu póliza.',
  },
]

const mexicoContacts = [
  { aseguradora: 'ANA Seguros', phone: '55 5322 8282', tel: '5553228282' },
  { aseguradora: 'AXA', phone: '800 911 1292', tel: '8009111292' },
  { aseguradora: 'Chubb', phone: '55 1253 3939', tel: '5512533939' },
  { aseguradora: 'El Potosí', phone: '800 0090 000', tel: '800009000' },
  { aseguradora: 'GMX', phone: '800 2153 455', tel: '8002153455' },
  { aseguradora: 'GNP', phone: '55 5227 9000 o en tu app', tel: '5552279000' },
  { aseguradora: 'HDI Seguros', phone: '800 019 6000', tel: '8000196000' },
  { aseguradora: 'Inbursa', phone: '800 911 9000', tel: '8009119000' },
  { aseguradora: 'Liberty Fianzas', phone: '800 400 2211', tel: '8004002211' },
  { aseguradora: 'Qualitas', phone: '800 800 2880', tel: '8008002880' },
  { aseguradora: 'Seguros Atlas', phone: '800 849 3917', tel: '8008493917' },
  { aseguradora: 'Tokio Marine', phone: '55 5278 2100', tel: '5552782100' },
  { aseguradora: 'Zurich', phone: '800 288 6911', tel: '8002886911' },
]

const usaContacts = [
  { aseguradora: 'National Unity', phone: '+1 866 329 6734', tel: '+18663296734' },
  { aseguradora: 'NH Seguros', phone: '+1 844 386 3118', tel: '+18443863118' },
]

export default function SiniestrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy py-16 px-4 md:px-8 lg:px-16">
        <div className="container-max max-w-2xl">
          <span className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-secondary mb-4 block">
            Reporte de siniestros
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Estamos contigo cuando más nos necesitas
          </h1>
          <p className="text-[#b0bec5] leading-relaxed mb-6">
            Si has sufrido un siniestro, no estás solo. Nuestro equipo está disponible para guiarte paso a paso en el proceso de reclamación y asegurarse de que recibas la atención que mereces.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="tel:+526535349720"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-white font-sans font-semibold text-sm rounded-md hover:bg-green-dark transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Llamar ahora: (653) 534-9720
            </a>
            <a
              href="tel:+526535365150"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-sans font-semibold text-sm rounded-md hover:bg-white/20 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Llamar ahora: (653) 536-5150
            </a>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-secondary mb-3 block">
              ¿Cómo proceder?
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground text-balance">
              Pasos a seguir ante un siniestro
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="relative bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <span className="absolute top-4 right-4 font-serif text-4xl font-bold text-border">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Emergency contacts */}
      <section className="section-padding bg-muted">
        <div className="container-max">
          <div className="mb-10">
            <span className="text-xs font-sans font-medium tracking-[0.22em] uppercase text-secondary mb-3 block">
              Líneas de emergencia
            </span>
            <h2 className="font-serif text-3xl font-bold text-foreground text-balance">
              Números de reporte de aseguradoras
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground">México</h3>
              <div className="grid grid-cols-1 gap-4">
                {mexicoContacts.map((c) => (
                  <div
                    key={c.aseguradora}
                    className="bg-white border border-border rounded-xl p-5 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-serif font-bold text-foreground">{c.aseguradora}</p>
                      <a
                        href={`tel:${c.tel}`}
                        className="text-secondary font-sans font-semibold text-sm hover:text-green-dark transition-colors"
                      >
                        {c.phone}
                      </a>
                    </div>
                    <span className="text-xs font-sans font-medium px-2.5 py-1 rounded-full bg-secondary/10 text-secondary">
                      24/7
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground">EUA</h3>
              <div className="grid grid-cols-1 gap-4">
                {usaContacts.map((c) => (
                  <div
                    key={c.aseguradora}
                    className="bg-white border border-border rounded-xl p-5 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-serif font-bold text-foreground">{c.aseguradora}</p>
                      <a
                        href={`tel:${c.tel}`}
                        className="text-secondary font-sans font-semibold text-sm hover:text-green-dark transition-colors"
                      >
                        {c.phone}
                      </a>
                    </div>
                    <span className="text-xs font-sans font-medium px-2.5 py-1 rounded-full bg-secondary/10 text-secondary">
                      24/7
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding">
        <div className="container-max text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            ¿Necesitas ayuda adicional?
          </h2>
          <p className="text-[#b0bec5] mb-8 leading-relaxed">
            Nuestros agentes están disponibles de lunes a sábado para orientarte en cualquier etapa de tu siniestro. No navegues solo este proceso.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-white font-sans font-semibold text-sm rounded-md hover:bg-green-dark transition-all duration-200"
          >
            Contactar un agente
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}
