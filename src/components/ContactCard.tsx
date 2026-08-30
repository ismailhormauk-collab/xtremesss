import type { LucideIcon } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

export function ContactCard({
  icon: Icon,
  title,
  value,
  href,
  buttonLabel,
  variant,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
  buttonLabel: string;
  variant: "whatsapp" | "telegram";
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-border-soft bg-white p-8 text-center">
      <span
        className={
          "flex h-14 w-14 items-center justify-center rounded-2xl " +
          (variant === "whatsapp" ? "bg-[#25D366]/10 text-[#25D366]" : "bg-[#2AABEE]/10 text-[#2AABEE]")
        }
      >
        <Icon className="h-7 w-7" aria-hidden />
      </span>
      <h3 className="text-xl font-bold text-ink">{title}</h3>
      <p className="text-sm text-muted">
        {variant === "whatsapp"
          ? "Fastest way to reach us. Get a quick response, 24 hours a day."
          : "Message us on Telegram for quick support and order help."}
      </p>
      <div>
        <p className="text-lg font-bold text-brand-700">{value}</p>
        <p className="text-xs font-semibold text-emerald-600">24/7 Available</p>
      </div>
      <LinkButton href={href} external size="lg" variant={variant} className="w-full">
        {buttonLabel}
      </LinkButton>
    </div>
  );
}
