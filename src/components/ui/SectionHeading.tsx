import { clsx } from "clsx";
import { Badge } from "./Badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      )}
    </div>
  );
}

export { Badge };
