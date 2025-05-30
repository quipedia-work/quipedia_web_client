import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="px-6 py-4 bg-white shadow-sm relative z-50 font-sans">
      <div className="relative flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-2xl font-bold flex-shrink-0">
          <span className="text-blue-600">Qui</span>
          <span className="text-gray-800">pedia</span>
        </div>

        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-gray-600 text-sm items-center">
          <li className="hover:text-blue-600"><a href="#">Home</a></li>
          <li className="hover:text-blue-600"><a href="#">How It Works</a></li>
          <li className="hover:text-blue-600"><a href="#">Features</a></li>
          <li className="relative" ref={dropdownRef}>
            <button onClick={() => setShowDropdown(!showDropdown)} className="hover:text-blue-600">
              Join Us ▾
            </button>
            {showDropdown && (
              <ul className="absolute top-full mt-2 bg-white border rounded shadow w-40 z-50">
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Student</a></li>
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Speaker</a></li>
                <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Institute</a></li>
              </ul>
            )}
          </li>
        </ul>

        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-700 text-sm px-4">
          <a href="#" className="block hover:text-blue-600">Home</a>
          <a href="#" className="block hover:text-blue-600">How It Works</a>
          <a href="#" className="block hover:text-blue-600">Features</a>

          <div ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="block hover:text-blue-600 w-full text-left"
            >
              Join Us ▾
            </button>
            {showDropdown && (
              <ul className="ml-4 mt-1 space-y-2 border-l border-gray-300 pl-4">
                <li><a href="#" className="block hover:text-blue-600">Student</a></li>
                <li><a href="#" className="block hover:text-blue-600">Speaker</a></li>
                <li><a href="#" className="block hover:text-blue-600">Institute</a></li>
              </ul>
            )}
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
