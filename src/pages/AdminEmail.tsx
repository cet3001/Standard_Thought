
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Users, Send, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

const AdminEmail = () => {
  const { isAdmin } = useAuth();
  const { toast } = useToast();
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [sending, setSending] = useState(false);

  // Fetch subscriber count
  const { data: subscriberCount } = useQuery({
    queryKey: ['subscriber-count'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('Subscribers')
        .select('*', { count: 'exact', head: true })
        .eq('unsubscribed', false);
      
      if (error) throw error;
      return count || 0;
    },
    enabled: isAdmin,
  });

  const handleSendEmail = async () => {
    if (!subject.trim() || !content.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide both subject and content for the email.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);
    try {
      console.log('Sending email to subscribers...');
      const { data, error } = await supabase.functions.invoke('send-newsletter', {
        body: {
          subject: subject.trim(),
          content: content.trim(),
        }
      });

      if (error) {
        console.error('Newsletter sending error:', error);
        throw error;
      }

      console.log('Newsletter sent successfully:', data);
      toast({
        title: "Email Sent Successfully!",
        description: `Your email has been sent to ${subscriberCount} subscribers.`,
      });

      // Clear form
      setSubject('');
      setContent('');
    } catch (error) {
      console.error('Failed to send newsletter:', error);
      toast({
        title: "Failed to Send Email",
        description: "There was an error sending your email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle className="text-center text-destructive">Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              You need admin privileges to access this page.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
              <Mail className="w-8 h-8 text-primary" />
              Newsletter Composer
            </h1>
            <p className="text-muted-foreground">
              Create and send emails to your newsletter subscribers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Subscribers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">
                  {subscriberCount || 0}
                </div>
                <p className="text-sm text-muted-foreground">
                  Active subscribers who will receive this email
                </p>
              </CardContent>
            </Card>

            {/* Email Composer */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Compose Email</CardTitle>
                <CardDescription>
                  Create your newsletter content. Your professional banner will be automatically included.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="subject">Subject Line</Label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter email subject..."
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="content">Email Content</Label>
                  <Textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your email content here. You can use plain text or basic HTML..."
                    className="mt-1 min-h-[300px]"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Tip: You can use basic HTML tags like &lt;strong&gt;, &lt;em&gt;, &lt;br /&gt;, and &lt;p&gt; for formatting.
                  </p>
                </div>

                <Button 
                  onClick={handleSendEmail}
                  disabled={sending || !subject.trim() || !content.trim()}
                  className="w-full"
                  size="lg"
                >
                  {sending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending to {subscriberCount} subscribers...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send to {subscriberCount} Subscribers
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Preview Section */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Email Preview</CardTitle>
              <CardDescription>
                This is how your email will look to subscribers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-6 rounded-lg">
                <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
                  {/* Header with new banner */}
                  <div className="text-center mb-6 pb-6 border-b">
                    <img 
                      src="/lovable-uploads/a8faab87-8319-4fa0-ae53-35597c6f8fc5.png" 
                      alt="Standard Thought - Real Wisdom. Real Results." 
                      className="w-full max-w-md mx-auto h-auto"
                    />
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <div className="text-lg mb-4 text-gray-800">Hey Subscriber,</div>
                    {subject && (
                      <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        {subject}
                      </h2>
                    )}
                    <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {content || "Your email content will appear here..."}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="border-t pt-6 text-center text-sm text-gray-500">
                    <p className="mb-2">
                      Keep building. Keep grinding. Your story matters.
                    </p>
                    <p className="mb-2">
                      <a href="#" className="text-brand-blue hover:underline mx-2">
                        Visit Website
                      </a>
                      <a href="#" className="text-brand-blue hover:underline mx-2">
                        Read Blog
                      </a>
                    </p>
                    <p className="text-xs">
                      You're receiving this email because you subscribed to our newsletter.
                      <br />
                      <a href="#" className="text-brand-blue hover:underline">
                        Unsubscribe
                      </a> | 
                      <a href="https://standardthought.com/privacy-policy" className="text-brand-blue hover:underline">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminEmail;
