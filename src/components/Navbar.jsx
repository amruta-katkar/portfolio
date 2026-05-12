"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";

    setTheme(savedTheme);

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center px-4 pt-4">
      <nav
        className="
          w-full max-w-6xl
          rounded-2xl
          border border-blue-500/20
          bg-white/70 dark:bg-[#060b1a]/70
          backdrop-blur-xl
          shadow-[0_0_30px_rgba(37,99,235,0.15)]
          transition-all duration-300
        "
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-11 w-11 items-center justify-center
                rounded-xl
                border border-blue-500/40
                bg-gray-200 dark:bg-[#0d1328]
                text-black dark:text-white
                font-bold
                shadow-[0_0_12px_rgba(59,130,246,0.45)]
                transition-all duration-300
              "
            >
              AK
            </div>

            <div>
              <h1 className="text-black dark:text-white font-semibold text-lg">
                Amruta Katkar
              </h1>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium transition-all duration-300"
                >
                  <span
                    className={
                      isActive
                        ? "text-blue-500 dark:text-blue-400"
                        : `
                          text-gray-700 hover:text-black
                          dark:text-gray-300 dark:hover:text-white
                        `
                    }
                  >
                    {item.name}
                  </span>

                  {/* Active underline */}
                  <span
                    className={`
                      absolute left-1/2 -bottom-3 h-[3px]
                      -translate-x-1/2 rounded-full
                      bg-blue-500
                      transition-all duration-300
                      ${
                        isActive
                          ? "w-8 opacity-100"
                          : "w-0 opacity-0"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              relative flex h-10 w-20 items-center
              rounded-full
              border border-blue-500/30
              bg-gray-200 dark:bg-[#0d1328]
              px-1
              transition-all duration-300
            "
          >
            {/* Sliding Circle */}
            <div
              className={`
                absolute flex h-8 w-8 items-center justify-center
                rounded-full
                bg-blue-500
                text-white
                shadow-md
                transition-all duration-300
                ${theme === "dark" ? "translate-x-10" : "translate-x-0"}
              `}
            >
              {theme === "dark" ? (
                <Moon size={16} />
              ) : (
                <Sun size={16} />
              )}
            </div>

            {/* Icons */}
            <div className="flex w-full justify-between px-2 text-gray-600 dark:text-gray-400">
              <Sun size={16} />
              <Moon size={16} />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}