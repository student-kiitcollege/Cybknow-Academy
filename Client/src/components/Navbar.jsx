import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/all-courses" },
    { label: "Placements", path: "/placements" },
    { label: "Support", path: "/support" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`px-4 sm:px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50 transition duration-300 ${
        scrolled ? "bg-[#0A0028]/80 backdrop-blur-md" : "bg-[#0A0028]"
      }`}
    >
      <div className="flex items-center space-x-2">
        <img
          src="https://cybknow.com/wp-content/uploads/2025/02/logo.png"
          alt="Logo"
          className="h-10 sm:h-12"
        />
        <h1 className="text-white font-bold text-lg sm:text-2xl">
          Cybknow <span className="font-medium">Academy</span>
        </h1>
      </div>

      <ul className="hidden md:flex space-x-8 items-center text-base font-medium">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              className={`transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-blue-500"
                  : "text-gray-300 hover:text-blue-500"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition duration-300 text-sm sm:text-base"
      >
        Get in Touch
      </Link>

      <button
        className="md:hidden text-white text-2xl"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0A0028] border-t border-purple-700 md:hidden z-40 shadow-lg">
          <ul className="flex flex-col items-start px-6 py-4 space-y-4 text-base font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`block w-full ${
                    location.pathname === item.path
                      ? "text-blue-500"
                      : "text-gray-300 hover:text-blue-500"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="w-full">
              <Link
                to="/contact"
                className="block bg-gradient-to-r from-blue-500 to-pink-500 text-white text-center py-2 rounded-md w-full font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
