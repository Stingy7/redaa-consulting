import { SectionLabel } from "@/components/section-label";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experience = [
  {
    period: "2020 - Present",
    role: "Senior Strategy Consultant",
    company: "Global Consulting Partners",
    description:
      "Leading digital transformation initiatives for Fortune 500 companies. Delivering strategic roadmaps and implementation plans that drive measurable business outcomes.",
  },
  {
    period: "2017 - 2020",
    role: "Management Consultant",
    company: "McKinley & Associates",
    description:
      "Developed growth strategies for mid-market technology companies. Led cross-functional teams through complex operational improvements.",
  },
  {
    period: "2014 - 2017",
    role: "Business Analyst",
    company: "Deloitte Digital",
    description:
      "Conducted market analysis and competitive research for clients across financial services, healthcare, and technology sectors.",
  },
];

const education = [
  {
    period: "2012 - 2014",
    degree: "MBA, Strategy & Innovation",
    school: "Harvard Business School",
  },
  {
    period: "2008 - 2012",
    degree: "BSc Economics",
    school: "London School of Economics",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "150+", label: "Projects Delivered" },
  { value: "95%", label: "Client Satisfaction" },
];

export function CVSection() {
  return (
    <section id="cv" className="max-w-5xl mx-auto py-16 flex flex-col gap-12">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-panel px-8 py-8 text-center flex flex-col gap-2"
          >
            <span className="font-serif text-4xl md:text-5xl text-primary">
              {stat.value}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="glass-panel px-8 py-10 md:px-12 flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <Briefcase className="h-5 w-5 text-primary" />
          <SectionLabel label="Experience" />
        </div>
        <div className="flex flex-col gap-8">
          {experience.map((item) => (
            <div
              key={item.role}
              className="flex flex-col md:flex-row gap-4 md:gap-8"
            >
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground md:w-36 shrink-0 pt-1">
                {item.period}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-foreground font-medium">{item.role}</h3>
                <span className="text-primary text-sm">{item.company}</span>
                <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="glass-panel px-8 py-10 md:px-12 flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-5 w-5 text-primary" />
          <SectionLabel label="Education" />
        </div>
        <div className="flex flex-col gap-8">
          {education.map((item) => (
            <div
              key={item.degree}
              className="flex flex-col md:flex-row gap-4 md:gap-8"
            >
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground md:w-36 shrink-0 pt-1">
                {item.period}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-foreground font-medium">{item.degree}</h3>
                <span className="text-primary text-sm">{item.school}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="glass-panel px-8 py-10 md:px-12 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Award className="h-5 w-5 text-primary" />
          <SectionLabel label="Core Skills" />
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            "Strategy Development",
            "Digital Transformation",
            "Process Automation",
            "Cost Optimization",
            "Revenue Growth",
            "Change Management",
            "Project Management",
            "Team Leadership",
          ].map((skill) => (
            <span
              key={skill}
              className="text-xs uppercase tracking-[0.15em] text-foreground bg-secondary/60 border border-foreground/5 rounded-full px-4 py-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
