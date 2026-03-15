import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const experiences = [
  {
    period: "Sept 2025 – Feb 2026",
    title: "Tech Dome Penang",
    subtitle: "Education Technology Intern",
    image: "/journey/picture1.jpeg",
    current: true,
  },
  {
    period: "Jun 2022 – Oct 2022",
    title: "Domino's Pizza",
    subtitle: "Part-time Staff",
    image: "/journey/picture5.jpeg",
    current: false,
  },
];

export const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % experiences.length);
  };

  const prev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
  };

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 25;
    const rotateY = (x - centerX) / 25;

    // Spotlight position
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    if (imageRef.current) {
      imageRef.current.style.transform = "none";
    }
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";

    if (imageRef.current) {
      imageRef.current.style.transform = "translate(0px,0px)";
    }
  };

  return (
    <section id="experience" className="py-32 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="max-w-3xl mb-16 ml-auto text-right">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            My working
            <span className="font-serif italic font-normal text-white">
              {" "}experience.
            </span>
          </h2>

          <p className="text-muted-foreground">
            A timeline of my internship and professional experience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE LEFT */}
          <div className="relative flex items-center justify-center perspective-[1000px] lg:order-1">

            {/* LEFT BUTTON */}
            <button
              onClick={prev}
              className="absolute left-[-20px] z-20 p-3 rounded-xl 
              bg-black/40 backdrop-blur-md 
              border border-purple-500/30
              hover:border-purple-400
              hover:shadow-[0_0_15px_rgba(168,85,247,0.6)]
              transition"
            >
              <ChevronLeft />
            </button>

            <div className="flex flex-col items-center">

              {/* VIEWPORT */}
              <div className="relative w-[520px] h-[450px] flex items-center justify-center">

                {experiences.map((exp, index) => {

                  const total = experiences.length;

                  let position = index - activeIndex;

                  if (position > total / 2) position -= total;
                  if (position < -total / 2) position += total;

                  const isCenter = position === 0;
                  const isPrev = position === -1;
                  const isNext = position === 1;

                  let translateX = 0;
                  let scale = 0.8;
                  let opacity = 0;

                  if (isCenter) {
                    translateX = 0;
                    scale = 1;
                    opacity = 1;
                  } 
                  else if (isPrev) {
                    translateX = -170;
                    scale = 0.85;
                    opacity = 0.25;
                  } 
                  else if (isNext) {
                    translateX = 170;
                    scale = 0.85;
                    opacity = 0.25;
                  }

                  return (
                    <div
                      key={index}
                      ref={isCenter ? cardRef : null}
                      onMouseMove={isCenter ? handleMouseMove : undefined}
                      onMouseLeave={isCenter ? handleMouseLeave : undefined}
                      className="absolute transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{
                        transform: `translate3d(${translateX}px,0,0) scale(${scale})`,
                        opacity: isCenter ? 1 : 0.25,
                        zIndex: isCenter ? 10 : 5
                      }}
                    >

                      <div className="relative group w-[480px]">

                        <div className="card-spotlight"></div>

                        <div className="absolute inset-0 pointer-events-none rounded-2xl
                        bg-linear-to-tr from-transparent via-white/10 to-transparent
                        opacity-0 group-hover:opacity-100
                        transition duration-500" />

                        <div className="relative glass p-6 rounded-2xl border border-purple-500/40 backdrop-blur-xl
                        bg-linear-to-b from-purple-500/10 to-transparent
                        shadow-[0_0_40px_rgba(168,85,247,0.35)]
                        transition-all duration-500">

                          <div className="w-full h-[320px] overflow-hidden rounded-lg relative">

                            <img
                              ref={isCenter ? imageRef : null}
                              src={exp.image}
                              alt={exp.title}
                              className="w-full h-full object-contain transition-transform duration-300"
                            />

                          </div>

                          <h3 className="text-xl font-semibold text-white text-center mt-3">
                            {exp.title}
                          </h3>

                        </div>

                      </div>

                    </div>
                  );
                })}

              </div>

              {/* INDICATOR */}
              <div className="flex justify-center items-center gap-3 mt-6">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-[4px] rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-12 bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                        : "w-6 bg-gray-500/40"
                    }`}
                  />
                ))}
              </div>

            </div>

            {/* RIGHT BUTTON */}
            <button
              onClick={next}
              className="absolute right-[-20px] z-20 p-3 rounded-xl 
              bg-black/40 backdrop-blur-md 
              border border-purple-500/30
              hover:border-purple-400
              hover:shadow-[0_0_15px_rgba(168,85,247,0.6)]
              transition"
            >
              <ChevronRight />
            </button>

          </div>

          {/* TIMELINE RIGHT */}
          <div className="relative lg:order-2">

            <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-purple-500 via-purple-400/40 to-transparent"></div>

            <div className="space-y-12">

              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pr-10 text-right">

                  <div className="absolute right-1.5 top-2 w-3 h-3 bg-purple-500 rounded-full ring-4 ring-background">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-70"></span>
                    )}
                  </div>

                  <div className="glass p-4 rounded-xl border border-purple-500/30 hover:border-purple-400 transition duration-300">

                    <h3 className="text-lg font-semibold text-white">
                      {exp.title}
                    </h3>

                    <p className="text-purple-400 font-medium text-sm mt-1">
                      {exp.subtitle}
                    </p>

                    <p className="text-xs text-gray-400 mt-2">
                      {exp.period}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
