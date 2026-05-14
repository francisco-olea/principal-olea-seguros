import HeroSection from '@/components/sections/HeroSection'
import AseguradorasSection from '@/components/sections/AseguradorasSection'
import BeneficiosSection from '@/components/sections/BeneficiosSection'
import TeamSection from '@/components/sections/TeamSection'
import BlogSection from '@/components/sections/BlogSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import { Car, ShieldCheck, Wrench, MapPin, AlertTriangle, Users } from 'lucide-react'

export const metadata = {
  title: 'Seguro de Vehículos y Flotillas — Olea Seguros y Fianzas',
  description:
    'Seguros para vehículos individuales y flotillas empresariales. Cobertura amplia, responsabilidad civil, asistencia vial y más.',
}

const beneficios = [
  {
    icon: Car,
    title: 'Cobertura Amplia',
    description: 'Protección total ante daños propios, robo total, pérdida total y colisión.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsabilidad Civil',
    description: 'Cubre daños materiales y lesiones a terceros ocasionados por tu vehículo.',
  },
  {
    icon: Wrench,
    title: 'Asistencia Vial 24/7',
    description: 'Grúa, paso de corriente, cambio de llanta y combustible en cualquier momento.',
  },
  {
    icon: MapPin,
    title: 'Cobertura Nacional',
    description: 'Válido en toda la República Mexicana y con opciones de extensión a EUA.',
  },
  {
    icon: AlertTriangle,
    title: 'Gastos Médicos Ocupantes',
    description: 'Cobertura médica para el conductor y pasajeros en caso de accidente.',
  },
  {
    icon: Users,
    title: 'Flotillas Empresariales',
    description: 'Administración centralizada y tarifas preferenciales para parque vehicular.',
  },
]

const explanation = [
  {
    title: '¿Qué es el seguro de flotillas?',
    text: 'El seguro de flotillas permite asegurar múltiples vehículos bajo una sola póliza, simplificando la administración, reduciendo costos y garantizando coberturas homogéneas para toda tu flota.',
  },
  {
    title: '¿Qué tipos de vehículos cubre?',
    text: 'Automóviles particulares, camionetas, camiones de carga, tractocamiones, vehículos de pasajeros, pick-ups y motocicletas. Diseñamos la cobertura según el uso comercial o particular.',
  },
  {
    title: 'Ventajas para empresas',
    text: 'Las empresas con flotillas obtienen descuentos por volumen, reportes de siniestralidad consolidados, un asesor dedicado y procesos de reclamación prioritarios para no afectar la operación.',
  },
]

export default function VehiculosFlotillasPage() {
  return (
    <>
      <HeroSection
        badge="Vehículos y Flotillas"
        title="Seguros vehiculares con cobertura total para tu empresa"
        subtitle="Desde un solo vehículo hasta una flotilla de cientos de unidades, gestionamos el seguro que mejor se adapta a tus necesidades operativas y presupuesto."
        imageSrc="/images/media/trucks.png"
        imageAlt="Flotilla de vehículos empresariales asegurados por Olea"
      />
      <AseguradorasSection />
      <BeneficiosSection
        productName="Vehículos y Flotillas"
        intro="Ofrecemos soluciones vehiculares para personas físicas y morales, con opciones de cobertura amplia, limitada o responsabilidad civil, siempre con el respaldo de las mejores aseguradoras del país."
        beneficios={beneficios}
        explanation={explanation}
      />
      <TeamSection />
      <BlogSection />
      <NewsletterSection />
    </>
  )
}
