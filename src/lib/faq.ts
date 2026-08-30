export interface FaqItem {
  question: string;
  answer: string;
}

export const homeFaqs: FaqItem[] = [
  {
    question: "What is IPTV and how does it work?",
    answer:
      "IPTV delivers TV channels over your internet connection instead of cable or satellite. With Xtreme HD IPTV you get 50,000+ live channels in HD and 4K — no dish, no cable box, no contract.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "Xtreme HD IPTV works on Firestick, Smart TV, Android, iPhone & iPad, Apple TV, Windows & Mac, Android TV Box and MAG Box. If you don't see your device, message us on WhatsApp and we'll confirm compatibility.",
  },
  {
    question: "How quickly do I get access after subscribing?",
    answer:
      "Activation is instant in most cases. Once your payment is confirmed, your credentials are sent to your WhatsApp or Telegram within minutes.",
  },
  {
    question: "Do you include sports channels?",
    answer:
      "Yes, our live channel lineup includes a wide range of sports, news and entertainment channels alongside international programming.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, message us on WhatsApp or Telegram to request a free trial and see the service on your device before subscribing.",
  },
];

export const fullFaqs: FaqItem[] = [
  ...homeFaqs,
  {
    question: "How many devices can I use?",
    answer:
      "You can choose from 1, 2, 3 or 4 simultaneous device plans on our pricing page. Each plan sets how many devices can stream at the same time under one subscription.",
  },
  {
    question: "How do I install the service?",
    answer:
      "After subscribing, you'll receive setup instructions for your device along with your credentials. We also publish device-specific installation guides on our blog, and our support team can walk you through the process on WhatsApp or Telegram.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Our support team is available 24/7 via WhatsApp and Telegram for setup help, technical questions, renewals and billing queries. Visit our Support page for direct links.",
  },
  {
    question: "Can I cancel or change my plan?",
    answer:
      "Our plans are one-time payments for the selected duration with no ongoing contract, so there's nothing to cancel. You're free to choose a different plan or device count whenever you renew.",
  },
  {
    question: "What content should I stream with my subscription?",
    answer:
      "We recommend using Xtreme HD IPTV to access content you are authorized to view. Availability of specific channels or content may vary and is not guaranteed.",
  },
];
