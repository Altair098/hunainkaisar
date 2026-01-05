import { Users, Briefcase, GraduationCap, Code, FileText, Lightbulb, ArrowRight } from "lucide-react";

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
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
              Opportunities
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              What I'm <span className="text-gradient">Looking For</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Actively seeking opportunities to contribute to cutting-edge AI research 
              and development.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-6 glass rounded-2xl border border-border/50 hover-glow hover-lift animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="text-primary" size={26} />
                  </div>
                  <ArrowRight 
                    size={20} 
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" 
                  />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
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
