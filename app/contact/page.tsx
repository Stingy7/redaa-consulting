import { Navigation } from "@/components/navigation";
import { PageShell } from "@/components/page-shell";
import { SectionLabel } from "@/components/section-label";
import { ContactForm } from "@/components/contact-form";
import { Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <PageShell>
        <section className="max-w-2xl mx-auto py-16 flex flex-col gap-8">
          <div className="glass-panel px-8 py-12 flex flex-col items-center gap-6 text-center">
            <SectionLabel label="Contact" />
            <h1 className="font-serif text-4xl md:text-5xl leading-tight text-balance text-foreground">
              Get in touch
            </h1>
            <div className="flex items-center gap-3 text-primary">
              <Phone className="h-5 w-5 shrink-0" />
              <p className="text-muted-foreground text-sm md:text-base">
                Submit the form below and I&apos;ll call you within{" "}
                <span className="text-primary font-medium">15 minutes</span>.
              </p>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Whether you want to automate your business, grow revenue, cut
              costs, or reclaim your time—tell me what you&apos;re working on
              and we&apos;ll find the next step.
            </p>
          </div>
          <ContactForm />
        </section>
      </PageShell>
    </>
  );
}
