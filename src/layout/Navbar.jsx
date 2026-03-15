import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
   { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#internshipfeedback", label: "Internship Feedback" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = navLinks
      .map(link => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">

        <a
          href="#"
          className="flex items-center gap-3 font-bold hover:text-primary"
        >
          <img
            src="/logo.png"
            alt="NMM Logo"
            className="w-10 h-10 rounded-full object-cover border border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.6)]"
          />

          <span className="text-xl tracking-widest font-tech">
            PORTFOLIO<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1 font-tech">

            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
               className={`px-4 py-2 text-sm rounded-full border transition-all
                ${
                  activeSection === link.href
                    ? "border-primary text-foreground neon-active"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-primary hover:bg-surface"
                }`}
              >
                {link.label}
              </a>
            ))}

          </div>
        </div>

        {/* CTA Button */}

          <div className="hidden md:block font-tech" >
           <a href="#contact">
              <Button size="sm" >Contact Me</Button>
           </a>
          </div>

       {/* <div className="hidden md:block">
          <a
            href="https://wa.me/60134497845"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm">Contact Me</Button>
          </a>
        </div> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/60 backdrop-blur-xl border-t border-white/10 animate-slide-down origin-top font-tech">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">

            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-lg text-muted-foreground hover:text-foreground py-2"
              >

                {/* Dot Indicator */}
                <span
                  className={`w-2.5 h-2.5 rounded-full border transition-all duration-300
                  ${
                    activeSection === link.href
                      ? "bg-primary border-primary animate-pulse shadow-[0_0_6px_#c084fc,0_0_12px_#c084fc,0_0_18px_#c084fc]"
                      : "border-muted-foreground"
                  }`}
                ></span>

                {link.label}

              </a>
            ))}

           <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Button>
              Contact Me
            </Button>
          </a>

          </div>
        </div>
      )}
    </header>
  );
};