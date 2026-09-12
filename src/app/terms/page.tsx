import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms of service for Xtreme HD IPTV, covering subscriptions, payments, acceptable use, and device compatibility before you sign up.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By subscribing to or using Xtreme HD IPTV, you agree to these terms of service. If you do not agree with any part of these terms, please do not use our service.",
  },
  {
    title: "Subscriptions & Payment",
    body: "Subscriptions are offered as one-time payments for the selected plan duration and device count. Prices are as listed on our pricing page at the time of purchase. Activation typically occurs within minutes of confirmed payment.",
  },
  {
    title: "Acceptable Use",
    body: "Xtreme HD IPTV is intended to be used for accessing content you are authorized to view. You are responsible for using the service in compliance with applicable laws in your jurisdiction.",
  },
  {
    title: "Device Compatibility",
    body: "While Xtreme HD IPTV is designed to work across a wide range of devices, we cannot guarantee compatibility or performance on every device, operating system version, or network configuration.",
  },
  {
    title: "Service Availability",
    body: "We aim to provide a reliable streaming experience but do not guarantee uninterrupted or error-free service. Content availability may vary and is not guaranteed.",
  },
  {
    title: "No Contract, Cancellation",
    body: "Our plans are one-time payments with no recurring contract. There is nothing to cancel — simply choose whether to renew when your subscription period ends.",
  },
  {
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by law, Xtreme HD IPTV is not liable for indirect, incidental or consequential damages arising from use of the service.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these terms from time to time. Continued use of the service after changes are posted constitutes acceptance of the revised terms.",
  },
  {
    title: "Contact Us",
    body: `Questions about these terms can be sent via WhatsApp at ${siteConfig.contact.whatsappNumber} or Telegram at ${siteConfig.contact.telegramHandle}.`,
  },
];

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink">Terms of Service</h1>
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
