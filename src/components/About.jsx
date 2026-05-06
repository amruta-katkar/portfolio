export default function About() {
  return (
    <section id="about" className="px-6 py-20 bg-[#0B0F19] text-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left - Text */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-gray-300 mb-4">
            I’m a Computer Science student focused on building practical, real-world applications using full-stack development and data-driven approaches. I enjoy turning ideas into functional products, whether it’s developing end-to-end web apps or creating tools that solve everyday problems.
          </p>

          <p className="text-gray-300 mb-4">
            During my industrial training, I worked on machine learning projects involving data preprocessing and computer vision, which strengthened my understanding of applying ML in real scenarios. I’ve also explored building scalable backend systems and interactive dashboards.
          </p>

          <p className="text-gray-300">
            I’m continuously learning and looking for opportunities to apply my skills in real-world environments while growing as a software engineer.
          </p>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="about avatar"
            className="w-72 h-72 rounded-xl shadow-lg"
          />
        </div>

      </div>

    </section>
  );
}