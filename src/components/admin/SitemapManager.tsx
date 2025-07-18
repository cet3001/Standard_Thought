import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Download, Search, ExternalLink, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const SitemapManager = () => {
  const [sitemapContent, setSitemapContent] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [lastGenerated, setLastGenerated] = useState<string>('');
  const { toast } = useToast();

  const generateSitemap = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-sitemap');
      
      if (error) throw error;
      
      setSitemapContent(data);
      setLastGenerated(new Date().toLocaleString());
      
      toast({
        title: "Success",
        description: "Sitemap generated successfully with urban wealth building optimization"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate sitemap",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const downloadSitemap = () => {
    if (!sitemapContent) return;
    
    const blob = new Blob([sitemapContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded",
      description: "Sitemap.xml downloaded successfully"
    });
  };

  useEffect(() => {
    generateSitemap();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Search className="h-6 w-6" />
            Sitemap Management
          </h2>
          <p className="text-muted-foreground">
            Auto-generate and manage sitemap.xml for better search engine indexing
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={generateSitemap} disabled={loading} variant="outline">
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Regenerate
          </Button>
          <Button onClick={downloadSitemap} disabled={!sitemapContent}>
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sitemap Preview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Generated Sitemap</CardTitle>
            <CardDescription>
              {lastGenerated && `Last generated: ${lastGenerated}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg max-h-96 overflow-y-auto">
              <pre className="text-sm text-muted-foreground whitespace-pre-wrap">
                {sitemapContent || 'No sitemap generated yet...'}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>Deployment Instructions</CardTitle>
            <CardDescription>
              Follow these steps to deploy your sitemap
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">1. Upload to Root</h4>
              <p className="text-sm text-muted-foreground">
                Upload the downloaded sitemap.xml to your website's root directory (same level as index.html)
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">2. Verify Access</h4>
              <p className="text-sm text-muted-foreground">
                Test that your sitemap is accessible at:
              </p>
              <Badge variant="outline" className="font-mono">
                https://www.standardthought.com/sitemap.xml
              </Badge>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">3. Submit to Google</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Submit your sitemap to Google Search Console:
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => window.open('https://search.google.com/search-console', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Open Google Search Console
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* SEO Features */}
        <Card>
          <CardHeader>
            <CardTitle>SEO Optimization Features</CardTitle>
            <CardDescription>
              Built-in optimizations for urban wealth building content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">✓</Badge>
              <span className="text-sm">Priority weighting for core pillars</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">✓</Badge>
              <span className="text-sm">Mobile-friendly markup</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">✓</Badge>
              <span className="text-sm">Auto-updates on new posts</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">✓</Badge>
              <span className="text-sm">Category-based priorities</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">✓</Badge>
              <span className="text-sm">Optimized for wealth building keywords</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};