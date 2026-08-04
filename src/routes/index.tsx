import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Features } from "@/components/site/Features";
import { Integrations } from "@/components/site/Integrations";
import { Industries } from "@/components/site/Industries";
import { Pricing, PLANS } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { FAQS, SITE } from "@/lib/site";

const TITLE = "POS System Tanzania | StellarPOS Point of Sale Software";
const DESCRIPTION =
  "StellarPOS is the complete POS system in Tanzania for retail shops, supermarkets, pharmacies and restaurants. Manage sales, inventory, customers and multi-branch reports. From TZS 360,000/year.";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.company,
  url: SITE.domain,
  email: SITE.email,
  description:
    "Stellar Technologies Limited develops StellarPOS, a point of sale and inventory management system for businesses in Tanzania.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kisiwani Street, Ubungo",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+255748281617",
    contactType: "sales",
    areaServed: "TZ",
    availableLanguage: ["en", "sw"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.domain}/#localbusiness`,
  name: "Stellar Technologies Limited — StellarPOS Tanzania",
  image: `${SITE.domain}/favicon.png`,
  url: SITE.domain,
  telephone: "+255748281617",
  email: SITE.email,
  priceRange: "TZS 360,000 - TZS 960,000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kisiwani Street, Ubungo",
    addressLocality: "Dar es Salaam",
    addressRegion: "Dar es Salaam",
    addressCountry: "TZ",
  },
  geo: { "@type": "GeoCoordinates", latitude: -6.7924, longitude: 39.2083 },
  areaServed: { "@type": "Country", name: "Tanzania" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "16:00" },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "StellarPOS — POS System Tanzania",
  brand: { "@type": "Brand", name: "StellarPOS" },
  description:
    "StellarPOS point of sale software for Tanzanian businesses: sales, inventory management, customers, employees, purchases, expenses, reporting and multi-branch operations.",
  category: "Point of Sale Software",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127" },
  offers: PLANS.map((p) => ({
    "@type": "Offer",
    name: `StellarPOS ${p.name}`,
    price: p.price.replace(/,/g, ""),
    priceCurrency: "TZS",
    availability: "https://schema.org/InStock",
    url: `${SITE.domain}/#pricing`,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      {
        name: "keywords",
        content:
          "POS System Tanzania, POS Software Tanzania, POS Tanzania, Point of Sale System Tanzania, Retail POS Tanzania, Restaurant POS Tanzania, Inventory Management Software Tanzania, Business POS Software Tanzania",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "en_TZ" },
      { property: "og:site_name", content: "StellarPOS Tanzania" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(organizationSchema) },
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
      { type: "application/ld+json", children: JSON.stringify(productSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <Features />
        <Integrations />
        <Industries />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
