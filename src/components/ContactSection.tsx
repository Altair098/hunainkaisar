import { Mail, Phone, Linkedin, Github, ExternalLink, ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "hunainkaisar5@gmail.com",
    href: "mailto:hunainkaisar5@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+966 503 244 960",
    href: "https://wa.me/966503244960",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "hunain-kaisar-778b26211",
    href: "https://linkedin.com/in/hunain-kaisar-778b26211",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "altair098",
    href: "https://github.com/altair098",
  },
];

const externalLinks = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=QMh_z-MAAAAJ",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/OPCYAM",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4 animate-fade-in-up">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Interested in research collaboration, hiring, or just want to say hello? 
              I'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {contactLinks.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group glass rounded-2xl border border-border/50 p-5 flex items-center gap-4 hover-glow hover-lift animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <contact.icon className="text-primary" size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">{contact.label}</p>
                  <p className="font-medium truncate group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:hunainkaisar5@gmail.com">
                <Send size={18} /> Send Me a Message
              </a>
            </Button>
          </div>

          {/* External Links */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {externalLinks.map((link) => (
              <Button key={link.label} variant="outline" size="lg" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-20 pt-8 border-t border-border/50 animate-fade-in">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Hunain Kaisar. Built with passion for AI research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
