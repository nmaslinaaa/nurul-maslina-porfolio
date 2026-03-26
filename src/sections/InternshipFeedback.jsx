import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const internshipFeedback = [
  {
    quote:
      "Maslina performed well during her internship at Tech Dome. She was responsible, eager to learn, and completed her tasks properly while maintaining good communication with the team.",
    author: "Sangeerthanaa",
    role: "Education AI Department",
    avatar: "/avatar/picture1.jpeg",
  },
  {
    quote:
      "She’s such a good person and is always offering to help others whenever they need assistance.",
    author: "Amirah",
    role: "Education Science Department",
    avatar: "/avatar/picture2.jpeg",
  },
  {
    quote:
      "Mas is friendly and easy to work with. She communicates well with the team and helps create a positive working environment.",
    author: "Kamalin",
    role: "Education Technology Department",
    avatar: "/avatar/picture3.jpeg",
  },
  {
    quote:
      "You were responsible, easy to work with, and always willing to help during programs and events. Also you showed good teamwork, were supportive, and handled tasks responsibly during the internship, friendly personality and you have a good communication skill. ",
    author: "Nirumalar",
    role: "Education AI Department",
    avatar: "/avatar/picture4.png",
  },
  {
    quote:
      "Mas is someone who doesn’t just spend time talking. If she sees any work pending anywhere, even in other departments, she will help without asking anything. She contributes her effort, and even a small help from her makes my work feel lighter. She helps or does the work as if it is her own responsibility. She is truly willing to go to the ground and get things done.",
    author: "Yogaletchmi",
    role: "Education Science Department",
    avatar: "/avatar/picture5.jpg",
  },
  {
    quote:
      "She manages different types of tasks effectively when given clear guidance.",
    author: "Izzati",
    role: "Education Science Department",
    avatar: "/avatar/picture6.jpeg",
  },
  {
    quote:
      "Maslina works very fast and efficiently once she is assigned a task.",
    author: "Juwairiah",
    role: "HR Department",
    avatar: "/avatar/picture7.jpg",
  },
];

export const InternshipFeedback = () => {

  const [activeIdx, setActiveIdx] = useState(0);
  const tiltRef = useRef(null);

  /* AUTO CHANGE EVERY 10 SECONDS */
  useEffect(() => {

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % internshipFeedback.length);
    }, 10000);

    return () => clearInterval(interval);

  }, []);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % internshipFeedback.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) =>
        (prev - 1 + internshipFeedback.length) %
        internshipFeedback.length
    );
  };

  /* TILT EFFECT */
  const handleMouseMove = (e) => {

    const rect = tiltRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 35;
    const rotateY = (x - centerX) / 35;

    tiltRef.current.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  };

  const resetTilt = () => {
    tiltRef.current.style.transform =
      "rotateX(0deg) rotateY(0deg)";
  };

  return (

    <section id="internshipfeedback" className="py-32 relative overflow-hidden">

      {/* background glow */}
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2
            className="text-4xl md:text-5xl
            font-bold mt-4 mb-6 animate-fade-in
            animation-delay-100 text-secondary-foreground"
          >
            Internship{" "}
            <span className="font-serif italic font-normal text-white">
              Feedback
            </span>
          </h2>

        </div>

        {/* Perspective container */}
        <div
          className="max-w-4xl mx-auto"
          style={{ perspective: "1200px" }}
        >

          {/* Tilt wrapper */}
          <div
            ref={tiltRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 0.2s ease",
            }}
          >

            {/* Card */}
            <div
              className="glass p-8 rounded-3xl md:p-12 glow-border relative group"
            >

              {/* Glass reflection */}
              <div className="card-glass"></div>

              {/* Quote icon */}
              <div
                className="absolute -top-4 left-8
                w-12 h-12 rounded-full bg-primary
                flex items-center justify-center"
              >
                <Quote className="w-6 h-6 text-primary-foreground " />
              </div>

              {/* Quote */}
              <blockquote
                className="text-xl md:text-2xl font-medium
                leading-relaxed mb-8 pt-4 text-justify"
              >
                "{internshipFeedback[activeIdx].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">

                <img
                  src={internshipFeedback[activeIdx].avatar}
                  alt={internshipFeedback[activeIdx].author}
                  className="w-14 h-14 rounded-full
                  object-cover ring-2 ring-primary/20"
                />

                <div>

                  <div className="font-semibold">
                    {internshipFeedback[activeIdx].author}
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {internshipFeedback[activeIdx].role}
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Navigation */}
          <div
            className="flex items-center
            justify-center gap-4 mt-8"
          >

            <button
              className="p-3 rounded-xl glass
              hover:bg-primary/10 border-purple-500/30
              hover:border-purple-400
              transition-all"
              onClick={previous}
            >
              <ChevronLeft />
            </button>

            <div className="flex gap-2">

              {internshipFeedback.map((_, idx) => (

                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIdx
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />

              ))}

            </div>

            <button
              onClick={next}
              className="p-3 rounded-xl glass
              hover:bg-primary/10 border-purple-500/30
            hover:border-purple-400
              transition-all"
            >
              <ChevronRight />
            </button>

          </div>

        </div>

      </div>

    </section>

  );

};
