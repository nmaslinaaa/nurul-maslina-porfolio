import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", icon: "https://img.icons8.com/color/48/css3.png" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
  { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
  { name: "PictoBlox", icon: "/icons/pictoblox.png" },
  { name: "mBlock", icon: "/icons/mblock.png" },
  { name: "VS Code", icon: "https://img.icons8.com/color/48/visual-studio-code-2019.png"},
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/hero-bg.png"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40 "
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#c084fc",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Scroll arrow */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-foreground animate-bounce z-20"
      >
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-8 h-8" />
      </a>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-30 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Information Systems Engineering Graduate • Software Tester | Junior Developer
            </span>

            <div className="space-y-4">

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Turning <span className="text-primary glow-text">ideas</span>
                <br />
                into practical
                <br />
                <span className="font-serif italic font-normal text-white">
                  technology solutions
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                Hi, I'm Nurul Maslina — a recent Information Systems Engineering graduate from UiTM Shah Alam. Experience in Web Development and Software Testing. Supported IoT learning activities for school students during internship at Tech Dome Penang.
              </p>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nurulmaslinamusa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              <a href="/Nurul-Maslina-Resume.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download Resume
                </AnimatedBorderButton>
              </a>

            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow me:</span>

              <a
                href="https://www.linkedin.com/in/nurul-maslina-musa-b0b43b262"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">

              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

              <div className="relative glass rounded-3xl p-2 glow-border">

                <img
                  src="/profile-photo-3.png"
                  alt="Nurul Maslina"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for full-time roles starting April 2026.
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* SKILLS MARQUEE */}
        <div className="mt-20 animate-fade-in animation-delay-600">

          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="marquee-container">

            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="marquee-track">

              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={idx}
                  className="marquee-item"
                >

                  <div className="glass p-4 rounded-xl hover:scale-110 transition-transform duration-300">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10"
                    />
                  </div>

                  <span className="text-sm text-muted-foreground">
                    {skill.name}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};