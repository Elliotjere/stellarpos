import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroShop from "@/assets/hero-shop.jpg";
import heroAsset from "@/assets/stellarpos-hero.jpg.asset.json";
import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

const bullets = [
  "Sales & fast billing",
  "Inventory & stock control",
  "Customers & loyalty",
  "Employees & permissions",
  "Reports & profit tracking",
  "Purchases & expenses",
  "Multi-branch operations",
  "Secure cloud backups",
];

export function Hero() {
  return (
    <section id="home" className="surface-navy relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-40 -top-40 size-[38rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden="true"
      />
      <div className="section-shell relative grid gap-14 py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-24">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
            Made in Tanzania · Trusted by 500+ businesses
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-6xl">
            The Complete <span className="text-gradient-primary">POS System</span> for Businesses in Tanzania
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            StellarPOS is powerful point of sale and inventory management software built for Tanzanian
            retail shops, supermarkets, pharmacies and restaurants. Manage sales, stock, customers,
            employees, purchases, expenses, reports and multiple branches from one simple system.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-navy-foreground/80">
                <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              Request Demo <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <WhatsAppIcon className="size-4" aria-hidden="true" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="reveal relative" style={{ animationDelay: "120ms" }}>
          <img
            src={dashboard}
            alt="StellarPOS point of sale dashboard showing daily sales, profit and top selling products"
            width={1408}
            height={960}
            fetchPriority="high"
            className="w-full rounded-2xl shadow-elevated"
          />
          <img
            src={heroShop}
            alt="Shop owner in Dar es Salaam serving a customer using the StellarPOS point of sale terminal"
            width={1408}
            height={1008}
            loading="lazy"
            className="absolute -bottom-8 -left-4 hidden w-52 rounded-xl border-4 border-white/90 object-cover shadow-elevated sm:block lg:w-64"
          />
        </div>
      </div>
    </section>
  );
}
