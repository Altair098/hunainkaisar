import { Calendar, ArrowUpRight } from "lucide-react";
import { SamsungIcon, AmazonIcon } from "./icons/BrandIcons";
import { LucideProps } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  icon: React.ComponentType<LucideProps>;
};

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Samsung R&D",
    period: "Feb 2022 – Dec 2022",
    description: "Communication Protocol Team",
    highlights: [
      "Built and optimized communication pathways between Android Telephony Services and Baseband HAL",
      "Utilized IPC/QMI protocols for robust 5G network functionality",
      "Developed firmware modules in Java and C++",
      "Designed an in-house Python-based log analyzer for modem debugging and diagnostics",
    ],
    technologies: ["Java", "C++", "Python", "IPC/QMI", "5G", "Android"],
    icon: SamsungIcon,
  },
  {
    title: "Data Analyst",
    company: "Amazon",
    period: "Jan 2023 – Nov 2023",
    description: "Data Analytics & Insights (Remote)",
    highlights: [
      "Analyzed large-scale datasets using Python and SQL",
      "Supported predictive modeling, performance analysis, and business insights",
      "Conducted data-driven evaluations to guide modeling decisions",
    ],
    technologies: ["Python", "SQL", "Data Analysis", "Predictive Modeling"],
    icon: AmazonIcon,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
              Professional Background
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Industry <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Professional roles that shaped my understanding of scalable systems 
              and drove my transition to AI research.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="group glass rounded-3xl border border-border/50 p-8 hover-glow hover-lift animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <exp.icon className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {exp.company} • {exp.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-muted-foreground text-sm shrink-0">
                    <Calendar size={14} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 pl-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <ArrowUpRight size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
