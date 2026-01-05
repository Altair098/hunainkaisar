import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Interested in research collaboration, hiring, or just want to say hello? 
              I'd love to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactLinks.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <Card variant="elevated" className="group cursor-pointer">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <contact.icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-medium truncate group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                    <ExternalLink
                      size={18}
                      className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                    />
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* External Links */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {externalLinks.map((link) => (
              <Button key={link.label} variant="outline" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  {link.label}
                </a>
              </Button>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-border animate-fade-in">
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
