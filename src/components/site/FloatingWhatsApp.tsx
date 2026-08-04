import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, SITE } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with StellarPOS on WhatsApp at ${SITE.phoneDisplay}`}
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-success text-white shadow-elevated transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
