
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NewsletterRequest {
  subject: string;
  content: string;
}

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Newsletter send request received");

    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Get user from auth header
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("No authorization header");
    }

    const { data: { user }, error: authError } = await supabaseClient.auth.getUser(
      authHeader.replace("Bearer ", "")
    );

    if (authError || !user) {
      throw new Error("Authentication failed");
    }

    // Check if user is admin
    const { data: profile, error: profileError } = await supabaseClient
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profileError || profile?.role !== "admin") {
      throw new Error("Admin access required");
    }

    const { subject, content }: NewsletterRequest = await req.json();

    if (!subject || !content) {
      throw new Error("Subject and content are required");
    }

    console.log("Fetching active subscribers...");

    // Get all active subscribers
    const { data: subscribers, error: subscribersError } = await supabaseClient
      .from("Subscribers")
      .select("email, name, unsubscribe_token")
      .eq("unsubscribed", false)
      .not("email", "is", null);

    if (subscribersError) {
      console.error("Error fetching subscribers:", subscribersError);
      throw new Error("Failed to fetch subscribers");
    }

    console.log(`Found ${subscribers?.length || 0} active subscribers`);

    if (!subscribers || subscribers.length === 0) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "No active subscribers found",
          sent_count: 0 
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Create the email template
    const createEmailHtml = (subscriberName: string | null, unsubscribeToken: string | null) => {
      const name = subscriberName || "Subscriber";
      const unsubscribeUrl = unsubscribeToken 
        ? `${Deno.env.get("SUPABASE_URL")?.replace('//', '//').replace('supabase.co', 'supabase.co')}/functions/v1/unsubscribe?token=${unsubscribeToken}`
        : "#";

      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${subject}</title>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f7f6f3; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
            .header { text-align: center; padding: 40px 20px 30px; border-bottom: 1px solid #e5e5e5; }
            .banner { width: 100%; max-width: 750px; height: auto; margin: 0 auto; display: block; }
            .content { padding: 40px 30px; }
            .greeting { font-size: 18px; margin-bottom: 20px; color: #0a0a0a; }
            .subject-line { font-size: 24px; font-weight: 700; margin-bottom: 24px; color: #0a0a0a; line-height: 1.2; }
            .message { font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 30px; white-space: pre-wrap; }
            .footer { background-color: #f7f6f3; padding: 30px 20px; text-align: center; border-top: 1px solid #e5e5e5; }
            .footer-text { font-size: 14px; color: #666; margin-bottom: 10px; }
            .footer-links a { color: #1e40af; text-decoration: none; margin: 0 10px; }
            .footer-links a:hover { text-decoration: underline; }
            .unsubscribe { font-size: 12px; color: #999; margin-top: 15px; }
            .unsubscribe a { color: #1e40af; text-decoration: none; }
            .unsubscribe a:hover { text-decoration: underline; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://zedewynjmeyhbjysnxld.supabase.co/storage/v1/object/public/assets/21728a70-c6c7-4f2f-8689-d74741cb605b.png" alt="Standard Thought - Real Wisdom. Real Results." class="banner" />
            </div>
            
            <div class="content">
              <div class="greeting">Hey ${name},</div>
              <h1 class="subject-line">${subject}</h1>
              <div class="message">${content.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="footer">
              <div class="footer-text">
                Keep building. Keep grinding. Your story matters.
              </div>
              <div class="footer-links">
                <a href="https://standardthought.com">Visit Website</a>
                <a href="https://standardthought.com/blog">Read Blog</a>
              </div>
              <div class="unsubscribe">
                You're receiving this because you subscribed to our newsletter.<br>
                <a href="${unsubscribeUrl}">Unsubscribe</a> | 
                <a href="https://standardthought.com/privacy-policy">Privacy Policy</a>
              </div>
            </div>
          </div>
        </body>
        </html>
      `;
    };

    console.log("Sending emails...");
    
    // Send emails in batches to avoid rate limits
    const batchSize = 10;
    let sentCount = 0;
    let failedCount = 0;

    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize);
      
      const emailPromises = batch.map(async (subscriber) => {
        try {
          const emailHtml = createEmailHtml(subscriber.name, subscriber.unsubscribe_token);
          
          const emailResponse = await resend.emails.send({
            from: "Standardthought <newsletter@standardthought.com>",
            to: [subscriber.email],
            subject: subject,
            html: emailHtml,
          });

          console.log(`Email sent to ${subscriber.email}:`, emailResponse);
          return { success: true, email: subscriber.email };
        } catch (error) {
          console.error(`Failed to send email to ${subscriber.email}:`, error);
          return { success: false, email: subscriber.email, error };
        }
      });

      const results = await Promise.allSettled(emailPromises);
      
      results.forEach((result) => {
        if (result.status === 'fulfilled' && result.value.success) {
          sentCount++;
        } else {
          failedCount++;
        }
      });

      // Add a small delay between batches
      if (i + batchSize < subscribers.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    console.log(`Newsletter sending completed. Sent: ${sentCount}, Failed: ${failedCount}`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Newsletter sent successfully to ${sentCount} subscribers`,
        sent_count: sentCount,
        failed_count: failedCount,
        total_subscribers: subscribers.length
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error in send-newsletter function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to send newsletter",
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

