import { motion, useReducedMotion } from "framer-motion";
import { FileText, ExternalLink, BookOpen, Clock, Send } from "lucide-react";

type PaperStatus = "accepted" | "submitted" | "coming-soon";

type Paper = {
  title: string;
  authors: string;
  venue: string;
  year?: number;
  status: PaperStatus;
  link?: string;
  doi?: string;
};

const papers: Paper[] = [
  {
    title: "Distributed Decision Support Systems in Healthcare: A Systematic Review",
    authors: "Hunain Kaisar, et al.",
    venue: "Systems, MDPI, Vol. 13, Issue 3",
    year: 2025,
    status: "accepted",
    doi: "https://doi.org/10.3390/systems13030157",
  },
  {
    title: "Enhancing Diabetic Readmission Prediction using Transformer Models and Mutual Information Sampling",
    authors: "Hunain Kaisar, Muhammad Najeeb Khan, Mohamed Mohandes, Shafiqur Rehman, Ali Al-Shaikhi",
    venue: "PLOS ONE",
    year: 2025,
    status: "accepted",
  },
  {
    title: "MobileNetV3-Small–Driven PQCN for Robotic Sorting in Clutter: Generalization Across Diverse Geometric Objects",
    authors: "Mir Suhail Alam, Rama Khaled Alsheikh, Hunain Kaisar, Emmanuel Okafor",
    venue: "Proceedings of the 2nd International Conference on Smart Mobility and Logistics Ecosystems (SMiLE), Dhahran, Saudi Arabia",
    year: 2026,
    status: "accepted",
  },
  {
    title: "RL-Assisted Digital Twin for Adaptive Control Parameter Tuning of a Nonholonomic Mobile Robot Under Gaussian Noise",
    authors: "Hunain Kaisar, Muhammad Rehan",
    venue: "Proceedings of the 10th International Conference on Material Engineering and Manufacturing (ICMEM 2026)",
    year: 2026,
    status: "accepted",
  },
  {
    title: "A Digital Twin-empowered Resilient Path-following Methodology for Non-holonomic Autonomous Vehicles under Denial-of-Service Attacks",
    authors: "Hunain Kaisar, Muhammad Rehan, Ijaz Ahmed, Muhammad Khalid",
    venue: "IEEE Open Journal of Vehicular Technology",
    status: "submitted",
  },
];

// Sort: Accepted first, then Submitted, then Coming Soon, within each by year (reverse chronological)
const statusOrder: Record<PaperStatus, number> = {
  accepted: 0,
  submitted: 1,
  "coming-soon": 2,
};

const sortedPapers = [...papers].sort((a, b) => {
  if (a.status !== b.status) return statusOrder[a.status] - statusOrder[b.status];
  return (b.year ?? 0) - (a.year ?? 0);
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: -60,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const getStatusConfig = (status: PaperStatus) => {
  switch (status) {
    case "accepted":
      return {
        label: "Accepted",
        icon: BookOpen,
        badgeClass: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
        iconClass: "text-emerald-400",
      };
    case "submitted":
      return {
        label: "Submitted",
        icon: Send,
        badgeClass: "bg-primary/15 text-primary border border-primary/30",
        iconClass: "text-primary",
      };
    case "coming-soon":
      return {
        label: "Coming Soon",
        icon: Clock,
        badgeClass: "bg-muted/50 text-muted-foreground border border-border/50",
        iconClass: "text-muted-foreground",
      };
  }
};

const ResearchPapersSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="papers" className="py-24 relative bg-secondary/30">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
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
            Publications
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Research <span className="text-gradient">Papers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic publications and ongoing research submissions in AI, machine learning, robotics, and healthcare systems
          </p>
        </motion.div>

        {/* Papers List */}
        <motion.div 
          className="max-w-4xl mx-auto space-y-4"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {sortedPapers.map((paper, index) => {
            const statusConfig = getStatusConfig(paper.status);
            const StatusIcon = statusConfig.icon;
            const hasLink = paper.doi || paper.link;

            return (
              <motion.div
                key={index}
                variants={shouldReduceMotion ? {} : cardVariants}
                whileHover={shouldReduceMotion ? {} : { 
                  x: 8,
                  transition: { duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }
                }}
                className="group relative glass rounded-2xl border border-border/50 overflow-hidden"
                style={{ willChange: "transform" }}
              >
                {/* Swipe indicator line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/60 via-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="p-6 pl-8">
                  {/* Top row: Status badge + Year */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full ${statusConfig.badgeClass}`}>
                      <StatusIcon size={12} />
                      {statusConfig.label}
                    </span>
                    {paper.year && (
                      <span className="text-xs text-muted-foreground/70">
                        {paper.year}
                      </span>
                    )}
                  </div>

                  {/* Title - clickable if link exists */}
                  {hasLink ? (
                    <a
                      href={paper.doi || paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group/link"
                    >
                      <h3 className="font-display font-semibold text-lg leading-snug mb-2 group-hover/link:text-primary transition-colors duration-200 flex items-start gap-2">
                        <span>{paper.title}</span>
                        <ExternalLink size={14} className="flex-shrink-0 mt-1 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </h3>
                    </a>
                  ) : (
                    <h3 className="font-display font-semibold text-lg leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
                      {paper.title}
                    </h3>
                  )}

                  {/* Authors */}
                  <p className="text-muted-foreground text-sm mb-2">
                    {paper.authors}
                  </p>

                  {/* Venue */}
                  <p className="text-muted-foreground/70 text-sm italic">
                    {paper.venue}
                  </p>

                  {/* Link button for papers with DOI */}
                  {paper.doi && (
                    <div className="mt-4">
                      <a
                        href={paper.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-200 hover:translate-x-1"
                      >
                        <FileText size={14} />
                        View Publication
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Paper count summary */}
        <motion.div 
          className="flex justify-center gap-6 mt-12"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.32, delay: 0.3 }}
        >
          {[
            { status: "accepted" as PaperStatus, count: sortedPapers.filter(p => p.status === "accepted").length },
            { status: "submitted" as PaperStatus, count: sortedPapers.filter(p => p.status === "submitted").length },
          ].filter(item => item.count > 0).map(({ status, count }) => {
            const config = getStatusConfig(status);
            return (
              <div key={status} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className={`w-2 h-2 rounded-full ${status === "accepted" ? "bg-emerald-400" : "bg-primary"}`} />
                <span>{count} {config.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchPapersSection;
