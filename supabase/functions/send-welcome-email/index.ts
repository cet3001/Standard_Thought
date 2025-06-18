
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

    console.log(`[EDGE FUNCTION DEBUG] Processing welcome email for: ${email}`)

    if (!email) {
      throw new Error('Email is required')
    }

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (!RESEND_API_KEY) {
      console.error('[EDGE FUNCTION DEBUG] RESEND_API_KEY not found')
      throw new Error('RESEND_API_KEY is not set')
    }

    console.log(`[EDGE FUNCTION DEBUG] RESEND_API_KEY found, proceeding with email for: ${email}`)

    // Initialize Supabase client to fetch playbook
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Try to fetch the playbook PDF from storage
    let playbookAttachment = null
    try {
      console.log(`[EDGE FUNCTION DEBUG] Attempting to fetch playbook from storage for: ${email}`)
      const { data: files, error: listError } = await supabase.storage
        .from('playbooks')
        .list()

      if (listError) {
        console.error(`[EDGE FUNCTION DEBUG] Error listing playbooks for ${email}:`, listError)
      } else if (files && files.length > 0) {
        // Get the first PDF file found
        const pdfFile = files.find(file => file.name.toLowerCase().endsWith('.pdf'))
        
        if (pdfFile) {
          console.log(`[EDGE FUNCTION DEBUG] Found playbook file for ${email}:`, pdfFile.name)
          const { data: fileData, error: downloadError } = await supabase.storage
            .from('playbooks')
            .download(pdfFile.name)

          if (downloadError) {
            console.error(`[EDGE FUNCTION DEBUG] Error downloading playbook for ${email}:`, downloadError)
          } else if (fileData) {
            const arrayBuffer = await fileData.arrayBuffer()
            const base64Content = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))
            
            playbookAttachment = {
              filename: pdfFile.name,
              content: base64Content,
              content_type: 'application/pdf'
            }
            console.log(`[EDGE FUNCTION DEBUG] Playbook attachment prepared successfully for: ${email}`)
          }
        } else {
          console.log(`[EDGE FUNCTION DEBUG] No PDF files found in playbooks bucket for: ${email}`)
        }
      } else {
        console.log(`[EDGE FUNCTION DEBUG] No files found in playbooks bucket for: ${email}`)
      }
    } catch (storageError) {
      console.error(`[EDGE FUNCTION DEBUG] Storage error for ${email} (continuing without attachment):`, storageError)
    }

    const unsubscribeUrl = `https://zedewynjmeyhbjysnxld.supabase.co/functions/v1/unsubscribe/${unsubscribe_token}`
    const websiteUnsubscribeUrl = `https://www.standardthought.com/unsubscribe/${unsubscribe_token}`

    const emailContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to the Movement - Your Playbook is Here!</title>
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
        .playbook-cta { 
            background: linear-gradient(135deg, #247EFF 0%, #0057FF 100%);
            border: none;
            border-radius: 12px; 
            padding: 20px 40px; 
            margin: 30px 0;
            text-align: center;
            box-shadow: 0 4px 15px rgba(36, 126, 255, 0.3);
        }
        .playbook-cta h3 { 
            color: white; 
            margin: 0 0 10px 0; 
            font-size: 20px; 
            font-weight: bold;
        }
        .playbook-cta p { 
            color: white; 
            margin: 0; 
            font-size: 14px; 
            opacity: 0.9;
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
            <p>Your playbook is attached - time to level up</p>
        </div>
        
        <div class="content">
            <h2>What's good, ${name ? name.split(' ')[0] : 'Builder'}!</h2>
            
            <p>You just tapped into something real. While others are still talking, you're already moving. That's the difference between dreamers and builders.</p>
            
            ${playbookAttachment ? `
            <div class="playbook-cta">
                <h3>📖 Your Free Playbook is Attached!</h3>
                <p>Check your attachments for the complete playbook PDF. This is the same guide that's helped thousands of builders turn their hustle into generational wealth.</p>
            </div>
            ` : `
            <div class="playbook-cta">
                <h3>📖 Your Free Playbook is Coming!</h3>
                <p>We're preparing your exclusive playbook. You'll receive it within 24 hours with strategies that have helped thousands build generational wealth.</p>
            </div>
            `}
            
            <div class="highlight-box">
                <h3>🎯 Here's What You're Getting:</h3>
                <p><strong>Weekly "Hustle Notes"</strong> - Raw lessons from builders who started with nothing but made it happen. No theory, just what actually works.</p>
                <p><strong>Behind-the-Scenes Access</strong> - Real stories, real failures, real comebacks. The stuff that doesn't make it to Instagram.</p>
                <p><strong>Exclusive Strategies</strong> - Playbooks and frameworks that turn grind into generational wealth.</p>
            </div>
            
            <p>Your first "Hustle Note" drops this week. It's about the one mindset shift that separates those who make it from those who don't. Trust me, you'll want to read this one twice.</p>
            
            <p><strong>Real talk:</strong> We're not here to waste your time with fluff. Every email you get from us will have something you can use immediately. If it doesn't, hit reply and call us out.</p>
            
            <a href="https://www.standardthought.com/blog" class="cta-button">Check Out Our Latest Stories</a>
            
            <p>Stay hungry,<br>
            <strong>The Standardthought Team</strong></p>
            
            <p><em>P.S. - Reply to this email and tell us what you're building. We read every single one and sometimes feature the best stories in our newsletter.</em></p>
        </div>
        
        <div class="footer">
            <p>© 2024 Standardthought. Built from nothing, made for builders.</p>
            <p>From the mud to momentum. For the ones who weren't handed anything—welcome home.</p>
            <p>
                <a href="https://standardthought.com">Visit Website</a> | 
                <a href="https://standardthought.com/blog">Read Blog</a> | 
                <a href="https://instagram.com/standard_thought">Follow @standard_thought</a>
            </p>
            
            <div class="unsubscribe">
                <p>Don't want to receive these emails? <a href="${websiteUnsubscribeUrl}">Unsubscribe here</a></p>
                <p>Standardthought Newsletter | Building Legacy, One Story at a Time</p>
            </div>
        </div>
    </div>
</body>
</html>
    `

    // Prepare email payload
    const emailPayload = {
      from: 'Standardthought <cet3001@gmail.com>',
      to: [email],
      subject: '🔥 Welcome to the Movement - Your Playbook is Attached!',
      html: emailContent,
    }

    // Add attachment if playbook was found
    if (playbookAttachment) {
      emailPayload.attachments = [playbookAttachment]
    }

    console.log(`[EDGE FUNCTION DEBUG] Sending email to ${email} via Resend API...`)
    console.log(`[EDGE FUNCTION DEBUG] Email payload for ${email}:`, {
      from: emailPayload.from,
      to: emailPayload.to,
      subject: emailPayload.subject,
      hasAttachment: !!playbookAttachment
    })

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.error(`[EDGE FUNCTION DEBUG] Resend API error for ${email}:`, {
        status: res.status,
        statusText: res.statusText,
        error: errorText
      })
      throw new Error(`Failed to send email: ${res.status} ${errorText}`)
    }

    const data = await res.json()
    console.log(`[EDGE FUNCTION DEBUG] Email sent successfully to ${email}:`, data)

    return new Response(
      JSON.stringify({ success: true, data, has_attachment: !!playbookAttachment }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )

  } catch (error) {
    console.error(`[EDGE FUNCTION DEBUG] Error sending welcome email:`, error)
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
