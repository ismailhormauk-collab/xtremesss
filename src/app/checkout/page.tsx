import type { Metadata } from "next";
import { Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CheckoutClient } from "@/components/checkout/CheckoutClient";
import {
  getPlanDefinition,
  getPrice,
  isValidDeviceCount,
  isValidPlanId,
  type DeviceCount,
  type PlanId,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Complete Your IPTV Subscription",
  description:
    "Complete your Xtreme HD IPTV subscription order securely — confirm your plan, device count, and subscription duration before checkout.",
  robots: { index: false, follow: false },
};

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; devices?: string }>;
}) {
  const params = await searchParams;

  const requestedPlan = params.plan ?? null;
  const planId: PlanId = isValidPlanId(requestedPlan) ? requestedPlan : "1month";
  const devices: DeviceCount = isValidDeviceCount(params.devices ?? null)
    ? (Number(params.devices) as DeviceCount)
    : 1;

  const plan = getPlanDefinition(planId);
  const price = getPrice(devices, planId);

  return (
    <section className="bg-surface-soft py-12 sm:py-16">
      <Container className="max-w-5xl">
        <div className="mb-8 flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
          <span className="flex items-center gap-2 text-sm font-semibold text-brand-700">
            <Lock className="h-4 w-4" aria-hidden />
            256-bit SSL encrypted · Your data is always protected
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Secure Checkout
          </h1>
        </div>

        <CheckoutClient plan={plan} devices={devices} price={price} />
      </Container>
    </section>
  );
}
