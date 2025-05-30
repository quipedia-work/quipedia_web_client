export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F3F6F9] py-20 px-6 sm:px-10 font-sans">
      <div className="relative max-w-7xl mx-auto bg-white rounded-2xl border border-[#d4dce5] shadow-md p-6 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Discover Brilliant Minds.
              <br />
              Host Impactful Talks.
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-md">
              Quipedia connects institutions with expert speakers across domains.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4">
              <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700 transition w-full sm:w-auto">
                Find a Speaker
              </button>
              <button className="border border-blue-600 text-blue-600 px-5 py-2.5 rounded-md hover:bg-blue-50 transition w-full sm:w-auto">
                Become a Speaker
              </button>

              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <div className="flex -space-x-3">
                  <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Speaker 1" className="w-9 h-9 rounded-full border-2 border-white" />
                  <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Speaker 2" className="w-9 h-9 rounded-full border-2 border-white" />
                  <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Speaker 3" className="w-9 h-9 rounded-full border-2 border-white" />
                </div>
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-[#37C390] opacity-60 animate-pulseRing z-0" />
                  <div className="relative text-sm font-semibold bg-[#37C390] text-white px-3 py-1 rounded-full z-10 shadow">
                    3k+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Image Cluster */}
          {/* Responsive YouTube Video */}
<div className="relative w-full h-0 pb-[56.25%] mt-10 md:mt-0 rounded-xl overflow-hidden shadow-lg">
  <iframe
    className="absolute top-0 left-0 w-full h-full rounded-xl"
    src="https://www.youtube.com/embed/EVM0G2Gyc5w"
    title="YouTube video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

        </div>
      </div>
    </section>
  );
}
