import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/all-courses" },
    { label: "Placements", path: "/placements" },
    { label: "Support", path: "/support" },
  ];

  return (
    <nav className="bg-[#0A0028] px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img
          src="https://cybknow.com/wp-content/uploads/2025/02/logo.png"
          alt="Logo"
          className="h-10 sm:h-12"
        />
        <h1 className="text-white font-bold text-xl sm:text-2xl">
          Cybknow <span className="text-white font-medium">Academy</span>
        </h1>
      </div>

      <ul className="hidden md:flex space-x-8 items-center text-lg font-medium">
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
        className="bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:opacity-90 transition duration-300"
      >
        Get in Touch
      </Link>
    </nav>
  );
}
