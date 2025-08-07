import { useState, useEffect } from "react";
import { useHeaderHeight } from "@/hooks/use-header-height";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Users, Send, Upload, Eye, FileText, ArrowLeft } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { Link } from "react-router-dom";
import WelcomeEmailManager from "@/components/admin/WelcomeEmailManager";

const AdminEmail = () => {
  const { isAdmin, user } = useAuth();
  const { toast } = useToast();
  const { textureImageUrl } = useUrbanTexture();
  
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
      // Limit file size to 10MB
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
        // Convert file to base64
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

      // Reset form
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

  // Redirect if not admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-black dark:text-brand-cream mb-4">
            Access Denied
          </h1>
          <p className="text-brand-black/60 dark:text-brand-cream/60">
            You don't have permission to access this page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>

      <SEO
        title="Email Admin - Mass Email Campaign | Standardthought Admin"
        description="Admin panel for sending mass email campaigns to subscribers"
        keywords="admin, email campaign, mass email, newsletter"
        url="/admin/email"
      />

      <Navigation />

      <main className="relative z-10 pb-16" style={{ marginTop: `${useHeaderHeight()}px`, paddingTop: '3rem' }}>
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Back Button */}
          <div className="mb-6">
            <Link to="/admin">
              <Button variant="outline" className="border-[#FFD700]/30 hover:bg-[#FFD700]/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-brand-black dark:text-brand-cream">
              <span 
                className="text-[#FFD700] relative overflow-hidden"
                style={{
                  background: 'linear-gradient(45deg, #FFD700, #FFF8DC, #FFA500, #FFD700)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 3s ease-in-out infinite'
                }}
              >
                Email Campaign Manager
              </span>
            </h1>
            <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
              Send targeted email campaigns to your community of wealth builders
            </p>
          </div>

          {/* Stats Card */}
          <Card className="mb-8 backdrop-blur-sm border-2 border-[#FFD700]/30 shadow-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-brand-black dark:text-brand-cream">
                <Users className="h-5 w-5 text-[#FFD700]" />
                Subscriber Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FFD700] animate-pulse"></div>
                  <span className="text-sm text-brand-black/60 dark:text-brand-cream/60">Active Subscribers</span>
                </div>
                <div className="text-2xl font-bold text-[#FFD700]">
                  {isLoading ? "..." : userCount.toLocaleString()}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Welcome Email Template Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-brand-black dark:text-brand-cream">
                <span className="text-[#FFD700]">Welcome Email</span> Template
              </h2>
              <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
                Customize the automatic email sent to new subscribers when they join your community
              </p>
            </div>
            
            <WelcomeEmailManager />
          </div>

          {/* Mass Email Campaign Section */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-brand-black dark:text-brand-cream">
                <span className="text-[#FFD700]">Mass Email</span> Campaign
              </h2>
              <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
                Send targeted campaigns to your entire subscriber base
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Email Composer */}
            <Card className="backdrop-blur-sm border-2 border-[#FFD700]/30 shadow-2xl">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-brand-black dark:text-brand-cream">
                  <Mail className="h-5 w-5 text-[#FFD700]" />
                  Compose Email
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-brand-black dark:text-brand-cream font-kalam">
                    Subject Line
                  </Label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Your compelling subject line..."
                    className="bg-white/50 dark:bg-brand-black/50 border-[#FFD700]/30 focus:border-[#FFD700] transition-colors"
                  />
                </div>

                {/* Body */}
                <div className="space-y-2">
                  <Label htmlFor="body" className="text-brand-black dark:text-brand-cream font-kalam">
                    Email Body
                  </Label>
                  <Textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Write your message to the community..."
                    rows={10}
                    className="bg-white/50 dark:bg-brand-black/50 border-[#FFD700]/30 focus:border-[#FFD700] transition-colors resize-none"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label className="text-brand-black dark:text-brand-cream font-kalam">
                    Attachment (Optional)
                  </Label>
                  <div className="flex items-center gap-4">
                    <Input
                      type="file"
                      onChange={handleFileUpload}
                      className="bg-white/50 dark:bg-brand-black/50 border-[#FFD700]/30"
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                    />
                    {selectedFile && (
                      <div className="flex items-center gap-2 text-sm text-brand-black/60 dark:text-brand-cream/60">
                        <FileText className="h-4 w-4" />
                        {selectedFile.name}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-brand-black/50 dark:text-brand-cream/50">
                    Max file size: 10MB. Supported: PDF, DOC, TXT, JPG, PNG
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={() => setShowPreview(!showPreview)}
                    variant="outline"
                    className="flex-1 border-[#FFD700]/50 hover:bg-[#FFD700]/10"
                    disabled={!subject || !body}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    {showPreview ? "Hide Preview" : "Preview"}
                  </Button>
                  <Button
                    onClick={handleSendEmail}
                    disabled={isSending || !subject || !body}
                    className="flex-1 bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSending ? "Sending..." : `Send to ${userCount} Users`}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Email Preview */}
            <Card className="backdrop-blur-sm border-2 border-[#FFD700]/30 shadow-2xl">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-brand-black dark:text-brand-cream">
                  <Eye className="h-5 w-5 text-[#FFD700]" />
                  Email Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                {showPreview && subject && body ? (
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border shadow-inner relative">
                    {/* Subtle watermark logo */}
                    <div className="absolute top-4 right-4 opacity-10">
                      <img 
                        src="/lovable-uploads/ab84a6d6-c2ac-4910-be5f-7bb666463fb8.png" 
                        alt="ST Logo" 
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    
                    {/* Email Header */}
                    <div className="border-b pb-4 mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] flex items-center justify-center">
                          <span className="text-black font-bold text-lg">ST</span>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-gray-100">Standardthought</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">team@standardthought.com</div>
                        </div>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{subject}</h2>
                    </div>

                    {/* Email Body */}
                    <div className="prose prose-sm max-w-none text-gray-800 dark:text-gray-200">
                      <div className="whitespace-pre-wrap font-kalam text-base leading-relaxed">
                        {body}
                      </div>
                    </div>

                    {/* Attachment Indicator */}
                    {selectedFile && (
                      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                        <div className="flex items-center gap-2 text-sm">
                          <Upload className="h-4 w-4 text-[#FFD700]" />
                          <span className="font-medium">Attachment:</span>
                          <span className="text-gray-600 dark:text-gray-400">{selectedFile.name}</span>
                        </div>
                      </div>
                    )}

                    {/* Email Footer */}
                    <div className="mt-8 pt-6 border-t text-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        <p className="mb-2">Keep building, keep growing.</p>
                        <p className="font-bold text-[#FFD700]">— The Standardthought Team</p>
                        
                        {/* Footer ST Logo */}
                        <div className="my-4">
                          <img 
                            src="/lovable-uploads/ab84a6d6-c2ac-4910-be5f-7bb666463fb8.png" 
                            alt="Standardthought Logo" 
                            className="w-8 h-8 mx-auto opacity-60"
                          />
                        </div>
                        
                        <p className="mt-4 text-xs">
                          You're receiving this because you're part of the Standardthought community.
                        </p>
                        <p className="text-xs text-[#FFD700] font-medium">
                          Building generational wealth one step at a time.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-brand-black/50 dark:text-brand-cream/50">
                    <Mail className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Fill in the subject and body to see preview</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminEmail;