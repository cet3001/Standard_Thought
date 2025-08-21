import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const url = new URL(req.url)
    const title = url.searchParams.get('title') || 'Standard Thought'
    const category = url.searchParams.get('category') || ''

    console.log(`Generating OG image for title: "${title}", category: "${category}"`)

    // Generate SVG-based OG image
    const svg = `
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#2d2d2d;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#f4d03f;stop-opacity:1" />
            <stop offset="33%" style="stop-color:#ffd700;stop-opacity:1" />
            <stop offset="66%" style="stop-color:#ffeb3b;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#f4d03f;stop-opacity:1" />
          </linearGradient>
          <pattern id="texture" patternUnits="userSpaceOnUse" width="100" height="100">
            <circle cx="25" cy="25" r="2" fill="#333" opacity="0.3"/>
            <circle cx="75" cy="75" r="2" fill="#333" opacity="0.3"/>
          </pattern>
        </defs>
        
        <!-- Background -->
        <rect width="1200" height="630" fill="url(#bgGradient)"/>
        <rect width="1200" height="630" fill="url(#texture)"/>
        
        <!-- Brand overlay -->
        <rect width="1200" height="630" fill="url(#goldGradient)" opacity="0.1"/>
        
        <!-- Category badge -->
        ${category ? `
          <rect x="500" y="120" width="${Math.min(category.length * 12 + 40, 200)}" height="40" 
                rx="20" fill="url(#goldGradient)" transform="rotate(-2 ${500 + Math.min(category.length * 6 + 20, 100)} 140)"/>
          <text x="520" y="145" font-family="Arial, sans-serif" font-size="16" font-weight="bold" 
                fill="#1a1a1a" text-anchor="start" transform="rotate(-2 520 145)">${category.toUpperCase()}</text>
        ` : ''}
        
        <!-- Main title -->
        <text x="600" y="${category ? '250' : '220'}" font-family="Arial, sans-serif" 
              font-size="${title.length > 50 ? '36' : title.length > 30 ? '48' : '56'}" 
              font-weight="bold" fill="url(#goldGradient)" text-anchor="middle" 
              textLength="${Math.min(title.length * (title.length > 50 ? 20 : title.length > 30 ? 26 : 32), 1000)}" 
              lengthAdjust="spacingAndGlyphs">
          ${title.length > 60 ? title.substring(0, 57) + '...' : title}
        </text>
        
        <!-- Standard Thought branding -->
        <text x="600" y="450" font-family="Arial, sans-serif" font-size="28" 
              font-weight="bold" fill="#f5f5dc" text-anchor="middle" letter-spacing="2px">
          STANDARD THOUGHT
        </text>
        
        <!-- Accent underline -->
        <rect x="540" y="470" width="120" height="6" rx="3" fill="url(#goldGradient)"/>
        
        <!-- Bottom corner accent -->
        <circle cx="1050" cy="580" r="150" fill="url(#goldGradient)" opacity="0.2"/>
      </svg>
    `

    // Convert SVG to PNG using canvas (basic implementation)
    const response = new Response(svg, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=86400', // Cache for 1 day
      },
    })

    console.log('Successfully generated OG image SVG')
    return response

  } catch (error) {
    console.error('Error generating OG image:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to generate image', details: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})