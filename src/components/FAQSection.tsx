import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import type { FaqItem } from "@/lib/faq";
import { whatsappLink } from "@/lib/site";

export function FAQSection({
  items,
  viewAllHref,
  includeSchema = true,
}: {
  items: FaqItem[];
  viewAllHref?: string;
  includeSchema?: boolean;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="bg-surface-soft py-20 sm:py-24">
      <Container className="max-w-4xl">
        {includeSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
        <SectionHeading eyebrow="FAQ" title="Got questions?" />
        <p className="-mt-2 max-w-2xl text-center text-base text-muted sm:text-lg">
          Can&apos;t find an answer?{" "}
          <a
            href={faqWhatsappHelpLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800"
          >
            Ask us on WhatsApp
          </a>
          .
        </p>
        <div className="mt-8 w-full rounded-2xl border border-border-soft bg-white px-6 py-2 sm:px-8">
          <FAQAccordion items={items} />
        </div>
        {viewAllHref && (
          <div className="mt-8 text-center">
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              View all questions
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}

export function faqWhatsappHelpLink() {
  return whatsappLink("Hi! I have a question about Xtreme HD.");
}
