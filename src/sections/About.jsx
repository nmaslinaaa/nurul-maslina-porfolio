import { BookOpen, Lightbulb, Search, Users } from "lucide-react";
import { useState } from "react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Enjoy breaking down complex problems and finding practical solutions.",
  },
  {
    icon: Search,
    title: "Tech Explorer",
    description:
      "Love exploring new technologies and experimenting with different tools to improve my development skills.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Comfortable working in team environments and contributing ideas to achieve project goals.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Continuously developing skills in React.js, Node.js and Tailwind CSS.",
  },
];

export const About = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Passionate about building
              <span className="font-serif italic font-normal text-white">
                {" "}
                 reliable technology solutions.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-justify animate-fade-in animation-delay-200">
              <p>
               My name is Nurul Maslina, and I graduated in Information Systems Engineering 
               from Universiti Teknologi MARA (UiTM). During my studies, I developed an 
               interest in how software systems are designed, developed and tested. 
               I enjoy learning how technology works behind the scenes and applying what 
               I have learned to create useful digital solutions.
              </p>

             {showMore && (
                <>
                  <p>
                     Throughout my degree, I worked on several academic projects where I 
                     developed web-based systems using technologies such as HTML, CSS, 
                     JavaScript, PHP, Laravel and MySQL. These projects helped me understand 
                     the software development process including requirement analysis, system 
                     design, development and functional testing.
                  </p>
                  <p>
                    One of the projects that I worked on was the Penang Chendul Inventory 
                    Management System, where my team developed a system to help manage 
                    inventory and orders more efficiently. Through this project, I gained 
                    experience in designing system models, managing databases and 
                    implementing CRUD functions for the system.
                  </p>

                  <p>
                    I also completed my internship at Tech Dome Penang, where I supported 
                    STEM education programs and IoT learning activities for school 
                    students. During the internship, I assisted in preparing learning 
                    modules using Arduino Uno and mBlock software, guided students during 
                    hands-on workshops and supported educational programs related to 
                    technology and innovation.
                  </p>

                  <p>
                    As a fresh graduate, I am interested in starting my career as a Junior 
                    Software Tester, Junior Developer or in any entry-level IT role where 
                    I can continue learning, gain real industry experience and improve my 
                    technical skills while contributing to meaningful technology projects.               
                  </p>

                </>
              )}

              <button
                onClick={() => setShowMore(!showMore)}
                className="text-primary font-medium hover:underline mt-2"
              >
                {showMore ? "Show Less" : "Read More"}
              </button>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to grow through real challenges, learn from every project and create technology that people can truly rely on."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6 text-justify">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
