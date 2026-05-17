"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  ArrowUp,
} from "lucide-react";

export default function ContactSection() {
  const contacts = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "amruta.h.katkar@example.com",
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Kolhapur, India",
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      value: "linkedin.com/in/amruta-katkar",
    },
    {
      icon: <Github size={18} />,
      label: "GitHub",
      value: "github.com/amruta-katkar",
    },
  ];

  return (
    <section className="w-full py-24 bg-background text-foreground"id="contact">
      <div className="max-w-7xl mx-auto px-6">

        {/* CONTACT BOX */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/40 backdrop-blur-xl shadow-2xl">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

          {/* GRID */}
          <div className="relative z-10 grid lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div className="border-b lg:border-b-0 lg:border-r border-white/10 p-8 md:p-10">

              <h2 className="text-4xl font-bold mb-3">
                Get In Touch
              </h2>

              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 mb-10"></div>

              <div className="space-y-7">
                {contacts.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >
                    {/* ICON */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-blue-600/20 to-violet-600/20 text-primary shadow-lg shadow-blue-500/10">
                      {item.icon}
                    </div>

                    {/* TEXT */}
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>

                      <p className="mt-1 text-foreground break-all">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="p-8 md:p-10">

              <div className="grid md:grid-cols-2 gap-5 mb-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-14 rounded-xl border border-white/10 bg-black/20 dark:bg-white/[0.03] px-5 text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="h-14 rounded-xl border border-white/10 bg-black/20 dark:bg-white/[0.03] px-5 text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="mb-5 h-14 w-full rounded-xl border border-white/10 bg-black/20 dark:bg-white/[0.03] px-5 text-foreground placeholder:text-muted-foreground outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />

              <textarea
                rows={7}
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-black/20 dark:bg-white/[0.03] p-5 text-foreground placeholder:text-muted-foreground outline-none resize-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              ></textarea>

              {/* BUTTON */}
              <button className="group relative mt-6 inline-flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 px-8 py-4 text-sm font-medium text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/40">

                {/* Hover Glow */}
                <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

                <span className="relative z-10">
                  Send Message
                </span>

                <Send
                  size={18}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-10 border-t border-white/10 pt-6">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-4">
              <div>
                <h3 className="text-lg font-semibold">
                  Amruta Katkar
                </h3>
              </div>
            </div>

            {/* CENTER */}
            <p className="text-sm text-muted-foreground text-center">
              © 2026 Amruta Katkar. All rights reserved.
            </p>

            {/* BACK TO TOP */}
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group flex items-center gap-3 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <span>Back to Top</span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-card/40 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/10">
                <ArrowUp
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1"
                />
              </span>
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}