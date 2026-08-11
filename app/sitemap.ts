import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { SERVICE_PAGES, TECHNOLOGY_PAGES, INDUSTRY_PAGES, SOLUTION_PAGES, LOCATION_PAGES } from '@/lib/data/seo-data'
import { BLOG_POSTS } from '@/lib/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  // ── Core Pages ─────────────────────────────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = [
    {
      url: SITE_CONFIG.url,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_CONFIG.url}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_CONFIG.url}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_CONFIG.url}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_CONFIG.url}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_CONFIG.url}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_CONFIG.url}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_CONFIG.url}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_CONFIG.url}/support`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_CONFIG.url}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // ── Service Pages (Priority 0.8) ───────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = Object.keys(SERVICE_PAGES).map((slug) => ({
    url: `${SITE_CONFIG.url}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // ── Technology Pages (Priority 0.7) ─────────────────────────────────────────
  const technologyPages: MetadataRoute.Sitemap = Object.keys(TECHNOLOGY_PAGES).map((slug) => ({
    url: `${SITE_CONFIG.url}/technologies/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  // ── Industry Pages (Priority 0.7) ───────────────────────────────────────────
  const industryPages: MetadataRoute.Sitemap = Object.keys(INDUSTRY_PAGES).map((slug) => ({
    url: `${SITE_CONFIG.url}/industries/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  // ── Solution Pages (Priority 0.8) ───────────────────────────────────────────
  const solutionPages: MetadataRoute.Sitemap = Object.keys(SOLUTION_PAGES).map((slug) => ({
    url: `${SITE_CONFIG.url}/solutions/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // ── Location Pages (Priority 0.6) ───────────────────────────────────────────
  const locationPages: MetadataRoute.Sitemap = Object.keys(LOCATION_PAGES).map((slug) => ({
    url: `${SITE_CONFIG.url}/locations/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  // ── Blog Post Pages (Priority 0.6) ─────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [
    ...corePages,
    ...servicePages,
    ...technologyPages,
    ...industryPages,
    ...solutionPages,
    ...locationPages,
    ...blogPages,
  ]
}

