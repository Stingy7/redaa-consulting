import { SectionLabel } from "@/components/section-label";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experience = [
  {
    period: "Feb 2025 - Present",
    role: "Advanced Policy Analyst Program Manager",
    company: "Treasury Board Secretariat",
    description:
      "Manage a specialized federal program while overseeing HR, administration, and finance. Provide strategic policy guidance, lead cross-departmental coordination, and administer a $500K+ budget with strong governance controls.",
  },
  {
    period: "Jun 2023 - Feb 2025",
    role: "Risk Management Analyst / Planning and Performance Analyst",
    company: "Public Services and Procurement Canada",
    description:
      "Built enterprise IT risk frameworks and executive dashboards for key ministerial priorities. Delivered risk assessments, stakeholder engagement, and reporting workflows using SQL, Python, Tableau, and Agile practices.",
  },
  {
    period: "Feb 2023 - Jun 2023",
    role: "Team Leader",
    company: "Passport Canada",
    description:
      "Led IT operations during a high-pressure period, supporting 250+ call center staff across extended shifts. Implemented training and technical job aids, and improved performance tracking with SQL and Python insights.",
  },
  {
    period: "May 2021 - Apr 2023",
    role: "Administrative and Financial Advisor",
    company: "Passport Canada",
    description:
      "Managed IT asset and policy operations, built scheduling and HR dashboards, and automated recurring workflows. Introduced data-driven process improvements that increased call center scheduling efficiency by 20%.",
  },
];

const education = [
  {
    period: "2018 - 2021",
    degree: "Bachelor of Commerce (Finance), Minor in Information Systems",
    school: "McGill University - Desautels Faculty of Management",
  },
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "$500K+", label: "Program Budget Managed" },
  { value: "250+", label: "Team Members Supported" },
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
            "Program Management",
            "Policy Analysis",
            "Risk Management",
            "Process Automation",
            "Data Analysis (SQL/Python)",
            "Dashboarding (Tableau/Excel)",
            "Stakeholder Engagement",
            "Bilingual: English/French/Arabic",
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
