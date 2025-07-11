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
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="text-center py-8">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-brand-gold" />
          <p className="text-brand-cream">Scanning CTAs across the site...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Unlinked CTAs Warning */}
      {unlinkedCTAs.length > 0 && (
        <Card className="bg-red-900/20 border-red-600/50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              <CardTitle className="text-red-400">
                {unlinkedCTAs.length} Unlinked CTA{unlinkedCTAs.length !== 1 ? 's' : ''} Found
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-red-300 mb-4">
              The following CTAs on your site are not connected to any guides. Link them to ensure proper functionality.
            </p>
            <div className="grid gap-3">
              {unlinkedCTAs.map((cta) => (
                <div key={cta.id} className="flex items-center justify-between p-3 bg-red-900/30 rounded-lg border border-red-600/30">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className={`${getCTATypeColor(cta.type)} text-white`}>
                        {cta.type.toUpperCase()}
                      </Badge>
                      <span className="text-red-200 font-medium">{cta.text}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-red-300">
                      <span>{cta.location}</span>
                      <span>•</span>
                      <span className="font-mono">{cta.componentName}</span>
                      {cta.pageSlug !== 'global' && (
                        <>
                          <span>•</span>
                          <a 
                            href={cta.pageSlug} 
                            className="hover:text-red-100 underline flex items-center gap-1"
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
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-brand-cream">Link CTAs to Guides</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-brand-cream mb-2 block">Select Unlinked CTA</label>
              <Select value={selectedCTA} onValueChange={setSelectedCTA}>
                <SelectTrigger className="bg-slate-700 border-slate-600">
                  <SelectValue placeholder="Choose CTA to link" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  {unlinkedCTAs.map((cta) => (
                    <SelectItem key={cta.id} value={cta.id} className="text-brand-cream">
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
              <label className="text-sm text-brand-cream mb-2 block">Select Guide</label>
              <Select value={selectedGuide} onValueChange={setSelectedGuide}>
                <SelectTrigger className="bg-slate-700 border-slate-600">
                  <SelectValue placeholder="Choose guide to link" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  {guides?.filter(guide => guide.is_active).map((guide) => (
                    <SelectItem key={guide.id} value={guide.id} className="text-brand-cream">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-brand-gold border-brand-gold">
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
                className="w-full bg-brand-gold text-black hover:bg-brand-gold/90"
              >
                <Link2 className="h-4 w-4 mr-2" />
                Link CTA
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Linked CTAs Overview */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-brand-cream">
            Linked CTAs ({linkedCTAs.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {linkedCTAs.length === 0 ? (
            <p className="text-brand-cream/60 text-center py-8">
              No CTAs are currently linked to guides. Link CTAs above to ensure proper functionality.
            </p>
          ) : (
            <div className="grid gap-4">
              {linkedCTAs.map((cta) => (
                <div key={cta.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={`${getCTATypeColor(cta.type)} text-white`}>
                        {cta.type.toUpperCase()}
                      </Badge>
                      <span className="text-brand-cream font-medium">{cta.text}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-brand-cream/60">Location: </span>
                        <span className="text-brand-cream">{cta.location}</span>
                        {cta.pageSlug !== 'global' && (
                          <a 
                            href={cta.pageSlug} 
                            className="ml-2 text-brand-gold hover:text-brand-gold/80 underline inline-flex items-center gap-1"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Page
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                      <div>
                        <span className="text-brand-cream/60">Linked Guide: </span>
                        <span className="text-brand-gold">{getGuideTitle(cta.linkedGuideId!)}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleUnlinkCTA(cta.id)}
                    className="border-slate-600 text-slate-400 hover:text-slate-200"
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
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-brand-cream">CTA Detection Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-slate-700/50 rounded-lg">
              <div className="text-2xl font-bold text-brand-gold">{detectedCTAs.length}</div>
              <div className="text-sm text-brand-cream/60">Total CTAs</div>
            </div>
            <div className="text-center p-4 bg-slate-700/50 rounded-lg">
              <div className="text-2xl font-bold text-green-400">{linkedCTAs.length}</div>
              <div className="text-sm text-brand-cream/60">Linked CTAs</div>
            </div>
            <div className="text-center p-4 bg-slate-700/50 rounded-lg">
              <div className="text-2xl font-bold text-red-400">{unlinkedCTAs.length}</div>
              <div className="text-sm text-brand-cream/60">Unlinked CTAs</div>
            </div>
            <div className="text-center p-4 bg-slate-700/50 rounded-lg">
              <div className="text-2xl font-bold text-brand-cream">{guides?.length || 0}</div>
              <div className="text-sm text-brand-cream/60">Total Guides</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};