import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaShieldAlt, FaBolt, FaCloud } from "react-icons/fa";

const logoImg = "https://cybknow.com/wp-content/uploads/2025/02/logo.png";

const features = [
  {
    id: "ethical-hacking",
    img: logoImg,
    title: "Ethical Hacking Fundamentals",
    level: "Beginner",
    description: "Learn the basics of ethical hacking and penetration testing.",
    duration: "8 Weeks",
    icon: <FaShieldAlt className="text-blue-400" size={20} />,
  },
  {
    id: "penetration-testing",
    img: logoImg,
    title: "Advanced Penetration Testing",
    level: "Advanced",
    description: "Master advanced techniques for network and web application testing.",
    duration: "12 Weeks",
    icon: <FaBolt className="text-blue-400" size={20} />,
  },
  {
    id: "cloud-security",
    img: logoImg,
    title: "Cloud Security Architecture",
    level: "Advanced",
    description: "Design secure cloud environments on major platforms.",
    duration: "10 Weeks",
    icon: <FaCloud className="text-blue-400" size={20} />,
  },
  {
    id: "network-defense",
    img: logoImg,
    title: "Network Defense Essentials",
    level: "Intermediate",
    description: "Defend systems from real-world attacks using proven strategies.",
    duration: "6 Weeks",
    icon: <FaShieldAlt className="text-blue-400" size={20} />,
  },
  {
    id: "web-security",
    img: logoImg,
    title: "Web Application Security",
    level: "Advanced",
    description: "Protect web apps with OWASP-based security practices.",
    duration: "8 Weeks",
    icon: <FaBolt className="text-blue-400" size={20} />,
  },
  {
    id: "devsecops",
    img: logoImg,
    title: "DevSecOps Pipeline",
    level: "Advanced",
    description: "Integrate security into CI/CD with modern DevSecOps.",
    duration: "9 Weeks",
    icon: <FaCloud className="text-blue-400" size={20} />,
  },
];

export default function AllCourses() {
  return (
    <section className="bg-[#0A0028] py-16 px-4 text-white min-h-screen">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        ALL <span className="text-pink-500">COURSES</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#12003a] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.03]"
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-contain p-4 bg-white"
              />
              <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {item.level}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2 text-blue-400 font-semibold text-sm">
                {item.icon}
                <h3 className="text-white text-lg font-bold">{item.title}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">{item.description}</p>
              <div className="text-pink-400 text-sm flex items-center gap-2 mb-4">
                <FaClock size={14} />
                {item.duration}
              </div>
              <Link
                to={`/course/${item.id}`}
                className="w-full block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl text-center transition duration-300"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
