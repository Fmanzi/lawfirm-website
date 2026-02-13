import { useParams, Link, Navigate } from "react-router";
import { useEffect, useState } from "react";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { getArticleBySlug, getAllArticles, Article } from "../lib/articles";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<Article | undefined>(undefined);
  const [relatedPosts, setRelatedPosts] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      setLoading(true);
      const p = await getArticleBySlug(slug);
      if (p) {
        setPost(p);
        const all = await getAllArticles();
        setRelatedPosts(all.filter((a) => a.slug !== p.slug && a.category === p.category).slice(0, 3));
      }
      setLoading(false);
    })();
  }, [slug]);

  // Dynamically load react-markdown only if available to avoid module-not-found
  const [ReactMarkdownComponent, setReactMarkdownComponent] = useState<any>(null);
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const mod = await import("react-markdown");
        if (mounted) setReactMarkdownComponent(() => mod.default || mod);
      } catch (e) {
        // react-markdown not installed — we'll fallback to plain rendering
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (!loading && !post) {
    return <Navigate to="/publications" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/publications"
            className="inline-flex items-center text-blue-100 hover:text-white mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Publications
          </Link>

          <div className="mb-6">
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
              {post?.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {post?.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{post?.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{post ? formatDate(post.date) : ""}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post?.imageUrl && (
        <section className="bg-gray-100">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-8">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </section>
      )}

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Lead */}
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {post?.excerpt}
          </p>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {post && ReactMarkdownComponent ? (
              <ReactMarkdownComponent>{post.content}</ReactMarkdownComponent>
            ) : post ? (
              // Fallback: simple paragraph rendering when react-markdown is unavailable
              post.content.split(/\n\n+/).map((para, i) => (
                <p key={i} className="text-gray-700 mb-6 leading-relaxed">{para}</p>
              ))
            ) : null}
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Share this article:</span>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              About the Author
            </h3>
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-10 w-10 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {post?.author}
                </h4>
                <p className="text-gray-600">
                  {post?.author} is a partner at LegalEdge, specializing in {post?.category?.toLowerCase()}. 
                  With years of experience advising businesses on complex legal matters, {post?.author?.split(" ")[0]} 
                  brings deep expertise and practical insights to every engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  {relatedPost.imageUrl && (
                    <img
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {relatedPost.excerpt.substring(0, 100)}...
                    </p>
                    <Link
                      to={`/publications/${relatedPost.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                    >
                      Read More
                      <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
