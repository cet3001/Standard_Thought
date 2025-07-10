import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("[WEEKLY NEWSLETTER] Starting weekly newsletter generation");

    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Get recent blog posts from the last week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const { data: recentPosts, error: postsError } = await supabaseClient
      .from("blog_posts")
      .select("title, excerpt, slug, created_at, image_url")
      .eq("published", true)
      .gte("created_at", oneWeekAgo.toISOString())
      .order("created_at", { ascending: false })
      .limit(5);

    if (postsError) {
      console.error("[WEEKLY NEWSLETTER] Error fetching posts:", postsError);
      throw new Error("Failed to fetch recent posts");
    }

    console.log(`[WEEKLY NEWSLETTER] Found ${recentPosts?.length || 0} recent posts`);

    // If no recent posts, don't send newsletter
    if (!recentPosts || recentPosts.length === 0) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "No recent posts found, newsletter not sent",
          sent_count: 0 
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Get all active subscribers
    const { data: subscribers, error: subscribersError } = await supabaseClient
      .from("Subscribers")
      .select("email, name, unsubscribe_token")
      .eq("unsubscribed", false)
      .not("email", "is", null);

    if (subscribersError) {
      console.error("[WEEKLY NEWSLETTER] Error fetching subscribers:", subscribersError);
      throw new Error("Failed to fetch subscribers");
    }

    console.log(`[WEEKLY NEWSLETTER] Found ${subscribers?.length || 0} active subscribers`);

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

    // Create the newsletter content
    const createNewsletterHtml = (subscriberName: string | null, unsubscribeToken: string | null) => {
      const name = subscriberName || "Builder";
      const unsubscribeUrl = unsubscribeToken 
        ? `${Deno.env.get("SUPABASE_URL")?.replace('//', '//').replace('supabase.co', 'supabase.co')}/functions/v1/unsubscribe?token=${unsubscribeToken}`
        : "#";

      const postsHtml = recentPosts.map(post => `
        <div style="border: 1px solid #e5e5e5; border-radius: 12px; margin-bottom: 24px; overflow: hidden; background-color: #ffffff;">
          ${post.image_url ? `
            <img src="${post.image_url}" alt="${post.title}" style="width: 100%; height: 200px; object-fit: cover;" />
          ` : ''}
          <div style="padding: 20px;">
            <h3 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 700; color: #0a0a0a; line-height: 1.3;">
              <a href="https://standardthought.com/blog/${post.slug}" style="color: #0a0a0a; text-decoration: none;">
                ${post.title}
              </a>
            </h3>
            <p style="margin: 0 0 16px 0; color: #555; line-height: 1.6; font-size: 16px;">
              ${post.excerpt}
            </p>
            <a href="https://standardthought.com/blog/${post.slug}" 
               style="background: linear-gradient(45deg, #ffd700, #ffed4e); color: black; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; display: inline-block; text-transform: uppercase; letter-spacing: 0.5px;">
              Read More →
            </a>
          </div>
        </div>
      `).join('');

      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Weekly Build Update from Standard Thought</title>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f7f6f3; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
            .header { text-align: center; padding: 40px 20px 30px; border-bottom: 1px solid #e5e5e5; }
            .banner { width: 100%; max-width: 750px; height: auto; margin: 0 auto; display: block; }
            .content { padding: 40px 30px; }
            .greeting { font-size: 18px; margin-bottom: 20px; color: #0a0a0a; }
            .intro { font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 30px; }
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
              <div class="greeting">What's good, ${name}!</div>
              <div class="intro">
                Here's what dropped this week on Standard Thought—real moves, real insights, no fluff. 
                These are the reads that'll keep you ahead of the game.
              </div>
              
              <h2 style="color: #0a0a0a; font-size: 24px; margin-bottom: 24px; font-weight: 700;">
                🔥 This Week's Build Updates
              </h2>
              
              ${postsHtml}
              
              <div style="background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 235, 59, 0.05)); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 12px; padding: 20px; margin-top: 30px; text-align: center;">
                <p style="margin: 0 0 16px 0; font-size: 16px; color: #0a0a0a; font-weight: 600;">
                  Got something to share? We want to hear your wins!
                </p>
                <a href="https://standardthought.com/submit-story" 
                   style="background: linear-gradient(45deg, #ffd700, #ffed4e); color: black; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; display: inline-block; text-transform: uppercase; letter-spacing: 0.5px;">
                  Share Your Story
                </a>
              </div>
            </div>
            
            <div class="footer">
              <div class="footer-text">
                Keep building. Keep grinding. Your story matters.
              </div>
              <div class="footer-links">
                <a href="https://standardthought.com">Visit Website</a>
                <a href="https://standardthought.com/blog">Read Blog</a>
                <a href="https://instagram.com/standard_thought">Follow @standard_thought</a>
              </div>
              <div class="unsubscribe">
                You're getting this weekly update because you're part of the Standard Thought community.<br>
                <a href="${unsubscribeUrl}">Unsubscribe</a> | 
                <a href="https://standardthought.com/privacy-policy">Privacy Policy</a>
              </div>
            </div>
          </div>
        </body>
        </html>
      `;
    };

    console.log("[WEEKLY NEWSLETTER] Sending emails...");
    
    // Send emails in batches to avoid rate limits
    const batchSize = 10;
    let sentCount = 0;
    let failedCount = 0;

    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize);
      
      const emailPromises = batch.map(async (subscriber) => {
        try {
          console.log(`[WEEKLY NEWSLETTER] Preparing email for: ${subscriber.email}`)
          const emailHtml = createNewsletterHtml(subscriber.name, subscriber.unsubscribe_token);
          
          const emailResponse = await resend.emails.send({
            from: "Standard Thought Weekly <newsletter@standardthought.com>",
            to: [subscriber.email],
            subject: "🔥 Weekly Build Update - Fresh insights from Standard Thought",
            html: emailHtml,
          });

          console.log(`[WEEKLY NEWSLETTER] Email sent successfully to ${subscriber.email}:`, emailResponse);
          return { success: true, email: subscriber.email };
        } catch (error) {
          console.error(`[WEEKLY NEWSLETTER] Failed to send email to ${subscriber.email}:`, error);
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

    console.log(`[WEEKLY NEWSLETTER] Newsletter sending completed. Sent: ${sentCount}, Failed: ${failedCount}`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Weekly newsletter sent successfully to ${sentCount} subscribers`,
        sent_count: sentCount,
        failed_count: failedCount,
        total_subscribers: subscribers.length,
        posts_included: recentPosts.length
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("[WEEKLY NEWSLETTER] Error in send-weekly-newsletter function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to send weekly newsletter",
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