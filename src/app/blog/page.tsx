import type { Metadata } from "next";
import Link from "next/link";
import { clsx } from "clsx";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogCategories, blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: { absolute: "IPTV Guides, Setup Tips & Streaming Advice" },
  description:
    "Browse IPTV guides, device setup tutorials, and troubleshooting tips from the Xtreme HD IPTV team to help you get the most from your subscription.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = blogCategories.includes(category as (typeof blogCategories)[number])
    ? (category as (typeof blogCategories)[number])
    : undefined;

  const posts = activeCategory
    ? blogPosts.filter((post) => post.category === activeCategory)
    : blogPosts;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            IPTV Guides &amp; Streaming Tips
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            Practical guides on IPTV setup, streaming quality and troubleshooting from the Xtreme HD
            IPTV team.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <Link
            href="/blog"
            className={clsx(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              !activeCategory ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-700 hover:bg-brand-100"
            )}
          >
            All Articles
          </Link>
          {blogCategories.map((cat) => (
            <Link
              key={cat}
              href={`/blog?category=${encodeURIComponent(cat)}`}
              className={clsx(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                activeCategory === cat ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-700 hover:bg-brand-100"
              )}
            >
              {cat}
            </Link>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
