'use client'

import * as React from 'react'
import Image from 'next/image'

import { Carousel, CarouselContent } from '@/components/ui/carousel'
import type { CarouselApi } from '@/components/ui/carousel'

type Logo = {
  src: string
  alt: string
}

type AseguradorasCarouselProps = {
  logos: Logo[]
}

export default function AseguradorasCarousel({ logos }: AseguradorasCarouselProps) {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(null)

  React.useEffect(() => {
    if (!carouselApi) return

    const interval = window.setInterval(() => {
      carouselApi.scrollNext()
    }, 3200)

    return () => window.clearInterval(interval)
  }, [carouselApi])

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
      <Carousel opts={{ loop: true, align: 'center' }} setApi={setCarouselApi}>
        <CarouselContent className="items-center gap-4 px-4 sm:px-6">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="min-w-[180px] sm:min-w-[220px] md:min-w-[240px] shrink-0 first:pl-2 last:pr-2"
            >
              <div className="flex h-24 sm:h-28 w-full items-center justify-center rounded-3xl bg-white/10 p-3">
                <Image
                  src={`/images/aseguradoras/${logo.src}`}
                  alt={logo.alt}
                  width={220}
                  height={100}
                  className="h-20 sm:h-24 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
