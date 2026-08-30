import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LinkButton } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import { fullFaqs } from "@/lib/faq";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Xtreme HD IPTV FAQ | Frequently Asked Questions" },
  description:
    "Answers to common questions about Xtreme HD IPTV — devices, activation, support, sports channels, free trials and more.",
  alternates: { canonical: "/faq" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: fullFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <section className="py-16 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="max-w-3xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="max-w-xl text-lg text-muted">
            Everything you need to know about Xtreme HD IPTV subscriptions, setup and support.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-border-soft bg-white px-6 py-2 sm:px-8">
          <FAQAccordion items={[...fullFaqs]} defaultOpenIndex={0} />
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-muted">Still have a question?</p>
          <LinkButton
            href={whatsappLink("Hi! I have a question about Xtreme HD.")}
            external
            variant="whatsapp"
            size="lg"
            icon={<MessageCircle className="h-5 w-5" aria-hidden />}
          >
            Chat on WhatsApp — {siteConfig.contact.whatsappNumber}
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
