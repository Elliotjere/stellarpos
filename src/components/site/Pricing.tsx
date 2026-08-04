import { Check, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { WHATSAPP_URL } from "@/lib/site";

export const PLANS = [
  {
    name: "Starter",
    price: "360,000",
    tagline: "Suitable for small businesses and single shops.",
    features: [
      "1 branch, 2 user accounts",
      "Sales, billing & receipts",
      "Barcode scanning & printing",
      "Inventory & low stock alerts",
      "Daily sales & profit reports",
      "Setup, training & support",
    ],
  },
  {
    name: "Business",
    price: "600,000",
    tagline: "Suitable for growing businesses with more staff.",
    popular: true,
    features: [
      "Up to 2 branches, 6 user accounts",
      "Everything in Starter",
      "Customer database & loyalty",
      "Purchases, suppliers & expenses",
      "Employee roles & permissions",
      "Bulk SMS integration",
      "Cloud backups & offline mode",
    ],
  },
  {
    name: "Enterprise",
    price: "960,000",
    tagline: "Suitable for larger organisations with advanced needs.",
    features: [
      "Unlimited branches & users",
      "Everything in Business",
      "Centralised multi-branch reporting",
      "Inter-branch stock transfers",
      "Advanced profit & audit reports",
      "Priority on-site support",
      "Custom reports & integrations",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple POS system pricing in Tanzania"
          description="Transparent annual pricing in Tanzanian Shillings. Every plan includes installation, staff training, updates and local support."
        />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map((p) => (
            <article
              key={p.name}
              className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                p.popular
                  ? "surface-navy border-primary/40 shadow-elevated lg:-mt-4 lg:pb-12"
                  : "border-border bg-card shadow-card"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className={`text-lg font-bold ${p.popular ? "text-navy-foreground" : "text-foreground"}`}>{p.name}</h3>
              <p className={`mt-1 text-sm ${p.popular ? "text-navy-foreground/70" : "text-muted-foreground"}`}>{p.tagline}</p>
              <p className="mt-6 flex items-baseline gap-1.5">
                <span className={`text-xs font-semibold ${p.popular ? "text-navy-foreground/70" : "text-muted-foreground"}`}>TZS</span>
                <span className={`text-4xl font-extrabold ${p.popular ? "text-navy-foreground" : "text-foreground"}`}>{p.price}</span>
                <span className={`text-sm ${p.popular ? "text-navy-foreground/70" : "text-muted-foreground"}`}>/year</span>
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${p.popular ? "text-navy-foreground/85" : "text-muted-foreground"}`}>
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  p.popular
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-navy text-navy-foreground"
                }`}
              >
                <MessageCircle className="size-4" aria-hidden="true" /> Get Started
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Need POS hardware too? We supply barcode scanners, thermal receipt printers, cash drawers and label printers.
        </p>
      </div>
    </section>
  );
}
