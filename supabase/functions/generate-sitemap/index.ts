import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface BlogPost {
  slug: string;
  updated_at: string;
  created_at: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    // Get all published blog posts
    const { data: posts, error } = await supabaseClient
      .from('blog_posts')
      .select('slug, updated_at, created_at')
      .eq('published', true)
      .order('updated_at', { ascending: false })

    if (error) {
      throw error
    }

    const baseUrl = 'https://www.standardthought.com'
    const currentDate = new Date().toISOString()
    
    // Static pages with their priorities and change frequencies
    const staticPages = [
      { url: '/', priority: '1.0', changefreq: 'daily', lastmod: currentDate },
      { url: '/about', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
      { url: '/blog', priority: '0.9', changefreq: 'daily', lastmod: currentDate },
      { url: '/sales', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
      { url: '/cash-management', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
      { url: '/credit', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
      { url: '/investing', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
      { url: '/ai-side-hustles', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
      { url: '/submit-story', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
      { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly', lastmod: currentDate },
      { url: '/terms-of-service', priority: '0.3', changefreq: 'yearly', lastmod: currentDate },
      { url: '/cookie-policy', priority: '0.3', changefreq: 'yearly', lastmod: currentDate },
    ]

    // Generate main sitemap XML
    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`

    // Add static pages
    for (const page of staticPages) {
      sitemapXml += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
  </url>
`
    }

    // Add blog posts
    if (posts && posts.length > 0) {
      for (const post of posts as BlogPost[]) {
        if (post.slug) {
          const lastmod = post.updated_at || post.created_at
          sitemapXml += `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <mobile:mobile/>
  </url>
`
        }
      }
    }

    sitemapXml += `</urlset>`

    // Also generate sitemap index
    const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`

    const requestUrl = new URL(req.url)
    const isIndex = requestUrl.searchParams.get('type') === 'index'

    return new Response(
      isIndex ? sitemapIndexXml : sitemapXml,
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/xml',
          'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        },
      },
    )

  } catch (error) {
    console.error('Sitemap generation error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
})