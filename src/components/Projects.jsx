"use client";

import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "ATS Resume Builder",
    category: "Full Stack",
    description:
      "ATS-friendly resume builder with scoring and LaTeX PDF downloads.",
    tech: ["Next.js", "Tailwind", "MongoDB", "Node.js"],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Research Paper Idea Generator",
    category: "AI Project",
    description:
      "Generates project ideas using arXiv API and NLP techniques.",
    tech: ["FastAPI", "Python", "NLP", "API"],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Google Play Analysis",
    category: "Data Analysis",
    description:
      "Interactive dashboard for analysing Google Play Store datasets.",
    tech: ["Flask", "Dash", "Plotly", "Pandas"],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Bakery App",
    category: "Web App",
    description:
      "PHP-based bakery application with AJAX product browsing.",
    tech: ["PHP", "AJAX", "MySQL", "Bootstrap"],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProjectsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-20 px-4 md:px-10 bg-white dark:bg-[#050816]"id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>

            <div className="w-20 h-1 bg-blue-500 rounded-full mt-3"></div>
          </div>

          <button
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-xl
            border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition"
          >
            View All Projects
            <ExternalLink size={18} />
          </button>
        </div>

        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10
          bg-[#0f172a]/80 border border-white/10 p-3 rounded-full
          text-white hover:bg-blue-600 transition"
        >
          <ChevronLeft />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10
          bg-[#0f172a]/80 border border-white/10 p-3 rounded-full
          text-white hover:bg-blue-600 transition"
        >
          <ChevronRight />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[340px] max-w-[340px]
              rounded-3xl overflow-hidden border border-white/10
              bg-white/5 dark:bg-[#0b1120]/90 backdrop-blur-xl
              shadow-[0_0_25px_rgba(0,0,0,0.35)]
              hover:-translate-y-2 transition duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
                />

                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full
                  text-xs font-semibold bg-green-500/20 text-green-400
                  border border-green-500/30 backdrop-blur-md"
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-5">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full
                      bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* SAME LINE BUTTONS */}
                {/* Buttons */}
                <div className="flex items-center gap-3 mt-6">
                  
                  {/* Live Demo Button */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1 h-12
                      flex items-center justify-center gap-2
                      rounded-xl
                      border border-blue-500/40
                      text-blue-400
                      hover:bg-blue-500/10
                      transition-all duration-300
                      font-medium
                    "
                  >
                    Live Demo
                    <ExternalLink size={18} />
                  </a>

                  {/* Github */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 flex items-center justify-center
                    rounded-xl border border-white/10
                    text-gray-800 dark:text-white
                    hover:bg-blue-500/10 hover:border-blue-500/40
                    transition"
                  >
                    <Github size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}