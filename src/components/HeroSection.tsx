import { ArrowRight, GraduationCap, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/hunain-profile.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 text-sm">
                <Sparkles size={14} className="text-primary" />
                <span className="text-muted-foreground">Open to opportunities</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1]">
                Hi, I'm{" "}
                <span className="text-gradient">Hunain Kaisar</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                AI Researcher • ML Engineer • Software Engineer
              </p>
            </div>

            <p 
              className="text-muted-foreground text-lg leading-relaxed max-w-xl animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Master's student at KFUPM specializing in AI research, with a focus on{" "}
              <span className="text-foreground font-medium">LLM reasoning</span>,{" "}
              <span className="text-foreground font-medium">hallucination analysis</span>, and{" "}
              <span className="text-foreground font-medium">model reliability</span>. 
              Transitioning from industry experience at Samsung R&D and Amazon.
            </p>

            <div 
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="text-muted-foreground" asChild>
                <a
                  href="https://scholar.google.com/citations?user=QMh_z-MAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GraduationCap size={18} /> Google Scholar
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div 
              className="flex flex-wrap gap-8 pt-6 border-t border-border/50 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="space-y-1">
                <p className="text-4xl font-display font-bold text-gradient">5+</p>
                <p className="text-sm text-muted-foreground">Research Projects</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-display font-bold text-gradient">2+</p>
                <p className="text-sm text-muted-foreground">Years Industry</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-display font-bold text-gradient">MS</p>
                <p className="text-sm text-muted-foreground">KFUPM 2026</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div 
            className="relative flex justify-center lg:justify-end animate-scale-in" 
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative group">
              {/* Animated ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-primary/50 opacity-50 animate-glow" />
              
              <img
                src={profilePhoto}
                alt="Hunain Kaisar - AI Researcher"
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-2 border-primary/30 shadow-glow"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 glass border border-border/50 rounded-2xl p-4 shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <BookOpen className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Seeking</p>
                    <p className="text-xs text-muted-foreground">PhD & Research</p>
                  </div>
                </div>
              </div>

              {/* Additional floating element */}
              <div 
                className="absolute -top-4 -left-4 glass border border-border/50 rounded-xl px-4 py-2 shadow-card animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <p className="text-xs font-medium text-primary">AI Research</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
