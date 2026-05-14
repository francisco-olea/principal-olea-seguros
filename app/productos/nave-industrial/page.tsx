import HeroSection from '@/components/sections/HeroSection'
import AseguradorasSection from '@/components/sections/AseguradorasSection'
import BeneficiosSection from '@/components/sections/BeneficiosSection'
import TeamSection from '@/components/sections/TeamSection'
import BlogSection from '@/components/sections/BlogSection'
import NewsletterSection from '@/components/sections/NewsletterSection'
import {
  Building2,
  Flame,
  CloudLightning,
  ShieldCheck,
  Wrench,
  BarChart3,
} from 'lucide-react'

export const metadata = {
  title: 'Seguro de Nave Industrial — Olea Seguros y Fianzas',
  description:
    'Protección integral para tu nave industrial: incendio, robo, responsabilidad civil, equipos y más. Obtén una cotización personalizada.',
}

const beneficios = [
  {
    icon: Flame,
    title: 'Incendio y Explosión',
    description: 'Cobertura ante pérdidas totales o parciales por incendio, explosión y rayos.',
  },
  {
    icon: CloudLightning,
    title: 'Fenómenos Naturales',
    description: 'Protección contra huracanes, inundaciones, terremotos y otros desastres naturales.',
  },
  {
    icon: ShieldCheck,
    title: 'Robo con Violencia',
    description: 'Resguardo ante robo de contenidos, maquinaria y equipos dentro de la nave.',
  },
  {
    icon: Building2,
    title: 'Daños al Inmueble',
    description: 'Ampara la estructura física del edificio, instalaciones y áreas comunes.',
  },
  {
    icon: Wrench,
    title: 'Responsabilidad Civil',
    description: 'Protege a terceros que puedan sufrir daños dentro de tus instalaciones.',
  },
  {
    icon: BarChart3,
    title: 'Pérdida de Utilidades',
    description: 'Compensación por interrupción del negocio tras un siniestro cubierto.',
  },
]

const explanation = [
  {
    title: '¿Qué cubre el Seguro de Nave Industrial?',
    text: 'El seguro de nave industrial es una póliza multirriesgo que protege el inmueble, su contenido, la maquinaria y la responsabilidad del propietario frente a terceros. Es esencial para cualquier empresa que opere o rente espacios industriales.',
  },
  {
    title: '¿Quién lo necesita?',
    text: 'Ideal para propietarios de naves industriales, arrendadores, empresas manufactureras, bodegas logísticas y parques industriales. Si tienes una inversión inmobiliaria industrial, debes protegerla.',
  },
  {
    title: '¿Cómo se calcula la prima?',
    text: 'La prima depende del valor de reconstrucción del inmueble, el tipo de actividad que se desarrolla, los sistemas de protección instalados y el historial de siniestralidad. Nuestros agentes te ayudan a encontrar el equilibrio perfecto entre cobertura y costo.',
  },
]

export default function NaveIndustrialPage() {
  return (
    <>
      <HeroSection
        badge="Nave Industrial"
        title="Protege tu inversión industrial con la cobertura correcta"
        subtitle="Una nave industrial representa una inversión significativa. Nuestros seguros especializados garantizan que cualquier eventualidad no detenga tu operación ni comprometa tu patrimonio."
        imageSrc="/images/products/nave-industrial.jpg"
        imageAlt="Nave industrial moderna protegida por Olea Seguros"
      />
      <AseguradorasSection />
      <BeneficiosSection
        productName="Nave Industrial"
        intro="Diseñamos pólizas a la medida de cada inmueble industrial, considerando el tipo de construcción, la actividad productiva y los riesgos específicos del entorno para ofrecerte la cobertura óptima."
        beneficios={beneficios}
        explanation={explanation}
      />
      <TeamSection />
      <BlogSection />
      <NewsletterSection />
    </>
  )
}
