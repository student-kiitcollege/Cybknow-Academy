import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaShieldAlt, FaBolt, FaCloud } from "react-icons/fa";

const features = [
  {
    id: "ethical-hacking",
    img: "https://t4.ftcdn.net/jpg/12/61/69/15/360_F_1261691565_I3c94Fvpr3Ba4hCmpTQau5UUx77sTFR5.jpg",
    title: "Ethical Hacking Fundamentals",
    level: "Beginner",
    description: "Learn the basics of ethical hacking and penetration testing.",
    duration: "4 Months",
  },
  {
    id: "Cyber Commando Training",
    img: "https://img.freepik.com/premium-vector/purple-shield-with-keyhole-it_42077-16825.jpg",
    title: "Cyber Commando Training",
    level: "Beginners to professionals",
    description: "Master advanced techniques for network and web application testing.",
    duration: "6 Months",
  },
  {
    id: "Zero to Mastery Cybersecurity",
    img: "https://www.securitymagazine.com/ext/resources/images/cyber-freepik-8.jpg?1625173880",
    title: "Zero to Mastery Cybersecurity",
    level: "Absolute beginners",
    description: "Design secure cloud environments on major platforms.",
    duration: "4 Months",
  },
  {
    id: "network-defense",
    img: "https://img.freepik.com/premium-vector/closed-padlock-digital-background-cyber-security_42077-8106.jpg",
    title: "Network Defense Essentials",
    level: "Intermediate",
    description: "Defend systems from real-world attacks using proven strategies.",
    duration: "6 Weeks",
  },
  {
    id: "web-security",
    img: "https://thumbs.dreamstime.com/b/digital-security-shield-padlock-icon-purple-cyber-background-using-black-violet-color-palette-technology-344891905.jpg",
    title: "Web Application Security",
    level: "Advanced",
    description: "Protect web apps with OWASP-based security practices.",
    duration: "8 Weeks",
  },
  {
    id: "devsecops",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*BQmPOmLELwxYfFKW8rksQA.jpeg",
    title: "DevSecOps Pipeline",
    level: "Advanced",
    description: "Integrate security into CI/CD with modern DevSecOps.",
    duration: "9 Weeks",
  },
];

export default function AllCourses() {
  return (
    <section className="bg-[#0A0028] py-12 sm:py-16 px-4 text-white min-h-screen">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
        ALL <span className="text-pink-500">COURSES</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#12003a] min-h-[460px] flex flex-col justify-between rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.03]"
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {item.level}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
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
                className="mt-auto w-full block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl text-center transition duration-300"
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
