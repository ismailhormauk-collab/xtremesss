export type DeviceCount = 1 | 2 | 3 | 4;
export type PlanId = "1month" | "3months" | "6months" | "12months";

export interface PlanDefinition {
  id: PlanId;
  label: string;
  months: number;
  popular?: boolean;
}

export const planDurations: PlanDefinition[] = [
  { id: "1month", label: "1 Month", months: 1 },
  { id: "3months", label: "3 Months", months: 3 },
  { id: "6months", label: "6 Months", months: 6 },
  { id: "12months", label: "12 Months", months: 12, popular: true },
];

export const deviceOptions: DeviceCount[] = [1, 2, 3, 4];

export const deviceLabels: Record<DeviceCount, string> = {
  1: "Base Plan · 1 Simultaneous Device",
  2: "2 Devices · Save ~10%",
  3: "3 Devices · Save ~15%",
  4: "4 Devices · Save ~20%",
};

export const deviceTabLabels: Record<DeviceCount, string> = {
  1: "1 Device",
  2: "2 Devices",
  3: "3 Devices",
  4: "4 Devices",
};

// Structured pricing table — update prices here only.
export const pricingTable: Record<DeviceCount, Record<PlanId, number>> = {
  1: { "1month": 23, "3months": 41, "6months": 52, "12months": 76 },
  2: { "1month": 42, "3months": 73, "6months": 94, "12months": 138 },
  3: { "1month": 59, "3months": 105, "6months": 134, "12months": 192 },
  4: { "1month": 75, "3months": 131, "6months": 168, "12months": 243 },
};

export const includedFeatures = [
  "50,000+ Live Channels",
  "100,000+ Movies & Series",
  "HD & 4K Streaming",
  "EPG TV Guide",
  "24/7 WhatsApp & Telegram Support",
  "Instant Activation",
  "No Contract",
];

export function getPrice(devices: DeviceCount, plan: PlanId): number {
  return pricingTable[devices][plan];
}

export function getPlanDefinition(plan: PlanId): PlanDefinition {
  const found = planDurations.find((p) => p.id === plan);
  if (!found) throw new Error(`Unknown plan: ${plan}`);
  return found;
}

export function isValidDeviceCount(value: string | null): value is `${DeviceCount}` {
  return value === "1" || value === "2" || value === "3" || value === "4";
}

export function isValidPlanId(value: string | null): value is PlanId {
  return value === "1month" || value === "3months" || value === "6months" || value === "12months";
}
