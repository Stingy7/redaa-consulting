import { Navigation } from "@/components/navigation";
import { PageShell } from "@/components/page-shell";
import { HeroSection } from "@/components/hero-section";
import { CVSection } from "@/components/cv-section";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <PageShell>
        <HeroSection />
        <CVSection />
      </PageShell>
    </>
  );
}
