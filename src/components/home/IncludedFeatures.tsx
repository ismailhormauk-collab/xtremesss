import { Tv, Film, MonitorPlay, MonitorSmartphone, Wifi, Headset } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";

const items = [
  {
    icon: Tv,
    title: "50,000+ Live Channels",
    description: "Sports, news, entertainment and international programming from around the world.",
  },
  {
    icon: Film,
    title: "Massive VOD Library",
    description: "100,000+ movies and complete TV series available on demand, updated regularly.",
  },
  {
    icon: MonitorPlay,
    title: "HD & 4K Streaming",
    description: "Enjoy HD and 4K quality on supported devices, with smooth on-screen playback.",
  },
  {
    icon: MonitorSmartphone,
    title: "Works on Every Device",
    description: "Firestick, Smart TV, Android, iPhone, Apple TV, Windows and Mac — your choice.",
  },
  {
    icon: Wifi,
    title: "Reliable Streaming",
    description: "A clean, stable streaming experience built for consistent everyday viewing.",
  },
  {
    icon: Headset,
    title: "24/7 WhatsApp & Telegram Support",
    description: "Real support, always available. Most questions answered within minutes.",
  },
];

export function IncludedFeatures() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What's Included"
          title="Everything in one plan."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
