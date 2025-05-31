import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white font-sans">
      {/* Top CTA Section */}
      <div className="bg-gradient-to-r from-[#5B8EFF] to-[#40C4FF] py-10 px-4 sm:px-6 md:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Try Quipedia today.</h2>
        <p className="text-sm mb-6">✓ Free to use &nbsp; ✓ Real-time collaboration &nbsp; ✓ Connect and host effortlessly</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
            Sign up free 
          </button>
          <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-700 transition">
            Contact us
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-sm text-gray-300">
        {/* Logo & Description */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-2">
            Qui<span className="text-blue-400">pedia</span>
          </h2>
          <p className="text-gray-400">
            Bridging institutions and inspiring speakers. Discover, connect, and host meaningful events.
          </p>
        </div>

        {/* Links Sections */}
        <div>
          <h4 className="font-semibold text-white mb-4">Get Connected</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Connectivity</a></li>
            <li><a href="#" className="hover:text-blue-400">Dashboard</a></li>
            <li><a href="#" className="hover:text-blue-400">Speakers</a></li>
            <li><a href="#" className="hover:text-blue-400">Institutes</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Docs</a></li>
            <li><a href="#" className="hover:text-blue-400">Support</a></li>
            <li><a href="#" className="hover:text-blue-400">Guides</a></li>
            <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400">Partnerships</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Social</h4>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-blue-400"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-blue-400"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="border-t border-gray-700 py-4 px-4 text-center text-gray-400 text-xs relative">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center max-w-7xl mx-auto gap-2">
          <span>© {new Date().getFullYear()} Quipedia. All rights reserved.</span>
          <span className="bg-green-600 text-white text-[10px] px-3 py-1 rounded-full">
            ALL SYSTEMS OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
