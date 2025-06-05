
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email, name, unsubscribe_token } = await req.json()

    if (!email) {
      throw new Error('Email is required')
    }

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set')
    }

    const unsubscribeUrl = `https://zedewynjmeyhbjysnxld.supabase.co/functions/v1/unsubscribe/${unsubscribe_token}`
    const websiteUnsubscribeUrl = `https://your-domain.com/unsubscribe/${unsubscribe_token}`

    const emailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to the Movement - Standardthought</title>
    <style>
        body { 
            font-family: 'Helvetica Neue', Arial, sans-serif; 
            line-height: 1.6; 
            color: #0A0A0A; 
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
        }
        .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header { 
            background: linear-gradient(135deg, #247EFF 0%, #0057FF 100%); 
            color: white; 
            padding: 40px 30px; 
            text-align: center; 
        }
        .header h1 { 
            margin: 0; 
            font-size: 28px; 
            font-weight: bold; 
        }
        .header p { 
            margin: 10px 0 0 0; 
            font-size: 16px; 
            opacity: 0.9; 
        }
        .content { 
            padding: 40px 30px; 
        }
        .content h2 { 
            color: #247EFF; 
            font-size: 24px; 
            margin-bottom: 20px; 
        }
        .content p { 
            margin-bottom: 16px; 
            font-size: 16px; 
            line-height: 1.7; 
        }
        .highlight-box { 
            background: #f0f7ff; 
            border: 2px solid #247EFF; 
            border-radius: 8px; 
            padding: 20px; 
            margin: 24px 0; 
        }
        .highlight-box h3 { 
            color: #247EFF; 
            margin: 0 0 12px 0; 
            font-size: 18px; 
        }
        .cta-button { 
            display: inline-block; 
            background: #247EFF; 
            color: white; 
            padding: 16px 32px; 
            text-decoration: none; 
            border-radius: 8px; 
            font-weight: bold; 
            margin: 20px 0; 
            transition: background-color 0.3s;
        }
        .cta-button:hover { 
            background: #0057FF; 
        }
        .footer { 
            background: #0A0A0A; 
            color: #ffffff; 
            padding: 30px; 
            text-align: center; 
            font-size: 14px; 
        }
        .footer a { 
            color: #247EFF; 
            text-decoration: none; 
        }
        .unsubscribe { 
            margin-top: 20px; 
            font-size: 12px; 
            color: #888; 
        }
        .unsubscribe a { 
            color: #247EFF; 
            text-decoration: none; 
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔥 Welcome to the Movement!</h1>
            <p>You just joined 10,000+ builders who refuse to settle</p>
        </div>
        
        <div class="content">
            <h2>What's good, ${name ? name.split(' ')[0] : 'Builder'}!</h2>
            
            <p>You just tapped into something real. While others are still talking, you're already moving. That's the difference between dreamers and builders.</p>
            
            <div class="highlight-box">
                <h3>🎯 Here's What You're Getting:</h3>
                <p><strong>Weekly "Hustle Notes"</strong> - Raw lessons from builders who started with nothing but made it happen. No theory, just what actually works.</p>
                <p><strong>Behind-the-Scenes Access</strong> - Real stories, real failures, real comebacks. The stuff that doesn't make it to Instagram.</p>
                <p><strong>Exclusive Strategies</strong> - Playbooks and frameworks that turn grind into generational wealth.</p>
            </div>
            
            <p>Your first "Hustle Note" drops this week. It's about the one mindset shift that separates those who make it from those who don't. Trust me, you'll want to read this one twice.</p>
            
            <p><strong>Real talk:</strong> We're not here to waste your time with fluff. Every email you get from us will have something you can use immediately. If it doesn't, hit reply and call us out.</p>
            
            <a href="#" class="cta-button">Check Out Our Latest Stories</a>
            
            <p>Stay hungry,<br>
            <strong>The Standardthought Team</strong></p>
            
            <p><em>P.S. - Reply to this email and tell us what you're building. We read every single one and sometimes feature the best stories in our newsletter.</em></p>
        </div>
        
        <div class="footer">
            <p>© 2024 Standardthought. Built from nothing, made for builders.</p>
            <p>From the mud to momentum. For the ones who weren't handed anything—welcome home.</p>
            
            <div class="unsubscribe">
                <p>Don't want to receive these emails? <a href="${websiteUnsubscribeUrl}">Unsubscribe here</a></p>
                <p>Standardthought Newsletter | Building Legacy, One Story at a Time</p>
            </div>
        </div>
    </div>
</body>
</html>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Standardthought <hello@resend.dev>',
        to: [email],
        subject: '🔥 Welcome to the Movement - Your First Move Starts Now',
        html: emailContent,
      }),
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.error('Resend API error:', errorText)
      throw new Error(`Failed to send email: ${res.status} ${errorText}`)
    }

    const data = await res.json()
    console.log('Email sent successfully:', data)

    return new Response(
      JSON.stringify({ success: true, data }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )

  } catch (error) {
    console.error('Error sending welcome email:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
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
