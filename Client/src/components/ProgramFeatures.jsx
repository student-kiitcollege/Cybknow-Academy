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
    id: "penetration-testing",
    img: "https://img.freepik.com/premium-vector/purple-shield-with-keyhole-it_42077-16825.jpg",
    title: "Cyber Commando Training",
    level: "Advanced",
    description: "Intensive six-month program with hands-on cybersecurity, forensics, and defense training by Cybknow experts.",
    duration: "4 Months",
  },
  {
    id: "Zero to Mastery Cybersecurity",
    img: "https://www.securitymagazine.com/ext/resources/images/cyber-freepik-8.jpg?1625173880",
    title: "Zero to Mastery Cybersecurity",
    level: "Advanced",
    description: "Online course covering cybersecurity fundamentals, ethical hacking, incident response, and job-ready practical skills.",
    duration: "4 Months",
  },
];

const ProgramFeatures = () => {
  return (
    <section className="bg-[#0A0028] py-16 px-4 text-white overflow-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 leading-snug">
        EXPLORE OUR <span className="text-pink-500">POPULAR COURSES</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#12003a] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.03] flex flex-col"
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 sm:h-60 md:h-64 object-cover bg-white"
              />
              <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {item.level}
              </span>
            </div>
            <div className="p-5 sm:p-6 flex flex-col flex-grow">
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
                className="mt-auto block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl text-center transition duration-300"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/all-courses"
          className="bg-transparent border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-[#0A0028] transition duration-300"
        >
          View All Courses →
        </Link>
      </div>
    </section>
  );
};

export default ProgramFeatures;
