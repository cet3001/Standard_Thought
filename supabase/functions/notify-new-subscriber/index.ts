
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WebhookPayload {
  type: 'INSERT';
  table: string;
  record: {
    id: number;
    email: string;
    name: string | null;
    created_at: string;
  };
  schema: string;
  old_record: null;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload: WebhookPayload = await req.json();
    console.log('Received webhook payload:', payload);

    // Only process INSERT events for the Subscribers table
    if (payload.type !== 'INSERT' || payload.table !== 'Subscribers') {
      return new Response('Not a subscriber insert event', { 
        status: 200,
        headers: corsHeaders 
      });
    }

    const { record } = payload;
    const subscriberName = record.name || 'Anonymous';
    const subscriberEmail = record.email;
    const signupTime = new Date(record.created_at).toLocaleString();

    // Send notification email to you (the admin)
    const emailResponse = await resend.emails.send({
      from: "Standardthought <onboarding@resend.dev>",
      to: ["cet3001@gmail.com"], // Your admin email
      subject: "🎉 New Newsletter Subscriber!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #247EFF;">New Subscriber Alert!</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Subscriber Details:</h3>
            <p><strong>Name:</strong> ${subscriberName}</p>
            <p><strong>Email:</strong> ${subscriberEmail}</p>
            <p><strong>Signed up:</strong> ${signupTime}</p>
          </div>
          
          <p style="color: #666;">
            Someone new just joined your newsletter! Keep building that community! 🚀
          </p>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #999;">
            This notification was sent automatically from your Standardthought newsletter system.
          </p>
        </div>
      `,
    });

    console.log('Notification email sent successfully:', emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error('Error in notify-new-subscriber function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
