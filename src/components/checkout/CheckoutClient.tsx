import Link from "next/link";
import { ArrowLeft, MessageCircle, ShieldCheck, Zap, Check, type LucideIcon } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { includedFeatures, type DeviceCount, type PlanDefinition } from "@/lib/pricing";
import { whatsappLink } from "@/lib/site";

export function CheckoutClient({
  plan,
  devices,
  price,
}: {
  plan: PlanDefinition;
  devices: DeviceCount;
  price: number;
}) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-border-soft bg-white p-8 text-center sm:p-10">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366]">
            <MessageCircle className="h-7 w-7" aria-hidden />
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-extrabold text-ink sm:text-2xl">
              Complete Your Order on WhatsApp
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Message our team on WhatsApp with the plan you&apos;d like, and we&apos;ll confirm
              your order and send payment instructions directly.
            </p>
          </div>

          <LinkButton
            href={whatsappLink()}
            external
            size="lg"
            variant="whatsapp"
            icon={<MessageCircle className="h-5 w-5" aria-hidden />}
            className="w-full sm:w-auto"
          >
            Chat on WhatsApp to Order — ${price}
          </LinkButton>

          <p className="text-xs text-muted-2">
            You&apos;ll be taken straight to WhatsApp to chat with our team.
          </p>
        </div>
      </div>

      <aside className="flex flex-col gap-4">
        <div className="rounded-2xl border border-border-soft bg-white p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-2">Order Summary</p>
          <div className="mt-4 rounded-xl bg-surface-soft p-4">
            <p className="text-base font-extrabold text-ink">{plan.label} Plan</p>
            <p className="text-sm text-muted">
              {devices} Device{devices > 1 ? "s" : ""} · Base Plan
            </p>
            <div className="mt-3 flex items-end gap-1">
              <span className="text-lg font-bold text-ink">$</span>
              <span className="text-3xl font-extrabold leading-none text-ink">{price}</span>
              <span className="pb-0.5 text-xs text-muted-2">/ {plan.months === 1 ? "month" : `${plan.months} months`}</span>
            </div>
            <p className="mt-1 text-xs font-medium text-brand-700">
              ${(price / plan.months).toFixed(0)}/mo
            </p>
          </div>

          <ul className="mt-4 flex flex-col gap-2.5">
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-ink">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                {feature}
              </li>
            ))}
            <li className="flex items-start gap-2 text-sm text-ink">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
              {devices} Simultaneous Device{devices > 1 ? "s" : ""}
            </li>
          </ul>

          <div className="mt-5 flex flex-col gap-2 border-t border-border-soft pt-4 text-sm">
            <div className="flex justify-between text-muted">
              <span>Subtotal</span>
              <span className="font-medium text-ink">${price}</span>
            </div>
            <div className="flex justify-between text-muted">
              <span>Setup fee</span>
              <span className="font-medium text-brand-600">Free</span>
            </div>
            <div className="mt-2 flex justify-between border-t border-border-soft pt-3 text-base font-extrabold text-ink">
              <span>Total due today</span>
              <div className="text-right">
                <div>${price}</div>
                <div className="text-xs font-medium text-muted-2">
                  ${(price / plan.months).toFixed(0)}/mo
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border-soft bg-white p-6">
          <TrustRow icon={Zap} title="Instant Activation" description="Access within minutes of confirming your order" />
          <TrustRow icon={ShieldCheck} title="Secure & Private" description="Your information is never shared" />
          <TrustRow icon={MessageCircle} title="24/7 Support" description="Expert help via WhatsApp & Telegram, always" last />
        </div>

        <Link
          href="/pricing"
          className="flex items-center justify-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-brand-700"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to Pricing
        </Link>
      </aside>
    </div>
  );
}

function TrustRow({
  icon: Icon,
  title,
  description,
  last,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  last?: boolean;
}) {
  return (
    <div className={`flex items-start gap-3 py-2.5 ${!last ? "border-b border-border-soft" : ""}`}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div>
        <p className="text-sm font-bold text-ink">{title}</p>
        <p className="text-xs text-muted">{description}</p>
      </div>
    </div>
  );
}
