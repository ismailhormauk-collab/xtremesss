"use client";

import { useState, type ComponentProps, type FormEvent, type ReactNode, type JSX } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import {
  ArrowLeft,
  CreditCard,
  Landmark,
  Bitcoin,
  Lock,
  ShieldCheck,
  Zap,
  Check,
  AlertCircle,
  type LucideIcon,
} from "lucide-react";
import { includedFeatures, type DeviceCount, type PlanDefinition } from "@/lib/pricing";
import { whatsappLink } from "@/lib/site";

type PaymentMethodId = "card" | "paypal" | "bank" | "crypto";
type IconComponent = (props: ComponentProps<"svg">) => JSX.Element;

const paymentMethods: { id: PaymentMethodId; label: string; icon: LucideIcon | IconComponent }[] = [
  { id: "card", label: "Credit Card", icon: CreditCard },
  { id: "paypal", label: "PayPal", icon: PayPalMark },
  { id: "bank", label: "Bank Transfer", icon: Landmark },
  { id: "crypto", label: "Crypto", icon: Bitcoin },
];

function PayPalMark(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7.5 20.5 9 4.5h5.7c2.9 0 4.6 1.6 4.3 4.2-.4 3.4-2.7 5.3-6 5.3h-2.3l-.8 6.5H7.5Z" />
    </svg>
  );
}

export function CheckoutClient({
  plan,
  devices,
  price,
}: {
  plan: PlanDefinition;
  devices: DeviceCount;
  price: number;
}) {
  const [method, setMethod] = useState<PaymentMethodId>("card");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const deviceLabel = `${devices} Device${devices > 1 ? "s" : ""}`;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedWhatsapp = whatsappNumber.trim();

    if (!trimmedName) {
      setFormError("Please enter your full name before continuing.");
      return;
    }
    if (!trimmedEmail) {
      setFormError("Please enter your email address before continuing.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
      setFormError("Please enter a valid email address before continuing.");
      return;
    }

    setFormError(null);

    const messageLines = [
      "Hi, I'd like to complete my order.",
      "",
      `Plan: ${plan.label}`,
      `Devices: ${deviceLabel}`,
      `Price: $${price}`,
      "",
      `Name: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
    ];
    if (trimmedWhatsapp) {
      messageLines.push(`WhatsApp: ${trimmedWhatsapp}`);
    }
    messageLines.push("", "Please send me the payment instructions.");

    window.open(whatsappLink(messageLines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px]">
      <div className="flex flex-col gap-6">
        <div className="rounded-2xl border border-border-soft bg-white p-6 sm:p-7">
          <div className="flex items-center gap-2 text-sm font-bold text-ink">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs text-white">
              1
            </span>
            Payment Method
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {paymentMethods.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setMethod(id)}
                aria-pressed={method === id}
                className={clsx(
                  "flex flex-col items-center gap-2 rounded-xl border px-3 py-4 text-xs font-semibold transition-colors",
                  method === id
                    ? "border-brand-500 bg-brand-50 text-brand-700"
                    : "border-border-soft text-muted hover:border-brand-200"
                )}
              >
                <Icon className="h-5 w-5" aria-hidden />
                {label}
              </button>
            ))}
          </div>
        </div>

        <form
          className="rounded-2xl border border-border-soft bg-white p-6 sm:p-7"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="flex items-center gap-2 text-sm font-bold text-ink">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs text-white">
              2
            </span>
            Your Details
          </div>

          <div className="mt-5 flex flex-col gap-4">
            <Field label="Full Name" htmlFor="fullName">
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="John Smith"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-xl border border-border-soft px-4 py-3 text-sm text-ink placeholder:text-muted-2 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </Field>
            <Field label="Email Address" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-border-soft px-4 py-3 text-sm text-ink placeholder:text-muted-2 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </Field>
            <Field label="WhatsApp Number" htmlFor="whatsapp" optional>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                autoComplete="tel"
                placeholder="+44 7000 000 000"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                className="w-full rounded-xl border border-border-soft px-4 py-3 text-sm text-ink placeholder:text-muted-2 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </Field>
            <p className="text-xs text-muted-2">
              Your IPTV credentials will be delivered to your WhatsApp or Telegram within minutes of
              payment.
            </p>
          </div>

          {formError && (
            <div
              role="alert"
              className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              {formError}
            </div>
          )}

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm shadow-brand-600/30 transition-colors hover:bg-brand-700 active:scale-[0.99]"
          >
            <Lock className="h-4 w-4" aria-hidden />
            Complete Order — ${price}
          </button>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-2">
            <span className="flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5" aria-hidden /> SSL Secured
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden /> Encrypted
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5" aria-hidden /> Instant Access
            </span>
          </div>
        </form>
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
          <TrustRow icon={Zap} title="Instant Activation" description="Access within minutes of payment" />
          <TrustRow icon={ShieldCheck} title="Secure & Private" description="SSL encrypted, data never shared" />
          <TrustRow icon={Lock} title="24/7 Support" description="Expert help via WhatsApp & Telegram, always" last />
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

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-xs font-bold uppercase tracking-wide text-muted-2">
        {label} {optional && <span className="font-normal normal-case text-muted-2">(optional)</span>}
      </label>
      {children}
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
    <div className={clsx("flex items-start gap-3 py-2.5", !last && "border-b border-border-soft")}>
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
