import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigate to auth page with selected role
  const handleRoleSelect = (role) => {
    navigate(`/auth?role=${role}`);
    setShowDropdown(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="px-6 py-4 bg-white shadow-sm relative z-50 font-sans">
      <div className="relative flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
          <span className="text-blue-600">Qui</span>
          <span className="text-gray-800">pedia</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-gray-600 text-sm items-center">
          <li className="hover:text-blue-600 cursor-pointer" onClick={() => navigate("/")}>Home</li>
          <li className="hover:text-blue-600 cursor-pointer" onClick={() => navigate("/how-it-works")}>How It Works</li>
          <li className="hover:text-blue-600 cursor-pointer" onClick={() => navigate("/features")}>Features</li>
          <li className="relative" ref={dropdownRef}>
            <button onClick={() => setShowDropdown(!showDropdown)} className="hover:text-blue-600">
              Join Us ▾
            </button>
            {showDropdown && (
              <ul className="absolute top-full mt-2 bg-white border rounded shadow w-40 z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleRoleSelect("student")}>
                  Student
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleRoleSelect("speaker")}>
                  Speaker
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleRoleSelect("institute")}>
                  Institute
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Get Started Button (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/auth")}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </button>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-700 text-sm px-4">
          <div onClick={() => { setMobileMenuOpen(false); navigate("/"); }} className="block hover:text-blue-600 cursor-pointer">
            Home
          </div>
          <div onClick={() => { setMobileMenuOpen(false); navigate("/how-it-works"); }} className="block hover:text-blue-600 cursor-pointer">
            How It Works
          </div>
          <div onClick={() => { setMobileMenuOpen(false); navigate("/features"); }} className="block hover:text-blue-600 cursor-pointer">
            Features
          </div>

          <div ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="block hover:text-blue-600 w-full text-left"
            >
              Join Us ▾
            </button>
            {showDropdown && (
              <ul className="ml-4 mt-1 space-y-2 border-l border-gray-300 pl-4">
                <li className="cursor-pointer hover:text-blue-600" onClick={() => handleRoleSelect("student")}>
                  Student
                </li>
                <li className="cursor-pointer hover:text-blue-600" onClick={() => handleRoleSelect("speaker")}>
                  Speaker
                </li>
                <li className="cursor-pointer hover:text-blue-600" onClick={() => handleRoleSelect("institute")}>
                  Institute
                </li>
              </ul>
            )}
          </div>

          <button
            onClick={() => { setMobileMenuOpen(false); navigate("/auth"); }}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
