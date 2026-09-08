import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Barcode,
  Boxes,
  CheckCircle2,
  Layers,
  Receipt,
  ShieldCheck,
  Tags,
  Users,
  Wine,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PLANS } from "@/components/site/Pricing";
import { SITE, WHATSAPP_URL } from "@/lib/site";
import liquorShop from "@/assets/liquor-shop.jpg";
import liquorCounter from "@/assets/liquor-counter.jpg";
import liquorShelves from "@/assets/liquor-shelves.jpg";

const TITLE = "POS System for Liquor Stores in Tanzania | StellarPOS";
const DESCRIPTION =
  "StellarPOS is the POS system for liquor stores and bottle shops in Tanzania — sell by bottle or crate, track stock by brand and size, run fast bar billing and see daily profit. From TZS 360,000/year.";

const features = [
  {
    icon: Barcode,
    title: "Barcode billing for bottles & crates",
    text: "Scan beers, wines and spirits at the counter for fast, accurate checkout — sell single bottles, six-packs or full crates with one scan.",
  },
  {
    icon: Layers,
    title: "Sell by bottle, pack or crate",
    text: "Define units for each product — single bottle, six-pack, case or crate — and StellarPOS handles the stock math and pricing automatically.",
  },
  {
    icon: Tags,
    title: "Brand, size & variant tracking",
    text: "Manage the same brand in 330ml, 500ml and 750ml, or beer versus spirit, each with its own price, barcode and stock level.",
  },
  {
    icon: Boxes,
    title: "Stock control by brand & supplier",
    text: "Track every brand and supplier, know what is on the shelf versus in the store, and reorder before you run out of fast movers.",
  },
  {
    icon: Receipt,
    title: "Fast bar & counter billing",
    text: "Serve bar customers and counter sales from the same system. Split tabs, run tabs open, and reconcile cash at the end of the shift.",
  },
  {
    icon: ShieldCheck,
    title: "Staff control & audit trail",
    text: "Every sale, discount, void and stock movement is logged against a staff account, giving you a full audit trail and protecting your stock.",
  },
  {
    icon: Users,
    title: "Credit customers & wholesale",
    text: "Record credit sales for trusted customers, manage wholesale price levels for bars and event buyers, and track balances due.",
  },
  {
    icon: BarChart3,
    title: "Profit & brand reports",
    text: "See which brands and sizes make you the most money, with daily, weekly and monthly sales and profit reports on your phone.",
  },
];

const faqs = [
  {
    q: "What is the best POS system for a liquor store in Tanzania?",
    a: "StellarPOS is built for liquor stores, bottle shops and bars in Tanzania. It handles barcode billing by bottle, pack and crate, brand and size tracking, fast counter and bar billing, credit customers and profit reports. It is installed, trained and supported locally by Stellar Technologies Limited in Dar es Salaam.",
  },
  {
    q: "Can StellarPOS sell by single bottle, six-pack and crate?",
    a: "Yes. You define units for each product — for example single bottle, six-pack and full crate — each with its own price and barcode. When you scan or select a unit, StellarPOS adjusts the stock and price automatically, so your counts stay accurate.",
  },
  {
    q: "How do I track stock across brands and sizes in a bottle shop?",
    a: "Every product is stored with its brand, size and variant. You can see stock by brand, by size or by supplier at any time, set minimum stock levels, and receive low stock alerts so you reorder fast-moving beers and spirits before they run out.",
  },
  {
    q: "Can StellarPOS handle bar sales and counter sales together?",
    a: "Yes. You can run bar tabs and counter sales from the same system, split or merge orders, and reconcile the till against sales at the end of each shift with a clear cash-up report.",
  },
  {
    q: "How much does a POS system for a liquor store cost in Tanzania?",
    a: `StellarPOS starts at TZS ${PLANS[0]!.price} per year for the Starter plan, TZS ${PLANS[1]!.price} per year for the Business plan and TZS ${PLANS[2]!.price} per year for the Enterprise plan. Every plan includes installation help, staff training, updates and support with no hidden monthly fees.`,
  },
  {
    q: "Do you install POS systems for liquor stores outside Dar es Salaam?",
    a: "Yes. We install and train on site in Dar es Salaam and countrywide, including Arusha, Mwanza, Dodoma, Mbeya, Zanzibar and Morogoro. We also supply barcode scanners, thermal receipt printers, cash drawers and label printers for your bottle shop.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "StellarPOS for Liquor Stores in Tanzania",
  provider: { "@type": "Organization", name: SITE.company, url: SITE.domain },
  serviceType: "Point of Sale Software",
  areaServed: { "@type": "Country", name: "Tanzania" },
  description:
    "Point of sale and inventory management software for liquor stores, bottle shops and bars in Tanzania: bottle, pack and crate billing, brand and size tracking, bar billing, credit customers and profit reports.",
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
    { "@type": "ListItem", position: 2, name: "POS for Liquor Stores", item: `${SITE.domain}/liquor-stores` },
  ],
};

export const Route = createFileRoute("/liquor-stores")({
  component: LiquorStoresPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      {
        name: "keywords",
        content:
          "POS system for liquor stores Tanzania, liquor shop POS Tanzania, bottle shop software Tanzania, bar POS Tanzania, spirits shop POS Dar es Salaam, beer crate billing system Tanzania",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/liquor-stores" },
      { property: "og:locale", content: "en_TZ" },
      { property: "og:site_name", content: "StellarPOS Tanzania" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/liquor-stores" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(pageSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
});

function LiquorStoresPage() {
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
                <span>POS for Liquor Stores</span>
              </nav>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                <Wine className="size-3.5" aria-hidden="true" /> For liquor stores & bottle shops
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-6xl">
                POS System for <span className="text-gradient-primary">Liquor Stores</span> in Tanzania
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
                Run your bottle shop or bar with confidence. StellarPOS gives your liquor store fast barcode
                billing by bottle, pack or crate, brand and size tracking, credit customers and clear profit
                reports — installed and supported locally in Tanzania.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {["Bottle, pack & crate billing", "Brand & size stock control", "Bar & counter sales", "Daily profit reports"].map((b) => (
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
                src={liquorShop}
                alt="Liquor store cashier in Tanzania scanning a bottle at a StellarPOS point of sale terminal with shelves of beer, wine and spirits behind"
                width={1408}
                height={960}
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
              title="POS software made for liquor retail"
              description="A liquor store sells in many units — singles, six-packs, cases and crates — and stock moves fast. StellarPOS keeps every bottle and brand under control."
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
                src={liquorCounter}
                alt="Cashier scanning a spirit bottle with a barcode scanner at a liquor store counter in Tanzania"
                width={1200}
                height={800}
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover shadow-card"
              />
              <img
                src={liquorShelves}
                alt="Shelves of beer, wine and spirits bottles with price labels in a Tanzanian bottle store"
                width={1200}
                height={800}
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover shadow-card sm:mt-8"
              />
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Built for bottle shops & bars"
                title="Know every bottle, every brand, every shilling"
                description="Liquor margins come from volume and tight stock control. StellarPOS shows you which brands and sizes sell fastest, what needs reordering, and exactly how much profit you made today."
              />
              <ul className="mt-8 space-y-3.5">
                {[
                  "Sell by single bottle, six-pack, case or crate with auto stock math",
                  "Track stock by brand, size and supplier with low stock alerts",
                  "Run bar tabs and counter sales from one till with shift cash-up",
                  "Manage credit customers and wholesale price levels",
                  "Works offline — keep selling during power or internet cuts",
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
              title="POS for liquor stores — common questions"
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
              Ready to grow your liquor store?
            </h2>
            <p className="max-w-xl text-base text-navy-foreground/75">
              Message us on WhatsApp for a free demo of StellarPOS for liquor stores and bottle shops. We
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
