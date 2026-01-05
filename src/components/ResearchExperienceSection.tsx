import { FlaskConical, Calendar, ArrowUpRight, GraduationCap } from "lucide-react";

const researchExperiences = [
  {
    institution: "Indian Statistical Institute (ISI)",
    role: "Research Intern",
    period: "Jan 2021 – Mar 2021",
    mentor: "Prof. Shankar Kumar Pal",
    highlights: [
      "Implemented image segmentation techniques using fuzzy logic, and benchmarked performance against classical thresholding methods",
      "Conducted comparative evaluations to analyze robustness and segmentation quality",
      "Explored decentralized learning architectures for energy-aware smart grid monitoring systems",
      "Focused on efficiency, scalability, and distributed intelligence in real-world sensing environments",
    ],
    themes: ["Fuzzy Logic", "Image Segmentation", "Smart Grids", "Decentralized Learning"],
  },
  {
    institution: "National Institute of Technology Srinagar",
    role: "Research Intern",
    period: "Oct 2022 – Apr 2023",
    mentor: "Dr. Iqra Altaf Gillani",
    highlights: [
      "Designed decentralized voice assistant models using federated learning",
      "Worked with structured SQL-based datasets across distributed clients",
      "Conducted experiments analyzing data privacy preservation and communication efficiency",
      "Evaluated model performance trade-offs across local nodes with emphasis on privacy-aware learning",
    ],
    themes: ["Federated Learning", "Voice Assistants", "Privacy-Preserving ML", "Distributed Systems"],
  },
];

const ResearchExperienceSection = () => {
  return (
    <section id="research" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
              Academic Research
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Research <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Early research exposure that shaped my passion for AI, machine learning, 
              and privacy-preserving distributed systems.
            </p>
          </div>

          {/* Research Cards */}
          <div className="space-y-8">
            {researchExperiences.map((exp, index) => (
              <div
                key={exp.institution}
                className="group glass rounded-3xl border border-border/50 p-8 hover-glow hover-lift animate-fade-in-up relative"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Timeline connector */}
                {index < researchExperiences.length - 1 && (
                  <div className="absolute left-[2.25rem] top-[5.5rem] bottom-[-2rem] w-px bg-gradient-to-b from-primary/30 to-transparent hidden md:block" />
                )}
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 relative z-10">
                      <FlaskConical className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {exp.institution}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-muted-foreground text-sm shrink-0">
                    <Calendar size={14} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                {/* Mentor Badge */}
                <div className="flex items-center gap-2 mb-6 pl-2">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <GraduationCap size={16} className="text-primary" />
                    <span className="text-sm font-medium text-primary">Mentor: {exp.mentor}</span>
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
                  {exp.themes.map((theme) => (
                    <span
                      key={theme}
                      className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      {theme}
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

export default ResearchExperienceSection;
