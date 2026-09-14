import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Barcode,
  Boxes,
  CheckCircle2,
  ClipboardList,
  Clock3,
  PackageCheck,
  Pill,
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
import pharmacyHeroAsset from "@/assets/stellarpos-hero.jpg.asset.json";
import pharmacyInventory from "@/assets/pharmacy-inventory.jpg";
import pharmacyCounter from "@/assets/pharmacy-counter.jpg";

const TITLE = "POS System for Pharmacies in Tanzania | Pharmacy Management Software";
const DESCRIPTION =
  "StellarPOS is a pharmacy POS and management system in Tanzania for medicine billing, batch & expiry tracking, stock control, supplier records and profit reports. From TZS 360,000/year.";
const STARTER_PRICE = PLANS[0]?.price ?? "360,000";
const BUSINESS_PRICE = PLANS[1]?.price ?? "600,000";
const ENTERPRISE_PRICE = PLANS[2]?.price ?? "960,000";

const features = [
  {
    icon: Barcode,
    title: "Fast medicine billing",
    text: "Scan barcodes or search by medicine name in seconds, print clear receipts and serve patients quickly even at busy hours.",
  },
  {
    icon: Clock3,
    title: "Batch & expiry tracking",
    text: "Record batch numbers and expiry dates for every delivery, get alerts for medicines nearing expiry and sell oldest stock first.",
  },
  {
    icon: Boxes,
    title: "Live pharmacy stock control",
    text: "Stock reduces automatically with every sale. See current quantities, low-stock alerts and fast-moving medicines before reordering.",
  },
  {
    icon: ClipboardList,
    title: "Supplier & purchase records",
    text: "Keep supplier contacts, purchase invoices, buying prices and payment history in one place for easy reordering and auditing.",
  },
  {
    icon: Pill,
    title: "Units, strips & packs",
    text: "Sell medicines by piece, strip, box or bottle with automatic unit conversion so quantities always stay accurate.",
  },
  {
    icon: ShieldCheck,
    title: "Staff controls & audit trail",
    text: "Give each pharmacist or cashier a secure account and track discounts, voids, returns and end-of-shift cash differences.",
  },
  {
    icon: Store,
    title: "Multi-branch management",
    text: "Run several pharmacy branches from one account with per-branch stock, transfers between branches and combined reports.",
  },
  {
    icon: BarChart3,
    title: "Sales & profit reports",
    text: "Check daily turnover, gross profit per medicine, staff performance and top-selling products from your phone or computer.",
  },
];

const faqs = [
  {
    q: "What is the best POS system for a pharmacy in Tanzania?",
    a: "StellarPOS is built for pharmacies and chemists in Tanzania. It combines fast medicine billing, batch and expiry tracking, live stock control, supplier records, staff audit trails and profit reports. Stellar Technologies Limited installs it and trains your team locally in English or Swahili.",
  },
  {
    q: "Does StellarPOS track medicine expiry dates?",
    a: "Yes. Every purchase delivery can be recorded with batch numbers and expiry dates. The system alerts you before medicines expire, helps you sell near-expiry stock first and reduces losses from expired products.",
  },
  {
    q: "Can I sell medicines by tablet, strip or box?",
    a: "Yes. StellarPOS supports multiple selling units for the same medicine — for example a full box, a strip or a single tablet — and converts quantities automatically so your stock count stays correct.",
  },
  {
    q: "Does the pharmacy system work offline?",
    a: "Yes. You can keep billing patients during an internet or power interruption. Sales are saved locally and synchronised automatically when the connection returns.",
  },
  {
    q: "Can I manage more than one pharmacy branch?",
    a: "Yes. You can manage unlimited branches from one account with centralised reporting, per-branch stock levels, inter-branch stock transfers and consolidated profit dashboards.",
  },
  {
    q: "How much does a pharmacy POS system cost in Tanzania?",
    a: `StellarPOS starts at TZS ${STARTER_PRICE} per year for Starter, TZS ${BUSINESS_PRICE} per year for Business and TZS ${ENTERPRISE_PRICE} per year for Enterprise. Every plan includes setup assistance, staff training, updates and local support — no hidden monthly fees.`,
  },
  {
    q: "Do you install pharmacy systems outside Dar es Salaam?",
    a: "Yes. We install and configure StellarPOS on site in Dar es Salaam and across Tanzania, including Arusha, Mwanza, Dodoma, Mbeya, Zanzibar and Morogoro, and we can supply barcode scanners, receipt printers and cash drawers.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "StellarPOS for Pharmacies in Tanzania",
  provider: { "@type": "Organization", name: SITE.company, url: SITE.domain },
  serviceType: "Pharmacy Point of Sale and Management Software",
  areaServed: { "@type": "Country", name: "Tanzania" },
  description:
    "Pharmacy POS and management software for pharmacies and chemists in Tanzania, including medicine billing, batch and expiry tracking, stock control, supplier records and profit reports.",
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
    { "@type": "ListItem", position: 2, name: "POS for Pharmacies", item: `${SITE.domain}/pharmacies` },
  ],
};

export const Route = createFileRoute("/pharmacies")({
  component: PharmaciesPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      {
        name: "keywords",
        content:
          "pharmacy POS system Tanzania, pharmacy management software Tanzania, POS software for pharmacy Tanzania, pharmacy billing system Tanzania, chemist POS Dar es Salaam, medicine inventory software Tanzania, pharmacy stock management system",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://stellarpos.lovable.app/pharmacies" },
      { property: "og:locale", content: "en_TZ" },
      { property: "og:site_name", content: "StellarPOS Tanzania" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://stellarpos.lovable.app/pharmacies" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(pageSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
});

function PharmaciesPage() {
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
                <span>POS for Pharmacies</span>
              </nav>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-navy-foreground/15 bg-navy-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                <Pill className="size-3.5" aria-hidden="true" /> For pharmacies & chemists
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-6xl">
                POS System for <span className="text-gradient-primary">Pharmacies</span> in Tanzania
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
                Bill medicines fast and never lose money to expired stock again. StellarPOS combines pharmacy billing,
                batch and expiry tracking, live stock control and profit reports in one system supported locally in Tanzania.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {["Fast medicine billing", "Batch & expiry alerts", "Stock & supplier records", "Staff & profit reports"].map((benefit) => (
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
              <img src={pharmacyHeroAsset.url} alt="Tanzanian pharmacist in a white coat using a StellarPOS terminal at a pharmacy counter" width={1408} height={768} fetchPriority="high" className="aspect-[3/2] w-full rounded-2xl object-cover shadow-elevated" />
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="section-shell">
            <SectionHeading eyebrow="Pharmacy features" title="A complete pharmacy management system" description="From the first medicine scanned to the final daily cash-up, StellarPOS gives pharmacy owners a clear view of sales, stock, expiry dates, staff and profit." />
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
              <img src={pharmacyInventory} alt="Tanzanian pharmacy staff scanning medicine boxes on shelves during stock-taking" width={1200} height={800} loading="lazy" className="h-full w-full rounded-2xl object-cover shadow-card" />
              <img src={pharmacyCounter} alt="Pharmacy counter in Tanzania with receipt printer, POS terminal and medicine basket" width={1200} height={800} loading="lazy" className="h-full w-full rounded-2xl object-cover shadow-card sm:mt-8" />
            </div>
            <div>
              <SectionHeading align="left" eyebrow="Built for pharmacies" title="Protect patients. Protect your profit." description="A pharmacy handles hundreds of medicines with strict expiry dates and small margins. StellarPOS keeps billing simple for your team while giving you the controls to cut expired-stock losses and make smarter purchasing decisions." />
              <ul className="mt-8 space-y-3.5">
                {["Bill patients quickly by barcode scan or medicine-name search", "Track batches and expiry dates on every delivery", "Sell by tablet, strip, box or bottle with automatic conversion", "Control discounts, returns and staff cash shifts", "Compare sales and profit across branches from one dashboard"].map((benefit) => (
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
            <SectionHeading eyebrow="FAQ" title="Pharmacy POS questions from Tanzanian pharmacy owners" />
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
            <h2 className="max-w-2xl text-3xl font-extrabold text-navy-foreground sm:text-4xl">Ready to modernise your pharmacy?</h2>
            <p className="max-w-xl text-base text-navy-foreground/75">Message us for a free StellarPOS pharmacy demo. We configure your medicines and prices, train your team and support your pharmacy across Tanzania.</p>
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
