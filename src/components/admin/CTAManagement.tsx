import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertTriangle, Link2, Unlink, ExternalLink, RefreshCw, BarChart3, Search, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { AdminSectionCard } from './AdminSectionCard';
import { useCTADetection } from '@/hooks/use-cta-detection';
import { useGuides } from '@/hooks/use-guides';
import { useToast } from '@/hooks/use-toast';

export const CTAManagement = () => {
  const { detectedCTAs, unlinkedCTAs, linkedCTAs, loading, linkCTAToGuide, unlinkCTA } = useCTADetection();
  const { guides } = useGuides();
  const { toast } = useToast();
  const [selectedCTA, setSelectedCTA] = useState<string>('');
  const [selectedGuide, setSelectedGuide] = useState<string>('');

  // Search, Sort, and Filter states
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [linkFilter, setLinkFilter] = useState<'all' | 'linked' | 'unlinked'>('all');
  const [sortField, setSortField] = useState<'name' | 'guide'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const getGuideTitle = (guideId: string) => {
    const guide = guides?.find(g => g.id === guideId);
    return guide?.title || 'Unknown Guide';
  };

  // Filtered and sorted CTAs
  const filteredAndSortedCTAs = useMemo(() => {
    let filteredCTAs = detectedCTAs;

    // Apply link filter
    if (linkFilter === 'linked') {
      filteredCTAs = linkedCTAs;
    } else if (linkFilter === 'unlinked') {
      filteredCTAs = unlinkedCTAs;
    }

    // Apply search filter
    if (searchTerm) {
      filteredCTAs = filteredCTAs.filter(cta => 
        cta.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cta.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    return [...filteredCTAs].sort((a, b) => {
      let comparison = 0;
      
      if (sortField === 'name') {
        comparison = a.text.localeCompare(b.text);
      } else if (sortField === 'guide') {
        const aGuide = a.linkedGuideId ? getGuideTitle(a.linkedGuideId) : '';
        const bGuide = b.linkedGuideId ? getGuideTitle(b.linkedGuideId) : '';
        comparison = aGuide.localeCompare(bGuide);
      }

      return sortDirection === 'desc' ? -comparison : comparison;
    });
  }, [detectedCTAs, linkedCTAs, unlinkedCTAs, searchTerm, linkFilter, sortField, sortDirection, getGuideTitle]);

  const handleSort = (field: 'name' | 'guide') => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: 'name' | 'guide') => {
    if (sortField !== field) return <ArrowUpDown className="h-4 w-4" />;
    return sortDirection === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />;
  };

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
      <AdminSectionCard>
        <div className="text-center py-8">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-foreground">Scanning CTAs across the site...</p>
        </div>
      </AdminSectionCard>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search, Sort, and Filter Controls */}
      <AdminSectionCard 
        title="Search & Filter CTAs"
        icon={<Search className="h-5 w-5" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Search CTAs</label>
            <Input
              type="text"
              placeholder="Search by CTA name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-background border-border"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Filter by Status</label>
            <Select value={linkFilter} onValueChange={(value: 'all' | 'linked' | 'unlinked') => setLinkFilter(value)}>
              <SelectTrigger className="bg-background border-border hover:bg-accent">
                <SelectValue placeholder="Filter CTAs" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border">
                <SelectItem value="all" className="text-foreground">All CTAs</SelectItem>
                <SelectItem value="linked" className="text-foreground">Linked</SelectItem>
                <SelectItem value="unlinked" className="text-foreground">Unlinked</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          Showing {filteredAndSortedCTAs.length} of {detectedCTAs.length} CTAs
        </div>
      </AdminSectionCard>

      {/* All CTAs with Sortable Headers */}
      <AdminSectionCard 
        title="All CTAs"
        icon={<Link2 className="h-5 w-5" />}
      >
        {filteredAndSortedCTAs.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              No CTAs found matching your search and filter criteria.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Sortable Headers */}
            <div className="grid grid-cols-2 gap-4 pb-2 border-b border-border">
              <button
                onClick={() => handleSort('name')}
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                CTA Name
                {getSortIcon('name')}
              </button>
              <button
                onClick={() => handleSort('guide')}
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Linked Guide
                {getSortIcon('guide')}
              </button>
            </div>

            {/* CTA List */}
            <div className="grid gap-4">
              {filteredAndSortedCTAs.map((cta) => (
                <div 
                  key={cta.id} 
                  className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                    cta.linkedGuideId 
                      ? 'bg-accent/50 border-border hover:bg-accent/70' 
                      : 'bg-destructive/5 border-destructive/20 hover:bg-destructive/10'
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className={`${getCTATypeColor(cta.type)} text-white font-medium`}>
                        {cta.type.toUpperCase()}
                      </Badge>
                      <span className="text-foreground font-medium text-lg">{cta.text}</span>
                      {!cta.linkedGuideId && (
                        <Badge variant="destructive" className="text-xs">
                          Unlinked
                        </Badge>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground font-medium">Location: </span>
                        <span className="text-foreground">{cta.location}</span>
                        <span className="text-muted-foreground mx-2">•</span>
                        <span className="font-mono bg-muted px-2 py-1 rounded text-xs">{cta.componentName}</span>
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
                        <span className={`font-medium ${cta.linkedGuideId ? 'text-primary' : 'text-muted-foreground'}`}>
                          {cta.linkedGuideId ? getGuideTitle(cta.linkedGuideId) : 'Not linked'}
                        </span>
                      </div>
                    </div>
                  </div>
                  {cta.linkedGuideId && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleUnlinkCTA(cta.id)}
                      className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive"
                      title="Unlink CTA"
                    >
                      <Unlink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </AdminSectionCard>

      {/* Link CTAs to Guides */}
      <AdminSectionCard 
        title="Link CTAs to Guides"
        icon={<Link2 className="h-5 w-5" />}
      >
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
      </AdminSectionCard>

      {/* CTA Detection Stats */}
      <AdminSectionCard 
        title="CTA Detection Summary"
        icon={<BarChart3 className="h-5 w-5" />}
      >
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
        </AdminSectionCard>
    </div>
  );
};