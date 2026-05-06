export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-20 bg-[#0B0F19] text-white">

      <h2 className="text-3xl font-bold text-center mb-12">
        Certifications
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

        <div className="bg-[#111827] p-5 rounded-xl shadow hover:scale-105 transition">
          <h3 className="font-semibold">
            Machine Learning Pipelines with Azure ML Studio
          </h3>
          <p className="text-gray-400 text-sm">
            Coursera | Dec 2024
          </p>
        </div>

        <div className="bg-[#111827] p-5 rounded-xl shadow hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition">
          <h3 className="font-semibold">
            Python for Data Science
          </h3>
          <p className="text-gray-400 text-sm">
            NPTEL | Jan 2024 – Feb 2024
          </p>
        </div>

      </div>

    </section>
  );
}