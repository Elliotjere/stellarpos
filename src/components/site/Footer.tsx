import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/stellarpos-logo.png.asset.json";
import { NAV_LINKS, SITE, WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

const industries = [
  { label: "Cosmetics & Beauty Shop POS", to: "/beauty-shops" },
  { label: "Retail POS Tanzania", to: "/#industries" },
  { label: "Supermarket POS", to: "/#industries" },
  { label: "Pharmacy POS", to: "/#industries" },
  { label: "Restaurant POS Tanzania", to: "/#industries" },
  { label: "Wholesale POS", to: "/#industries" },
];

export function Footer() {
  return (
    <footer className="surface-navy">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo.url} alt="StellarPOS logo" width={1043} height={239} loading="lazy" className="h-8 w-auto" />
          <p className="mt-5 text-sm leading-relaxed text-navy-foreground/70">
            StellarPOS is a complete point of sale and inventory management system for businesses in Tanzania,
            developed and supported by {SITE.company} in Dar es Salaam.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-bold text-navy-foreground">Quick links</h2>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-navy-foreground/70 hover:text-primary">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold text-navy-foreground">Solutions</h2>
          <ul className="mt-4 space-y-2.5">
            {industries.map((i) => (
              <li key={i.label}>
                <Link to={i.to} className="text-sm text-navy-foreground/70 hover:text-primary">{i.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-navy-foreground">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              Kisiwani Street, Ubungo, Dar es Salaam
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-wrap items-center justify-between gap-3 py-6 text-xs text-navy-foreground/55">
          <p>© {new Date().getFullYear()} {SITE.company}. All rights reserved.</p>
          <p>POS System Tanzania · POS Software Tanzania · Point of Sale System Tanzania</p>
        </div>
      </div>
    </footer>
  );
}
