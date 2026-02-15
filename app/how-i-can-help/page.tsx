import { Navigation } from "@/components/navigation";
import { PageShell } from "@/components/page-shell";
import { SectionLabel } from "@/components/section-label";
import { ServicesList } from "@/components/services-list";

export default function HowICanHelpPage() {
  return (
    <>
      <Navigation />
      <PageShell>
        <section className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 py-16 md:py-24">
          <div className="glass-panel px-8 py-12 md:px-16 md:py-20 flex flex-col items-center gap-6">
            <SectionLabel label="How I Can Help" />
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-balance text-foreground">
              Automate. Earn more.
              <br />
              Spend less. Do less busywork.
            </h1>
            <p className="max-w-xl text-muted-foreground leading-relaxed text-sm md:text-base">
              I help you scale your business without scaling your hours or
              headcount—through automation, revenue growth, cost control, and
              smarter use of your time.
            </p>
          </div>
        </section>
        <ServicesList />
      </PageShell>
    </>
  );
}
