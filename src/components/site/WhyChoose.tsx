import {
  MousePointerClick, Zap, Boxes, ScanBarcode, Users, BarChart3,
  UserCog, Building2, CloudUpload, WifiOff, Smartphone, BadgeDollarSign,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const benefits = [
  { icon: MousePointerClick, title: "Easy to Use", text: "Clean interface your cashiers master in under an hour, in English or Swahili." },
  { icon: Zap, title: "Fast Checkout", text: "Complete a sale in seconds and keep queues moving during peak hours." },
  { icon: Boxes, title: "Inventory Management", text: "Know exactly what is in stock, what is running out and what is not selling." },
  { icon: ScanBarcode, title: "Barcode Support", text: "Scan, generate and print barcodes and shelf labels for every product." },
  { icon: Users, title: "Customer Management", text: "Build a customer database with purchase history, credit and loyalty points." },
  { icon: BarChart3, title: "Sales Reports", text: "Daily, weekly and monthly sales and profit reports on any device." },
  { icon: UserCog, title: "Multi-user Access", text: "Give each cashier, storekeeper and manager only the rights they need." },
  { icon: Building2, title: "Multi-branch Management", text: "Run all your shops from one dashboard with consolidated reporting." },
  { icon: CloudUpload, title: "Secure Cloud Backups", text: "Your business data is encrypted and backed up automatically every day." },
  { icon: WifiOff, title: "Offline Capability", text: "Keep selling when the internet or power goes down; data syncs later." },
  { icon: Smartphone, title: "Mobile Friendly", text: "Check today's sales from your phone wherever you are." },
  { icon: BadgeDollarSign, title: "Affordable Pricing", text: "Transparent annual pricing in TZS with no hidden charges." },
];

export function WhyChoose() {
  return (
    <section id="why" className="bg-secondary/60 py-20 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why StellarPOS"
          title="Why businesses in Tanzania choose StellarPOS"
          description="A POS software built around how Tanzanian shops, supermarkets, pharmacies and restaurants actually trade — with local installation, training and support."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
