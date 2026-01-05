import { Code, Database, Brain, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: [
      { name: "Python", level: "Advanced" },
      { name: "C++", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "SQL", level: "Advanced" },
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    skills: [
      { name: "LLM Reasoning", level: "Research" },
      { name: "NLP", level: "Advanced" },
      { name: "Predictive Modeling", level: "Advanced" },
      { name: "Time-Series Analysis", level: "Advanced" },
      { name: "Multimodal ML", level: "Intermediate" },
      { name: "Model Evaluation", level: "Advanced" },
    ],
  },
  {
    icon: Wrench,
    title: "Libraries & Frameworks",
    skills: [
      { name: "PyTorch", level: "Advanced" },
      { name: "TensorFlow", level: "Intermediate" },
      { name: "Pandas", level: "Advanced" },
      { name: "NumPy", level: "Advanced" },
      { name: "Scikit-learn", level: "Advanced" },
      { name: "Matplotlib/Seaborn", level: "Advanced" },
    ],
  },
  {
    icon: Database,
    title: "Data & Tools",
    skills: [
      { name: "SQL Databases", level: "Advanced" },
      { name: "PySpark", level: "Foundational" },
      { name: "Dashboards", level: "Intermediate" },
      { name: "Experiment Tracking", level: "Intermediate" },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Compute",
    skills: [
      { name: "AWS", level: "Intermediate" },
      { name: "GPU Training", level: "Advanced" },
      { name: "Distributed Computing", level: "Foundational" },
    ],
  },
];

const getLevelStyles = (level: string) => {
  switch (level) {
    case "Advanced":
    case "Research":
      return "bg-primary text-primary-foreground shadow-glow-sm";
    case "Intermediate":
      return "bg-primary/20 text-primary border border-primary/30";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
              Technical Expertise
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              A comprehensive toolkit spanning programming, machine learning, 
              and cloud technologies.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group p-6 glass rounded-2xl border border-border/50 hover-glow hover-lift animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <category.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all hover:scale-105 ${getLevelStyles(
                        skill.level
                      )}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary shadow-glow-sm" />
              <span className="text-sm text-muted-foreground">Advanced/Research</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary/30 border border-primary/50" />
              <span className="text-sm text-muted-foreground">Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-muted" />
              <span className="text-sm text-muted-foreground">Foundational</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
