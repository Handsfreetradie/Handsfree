import { Link, Navigate, useParams } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { blogPosts } from "../../content/blogPosts";

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Seo title={`${post.title} — Handsfree`} description={post.description} canonicalPath={`/blog/${post.slug}`} />
      <Header />

      <article className="pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-gray-400 mb-3">
            {new Date(post.publishedDate).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <h1 className="text-3xl md:text-4xl mb-8 text-gray-900">{post.title}</h1>

          <div className="space-y-5 text-gray-700 leading-relaxed">
            {post.body.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2 key={i} className="text-2xl text-gray-900 pt-4">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2">
                    {block.items?.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "cta") {
                return (
                  <Link
                    key={i}
                    to={block.to || "/"}
                    className="inline-block mt-4 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                  >
                    {block.text}
                  </Link>
                );
              }
              return <p key={i}>{block.text}</p>;
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link to="/blog" className="text-orange-500 hover:underline">
              ← Back to all posts
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
