"use client";

import { useState } from "react";
import { clsx } from "clsx";
import {
  deviceOptions,
  deviceLabels,
  deviceTabLabels,
  planDurations,
  getPrice,
  type DeviceCount,
} from "@/lib/pricing";
import { PricingCard } from "./PricingCard";

export function PricingSelector() {
  const [devices, setDevices] = useState<DeviceCount>(1);

  return (
    <div>
      <div className="mx-auto flex w-fit flex-wrap justify-center gap-1 rounded-full border border-border-soft bg-white p-1.5 shadow-sm">
        {deviceOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setDevices(option)}
            aria-pressed={devices === option}
            className={clsx(
              "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
              devices === option ? "bg-brand-600 text-white shadow-sm" : "text-muted hover:text-brand-700"
            )}
          >
            {deviceTabLabels[option]}
          </button>
        ))}
      </div>

      <p className="mt-4 text-center text-sm font-medium text-muted-2">{deviceLabels[devices]}</p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {planDurations.map((plan) => (
          <PricingCard key={plan.id} plan={plan} price={getPrice(devices, plan.id)} devices={devices} />
        ))}
      </div>
    </div>
  );
}
