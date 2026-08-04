import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import p1 from "@/assets/person-1.jpg";
import p2 from "@/assets/person-2.jpg";
import p3 from "@/assets/person-3.jpg";
import p4 from "@/assets/person-4.jpg";

const testimonials = [
  {
    photo: p1,
    name: "Hamisi Mwakalinga",
    role: "Owner, Mwakalinga General Store — Kariakoo, Dar es Salaam",
    quote:
      "Before StellarPOS I was counting stock by hand every Sunday. Now sales take seconds, I see my profit every evening on my phone, and stock losses have dropped by almost 40%.",
  },
  {
    photo: p2,
    name: "Neema Kileo",
    role: "Director, Afya Bora Pharmacy — Mwanza",
    quote:
      "The expiry and low stock alerts alone have saved us millions of shillings. Installation and training took one day and the support team answers on WhatsApp immediately.",
  },
  {
    photo: p3,
    name: "Baraka Mushi",
    role: "Owner, Kilimanjaro Grill Restaurant — Arusha",
    quote:
      "Orders go straight to the kitchen, waiters no longer lose bills, and I can compare daily sales between my two outlets from one screen. Service is much faster.",
  },
  {
    photo: p4,
    name: "Grace Ndossi",
    role: "General Manager, Zawadi Supermarket — Dodoma",
    quote:
      "We run four tills on StellarPOS. Queues move quickly, cashier shortages are visible instantly, and monthly profit reporting that used to take a week now takes minutes.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary/60 py-20 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by businesses across Tanzania"
          description="Real results from shops, pharmacies, restaurants and supermarkets using StellarPOS every day."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-2xl border border-border bg-card p-7 shadow-card">
              <Quote className="absolute right-6 top-6 size-8 text-accent" aria-hidden="true" />
              <div className="flex gap-0.5" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={`${t.name}, StellarPOS customer in Tanzania`}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="size-12 shrink-0 rounded-full object-cover"
                />
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-foreground">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
