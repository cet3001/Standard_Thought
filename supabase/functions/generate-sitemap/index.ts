import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface SitemapUrl {
  loc: string
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    console.log('Starting enhanced sitemap generation...')

    const baseUrl = 'https://urbanwealthblueprints.com' // Update with actual domain when deployed
    const currentDate = new Date().toISOString().split('T')[0]

    // Static pages with priorities optimized for urban wealth building and Black community keywords
    const staticPages: SitemapUrl[] = [
      {
        loc: `${baseUrl}/`,
        lastmod: currentDate,
        changefreq: 'daily',
        priority: 1.0 // Homepage - "generational wealth building" entry point
      },
      {
        loc: `${baseUrl}/credit`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.95 // Credit building - critical for Black wealth gap closure
      },
      {
        loc: `${baseUrl}/cash-management`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.95 // Cash management - foundation for generational wealth
      },
      {
        loc: `${baseUrl}/investing`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.95 // Investing - key for Black community wealth building
      },
      {
        loc: `${baseUrl}/ai-side-hustles`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.85 // Modern income streams for urban communities
      },
      {
        loc: `${baseUrl}/blog`,
        lastmod: currentDate,
        changefreq: 'daily',
        priority: 0.85 // Blog listing - updated frequently with wealth tips
      },
      {
        loc: `${baseUrl}/sales`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: 0.75 // Guides and resources
      },
      {
        loc: `${baseUrl}/about`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.65 // About page
      },
      {
        loc: `${baseUrl}/submit-story`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.6 // Community stories
      },
      {
        loc: `${baseUrl}/privacy-policy`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: 0.3
      },
      {
        loc: `${baseUrl}/terms-of-service`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: 0.3
      },
      {
        loc: `${baseUrl}/cookie-policy`,
        lastmod: currentDate,
        changefreq: 'yearly',
        priority: 0.3
      }
    ]

    // Fetch published blog posts with SEO metadata
    const { data: blogPosts, error: blogError } = await supabase
      .from('blog_posts')
      .select('slug, updated_at, created_at, category, tags, title, excerpt')
      .eq('published', true)
      .order('created_at', { ascending: false })

    if (blogError) {
      console.error('Error fetching blog posts:', blogError)
      throw blogError
    }

    console.log(`Found ${blogPosts?.length || 0} published blog posts`)

    // Generate blog post URLs with intelligent SEO priorities
    const blogUrls: SitemapUrl[] = (blogPosts || []).map(post => {
      // Base priority for blog posts
      let priority = 0.6
      
      // Analyze content for target keywords
      const content = `${post.title} ${post.excerpt} ${post.category} ${(post.tags || []).join(' ')}`.toLowerCase()
      
      // Boost priority for generational wealth and Black community keywords
      const highValueKeywords = [
        'generational wealth', 'black communities', 'wealth gap', 'legacy building',
        'first generation', 'urban wealth', 'community wealth', 'inheritance',
        'wealth building', 'financial freedom', 'economic empowerment'
      ]
      
      const mediumValueKeywords = [
        'credit building', 'investing', 'entrepreneurship', 'side hustles',
        'financial literacy', 'money mindset', 'cash flow', 'portfolio'
      ]

      // Check for high-value keyword matches
      const hasHighValue = highValueKeywords.some(keyword => content.includes(keyword))
      const hasMediumValue = mediumValueKeywords.some(keyword => content.includes(keyword))
      
      if (hasHighValue) {
        priority = 0.9 // High priority for target demographic content
      } else if (hasMediumValue) {
        priority = 0.75 // Medium-high priority for wealth building content
      }

      return {
        loc: `${baseUrl}/blog/${post.slug}`,
        lastmod: new Date(post.updated_at).toISOString().split('T')[0],
        changefreq: 'monthly' as const,
        priority
      }
    })

    // Fetch active guides
    const { data: guides, error: guidesError } = await supabase
      .from('guides')
      .select('title, updated_at, created_at, description')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })

    if (guidesError) {
      console.warn('Error fetching guides:', guidesError)
    }

    // Generate guide URLs with high priority for educational resources
    const guideUrls: SitemapUrl[] = (guides || []).map((guide) => {
      const slug = guide.title.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .replace(/^-+|-+$/g, '')

      return {
        loc: `${baseUrl}/guides/${slug}`,
        lastmod: new Date(guide.updated_at).toISOString().split('T')[0],
        changefreq: 'monthly' as const,
        priority: 0.8 // High priority for wealth building guides
      }
    })

    // Combine all URLs
    const allUrls = [...staticPages, ...blogUrls, ...guideUrls]

    console.log(`Generated sitemap with ${allUrls.length} URLs`)

    // Generate XML sitemap with mobile optimization
    const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>`
    const urlsetOpen = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml" 
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`
    const urlsetClose = `</urlset>`

    const urlElements = allUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(2)}</priority>
    <mobile:mobile/>
  </url>`).join('\n')

    const sitemapXml = `${xmlHeader}
${urlsetOpen}
${urlElements}
${urlsetClose}`

    // Generate sitemap index
    const sitemapIndexXml = `${xmlHeader}
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`

    // Store sitemap in database for admin access and auto-updates
    const { error: insertError } = await supabase
      .from('seo_settings')
      .upsert({
        page_type: 'sitemap_xml',
        title: 'Auto-Generated Sitemap XML',
        description: sitemapXml,
        keywords: 'sitemap,seo,urban wealth,generational wealth Black communities,wealth building',
        og_title: 'Sitemap for Urban Wealth Building Community',
        og_description: 'Comprehensive sitemap for generational wealth building resources',
        is_active: true,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'page_type'
      })

    if (insertError) {
      console.error('Error storing sitemap:', insertError)
    }

    // Also store sitemap index
    const { error: indexInsertError } = await supabase
      .from('seo_settings')
      .upsert({
        page_type: 'sitemap_index',
        title: 'Sitemap Index XML',
        description: sitemapIndexXml,
        keywords: 'sitemap index,seo,urban wealth',
        is_active: true,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'page_type'
      })

    if (indexInsertError) {
      console.error('Error storing sitemap index:', indexInsertError)
    }

    console.log('Enhanced sitemap generation completed successfully')

    // Return sitemap or sitemap index based on request
    const requestUrl = new URL(req.url)
    const isIndex = requestUrl.searchParams.get('type') === 'index'

    return new Response(isIndex ? sitemapIndexXml : sitemapXml, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=1800', // Cache for 30 minutes
        'X-Robots-Tag': 'index, follow',
      }
    })

  } catch (error) {
    console.error('Error generating sitemap:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to generate sitemap', details: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    )
  }
})