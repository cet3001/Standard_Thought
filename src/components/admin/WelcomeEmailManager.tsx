import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Save, Eye, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface WelcomeEmailTemplate {
  id?: string;
  subject: string;
  body: string;
  created_at?: string;
  updated_at?: string;
}

const WelcomeEmailManager = () => {
  const { toast } = useToast();
  const [template, setTemplate] = useState<WelcomeEmailTemplate>({
    subject: "Welcome to Standardthought + Your Urban Wealth Building Blueprint",
    body: `Welcome to the community, {{name}}!

We're excited to have you join our movement of wealth builders who understand that financial success isn't just about the money—it's about the legacy, the community, and the real talk that comes with it.

As promised, we've attached your FREE Urban Wealth Building Blueprint—a no-nonsense guide that breaks down the real strategies for building wealth from the ground up.

Here's what you can expect from us:
• Weekly insights that cut through the financial noise
• Real stories from people building generational wealth
• Strategies that work in the real world, not just on paper
• A community that gets it

Keep building, keep growing.

— The Standardthought Team

P.S. We keep it 100 here. No fluff, no get-rich-quick schemes—just the real blueprint for building lasting wealth.`
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    fetchTemplate();
  }, []);

  const fetchTemplate = async () => {
    try {
      setIsLoading(true);
      
      // Try to fetch existing template from database
      const { data, error } = await supabase
        .from('welcome_email_templates')
        .select('*')
        .eq('is_active', true)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 is "not found"
        throw error;
      }

      if (data) {
        setTemplate(data);
      }
    } catch (error) {
      console.error('Error fetching template:', error);
      // Keep default template if fetch fails
    } finally {
      setIsLoading(false);
    }
  };

  const saveTemplate = async () => {
    try {
      setIsSaving(true);

      const { error } = await supabase
        .from('welcome_email_templates')
        .upsert({
          subject: template.subject,
          body: template.body,
          is_active: true,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'is_active'
        });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Welcome email template saved successfully",
      });

    } catch (error: any) {
      console.error('Error saving template:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to save template",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleSubjectChange = (value: string) => {
    setTemplate(prev => ({ ...prev, subject: value }));
  };

  const handleBodyChange = (value: string) => {
    setTemplate(prev => ({ ...prev, body: value }));
  };

  const previewBody = template.body.replace(/\{\{name\}\}/g, '[Subscriber Name]');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Template Editor */}
      <Card className="backdrop-blur-sm border-2 border-primary/30 shadow-2xl">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Mail className="h-5 w-5 text-primary" />
            Welcome Email Template
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Customize the automatic email sent to new subscribers
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="welcome-subject" className="text-foreground font-medium">
              Subject Line
            </Label>
            <Input
              id="welcome-subject"
              value={template.subject}
              onChange={(e) => handleSubjectChange(e.target.value)}
              placeholder="Welcome email subject..."
              className="bg-background/50 border-border/50 focus:border-primary transition-colors"
            />
          </div>

          {/* Body */}
          <div className="space-y-2">
            <Label htmlFor="welcome-body" className="text-foreground font-medium">
              Email Body
            </Label>
            <Textarea
              id="welcome-body"
              value={template.body}
              onChange={(e) => handleBodyChange(e.target.value)}
              placeholder="Write your welcome message..."
              rows={12}
              className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none font-mono text-sm"
            />
            <p className="text-xs text-muted-foreground">
              Use <code className="bg-muted px-1 rounded">{"{{name}}"}</code> to insert the subscriber's name
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              onClick={() => setShowPreview(!showPreview)}
              variant="outline"
              className="flex-1"
              disabled={!template.subject || !template.body}
            >
              <Eye className="mr-2 h-4 w-4" />
              {showPreview ? "Hide Preview" : "Preview"}
            </Button>
            <Button
              onClick={saveTemplate}
              disabled={isSaving || !template.subject || !template.body}
              className="flex-1"
            >
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? "Saving..." : "Save Template"}
            </Button>
          </div>

          {isLoading && (
            <div className="flex items-center justify-center py-4">
              <RefreshCw className="h-4 w-4 animate-spin mr-2" />
              <span className="text-sm text-muted-foreground">Loading template...</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Preview */}
      <Card className="backdrop-blur-sm border-2 border-primary/30 shadow-2xl">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Eye className="h-5 w-5 text-primary" />
            Email Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          {showPreview && template.subject && template.body ? (
            <div className="bg-card rounded-lg p-6 border shadow-inner">
              
              {/* Email Header */}
              <div className="border-b border-border pb-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">ST</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Standardthought</div>
                    <div className="text-sm text-muted-foreground">team@standardthought.com</div>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-foreground">{template.subject}</h2>
              </div>

              {/* Email Body */}
              <div className="prose prose-sm max-w-none text-foreground">
                <div className="whitespace-pre-wrap text-base leading-relaxed">
                  {previewBody}
                </div>
              </div>

              {/* Attachment Note */}
              <div className="mt-6 p-4 bg-muted rounded-lg border border-border">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-medium">Includes:</span>
                  <span className="text-muted-foreground">Urban Wealth Building Blueprint (PDF)</span>
                </div>
              </div>

              {/* Email Footer */}
              <div className="mt-8 pt-6 border-t border-border text-center">
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">Keep building, keep growing.</p>
                  <p className="font-bold text-primary">— The Standardthought Team</p>
                  
                  <div className="my-4">
                    <div className="w-8 h-8 mx-auto rounded bg-primary/20"></div>
                  </div>
                  
                  <p className="mt-4 text-xs">
                    You're receiving this because you subscribed to Standardthought.
                  </p>
                  <p className="text-xs text-primary font-medium">
                    Building generational wealth one step at a time.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <Mail className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Fill in the template to see preview</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeEmailManager;
