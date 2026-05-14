import HeroSection from '@/components/sections/HeroSection'
import AseguradorasSection from '@/components/sections/AseguradorasSection'
import BeneficiosSection from '@/components/sections/BeneficiosSection'
import TeamSection from '@/components/sections/TeamSection'
import BlogSection from '@/components/sections/BlogSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import {
  Building,
  ShieldCheck,
  Users,
  Monitor,
  Briefcase,
  Globe,
} from 'lucide-react'

export const metadata = {
  title: 'Seguro Empresarial — Olea Seguros y Fianzas',
  description:
    'Protección integral para tu empresa: inmuebles, contenidos, responsabilidad civil, equipos electrónicos y continuidad del negocio.',
}

const beneficios = [
  {
    icon: Building,
    title: 'Inmueble y Contenidos',
    description: 'Protección del edificio, mobiliario, inventario y equipos ante incendio, robo y siniestros.',
  },
  {
    icon: ShieldCheck,
    title: 'Responsabilidad Civil',
    description: 'Cubre daños a terceros derivados de la operación de tu empresa.',
  },
  {
    icon: Monitor,
    title: 'Equipo Electrónico',
    description: 'Ampara computadoras, servidores, maquinaria especializada y sistemas de comunicación.',
  },
  {
    icon: Users,
    title: 'Accidentes Personales',
    description: 'Cobertura para colaboradores ante accidentes durante su jornada laboral.',
  },
  {
    icon: Briefcase,
    title: 'Dinero y Valores',
    description: 'Resguardo del efectivo, cheques y valores dentro y fuera de las instalaciones.',
  },
  {
    icon: Globe,
    title: 'Interrupción de Negocios',
    description: 'Compensa la pérdida de utilidades durante la recuperación tras un siniestro mayor.',
  },
]

const explanation = [
  {
    title: '¿Qué es el Seguro Empresarial?',
    text: 'Es una póliza integral que consolida múltiples coberturas en un solo contrato, diseñada específicamente para proteger los activos, la operación y la responsabilidad de tu empresa ante una amplia gama de riesgos.',
  },
  {
    title: '¿Para qué tipo de empresas?',
    text: 'Aplica para cualquier giro: comercio, servicios, manufactura, restaurantes, despachos profesionales, clínicas, hoteles y más. Adaptamos las coberturas según la actividad y tamaño de tu negocio.',
  },
  {
    title: 'Protección de la continuidad',
    text: 'Un siniestro sin la póliza correcta puede significar el cierre definitivo de un negocio. Nuestros seguros empresariales están diseñados para que tu empresa se recupere rápidamente y sin comprometer el patrimonio personal del empresario.',
  },
]

export default function EmpresarialPage() {
  return (
    <>
      <HeroSection
        badge="Empresarial"
        title="El respaldo que tu empresa necesita para operar con seguridad"
        subtitle="Protege los activos, la operación y la reputación de tu empresa con una póliza integral diseñada a la medida de tu giro y tamaño de negocio."
        imageSrc="/images/media/empresarial.png"
        imageAlt="Edificio de oficinas corporativas protegido por Olea Seguros"
      />
      <AseguradorasSection />
      <BeneficiosSection
        productName="Empresarial"
        intro="El Seguro Empresarial de Olea integra en una sola póliza todo lo que tu negocio necesita: desde la protección física de tus instalaciones hasta la cobertura de responsabilidad frente a clientes y proveedores."
        beneficios={beneficios}
        explanation={explanation}
      />
      <TeamSection />
      <BlogSection />
      <NewsletterSection />
    </>
  )
}
