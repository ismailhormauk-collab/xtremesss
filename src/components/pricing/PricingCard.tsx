import { Check, Star } from "lucide-react";
import { clsx } from "clsx";
import { LinkButton } from "@/components/ui/Button";
import { includedFeatures } from "@/lib/pricing";
import type { DeviceCount, PlanDefinition } from "@/lib/pricing";

export function PricingCard({
  plan,
  price,
  devices,
}: {
  plan: PlanDefinition;
  price: number;
  devices: DeviceCount;
}) {
  const monthly = (price / plan.months).toFixed(0);

  return (
    <div
      className={clsx(
        "relative flex h-full flex-col rounded-2xl border bg-white p-6 transition-all duration-200 sm:p-7",
        plan.popular
          ? "border-brand-300 shadow-xl shadow-brand-900/10 ring-1 ring-brand-200"
          : "border-border-soft hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand-600 px-4 py-1.5 text-xs font-bold text-white shadow-md shadow-brand-600/30">
          <Star className="h-3.5 w-3.5 fill-white" aria-hidden />
          Most Popular
        </span>
      )}

      <h3 className="text-lg font-extrabold text-ink">{plan.label} Subscription</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-2">
        One-Time Payment
      </p>

      <div className="mt-5 flex items-end gap-1">
        <span className="text-2xl font-bold text-ink">$</span>
        <span className="text-5xl font-extrabold leading-none tracking-tight text-ink">
          {price}
        </span>
      </div>
      <p className="mt-1.5 text-xs text-muted-2">${monthly}/mo equivalent</p>

      <span className="mt-4 inline-flex w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
        {devices === 1 ? "Base Plan" : `${devices} Devices`}
      </span>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {includedFeatures.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-ink">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
            {feature}
          </li>
        ))}
        <li className="flex items-start gap-2.5 text-sm text-ink">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
          {devices} Simultaneous {devices === 1 ? "Device" : "Devices"}
        </li>
      </ul>

      <LinkButton
        href={`/checkout?plan=${plan.id}&devices=${devices}`}
        size="lg"
        variant={plan.popular ? "primary" : "secondary"}
        className="mt-7 w-full"
      >
        Subscribe
      </LinkButton>
    </div>
  );
}
