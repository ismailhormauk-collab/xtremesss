import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarDays, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { BlogCard } from "@/components/blog/BlogCard";
import { LinkButton } from "@/components/ui/Button";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { siteConfig, whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: { absolute: post.seoTitle },
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  const faqJsonLd = post.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <article className="py-14 sm:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <Container className="max-w-3xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        <header className="mt-6 flex flex-col gap-4">
          <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
            {post.category}
          </span>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {post.h1}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-2">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" aria-hidden />
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden />
              {post.readTime}
            </span>
          </div>
        </header>

        <div
          role="img"
          aria-label={post.imageAlt}
          className="hero-gradient bg-grid-dark mt-8 flex h-48 items-center justify-center rounded-2xl sm:h-64"
        >
          <span className="px-6 text-center text-lg font-bold text-white/90 sm:text-xl">
            {post.title}
          </span>
        </div>

        <div className="prose-content mt-10 flex flex-col gap-8">
          <p className="text-lg leading-relaxed text-muted">{post.intro}</p>

          {post.sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-3">
              <h2 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                {section.heading}
              </h2>

              {section.body &&
                (section.ordered ? (
                  <ol className="flex flex-col gap-2.5 pl-1">
                    {section.body.map((step, index) => (
                      <li key={index} className="flex gap-3 leading-relaxed text-muted">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                          {index + 1}
                        </span>
                        <span>{step.replace(/^\d+\.\s*/, "")}</span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  section.body.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))
                ))}

              {section.subsections?.map((sub) => (
                <div key={sub.heading} className="mt-2 flex flex-col gap-2.5">
                  <h3 className="text-base font-bold text-ink sm:text-lg">{sub.heading}</h3>
                  {sub.body.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">FAQs</h2>
            <div className="mt-4 rounded-2xl border border-border-soft bg-surface-soft px-6 py-2 sm:px-8">
              <FAQAccordion items={post.faqs} defaultOpenIndex={null} />
            </div>
          </div>
        )}

        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-border-soft bg-surface-soft p-8 text-center">
          <h2 className="text-xl font-extrabold text-ink">Ready to try Xtreme HD IPTV?</h2>
          <p className="max-w-md text-sm text-muted">
            Explore our subscription plans or message our support team for setup help.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/pricing" size="md">
              View Plans
            </LinkButton>
            <LinkButton
              href={whatsappLink("Hi! I have a question after reading your blog post.")}
              external
              size="md"
              variant="whatsapp"
              icon={<MessageCircle className="h-4 w-4" aria-hidden />}
            >
              Chat on WhatsApp
            </LinkButton>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
              Related Articles
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {related.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 text-center">
          <Link href="/blog" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
            ← Back to all articles
          </Link>
        </div>
      </Container>
    </article>
  );
}
