import { ArrowRight, ExternalLink, GraduationCap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-primary font-medium text-sm uppercase tracking-widest">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                I'm{" "}
                <span className="text-gradient">Hunain Kaisar</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                AI Researcher | ML Engineer | Software Engineer
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Master's student at KFUPM specializing in AI research, with a focus on{" "}
              <span className="text-foreground font-medium">LLM reasoning</span>,{" "}
              <span className="text-foreground font-medium">hallucination analysis</span>, and{" "}
              <span className="text-foreground font-medium">model reliability</span>. 
              Transitioning from industry experience at Samsung R&D and Amazon to advanced AI research.
            </p>

            <div className="flex flex-wrap gap-4">
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
              <Button variant="outline" size="lg" asChild>
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
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-3xl font-display font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Research Projects</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-display font-bold text-primary">2+</p>
                <p className="text-sm text-muted-foreground">Years Industry Exp</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-display font-bold text-primary">KFUPM</p>
                <p className="text-sm text-muted-foreground">MS ECE 2026</p>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-primary/5 rounded-full" />
              
              <img
                src={profilePhoto}
                alt="Hunain Kaisar - AI Researcher"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-2 border-primary/20 shadow-glow"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <BookOpen className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Open to</p>
                    <p className="text-xs text-muted-foreground">PhD & Research</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
