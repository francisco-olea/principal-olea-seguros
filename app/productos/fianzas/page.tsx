import HeroSection from '@/components/sections/HeroSection'
import AseguradorasSection from '@/components/sections/AseguradorasSection'
import BeneficiosSection from '@/components/sections/BeneficiosSection'
import TeamSection from '@/components/sections/TeamSection'
import BlogSection from '@/components/sections/BlogSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import { FileCheck, Building2, Package, Hammer, UserCheck, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Fianzas — Olea Seguros y Fianzas',
  description:
    'Fianzas de cumplimiento, licitación, anticipo, fidelidad y más. Especialistas en fianzas para obras, contratos gubernamentales y proyectos privados.',
}

const beneficios = [
  {
    icon: Hammer,
    title: 'Fianza de Cumplimiento',
    description: 'Garantiza que el contratista cumplirá con las obligaciones pactadas en el contrato.',
  },
  {
    icon: FileCheck,
    title: 'Fianza de Licitación',
    description: 'Respalda la seriedad de una propuesta en concursos y licitaciones públicas o privadas.',
  },
  {
    icon: Package,
    title: 'Fianza de Anticipo',
    description: 'Garantiza la correcta aplicación de los anticipos otorgados por el cliente.',
  },
  {
    icon: Building2,
    title: 'Fianza de Obra',
    description: 'Asegura la correcta ejecución de obras de construcción conforme a especificaciones.',
  },
  {
    icon: UserCheck,
    title: 'Fianza de Fidelidad',
    description: 'Protege a la empresa ante el manejo deshonesto de fondos por parte de empleados.',
  },
  {
    icon: ShieldCheck,
    title: 'Fianza Judicial',
    description: 'Garantías ante tribunales y autoridades para procesos legales y administrativos.',
  },
]

const explanation = [
  {
    title: '¿Qué es una fianza?',
    text: 'Una fianza es un contrato de garantía mediante el cual una institución afianzadora se compromete a responder ante un beneficiario si el fiado (contratista o deudor) no cumple con sus obligaciones contractuales o legales.',
  },
  {
    title: '¿En qué se diferencia de un seguro?',
    text: 'A diferencia del seguro, en la fianza la afianzadora tiene derecho a recuperar lo pagado al beneficiario del propio fiado. La fianza es una garantía de cumplimiento, no una transferencia de riesgo.',
  },
  {
    title: 'Requisitos para contratación',
    text: 'El proceso varía según el tipo y monto de la fianza. Generalmente se requiere información financiera del fiado, documentos del contrato o licitación y, en algunos casos, contrafianzas o garantías adicionales. El Ing. Francisco Olea te guía paso a paso en el proceso.',
  },
]

export default function FianzasPage() {
  return (
    <>
      <HeroSection
        badge="Fianzas"
        title="Fianzas que respaldan tus contratos y relaciones comerciales"
        subtitle="Garantiza el cumplimiento de tus compromisos contractuales con las principales afianzadoras del mercado. Tramitación ágil y asesoría especializada en cada etapa."
        imageSrc="/images/media/fianza.png"
        imageAlt="Apretón de manos profesional representando fianzas y contratos"
      />
      <AseguradorasSection />
      <BeneficiosSection
        productName="Fianzas"
        intro="El Ing. Francisco Olea, especialista en seguros de daños y fianzas, cuenta con la experiencia y las relaciones necesarias para gestionar fianzas de obra, licitación, anticipo y fidelidad de forma ágil y eficiente."
        beneficios={beneficios}
        explanation={explanation}
      />
      <TeamSection />
      <BlogSection />
      <NewsletterSection />
    </>
  )
}
