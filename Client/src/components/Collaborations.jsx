import React from "react";
import { FaHandshake, FaUniversity, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const partners = [
  {
    title: "University Partners",
    icon: <FaUniversity size={36} />,
    description: "We collaborate with top universities to offer accredited programs.",
  },
  {
    title: "Industry Partners",
    icon: <FaHandshake size={36} />,
    description: "Industry leaders help us craft real-world internship experiences.",
  },
  {
    title: "Global Reach",
    icon: <FaGlobe size={36} />,
    description: "Our programs connect learners across the globe.",
  },
];

const CollaborationSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#0A0028] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Our <span className="text-pink-500">Collaborations</span>
        </h2>
        <p className="text-purple-400 text-base sm:text-lg max-w-2xl mx-auto">
          Empowering students through strategic partnerships with academia and industry.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 mb-16">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#1f005c] to-[#33006f] w-full sm:w-[300px] p-8 rounded-2xl text-center shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-pink-500/20 text-pink-400 rounded-full flex items-center justify-center shadow-md">
              {partner.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{partner.title}</h3>
            <p className="text-gray-300 text-sm">{partner.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-3xl py-10 px-6 sm:px-12 text-center shadow-2xl">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Start Your Virtual Internship Journey Today!
        </h3>
        <p className="text-white text-sm sm:text-base max-w-2xl mx-auto mb-6">
          Join 10,000+ students who have upskilled through our industry-ready internship programs and expert mentorship.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-pink-600 cursor-pointer font-semibold px-6 py-3 rounded-full hover:bg-gray-300 transition duration-300"
        >
          Get Started Today
        </button>
      </div>
    </section>
  );
};

export default CollaborationSection;
