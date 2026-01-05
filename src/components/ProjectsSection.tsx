import { ArrowUpRight, Github, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Agentic LLM Verification Pipeline",
    category: "LLM Research",
    description:
      "Agent-based system for selective retrieval and hallucination reduction using entropy-driven routing and uncertainty-aware decision-making.",
    highlights: [
      "Evaluated on multilingual Mu-SHROOM benchmarks",
      "Focus on robustness, transparency, and cost-efficient inference",
      "Entropy-based routing for selective verification",
    ],
    technologies: ["Python", "PyTorch", "LLMs", "RAG", "Uncertainty"],
    featured: true,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "IEKF-SLAM for Quadcopter UAVs",
    category: "Robotics & CV",
    description:
      "6-DoF visual-inertial SLAM implementation using Right-Invariant Extended Kalman Filter with monocular camera and IMU fusion.",
    highlights: [
      "Evaluated on EuRoC MAV dataset",
      "MATLAB and Python implementations",
      "Lie group-based state estimation",
    ],
    technologies: ["Python", "MATLAB", "Computer Vision", "SLAM"],
    featured: true,
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Transformer-Enhanced Medical Imaging",
    category: "Deep Learning",
    description:
      "Attention-augmented deep learning architecture for medical image segmentation with SimAM attention and Dense Projection Blocks.",
    highlights: [
      "Improved performance over baseline U-Nets",
      "Grad-CAM for interpretability",
      "SimAM attention mechanism",
    ],
    technologies: ["PyTorch", "Transformers", "Medical Imaging"],
    featured: true,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Transformer-Based Readmission Prediction",
    category: "Healthcare ML",
    description:
      "End-to-end ML pipeline on tabular healthcare data with comparative analysis of classical ML vs Transformer models.",
    highlights: [
      "Tabular data transformers",
      "Comprehensive validation pipeline",
      "Error analysis and model comparison",
    ],
    technologies: ["Python", "Scikit-learn", "Transformers"],
    featured: false,
  },
  {
    title: "Image Restoration & Colorization",
    category: "Computer Vision",
    description:
      "Traditional inpainting combined with deep learning colorization using autoencoder-based approach.",
    highlights: [
      "OpenCV preprocessing pipelines",
      "Autoencoder architecture",
      "Hybrid approach",
    ],
    technologies: ["Python", "OpenCV", "TensorFlow"],
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
              Research & Development
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              A collection of research projects spanning LLM verification, robotics, 
              medical imaging, and more.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={project.title}
                  className="group relative glass rounded-3xl border border-border/50 overflow-hidden hover-glow hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {project.category}
                      </span>
                      <Zap size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowUpRight size={14} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50 mt-auto">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <div
                  key={project.title}
                  className="group glass rounded-2xl border border-border/50 p-6 hover-glow animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + 0.1 * index}s` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Button variant="heroOutline" size="lg" asChild>
              <a
                href="https://github.com/altair098"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} /> View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
