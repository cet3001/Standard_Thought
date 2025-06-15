
import { useParams, useNavigate } from "react-router-dom";
import SEO from "@/components/seo";
import CommentsSection from "@/components/comments-section";
import BlogPostHeader from "@/components/blog-post/blog-post-header";
import BlogPostContent from "@/components/blog-post/blog-post-content";
import BlogPostShare from "@/components/blog-post/blog-post-share";
import BlogPostLoading from "@/components/blog-post/blog-post-loading";
import BlogPostError from "@/components/blog-post/blog-post-error";
import BlogPostNavigation from "@/components/blog-post/blog-post-navigation";
import BlogPostLayout from "@/components/blog-post/blog-post-layout";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
import { useBlogPost } from "@/hooks/use-blog-post";
import { getReadTime, getWordCount, generateBlogPostSEO } from "@/components/blog-post/blog-post-utils";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { post, loading, error } = useBlogPost(slug);

  const handlePostDeleted = () => {
    navigate("/blog");
  };

  const handleBackClick = () => {
    navigate("/blog");
  };

  if (loading) {
    return <BlogPostLoading />;
  }

  if (error || !post) {
    return <BlogPostError error={error || 'Unknown error'} slug={slug} />;
  }

  const { metaDescription, metaKeywords, pageTitle } = generateBlogPostSEO(post);
  const wordCount = getWordCount(post.content);

  return (
    <>
      <SEO 
        title={pageTitle}
        description={metaDescription}
        keywords={metaKeywords}
        image={post.image_url || undefined}
        url={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.created_at}
        modifiedTime={post.created_at}
        category={post.category}
        tags={post.tags}
        author="Standardthought"
        wordCount={wordCount}
      />

      <BreadcrumbSchema />

      <BlogPostLayout>
        <BlogPostNavigation
          onBackClick={handleBackClick}
          postId={post.id}
          postTitle={post.title}
          postSlug={post.slug}
          onDelete={handlePostDeleted}
        />

        <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-[#247EFF]/20">
          <BlogPostHeader
            category={post.category}
            featured={post.featured}
            title={post.title}
            excerpt={post.excerpt}
            createdAt={post.created_at}
            readTime={getReadTime(post.content)}
          />
          <BlogPostShare title={post.title} />
        </div>

        <BlogPostContent
          content={post.content}
          imageUrl={post.image_url}
          imageMetaDescription={post.image_meta_description}
          title={post.title}
          tags={post.tags}
        />

        <BlogPostShare title={post.title} showFullSection />

        <CommentsSection 
          blogPostId={post.id} 
          commentsEnabled={post.comments_enabled || false} 
        />
      </BlogPostLayout>
    </>
  );
};

export default BlogPost;
