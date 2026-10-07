import type { Metadata } from "next";
import { MessageCircle, Send, Wallet, ServerCog, TrendingUp, Headset, UserPlus, Settings, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkButton } from "@/components/ui/Button";
import { FeatureCard } from "@/components/FeatureCard";
import { whatsappLink, telegramLink } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "IPTV Reseller Program & Plans | Xtreme HD IPTV" },
  description:
    "Start your own IPTV reseller business with Xtreme HD IPTV. Get competitive pricing, reliable infrastructure, and dedicated reseller support.",
  alternates: { canonical: "/reseller" },
};

const whyResell = [
  {
    icon: Wallet,
    title: "Competitive Reseller Pricing",
    description: "Buy credits in bulk at reseller rates and set your own retail prices.",
  },
  {
    icon: ServerCog,
    title: "Reliable Infrastructure",
    description: "Built on the same stable servers that power every Xtreme HD IPTV subscription.",
  },
  {
    icon: TrendingUp,
    title: "Grow at Your Own Pace",
    description: "Start small and scale up your credits as your customer base grows.",
  },
  {
    icon: Headset,
    title: "Dedicated Reseller Support",
    description: "Direct WhatsApp & Telegram access to our team for panel help and questions.",
  },
];

const steps = [
  {
    icon: UserPlus,
    title: "Get in Touch",
    description: "Message us on WhatsApp or Telegram to discuss reseller pricing and requirements.",
  },
  {
    icon: Settings,
    title: "Get Panel Access",
    description: "We set you up with a reseller panel to create and manage customer credentials.",
  },
  {
    icon: Rocket,
    title: "Start Selling",
    description: "Sell subscriptions to your customers and top up your credit balance as needed.",
  },
];

export default function ResellerPage() {
  return (
    <>
      <section className="bg-surface-soft bg-grid-light border-b border-border-soft py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-5 text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Reseller" }]} />
          <Badge>Reseller Program</Badge>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Become an Xtreme HD IPTV Reseller
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Start your own IPTV business with reseller tools, flexible pricing and dedicated support
            behind every plan you sell.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href={whatsappLink()}
              external
              size="lg"
              variant="whatsapp"
              icon={<MessageCircle className="h-5 w-5" aria-hidden />}
            >
              Chat on WhatsApp
            </LinkButton>
            <LinkButton href={telegramLink()} external size="lg" variant="telegram" icon={<Send className="h-5 w-5" aria-hidden />}>
              Message on Telegram
            </LinkButton>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Why Resell Xtreme HD IPTV
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {whyResell.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-soft py-20 sm:py-24">
        <Container>
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            How It Works
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <div key={title} className="rounded-2xl border border-border-soft bg-white p-7 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <span className="mx-auto mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="max-w-xl text-lg text-muted">
            Message our team on WhatsApp or Telegram to discuss reseller pricing and panel access.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href={whatsappLink()}
              external
              size="lg"
              variant="whatsapp"
              icon={<MessageCircle className="h-5 w-5" aria-hidden />}
            >
              Chat on WhatsApp
            </LinkButton>
            <LinkButton href={telegramLink()} external size="lg" variant="telegram" icon={<Send className="h-5 w-5" aria-hidden />}>
              Message on Telegram
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  );
}
