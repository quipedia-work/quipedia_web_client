import React, { useEffect, useState } from "react";
import { FaUser, FaUniversity, FaCalendarAlt } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Quipedia helped us host 4 expert talks in a month seamless and inspiring!",
    name: "Priya Shah",
    role: "Event Coordinator",
    org: "MIT WPU, Pune",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQF5PLIOdIdY0g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1652071510294?e=2147483647&v=beta&t=6Ov7H_E-KrDlc0C8MWjaEQYYp2ZDSBcZbS-6Zs-zOgo",
  },
  {
    quote:
      "It was my first talk as a speaker. Quipedia made it feel professional and easy.",
    name: "Ankit Rao",
    role: "Student Speaker",
    org: "BTech Final Year",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQGaPv1JUN_bXw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1683105988818?e=2147483647&v=beta&t=0g_5ROI9mqQ00ZMHLfvbUEn9LJTBOC1n7fTNzta96K4",
  },
  {
    quote:
      "The onboarding and scheduling was smooth and the speaker was fantastic!",
    name: "Sneha Patil",
    role: "Faculty Head",
    org: "Symbiosis, Pune",
    img: "https://media.licdn.com/dms/image/v2/C4D03AQFDzxIz1YZpgw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1652900656671?e=2147483647&v=beta&t=sFJrsBqlxhQy4sf3RfGb5tTNiIX56rHxT3_gONZCr70",
  },
];

const logos = [
  "https://ztd-euwest2-prod-s3.s3.eu-west-2.amazonaws.com/wpu_mit_6c79a8dec5.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrjPP4L0-NfGdUXsrjjXOPDZIxqSHPe8pdPg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzAscM05XIlGK1h4yjAixCLxkpFGkNZExwA&s",
];

const TestimonialsPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="bg-white max-w-7xl mx-auto rounded-3xl shadow-xl p-12 border border-gray-100">
        <h2 className="text-center text-5xl font-extrabold text-gray-800">
          Trusted by <span className="text-blue-600">Institutions</span>, Backed by Experts ✨
        </h2>
        <p className="text-center text-gray-500 text-xl mt-4 max-w-2xl mx-auto">
          Colleges and speakers across India rely on Quipedia for impactful sessions,
          streamlined planning, and career growth.
        </p>

        {/* Scrolling Logos */}
        <div className="overflow-hidden w-full my-16 relative">
          <div className="flex gap-16 animate-scroll-logo whitespace-nowrap">
            {[...logos, ...logos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Logo ${i + 1}`}
                className="h-24 grayscale hover:grayscale-0 transition duration-500 object-contain rounded-xl"
              />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="flex justify-center py-6">
          <div className="w-full max-w-xl transition duration-500 ease-in-out">
            <div className="bg-blue-50 shadow-xl rounded-3xl border-t-4 border-blue-600 p-8">
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                “{testimonials[index].quote}”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[index].img}
                  alt={testimonials[index].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-900">
                    {testimonials[index].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[index].role} <br /> {testimonials[index].org}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-between items-center mt-16 bg-blue-100 px-8 py-6 rounded-2xl text-lg text-blue-900">
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            <FaUniversity className="text-2xl" />
            <span className="font-semibold">10+ Institute Onboarded</span>
          </div>
          <div className="flex items-center gap-3 mb-4 sm:mb-0">
            <FaUser className="text-2xl" />
            <span className="font-semibold">150+ Speaker Registered</span>
          </div>
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-2xl" />
            <span className="font-semibold">50+ Session Hosted</span>
          </div>
        </div>
      </div>

      {/* Scroll animation style */}
      <style jsx>{`
        @keyframes scroll-logo {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-logo {
          animation: scroll-logo 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsPage;
