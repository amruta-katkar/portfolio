export default function AboutSection() {
  return (
    <section className="relative w-full py-24 bg-background text-foreground overflow-hidden"id="about">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Full Stack Developer &
              <span className="text-primary"> Problem Solver</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-8 max-w-2xl mb-8">
              Computer Science student passionate about building scalable web
              applications, interactive dashboards, and AI-powered solutions.
              I enjoy transforming ideas into clean, functional, and real-world
              digital products.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">

  {/* Resume Button */}
  <button
    className="
    group relative inline-flex items-center justify-center gap-3
    h-12 px-8
    overflow-hidden rounded-xl
    bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600
    text-sm font-medium text-white
    shadow-xl shadow-blue-500/20
    transition-all duration-300
    hover:scale-[1.02]
    hover:shadow-blue-500/40
  "
  >
    {/* Hover Glow */}
    <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

    <span className="relative z-10">
      Download Resume
    </span>
  </button>

  {/* Projects Button */}
  <button
    className="
    inline-flex items-center justify-center
    h-12 px-6
    rounded-xl
    border border-border
    bg-background/50
    backdrop-blur-md
    hover:bg-accent
    transition-all duration-300
    text-sm font-medium
  "
  >
    View Projects
  </button>

</div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>

            {/* Code Window */}
            <div className="relative rounded-3xl border border-border bg-card/70 backdrop-blur-xl overflow-hidden shadow-2xl">

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <span className="text-xs text-muted-foreground">
                  developer.js
                </span>
              </div>

              {/* Code */}
              <div className="p-6 font-mono text-sm md:text-[15px] leading-8 overflow-x-auto">

                <p>
                  <span className="text-pink-500">const</span>{" "}
                  <span className="text-blue-500">developer</span> = {"{"}
                </p>

                <p className="ml-6">
                  <span className="text-green-500">name</span>:{" "}
                  <span className="text-yellow-500">"Your Name"</span>,
                </p>

                <p className="ml-6">
                  <span className="text-green-500">role</span>:{" "}
                  <span className="text-yellow-500">
                    "Full Stack Developer"
                  </span>
                  ,
                </p>

                <p className="ml-6">
                  <span className="text-green-500">focuses</span>: [
                  <span className="text-cyan-400">
                    "Web Applications",
    "Machine Learning",
    "Backend Systems"
                  </span>
                  ],
                </p>

                <p className="ml-6">
                  <span className="text-green-500">focus</span>:{" "}
                  <span className="text-yellow-500">
                    "Building real-world applications"
                  </span>
                  ,
                </p>

                <p>{"};"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}