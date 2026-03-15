import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { InternshipFeedback  } from "@/sections/InternshipFeedback";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* create component "navbar" */}
      <Navbar /> 
      {/* function main tag to call all of the other components */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Experience />
        <InternshipFeedback />
        <Contact />
      </main>
      {/* create component "footer" */}
      <Footer />

    </div>
  );
}

export default App;
