// Component: EmailComposer
// Purpose: Let admins craft and blast newsletters straight from the dashboard.
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Send } from "lucide-react";

interface EmailComposerProps {
  subscriberCount: number;
}

export const EmailComposer = ({ subscriberCount }: EmailComposerProps) => {
  const { toast } = useToast();
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = async () => {
    if (!subject.trim() || !content.trim()) {
      toast({
        title: "Missing info",
        description: "Subject & content required",
        variant: "destructive",
      });
      return;
    }
    if (subscriberCount === 0) {
      toast({
        title: "No subscribers",
        description: "Add subscribers before sending.",
        variant: "destructive",
      });
      return;
    }
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-newsletter", {
        body: { subject, content },
      });
      if (error) throw error;
      toast({
        title: "Sent",
        description: `Email sent to ${subscriberCount} subscribers.`,
      });
      setSubject("");
      setContent("");
    } catch (err: any) {
      toast({
        title: "Send failed",
        description: err.message,
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
        <CardDescription>Your banner is auto-included. Basic HTML allowed.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} disabled={sending} />
        </div>
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} className="min-h-[240px]" disabled={sending} />
        </div>
        <Button className="w-full" disabled={sending || subscriberCount === 0} onClick={sendEmail}>
          {sending ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" /> Send to {subscriberCount} Subscribers
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};
