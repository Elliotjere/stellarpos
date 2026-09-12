import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Barcode,
  Boxes,
  CheckCircle2,
  Clock3,
  PackageCheck,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Store,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PLANS } from "@/components/site/Pricing";
import { SITE, WHATSAPP_URL } from "@/lib/site";
import supermarketHero from "@/assets/supermarket-hero.jpg";
import supermarketInventory from "@/assets/supermarket-inventory.jpg";
import supermarketCheckout from "@/assets/supermarket.jpg";

const TITLE = "POS System for Supermarkets in Tanzania | StellarPOS";
const DESCRIPTION =
  "StellarPOS is supermarket POS software in Tanzania for fast barcode checkout, multiple tills, stock and expiry control, loyalty and profit reports. From TZS 360,000/year.";
const STARTER_PRICE = PLANS[0]?.price ?? "360,000";
const BUSINESS_PRICE = PLANS[1]?.price ?? "600,000";
const ENTERPRISE_PRICE = PLANS[2]?.price ?? "960,000";

const features = [
  {
    icon: Barcode,
    title: "Fast barcode checkout",
    text: "Scan groceries quickly, search products in seconds and print clear receipts so cashiers keep queues moving at busy times.",
  },
  {
    icon: Scale,
    title: "Weighted product sales",
    text: "Sell fruit, vegetables, meat and other weighed products by quantity, with the correct unit price and total calculated at checkout.",
  },
  {
    icon: Store,
    title: "Multiple tills & branches",
    text: "Run several checkout counters at once and view sales, cash and stock for every till, store or branch from one account.",
  },
  {
    icon: Boxes,
    title: "Live stock control",
    text: "Stock reduces with every sale. See current quantities, low-stock items, fast movers and slow movers before placing supplier orders.",
  },
  {
    icon: Clock3,
    title: "Batch & expiry tracking",
    text: "Record batches and expiry dates for food, drinks and household goods so your team can sell older stock first and reduce waste.",
  },
  {
    icon: ShieldCheck,
    title: "Cashier controls & audit trail",
    text: "Give each cashier a secure account and track discounts, voids, returns, cash movements and end-of-shift differences.",
  },
  {
    icon: Users,
    title: "Customers & loyalty",
    text: "Reward repeat shoppers with points, customer prices and promotions while keeping purchase history available to your team.",
  },
  {
    icon: BarChart3,
    title: "Sales & profit reports",
    text: "Check daily turnover, gross profit, cashier performance, top products and branch results from your phone or computer.",
  },
];

const faqs = [
  {
    q: "What is the best POS system for supermarkets in Tanzania?",
    a: "StellarPOS is designed for supermarkets and grocery stores in Tanzania. It combines barcode checkout, multiple tills, live inventory, batch and expiry tracking, cashier controls, customer loyalty and profit reports. Stellar Technologies Limited installs it and trains your team locally in English or Swahili.",
  },
  {
    q: "Can StellarPOS connect several supermarket tills?",
    a: "Yes. Several cashiers can sell at the same time while sales and stock update in one central system. Owners can review each till, cashier and branch separately or see combined reports for the whole supermarket.",
  },
  {
    q: "Does the supermarket POS support barcode scanners and receipt printers?",
    a: "Yes. StellarPOS works with barcode scanners, thermal receipt printers, cash drawers and label printers. We can help supply, connect and configure the equipment for your checkout counters.",
  },
  {
    q: "Can I track grocery expiry dates and low stock?",
    a: "Yes. You can record batches and expiry dates, receive low-stock alerts, review products approaching expiry and use stock-taking reports to find shortages or differences.",
  },
  {
    q: "Does StellarPOS work when the internet is down?",
    a: "Yes. Cashiers can continue selling during an internet interruption. Transactions are saved and synchronised when the connection returns, helping your supermarket avoid unnecessary checkout delays.",
  },
  {
    q: "How much does a supermarket POS system cost in Tanzania?",
    a: `StellarPOS starts at TZS ${STARTER_PRICE} per year for Starter, TZS ${BUSINESS_PRICE} per year for Business and TZS ${ENTERPRISE_PRICE} per year for Enterprise. Plans include setup assistance, staff training, updates and local support.`,
  },
  {
    q: "Do you install supermarket POS systems outside Dar es Salaam?",
    a: "Yes. We provide installation and training in Dar es Salaam and across Tanzania, including Arusha, Mwanza, Dodoma, Mbeya, Zanzibar and Morogoro.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "StellarPOS for Supermarkets in Tanzania",
  provider: { "@type": "Organization", name: SITE.company, url: SITE.domain },
  serviceType: "Supermarket Point of Sale Software",
  areaServed: { "@type": "Country", name: "Tanzania" },
  description:
    "Point of sale and inventory software for supermarkets and grocery stores in Tanzania, including barcode checkout, multiple tills, expiry tracking and profit reports.",
  offers: {
    "@type": "Offer",
    price: STARTER_PRICE.replace(/,/g, ""),
    priceCurrency: "TZS",
    availability: "https://schema.org/InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.domain}/` },
    { "@type": "ListItem", position: 2, name: "POS for Supermarkets", item: `${SITE.domain}/supermarkets` },
  ],
};

export const Route = createFileRoute("/supermarkets")({
  component: SupermarketsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      {
        name: "keywords",
        content:
          "supermarket POS system Tanzania, POS software for supermarkets Tanzania, grocery store POS Tanzania, supermarket inventory software Tanzania, supermarket billing system Dar es Salaam, barcode POS Tanzania",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://stellarpos.lovable.app/supermarkets" },
      { property: "og:locale", content: "en_TZ" },
      { property: "og:site_name", content: "StellarPOS Tanzania" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://stellarpos.lovable.app/supermarkets" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(pageSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
});

function SupermarketsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="surface-navy relative overflow-hidden">
          <div className="section-shell relative grid gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-20">
            <div className="reveal">
              <nav aria-label="Breadcrumb" className="text-xs text-navy-foreground/60">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span aria-hidden="true"> / </span>
                <span>POS for Supermarkets</span>
              </nav>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-navy-foreground/15 bg-navy-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                <ShoppingCart className="size-3.5" aria-hidden="true" /> For supermarkets & grocery stores
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-6xl">
                POS System for <span className="text-gradient-primary">Supermarkets</span> in Tanzania
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
                Move queues faster and control every item on your shelves. StellarPOS connects barcode checkout,
                multiple tills, live stock, expiry tracking and profit reports in one supermarket system supported locally in Tanzania.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {["Fast barcode checkout", "Multiple tills & branches", "Stock & expiry alerts", "Cashier & profit reports"].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-navy-foreground/80">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]">
                  <WhatsAppIcon className="size-4" aria-hidden="true" /> Request a Free Demo
                </a>
                <Link to="/" hash="pricing" className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 px-7 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:border-primary hover:text-primary">
                  See Pricing <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="reveal relative" style={{ animationDelay: "120ms" }}>
              <img src={supermarketHero} alt="Tanzanian supermarket cashier scanning groceries at a barcode checkout counter" width={1536} height={1024} fetchPriority="high" className="aspect-[3/2] w-full rounded-2xl object-cover shadow-elevated" />
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="section-shell">
            <SectionHeading eyebrow="Supermarket features" title="Everything your supermarket needs to sell and control stock" description="From the first scanned item to the final daily cash-up, StellarPOS gives owners and managers a clear view of sales, stock, staff and profit." />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-xl border border-border bg-card p-6 shadow-card">
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-accent text-primary"><Icon className="size-5" aria-hidden="true" /></span>
                  <h2 className="mt-4 text-sm font-bold text-foreground">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/60 py-20 lg:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              <img src={supermarketInventory} alt="Tanzanian supermarket staff checking shelf inventory with a barcode scanner" width={1200} height={800} loading="lazy" className="h-full w-full rounded-2xl object-cover shadow-card" />
              <img src={supermarketCheckout} alt="Supermarket checkout counter with groceries and point of sale equipment in Tanzania" width={1200} height={800} loading="lazy" className="h-full w-full rounded-2xl object-cover shadow-card sm:mt-8" />
            </div>
            <div>
              <SectionHeading align="left" eyebrow="Built for busy retail" title="Shorter queues. Tighter stock. Clearer profit." description="Your supermarket handles thousands of products and many small transactions. StellarPOS keeps checkout simple for cashiers while giving management the controls needed to reduce losses and make better purchasing decisions." />
              <ul className="mt-8 space-y-3.5">
                {["Scan products and print receipts quickly at every till", "Track quantities, batches and expiry dates as goods move", "Control discounts, returns, voids and cashier shifts", "Manage suppliers, purchases and stock-taking differences", "Compare sales and profit across branches from one dashboard"].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-foreground"><PackageCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />{benefit}</li>
                ))}
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]">
                <WhatsAppIcon className="size-4" aria-hidden="true" /> WhatsApp {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="section-shell max-w-3xl">
            <SectionHeading eyebrow="FAQ" title="Supermarket POS questions from Tanzanian retailers" />
            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.q} className="group rounded-xl border border-border bg-card p-5 shadow-card">
                  <summary className="cursor-pointer list-none text-sm font-bold text-foreground marker:hidden">{faq.q}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="surface-navy py-16 lg:py-20">
          <div className="section-shell flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-2xl text-3xl font-extrabold text-navy-foreground sm:text-4xl">Ready for faster supermarket checkout?</h2>
            <p className="max-w-xl text-base text-navy-foreground/75">Message us for a free StellarPOS supermarket demo. We configure your products and tills, train your cashiers and support your team across Tanzania.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"><WhatsAppIcon className="size-4" aria-hidden="true" /> Chat on WhatsApp</a>
              <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 px-7 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:border-primary hover:text-primary">Back to Homepage</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}