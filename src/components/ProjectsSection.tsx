import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
    technologies: ["Python", "PyTorch", "LLMs", "RAG", "Uncertainty Quantification"],
    featured: true,
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
    technologies: ["Python", "MATLAB", "Computer Vision", "SLAM", "IMU"],
    featured: true,
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
    technologies: ["PyTorch", "Transformers", "Medical Imaging", "Attention"],
    featured: true,
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
    technologies: ["Python", "Scikit-learn", "Transformers", "Healthcare"],
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
      "Hybrid traditional + deep learning approach",
    ],
    technologies: ["Python", "OpenCV", "TensorFlow", "Autoencoders"],
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
              Research & Development
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of research projects spanning LLM verification, robotics,
              medical imaging, and more.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <Card
                  key={project.title}
                  variant="elevated"
                  className="animate-fade-in-up group"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight size={14} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <Card
                  key={project.title}
                  className="animate-fade-in-up group"
                  style={{ animationDelay: `${0.3 + 0.1 * index}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
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
