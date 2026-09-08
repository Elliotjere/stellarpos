import { Link } from "@tanstack/react-router";
import { Store, ShoppingCart, Pill, UtensilsCrossed, Coffee, Cpu, Hammer, Shirt, Sparkles, Truck, Gem, Wine, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import supermarket from "@/assets/supermarket.jpg";
import restaurant from "@/assets/restaurant.jpg";

const industries = [
  { icon: Store, title: "Retail Shops", text: "Retail POS Tanzania with barcode billing and daily profit tracking." },
  { icon: ShoppingCart, title: "Supermarkets", text: "Multiple tills, fast queues and tight stock control." },
  { icon: Pill, title: "Pharmacies", text: "Batch and expiry tracking with supplier records." },
  { icon: UtensilsCrossed, title: "Restaurants", text: "Restaurant POS Tanzania with table orders and kitchen tickets." },
  { icon: Coffee, title: "Cafes", text: "Quick service billing and daily cash reconciliation." },
  { icon: Cpu, title: "Electronics Stores", text: "Serial number tracking, warranties and quotations." },
  { icon: Hammer, title: "Hardware Stores", text: "Bulk units, price levels and credit customers." },
  { icon: Shirt, title: "Fashion Stores", text: "Size, colour and style variants in one product." },
  { icon: Sparkles, title: "Beauty Shops", text: "Products plus services with loyalty rewards.", href: "/beauty-shops" },
  { icon: Gem, title: "Jewelry Shops", text: "Gold priced by weight and karat with item-level tracking.", href: "/jewelry-shops" },
  { icon: Wine, title: "Liquor Stores", text: "Bottle and crate units, fast bar billing and stock control.", href: "/liquor-stores" },
  { icon: Truck, title: "Wholesale Businesses", text: "Wholesale pricing, deliveries and multi-branch stock." },
];


export function Industries() {
  return (
    <section id="industries" className="bg-secondary/60 py-20 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Industries"
          title="Industries we serve across Tanzania"
          description="StellarPOS is configured for your trade — not a generic template. We set up products, pricing and reports the way your industry works."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_auto]">
          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map(({ icon: Icon, title, text, href }) => (
              <article key={title} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  {href && (
                    <Link
                      to={href}
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                    >
                      POS for {title.toLowerCase()} <ArrowRight className="size-3" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="hidden w-72 flex-col gap-4 lg:flex">
            <img
              src={supermarket}
              alt="Cashier scanning groceries at a supermarket checkout in Tanzania using a POS system"
              width={1200}
              height={800}
              loading="lazy"
              className="h-1/2 w-full rounded-2xl object-cover shadow-card"
            />
            <img
              src={restaurant}
              alt="Restaurant waiter taking an order on a tablet POS system in a Tanzanian cafe"
              width={1200}
              height={800}
              loading="lazy"
              className="h-1/2 w-full rounded-2xl object-cover shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
