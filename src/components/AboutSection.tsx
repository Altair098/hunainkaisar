import { Brain, Sparkles, Target, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Research Focus",
      description: "LLM reasoning, hallucination analysis, uncertainty quantification",
    },
    {
      icon: Sparkles,
      title: "Industry Background",
      description: "Samsung R&D and Amazon experience in large-scale systems",
    },
    {
      icon: Target,
      title: "Research Goals",
      description: "Building reliable, interpretable, and robust AI systems",
    },
    {
      icon: Users,
      title: "Seeking Opportunities",
      description: "PhD positions, research collaborations, and AI/ML roles",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Bridging Industry & Research
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A passionate AI researcher transitioning from industry software roles 
              to cutting-edge machine learning research.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Text */}
            <div className="space-y-6 animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm currently in my final semester pursuing a{" "}
                  <span className="text-foreground font-medium">
                    Master of Science in Electrical and Computer Engineering
                  </span>{" "}
                  at King Fahd University of Petroleum and Minerals (KFUPM), 
                  with an expected graduation in May 2026.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  My research interests lie at the intersection of{" "}
                  <span className="text-primary font-medium">Large Language Models</span>,{" "}
                  <span className="text-primary font-medium">reasoning verification</span>, and{" "}
                  <span className="text-primary font-medium">uncertainty quantification</span>. 
                  I'm particularly fascinated by understanding and mitigating hallucinations in LLMs, 
                  making AI systems more reliable and trustworthy.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Before diving into research, I gained valuable industry experience at 
                  Samsung R&D working on 5G communication protocols and at Amazon as a 
                  Data Analyst. This unique blend of industry expertise and research 
                  aspirations drives my approach to solving complex AI challenges.
                </p>
              </div>

              {/* Education Timeline */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h3 className="font-display font-semibold text-xl">Education</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">MS in Electrical & Computer Engineering</p>
                      <p className="text-muted-foreground">KFUPM • Expected May 2026</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">B.Tech in Electronics & Communication</p>
                      <p className="text-muted-foreground">NIT Srinagar • June 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-4 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
