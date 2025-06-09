
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MessageCircle, User, Calendar } from "lucide-react";

interface Comment {
  id: string;
  author_name: string;
  author_email: string;
  content: string;
  created_at: string;
  approved: boolean;
}

interface CommentsSectionProps {
  blogPostId: string;
  commentsEnabled: boolean;
}

const CommentsSection = ({ blogPostId, commentsEnabled }: CommentsSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    authorName: "",
    authorEmail: "",
    content: ""
  });

  useEffect(() => {
    if (commentsEnabled) {
      fetchComments();
    }
  }, [blogPostId, commentsEnabled]);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('blog_post_id', blogPostId)
        .eq('approved', true)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching comments:', error);
        return;
      }

      setComments(data || []);
    } catch (error) {
      console.error('Unexpected error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { error } = await supabase
        .from('comments')
        .insert({
          blog_post_id: blogPostId,
          author_name: formData.authorName,
          author_email: formData.authorEmail,
          content: formData.content
        });

      if (error) {
        console.error('Error submitting comment:', error);
        toast.error("Failed to submit comment");
        return;
      }

      toast.success("Comment submitted for review!");
      setFormData({ authorName: "", authorEmail: "", content: "" });
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error("An unexpected error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  if (!commentsEnabled) {
    return null;
  }

  return (
    <div className="mt-12 pt-8 border-t border-[#247EFF]/20">
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle className="h-6 w-6 text-[#247EFF]" />
        <h3 className="text-2xl font-bold text-[#0A0A0A] dark:text-brand-cream">
          Comments ({comments.length})
        </h3>
      </div>

      {/* Comments List */}
      {loading ? (
        <div className="space-y-4 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-[#247EFF]/20 rounded w-32 mb-2"></div>
              <div className="h-16 bg-[#247EFF]/20 rounded mb-4"></div>
            </div>
          ))}
        </div>
      ) : comments.length > 0 ? (
        <div className="space-y-6 mb-8">
          {comments.map((comment) => (
            <Card key={comment.id} className="bg-white/50 dark:bg-brand-black/50 border-[#247EFF]/20">
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <User className="h-4 w-4 text-[#247EFF]" />
                  <span className="font-medium text-[#0A0A0A] dark:text-brand-cream">
                    {comment.author_name}
                  </span>
                  <Calendar className="h-4 w-4 text-[#0A0A0A]/50 dark:text-brand-cream/50 ml-2" />
                  <span className="text-sm text-[#0A0A0A]/70 dark:text-brand-cream/70">
                    {new Date(comment.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
                <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80 leading-relaxed">
                  {comment.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 mb-8">
          <MessageCircle className="h-12 w-12 text-[#247EFF]/30 mx-auto mb-4" />
          <p className="text-[#0A0A0A]/60 dark:text-brand-cream/60">
            Be the first to leave a comment!
          </p>
        </div>
      )}

      {/* Comment Form */}
      <Card className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border-[#247EFF]/20">
        <CardHeader>
          <CardTitle className="text-[#0A0A0A] dark:text-brand-cream">Leave a Comment</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="authorName" className="text-[#0A0A0A] dark:text-brand-cream">
                  Name *
                </Label>
                <Input
                  id="authorName"
                  value={formData.authorName}
                  onChange={(e) => setFormData({...formData, authorName: e.target.value})}
                  placeholder="Your name"
                  required
                  className="bg-brand-cream/50 dark:bg-brand-black/50 border-[#E5E5E5] dark:border-[#2A2A2A] focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream"
                />
              </div>
              <div>
                <Label htmlFor="authorEmail" className="text-[#0A0A0A] dark:text-brand-cream">
                  Email *
                </Label>
                <Input
                  id="authorEmail"
                  type="email"
                  value={formData.authorEmail}
                  onChange={(e) => setFormData({...formData, authorEmail: e.target.value})}
                  placeholder="your@email.com"
                  required
                  className="bg-brand-cream/50 dark:bg-brand-black/50 border-[#E5E5E5] dark:border-[#2A2A2A] focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="content" className="text-[#0A0A0A] dark:text-brand-cream">
                Comment *
              </Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                placeholder="Share your thoughts..."
                rows={4}
                required
                className="bg-brand-cream/50 dark:bg-brand-black/50 border-[#E5E5E5] dark:border-[#2A2A2A] focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
                Comments are reviewed before being published.
              </p>
              <Button
                type="submit"
                disabled={submitting}
                className="bg-[#247EFF] hover:bg-[#0057FF] text-white"
              >
                {submitting ? "Submitting..." : "Submit Comment"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommentsSection;
