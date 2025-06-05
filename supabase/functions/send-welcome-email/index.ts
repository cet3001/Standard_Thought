
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailRequest {
  email: string;
  name?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const { email, name }: WelcomeEmailRequest = await req.json();
    
    console.log(`Sending welcome email to: ${email}`);

    const emailResponse = await resend.emails.send({
      from: "Standard Thought <onboarding@resend.dev>", // Change this to your verified domain
      to: [email],
      subject: "Welcome to the Movement! 🎉 Your Journey Starts Now",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Standard Thought</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f8f9fa;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #247EFF 0%, #0057FF 100%); padding: 40px 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold;">
                Welcome to the Movement! 🔥
              </h1>
              <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">
                ${name ? `What's good, ${name}!` : 'What\'s good!'}
              </p>
            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #0A0A0A; font-size: 24px; margin-bottom: 20px;">
                You just locked in with the realest community on the internet 💯
              </h2>
              
              <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                This isn't your typical "motivational" newsletter. This is where real builders come to get the unfiltered playbook, behind-the-scenes stories, and strategies that actually work.
              </p>

              <div style="background-color: #f8f9ff; border-left: 4px solid #247EFF; padding: 20px; margin: 30px 0;">
                <h3 style="color: #247EFF; margin: 0 0 15px 0; font-size: 18px;">
                  Here's what you can expect:
                </h3>
                <ul style="color: #666; margin: 0; padding-left: 20px; line-height: 1.8;">
                  <li><strong>Weekly Hustle Notes:</strong> Raw lessons from builders who started with nothing</li>
                  <li><strong>Exclusive Interviews:</strong> Real conversations with people changing the game</li>
                  <li><strong>First Access:</strong> Be the first to know about opportunities, tools, and resources</li>
                  <li><strong>Community Insights:</strong> What's working right now in the Standard Thought community</li>
                </ul>
              </div>

              <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
                Your first Hustle Note drops this week. Keep an eye on your inbox – we're about to show you what real building looks like.
              </p>

              <!-- CTA Button -->
              <div style="text-align: center; margin: 40px 0;">
                <a href="https://standardthought.com" 
                   style="background: linear-gradient(135deg, #247EFF 0%, #0057FF 100%); 
                          color: #ffffff; 
                          padding: 15px 30px; 
                          text-decoration: none; 
                          border-radius: 12px; 
                          font-weight: bold; 
                          display: inline-block;
                          font-size: 16px;">
                  Explore Standard Thought →
                </a>
              </div>

              <div style="background-color: #0A0A0A; color: #ffffff; padding: 25px; border-radius: 12px; margin: 30px 0;">
                <h3 style="margin: 0 0 15px 0; color: #ffffff; font-size: 18px;">
                  Real Talk 💬
                </h3>
                <p style="margin: 0; line-height: 1.6; color: #cccccc; font-style: italic;">
                  "I went from broke to six figures in 8 months using these exact strategies. 
                  Standard Thought doesn't just talk about it – they show you how to do it."
                </p>
                <p style="margin: 10px 0 0 0; color: #247EFF; font-weight: bold;">
                  - Marcus, First-Gen Builder
                </p>
              </div>

              <p style="color: #666; font-size: 14px; line-height: 1.6; margin-top: 30px;">
                Questions? Just reply to this email – we actually read and respond to everything.
                <br><br>
                Let's build something legendary together.
                <br><br>
                <strong>The Standard Thought Team</strong>
              </p>
            </div>

            <!-- Footer -->
            <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="color: #999; font-size: 12px; margin: 0;">
                You're receiving this because you joined the Standard Thought movement at standardthought.com
              </p>
            </div>
            
          </div>
        </body>
        </html>
      `,
    });

    console.log("Welcome email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending welcome email:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: "Failed to send welcome email"
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
