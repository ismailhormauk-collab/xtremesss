"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Menu, X, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";
import { LinkButton } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/reseller", label: "Reseller" },
  { href: "/support", label: "Support" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "bg-brand-50 text-brand-700"
                  : "text-ink/80 hover:bg-brand-50/70 hover:text-brand-700"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <LinkButton
            href={whatsappLink()}
            external
            size="md"
            icon={<Sparkles className="h-4 w-4" aria-hidden />}
          >
            Free Trial
          </LinkButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={clsx(
          "overflow-hidden border-t border-border-soft bg-white transition-[max-height] duration-300 ease-in-out md:hidden",
          open ? "max-h-[26rem]" : "max-h-0 border-t-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "rounded-lg px-3 py-2.5 text-base font-medium",
                isActive(link.href) ? "bg-brand-50 text-brand-700" : "text-ink hover:bg-brand-50"
              )}
            >
              {link.label}
            </Link>
          ))}
          <LinkButton
            href={whatsappLink()}
            external
            size="md"
            className="mt-2 w-full"
            icon={<Sparkles className="h-4 w-4" aria-hidden />}
          >
            Free Trial
          </LinkButton>
        </nav>
      </div>
    </header>
  );
}
