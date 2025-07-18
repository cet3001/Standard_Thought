import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { Download, RefreshCw, ExternalLink, CheckCircle, AlertCircle, Copy, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SitemapData {
  id: string;
  page_type: string;
  title: string;
  description: string; // Contains the XML content
  updated_at: string;
  is_active: boolean;
}

export const SitemapManagement: React.FC = () => {
  const [sitemap, setSitemap] = useState<SitemapData | null>(null);
  const [sitemapIndex, setSitemapIndex] = useState<SitemapData | null>(null);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchSitemaps();
  }, []);

  const fetchSitemaps = async () => {
    try {
      setLoading(true);
      
      // Fetch sitemap XML
      const { data: sitemapData, error: sitemapError } = await supabase
        .from('seo_settings')
        .select('*')
        .eq('page_type', 'sitemap_xml')
        .maybeSingle();

      if (sitemapError) throw sitemapError;

      // Fetch sitemap index
      const { data: indexData, error: indexError } = await supabase
        .from('seo_settings')
        .select('*')
        .eq('page_type', 'sitemap_index')
        .maybeSingle();

      if (indexError) throw indexError;

      setSitemap(sitemapData);
      setSitemapIndex(indexData);
    } catch (error) {
      console.error('Error fetching sitemaps:', error);
      toast({
        title: "Error",
        description: "Failed to fetch sitemap data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const generateSitemap = async () => {
    try {
      setGenerating(true);
      
      const { data, error } = await supabase.functions.invoke('generate-sitemap', {
        body: { regenerate: true }
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Sitemap generated successfully! Auto-optimized for urban wealth keywords.",
      });

      // Refresh the sitemaps
      await fetchSitemaps();
    } catch (error) {
      console.error('Error generating sitemap:', error);
      toast({
        title: "Error",
        description: "Failed to generate sitemap",
        variant: "destructive",
      });
    } finally {
      setGenerating(false);
    }
  };

  const downloadSitemap = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "Downloaded",
      description: `${filename} downloaded successfully`,
    });
  };

  const copyToClipboard = async (content: string, type: string) => {
    try {
      await navigator.clipboard.writeText(content);
      toast({
        title: "Copied",
        description: `${type} copied to clipboard`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const formatXML = (xml: string): string => {
    // Simple XML formatting for better readability
    return xml.replace(/></g, '>\n<');
  };

  const countUrls = (xml: string): number => {
    const matches = xml.match(/<url>/g);
    return matches ? matches.length : 0;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <RefreshCw className="animate-spin h-8 w-8" />
        <span className="ml-2">Loading sitemap data...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Sitemap Management</h2>
          <p className="text-muted-foreground">
            Auto-generated sitemaps optimized for "generational wealth Black communities" and related keywords
          </p>
        </div>
        <Button 
          onClick={generateSitemap} 
          disabled={generating}
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600"
        >
          {generating ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <RefreshCw className="mr-2 h-4 w-4" />
              Regenerate Sitemaps
            </>
          )}
        </Button>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Main Sitemap
            </CardTitle>
          </CardHeader>
          <CardContent>
            {sitemap ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant={sitemap.is_active ? "default" : "secondary"}>
                    {sitemap.is_active ? "Active" : "Inactive"}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {countUrls(sitemap.description)} URLs
                  </span>
                </div>
                <p className="text-sm">
                  Last updated: {new Date(sitemap.updated_at).toLocaleString()}
                </p>
              </div>
            ) : (
              <p className="text-muted-foreground">No sitemap generated yet</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Sitemap Index
            </CardTitle>
          </CardHeader>
          <CardContent>
            {sitemapIndex ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant={sitemapIndex.is_active ? "default" : "secondary"}>
                    {sitemapIndex.is_active ? "Active" : "Inactive"}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Index file
                  </span>
                </div>
                <p className="text-sm">
                  Last updated: {new Date(sitemapIndex.updated_at).toLocaleString()}
                </p>
              </div>
            ) : (
              <p className="text-muted-foreground">No sitemap index generated yet</p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* SEO Optimization Info */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertDescription>
          <strong>SEO Optimization Active:</strong> Sitemaps are auto-optimized for keywords like 
          "generational wealth Black communities", "urban wealth building", and "first-gen entrepreneurs". 
          Core wealth pillars (credit, investing, cash management) have priority 0.95 for maximum visibility.
        </AlertDescription>
      </Alert>

      {/* Instructions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <ExternalLink className="mr-2 h-5 w-5" />
            Google Search Console Setup
          </CardTitle>
          <CardDescription>
            Follow these steps to submit your sitemap to Google Search Console
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-medium">Download sitemap files</p>
                <p className="text-sm text-muted-foreground">Download both sitemap.xml and sitemap_index.xml using the buttons below</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-medium">Upload to website root</p>
                <p className="text-sm text-muted-foreground">Upload sitemap.xml to your website's root directory (yoursite.com/sitemap.xml)</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-medium">Submit to Google Search Console</p>
                <p className="text-sm text-muted-foreground">
                  Go to{' '}
                  <a 
                    href="https://search.google.com/search-console" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Google Search Console
                  </a>
                  {' '}→ Sitemaps → Add new sitemap → Enter "sitemap.xml"
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <p className="font-medium">Monitor indexing</p>
                <p className="text-sm text-muted-foreground">Check Google Search Console regularly to monitor how your wealth-building content is being indexed</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sitemap Content Tabs */}
      {(sitemap || sitemapIndex) && (
        <Tabs defaultValue="sitemap" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sitemap">Main Sitemap</TabsTrigger>
            <TabsTrigger value="index">Sitemap Index</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sitemap" className="space-y-4">
            {sitemap && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>sitemap.xml</CardTitle>
                    <CardDescription>
                      Main sitemap with {countUrls(sitemap.description)} URLs, prioritized for urban wealth keywords
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(sitemap.description, 'Sitemap XML')}
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => downloadSitemap(sitemap.description, 'sitemap.xml')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={formatXML(sitemap.description)}
                    readOnly
                    className="font-mono text-xs h-96 resize-none"
                    placeholder="No sitemap content available"
                  />
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="index" className="space-y-4">
            {sitemapIndex && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>sitemap_index.xml</CardTitle>
                    <CardDescription>
                      Sitemap index file for better organization and crawling
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(sitemapIndex.description, 'Sitemap Index XML')}
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => downloadSitemap(sitemapIndex.description, 'sitemap_index.xml')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={formatXML(sitemapIndex.description)}
                    readOnly
                    className="font-mono text-xs h-48 resize-none"
                    placeholder="No sitemap index content available"
                  />
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      )}

      {/* Auto-update Info */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          <strong>Auto-Update:</strong> Sitemaps regenerate automatically when new blog posts or pages are published. 
          The system prioritizes content related to "generational wealth Black communities" and "urban wealth building" 
          for better search visibility.
        </AlertDescription>
      </Alert>
    </div>
  );
};