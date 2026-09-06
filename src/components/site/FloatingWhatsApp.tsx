import { WHATSAPP_URL, SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with StellarPOS on WhatsApp at ${SITE.phoneDisplay}`}
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-success text-primary-foreground shadow-elevated transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <WhatsAppIcon className="size-7" aria-hidden="true" />
    </a>
  );
}
