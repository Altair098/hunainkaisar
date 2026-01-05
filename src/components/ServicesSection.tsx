import { Users, Briefcase, GraduationCap, Code, FileText, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Research Collaborations",
    description:
      "Open to collaborating on LLM reasoning, hallucination detection, and AI reliability research projects.",
  },
  {
    icon: Briefcase,
    title: "Industry AI/ML Roles",
    description:
      "Seeking machine learning engineer or research scientist positions in innovative AI teams.",
  },
  {
    icon: GraduationCap,
    title: "PhD Applications",
    description:
      "Actively applying to PhD programs focused on NLP, LLMs, and trustworthy AI systems.",
  },
  {
    icon: Code,
    title: "Freelance AI Projects",
    description:
      "Available for consulting on ML pipelines, model evaluation, and AI system design.",
  },
  {
    icon: FileText,
    title: "Internships",
    description:
      "Open to research internships at academic labs and industry AI research divisions.",
  },
  {
    icon: Lightbulb,
    title: "Research Assistance",
    description:
      "Can provide support for NLP experiments, model benchmarking, and technical writing.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
              Opportunities
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              What I'm Looking For
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Actively seeking opportunities to contribute to cutting-edge AI research 
              and development.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
