import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { Menu, X, Mail, MessageCircle, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/stellarpos-logo.png.asset.json";
import { NAV_LINKS, SITE, WHATSAPP_URL } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-elevated" : "bg-navy"
      }`}
    >
      <div className="hidden border-b border-white/10 lg:block">
        <div className="section-shell flex h-9 items-center justify-between gap-6 text-xs text-navy-foreground/70">
          <div className="flex items-center gap-5">
            <a className="inline-flex items-center gap-2 hover:text-primary" href={`mailto:${SITE.email}`}>
              <Mail className="size-3.5" aria-hidden="true" /> {SITE.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-3.5 text-primary" aria-hidden="true" />
              {SITE.address.street}, {SITE.address.city}
            </span>
            <a className="inline-flex items-center gap-2 hover:text-primary" href={`tel:+${SITE.phoneRaw}`}>
              <Phone className="size-3.5 text-primary" aria-hidden="true" /> {SITE.phoneDisplay}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-primary">
              <MessageCircle className="size-4" aria-hidden="true" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary">
              <Facebook className="size-4" aria-hidden="true" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary">
              <Instagram className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <nav className="section-shell grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:h-20" aria-label="Main">
        <a href={isHome ? "#home" : "/#home"} className="flex min-w-0 items-center" aria-label={`${SITE.product} home`}>
          <img src={logo.url} alt="StellarPOS by Stellar Technologies Limited logo" className="h-7 w-auto lg:h-9" width={1043} height={239} />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={isHome ? l.href : `/${l.href}`}
              className="rounded-md px-3 py-2 text-sm font-medium text-navy-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            <span className="flex flex-col leading-none">
              <span>WhatsApp</span>
              <span className="text-[10px] font-medium opacity-90">{SITE.phoneDisplay}</span>
            </span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="justify-self-end rounded-md p-2 text-navy-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy lg:hidden">
          <div className="section-shell flex flex-col gap-1 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={isHome ? l.href : `/${l.href}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-navy-foreground/85 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="px-2 py-2 text-xs text-navy-foreground/70">
              {SITE.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
