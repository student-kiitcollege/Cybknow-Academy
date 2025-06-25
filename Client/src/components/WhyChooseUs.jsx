import React from "react";
import { FaCertificate, FaBolt, FaBriefcase, FaArrowUp } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0A0028] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-12 leading-tight">
          WHY CHOOSE <span className="text-blue-500">CYBKNOW ACADEMY</span>?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-2">
          {[
            {
              icon: <FaCertificate size={28} />,
              title: "Expert-Led Training",
              desc: "Learn from industry veterans with real-world experience in cybersecurity.",
            },
            {
              icon: <FaBolt size={28} />,
              title: "Hands-On Labs",
              desc: "Gain practical skills through immersive labs and real-world simulations.",
            },
            {
              icon: <FaBriefcase size={28} />,
              title: "Career Placement",
              desc: "Our dedicated team helps you find internships and job opportunities.",
            },
            {
              icon: <FaArrowUp size={28} />,
              title: "Updated Curriculum",
              desc: "Stay ahead with courses covering the latest threats and technologies.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#12003a] p-6 sm:p-8 rounded-2xl shadow-md border border-purple-900/30 text-center transition-transform hover:scale-[1.03] duration-300"
            >
              <div className="bg-[#1b0b4f] w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center text-blue-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
