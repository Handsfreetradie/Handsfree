import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { blogPosts } from "../../content/blogPosts";

export function BlogIndex() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Blog — Handsfree AI Receptionist"
        description="Guides on AI receptionists, missed-call costs, and pricing for Australian tradies."
        canonicalPath="/blog"
      />
      <Header />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl mb-4 text-gray-900">Blog</h1>
          <p className="text-lg text-gray-600 mb-12">
            Straight answers on AI receptionists, pricing, and missed calls for Australian trade businesses.
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block p-6 rounded-2xl border border-gray-200 hover:border-orange-500 transition-colors"
              >
                <p className="text-sm text-gray-400 mb-2">
                  {new Date(post.publishedDate).toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
                </p>
                <h2 className="text-2xl text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
