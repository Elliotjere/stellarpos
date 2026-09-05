import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Barcode,
  BellRing,
  Boxes,
  CalendarClock,
  CheckCircle2,
  Gift,
  MessageCircle,
  Sparkles,
  Tags,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { PLANS } from "@/components/site/Pricing";
import { SITE, WHATSAPP_URL } from "@/lib/site";
import cosmeticsShop from "@/assets/cosmetics-shop.jpg";
import cosmeticsCounter from "@/assets/cosmetics-counter.jpg";
import cosmeticsShelves from "@/assets/cosmetics-shelves.jpg";

const TITLE = "POS System for Cosmetics & Beauty Shops in Tanzania | StellarPOS";
const DESCRIPTION =
  "StellarPOS is the ideal POS system for cosmetics and beauty shops in Tanzania. Track skincare, perfumes and hair products with barcodes, expiry alerts, variants and loyalty rewards. From TZS 360,000/year.";

const features = [
  {
    icon: Barcode,
    title: "Barcode billing for every product",
    text: "Scan lipsticks, lotions, perfumes and hair extensions at the counter for fast, error-free checkout — even with thousands of small items.",
  },
  {
    icon: Tags,
    title: "Shades, sizes & variants",
    text: "Manage one product in many variants — foundation shades, perfume sizes or hair extension lengths — each with its own price and stock level.",
  },
  {
    icon: CalendarClock,
    title: "Expiry date tracking",
    text: "Cosmetics expire. Get alerts before skincare and makeup products reach their expiry date so you sell them first and protect your customers.",
  },
  {
    icon: BellRing,
    title: "Low stock alerts",
    text: "Never run out of your best-selling creams or perfumes. StellarPOS notifies you when items fall below your minimum stock level.",
  },
  {
    icon: Gift,
    title: "Customer loyalty & points",
    text: "Reward repeat customers with points and discounts, and send promotions by bulk SMS to bring them back to your shop.",
  },
  {
    icon: Boxes,
    title: "Supplier & purchase records",
    text: "Record purchases from your suppliers in Kariakoo or abroad, track costs per product and see your real profit margin on every sale.",
  },
  {
    icon: Users,
    title: "Staff accounts & permissions",
    text: "Give each cashier their own login. Track sales per employee and prevent unauthorised discounts or stock adjustments.",
  },
  {
    icon: BarChart3,
    title: "Daily profit reports",
    text: "See exactly which brands and products make you money, with daily, weekly and monthly sales and profit reports on your phone.",
  },
];

const faqs = [
  {
    q: "Which POS system is best for a cosmetics shop in Tanzania?",
    a: "StellarPOS is built for cosmetics and beauty shops in Tanzania. It handles barcoded billing, product variants like shades and sizes, expiry date tracking and customer loyalty — the exact needs of a beauty business. It is installed and supported locally by Stellar Technologies Limited in Dar es Salaam.",
  },
  {
    q: "Can StellarPOS track expiry dates of cosmetics?",
    a: "Yes. You can record expiry dates per batch and StellarPOS will alert you before products expire, so you can discount and sell them in time instead of losing money on dead stock.",
  },
  {
    q: "Can I manage products with different shades or sizes?",
    a: "Yes. Create one product — for example a foundation — and add variants for each shade or size. Each variant has its own barcode, price and stock count, so your reports stay accurate.",
  },
  {
    q: "How much does a POS system for a beauty shop cost in Tanzania?",
    a: `StellarPOS starts at TZS ${PLANS[0].price} per year for the Starter plan, TZS ${PLANS[1].price} per year for the Business plan and TZS ${PLANS[2].price} per year for the Enterprise plan. All plans include setup assistance, training and support with no hidden monthly fees.`,
  },
  {
    q: "Do you install POS systems for cosmetics shops outside Dar es Salaam?",
    a: "Yes. We install and train on site in Dar es Salaam and countrywide, including Arusha, Mwanza, Dodoma, Mbeya, Zanzibar and Morogoro. We also supply barcode scanners, thermal receipt printers and label printers for your beauty shop.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "StellarPOS for Cosmetics & Beauty Shops",
  provider: { "@type": "Organization", name: SITE.company, url: SITE.domain },
  serviceType: "Point of Sale Software",
  areaServed: { "@type": "Country", name: "Tanzania" },
  description:
    "Point of sale and inventory management system for cosmetics and beauty shops in Tanzania: barcode billing, product variants, expiry tracking, loyalty rewards and profit reports.",
  offers: {
    "@type": "Offer",
    price: PLANS[0].price.replace(/,/g, ""),
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
    { "@type": "ListItem", position: 2, name: "POS for Cosmetics & Beauty Shops", item: `${SITE.domain}/beauty-shops` },
  ],
};

export const Route = createFileRoute("/beauty-shops")({
  component: BeautyShopsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      {
        name: "keywords",
        content:
          "POS system for cosmetics business Tanzania, beauty shop POS Tanzania, cosmetics shop software Tanzania, beauty store point of sale, salon and cosmetics POS Dar es Salaam",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/beauty-shops" },
      { property: "og:locale", content: "en_TZ" },
      { property: "og:site_name", content: "StellarPOS Tanzania" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/beauty-shops" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(pageSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
});

function BeautyShopsPage() {
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
                <span>POS for Cosmetics &amp; Beauty Shops</span>
              </nav>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                <Sparkles className="size-3.5" aria-hidden="true" /> For beauty &amp; cosmetics businesses
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-navy-foreground sm:text-5xl lg:text-6xl">
                POS System for <span className="text-gradient-primary">Cosmetics &amp; Beauty Shops</span> in Tanzania
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
                Run your cosmetics business with confidence. StellarPOS gives your beauty shop fast barcode
                billing, variant and expiry tracking, loyalty rewards and clear profit reports — installed and
                supported locally in Tanzania.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {["Barcode & variant billing", "Expiry date alerts", "Customer loyalty points", "Daily profit reports"].map((b) => (
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
                  <MessageCircle className="size-4" aria-hidden="true" /> Request a Free Demo
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
                src={cosmeticsShop}
                alt="Cosmetics shop attendant in Tanzania using the StellarPOS point of sale terminal and barcode scanner"
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
              title="Everything your cosmetics shop needs"
              description="Beauty shops carry hundreds of small, fast-moving products. StellarPOS keeps every bottle, shade and size under control."
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
                src={cosmeticsCounter}
                alt="Cashier scanning a skincare product with a barcode scanner at a cosmetics shop counter in Tanzania"
                width={1200}
                height={800}
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover shadow-card"
              />
              <img
                src={cosmeticsShelves}
                alt="Shelves of perfumes, skincare and hair extensions with price labels in a Tanzanian beauty supply store"
                width={1200}
                height={800}
                loading="lazy"
                className="h-full w-full rounded-2xl object-cover shadow-card sm:mt-8"
              />
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Built for beauty retail"
                title="From Kariakoo suppliers to your shelf — track every shilling"
                description="Cosmetics margins are won in the details: knowing which shades sell, which creams are about to expire, and which customers to invite back. StellarPOS turns your daily sales into clear answers."
              />
              <ul className="mt-8 space-y-3.5">
                {[
                  "Sell by piece or by box with automatic price levels",
                  "Print shelf price labels and product barcodes in-house",
                  "Send bulk SMS promotions to your loyalty customers",
                  "Manage one shop or several branches from one account",
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
                <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-28">
          <div className="section-shell max-w-3xl">
            <SectionHeading
              eyebrow="FAQ"
              title="POS for cosmetics shops — common questions"
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
              Ready to grow your cosmetics business?
            </h2>
            <p className="max-w-xl text-base text-navy-foreground/75">
              Message us on WhatsApp for a free demo. We install, train your staff and support you — in Dar es
              Salaam and across Tanzania.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="size-4" aria-hidden="true" /> Chat on WhatsApp
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
