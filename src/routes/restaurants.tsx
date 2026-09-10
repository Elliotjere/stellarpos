import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  ChefHat,
  Printer,
  Receipt,
  ShieldCheck,
  UtensilsCrossed,
  Users,
  WifiOff,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PLANS } from "@/components/site/Pricing";
import { SITE, WHATSAPP_URL } from "@/lib/site";
import restaurantHero from "@/assets/restaurant-hero.jpg";
import restaurantCounter from "@/assets/restaurant-counter.jpg";
import restaurantTables from "@/assets/restaurant-tables.jpg";

const TITLE = "POS System for Restaurants in Tanzania | StellarPOS";
const DESCRIPTION =
  "StellarPOS is the restaurant POS system in Tanzania for table orders, kitchen tickets, fast billing, waiter accounts and ingredient stock control. See daily profit from your phone. From TZS 360,000/year.";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Table & order management",
    text: "Open orders per table, move or merge tables, split bills between guests and see which tables are occupied, waiting or ready to pay.",
  },
  {
    icon: Printer,
    title: "Kitchen order tickets",
    text: "Orders print automatically in the kitchen or bar the moment the waiter sends them — no running paper slips, no missed items.",
  },
  {
    icon: Receipt,
    title: "Fast billing & receipts",
    text: "Generate the bill in seconds, split by item or by guest, apply discounts with approval and print professional receipts for every customer.",
  },
  {
    icon: ChefHat,
    title: "Menu, portions & modifiers",
    text: "Build your full menu with portions, extras and modifiers — half plate, extra chips, no spice — each with its own price.",
  },
  {
    icon: Boxes,
    title: "Ingredient & stock control",
    text: "Track food and drink stock, deduct ingredients as meals sell, and get low stock alerts before the kitchen runs out at peak hour.",
  },
  {
    icon: Users,
    title: "Waiter accounts & performance",
    text: "Every order is tied to a waiter account. See sales per waiter, track voids and cancellations, and reward your best performers.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    text: "Keep taking orders during power cuts or internet outages. Sales sync automatically to the cloud once the connection returns.",
  },
  {
    icon: BarChart3,
    title: "Sales & profit reports",
    text: "Best-selling dishes, busiest hours, daily cash-up and true profit per item — all in reports you can check from your phone.",
  },
];

const faqs = [
  {
    q: "What is the best POS system for restaurants in Tanzania?",
    a: "StellarPOS is built for restaurants, cafes and bars in Tanzania. It handles table orders, kitchen order printing, fast billing, waiter accounts, ingredient stock control and profit reports. It is installed, trained and supported locally by Stellar Technologies Limited in Dar es Salaam, in Swahili or English.",
  },
  {
    q: "Can StellarPOS send orders straight to the kitchen?",
    a: "Yes. When a waiter takes an order, it prints automatically on the kitchen or bar printer as a clear order ticket with the table number, items and any special instructions. The kitchen starts cooking immediately and nothing gets lost or misread.",
  },
  {
    q: "Does StellarPOS support table billing and split bills?",
    a: "Yes. You manage every table from one screen — open an order, add items as guests order, and at the end split the bill by item or by guest, apply discounts where allowed, and print the receipt in seconds.",
  },
  {
    q: "Can I track food and drink stock in my restaurant?",
    a: "Yes. StellarPOS tracks your food and beverage stock, can deduct ingredient quantities as meals are sold, and alerts you when stock is low so you restock before the dinner rush. Stock-taking reports show variances and help stop losses.",
  },
  {
    q: "How much does a restaurant POS system cost in Tanzania?",
    a: `StellarPOS starts at TZS ${PLANS[0]!.price} per year for the Starter plan, TZS ${PLANS[1]!.price} per year for the Business plan and TZS ${PLANS[2]!.price} per year for the Enterprise plan. Every plan includes installation help, staff training, updates and support with no hidden monthly fees.`,
  },
  {
    q: "Do you install restaurant POS systems outside Dar es Salaam?",
    a: "Yes. We install and train your team on site in Dar es Salaam and countrywide, including Arusha, Mwanza, Dodoma, Mbeya, Zanzibar and Morogoro. We also supply thermal receipt printers, kitchen printers, cash drawers and barcode scanners.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "StellarPOS for Restaurants in Tanzania",
  provider: { "@type": "Organization", name: SITE.company, url: SITE.domain },
  serviceType: "Point of Sale Software",
  areaServed: { "@type": "Country", name: "Tanzania" },
  description:
    "Point of sale and management software for restaurants, cafes and bars in Tanzania: table orders, kitchen order printing, fast billing, waiter accounts, ingredient stock control and profit reports.",
  offers: {
    "@type": "Offer",
    price: PLANS[0]!.price.replace(/,/g, ""),
    priceCurrency: "TZS",
    availability: "https://schema.org/InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.domain}/` },
    { "@type": "ListItem", position: 2, name: "POS for Restaurants", item: `${SITE.domain}/restaurants` },
  ],
};

export const Route = createFileRoute("/restaurants")({
  component: RestaurantsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      {
        name: "keywords",
        content:
          "POS system for restaurants Tanzania, restaurant POS software Tanzania, restaurant management system Tanzania, cafe POS Tanzania, kitchen order system Tanzania, restaurant billing software Dar es Salaam",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/restaurants" },
      { property: "og:locale", content: "en_TZ" },
      { property: "og:site_name", content: "StellarPOS Tanzania" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/restaurants" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(pageSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
});

function RestaurantsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="surface-navy relative overflow-hidden">
          <div
            className="pointer-events-none absolute -right-40 -top-40 size-[38rem] rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--gradient-primary)" }}
            aria-hidden="true"
          />
          <div className="section-shell relative grid gap-14 py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-24">
            <div className="reveal">
              <nav aria-label="Breadcrumb" className="text-xs text-navy-foreground/60">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span aria-hidden="true"> / </span>
                <span>POS for Restaurants</span>
              </nav>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                <UtensilsCrossed className="size-3.5" aria-hidden="true" /> For restaurants, cafes & bars
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-6xl">
                POS System for <span className="text-gradient-primary">Restaurants</span> in Tanzania
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
                Serve faster, bill accurately and know your profit. StellarPOS gives your restaurant table
                orders, automatic kitchen tickets, split billing, waiter accounts and ingredient stock
                control — installed and supported locally in Tanzania.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {["Table orders & split bills", "Automatic kitchen tickets", "Waiter accounts & reports", "Ingredient stock control"].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-navy-foreground/80">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
                >
                  <WhatsAppIcon className="size-4" aria-hidden="true" /> Request a Free Demo
                </a>
                <Link
                  to="/"
                  hash="pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  See Pricing <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="reveal relative" style={{ animationDelay: "120ms" }}>
              <img
                src={restaurantHero}
                alt="Waiter taking an order on a tablet POS system in a busy Tanzanian restaurant with customers dining"
                width={1200}
                height={800}
                fetchPriority="high"
                className="w-full rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-28">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Features"
              title="POS software made for restaurant service"
              description="From the first order to the final bill, StellarPOS keeps your floor, kitchen and cashier working as one team — even when the power goes out."
            />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-xl border border-border bg-card p-6 shadow-card">
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-accent text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-sm font-bold text-foreground">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Image band + copy */}
        <section className="bg-secondary/60 py-20 lg:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={restaurantCounter}
                alt="Waiter entering a table order on a touchscreen POS terminal in a Tanzanian restaurant"
                width={1200}
                height={800}
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover shadow-card"
              />
              <img
                src={restaurantTables}
                alt="Customers enjoying a meal at a restaurant in Tanzania with plates of food and drinks on wooden tables"
                width={1200}
                height={800}
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover shadow-card sm:mt-8"
              />
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Built for restaurants & cafes"
                title="From order to kitchen to bill — in seconds"
                description="No more lost order slips, wrong bills or arguments at the till. Every order flows from the waiter's screen to the kitchen printer to the final receipt — and every shilling is accounted for."
              />
              <ul className="mt-8 space-y-3.5">
                {[
                  "Take orders at the table and print them in the kitchen instantly",
                  "Split, merge and discount bills with manager approval",
                  "Track sales and performance per waiter",
                  "Deduct ingredients as meals sell and get low stock alerts",
                  "Works offline — keep serving during power or internet cuts",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                <WhatsAppIcon className="size-4" aria-hidden="true" /> WhatsApp {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28">
          <div className="section-shell max-w-3xl">
            <SectionHeading
              eyebrow="FAQ"
              title="POS for restaurants — common questions"
            />
            <div className="mt-12 space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-xl border border-border bg-card p-5 shadow-card">
                  <summary className="cursor-pointer list-none text-sm font-bold text-foreground marker:hidden">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="surface-navy py-16 lg:py-20">
          <div className="section-shell flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-2xl text-3xl font-extrabold text-navy-foreground sm:text-4xl">
              Ready to grow your restaurant?
            </h2>
            <p className="max-w-xl text-base text-navy-foreground/75">
              Message us on WhatsApp for a free demo of StellarPOS for restaurants, cafes and bars. We
              install, train your staff and support you — in Dar es Salaam and across Tanzania.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                <WhatsAppIcon className="size-4" aria-hidden="true" /> Chat on WhatsApp
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
