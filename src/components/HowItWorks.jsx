import { FaBinoculars, FaUserFriends } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2"; // sleeker rocket
import "../howItWorks.css";

const steps = [
  {
    icon: <FaBinoculars className="text-blue-500 text-4xl mb-3" />,
    title: "Discover Opportunities",
    description:
      "Find or post speaking sessions, workshops, and insightful talks tailored to your interests and domain.",
  },
  {
    icon: <FaUserFriends className="text-green-500 text-4xl mb-3" />,
    title: "Connect & Collaborate",
    description:
      "Engage with passionate students, trusted institutions, and verified experts ready to share or learn.",
  },
  {
    icon: <HiOutlineRocketLaunch className="text-purple-500 text-4xl mb-3" />,
    title: "Launch Knowledge Sessions",
    description:
      "Host or attend real-time sessions, earn certifications, and grow your career.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f8fbff] py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How Quipedia Works – In 3 Simple Steps
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-16">
          Whether you're a student, expert, or institution – getting started is easy and impactful.
        </p>

        {/* Moving Rocket */}
        <div className="hidden md:block absolute top-[120px] left-0 w-full h-20 pointer-events-none z-30">
          <div className="animated-rocket text-4xl text-blue-600">
            <div className="rocket-body">
              <HiOutlineRocketLaunch />
            </div>
          </div>
        </div>

        {/* Line */}
        <div className="absolute top-[180px] left-0 right-0 z-0 hidden md:flex justify-center items-center">
          <div className="w-[70%] h-[2px] bg-gray-300 relative">
            <div className="absolute w-full h-full animated-dotted-line"></div>
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg"></div>
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow-lg"></div>
          </div>
        </div>

        {/* Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl"
            >
              <div>{step.icon}</div>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col sm:flex-row justify-center gap-4 z-10 relative">
          <button className="border border-blue-500 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg transition">
            Ready to Experience the Future of Learning?
          </button>
          <button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg transition">
            Join Quipedia Today
          </button>
        </div>
      </div>
    </section>
  );
}
