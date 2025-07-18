import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContentReminderRequest {
  title: string;
  pillar: string;
  outline: string;
  grit_factor: number;
  scheduled_date: string;
  admin_email?: string;
}

const generateProvocativeReminder = (title: string, pillar: string, grit_factor: number): string => {
  const gritMessages = [
    "Remember: We're not here to coddle. This content needs to challenge assumptions and push boundaries.",
    "Challenge accepted: Make this content so real it makes people uncomfortable with their current mindset.",
    "Legacy check: Will this content still matter in 20 years? Will it build generational wealth?",
    "Grit test: If this doesn't make someone question their financial comfort zone, it's not hitting hard enough.",
    "Urban truth: Cut through the fluff. What would you tell your younger self about money?"
  ];
  
  const gritIndex = Math.min(Math.floor(grit_factor / 2), gritMessages.length - 1);
  return gritMessages[gritIndex];
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { title, pillar, outline, grit_factor, scheduled_date, admin_email }: ContentReminderRequest = await req.json();
    
    // Get admin email if not provided
    let recipientEmail = admin_email;
    if (!recipientEmail) {
      const { data: adminProfile } = await supabase
        .from('profiles')
        .select('email')
        .eq('role', 'admin')
        .single();
      
      recipientEmail = adminProfile?.email || 'admin@urbanwealthblueprint.com';
    }

    const provocativeMessage = generateProvocativeReminder(title, pillar, grit_factor);
    const scheduledDateTime = new Date(scheduled_date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const emailResponse = await resend.emails.send({
      from: "Urban Wealth Blueprint <content@urbanwealthblueprint.com>",
      to: [recipientEmail],
      subject: `🔥 Content Drop Alert: ${title} (Grit Factor: ${grit_factor}/10)`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: #ffffff; padding: 20px;">
          <header style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #f7931e; font-size: 28px; margin: 0;">Urban Wealth Blueprint</h1>
            <p style="color: #cccccc; margin: 5px 0 0 0;">Content Reminder System</p>
          </header>
          
          <div style="background: rgba(255,255,255,0.05); border-radius: 10px; padding: 25px; margin-bottom: 20px;">
            <h2 style="color: #f7931e; margin-top: 0;">📅 Scheduled Content Drop</h2>
            <p style="font-size: 18px; font-weight: bold; color: #ffffff; margin: 10px 0;">${title}</p>
            <p style="color: #cccccc; margin: 5px 0;"><strong>Pillar:</strong> ${pillar}</p>
            <p style="color: #cccccc; margin: 5px 0;"><strong>Scheduled:</strong> ${scheduledDateTime}</p>
            <p style="color: #cccccc; margin: 5px 0;"><strong>Grit Factor:</strong> ${grit_factor}/10</p>
          </div>

          <div style="background: rgba(247, 147, 30, 0.1); border-left: 4px solid #f7931e; padding: 20px; margin: 20px 0;">
            <h3 style="color: #f7931e; margin-top: 0;">🎯 Provocative Reminder</h3>
            <p style="font-style: italic; font-size: 16px; line-height: 1.6;">${provocativeMessage}</p>
          </div>

          <div style="background: rgba(255,255,255,0.05); border-radius: 10px; padding: 20px; margin: 20px 0;">
            <h3 style="color: #ffffff; margin-top: 0;">📝 Content Outline</h3>
            <div style="color: #cccccc; line-height: 1.6;">
              ${outline.split('\n').map(line => `<p style="margin: 8px 0;">${line}</p>`).join('')}
            </div>
          </div>

          <div style="background: rgba(255, 0, 0, 0.1); border-left: 4px solid #ff4444; padding: 20px; margin: 20px 0;">
            <h3 style="color: #ff4444; margin-top: 0;">⚠️ Content Standards Check</h3>
            <ul style="color: #cccccc; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>Does this challenge conventional financial wisdom?</li>
              <li>Will this resonate with Black urban communities?</li>
              <li>Does it focus on generational wealth building?</li>
              <li>Is the language authentic and unapologetic?</li>
              <li>Will readers feel empowered to take action?</li>
            </ul>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.2);">
            <p style="color: #cccccc; font-size: 14px; margin: 0;">
              Keep building that legacy. One post at a time.
            </p>
            <p style="color: #f7931e; font-size: 12px; margin: 10px 0 0 0;">
              Urban Wealth Blueprint - Automated Content Reminder
            </p>
          </div>
        </div>
      `,
    });

    console.log('Content reminder email sent successfully:', emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Content reminder sent',
      email_id: emailResponse.data?.id 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });

  } catch (error: any) {
    console.error('Error sending content reminder:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);