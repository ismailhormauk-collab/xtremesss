import { MessageCircle, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { whatsappLink, telegramLink } from "@/lib/site";

export function CTASection() {
  return (
    <section className="hero-gradient bg-grid-dark relative overflow-hidden py-20 sm:py-24">
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <Badge tone="onDark">Get Started Today</Badge>
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready to start streaming?
        </h2>
        <p className="max-w-xl text-lg text-white/80">
          Message us on WhatsApp or Telegram — we&apos;ll have you streaming in minutes.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton
            href={whatsappLink("Hi! I'd like to get started with Xtreme HD.")}
            external
            size="lg"
            variant="whatsapp"
            icon={<MessageCircle className="h-5 w-5" aria-hidden />}
          >
            Chat on WhatsApp
          </LinkButton>
          <LinkButton
            href={telegramLink()}
            external
            size="lg"
            variant="telegram"
            icon={<Send className="h-5 w-5" aria-hidden />}
          >
            Message on Telegram
          </LinkButton>
          <LinkButton href="/pricing" size="lg" variant="outline">
            View All Plans
          </LinkButton>
        </div>
        <p className="text-sm text-white/60">Fast response · Available 24/7 · No contracts</p>
      </Container>
    </section>
  );
}
