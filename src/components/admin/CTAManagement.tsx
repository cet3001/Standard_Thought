import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Link2, Unlink, ExternalLink, RefreshCw } from 'lucide-react';
import { useCTADetection } from '@/hooks/use-cta-detection';
import { useGuides } from '@/hooks/use-guides';
import { useToast } from '@/hooks/use-toast';

export const CTAManagement = () => {
  const { detectedCTAs, unlinkedCTAs, linkedCTAs, loading, linkCTAToGuide, unlinkCTA } = useCTADetection();
  const { guides } = useGuides();
  const { toast } = useToast();
  const [selectedCTA, setSelectedCTA] = useState<string>('');
  const [selectedGuide, setSelectedGuide] = useState<string>('');

  const handleLinkCTA = () => {
    if (!selectedCTA || !selectedGuide) {
      toast({
        title: "Selection Required",
        description: "Please select both a CTA and a guide to link",
        variant: "destructive",
      });
      return;
    }

    linkCTAToGuide(selectedCTA, selectedGuide);
    setSelectedCTA('');
    setSelectedGuide('');
    
    toast({
      title: "CTA Linked",
      description: "CTA has been successfully linked to the guide",
    });
  };

  const handleUnlinkCTA = (ctaId: string) => {
    unlinkCTA(ctaId);
    toast({
      title: "CTA Unlinked",
      description: "CTA has been unlinked from its guide",
    });
  };

  const getGuideTitle = (guideId: string) => {
    const guide = guides?.find(g => g.id === guideId);
    return guide?.title || 'Unknown Guide';
  };

  const getCTATypeColor = (type: string) => {
    switch (type) {
      case 'download': return 'bg-blue-600';
      case 'join': return 'bg-green-600';
      case 'get': return 'bg-purple-600';
      case 'subscribe': return 'bg-orange-600';
      case 'access': return 'bg-teal-600';
      default: return 'bg-gray-600';
    }
  };

  if (loading) {
    return (
      <Card className="bg-card border-border">
        <CardContent className="text-center py-8">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-foreground">Scanning CTAs across the site...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Unlinked CTAs Warning */}
      {unlinkedCTAs.length > 0 && (
        <Card className="bg-destructive/10 border-destructive/50 hover:shadow-lg transition-shadow">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <CardTitle className="text-destructive text-lg">
                {unlinkedCTAs.length} Unlinked CTA{unlinkedCTAs.length !== 1 ? 's' : ''} Found
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-destructive/80 mb-4 leading-relaxed">
              The following CTAs on your site are not connected to any guides. Link them to ensure proper functionality.
            </p>
            <div className="grid gap-3">
              {unlinkedCTAs.map((cta) => (
                <div key={cta.id} className="flex items-center justify-between p-4 bg-destructive/5 rounded-lg border border-destructive/20 hover:bg-destructive/10 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className={`${getCTATypeColor(cta.type)} text-white font-medium`}>
                        {cta.type.toUpperCase()}
                      </Badge>
                      <span className="text-foreground font-medium">{cta.text}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{cta.location}</span>
                      <span>•</span>
                      <span className="font-mono bg-muted px-2 py-1 rounded">{cta.componentName}</span>
                      {cta.pageSlug !== 'global' && (
                        <>
                          <span>•</span>
                          <a 
                            href={cta.pageSlug} 
                            className="hover:text-primary underline flex items-center gap-1 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {cta.pageSlug}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Link CTAs to Guides */}
      <Card className="bg-card border-border hover:shadow-lg transition-shadow">
        <CardHeader className="pb-4">
          <CardTitle className="text-foreground text-xl">Link CTAs to Guides</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Select Unlinked CTA</label>
              <Select value={selectedCTA} onValueChange={setSelectedCTA}>
                <SelectTrigger className="bg-background border-border hover:bg-accent">
                  <SelectValue placeholder="Choose CTA to link" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  {unlinkedCTAs.map((cta) => (
                    <SelectItem key={cta.id} value={cta.id} className="text-foreground">
                      <div className="flex items-center gap-2">
                        <Badge className={`${getCTATypeColor(cta.type)} text-white text-xs`}>
                          {cta.type}
                        </Badge>
                        <span className="truncate">{cta.text}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Select Guide</label>
              <Select value={selectedGuide} onValueChange={setSelectedGuide}>
                <SelectTrigger className="bg-background border-border hover:bg-accent">
                  <SelectValue placeholder="Choose guide to link" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  {guides?.filter(guide => guide.is_active).map((guide) => (
                    <SelectItem key={guide.id} value={guide.id} className="text-foreground">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-primary border-primary">
                          {guide.price > 0 ? `$${guide.price}` : "Free"}
                        </Badge>
                        <span className="truncate">{guide.title}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end">
              <Button 
                onClick={handleLinkCTA}
                disabled={!selectedCTA || !selectedGuide}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link2 className="h-4 w-4 mr-2" />
                Link CTA
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Linked CTAs Overview */}
      <Card className="bg-card border-border hover:shadow-lg transition-shadow">
        <CardHeader className="pb-4">
          <CardTitle className="text-foreground text-xl">
            Linked CTAs ({linkedCTAs.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {linkedCTAs.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                No CTAs are currently linked to guides. Link CTAs above to ensure proper functionality.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {linkedCTAs.map((cta) => (
                <div key={cta.id} className="flex items-center justify-between p-4 bg-accent/50 rounded-lg border border-border hover:bg-accent/70 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className={`${getCTATypeColor(cta.type)} text-white font-medium`}>
                        {cta.type.toUpperCase()}
                      </Badge>
                      <span className="text-foreground font-medium text-lg">{cta.text}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground font-medium">Location: </span>
                        <span className="text-foreground">{cta.location}</span>
                        {cta.pageSlug !== 'global' && (
                          <a 
                            href={cta.pageSlug} 
                            className="ml-2 text-primary hover:text-primary/80 underline inline-flex items-center gap-1 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Page
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                      <div>
                        <span className="text-muted-foreground font-medium">Linked Guide: </span>
                        <span className="text-primary font-medium">{getGuideTitle(cta.linkedGuideId!)}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleUnlinkCTA(cta.id)}
                    className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive"
                    title="Unlink CTA"
                  >
                    <Unlink className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* CTA Detection Stats */}
      <Card className="bg-card border-border hover:shadow-lg transition-shadow">
        <CardHeader className="pb-4">
          <CardTitle className="text-foreground text-xl">CTA Detection Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/50 rounded-lg border border-border">
              <div className="text-2xl font-bold text-primary">{detectedCTAs.length}</div>
              <div className="text-sm text-muted-foreground font-medium">Total CTAs</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg border border-border">
              <div className="text-2xl font-bold text-green-600">{linkedCTAs.length}</div>
              <div className="text-sm text-muted-foreground font-medium">Linked CTAs</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg border border-border">
              <div className="text-2xl font-bold text-destructive">{unlinkedCTAs.length}</div>
              <div className="text-sm text-muted-foreground font-medium">Unlinked CTAs</div>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg border border-border">
              <div className="text-2xl font-bold text-foreground">{guides?.length || 0}</div>
              <div className="text-sm text-muted-foreground font-medium">Total Guides</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};