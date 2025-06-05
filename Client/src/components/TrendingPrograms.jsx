import React from "react";
import {
  FaReact,
  FaPython,
  FaJava,
  FaBullhorn,
  FaFileInvoiceDollar,
  FaCameraRetro,
  FaBug,
  FaPhp,
  FaExchangeAlt,
  FaMoon,
  FaHandshake,
} from "react-icons/fa";
import { SiFlutter, SiMongodb } from "react-icons/si";

const programs = [
  { title: "Mobile App Development - Malayalam", icon: <FaReact size={40} /> },
  { title: "Python Full Stack - Malayalam", icon: <FaPython size={40} /> },
  { title: "Digital Marketing - Malayalam", icon: <FaBullhorn size={40} /> },
  { title: "Java Full Stack - Tamil", icon: <FaJava size={40} /> },
  { title: "Java Full Stack - Malayalam", icon: <FaJava size={40} /> },
  { title: "Professional Accounting - Malayalam", icon: <FaFileInvoiceDollar size={40} /> },
  { title: "Digital Marketing - Tamil", icon: <FaBullhorn size={40} /> },
  { title: "Multimedia - Tamil", icon: <FaCameraRetro size={40} /> },
  { title: "Multimedia - Malayalam", icon: <FaCameraRetro size={40} /> },
  { title: "Software Testing - Tamil", icon: <FaBug size={40} /> },
  { title: "PHP Full Stack - Malayalam", icon: <FaPhp size={40} /> },
  { title: "Dual Internship", icon: <FaExchangeAlt size={40} /> },
  { title: "Python Full Stack", icon: <FaPython size={40} /> },
  { title: "MERN Stack", icon: <SiMongodb size={40} /> },
  { title: "Internship Night", icon: <FaMoon size={40} /> },
  { title: "Flutter", icon: <SiFlutter size={40} /> },
  { title: "Client Relationship Management (Master)", icon: <FaHandshake size={40} /> },
  { title: "Flutter", icon: <SiFlutter size={40} /> },
];

const TrendingPrograms = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-gray-900">
        Trending <span className="text-purple-600">Programs</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-[#001f2f] text-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-md transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl min-h-[180px] cursor-pointer"
          >
            <div className="text-purple-400 mb-4">{program.icon}</div>
            <p className="text-center text-sm font-semibold leading-snug">{program.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingPrograms;
