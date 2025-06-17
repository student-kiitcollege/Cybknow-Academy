import React from "react";
import { FaHandshake, FaUniversity, FaGlobe } from "react-icons/fa";

const partners = [
  {
    title: "University Partners",
    icon: <FaUniversity size={40} />,
    description: "We collaborate with top universities to offer accredited programs.",
  },
  {
    title: "Industry Partners",
    icon: <FaHandshake size={40} />,
    description: "Industry leaders help us craft real-world internship experiences.",
  },
  {
    title: "Global Reach",
    icon: <FaGlobe size={40} />,
    description: "Our programs connect learners across the globe.",
  },
];

const CollaborationSection = () => {
  return (
    <section className="bg-[#0A0028] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Collaborations</h2>
        <p className="text-purple-400 text-lg sm:text-xl max-w-2xl mx-auto">
          Empowering students through strategic partnerships with academia and industry.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto text-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-[#12003a] rounded-2xl p-8 shadow-lg hover:shadow-pink-500/30 transition duration-300"
          >
            <div className="mb-4 text-pink-500">{partner.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{partner.title}</h3>
            <p className="text-gray-300">{partner.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-3xl py-12 px-6 sm:px-12 text-center shadow-2xl">
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Start Your Virtual Internship Journey Today!
        </h3>
        <p className="text-white text-base sm:text-lg max-w-2xl mx-auto mb-6">
          Join 10,000+ students who have upskilled through our industry-ready internship programs and expert mentorship.
        </p>
        <a
          href="/register"
          className="inline-block bg-white text-pink-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-300 transition duration-300"
        >
          Get Started Today 
        </a>
      </div>
    </section>
  );
};

export default CollaborationSection;
