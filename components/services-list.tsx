import { SectionLabel } from "@/components/section-label";
import {
  Bot,
  TrendingUp,
  PiggyBank,
  Clock,
  type LucideIcon,
} from "lucide-react";

const services: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Bot,
    title: "Automate your business",
    description:
      "Reduce manual work and scale without adding headcount. I help you identify repetitive tasks, choose the right tools, and implement automation that saves hours every week.",
  },
  {
    icon: TrendingUp,
    title: "Increase your earnings",
    description:
      "Strategy and execution to grow revenue. From pricing and positioning to new revenue streams, I work with you to turn opportunities into measurable results.",
  },
  {
    icon: PiggyBank,
    title: "Decrease your expenses",
    description:
      "Cut waste and optimize costs without sacrificing quality. I help you find inefficiencies, renegotiate contracts, and streamline operations so you keep more of what you earn.",
  },
  {
    icon: Clock,
    title: "Reduce time on redundant work",
    description:
      "Systems and processes so you focus on what matters. I design workflows and habits that eliminate busywork and free you to work on high-impact activities.",
  },
];

export function ServicesList() {
  return (
    <section className="max-w-5xl mx-auto py-16 flex flex-col gap-12">
      <div className="glass-panel px-8 py-10 md:px-12 flex flex-col gap-4">
        <SectionLabel label="Services" />
        <h2 className="font-serif text-2xl md:text-4xl text-foreground text-balance">
          Where I bring the most value.
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
          Every engagement starts with understanding your unique challenges. Here
          are the four areas where I help businesses like yours win.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="glass-panel px-8 py-8 flex flex-col gap-4 group hover:border-primary/20 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-foreground font-medium">{service.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
