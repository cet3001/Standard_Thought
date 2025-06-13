
import { Button } from "@/components/ui/button";
import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { trackSocialShare } from "@/components/analytics";

interface BlogPostShareProps {
  title: string;
  showFullSection?: boolean;
}

const BlogPostShare = ({ title, showFullSection = false }: BlogPostShareProps) => {
  const sharePost = async (platform: string) => {
    const url = window.location.href;
    
    // Track social share
    trackSocialShare(platform, title);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          toast.success('Link copied to clipboard!');
          return;
        } catch (err) {
          toast.error('Failed to copy link');
          return;
        }
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  if (showFullSection) {
    return (
      <div className="mt-12 pt-8 border-t border-[#247EFF]/20 text-center">
        <h3 className="text-lg font-semibold text-[#0A0A0A] dark:text-brand-cream mb-4">
          Found this story helpful? Share it with others
        </h3>
        <div className="flex justify-center gap-4">
          <Button
            onClick={() => sharePost('twitter')}
            className="bg-[#1DA1F2] hover:bg-[#0d8bd9] text-white"
          >
            <Twitter className="mr-2 h-4 w-4" />
            Twitter
          </Button>
          <Button
            onClick={() => sharePost('facebook')}
            className="bg-[#4267B2] hover:bg-[#365899] text-white"
          >
            <Facebook className="mr-2 h-4 w-4" />
            Facebook
          </Button>
          <Button
            onClick={() => sharePost('linkedin')}
            className="bg-[#0077B5] hover:bg-[#005582] text-white"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => sharePost('copy')}
        className="text-[#0A0A0A]/70 dark:text-brand-cream/70 hover:text-[#247EFF]"
      >
        <Share2 size={18} />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => sharePost('twitter')}
        className="text-[#0A0A0A]/70 dark:text-brand-cream/70 hover:text-[#247EFF]"
      >
        <Twitter size={18} />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => sharePost('facebook')}
        className="text-[#0A0A0A]/70 dark:text-brand-cream/70 hover:text-[#247EFF]"
      >
        <Facebook size={18} />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => sharePost('linkedin')}
        className="text-[#0A0A0A]/70 dark:text-brand-cream/70 hover:text-[#247EFF]"
      >
        <Linkedin size={18} />
      </Button>
    </div>
  );
};

export default BlogPostShare;
