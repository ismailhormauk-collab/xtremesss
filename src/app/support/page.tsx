import type { Metadata } from "next";
import { MessageCircle, Send, ShoppingCart, Wrench, Smartphone, RefreshCw, HelpCircle, CreditCard, Zap, Clock, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCard } from "@/components/ContactCard";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig, whatsappLink, telegramLink } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "IPTV Support & Setup Help | Xtreme HD IPTV" },
  description:
    "Get help with IPTV setup, subscriptions, renewals, and technical issues from the Xtreme HD IPTV support team, available 24/7 via WhatsApp and Telegram.",
  alternates: { canonical: "/support" },
};

const helpTopics = [
  { icon: ShoppingCart, title: "New Subscription", description: "Order a new IPTV subscription" },
  { icon: Wrench, title: "Technical Support", description: "Buffering, connection, or app issues" },
  { icon: Smartphone, title: "Setup Help", description: "Get help installing on your device" },
  { icon: RefreshCw, title: "Renewal", description: "Renew or upgrade your plan" },
  { icon: HelpCircle, title: "General Questions", description: "Ask anything about Xtreme HD IPTV" },
  { icon: CreditCard, title: "Billing", description: "Payment and subscription queries" },
];

const promise = [
  { icon: Zap, top: "Fast", bottom: "WhatsApp & Telegram Response" },
  { icon: Clock, top: "24/7", bottom: "Support Availability" },
  { icon: Star, top: "Real", bottom: "Human Support" },
];

export default function SupportPage() {
  return (
    <>
      <section className="bg-surface-soft bg-grid-light border-b border-border-soft py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-5 text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Support" }]} />
          <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Get in Touch
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Our friendly support team is available 24/7 to help you with any question. The fastest
            way to reach us is via WhatsApp or Telegram.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ContactCard
              icon={MessageCircle}
              title="WhatsApp Support"
              value={siteConfig.contact.whatsappNumber}
              href={whatsappLink("Hi! I need help with Xtreme HD.")}
              buttonLabel="Open WhatsApp Chat"
              variant="whatsapp"
            />
            <ContactCard
              icon={Send}
              title="Telegram Support"
              value={siteConfig.contact.telegramHandle}
              href={telegramLink()}
              buttonLabel="Open Telegram Chat"
              variant="telegram"
            />
          </div>

          <h2 className="mt-20 text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            What Can We Help With?
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {helpTopics.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border-soft bg-white p-7 text-center transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-bold text-ink">{title}</h3>
                <p className="text-sm text-muted">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-border-soft bg-white p-8 sm:p-10">
            <h2 className="text-center text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Our Support Promise
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {promise.map(({ icon: Icon, top, bottom }) => (
                <div key={bottom} className="flex flex-col items-center gap-2 text-center">
                  <Icon className="h-6 w-6 text-brand-600" aria-hidden />
                  <span className="text-2xl font-extrabold text-ink">{top}</span>
                  <span className="text-sm text-muted">{bottom}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Start a Conversation Now
            </h2>
            <p className="max-w-md text-muted">
              Message us on WhatsApp or Telegram and we&apos;ll get back to you shortly.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <LinkButton
                href={whatsappLink("Hi! I need help with Xtreme HD.")}
                external
                size="lg"
                variant="whatsapp"
                icon={<MessageCircle className="h-5 w-5" aria-hidden />}
              >
                Chat on WhatsApp — {siteConfig.contact.whatsappNumber}
              </LinkButton>
              <LinkButton href={telegramLink()} external size="lg" variant="telegram" icon={<Send className="h-5 w-5" aria-hidden />}>
                Contact on Telegram
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
