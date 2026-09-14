import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Barcode,
  Boxes,
  CheckCircle2,
  Gem,
  Receipt,
  Scale,
  ShieldCheck,
  Tags,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PLANS } from "@/components/site/Pricing";
import { SITE, WHATSAPP_URL } from "@/lib/site";
import jewelryHeroAsset from "@/assets/jewelry-hero.jpg.asset.json";
import jewelryCounter from "@/assets/jewelry-counter.jpg";
import jewelryDisplay from "@/assets/jewelry-display.jpg";

const TITLE = "POS System for Jewelry Business in Tanzania | StellarPOS";
const DESCRIPTION =
  "StellarPOS is the POS system for jewelry shops in Tanzania — track gold and silver by weight and karat, print certificates, secure high-value stock and see real profit per item. From TZS 360,000/year.";

const features = [
  {
    icon: Scale,
    title: "Sell by weight, karat or piece",
    text: "Price gold and silver per gram with your daily rate, or sell finished pieces at a fixed price. StellarPOS calculates making charges and totals instantly.",
  },
  {
    icon: Gem,
    title: "Item-level jewellery inventory",
    text: "Every ring, chain and bracelet is tracked as its own item with weight, karat, stone details, cost and photo — so nothing goes missing.",
  },
  {
    icon: Barcode,
    title: "Tag printing & barcode scanning",
    text: "Print jewellery tags with barcodes, weight and price, then scan at the counter for fast, accurate billing.",
  },
  {
    icon: ShieldCheck,
    title: "Security & audit trail",
    text: "Every sale, discount, stock movement and price change is logged against a staff account, giving you a full audit trail on high-value stock.",
  },
  {
    icon: Tags,
    title: "Old gold exchange & repairs",
    text: "Record old gold buy-backs, exchanges, repair jobs and custom orders with deposits, and follow each job through to collection.",
  },
  {
    icon: Boxes,
    title: "Supplier & purchase costing",
    text: "Track purchases from your suppliers, keep the true cost of each piece and see your exact margin on every sale.",
  },
  {
    icon: Users,
    title: "Customer records & layaway",
    text: "Keep customer histories, manage instalment and layaway payments, and send reminders by SMS when balances are due.",
  },
  {
    icon: BarChart3,
    title: "Profit & stock valuation reports",
    text: "See daily sales, profit per item and the total value of gold in your showroom — on your phone, from anywhere in Tanzania.",
  },
];

const faqs = [
  {
    q: "What is the best POS system for a jewelry business in Tanzania?",
    a: "StellarPOS is built for jewellery retailers in Tanzania. It handles weight and karat-based pricing, item-level tracking of every piece, tag and barcode printing, old gold exchange, repairs and layaway payments. It is installed, trained and supported locally by Stellar Technologies Limited in Dar es Salaam.",
  },
  {
    q: "Can the POS software price gold by weight and karat?",
    a: "Yes. You set your daily gold rate per gram for each karat, and StellarPOS calculates the item price automatically from the weight, adds making charges and stone value, and prints a clear invoice for the customer.",
  },
  {
    q: "How do I keep track of every piece in my jewelry shop?",
    a: "Each piece is entered as a unique item with weight, karat, stone details, cost price, supplier and photo. Stock counts, transfers between branches and every sale are logged, so you can reconcile your showroom and safe at any time.",
  },
  {
    q: "Does StellarPOS handle old gold exchange and repair jobs?",
    a: "Yes. You can buy back old gold at a set rate, offset it against a new purchase, and open repair or custom order jobs with deposits, due dates and collection records.",
  },
  {
    q: "How much does POS software for a jewelry shop cost in Tanzania?",
    a: `StellarPOS starts at TZS ${PLANS[0]!.price} per year for the Starter plan, TZS ${PLANS[1]!.price} per year for the Business plan and TZS ${PLANS[2]!.price} per year for the Enterprise plan. Every plan includes installation help, staff training, updates and support with no hidden monthly fees.`,
  },
  {
    q: "Do you install jewelry POS systems outside Dar es Salaam?",
    a: "Yes. We install and train on site in Dar es Salaam and countrywide, including Arusha, Mwanza, Dodoma, Mbeya, Zanzibar and Morogoro, and we supply barcode scanners, jewellery tag printers, thermal receipt printers and cash drawers.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "StellarPOS for Jewelry Shops in Tanzania",
  provider: { "@type": "Organization", name: SITE.company, url: SITE.domain },
  serviceType: "Point of Sale Software",
  areaServed: { "@type": "Country", name: "Tanzania" },
  description:
    "Point of sale and inventory management software for jewelry businesses in Tanzania: gold and silver pricing by weight and karat, item-level stock, tag printing, old gold exchange, repairs, layaway and profit reports.",
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
    { "@type": "ListItem", position: 2, name: "POS for Jewelry Shops", item: `${SITE.domain}/jewelry-shops` },
  ],
};

export const Route = createFileRoute("/jewelry-shops")({
  component: JewelryShopsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      {
        name: "keywords",
        content:
          "POS system for jewelry business in Tanzania, POS software for jewelry business Tanzania, POS system for jewelry shop Tanzania, jewellery shop software Tanzania, gold shop POS Tanzania, jewellery inventory system Dar es Salaam",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/jewelry-shops" },
      { property: "og:locale", content: "en_TZ" },
      { property: "og:site_name", content: "StellarPOS Tanzania" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/jewelry-shops" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(pageSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
});

function JewelryShopsPage() {
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
                <span>POS for Jewelry Shops</span>
              </nav>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                <Gem className="size-3.5" aria-hidden="true" /> For jewellery &amp; gold businesses
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-6xl">
                POS System for <span className="text-gradient-primary">Jewelry Business</span> in Tanzania
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
                StellarPOS is POS software built for jewelry shops in Tanzania — price gold and silver by
                weight and karat, track every single piece, handle old gold exchange and repairs, and know
                your true profit on each sale.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {["Weight & karat pricing", "Item-level gold tracking", "Jewellery tag & barcode printing", "Layaway & repair jobs"].map((b) => (
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
                  <WhatsAppIcon className="size-4" /> Request a Free Demo
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
                src={jewelryHeroAsset.url}
                alt="Shop attendant in a jewelry shop in Zanzibar scanning a bracelet for a customer using a StellarPOS point of sale terminal"
                width={1408}
                height={768}
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
              title="POS software made for jewellery retail"
              description="A jewellery shop is not an ordinary shop: stock is high value, prices change with the gold rate, and every gram must be accounted for. StellarPOS is set up for exactly that."
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
                src={jewelryCounter}
                alt="Jeweller in Tanzania weighing a gold chain on a digital scale beside a point of sale screen"
                width={1200}
                height={800}
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover shadow-card"
              />
              <img
                src={jewelryDisplay}
                alt="Display case of gold and silver rings, bracelets and necklaces with price tags in a Tanzanian jewellery shop"
                width={1200}
                height={800}
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover shadow-card sm:mt-8"
              />
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Built for gold & silver retail"
                title="Know the value of every gram in your showroom"
                description="From the daily gold rate to the last repair job, StellarPOS keeps your jewellery business accurate, secure and profitable — whether you run one shop in Kariakoo or several branches across Tanzania."
              />
              <ul className="mt-8 space-y-3.5">
                {[
                  "Update your gold rate once and reprice the whole showroom",
                  "Print professional invoices and certificates with item details",
                  "Restrict discounts, refunds and stock edits by staff role",
                  "Stock-take with variance reports to reconcile safe and display",
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
                <WhatsAppIcon className="size-4" /> WhatsApp {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* Why local */}
        <section className="py-20 lg:py-28">
          <div className="section-shell max-w-3xl">
            <SectionHeading
              eyebrow="Local support"
              title="Installed and supported in Tanzania"
              description="Stellar Technologies Limited installs StellarPOS in your shop, sets up your gold rates, karats and product tags, trains your team in Swahili or English, and stays available on WhatsApp when you need help."
            />
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground">
                <Receipt className="size-4 text-primary" aria-hidden="true" /> TRA-friendly invoicing
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground">
                <ShieldCheck className="size-4 text-primary" aria-hidden="true" /> Secure cloud backups
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground">
                <Users className="size-4 text-primary" aria-hidden="true" /> On-site staff training
              </span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-secondary/60 py-20 lg:py-28">
          <div className="section-shell max-w-3xl">
            <SectionHeading eyebrow="FAQ" title="POS for jewelry shops — common questions" />
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
              Ready to secure and grow your jewelry business?
            </h2>
            <p className="max-w-xl text-base text-navy-foreground/75">
              Message us on WhatsApp for a free demo of StellarPOS for jewellery shops. We install, train your
              staff and support you across Tanzania.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                <WhatsAppIcon className="size-4" /> Chat on WhatsApp
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
