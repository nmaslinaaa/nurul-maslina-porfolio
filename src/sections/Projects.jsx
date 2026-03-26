import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Penang Chendul Inventory Management System",
    description:
      "A web-based inventory management system developed for a local restaurant to manage stock records, item updates, and inventory tracking more efficiently.",
    image: "/projects/project1.png",
    tags: ["Java", "JSP", "MariaDB", "NetBeans"],
    link: "https://inventory-management-system-chndlgirl.onrender.com",
    // github: "#",
  },
  {
    title: "Daily Food Tracker Prototype",
    description:
      "A mobile application prototype designed using Figma that allows users to track daily meals, explore food categories, and monitor calorie intake through interactive user flows.",
    image: "/projects/project2.png",
    tags: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    link: "https://embed.figma.com/proto/Ghz29dFq7E8ULGhzGN1crr/Your-Daily-Food-Tracker?node-id=10-2&starting-point-node-id=10%3A2&embed-host=share",
    // github: "#",
  },
  {
    title: "SMIS Perintis Didik",
    description:
      "A web-based Student Management Information System developed for a tuition centre to manage student records, classes, and administrative operations digitally.",
    image: "/projects/project3.png",
    tags: ["Laravel", "PHP", "MySQL", "JavaScript"],
    link: "https://smis-perintis-didik-production.up.railway.app",
    // github: "#",
  },
  {
    title: "Fruit's Catcher",
    description:
      "A mini game built using PictoBlox block programming where players control a catcher to collect falling fruits while implementing scoring logic and game conditions..",
    image: "/projects/project4.png",
    tags: ["PictoBlox", "Game Development", "Block-Based Programming"],
    link: "/games/fruits-catcher.html",
    // github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of projects I developed during my studies and internship, focusing on web development, system design, and interactive applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  {/* <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a> */}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm text-justify">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    md:hidden inline-flex items-center gap-2 mt-3 px-4 py-2 
                    rounded-full text-sm font-medium
                    bg-surface text-primary
                    border border-primary/80 hover:border-primary
                    transition-all duration-200
                    active:scale-95
                  "
                >
                  Preview Project
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
