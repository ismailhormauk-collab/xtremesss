import { MonitorPlay, Headset, MonitorSmartphone, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  { icon: MonitorPlay, top: "HD & 4K", bottom: "Streaming Quality" },
  { icon: Headset, top: "24/7", bottom: "Support" },
  { icon: MonitorSmartphone, top: "Multi", bottom: "Device Support" },
  { icon: Zap, top: "Easy", bottom: "Setup" },
];

export function FeaturesMinimal() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="What You Get" title="Everything you need for premium streaming." />
        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {items.map(({ icon: Icon, top, bottom }) => (
            <div
              key={bottom}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border-soft bg-surface-soft px-6 py-10 text-center transition-all hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <span className="text-lg font-extrabold text-ink sm:text-xl">{top}</span>
              <span className="text-sm text-muted">{bottom}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
