import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";
import { FAQS } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions about POS systems in Tanzania"
          description="Answers to what business owners ask us most before choosing a point of sale system."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                  <h3 className="text-base font-semibold">{f.q}</h3>
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
