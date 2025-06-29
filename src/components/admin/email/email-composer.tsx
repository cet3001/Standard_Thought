
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
  );
};
