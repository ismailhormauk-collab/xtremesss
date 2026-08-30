import type { Metadata } from "next";
import { Zap, Shield, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PricingSelector } from "@/components/pricing/PricingSelector";
import { DeviceCompatibility } from "@/components/DeviceCompatibility";
import { LinkButton } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Xtreme HD IPTV Pricing | Subscription Plans & Devices" },
  description:
    "Compare Xtreme HD IPTV pricing across 1, 2, 3 and 4 device plans. Choose 1, 3, 6 or 12 month subscriptions with instant activation and 50,000+ channels.",
  alternates: { canonical: "/pricing" },
};

const trustCards = [
  {
    icon: Zap,
    title: "Instant Activation",
    description: "Receive your credentials via WhatsApp or Telegram within minutes of payment. Start streaming immediately.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your personal information is protected. We use secure payment methods and never share your data.",
  },
  {
    icon: Star,
    title: "24/7 Expert Support",
    description: "Our team is available on WhatsApp and Telegram around the clock for setup help and technical support.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-surface-soft bg-grid-light border-b border-border-soft py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-5 text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          <Badge>
            <Zap className="h-3.5 w-3.5" aria-hidden />
            Simple, Honest Pricing
          </Badge>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Xtreme HD IPTV Subscription Pricing
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Choose the number of devices and the subscription period that works best for you. No
            hidden fees, no contracts, no surprises — every Xtreme HD IPTV plan includes instant
            activation and 50,000+ channels.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted">
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-brand-600" aria-hidden /> Secure Payment
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-brand-600" aria-hidden /> Instant Activation
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-brand-600" aria-hidden /> Trusted Provider
            </span>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <PricingSelector />
          <p className="mt-10 text-center text-sm text-muted-2">
            Instant activation after payment · No contracts · Cancel anytime
          </p>

          <div className="mt-16">
            <DeviceCompatibility variant="compact" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {trustCards.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-border-soft bg-white p-6 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-base font-medium text-muted">
              Not sure which plan to choose? Chat with us and we&apos;ll help you decide.
            </p>
            <LinkButton
              href={whatsappLink("Hi! I'd like help choosing an Xtreme HD plan.")}
              external
              size="lg"
              variant="whatsapp"
              icon={<MessageCircle className="h-5 w-5" aria-hidden />}
            >
              Chat on WhatsApp — Get Help Choosing
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
