import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";

const LOGO_ASPECT = 1200 / 339;

export function Logo({ className, height = 40 }: { className?: string; height?: number }) {
  return (
    <Link href="/" className={clsx("flex shrink-0 items-center", className)}>
      <Image
        src="/logo.png"
        alt="Xtreme HD IPTV"
        width={Math.round(height * LOGO_ASPECT)}
        height={height}
        priority
        className="h-auto w-auto"
        style={{ height, width: "auto" }}
      />
    </Link>
  );
}
