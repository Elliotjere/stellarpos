import { MessageSquareText, BellRing, CreditCard, Mail, ScanLine, Printer, Archive, Tags, ReceiptText } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const integrations = [
  { icon: MessageSquareText, title: "Bulk SMS Platforms", text: "Run promotional campaigns to your customer database." },
  { icon: BellRing, title: "Customer Notifications", text: "Automatic SMS on purchase, delivery and loyalty rewards." },
  { icon: CreditCard, title: "Payment Reminders", text: "Chase outstanding customer balances automatically." },
  { icon: Mail, title: "Email Notifications", text: "Email receipts, invoices and daily summaries." },
  { icon: ScanLine, title: "Barcode Scanners", text: "Plug-and-play with all standard USB and wireless scanners." },
  { icon: ReceiptText, title: "Receipt Printers", text: "Print instantly to 58mm and 80mm receipt printers." },
  { icon: Archive, title: "Cash Drawers", text: "Drawer opens automatically on every cash sale." },
  { icon: Tags, title: "Label Printers", text: "Print shelf labels and product barcodes in bulk." },
  { icon: Printer, title: "Thermal Printers", text: "Fast, quiet thermal printing for busy counters." },
];

export function Integrations() {
  return (
    <section id="integrations" className="surface-navy py-20 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Integrations</span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-foreground sm:text-4xl">
            Works with the hardware and services you already use
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-foreground/70">
            StellarPOS connects to Tanzanian bulk SMS providers and to the everyday POS hardware sold across
            Dar es Salaam — so setup is quick and nothing goes to waste.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-primary/50"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-navy-foreground">{title}</h3>
                <p className="mt-1 text-sm text-navy-foreground/65">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
