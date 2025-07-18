// Component: EmailComposer
// Purpose: Let admins craft and blast newsletters straight from the dashboard.
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Send, Paperclip, Users, Filter } from "lucide-react";

interface EmailComposerProps {
  subscriberCount: number;
}

const EMAIL_TEMPLATES = [
  {
    name: "Flip Your Cycle: Real Stories No One's Telling",
    subject: "Flip Your Cycle: Real Stories No One's Telling",
    content: "These aren't your typical success stories—they're raw, real accounts of builders who turned struggle into legacy. No fluff, just the grit that breaks cycles..."
  },
  {
    name: "Bot Flip Update: AI Stacking Bread for the Culture",
    subject: "Bot Flip Update: AI Stacking Bread for the Culture in 2025",
    content: "While they're gatekeeping AI access, we're showing you how to smuggle in and stack. Here's what's working right now..."
  },
  {
    name: "Legacy vs. Trauma: Which One You Building?",
    subject: "Legacy vs. Trauma: Which One You Building?",
    content: "Every day you're either building legacy or feeding trauma cycles. Here's how to recognize the difference and flip the script..."
  }
];

const SUBSCRIBER_TAGS = [
  "mindset", "wealth", "legacy", "entrepreneurship", "ai-hustles", "credit", "investing", "cash-management"
];

export const EmailComposer = ({ subscriberCount }: EmailComposerProps) => {
  const { toast } = useToast();
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [segmentedCount, setSegmentedCount] = useState(subscriberCount);

  const loadTemplate = (templateName: string) => {
    const template = EMAIL_TEMPLATES.find(t => t.name === templateName);
    if (template) {
      setSubject(template.subject);
      setContent(template.content);
      setSelectedTemplate(templateName);
    }
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  useEffect(() => {
    // Simulate segmented subscriber count based on tags
    if (selectedTags.length > 0) {
      setSegmentedCount(Math.floor(subscriberCount * (0.3 + (selectedTags.length * 0.1))));
    } else {
      setSegmentedCount(subscriberCount);
    }
  }, [selectedTags, subscriberCount]);

  const sendEmail = async () => {
    if (!subject.trim() || !content.trim()) {
      toast({
        title: "Missing info",
        description: "Subject & content required",
        variant: "destructive",
      });
      return;
    }
    if (segmentedCount === 0) {
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
        body: { 
          subject, 
          content, 
          tags: selectedTags,
          attachments: attachments.map(f => f.name)
        },
      });
      if (error) throw error;
      toast({
        title: "Sent",
        description: `Email sent to ${segmentedCount} subscribers.`,
      });
      setSubject("");
      setContent("");
      setSelectedTags([]);
      setAttachments([]);
      setSelectedTemplate("");
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
        <CardTitle className="flex items-center gap-2">
          <Send className="h-5 w-5" />
          Compose Cultural Email
        </CardTitle>
        <CardDescription>Urban narratives with cultural identity. Banner auto-included. Basic HTML allowed.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="compose" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="compose">Compose</TabsTrigger>
            <TabsTrigger value="segmentation">Segmentation</TabsTrigger>
            <TabsTrigger value="attachments">Attachments</TabsTrigger>
          </TabsList>
          
          <TabsContent value="compose" className="space-y-4">
            <div>
              <Label htmlFor="template">Cultural Templates</Label>
              <Select value={selectedTemplate} onValueChange={loadTemplate}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a cultural prompt template" />
                </SelectTrigger>
                <SelectContent>
                  {EMAIL_TEMPLATES.map((template) => (
                    <SelectItem key={template.name} value={template.name}>
                      {template.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input 
                id="subject" 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
                disabled={sending}
                placeholder="Flip Your Cycle: Real Stories No One's Telling"
              />
            </div>
            
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea 
                id="content" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                className="min-h-[240px]" 
                disabled={sending}
                placeholder="Raw, real accounts of builders who turned struggle into legacy..."
              />
            </div>
          </TabsContent>
          
          <TabsContent value="segmentation" className="space-y-4">
            <div>
              <Label className="flex items-center gap-2 mb-3">
                <Filter className="h-4 w-4" />
                Subscriber Segmentation
              </Label>
              <div className="flex flex-wrap gap-2">
                {SUBSCRIBER_TAGS.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                <Users className="h-4 w-4 inline mr-1" />
                Will reach {segmentedCount} subscribers
                {selectedTags.length > 0 && ` (filtered by: ${selectedTags.join(', ')})`}
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="attachments" className="space-y-4">
            <div>
              <Label className="flex items-center gap-2 mb-3">
                <Paperclip className="h-4 w-4" />
                Attachment Previews
              </Label>
              <div className="border-2 border-dashed border-yellow-400/30 rounded-lg p-6 text-center">
                <input
                  type="file"
                  multiple
                  onChange={(e) => setAttachments(Array.from(e.target.files || []))}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="space-y-2">
                    <Paperclip className="h-8 w-8 mx-auto text-yellow-400" />
                    <p className="text-sm">Click to upload playbooks, guides, or cultural assets</p>
                  </div>
                </label>
              </div>
              {attachments.length > 0 && (
                <div className="space-y-2">
                  <Label>Selected Files:</Label>
                  {attachments.map((file, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded">
                      <Paperclip className="h-4 w-4" />
                      <span className="text-sm">{file.name}</span>
                      <Badge variant="outline">{(file.size / 1024).toFixed(1)}KB</Badge>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
        
        <Button 
          className="w-full bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all" 
          disabled={sending || segmentedCount === 0} 
          onClick={sendEmail}
        >
          {sending ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending Cultural Narrative…
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" /> Send to {segmentedCount} Subscribers
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};
