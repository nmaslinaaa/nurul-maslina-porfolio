import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Code2, PenTool, Bug } from "lucide-react";

const education = [
  {
    period: "Oct 2022 – 2026",
    title: "Universiti Teknologi MARA",
    subtitle:
      "Bachelor of Information Systems (Hons.) Information Systems Engineering",
    image: "/journey/picture2.jpeg",
    current: true,
  },
  {
    period: "Jul 2020 – May 2022",
    title: "Penang Matriculation College",
    subtitle: "Computer Science (Module III)",
    image: "/journey/picture3.png",
    current: false,
  },
  {
    period: "Jan 2015 – Dec 2019",
    title: "SMK Sungai Ara",
    subtitle: "Sijil Pelajaran Malaysia",
    image: "/journey/picture4.png",
    current: false,
  },
];

export const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % education.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % education.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + education.length) % education.length);
  };

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 25;
    const rotateY = (x - centerX) / 25;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    if (imageRef.current) {
      imageRef.current.style.transform = "none";
    }
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";

    if (imageRef.current) {
      imageRef.current.style.transform = "translate(0px, 0px)";
    }
  };

  return (
    <section id="education" className="py-32 relative overflow-hidden">

      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Academic Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            My education
            <span className="font-serif italic font-normal text-white">
              {" "}background.
            </span>
          </h2>

          <p className="text-muted-foreground">
            A timeline of my academic journey and learning experience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TIMELINE */}
          <div className="relative">

            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-purple-400/40 to-transparent"></div>

            <div className="space-y-12">

              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-10">

                  <div className="absolute left-[-6px] top-2 w-3 h-3 bg-purple-500 rounded-full ring-4 ring-background">
                    {edu.current && (
                      <span className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-70"></span>
                    )}
                  </div>

                  <div className="glass p-4 rounded-xl border border-purple-500/30 hover:border-purple-400 transition duration-300">

                    <h3 className="text-lg font-semibold text-white">
                      {edu.title}
                    </h3>

                    <p className="text-purple-400 font-medium text-sm mt-1">
                      {edu.subtitle}
                    </p>

                    <p className="text-xs text-gray-400 mt-2">
                      {edu.period}
                    </p>

                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* CAROUSEL */}
          <div className="relative flex items-center justify-center">

            <button
              onClick={prev}
              className="absolute left-2 md:left-5 z-20 p-3 rounded-xl 
              bg-black/40 backdrop-blur-md 
              border border-purple-500/30
              hover:border-purple-400
              transition"
            >
              <ChevronLeft />
            </button>

            <div className="relative w-full max-w-[520px] h-[360px] md:h-[450px] flex items-center justify-center">

              {education.map((edu, index) => {

                const total = education.length;
                let position = index - activeIndex;

                if (position > total / 2) position -= total;
                if (position < -total / 2) position += total;

                const isCenter = position === 0;

                let translateX = 0;
                let scale = 0.9;
                let opacity = 0;

                if (isCenter) {
                  translateX = 0;
                  scale = 1;
                  opacity = 1;
                } else if (position === -1) {
                  translateX = -170;
                  scale = 0.85;
                  opacity = 0.25;
                } else if (position === 1) {
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
                      opacity: opacity,
                      zIndex: isCenter ? 10 : 5,
                    }}
                  >

                    <div className="relative group w-[90vw] max-w-[480px]">

                      <div className="glass p-6 rounded-2xl border border-purple-500/40 backdrop-blur-xl
                      bg-gradient-to-b from-purple-500/10 to-transparent
                      shadow-[0_0_40px_rgba(168,85,247,0.35)]">

                        <div className="w-full h-[180px] md:h-[320px] overflow-hidden rounded-lg relative">

                          <img
                            ref={isCenter ? imageRef : null}
                            src={edu.image}
                            alt={edu.title}
                            className="w-full h-full object-contain"
                          />

                        </div>

                        <h3 className="text-xl font-semibold text-white text-center mt-3">
                          {edu.title}
                        </h3>

                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

            <button
              onClick={next}
              className="absolute right-2 md:right-[-20px] z-20 p-3 rounded-xl 
              bg-black/40 backdrop-blur-md 
              border border-purple-500/30
              hover:border-purple-400
              transition"
            >
              <ChevronRight />
            </button>

          </div>

        </div>

        {/* INDICATOR LINE */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {education.map((_, index) => (
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
    </section>
  );
};