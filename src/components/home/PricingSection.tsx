import { MessageCircle, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { PricingSelector } from "@/components/pricing/PricingSelector";
import { whatsappLink } from "@/lib/site";

export function PricingSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge>
            <Zap className="h-3.5 w-3.5" aria-hidden />
            Pricing
          </Badge>
          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Choose Your Xtreme HD IPTV Plan
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Select the number of devices and subscription period that works best for you.
          </p>
        </div>

        <div className="mt-12">
          <PricingSelector />
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-base font-medium text-muted">
            Not sure which plan to choose? Chat with us and we&apos;ll help you choose the right
            plan.
          </p>
          <LinkButton
            href={whatsappLink()}
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
  );
}
