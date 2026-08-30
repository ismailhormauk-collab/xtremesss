import { Tv, Film, Sparkles, MonitorSmartphone, Headset } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

const stats = [
  { icon: Tv, value: siteConfig.stats.liveChannels, label: "Live TV Channels" },
  { icon: Film, value: siteConfig.stats.vodLibrary, label: "Movies & Series" },
  { icon: Sparkles, value: siteConfig.stats.quality, label: "Premium Quality" },
  { icon: MonitorSmartphone, value: siteConfig.stats.devices, label: "Devices Supported" },
  { icon: Headset, value: siteConfig.stats.support, label: "Customer Support" },
];

export function Stats() {
  return (
    <section className="relative -mt-10 sm:-mt-14">
      <Container>
        <div className="grid grid-cols-2 gap-6 rounded-2xl border border-border-soft bg-white p-8 shadow-xl shadow-brand-900/5 sm:p-10 md:grid-cols-5">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-3 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-xl font-extrabold text-ink sm:text-2xl">{value}</span>
              <span className="text-xs font-medium text-muted sm:text-sm">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
