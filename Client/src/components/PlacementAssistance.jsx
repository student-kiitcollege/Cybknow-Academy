import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

const PlacementAssistance = () => {
  return (
    <section className="bg-[#0A0028] text-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            KICKSTART YOUR <span className="text-blue-500">CYBER CAREER</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
            At Cybknow Academy, we're committed to your success beyond the classroom.
            Our comprehensive placement assistance program connects you with top companies,
            offering internships and full-time positions in the cybersecurity industry.
          </p>

          <ul className="space-y-4 mb-8">
            {[
              "Resume Building & Interview Prep",
              "Access to Exclusive Job Boards",
              "Networking Opportunities",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-pink-400 font-medium">
                <FaShieldAlt className="text-pink-400" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            to="/placements"
            className="inline-block bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition duration-300 text-sm sm:text-base"
          >
            Discover Opportunities →
          </Link>
        </div>

        <div className="flex-1 w-full">
          <div className="bg-gray-200 rounded-2xl w-full h-64 sm:h-80 md:h-96 flex items-center justify-center text-gray-500 text-xl sm:text-2xl font-bold">
            600 × 400
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementAssistance;
