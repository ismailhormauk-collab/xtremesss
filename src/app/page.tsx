import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { IncludedFeatures } from "@/components/home/IncludedFeatures";
import { DeviceCompatibility } from "@/components/DeviceCompatibility";
import { FeaturesMinimal } from "@/components/FeaturesMinimal";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { homeFaqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Xtreme HD IPTV | Premium Streaming Subscription",
  description:
    "Explore Xtreme HD IPTV subscription plans with flexible device options, HD and 4K streaming, easy setup and dedicated customer support.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <IncludedFeatures />
      <PricingSection />
      <DeviceCompatibility variant="full" />
      <FeaturesMinimal />
      <FAQSection items={homeFaqs} viewAllHref="/faq" />
      <CTASection />
    </>
  );
}
