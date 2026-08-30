export const siteConfig = {
  name: "Xtreme HD IPTV",
  shortName: "HD IPTV",
  url: "https://www.iptvxtremehd.net",
  description:
    "Xtreme HD IPTV is a premium IPTV subscription service offering live channels, movies and series in HD and 4K across compatible devices, with flexible plans and dedicated customer support.",
  keywords: [
    "xtreme hd iptv",
    "xtreme hd iptv subscription",
    "xtreme hd iptv service",
    "xtreme hd iptv plans",
    "xtreme hd iptv pricing",
    "xtreme hd iptv reseller",
    "xtreme hd iptv support",
    "xtreme hd iptv installation",
  ],
  contact: {
    whatsappNumber: "+44 7576 599069",
    whatsappNumberIntl: "447576599069",
    telegramHandle: "@pulseiptv4k",
    telegramUrl: "https://t.me/pulseiptv4k",
  },
  stats: {
    liveChannels: "50,000+",
    vodLibrary: "100,000+",
    quality: "HD / FHD / 4K",
    devices: "All Devices",
    support: "24/7",
  },
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.contact.whatsappNumberIntl}`;
  if (!message) return base;
  // encodeURIComponent leaves "+" unescaped, which some parsers read back as a
  // space — escape it explicitly so literal "+" in message content (e.g. a
  // customer's phone number) survives intact.
  const encoded = encodeURIComponent(message).replace(/\+/g, "%2B");
  return `${base}?text=${encoded}`;
}

export function telegramLink() {
  return siteConfig.contact.telegramUrl;
}
