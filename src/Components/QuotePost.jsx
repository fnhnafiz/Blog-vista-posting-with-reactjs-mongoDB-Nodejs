const QuotePost = () => {
  return (
    <section className="relative max-w-5xl mx-auto my-8 rounded-xl bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-red-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Quote Icon */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full h-16 w-16 flex items-center justify-center shadow-xl animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-6-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0h.01"
              />
            </svg>
          </div>
        </div>

        {/* Quote Text */}
        <h1 className="text-3xl md:text-4xl font-extrabold leading-snug tracking-wide mb-6">
          "Your time is limited, so dont waste it living someone elses life"
        </h1>

        {/* Author */}
        <p className="text-lg text-gray-400 font-medium">— Steve Jobs</p>
      </div>

      {/* Decorative Divider */}
      <div className="flex justify-center items-center mt-12 space-x-2">
        <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-pink-500"></div>
        <div className="w-6 h-1 bg-gradient-to-r from-blue-400 to-cyan-500"></div>
        <div className="w-12 h-1 bg-gradient-to-r from-red-500 to-pink-500"></div>
      </div>

      {/* Bottom Decorative Patterns */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-pink-500 rounded-full opacity-30 blur-2xl"></div>
      </div>
    </section>
  );
};

export default QuotePost;
