export default function Experience() {
  return (
    <section className="px-6 py-20 bg-[#0B0F19] text-white">

      <h2 className="text-3xl font-bold text-center mb-12">
        Experience
      </h2>

      <div className="max-w-3xl mx-auto relative">

        {/* Vertical Line */}
        <div className="absolute left-2 top-0 h-full w-[2px] bg-gray-700"></div>

        <div className="space-y-12">

          {/* Item 1 */}
          <div className="flex items-start gap-6">
            
            {/* Dot */}
            <div className="w-4 h-4 bg-indigo-600 rounded-full mt-2 relative z-10"></div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold">
                Industrial Training – Machine Learning
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                RacksonsIT | May 2025 – Jun 2025
              </p>
              <p className="text-gray-300">
                Worked on data preprocessing and machine learning techniques including regression and clustering. Built a hand gesture recognition system using OpenCV and CNN concepts.
              </p>
            </div>

          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-6">
            
            {/* Dot */}
            <div className="w-4 h-4 bg-indigo-600 rounded-full mt-2 relative z-10"></div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold">
                Industrial Training – Python & Machine Learning
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                IGAP Technologies Pvt. Ltd. | Jun 2023 – Jul 2023
              </p>
              <p className="text-gray-300">
                Developed a Laptop Price Prediction system using regression and Flask.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}