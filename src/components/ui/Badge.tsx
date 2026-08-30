import { clsx } from "clsx";
import type { ReactNode } from "react";

export function Badge({
  children,
  className,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "onDark";
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide",
        tone === "light"
          ? "border-brand-200 bg-brand-50 text-brand-700"
          : "border-white/25 bg-white/10 text-white backdrop-blur-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
