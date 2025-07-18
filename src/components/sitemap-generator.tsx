
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { RefreshCw, Download, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const SitemapGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastGenerated, setLastGenerated] = useState<string | null>(null);
  const { toast } = useToast();

  const generateSitemap = async () => {
    try {
      setIsGenerating(true);
      
      // Call the sitemap generation function
      const { data, error } = await supabase.functions.invoke('generate-sitemap');
      
      if (error) throw error;
      
      setLastGenerated(new Date().toISOString());
      toast({
        title: "Sitemap Generated",
        description: "Sitemap has been generated and optimized for urban wealth keywords",
      });
      
    } catch (error) {
      console.error('Error generating sitemap:', error);
      toast({
        title: "Error",
        description: "Failed to generate sitemap",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadSitemap = async () => {
    try {
      const supabaseUrl = 'https://zedewynjmeyhbjysnxld.supabase.co'
      const response = await fetch(`${supabaseUrl}/functions/v1/generate-sitemap`, {
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplZGV3eW5qbWV5aGJqeXNueGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNjQ3OTcsImV4cCI6MjA2NDY0MDc5N30.AHawgYUm8V74I_LoLbU2HUmOwV3A35cvL-QTJ-ZVuyA`,
        },
      });
      
      if (!response.ok) throw new Error('Failed to fetch sitemap');
      
      const xml = await response.text();
      const blob = new Blob([xml], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'sitemap.xml';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Download Complete",
        description: "Sitemap.xml has been downloaded",
      });
      
    } catch (error) {
      console.error('Error downloading sitemap:', error);
      toast({
        title: "Error",
        description: "Failed to download sitemap",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <RefreshCw className="h-5 w-5" />
          Sitemap Generator
        </CardTitle>
        <CardDescription>
          Generate and manage XML sitemaps optimized for urban wealth building keywords
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">Auto-Generated Sitemap</h3>
            <p className="text-sm text-muted-foreground">
              Includes all routes with priority for generational wealth content
            </p>
          </div>
          <Badge variant="outline">
            {lastGenerated ? 'Generated' : 'Not Generated'}
          </Badge>
        </div>
        
        {lastGenerated && (
          <p className="text-sm text-muted-foreground">
            Last generated: {new Date(lastGenerated).toLocaleString()}
          </p>
        )}
        
        <div className="flex gap-2">
          <Button 
            onClick={generateSitemap} 
            disabled={isGenerating}
            className="flex-1"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Generate Sitemap
              </>
            )}
          </Button>
          
          <Button 
            onClick={downloadSitemap} 
            variant="outline"
            disabled={isGenerating}
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="font-medium mb-2">SEO Optimization Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Prioritizes "generational wealth Black communities" content</li>
            <li>• Higher priority for credit, investing, and cash management pages</li>
            <li>• Mobile-friendly markup for faster indexing</li>
            <li>• Auto-updates when new content is published</li>
            <li>• Optimized for Google Search Console submission</li>
          </ul>
        </div>
        
        <div className="border-t pt-4">
          <Button 
            variant="link" 
            className="p-0 h-auto"
            onClick={() => window.open('https://search.google.com/search-console', '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Submit to Google Search Console
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SitemapGenerator;
