"use client";
import {
  Briefcase,
  Code2,
  BrainCircuit,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";

export default function ExperienceSection() {
  const scrollRef = useRef(null);

  const experiences = [
    {
      icon: <BrainCircuit size={20} />,
      title: "Data Science & ML Trainee",
      company: "RacksonsIT Developers",
      date: "May 2025 – Jun 2025",
    },
    {
      icon: <Code2 size={20} />,
      title: "Data Science Trainee",
      company: "Averixis Solutions",
      date: "Apr 2025 – Jun 2025",
    },
    {
      icon: <Briefcase size={20} />,
      title: "Python & Web Dev Trainee",
      company: "iGAP Technologies",
      date: "Jun 2023 – Jul 2023",
    },
    {
      icon: <Trophy size={20} />,
      title: "DSA & Problem Solving",
      company: "LeetCode / GFG",
      date: "2022 – Present",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-24 bg-background text-foreground overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Container */}
        <div
          className="
            relative rounded-[32px]
            border border-white/5
            bg-card/40
            backdrop-blur-2xl
            p-8 md:p-10
            overflow-hidden
            shadow-[0_0_60px_rgba(59,130,246,0.08)]
          "
        >

          {/* Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full"></div>

          {/* Heading */}
          <div className="relative z-10 mb-16 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
                Career Path
              </p>

              <h2 className="text-4xl md:text-5xl font-bold">
                Experience
              </h2>
            </div>

            {/* Scroll Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scroll("left")}
                className="
                  w-11 h-11 rounded-full
                  border border-white/10
                  flex items-center justify-center
                  hover:bg-blue-500/10
                  hover:border-blue-500/30
                  transition
                "
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() => scroll("right")}
                className="
                  w-11 h-11 rounded-full
                  border border-white/10
                  flex items-center justify-center
                  hover:bg-blue-500/10
                  hover:border-blue-500/30
                  transition
                "
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Timeline Scroll */}
          <div
            ref={scrollRef}
            className="
              relative z-10
              flex gap-14
              overflow-x-auto
              scroll-smooth
              scrollbar-hide
              pb-4
            "
          >

            {experiences.map((item, index) => (
              <div
                key={index}
                className="relative w-[250px] flex-shrink-0"
              >

                {/* Icon + Line */}
                <div className="relative flex items-center">

                  {/* Icon */}
                  <div
                    className="
                      relative z-10
                      w-14 h-14 rounded-full
                      bg-gradient-to-br
                      from-blue-500/15 to-violet-500/15
                      border border-white/5
                      flex items-center justify-center
                      text-blue-400
                      shadow-lg shadow-blue-500/10
                    "
                  >
                    {item.icon}
                  </div>

                  {/* Connecting Line */}
                  {index !== experiences.length - 1 && (
                    <div
                      className="
                        absolute left-14 top-1/2
                        w-[220px] h-px
                        -translate-y-1/2
                        bg-gradient-to-r
                        from-blue-500/50 to-transparent
                      "
                    ></div>
                  )}
                </div>

                {/* Dot */}
                <div className="mt-5 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.9)]"></div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground mt-2">
                    {item.company}
                  </p>

                  <p className="text-sm text-muted-foreground/70 mt-2">
                    {item.date}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}