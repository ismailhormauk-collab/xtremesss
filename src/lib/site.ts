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
    whatsappNumber: "+34 613 836 698",
    whatsappNumberIntl: "34613836698",
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

/**
 * Direct WhatsApp chat link. Deliberately takes no message argument and
 * never appends a query string — every WhatsApp CTA on the site must open
 * straight to an empty chat with no pre-filled text.
 */
export function whatsappLink() {
  return `https://wa.me/${siteConfig.contact.whatsappNumberIntl}`;
}

export function telegramLink() {
  return siteConfig.contact.telegramUrl;
}
