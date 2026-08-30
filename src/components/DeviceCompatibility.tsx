import { Flame, Tv, Bot, Apple, Cast, LaptopMinimal, Boxes, Tablet } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappLink } from "@/lib/site";

const devices = [
  { icon: Flame, label: "Firestick" },
  { icon: Tv, label: "Smart TV" },
  { icon: Bot, label: "Android" },
  { icon: Tablet, label: "iPhone & iPad" },
  { icon: Apple, label: "Apple TV" },
  { icon: LaptopMinimal, label: "Windows & Mac" },
  { icon: Cast, label: "Android TV Box" },
  { icon: Boxes, label: "MAG Box" },
];

export function DeviceCompatibility({ variant = "full" }: { variant?: "full" | "compact" }) {
  if (variant === "compact") {
    return (
      <div className="rounded-2xl border border-border-soft bg-white p-6 sm:p-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-muted-2">
          Works on Every Device
        </p>
        <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-6">
          {devices.slice(0, 6).map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-xs font-medium text-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="bg-surface-soft py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Compatibility"
          title="Works on every device."
          description="One subscription. Every screen."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {devices.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border-soft bg-white px-4 py-6 text-center transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-sm font-semibold text-ink">{label}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Don&apos;t see your device?{" "}
          <a
            href={whatsappLink("Hi! Is Xtreme HD compatible with my device?")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800"
          >
            Ask us on WhatsApp
          </a>{" "}
          — we support a wide range of internet-connected devices.
        </p>
      </Container>
    </section>
  );
}
