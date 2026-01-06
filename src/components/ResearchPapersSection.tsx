import { motion, useReducedMotion } from "framer-motion";
import { FileText, ExternalLink, BookOpen } from "lucide-react";

type PaperStatus = "accepted" | "submitted";

type Paper = {
  title: string;
  authors: string;
  venue: string;
  year?: number;
  status: PaperStatus;
  links?: { label: string; href: string }[];
};

const papers: Paper[] = [
  // Replace these placeholders with your actual publications
  {
    title: "REPLACE_WITH_TITLE",
    authors: "REPLACE_WITH_AUTHORS",
    venue: "REPLACE_WITH_VENUE",
    year: 2025,
    status: "accepted",
    links: [
      { label: "PDF", href: "#" },
      { label: "DOI", href: "#" },
    ],
  },
  {
    title: "REPLACE_WITH_TITLE",
    authors: "REPLACE_WITH_AUTHORS",
    venue: "Submitted to: REPLACE_WITH_VENUE (Under Review)",
    year: 2025,
    status: "submitted",
    links: [{ label: "arXiv", href: "#" }],
  },
];

// Sort: Accepted first, then by year (reverse chronological)
const sortedPapers = [...papers].sort((a, b) => {
  if (a.status !== b.status) return a.status === "accepted" ? -1 : 1;
  return (b.year ?? 0) - (a.year ?? 0);
});

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
            Academic publications and ongoing research submissions in AI, machine learning, and related fields
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
          {sortedPapers.map((paper, index) => (
            <motion.div
              key={index}
              variants={shouldReduceMotion ? {} : cardVariants}
              whileHover={shouldReduceMotion ? {} : { 
                y: -2,
                transition: { duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }
              }}
              className="group glass rounded-2xl border border-border/50 p-6"
              style={{ willChange: "transform" }}
            >
              {/* Top row: Title + Status badge */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { rotate: -6, scale: 1.04 }}
                    transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
                    className="text-primary mt-0.5 flex-shrink-0"
                  >
                    {paper.status === "accepted" ? (
                      <BookOpen size={18} />
                    ) : (
                      <FileText size={18} />
                    )}
                  </motion.div>
                  <h3 className="font-display font-semibold text-lg leading-snug group-hover:text-primary transition-colors duration-200">
                    {paper.title}
                  </h3>
                </div>
                
                {/* Status Badge */}
                <span
                  className={`flex-shrink-0 px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                    paper.status === "accepted"
                      ? "bg-primary/15 text-primary border border-primary/30"
                      : "bg-muted/50 text-muted-foreground border border-border/50"
                  }`}
                >
                  {paper.status === "accepted" ? "Accepted" : "Submitted"}
                </span>
              </div>

              {/* Authors */}
              <p className="text-muted-foreground text-sm mb-2 pl-8">
                {paper.authors}
              </p>

              {/* Venue + Year */}
              <p className="text-muted-foreground/80 text-sm mb-4 pl-8">
                {paper.venue}
                {paper.year ? ` • ${paper.year}` : ""}
              </p>

              {/* Links */}
              {paper.links && paper.links.length > 0 && (
                <div className="flex flex-wrap gap-3 pl-8">
                  {paper.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200"
                    >
                      {link.label}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state note */}
        {sortedPapers.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <FileText size={48} className="text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-muted-foreground">
              Publications coming soon...
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ResearchPapersSection;
