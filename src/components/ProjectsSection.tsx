import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { FlaskConical, Code, Zap, ExternalLink, X, GripHorizontal } from "lucide-react";
import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
    color: "from-orange-500/20 to-amber-500/20",
    icon: Zap,
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
    color: "from-pink-500/20 to-rose-500/20",
    icon: Code,
  },
];

type Project = typeof projects[0];

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const shouldReduceMotion = useReducedMotion();
  
  if (!project) return null;

  const IconComponent = project.icon || Zap;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl glass border-border/50 bg-card/95 backdrop-blur-xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-xl bg-gradient-to-br ${project.color}`}>
              <IconComponent className="w-5 h-5 text-primary" />
            </div>
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {project.category}
            </span>
          </div>
          <DialogTitle className="text-2xl font-display">{project.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground text-base">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Highlights */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Key Highlights</h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-lg border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Placeholder for future figures */}
          <div className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center">
            <p className="text-sm text-muted-foreground">
              📊 Figures & Diagrams (Coming Soon)
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ProjectsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.8, 0.2, 1] as const,
      },
    },
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of research and engineering projects spanning AI, robotics, and healthcare ML.
          </p>
        </motion.div>

        {/* Swipeable Projects Container */}
        <div className="relative mb-12">
          {/* Swipe indicator */}
          <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground text-sm">
            <GripHorizontal className="w-4 h-4" />
            <span>Drag to explore • Click for details</span>
          </div>

          {/* Horizontal scroll container */}
          <div 
            ref={containerRef}
            className="overflow-hidden relative"
          >
            <motion.div 
              className="flex gap-6 cursor-grab active:cursor-grabbing pb-4"
              drag="x"
              dragConstraints={{ left: -((projects.filter(p => p.featured).length - 1) * 400), right: 0 }}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
              style={{ touchAction: "pan-y" }}
            >
              {projects
                .filter((p) => p.featured)
                .map((project, index) => {
                  const IconComponent = project.icon || Zap;
                  return (
                    <motion.div
                      key={project.title}
                      initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={shouldReduceMotion ? {} : { 
                        y: -6,
                        scale: 1.02,
                        transition: { duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleProjectClick(project)}
                      className="group relative glass rounded-3xl border border-border/50 overflow-hidden flex-shrink-0 w-[340px] md:w-[400px]"
                      style={{ willChange: "transform" }}
                    >
                      {/* Gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-primary/5 blur-xl" />
                      </div>
                      
                      <div className="relative p-6 h-full flex flex-col min-h-[280px]">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                            {project.category}
                          </span>
                          <motion.div
                            whileHover={shouldReduceMotion ? {} : { rotate: -6, scale: 1.1 }}
                            transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
                            className="text-primary opacity-70 group-hover:opacity-100 transition-opacity"
                          >
                            <IconComponent className="w-5 h-5" />
                          </motion.div>
                        </div>

                        <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Click indicator */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            </motion.div>
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.filter(p => p.featured).map((_, idx) => (
              <div
                key={idx}
                className="w-2 h-2 rounded-full bg-border transition-colors"
              />
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-xl font-display font-semibold mb-6 text-center text-muted-foreground">
            Other Projects
          </h3>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects
            .filter((p) => !p.featured)
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
                  onClick={() => handleProjectClick(project)}
                  className="group relative glass rounded-2xl border border-border/50 p-6 cursor-pointer"
                  style={{ willChange: "transform" }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {project.category}
                      </span>
                      <IconComponent className="w-4 h-4 text-primary opacity-70 group-hover:opacity-100" />
                    </div>

                    <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-md"
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

        {/* GitHub CTA */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 hover:bg-secondary text-secondary-foreground rounded-full transition-colors"
          >
            <span>View More on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProjectsSection;
