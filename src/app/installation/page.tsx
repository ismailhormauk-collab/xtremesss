import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Flame, Tv, Bot, Apple, LaptopMinimal, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LinkButton } from "@/components/ui/Button";
import { blogPosts } from "@/lib/blog";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "IPTV Installation Guide – Setup on Any Device" },
  description:
    "Learn how to set up your IPTV service on Firestick, Smart TV, Android, iPhone, Apple TV, Windows, Mac and other compatible devices.",
  alternates: { canonical: "/installation" },
};

const guides = [
  { icon: Sparkles, slug: "what-is-xtreme-hd-iptv", label: "Getting Started" },
  { icon: Flame, slug: "how-to-set-up-iptv-on-firestick", label: "Firestick" },
  { icon: Tv, slug: "how-to-set-up-iptv-on-a-smart-tv", label: "Smart TV" },
  { icon: Bot, slug: "how-to-install-iptv-on-android-tv", label: "Android" },
  { icon: Apple, slug: "how-to-set-up-iptv-on-apple-tv", label: "iPhone & Apple TV" },
  { icon: LaptopMinimal, slug: "how-to-set-up-iptv-on-a-computer", label: "Windows & Mac" },
];

const generalSteps = [
  {
    title: "Subscribe to a plan",
    description: "Choose your device count and subscription length on the pricing page and complete checkout.",
  },
  {
    title: "Receive your credentials",
    description: "Your login details or playlist URL are sent to your WhatsApp or Telegram, usually within minutes.",
  },
  {
    title: "Install a compatible app",
    description: "Install a suitable IPTV player app on your device from its official app store.",
  },
  {
    title: "Enter your details & stream",
    description: "Enter your credentials in the app to load your channels and on-demand library, then start watching.",
  },
];

export default function InstallationPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Installation Guides" }]} />
          <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Xtreme HD IPTV Installation Guides
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            Follow these guides to get Xtreme HD IPTV set up quickly on your device of choice.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-4">
          {generalSteps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center gap-3 text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="text-sm font-bold text-ink">{step.title}</h3>
              <p className="text-xs leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-20 text-center text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          Guides by Device
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map(({ icon: Icon, slug, label }) => {
            const post = blogPosts.find((p) => p.slug === slug);
            if (!post) return null;
            return (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className="group flex flex-col gap-3 rounded-2xl border border-border-soft bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-bold text-ink">{label}</h3>
                <p className="text-sm text-muted">{post.excerpt}</p>
                <span className="mt-1 flex items-center gap-1 text-sm font-semibold text-brand-700">
                  Read guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-border-soft bg-surface-soft p-10 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink">Need help with setup?</h2>
          <p className="max-w-md text-muted">
            Our support team can walk you through installation on your specific device.
          </p>
          <LinkButton
            href={whatsappLink()}
            external
            variant="whatsapp"
            size="lg"
            icon={<MessageCircle className="h-5 w-5" aria-hidden />}
          >
            Chat on WhatsApp
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
