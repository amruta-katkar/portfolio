export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-[#0B0F19] text-white">

      <h2 className="text-3xl font-bold text-center mb-12">
        Skills
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Technologies I’ve worked with to build scalable and data-driven applications
      </p>

      <div className="grid md:grid-cols-4 gap-8">

        {/* Frontend */}
        <div className="bg-[#111827] p-6 rounded-xl shadow hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition">
          <h3 className="font-semibold mb-4">Frontend</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-gray-700 px-3 py-1 rounded-full">HTML</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">CSS</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">JavaScript</span>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-[#111827] p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="font-semibold mb-4">Backend</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-gray-700 px-3 py-1 rounded-full">Python</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">Flask</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">FastAPI</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">PHP</span>
          </div>
        </div>

        {/* Data & ML */}
        <div className="bg-[#111827] p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="font-semibold mb-4">Data & ML</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-gray-700 px-3 py-1 rounded-full">Pandas</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">NumPy</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">Scikit-learn</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">OpenCV</span>
          </div>
        </div>

        {/* Tools */}
        <div className="bg-[#111827] p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="font-semibold mb-4">Tools</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-gray-700 px-3 py-1 rounded-full">Git</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">GitHub</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">VS Code</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">Azure ML</span>
          </div>
        </div>

      </div>

    </section>
  );
}