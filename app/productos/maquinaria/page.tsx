import HeroSection from '@/components/sections/HeroSection'
import AseguradorasSection from '@/components/sections/AseguradorasSection'
import BeneficiosSection from '@/components/sections/BeneficiosSection'
import TeamSection from '@/components/sections/TeamSection'
import BlogSection from '@/components/sections/BlogSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import { Settings2, Zap, Wrench, BarChart3, Shield, AlertCircle } from 'lucide-react'

export const metadata = {
  title: 'Seguro de Maquinaria de Construcción — Olea Seguros y Fianzas',
  description:
    'Protección especializada para maquinaria y equipo de construcción: grúas, retroexcavadoras, compactadores, montacargas, hormigoneras y más. Contra daños accidentales, robos y averías.',
}

const beneficios = [
  {
    icon: Wrench,
    title: 'Daños Accidentales',
    description: 'Cubre golpes, caídas, colisiones y daños físicos a grúas, retroexcavadoras y equipos pesados en obra.',
  },
  {
    icon: AlertCircle,
    title: 'Robo y Hurto',
    description: 'Protección contra sustracción de herramientas, equipos y componentes de maquinaria en obras abiertas.',
  },
  {
    icon: Zap,
    title: 'Falla Mecánica y Eléctrica',
    description: 'Cobertura de averías internas, fallas del motor y sistemas eléctricos durante operaciones.',
  },
  {
    icon: BarChart3,
    title: 'Paralización Temporal',
    description: 'Compensación por pérdida de ingresos mientras se repara o reemplaza el equipo dañado.',
  },
  {
    icon: Shield,
    title: 'Cobertura en Tránsito',
    description: 'Protección durante el traslado de equipos entre obras y durante su transporte a la obra.',
  },
  {
    icon: Settings2,
    title: 'Equipo Especializado',
    description: 'Cobertura para compactadores, hormigoneras, vibrogeneradores, montacargas y andamios.',
  },
]

const explanation = [
  {
    title: '¿Qué es el Seguro de Maquinaria de Construcción?',
    text: 'Es una póliza especializada que protege grúas, retroexcavadoras, buldóceres, montacargas, hormigoneras, compactadores y otros equipos de construcción contra daños accidentales, robos, averías mecánicas y paras inesperadas durante las operaciones en obra.',
  },
  {
    title: 'Importancia en proyectos de construcción',
    text: 'La maquinaria es fundamental en toda obra. Una avería inesperada puede paralizar el proyecto, generar demoras contractuales y multas por incumplimiento. Nuestro seguro garantiza que tengas cobertura rápida y acceso a equipo de reemplazo cuando sea necesario.',
  },
  {
    title: 'Sectores que más lo utilizan',
    text: 'Empresas constructoras, contratistas, inmobiliarias, obras públicas, infraestructura, minería y desarrolladores inmobiliarios. Es especialmente crítico en proyectos grandes donde el tiempo es dinero.',
  },
]

export default function MaquinariaPage() {
  return (
    <>
      <HeroSection
        badge="Maquinaria de Construcción"
        title="Tu equipo protegido en cada obra"
        subtitle="Grúas, retroexcavadoras, montacargas y más. La maquinaria es el motor de tu obra. Un paro inesperado por daño, robo o avería puede costar días, dinero y reputación. Protege tu equipo con coberturas especializadas."
        imageSrc="/images/media/maquinaria.png"
        imageAlt="Maquinaria de construcción asegurada por Olea Seguros"
      />
      <AseguradorasSection />
      <BeneficiosSection
        productName="Maquinaria de Construcción"
        intro="Diseñamos coberturas específicas para cada tipo de equipo: desde pequeñas herramientas eléctricas hasta grúas torre. Consideramos el valor de reposición, riesgos de robo en obra abierta y el impacto de una parada en tu cronograma para garantizar continuidad operativa."
        beneficios={beneficios}
        explanation={explanation}
      />
      <TeamSection />
      <BlogSection />
      <NewsletterSection />
    </>
  )
}
