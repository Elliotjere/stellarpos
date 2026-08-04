import { Receipt, Boxes, Users, UserCog, PieChart, Wallet, Building2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const groups = [
  {
    icon: Receipt,
    title: "Sales Management",
    items: ["Fast billing", "Barcode scanning", "Receipts & invoices", "Discounts & promotions", "Returns & refunds", "Quotations & proforma"],
  },
  {
    icon: Boxes,
    title: "Inventory Management",
    items: ["Real-time stock tracking", "Low stock alerts", "Purchase orders", "Supplier management", "Stock transfers", "Stock taking & variance"],
  },
  {
    icon: Users,
    title: "Customer Management",
    items: ["Customer database", "Loyalty tracking", "Purchase history", "Customer credit & balances"],
  },
  {
    icon: UserCog,
    title: "Employee Management",
    items: ["User roles", "Granular permissions", "Cashier shift management", "Activity audit trail"],
  },
  {
    icon: PieChart,
    title: "Reporting & Analytics",
    items: ["Sales reports", "Profit reports", "Inventory reports", "Expense reports", "Daily Z-reports", "Best & slow sellers"],
  },
  {
    icon: Wallet,
    title: "Financial Management",
    items: ["Expense recording", "Cash flow monitoring", "Purchase tracking", "Supplier payments"],
  },
  {
    icon: Building2,
    title: "Multi-Branch",
    items: ["Centralised reporting", "Branch management", "Per-branch stock & pricing", "Inter-branch transfers"],
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Features"
          title="Everything your business needs in one POS software"
          description="From the first sale of the morning to the profit report at closing time, StellarPOS covers the full operation of your business."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ icon: Icon, title, items }) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-navy text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
              <ul className="mt-4 space-y-2.5">
                {items.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
