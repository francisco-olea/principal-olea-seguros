import path from 'path'
import { readdirSync } from 'fs'

import AseguradorasCarousel from '@/components/sections/AseguradorasCarousel'

type Logo = {
  src: string
  alt: string
}

const aseguradoras: Logo[] = readdirSync(
  path.join(process.cwd(), 'public', 'images', 'aseguradoras'),
)
  .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
  .sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }))
  .map((file) => ({
    src: file,
    alt: file
      .replace(/\.(png|jpe?g|webp)$/i, '')
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase()),
  }))

export default function AseguradorasSection() {
  return (
    <section className="bg-brand-navy py-14">
      <div className="container-max px-4 md:px-8 lg:px-16">
        <p className="text-center text-xs font-sans font-medium tracking-[0.22em] uppercase text-[#b0bec5] mb-8">
          Aseguradoras con las que trabajamos
        </p>
        <AseguradorasCarousel logos={aseguradoras} />
      </div>
    </section>
  )
}
