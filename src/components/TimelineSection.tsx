import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Briefcase, FlaskConical, Building2 } from "lucide-react";

type TimelineItem = {
  organization: string;
  role: string;
  dateRange: string;
  type: "education" | "work" | "research" | "school";
};

const timelineData: TimelineItem[] = [
  {
    organization: "King Fahd University of Petroleum and Minerals (KFUPM)",
    role: "M.S. in Electrical and Computer Engineering",
    dateRange: "Aug 2024 – Present",
    type: "education",
  },
  {
    organization: "National Institute of Technology Srinagar",
    role: "Research Intern",
    dateRange: "Oct 2023 – Apr 2024",
    type: "research",
  },
  {
    organization: "Amazon",
    role: "Data Analyst (Remote)",
    dateRange: "Jan 2023 – Nov 2023",
    type: "work",
  },
  {
    organization: "Samsung R&D",
    role: "Software Engineer",
    dateRange: "Feb 2022 – Dec 2022",
    type: "work",
  },
  {
    organization: "Indian Statistical Institute (ISI)",
    role: "Research Intern",
    dateRange: "Jan 2021 – Mar 2021",
    type: "research",
  },
  {
    organization: "National Institute of Technology Srinagar",
    role: "B.Tech in Electronics and Communication Engineering",
    dateRange: "Aug 2018 – Jun 2022",
    type: "education",
  },
  {
    organization: "Iqbal Memorial Institute",
    role: "High School · 96.4%",
    dateRange: "Completed 2018",
    type: "school",
  },
];

const getIcon = (type: TimelineItem["type"]) => {
  switch (type) {
    case "education":
      return GraduationCap;
    case "work":
      return Briefcase;
    case "research":
      return FlaskConical;
    case "school":
      return Building2;
    default:
      return Building2;
  }
};

const TimelineSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            My Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            Timeline
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A chronological overview of my academic, research, and professional milestones.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          {/* Timeline entries */}
          <div className="space-y-8 md:space-y-12">
            {timelineData.map((item, index) => {
              const Icon = getIcon(item.type);
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Mobile: stacked layout */}
                  {/* Desktop: alternating left/right */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="group relative bg-card border border-border/50 rounded-xl p-5 shadow-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                    >
                      {/* Subtle gradient overlay on hover */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        {/* Date badge */}
                        <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                          {item.dateRange}
                        </span>
                        
                        {/* Organization */}
                        <h3 className="font-display font-semibold text-foreground text-base leading-snug mb-1">
                          {item.organization}
                        </h3>
                        
                        {/* Role */}
                        <p className="text-sm text-muted-foreground">
                          {item.role}
                        </p>
                      </div>

                      {/* Icon indicator */}
                      <div className="absolute -right-2 -top-2 md:hidden p-2 bg-secondary rounded-full border border-border/50">
                        <Icon size={14} className="text-primary" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Center node - desktop only */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { scale: 1.2 }}
                      className="w-10 h-10 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shadow-glow group-hover:border-primary transition-colors duration-300"
                    >
                      <Icon size={16} className="text-primary" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* End marker */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="hidden md:flex justify-center mt-12"
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-primary/50 shadow-glow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
