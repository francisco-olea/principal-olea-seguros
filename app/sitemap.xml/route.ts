import { NextResponse } from 'next/server'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://oleaasociados.com'

const routes = [
  '/',
  '/blog',
  '/contacto',
  '/nosotros',
  '/siniestros',
  '/productos/empresarial',
  '/productos/fianzas',
  '/productos/maquinaria',
  '/productos/medico-vida',
  '/productos/nave-industrial',
  '/productos/vehiculos-flotillas',
  '/politica-privacidad',
  '/terminos-condiciones',
]

const buildUrl = (path: string) => `${baseUrl.replace(/\/$/, '')}${path}`

const generateSitemap = () => {
  const now = new Date().toISOString().split('T')[0]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
    .map(
      (route) => `  <url>
    <loc>${buildUrl(route)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('\n')}
</urlset>`
}

export async function GET() {
  return new NextResponse(generateSitemap(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
