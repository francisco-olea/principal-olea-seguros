import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  badge?: string
}

export default function HeroSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  badge,
}: HeroSectionProps) {
  return (
    <section className="bg-brand-navy overflow-hidden">
      <div className="container-max px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6 text-white">
            {badge && (
              <span className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-xs font-sans font-medium tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                {badge}
              </span>
            )}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
              {title}
            </h1>
            <p className="text-base md:text-lg text-[#b0bec5] leading-relaxed font-sans max-w-lg">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-secondary text-white font-sans font-semibold text-sm rounded-md hover:bg-green-dark transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contáctanos
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/nosotros"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/30 text-white font-sans font-medium text-sm rounded-md hover:bg-white/10 transition-all duration-200"
              >
                Conocer más
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/5 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
