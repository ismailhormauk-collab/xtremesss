import { MessageCircle, Send } from "lucide-react";
import { telegramLink, whatsappLink } from "@/lib/site";

export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 sm:bottom-6 sm:right-6">
      <a
        href={telegramLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on Telegram"
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#2AABEE] text-white shadow-lg shadow-[#2AABEE]/40 transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2AABEE] sm:h-14 sm:w-14"
      >
        <Send className="h-6 w-6 sm:h-7 sm:w-7" fill="white" aria-hidden />
      </a>
      <a
        href={whatsappLink("Hi! I have a question about Xtreme HD.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform duration-200 hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:h-14 sm:w-14"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" fill="white" aria-hidden />
      </a>
    </div>
  );
}
