import { Navigation } from "@/components/navigation";
import { PageShell } from "@/components/page-shell";
import { SectionLabel } from "@/components/section-label";
import { PricingForm } from "@/components/pricing-form";
import { Check, Phone } from "lucide-react";

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <PageShell>
        <section className="max-w-2xl mx-auto py-16 flex flex-col gap-10">
          <div className="glass-panel px-8 py-12 flex flex-col items-center gap-6 text-center">
            <SectionLabel label="Pricing" />
            <h1 className="font-serif text-4xl md:text-5xl leading-tight text-balance text-foreground">
              Simple, flexible pricing
            </h1>
            <p className="text-muted-foreground text-sm max-w-md">
              Start with a free discovery call. For ongoing work, choose an
              amount that fits your budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-panel px-8 py-8 flex flex-col gap-4 border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Discovery
                </span>
              </div>
              <span className="font-serif text-2xl text-foreground">Free</span>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  Initial consultation call
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  Problem assessment
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  High-level recommendations
                </li>
              </ul>
            </div>

            <div className="glass-panel px-8 py-8 flex flex-col gap-4">
              <PricingForm />
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
