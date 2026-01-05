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

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
    case "Research":
      return "bg-primary text-primary-foreground";
    case "Intermediate":
      return "bg-primary/20 text-primary";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
              Technical Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit spanning programming, machine learning, 
              and cloud technologies.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg ${getLevelColor(
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
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
