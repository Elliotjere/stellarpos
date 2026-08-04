import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { SITE, WHATSAPP_URL } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  business: z.string().trim().max(120).optional(),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  email: z.string().trim().email("Please enter a valid email address").max(255).or(z.literal("")),
  message: z.string().trim().min(5, "Please tell us a little about your business").max(1000),
});

const hours = [
  ["Monday – Friday", "8:00 AM – 6:00 PM"],
  ["Saturday", "9:00 AM – 4:00 PM"],
  ["Sunday & Public Holidays", "Closed (WhatsApp support available)"],
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setSubmitting(true);
    const v = parsed.data;
    const body = `New StellarPOS demo request%0D%0A%0D%0AName: ${encodeURIComponent(v.name)}%0D%0ABusiness: ${encodeURIComponent(
      v.business ?? "",
    )}%0D%0APhone: ${encodeURIComponent(v.phone)}%0D%0AEmail: ${encodeURIComponent(v.email)}%0D%0A%0D%0A${encodeURIComponent(v.message)}`;

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      "Demo request — StellarPOS",
    )}&body=${body}`;

    toast.success("Thank you! Your email app is opening — or message us on WhatsApp for a faster reply.");
    form.reset();
    setSubmitting(false);
  }

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30";

  return (
    <section id="contact" className="bg-secondary/60 py-20 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Request a free StellarPOS demo"
          description="Tell us about your business and our team in Dar es Salaam will get back to you with a demo, pricing and an installation plan."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <h3 className="text-lg font-bold text-foreground">{SITE.company}</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <address className="not-italic text-muted-foreground">
                    Kisiwani Street,<br />Ubungo,<br />Dar es Salaam, Tanzania
                  </address>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <a href={`mailto:${SITE.email}`} className="text-muted-foreground hover:text-primary">
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    WhatsApp {SITE.phoneDisplay}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <h3 className="flex items-center gap-2 text-sm font-bold text-foreground">
                <Clock className="size-4 text-primary" aria-hidden="true" /> Business hours
              </h3>
              <dl className="mt-4 space-y-2 text-sm">
                {hours.map(([d, t]) => (
                  <div key={d} className="flex flex-wrap justify-between gap-2">
                    <dt className="text-muted-foreground">{d}</dt>
                    <dd className="font-medium text-foreground">{t}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="Stellar Technologies Limited office location in Ubungo, Dar es Salaam"
                src="https://www.google.com/maps?q=Ubungo,+Dar+es+Salaam,+Tanzania&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 shadow-card">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">Full name *</label>
                <input id="name" name="name" required maxLength={100} className={inputClass} placeholder="Juma Said" />
              </div>
              <div>
                <label htmlFor="business" className="mb-1.5 block text-sm font-medium text-foreground">Business name</label>
                <input id="business" name="business" maxLength={120} className={inputClass} placeholder="Said Mini Supermarket" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">Phone / WhatsApp *</label>
                <input id="phone" name="phone" type="tel" required maxLength={30} className={inputClass} placeholder="+255 7XX XXX XXX" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                <input id="email" name="email" type="email" maxLength={255} className={inputClass} placeholder="you@business.co.tz" />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">How can we help? *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={1000}
                className={inputClass}
                placeholder="I run a retail shop in Dar es Salaam and need a POS system with inventory management."
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-60"
            >
              <Send className="size-4" aria-hidden="true" /> Request Demo
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Prefer instant answers?{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                Chat with us on WhatsApp
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
