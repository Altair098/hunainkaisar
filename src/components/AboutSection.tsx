import { Brain, Sparkles, Target, Users, ChevronRight } from "lucide-react";
const AboutSection = () => {
  const highlights = [{
    icon: Brain,
    title: "AI Research Focus",
    description: "LLM reasoning, hallucination analysis, uncertainty quantification"
  }, {
    icon: Sparkles,
    title: "Industry Background",
    description: "Samsung R&D and Amazon experience in large-scale systems"
  }, {
    icon: Target,
    title: "Research Goals",
    description: "Building reliable, interpretable, and robust AI systems"
  }, {
    icon: Users,
    title: "Seeking Opportunities",
    description: "PhD positions, research collaborations, and AI/ML roles"
  }];
  return <section id="about" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up" style={{
            animationDelay: "0.1s"
          }}>
              Bridging Industry{" "}
              <span className="text-gradient">&</span> Research
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{
            animationDelay: "0.2s"
          }}>
              A passionate AI researcher transitioning from industry software roles 
              to cutting-edge machine learning research.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio Text */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm currently in my final semester pursuing a{" "}
                  <span className="text-foreground font-medium">Master of Science in Electrical and Computer Engineering with a CGPA of 3.82/4 </span>{" "}
                  at King Fahd University of Petroleum and Minerals (KFUPM), 
                  with an expected graduation in May 2026.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  My research interests lie at the intersection of{" "}
                  <span className="text-primary font-medium">Large Language Models</span>,{" "}
                  <span className="text-primary font-medium">reasoning verification</span>, and{" "}
                  <span className="text-primary font-medium">uncertainty quantification</span>. 
                  I'm particularly fascinated by understanding and mitigating hallucinations in LLMs.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Before diving into research, I gained valuable industry experience at 
                  Samsung R&D working on 5G communication protocols and at Amazon as a 
                  Data Analyst.
                </p>
              </div>

              {/* Education Timeline */}
              <div className="space-y-4 pt-6">
                <h3 className="font-display font-semibold text-xl flex items-center gap-2">
                  <div className="w-8 h-0.5 bg-gradient-primary" />
                  Education
                </h3>
                
                <div className="space-y-4 pl-4 border-l-2 border-border">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary -translate-x-[7px]" />
                    <p className="font-semibold">MS in Electrical & Computer Engineering</p>
                    <p className="text-muted-foreground text-sm">KFUPM • Expected May 2026</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-muted -translate-x-[7px]" />
                    <p className="font-semibold">B.Tech in Electronics & Communication</p>
                    <p className="text-muted-foreground text-sm">NIT Srinagar • June 2022</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => <div key={item.title} className="group p-6 glass rounded-2xl border border-border/50 hover-glow hover-lift animate-fade-in-up" style={{
              animationDelay: `${0.1 + 0.1 * index}s`
            }}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  <ChevronRight size={16} className="mt-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;