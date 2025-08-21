import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Users, Send, Upload, Eye, FileText, UserCheck } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import WelcomeEmailManager from "@/components/admin/WelcomeEmailManager";
import { SubscriberManagement } from "@/components/admin/SubscriberManagement";
import { AdminLayout } from "@/components/admin/AdminLayout";

const AdminEmail = () => {
  const { isAdmin, user } = useAuth();
  const { toast } = useToast();
  
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    if (isAdmin) {
      fetchUserCount();
    }
  }, [isAdmin]);

  const fetchUserCount = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.rpc('active_subscriber_count');
      
      if (error) throw error;
      setUserCount(data || 0);
    } catch (error) {
      console.error('Error fetching user count:', error);
      toast({
        title: "Error",
        description: "Failed to fetch user count",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select a file smaller than 10MB",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSendEmail = async () => {
    if (!subject.trim() || !body.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in both subject and body",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSending(true);
      
      let attachmentBase64 = null;
      let attachmentName = null;
      
      if (selectedFile) {
        const reader = new FileReader();
        attachmentBase64 = await new Promise((resolve) => {
          reader.onload = () => resolve(reader.result?.toString().split(',')[1]);
          reader.readAsDataURL(selectedFile);
        });
        attachmentName = selectedFile.name;
      }

      const { data, error } = await supabase.functions.invoke('send-mass-email', {
        body: {
          subject,
          body,
          attachment: attachmentBase64 ? {
            filename: attachmentName,
            content: attachmentBase64,
            type: selectedFile?.type || 'application/octet-stream'
          } : null
        },
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: `Email sent to ${userCount} subscribers`,
      });

      setSubject("");
      setBody("");
      setSelectedFile(null);
      setShowPreview(false);
      
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to send email",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  if (!isAdmin) {
    return (
      <AdminLayout title="Access Denied">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p>You don't have permission to access this page.</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Email Campaign Manager" description="Send targeted email campaigns to your community of wealth builders">
      <Tabs defaultValue="campaigns" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-muted border border-border">
          <TabsTrigger value="campaigns" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Mail className="mr-2 h-4 w-4" />
            Campaigns
          </TabsTrigger>
          <TabsTrigger value="subscribers" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <UserCheck className="mr-2 h-4 w-4" />
            Subscribers
          </TabsTrigger>
          <TabsTrigger value="templates" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <FileText className="mr-2 h-4 w-4" />
            Templates
          </TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-6">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Subscriber Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Active Subscribers:</span>
                <div className="text-2xl font-bold text-primary">
                  {isLoading ? "..." : userCount.toLocaleString()}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Mass Email Campaign</h2>
            <p className="text-muted-foreground mb-8">Send targeted campaigns to your entire subscriber base</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Compose Email
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject Line</Label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Your compelling subject line..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="body">Email Body</Label>
                  <Textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Write your message to the community..."
                    rows={10}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Attachment (Optional)</Label>
                  <Input
                    type="file"
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                  />
                  {selectedFile && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      {selectedFile.name}
                    </div>
                  )}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={() => setShowPreview(!showPreview)}
                    variant="outline"
                    className="flex-1"
                    disabled={!subject || !body}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    {showPreview ? "Hide Preview" : "Preview"}
                  </Button>
                  <Button
                    onClick={handleSendEmail}
                    disabled={isSending || !subject || !body}
                    className="flex-1"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSending ? "Sending..." : `Send to ${userCount} Users`}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Email Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                {showPreview && subject && body ? (
                  <div className="bg-background rounded-lg p-6 border">
                    <div className="border-b pb-4 mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground font-bold">ST</span>
                        </div>
                        <div>
                          <div className="font-bold">Standardthought</div>
                          <div className="text-sm text-muted-foreground">team@standardthought.com</div>
                        </div>
                      </div>
                      <h2 className="text-xl font-bold">{subject}</h2>
                    </div>
                    <div className="whitespace-pre-wrap">{body}</div>
                    {selectedFile && (
                      <div className="mt-6 p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-2 text-sm">
                          <Upload className="h-4 w-4" />
                          <span>Attachment: {selectedFile.name}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Mail className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Fill in the subject and body to see a preview</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="subscribers" className="space-y-6">
          <SubscriberManagement />
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Welcome Email Template</h2>
            <p className="text-muted-foreground mb-8">Customize the automatic email sent to new subscribers</p>
            <WelcomeEmailManager />
          </div>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
};

export default AdminEmail;