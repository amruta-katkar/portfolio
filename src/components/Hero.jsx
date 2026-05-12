// src/components/Hero.jsx

"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative overflow-hidden
      bg-white dark:bg-[#050816]
      transition-colors duration-300
      pt-24 pb-20
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
        absolute top-20 left-1/2 -translate-x-1/2
        w-[500px] h-[500px]
        bg-blue-500/20
        blur-[120px]
        rounded-full
        dark:block hidden
      "
      />

      {/* CONTAINER */}
      <div
        className="
        max-w-7xl mx-auto
        px-6 md:px-10 lg:px-20
        grid lg:grid-cols-2
        gap-14 items-center
      "
      >
        {/* LEFT SIDE */}
        <div className="relative z-10">
          {/* AVAILABLE BADGE */}
          <div
            className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-full
            border border-green-300 dark:border-green-500/20
            bg-green-100 dark:bg-green-500/10
            mb-6
          "
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />

            <span className="text-sm font-medium text-green-700 dark:text-green-400">
              Available for opportunities
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="
            text-4xl sm:text-5xl lg:text-6xl
            font-bold leading-tight
            text-gray-900 dark:text-white
          "
          >
            Hi, I’m{" "}
            <span className="text-blue-600 dark:text-blue-500">
              Amruta Katkar
            </span>
          </h1>

          {/* SUBTITLE */}
          <h2
            className="
            mt-5
            text-2xl md:text-3xl
            font-semibold
            text-gray-700 dark:text-gray-300
          "
          >
            Full Stack Developer{" "}
            <span className="text-blue-600 dark:text-blue-500">|</span>{" "}
            CSE Student
          </h2>

          {/* ABOUT */}
          <p
            className="
            mt-6 max-w-xl
            text-base md:text-lg
            leading-8
            text-gray-600 dark:text-gray-400
          "
          >
            I build scalable web applications and data-driven solutions
            using cutting-edge technologies. Passionate about solving real-world
            problems and continuously learning new skills.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">
            {/* VIEW WORK */}
            <Link
              href="#projects"
              className="
              group inline-flex items-center gap-2
              px-6 py-3 rounded-xl
              bg-blue-600 hover:bg-blue-700
              text-white font-medium
              transition-all duration-300
            "
            >
              View My Work

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </Link>

            {/* RESUME BUTTON */}
            <a
              href="/resume.pdf"
              download
              className="
              inline-flex items-center gap-2
              px-6 py-3 rounded-xl
              border border-gray-300 dark:border-gray-700
              bg-white dark:bg-[#0B1220]
              hover:bg-gray-100 dark:hover:bg-[#10182B]
              text-gray-900 dark:text-white
              font-medium
              transition-all duration-300
            "
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-8">
            {/* GITHUB */}
            <a
              href="https://github.com/amruta-katkar"
              target="_blank"
              rel="noopener noreferrer"
              className="
              w-12 h-12
              rounded-xl
              flex items-center justify-center
              border border-gray-300 dark:border-gray-700
              bg-white dark:bg-[#0B1220]
              text-gray-700 dark:text-gray-300
              hover:border-blue-500 hover:text-blue-500
              transition-all duration-300
            "
            >
              <Github size={22} />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/amruta-katkar"
              target="_blank"
              rel="noopener noreferrer"
              className="
              w-12 h-12
              rounded-xl
              flex items-center justify-center
              border border-gray-300 dark:border-gray-700
              bg-white dark:bg-[#0B1220]
              text-gray-700 dark:text-gray-300
              hover:border-blue-500 hover:text-blue-500
              transition-all duration-300
            "
            >
              <Linkedin size={22} />
            </a>

            {/* LEETCODE */}
            <a
              href="https://leetcode.com/amruta-katkar"
              target="_blank"
              rel="noopener noreferrer"
              className="
              w-12 h-12
              rounded-xl
              flex items-center justify-center
              border border-gray-300 dark:border-gray-700
              bg-white dark:bg-[#0B1220]
              hover:border-yellow-500
              transition-all duration-300
            "
            >
              <img
                src="/leetcode.png"
                alt="Leetcode"
                className="w-5 h-5"
              />
            </a>

            {/* MAIL */}
            <a
              href="mailto:amruta.h.katkar@gmail.com"
              className="
              w-12 h-12
              rounded-xl
              flex items-center justify-center
              border border-gray-300 dark:border-gray-700
              bg-white dark:bg-[#0B1220]
              text-gray-700 dark:text-gray-300
              hover:border-red-500 hover:text-red-500
              transition-all duration-300
            "
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end">
          {/* OUTER GLOW */}
          <div
            className="
            absolute
            w-[380px] h-[380px]
            rounded-full
            bg-blue-500/10
            blur-3xl
          "
          />

          {/* MAIN CIRCLE */}
          <div
            className="
            relative
            w-[320px] h-[320px]
            md:w-[430px] md:h-[430px]
            rounded-full
            border border-blue-500/30
            flex items-center justify-center
          "
          >
            {/* IMAGE */}
            <div
              className="
              relative overflow-hidden rounded-full
              w-[260px] h-[260px]
              md:w-[340px] md:h-[340px]
              border-4 border-blue-500/30
              shadow-[0_0_60px_rgba(59,130,246,0.35)]
            "
            >
              <Image
                src="/female-avatar.png"
                alt="Female Developer"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* FLOATING CARD TOP */}
            <div
              className="
              absolute top-10 -left-4 md:left-0
              bg-white dark:bg-[#0B1220]
              border border-gray-200 dark:border-gray-700
              px-4 py-3 rounded-2xl
              shadow-xl
            "
            >
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                3rd Year CSE Student
              </p>

              <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                Passionate about coding & design.
              </p>
            </div>

            {/* FLOATING CARD BOTTOM */}
            <div
              className="
              absolute bottom-8 -right-2
              bg-white dark:bg-[#0B1220]
              border border-gray-200 dark:border-gray-700
              px-5 py-4 rounded-2xl
              shadow-xl
            "
            >
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Tech Enthusiast
              </p>

              <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <li>✓ Full Stack Development</li>
                <li>✓ UI/UX Design</li>
                <li>✓ Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}