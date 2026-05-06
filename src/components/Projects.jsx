export default function Projects() {
  return (
    <section id="projects"  className="px-6 py-20 bg-[#0B0F19] text-white">

      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      {/* ⭐ Featured Project */}
      <div className="bg-[#111827] rounded-2xl p-6 mb-12 shadow-lg hover:scale-[1.02] transition">
        <img
          src="https://via.placeholder.com/800x400"
          alt="ATS Resume Builder"
          className="rounded-lg mb-4"
        />

        <h3 className="text-2xl font-semibold mb-2">
          ATS Resume Builder
        </h3>

        <p className="text-gray-400 mb-4">
          Built an end-to-end web application that generates ATS-friendly resumes with scoring and LaTeX-based PDF downloads.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-indigo-600 px-3 py-1 rounded-full text-sm">Python</span>
          <span className="bg-indigo-600 px-3 py-1 rounded-full text-sm">Flask</span>
          <span className="bg-indigo-600 px-3 py-1 rounded-full text-sm">LaTeX</span>
        </div>

        <div className="flex gap-4">
          <a href="#" className="text-indigo-400 hover:underline">Live Demo</a>
          <a href="#" className="text-indigo-400 hover:underline">GitHub</a>
        </div>
      </div>

      {/* 🧩 Other Projects */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Project 1 */}
        <div className="bg-[#111827] p-5 rounded-xl shadow hover:scale-105 transition">
          <img src="https://via.placeholder.com/400x200" className="rounded mb-3" />
          <h4 className="font-semibold">Research Idea Generator</h4>
          <p className="text-gray-400 text-sm">
            FastAPI-based tool to generate project ideas from research keywords.
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-[#111827] p-5 rounded-xl shadow hover:scale-105 transition">
          <img src="https://via.placeholder.com/400x200" className="rounded mb-3" />
          <h4 className="font-semibold">Google Play Dashboard</h4>
          <p className="text-gray-400 text-sm">
            Interactive dashboard for analyzing app trends and pricing data.
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-[#111827] p-5 rounded-xl shadow hover:scale-105 transition">
          <img src="https://via.placeholder.com/400x200" className="rounded mb-3" />
          <h4 className="font-semibold">Bakery App</h4>
          <p className="text-gray-400 text-sm">
            PHP-based web app with AJAX for dynamic product browsing.
          </p>
        </div>

      </div>

    </section>
  );
}