"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 bg-[#0B0F19] text-white">
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="space-y-6 text-center md:text-left">

          <p className="text-sm text-indigo-400 tracking-wide">
            Open to internships
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Hi, I’m <span className="text-indigo-400">Amruta Katkar</span>
          </h1>

          <p className="text-lg text-gray-400">
            CSE Student | Full-Stack Developer
          </p>

          <p className="text-gray-300 max-w-lg">
            I build scalable web applications and data-driven solutions that solve real-world problems.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition shadow-lg shadow-indigo-500/20">
              View My Work
            </button>

            <button className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition">
              Download Resume
            </button>
          </div>

          {/* Social */}
          <div className="flex gap-5 justify-center md:justify-start text-xl text-gray-400">
            <a href="https://github.com/amruta-katkar" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/amruta-katkar/" className="hover:text-white transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center relative">
          
          {/* Glow */}
          <div className="absolute w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

          {/* Image Card */}
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              alt="avatar"
              className="w-56 h-56 object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}