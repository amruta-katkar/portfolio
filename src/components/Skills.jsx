// components/SkillsSection.tsx
"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaPhp,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFastapi,
  SiFlask,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import { Terminal } from "lucide-react";

const skills = [
  {
    name: "HTML",
    icon: FaHtml5,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "text-yellow-400",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "text-sky-500",
  },
  {
    name: "Flask",
    icon: SiFlask,
    color: "text-gray-700 dark:text-white",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "text-emerald-500",
  },
  {
    name: "PHP",
    icon: FaPhp,
    color: "text-indigo-500",
  },
  {
    name: "Pandas",
    icon: SiPandas,
    color: "text-violet-500",
  },
  {
    name: "NumPy",
    icon: SiNumpy,
    color: "text-cyan-500",
  },
  {
    name: "Scikit Learn",
    icon: SiScikitlearn,
    color: "text-orange-400",
  },
  {
    name: "OpenCV",
    icon: Terminal,
    color: "text-rose-500",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-600",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-black dark:text-white",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    color: "text-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-400",
  },
];

export default function SkillsSection() {
  return (
    <section className="w-full py-16 px-4" id="skills">
      <div
        className="
          mx-auto max-w-7xl rounded-3xl
          border border-zinc-200 dark:border-white/10
          bg-white dark:bg-[#07111f]
          shadow-xl
          p-6 md:p-10
          transition-colors duration-300
        "
      >
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Skills & Technologies
          </h2>

          <div className="mt-3 h-[3px] w-28 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="
                  group relative overflow-hidden
                  rounded-2xl border
                  border-zinc-200 dark:border-white/10
                  bg-zinc-50 dark:bg-white/5
                  backdrop-blur-xl
                  p-5
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                "
              >
                {/* Glow Effect */}
                <div
                  className="
                    absolute inset-0 opacity-0
                    bg-gradient-to-br
                    from-cyan-500/10 to-blue-500/10
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10 flex flex-col items-center justify-center text-center gap-3">
                  <div
                    className="
                      flex h-14 w-14 items-center justify-center
                      rounded-xl
                      bg-white dark:bg-black/30
                      border border-zinc-200 dark:border-white/10
                      shadow-md
                    "
                  >
                    <Icon className={`text-3xl ${skill.color}`} />
                  </div>

                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                    {skill.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}