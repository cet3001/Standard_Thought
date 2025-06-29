
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface EmailComposerProps {
  subscriberCount: number;
}

export const EmailComposer = ({ subscriberCount }: EmailComposerProps) => {
  const { toast } = useToast();
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const [sending, setSending] = useState(false);

  const handleSendEmail = async () => {
    if (!subject.trim() || !content.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide both subject and content for the email.",
        variant: "destructive",
      });
      return;
    }

    if (subscriberCount === 0) {
      toast({
        title: "No Subscribers",
        description: "You don't have any subscribers to send emails to.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);
    try {
      console.log('Sending newsletter with:', { subject: subject.trim(), content: content.trim() });
      
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
        description: `Your email "${subject}" has been sent to ${subscriberCount} subscribers.`,
      });

      // Clear form after successful send
      setSubject('');
      setContent('');
    } catch (error: any) {
      console.error('Failed to send newsletter:', error);
      
      let errorMessage = "There was an error sending your email. Please try again.";
      if (error.message?.includes('auth')) {
        errorMessage = "Authentication failed. Please check your admin privileges.";
      } else if (error.message?.includes('function')) {
        errorMessage = "Email service unavailable. Please try again later.";
      }
      
      toast({
        title: "Failed to Send Email",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
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
            disabled={sending}
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
            disabled={sending}
          />
          <p className="text-sm text-muted-foreground mt-1">
            Tip: You can use basic HTML tags like &lt;strong&gt;, &lt;em&gt;, &lt;br /&gt;, and &lt;p&gt; for formatting.
          </p>
        </div>

        <Button 
          onClick={handleSendEmail}
          disabled={sending || !subject.trim() || !content.trim() || subscriberCount === 0}
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
        
        {subscriberCount === 0 && (
          <p className="text-sm text-muted-foreground text-center">
            No subscribers found. Add subscribers before sending emails.
          </p>
        )}
      </CardContent>
    </Card>
  );
};
