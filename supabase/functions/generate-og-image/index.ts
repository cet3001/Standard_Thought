import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { ImageResponse } from "https://deno.land/x/og_edge@0.0.6/mod.ts"

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

    // Load fonts
    const [interRegular, interBold] = await Promise.all([
      fetch('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap').then(res => res.arrayBuffer()),
      fetch('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap').then(res => res.arrayBuffer()),
    ])

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1a1a1a',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            fontFamily: 'Inter',
            position: 'relative',
          }}
        >
          {/* Brand gradient overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, rgba(244, 208, 63, 0.1), rgba(255, 215, 0, 0.1), rgba(255, 235, 59, 0.1))',
            }}
          />
          
          {/* Content container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
              maxWidth: '1000px',
              textAlign: 'center',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Category badge */}
            {category && (
              <div
                style={{
                  background: 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)',
                  color: '#1a1a1a',
                  padding: '12px 24px',
                  borderRadius: '25px',
                  fontSize: '18px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '40px',
                  transform: 'rotate(-2deg)',
                }}
              >
                {category}
              </div>
            )}

            {/* Main title */}
            <h1
              style={{
                fontSize: title.length > 50 ? '48px' : title.length > 30 ? '60px' : '72px',
                fontWeight: '700',
                color: '#f5f5dc',
                lineHeight: '1.2',
                margin: '0 0 40px 0',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                background: 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b, #f4d03f)',
                backgroundSize: '400% 400%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {title}
            </h1>

            {/* Standard Thought branding */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginTop: '60px',
              }}
            >
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#f5f5dc',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}
              >
                STANDARD THOUGHT
              </div>
            </div>

            {/* Accent underline */}
            <div
              style={{
                width: '120px',
                height: '6px',
                background: 'linear-gradient(45deg, #f4d03f, #ffd700, #ffeb3b)',
                borderRadius: '3px',
                marginTop: '20px',
              }}
            />
          </div>

          {/* Bottom corner accent */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              width: '300px',
              height: '300px',
              background: 'linear-gradient(135deg, transparent 50%, rgba(244, 208, 63, 0.2) 100%)',
              borderRadius: '300px 0 0 0',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: interRegular,
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Inter',
            data: interBold,
            weight: 700,
            style: 'normal',
          },
        ],
      }
    )
  } catch (error) {
    console.error('Error generating OG image:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to generate image' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})