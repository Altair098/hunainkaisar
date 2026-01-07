import { Brain, Sparkles, Target, Users, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import About3DCard from "./About3DCard";

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();
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

          {/* Content Grid with 3D Effect */}
          <About3DCard className="relative">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Bio Text */}
              <motion.div 
                className="space-y-8"
                style={{ transform: "translateZ(20px)" }}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    I'm currently in my final semester pursuing a{" "}
                    <span className="text-foreground font-medium">Master of Science in Electrical and Computer Engineering</span>{" "}
                    at King Fahd University of Petroleum and Minerals (KFUPM), 
                    with an expected graduation in May 2026.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    My research interests lie at the intersection of{" "}
                    <span className="text-primary font-medium">Large Language Models</span>,{" "}
                    <span className="text-primary font-medium">Generative AI</span>, and{" "}
                    <span className="text-primary font-medium">Computer Vision</span>. 
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
                      <p className="font-semibold text-base text-justify mx-0 px-0">MS in Electrical & Computer Engineering</p>
                      <p className="text-muted-foreground text-sm">KFUPM • Expected May 2026 • CGPA: 3.813/4</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-muted -translate-x-[7px]" />
                      <p className="font-semibold">B.Tech in Electronics & Communication</p>
                      <p className="text-muted-foreground text-sm">NIT Srinagar • June 2022 • CGPA: 3.34/4</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Highlight Cards */}
              <motion.div 
                className="grid sm:grid-cols-2 gap-4"
                style={{ transform: "translateZ(28px)" }}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {highlights.map((item, index) => (
                  <motion.div 
                    key={item.title} 
                    className="group p-6 glass rounded-2xl border border-border/50 hover-glow"
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + 0.1 * index }}
                    whileHover={shouldReduceMotion ? {} : { 
                      y: -4, 
                      scale: 1.02,
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    <ChevronRight size={16} className="mt-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </About3DCard>
        </div>
      </div>
    </section>;
};
export default AboutSection;