export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-[#0B0F19] text-white">

      <h2 className="text-3xl font-bold text-center mb-6">
        Let’s Connect
      </h2>

      <p className="text-center text-gray-400 mb-12">
        I’m open to internships and opportunities. Feel free to reach out!
      </p>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Form */}
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="bg-[#111827] p-6 rounded-xl shadow space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-800 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-800 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 rounded bg-gray-800 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-indigo-600 py-2 rounded hover:bg-indigo-500 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-4 text-gray-300">

          <p>📧 your-email@example.com</p>

          <p>🔗 GitHub</p>
          <p>🔗 LinkedIn</p>

        </div>

      </div>

    </section>
  );
}