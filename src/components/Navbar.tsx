import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Research", href: "#research" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Papers", href: "#papers" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass border-b border-border/50 shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-display text-2xl font-bold group">
          <span className="text-gradient">HK</span>
          <span className="text-foreground/50 group-hover:text-foreground transition-colors">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://github.com/altair098"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/hunain-kaisar-778b26211"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:hunainkaisar5@gmail.com"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="glass border-t border-border/50">
          <ul className="container mx-auto px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2 pt-4 border-t border-border/50">
              <a
                href="https://github.com/altair098"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/hunain-kaisar-778b26211"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hunainkaisar5@gmail.com"
                className="p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Mail size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
