import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Xtreme HD IPTV privacy policy to understand how we collect, use and protect your information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information We Collect",
    body: "When you subscribe to Xtreme HD IPTV or contact our support team, we may collect information such as your name, email address, WhatsApp or Telegram contact details, and payment confirmation details necessary to activate and manage your subscription.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information you provide to set up and deliver your subscription, respond to support requests, send activation details, and communicate important account or service updates. We do not sell your personal information to third parties.",
  },
  {
    title: "Payment Information",
    body: "Payments are processed through the payment method you select at checkout. We do not store full payment card details on our own systems.",
  },
  {
    title: "Communication",
    body: "We primarily communicate with customers via WhatsApp and Telegram for setup, support and renewal purposes. You can request that we stop contacting you at any time.",
  },
  {
    title: "Data Security",
    body: "We take reasonable steps to protect the information you share with us, including using secure payment methods and limiting access to customer data to authorized staff only.",
  },
  {
    title: "Third-Party Services",
    body: "Our website and checkout flow may rely on third-party services (such as payment processors) that have their own privacy practices. We encourage you to review their policies where applicable.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this privacy policy from time to time. Continued use of our service after changes are posted indicates acceptance of the updated policy.",
  },
  {
    title: "Contact Us",
    body: `If you have questions about this privacy policy, please contact us via WhatsApp at ${siteConfig.contact.whatsappNumber} or Telegram at ${siteConfig.contact.telegramHandle}.`,
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-2">Last updated: January 2026</p>

        <div className="mt-10 flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-ink">{section.title}</h2>
              <p className="leading-relaxed text-muted">{section.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
