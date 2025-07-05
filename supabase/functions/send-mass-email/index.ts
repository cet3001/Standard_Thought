import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.0';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface MassEmailRequest {
  subject: string;
  body: string;
  attachment?: {
    filename: string;
    content: string; // base64 encoded
    type: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Verify admin access
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('No authorization header');
    }

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    
    if (authError || !user) {
      throw new Error('Unauthorized');
    }

    // Check if user is admin
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    if (profileError || profile?.role !== 'admin') {
      throw new Error('Admin access required');
    }

    const { subject, body, attachment }: MassEmailRequest = await req.json();

    if (!subject || !body) {
      throw new Error('Subject and body are required');
    }

    // Get all active subscribers
    const { data: subscribers, error: subscribersError } = await supabase
      .from('Subscribers')
      .select('email, name')
      .eq('unsubscribed', false)
      .not('email', 'is', null);

    if (subscribersError) {
      throw new Error(`Failed to fetch subscribers: ${subscribersError.message}`);
    }

    if (!subscribers || subscribers.length === 0) {
      throw new Error('No active subscribers found');
    }

    console.log(`Sending email to ${subscribers.length} subscribers`);

    // Prepare email data
    const emailData: any = {
      from: 'Standardthought Team <team@standardthought.com>',
      to: subscribers.map(sub => sub.email),
      subject,
      html: generateEmailHTML(body, subject),
      text: body, // Plain text fallback
    };

    // Add attachment if provided
    if (attachment) {
      emailData.attachments = [{
        filename: attachment.filename,
        content: attachment.content,
        type: attachment.type,
      }];
    }

    // Send the email
    const emailResponse = await resend.emails.send(emailData);

    console.log("Mass email sent successfully:", emailResponse);

    // Log the email send (optional - you could create a table for this)
    await supabase
      .from('guide_downloads') // Reusing this table for logging, or create a new one
      .insert({
        user_email: user.email!,
        guide_name: `Mass Email: ${subject}`,
        file_path: 'email_campaign',
        downloaded_at: new Date().toISOString()
      });

    return new Response(JSON.stringify({
      success: true,
      message: `Email sent to ${subscribers.length} subscribers`,
      emailId: emailResponse.data?.id
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in send-mass-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to send mass email',
        success: false 
      }),
      {
        status: 400,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

function generateEmailHTML(body: string, subject: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${subject}</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f5f5;
        }
        .email-container {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          border-bottom: 2px solid #FFD700;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .logo {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #FFD700, #FFA500);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 24px;
          color: black;
          margin-bottom: 10px;
        }
        .brand-name {
          font-size: 24px;
          font-weight: bold;
          color: #333;
          margin: 10px 0 5px 0;
        }
        .tagline {
          color: #666;
          font-size: 14px;
          font-style: italic;
        }
        .content {
          white-space: pre-wrap;
          font-size: 16px;
          line-height: 1.8;
          margin: 20px 0;
        }
        .footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #eee;
          text-align: center;
          color: #666;
          font-size: 14px;
        }
        .signature {
          color: #FFD700;
          font-weight: bold;
          margin: 15px 0;
        }
        .unsubscribe {
          font-size: 12px;
          color: #999;
          margin-top: 20px;
        }
        .gold-text {
          color: #FFD700;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="logo">ST</div>
          <div class="brand-name">Standardthought</div>
          <div class="tagline">Urban Wealth. Real Progress.</div>
        </div>
        
        <div class="content">${body}</div>
        
        <div class="footer">
          <p>Keep building, keep growing.</p>
          <p class="signature">— The Standardthought Team</p>
          
          <div class="unsubscribe">
            <p>You're receiving this because you're part of the Standardthought community.</p>
            <p>Building <span class="gold-text">generational wealth</span> one step at a time.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

serve(handler);