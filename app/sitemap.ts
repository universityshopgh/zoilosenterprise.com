import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zoilosenterprise.com'
  
  const routes = [
    '',
    '/about',
    '/services',
    '/realty',
    '/foundation',
    '/gallery',
    '/contact',
    '/careers',
    '/global',
    '/privacy-policy',
    '/terms-of-service',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as any,
    priority: route === '' ? 1 : 0.8,
  }))
}
