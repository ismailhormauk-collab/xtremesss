import Image from "next/image";
import { Sparkles, MonitorPlay, Smartphone, Wand2, Headset } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/site";

const benefits = [
  { icon: MonitorPlay, label: "HD & 4K" },
  { icon: Smartphone, label: "Multi-Device" },
  { icon: Wand2, label: "Easy Setup" },
  { icon: Headset, label: "Customer Support" },
];

export function Hero() {
  return (
    <section className="hero-gradient bg-grid-dark relative overflow-hidden">
      <Container className="relative grid grid-cols-1 items-center gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="animate-fade-up flex flex-col items-start gap-6">
          <Badge tone="onDark">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Xtreme HD IPTV
          </Badge>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Xtreme HD IPTV Premium Streaming, Made Simple
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-white/80">
            Enjoy a premium streaming experience with Xtreme HD IPTV across compatible devices.
            Explore live TV, movies and series with flexible subscription plans and dedicated
            customer support. Plans starting from <span className="font-bold text-white">$23/month</span>.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/pricing" size="lg" variant="secondary" icon={<Sparkles className="h-4 w-4" aria-hidden />}>
              Subscribe Now
            </LinkButton>
            <LinkButton
              href={whatsappLink()}
              external
              size="lg"
              variant="outline"
            >
              Get Your Free Trial
            </LinkButton>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3">
            {benefits.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium text-white/85">
                <Icon className="h-4 w-4" aria-hidden />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up-2 relative">
          <Image
            src="/hero-new.png"
            alt="Xtreme HD IPTV streaming interface preview on a laptop, showing Live TV, Movies and Series"
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 1024px) 576px, 90vw"
            className="mx-auto h-auto w-full max-w-xl"
          />
        </div>
      </Container>
    </section>
  );
}
