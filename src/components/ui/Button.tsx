import { clsx } from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "whatsapp" | "telegram" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-sm shadow-brand-600/30 hover:bg-brand-700 focus-visible:outline-brand-600",
  secondary:
    "bg-white text-brand-700 border border-border-soft hover:bg-brand-50 focus-visible:outline-brand-600",
  outline:
    "bg-transparent text-white border border-white/40 hover:bg-white/10 focus-visible:outline-white",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1fb955] focus-visible:outline-[#25D366] shadow-sm shadow-[#25D366]/30",
  telegram:
    "bg-[#2AABEE] text-white hover:bg-[#1f95d1] focus-visible:outline-[#2AABEE] shadow-sm shadow-[#2AABEE]/30",
  ghost: "bg-brand-50 text-brand-700 hover:bg-brand-100 focus-visible:outline-brand-600",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  external?: boolean;
}

interface ButtonElementProps extends BaseProps {
  type?: "button" | "submit";
  onClick?: () => void;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full text-center font-semibold transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98]";

export function LinkButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  external,
}: LinkButtonProps) {
  const classes = clsx(baseClasses, variantClasses[variant], sizeClasses[size], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {icon}
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {icon}
      {children}
    </Link>
  );
}

export function ButtonEl({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  type = "button",
  onClick,
}: ButtonElementProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)}
    >
      {icon}
      {children}
    </button>
  );
}
