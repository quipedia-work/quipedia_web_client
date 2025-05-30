import { Users, CalendarClock, Building2, BarChart2 } from "lucide-react";

const features = [
  {
    title: "Discover Verified Speakers",
    desc: "Access a curated network of expert speakers and student influencers who are ready to inspire your audience.",
    icon: <Users className="w-7 h-7 text-[#37C390]" />,
  },
  {
    title: "Smart Booking & Scheduling",
    desc: "Avoid the email ping-pong. Book with real-time availability, automated reminders, and smooth coordination.",
    icon: <CalendarClock className="w-7 h-7 text-[#37C390]" />,
  },
  {
    title: "Get Discovered by Institutions",
    desc: "Boost your visibility and receive direct invitations from reputed colleges and verified platforms.",
    icon: <Building2 className="w-7 h-7 text-[#37C390]" />,
  },
  {
    title: "Build Your Talk Portfolio",
    desc: "Showcase your impact with public ratings, verified participation, and talk certificates — all in one place.",
    icon: <BarChart2 className="w-7 h-7 text-[#37C390]" />,
  },
];

export default function Features() {
  return (
    <section className="bg-[#e9f3ff] py-20 px-6 sm:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Built for Collaboration.
            <br />
            Designed for Impact.
          </h2>
          <p className="mt-4 text-gray-600 text-md max-w-xl mx-auto">
            Whether you're hosting or speaking, Quipedia makes every event
            easier to manage, more visible, and impactful.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
