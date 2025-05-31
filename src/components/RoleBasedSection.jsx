import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserPlus,
  Award,
  Briefcase,
  TrendingUp,
  Users,
  School,
  GraduationCap,
  CalendarClock,

} from "lucide-react";

const roles = [
  { label: "Speakers & Experts", key: "speakers" },
  { label: "Colleges & Organizers", key: "colleges" },
  { label: "Curious Students", key: "students" },
];

const roleContent = {
  speakers: {
    heading: "Reach the Right Audience",
    description:
      "Host sessions in your area of expertise. We connect you with colleges actively seeking speakers in your domain — from tech to entrepreneurship.",
    button: "Become a Speaker",
    illustration: "./speakers.svg",
    features: [
      {
        icon: <UserPlus className="w-6 h-6 text-green-500" />,
        title: "Get Paid",
        highlight: "20K - 40K/ Session",
        desc: "Receive honorariums or payment for your sessions.",
      },
      {
        icon: <Award className="w-6 h-6 text-green-500" />,
        title: "Certified Contribution",
        desc: "Earn Certificates from reputed colleges.",
      },
      {
        icon: <Briefcase className="w-6 h-6 text-green-500" />,
        title: "Build Speaker Portfolio",
        desc: "Showcase your past sessions and expertise on your profile.",
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-green-500" />,
        title: "Grow your Career",
        desc: "Connect with institutions and elevate your professional journey.",
      },
    ],
  },
  colleges: {
    heading: "Find Verified Speakers",
    description:
      "Easily connect with trusted and impactful speakers tailored to your event themes.",
    button: "Explore Speakers",
    illustration: "/campus.svg",
    features: [
      {
        icon: <Users className="w-6 h-6 text-green-500" />,
        title: "Verified Network",
        desc: "Choose from speakers with certified credentials.",
      },
      {
        icon: <CalendarClock className="w-6 h-6 text-green-500" />,
        title: "Streamlined Scheduling",
        desc: "Book talks without back-and-forth communication.",
      },
      {
        icon: <Briefcase className="w-6 h-6 text-green-500" />,
        title: "Event Management",
        desc: "Easily track and manage events and feedback.",
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-green-500" />,
        title: "Boost Engagement",
        desc: "Enhance campus visibility and student motivation.",
      },
    ],
  },
  students: {
    heading: "Learn Beyond the Curriculum",
    description:
      "Join sessions hosted by industry professionals and thought leaders to gain real-world exposure.",
    button: "Find Events",
    illustration: "/students.svg",
    features: [
      {
        icon: <GraduationCap className="w-6 h-6 text-green-500" />,
        title: "Real-World Learning",
        desc: "Get exposure to talks from experienced speakers.",
      },
      {
        icon: <Award className="w-6 h-6 text-green-500" />,
        title: "Participation Certificates",
        desc: "Earn certificates for your active participation.",
      },
      {
        icon: <Users className="w-6 h-6 text-green-500" />,
        title: "Interactive Sessions",
        desc: "Engage directly with professionals and ask questions.",
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-green-500" />,
        title: "Career Inspiration",
        desc: "Discover interests and paths through expert insights.",
      },
    ],
  },
};

export default function RoleBasedSection() {
  const [activeRole, setActiveRole] = useState("speakers");
  const data = roleContent[activeRole];

  return (
    <section className="bg-[#f9fbfd] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg px-6 sm:px-10 md:px-16 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Why Choose <span className="text-blue-600">Quipedia</span>?
        </h2>

       <div className="flex justify-center flex-wrap gap-3 mb-10">
  {roles.map((r) => (
    <button
      key={r.key}
      onClick={() => setActiveRole(r.key)}
      className={`px-5 py-2 text-sm sm:text-base rounded-md font-medium border transition-all duration-300 shadow-sm ${
        activeRole === r.key
          ? "bg-blue-600 text-white"
          : "text-blue-600 border-blue-600 hover:bg-blue-50"
      }`}
    >
      {r.label}
    </button>
  ))}
</div>


        <div className="min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
                  {data.heading}
                </h3>
                <p className="text-gray-600 mb-5 text-base sm:text-lg">
                  {data.description}
                </p>
  
               <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700 transition w-full sm:w-auto">
               {data.button}
              </button>
              </div>
              <img
                src={data.illustration}
                alt="role illustration"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14">
          {data.features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-blue-200 rounded-xl p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-3">{f.icon}</div>
              <h4 className="font-semibold text-base sm:text-lg text-gray-800">
                {f.title}
                {f.highlight && (
                  <span className="block text-green-600 text-sm mt-1">
                    {f.highlight}
                  </span>
                )}
              </h4>
              <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}