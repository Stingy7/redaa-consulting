import { SectionLabel } from "@/components/section-label";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 py-16 md:py-24">
      <div className="glass-panel px-8 py-12 md:px-16 md:py-20 flex flex-col items-center gap-6">
        <SectionLabel label="Welcome" />
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-balance text-foreground">
          Automate your business.
          <br />
          Increase earnings. Cut expenses.
        </h1>
        <p className="max-w-xl text-muted-foreground leading-relaxed text-sm md:text-base">
          Stop wasting time on the same tasks. I help you scale without adding
          headcount, grow revenue, reduce costs, and focus on what matters.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
          >
            Get in touch
          </Link>
          <Link
            href="/how-i-can-help"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
          >
            How I can help
          </Link>
        </div>
        <div className="flex items-center gap-1 mt-4 text-primary">
          <ArrowDown className="h-4 w-4 animate-bounce" />
          <span className="text-xs uppercase tracking-[0.2em]">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}
