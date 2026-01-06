import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Zap, ExternalLink, Github, FlaskConical, Code } from "lucide-react";

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
    icon: FlaskConical,
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
    icon: Code,
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
    icon: Zap,
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 12 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.32,
      ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
    },
  },
};

const ProjectsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full mb-4">
            Featured Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated selection of research and development projects spanning AI, robotics, and computer vision
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-6 mb-8"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects
            .filter((p) => p.featured)
            .map((project) => {
              const IconComponent = project.icon || Zap;
              return (
                <motion.div
                  key={project.title}
                  variants={shouldReduceMotion ? {} : cardVariants}
                  whileHover={shouldReduceMotion ? {} : { 
                    y: -4,
                    transition: { duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }
                  }}
                  className="group relative glass rounded-3xl border border-border/50 overflow-hidden"
                  style={{ willChange: "transform" }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {project.category}
                      </span>
                      <motion.div
                        whileHover={shouldReduceMotion ? {} : { rotate: -6, scale: 1.04 }}
                        transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
                        className="text-primary opacity-70 group-hover:opacity-100 transition-opacity"
                      >
                        <IconComponent size={18} />
                      </motion.div>
                    </div>
                    
                    <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-200">
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

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-secondary/80 text-muted-foreground rounded-md border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </motion.div>

        {/* Other Projects */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-12"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <motion.div
                key={project.title}
                variants={shouldReduceMotion ? {} : cardVariants}
                whileHover={shouldReduceMotion ? {} : { 
                  y: -4,
                  transition: { duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }
                }}
                className="group glass rounded-2xl border border-border/50 p-6"
                style={{ willChange: "transform" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {project.category}
                  </span>
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { rotate: -6, scale: 1.04 }}
                    transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    <Zap size={14} className="text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                </div>
                
                <h4 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h4>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs bg-secondary/80 text-muted-foreground rounded-md border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.32, delay: 0.2 }}
        >
          <a
            href="https://github.com/altair098"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            <Github size={18} />
            View More on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
