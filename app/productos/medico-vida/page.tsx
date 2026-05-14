import HeroSection from '@/components/sections/HeroSection'
import AseguradorasSection from '@/components/sections/AseguradorasSection'
import BeneficiosSection from '@/components/sections/BeneficiosSection'
import TeamSection from '@/components/sections/TeamSection'
import BlogSection from '@/components/sections/BlogSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import { HeartPulse, Shield, Users, Star, Clock, Baby } from 'lucide-react'

export const metadata = {
  title: 'Seguro Médico y de Vida — Olea Seguros y Fianzas',
  description:
    'Gastos médicos mayores, seguro de vida, cobertura por enfermedades graves y planes de retiro. Protege a tu familia con la asesoría de Melissa Olea, experta en salud y vida.',
}

const beneficios = [
  {
    icon: HeartPulse,
    title: 'Gastos Médicos Mayores',
    description: 'Hospitalización, cirugías, medicamentos, honorarios médicos y estudios de laboratorio.',
  },
  {
    icon: Shield,
    title: 'Seguro de Vida',
    description: 'Capital asegurado para tus beneficiarios en caso de fallecimiento o invalidez total.',
  },
  {
    icon: Star,
    title: 'Enfermedades Graves',
    description: 'Pago único al diagnóstico de cáncer, infarto, derrame cerebral y otras condiciones críticas.',
  },
  {
    icon: Clock,
    title: 'Plan de Retiro',
    description: 'Ahorro con rendimientos garantizados y protección de vida durante la etapa productiva.',
  },
  {
    icon: Users,
    title: 'Plan Colectivo Empresarial',
    description: 'Coberturas médicas para colaboradores como prestación laboral competitiva.',
  },
  {
    icon: Baby,
    title: 'Cobertura Maternidad',
    description: 'Ampara el embarazo, parto, cesárea y cuidados del recién nacido desde su nacimiento.',
  },
]

const explanation = [
  {
    title: '¿Qué son los Gastos Médicos Mayores?',
    text: 'Son seguros que cubren los gastos derivados de accidentes y enfermedades que requieran hospitalización. A diferencia del IMSS o ISSSTE, te permiten atenderte en hospitales privados con médicos de tu elección, sin tiempos de espera.',
  },
  {
    title: 'Conceptos clave que debes conocer',
    text: 'La suma asegurada es el límite máximo de cobertura. El deducible es el monto que pagas antes de que entre el seguro. El coaseguro es el porcentaje que compartes con la aseguradora después del deducible. Nuestros agentes te explican cada detalle sin tecnicismos.',
  },
  {
    title: '¿Por qué contratar un seguro de vida?',
    text: 'El seguro de vida protege el patrimonio familiar en caso de fallecimiento o invalidez del sostén económico del hogar. Es una herramienta de planeación financiera indispensable para garantizar el bienestar de quienes dependen de ti.',
  },
]

export default function MedicoVidaPage() {
  return (
    <>
      <HeroSection
        badge="Médico y Vida"
        title="Protege la salud y el futuro de tu familia"
        subtitle="Tu salud y la de los tuyos es lo más valioso. Contamos con los mejores planes de gastos médicos y seguros de vida del mercado, adaptados a cada etapa de tu vida."
        imageSrc="/images/media/medico-vida.png"
        imageAlt="Familia protegida por el seguro médico y de vida de Olea"
      />
      <AseguradorasSection />
      <BeneficiosSection
        productName="Médico y Vida"
        intro="La Lic. Melissa Olea, experta en seguros de salud y vida, te guiará para elegir el plan que mejor se adapte a tu edad, condición de salud, presupuesto y las necesidades específicas de tu familia."
        beneficios={beneficios}
        explanation={explanation}
      />
      <TeamSection />
      <BlogSection />
      <NewsletterSection />
    </>
  )
}
