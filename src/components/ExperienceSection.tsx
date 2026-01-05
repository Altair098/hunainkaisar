import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const experiences = [
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
  },
  {
    title: "Data Analyst",
    company: "Amazon",
    period: "Remote",
    description: "Data Analytics & Insights",
    highlights: [
      "Analyzed large-scale datasets using Python and SQL",
      "Supported predictive modeling, performance analysis, and business insights",
      "Conducted data-driven evaluations to guide modeling decisions",
    ],
    technologies: ["Python", "SQL", "Data Analysis", "Predictive Modeling"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
              Professional Background
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Work Experience
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Industry experience that shaped my understanding of scalable systems 
              and drove my transition to AI research.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={exp.title}
                variant="elevated"
                className="animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="text-primary" size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{exp.title}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {exp.company} • {exp.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
