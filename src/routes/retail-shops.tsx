import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Barcode,
  Boxes,
  CheckCircle2,
  ClipboardList,
  PackageCheck,
  ShoppingBag,
  Smartphone,
  ShieldCheck,
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
import retailHero from "@/assets/retail-hero.jpg";
import retailStock from "@/assets/retail-stock.jpg";
import retailOwner from "@/assets/retail-owner.jpg";

const TITLE = "POS System for Retail Shops in Tanzania | Retail Shop Management Software";
const DESCRIPTION =
  "StellarPOS is retail POS and shop management software in Tanzania. Fast barcode billing, stock control, customer credit, mobile money payments, staff controls and daily profit reports. From TZS 360,000/year.";
const STARTER_PRICE = PLANS[0]?.price ?? "360,000";
const BUSINESS_PRICE = PLANS[1]?.price ?? "600,000";
const ENTERPRISE_PRICE = PLANS[2]?.price ?? "960,000";

const features = [
  { icon: Barcode, title: "Fast barcode billing", text: "Scan or search any product, apply discounts and print or SMS receipts in seconds — short queues even on busy days." },
  { icon: Smartphone, title: "Cash, card & mobile money", text: "Record M-Pesa, Tigo Pesa, Airtel Money, card and cash payments, including split payments, and reconcile tills at closing." },
  { icon: Boxes, title: "Retail stock control", text: "Live stock levels, low-stock alerts, reorder levels, stock-taking and variance reports so nothing goes missing." },
  { icon: Users, title: "Customers & credit", text: "Save customer details, give credit with limits, track balances and reward loyal shoppers." },
  { icon: ShieldCheck, title: "Staff controls & audit trail", text: "User roles and permissions, cashier shift reports and a log of every sale, refund, discount and price change." },
  { icon: ClipboardList, title: "Suppliers & purchases", text: "Record purchases, supplier invoices and buying prices so you always know your true margin per item." },
  { icon: Store, title: "Multi-shop management", text: "Run several shops from one account with stock transfers, per-branch levels and combined reports." },
  { icon: BarChart3, title: "Daily sales & profit reports", text: "See today's sales, profit, best sellers, slow movers and expenses from your phone — wherever you are." },
];

const faqs = [
  { q: "What is the best POS system for a retail shop in Tanzania?", a: "StellarPOS is built for retail shops in Tanzania — minimarts, general stores, boutiques, electronics, stationery and phone accessory shops. It combines fast billing, stock control, customer credit, mobile money recording and profit reports, with local installation and training by Stellar Technologies Limited in English or Swahili." },
  { q: "How does retail shop management software stop stock theft?", a: "Every item sold, returned or adjusted is recorded against a user. Regular stock-taking compares system stock with physical stock, and variance and audit reports show exactly where and when losses happen." },
  { q: "Can I record M-Pesa, Tigo Pesa and Airtel Money payments?", a: "Yes. Each sale can be paid by cash, card or mobile money, or split between methods, and the end-of-day report shows totals per payment method for easy reconciliation." },
  { q: "Can I check my shop sales from my phone?", a: "Yes. Owners can view sales, profit, stock and staff activity remotely from a phone or laptop, even when not at the shop." },
  { q: "Does it work for small shops and duka owners?", a: "Yes. The Starter plan suits a single shop with one till, and you can upgrade to more users, tills and branches as your business grows." },
  { q: "How much does a retail POS system cost in Tanzania?", a: `StellarPOS starts at TZS ${STARTER_PRICE} per year for Starter, TZS ${BUSINESS_PRICE} per year for Business and TZS ${ENTERPRISE_PRICE} per year for Enterprise. Every plan includes setup assistance, training, updates and local support — no hidden monthly fees.` },
  { q: "Does it work offline and outside Dar es Salaam?", a: "Yes. StellarPOS keeps selling during internet or power cuts and syncs when the connection returns. We install across Tanzania, including Arusha, Mwanza, Dodoma, Mbeya, Zanzibar and Morogoro, and supply barcode scanners, printers and cash drawers." },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "StellarPOS for Retail Shops in Tanzania",
  provider: { "@type": "Organization", name: SITE.company, url: SITE.domain },
  serviceType: "Retail Shop Point of Sale and Management Software",
  areaServed: { "@type": "Country", name: "Tanzania" },
  description:
    "POS and shop management software for retail shops in Tanzania, including barcode billing, stock control, customer credit, mobile money payments, staff controls and profit reports.",
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
    { "@type": "ListItem", position: 2, name: "POS for Retail Shops", item: `${SITE.domain}/retail-shops` },
  ],
};

export const Route = createFileRoute("/retail-shops")({
  component: RetailShopsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      {
        name: "keywords",
        content:
          "retail POS system Tanzania, retail shop software Tanzania, shop management system Tanzania, POS software for retail shop, retail inventory management software Tanzania, duka management system, POS system for shop Dar es Salaam, retail store billing software",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://stellarpos.lovable.app/retail-shops" },
      { property: "og:locale", content: "en_TZ" },
      { property: "og:site_name", content: "StellarPOS Tanzania" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://stellarpos.lovable.app/retail-shops" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(pageSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
});

function RetailShopsPage() {
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
                <span>POS for Retail Shops</span>
              </nav>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-navy-foreground/15 bg-navy-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                <ShoppingBag className="size-3.5" aria-hidden="true" /> For retail shops & stores
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-6xl">
                POS System for <span className="text-gradient-primary">Retail Shops</span> in Tanzania
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
                The complete system to manage your retail shop. Bill fast, accept mobile money, control stock, stop losses
                and see your real profit every day — supported locally in Tanzania.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {["Fast barcode billing", "Mobile money payments", "Stock & theft control", "Daily profit reports"].map((benefit) => (
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
              <img src={retailHero} alt="Tanzanian retail shop cashier using a POS system to serve a customer with a shopping basket" width={1536} height={1024} fetchPriority="high" className="aspect-[3/2] w-full rounded-2xl object-cover shadow-elevated" />
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="section-shell">
            <SectionHeading eyebrow="Retail shop features" title="A complete retail shop management system" description="From a small duka to a busy multi-branch store, StellarPOS gives retail shop owners a clear view of sales, stock, customers, staff and profit." />
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
              <img src={retailStock} alt="Retail shop manager in Tanzania scanning products with a barcode scanner during stock-taking" width={1200} height={800} loading="lazy" className="h-full w-full rounded-2xl object-cover shadow-card" />
              <img src={retailOwner} alt="Tanzanian boutique owner checking retail shop sales reports on her phone" width={1200} height={800} loading="lazy" className="h-full w-full rounded-2xl object-cover shadow-card sm:mt-8" />
            </div>
            <div>
              <SectionHeading align="left" eyebrow="Built for retail shops" title="Know your shop, even when you are away." description="Retail shop owners lose money to slow billing, missing stock and unclear cash. StellarPOS keeps billing simple for your cashiers while stopping stock leakage and showing exactly where your profit comes from." />
              <ul className="mt-8 space-y-3.5">
                {["Bill customers quickly by barcode or product search", "Record cash, card and mobile money payments", "Retail and wholesale price levels with discounts", "Track customer credit and loyalty", "Check sales and profit from your phone"].map((benefit) => (
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
            <SectionHeading eyebrow="FAQ" title="Retail POS questions from Tanzanian shop owners" />
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
            <h2 className="max-w-2xl text-3xl font-extrabold text-navy-foreground sm:text-4xl">Ready to modernise your retail shop?</h2>
            <p className="max-w-xl text-base text-navy-foreground/75">Message us for a free StellarPOS retail shop demo. We load your products and prices, train your team and support your shop across Tanzania.</p>
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
