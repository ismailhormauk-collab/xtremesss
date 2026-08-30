import Link from "next/link";
import { MessageCircle, Send } from "lucide-react";
import { Logo } from "@/components/Logo";
import { siteConfig, telegramLink, whatsappLink } from "@/lib/site";

const navigation = [
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Installation Guides", href: "/installation" },
  { label: "Reseller", href: "/reseller" },
  { label: "Support", href: "/support" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border-soft bg-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Premium streaming with HD &amp; 4K quality across compatible devices, with dedicated
            customer support.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-muted-2">
            Navigation
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted transition-colors hover:text-brand-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-muted-2">
            Contact Us
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted transition-colors hover:text-brand-700"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-soft">
                  <MessageCircle className="h-4 w-4" aria-hidden />
                </span>
                {siteConfig.contact.whatsappNumber}
              </a>
            </li>
            <li>
              <a
                href={telegramLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted transition-colors hover:text-brand-700"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-soft">
                  <Send className="h-4 w-4" aria-hidden />
                </span>
                {siteConfig.contact.telegramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-soft">
        <div className="mx-auto w-full max-w-7xl px-5 py-6 text-center text-xs text-muted-2 sm:px-6 lg:px-8">
          © {year} Xtreme HD IPTV. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
