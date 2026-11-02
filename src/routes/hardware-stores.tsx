import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Barcode,
  Boxes,
  CheckCircle2,
  ClipboardList,
  PackageCheck,
  FileText,
  Hammer,
  Ruler,
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
import hardwareHero from "@/assets/hardware-hero.jpg";
import hardwareInventory from "@/assets/hardware-inventory.jpg";
import hardwareMaterials from "@/assets/hardware-materials.jpg";

const TITLE = "POS System for Hardware Stores in Tanzania | Hardware Shop Software";
const DESCRIPTION =
  "StellarPOS is hardware store POS and inventory software in Tanzania. Sell by piece, metre, bag or tonne, manage contractor credit, quotations, suppliers and multi-branch stock. From TZS 360,000/year.";
const STARTER_PRICE = PLANS[0]?.price ?? "360,000";
const BUSINESS_PRICE = PLANS[1]?.price ?? "600,000";
const ENTERPRISE_PRICE = PLANS[2]?.price ?? "960,000";

const features = [
  { icon: Barcode, title: "Fast counter billing", text: "Scan barcodes or search thousands of items by name or code — nails, fittings, paint, tools — and print receipts in seconds." },
  { icon: Ruler, title: "Sell by piece, metre, bag or tonne", text: "Sell cement by bag, wire by metre, nails by kilo or box and pipes by length, with automatic unit conversion in stock." },
  { icon: Boxes, title: "Hardware inventory control", text: "Track thousands of SKUs live with low-stock alerts, reorder levels, stock-taking and variance reports for every aisle." },
  { icon: Users, title: "Contractor credit accounts", text: "Give fundis and contractors credit limits, track balances and payments, and send statements or SMS reminders." },
  { icon: FileText, title: "Quotations & proforma invoices", text: "Create professional quotations for building projects and convert them to invoices or sales with one click." },
  { icon: ClipboardList, title: "Suppliers & purchase orders", text: "Record purchase orders, supplier invoices, buying prices and landed costs to always know your true margin." },
  { icon: Store, title: "Multi-branch & warehouse stock", text: "Manage shops and yards from one account with stock transfers, per-branch levels and combined reports." },
  { icon: BarChart3, title: "Sales & profit reports", text: "See daily sales, profit per item and category, retail vs wholesale performance and staff activity from your phone." },
];

const faqs = [
  { q: "What is the best POS system for a hardware store in Tanzania?", a: "StellarPOS is built for hardware shops and building materials stores in Tanzania. It handles thousands of items, multiple selling units, contractor credit, quotations, supplier purchases and profit reports, with local installation and training by Stellar Technologies Limited in English or Swahili." },
  { q: "Can I sell cement by bag and wire or pipes by metre?", a: "Yes. Each product can have several units — for example piece, box, kilo, metre, bag or tonne — with their own prices. Stock converts automatically so your quantities stay accurate." },
  { q: "Does the system support wholesale and retail prices?", a: "Yes. You can set retail, wholesale and contractor price levels for every item and apply them automatically per customer." },
  { q: "Can I give contractors credit and track what they owe?", a: "Yes. Create customer accounts with credit limits, record partial payments, view outstanding balances and print or SMS statements." },
  { q: "Can I make quotations for building projects?", a: "Yes. Prepare branded quotations and proforma invoices, then convert them into an invoice or sale without retyping items." },
  { q: "How much does hardware shop software cost in Tanzania?", a: `StellarPOS starts at TZS ${STARTER_PRICE} per year for Starter, TZS ${BUSINESS_PRICE} per year for Business and TZS ${ENTERPRISE_PRICE} per year for Enterprise. Every plan includes setup assistance, training, updates and local support — no hidden monthly fees.` },
  { q: "Does it work offline and outside Dar es Salaam?", a: "Yes. StellarPOS keeps selling during internet or power cuts and syncs when the connection returns. We install across Tanzania, including Arusha, Mwanza, Dodoma, Mbeya, Zanzibar and Morogoro, and supply barcode scanners, printers and cash drawers." },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "StellarPOS for Hardware Stores in Tanzania",
  provider: { "@type": "Organization", name: SITE.company, url: SITE.domain },
  serviceType: "Hardware Store Point of Sale and Inventory Management Software",
  areaServed: { "@type": "Country", name: "Tanzania" },
  description:
    "POS and inventory management software for hardware shops and building materials stores in Tanzania, including multi-unit selling, contractor credit, quotations, supplier records and profit reports.",
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
    { "@type": "ListItem", position: 2, name: "POS for Hardware Stores", item: `${SITE.domain}/hardware-stores` },
  ],
};

export const Route = createFileRoute("/hardware-stores")({
  component: HardwareStoresPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      {
        name: "keywords",
        content:
          "hardware store POS system Tanzania, hardware shop software Tanzania, hardware store management system, POS software for hardware shop Tanzania, building materials inventory software, hardware inventory management Dar es Salaam, POS system for hardware business",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://stellarpos.lovable.app/hardware-stores" },
      { property: "og:locale", content: "en_TZ" },
      { property: "og:site_name", content: "StellarPOS Tanzania" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://stellarpos.lovable.app/hardware-stores" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(pageSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
});

function HardwareStoresPage() {
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
                <span>POS for Hardware Stores</span>
              </nav>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-navy-foreground/15 bg-navy-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                <Hammer className="size-3.5" aria-hidden="true" /> For hardware & building materials stores
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-6xl">
                POS System for <span className="text-gradient-primary">Hardware Stores</span> in Tanzania
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
                The complete software to manage your hardware shop. Bill fast, sell by piece, metre or bag, control thousands
                of items, manage contractor credit and see your real profit — supported locally in Tanzania.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {["Fast barcode billing", "Multi-unit selling", "Contractor credit & quotes", "Stock & profit reports"].map((benefit) => (
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
              <img src={hardwareHero} alt="Tanzanian hardware store attendant using a POS system to serve a customer buying a power drill" width={1536} height={1024} fetchPriority="high" className="aspect-[3/2] w-full rounded-2xl object-cover shadow-elevated" />
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="section-shell">
            <SectionHeading eyebrow="Hardware store features" title="A complete hardware store management system" description="From a single screw to a lorry of cement, StellarPOS gives hardware shop owners a clear view of sales, stock, credit customers, staff and profit." />
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
              <img src={hardwareInventory} alt="Hardware store manager in Tanzania scanning fittings with a barcode scanner during stock-taking" width={1200} height={800} loading="lazy" className="h-full w-full rounded-2xl object-cover shadow-card" />
              <img src={hardwareMaterials} alt="Hardware store staff advising a contractor on PVC pipes and cement in a Tanzanian building materials store" width={1200} height={800} loading="lazy" className="h-full w-full rounded-2xl object-cover shadow-card sm:mt-8" />
            </div>
            <div>
              <SectionHeading align="left" eyebrow="Built for hardware shops" title="Thousands of items. One clear system." description="Hardware and building materials stores carry thousands of small items, many units and lots of credit customers. StellarPOS keeps billing simple for your team while stopping stock leakage and showing exactly where your profit comes from." />
              <ul className="mt-8 space-y-3.5">
                {["Bill customers quickly by barcode, code or item-name search", "Sell by piece, box, kilo, metre, bag or tonne", "Retail, wholesale and contractor price levels", "Track contractor credit, quotations and deliveries", "Compare stock and profit across shops and yards"].map((benefit) => (
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
            <SectionHeading eyebrow="FAQ" title="Hardware store POS questions from Tanzanian shop owners" />
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
            <h2 className="max-w-2xl text-3xl font-extrabold text-navy-foreground sm:text-4xl">Ready to modernise your hardware store?</h2>
            <p className="max-w-xl text-base text-navy-foreground/75">Message us for a free StellarPOS hardware store demo. We load your products and prices, train your team and support your shop across Tanzania.</p>
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
