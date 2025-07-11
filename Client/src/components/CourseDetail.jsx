import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import cybersecurityModules from "../data/CybersecurityCourseModules";
import cyberCommandoModules from "../data/CybersecurityCommando";
import cybersecurityFundamentalsModules from "../data/CyberCommandoModules";

const courseData = {
  "ethical-hacking": {
    title: "Ethical Hacking Fundamentals",
    description: "Learn the basics of ethical hacking and penetration testing.",
    duration: "4 Months",
    level: "Beginner",
    instructor: "Industry Expert",
    image:
      "https://t4.ftcdn.net/jpg/12/61/69/15/360_F_1261691565_I3c94Fvpr3Ba4hCmpTQau5UUx77sTFR5.jpg",
    learn: [
      "Based on the core principles of Confidentiality, Integrity, and Availability (CIA triad)—the pillars of all information security.",
      "Emphasizes risk identification, assessment, and management as a foundation for all security decisions.",
      "Covers real-world threats (malware, phishing, ransomware, social engineering) and practical mitigation strategies.",
      "Stresses the importance of authentication, access control, encryption, and identity management for robust protection.",
      "Promotes user education, awareness, and regular training to empower individuals as the first line of defense."
    ],
  },
  "Cyber Commando Training": {
    title: "Cyber Commando Training",
    description:
      "Master advanced techniques for network and web application testing.",
    duration: "6 Months",
    level: "Beginners to professionals",
    instructor: "Security Professional",
    image:
      "https://img.freepik.com/premium-vector/purple-shield-with-keyhole-it_42077-16825.jpg",
    learn: [
      "Elite, government-backed training with national security mission and top institutional partners.",
      "70% practical, field-driven curriculum: digital forensics, malware analysis, red/blue team ops.",
      "Advanced specialization in critical infrastructure, IoT, cloud, and threat intelligence.",
      "Direct deployment into high-impact cyber defense roles for law enforcement and national agencies.",
      "Permanent, verifiable certification and unique Cyber Commando identity for each graduate."
    ],
  },
  "Zero to Mastery Cybersecurity": {
    title: "Zero to Mastery Cybersecurity",
    description: "Design secure cloud environments on AWS, Azure, and GCP.",
    duration: "4 Months",
    level: "Absolute beginners",
    instructor: "Cloud Security Expert",
    image:
      "https://www.securitymagazine.com/ext/resources/images/cyber-freepik-8.jpg?1625173880",
    learn: [
      "Systematic foundation building from comprehensive cybersecurity education.",
      "Hands-on practical elements from industry-focused training.",
      "Industry-standard methodologies and certification alignment.",
      "Progressive skill development from beginner to expert level.",
      "Real-world application focus with practical labs and projects",
    ],
  },
  "Cybersecurity Fundamentals": {
    title: "Cybersecurity Fundamentals",
    description:
      "Get a strong foundation in cybersecurity concepts, technologies, and practices.",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    instructor: "Certified Security Instructor",
    image:
      "https://img.freepik.com/free-vector/gradient-cyber-security-background_23-2149261125.jpg",
    learn: [
      "Master the CIA Triad and security principles.",
      "Understand risk management and security frameworks.",
      "Learn access control, cryptography, and incident response.",
      "Gain insights into secure software development and emerging threats.",
    ],
  },
};

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData[id];
  const [expandedModule, setExpandedModule] = useState(null);

  if (!course) {
    return (
      <div className="text-center text-white py-16 bg-[#0A0028]">
        <h1 className="text-2xl">Course not found</h1>
        <button
          className="mt-4 px-4 py-2 bg-pink-500 rounded-lg text-white cursor-pointer"
          onClick={() => navigate("/all-courses")}
        >
          Go Back
        </button>
      </div>
    );
  }

  const getModules = () => {
    if (course.title === "Zero to Mastery Cybersecurity") return cybersecurityModules;
    if (course.title === "Cyber Commando Training") return cyberCommandoModules;
    if (course.title === "Ethical Hacking Fundamentals") return cybersecurityFundamentalsModules;
    return null;
  };

  const modules = getModules();

  const handleEnroll = () => {
    navigate(`/register?course=${encodeURIComponent(course.title)}`);
  };

  return (
    <div className="min-h-screen bg-[#0A0028] text-white px-4 sm:px-6 lg:px-12 py-10 flex flex-col lg:flex-row gap-10">
      <div className="flex-1">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{course.title}</h1>
        <p className="text-gray-300 mb-6 text-sm sm:text-base max-w-3xl">{course.description}</p>

        <div className="w-full h-56 sm:h-72 md:h-80 lg:h-96 bg-gray-700 rounded-xl mb-8 overflow-hidden">
          <img src={course.image} alt={course.title} className="object-cover w-full h-full" />
        </div>

        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">What You'll Learn</h2>
          <ul className="space-y-3">
            {course.learn.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
              <FaCheckCircle className="text-green-400 mt-1 sm:mt-1.5 min-w-[18px]" size={20} />
              <span className="leading-snug">{point}</span>
            </li>
            ))}
          </ul>
        </section>

        {modules && (
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Course Modules (Detailed)</h2>
            <div className="space-y-3">
              {modules.map((mod, idx) => (
                <div
                  key={idx}
                  className="border border-pink-500 bg-[#120048] rounded-lg px-4 py-3 cursor-pointer"
                  onClick={() => setExpandedModule(expandedModule === idx ? null : idx)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <HiOutlineDocumentText size={24} className="text-pink-400 mt-1" />
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base mb-1">{mod.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-400">
                          Click to {expandedModule === idx ? "hide" : "view"} topics
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      {expandedModule === idx ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                    </div>
                  </div>
                  {expandedModule === idx && (
                    <ul className="mt-3 list-disc list-inside text-sm text-gray-300">
                      {mod.topics.map((topic, tIdx) => (
                        <li key={tIdx}>{topic}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Sidebar */}
      <div className="lg:w-[320px] w-full space-y-6">
        <div className="bg-[#120048] p-6 rounded-xl border border-pink-500">
          <h3 className="text-lg font-bold mb-4">Course Details</h3>
          <p className="text-sm text-gray-400 mb-2">
            <span className="font-semibold text-white">Category:</span>{" "}
            <span className="bg-pink-500 text-white px-2 py-0.5 rounded-full text-xs ml-2">
              {course.level}
            </span>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            <span className="font-semibold text-white">Duration:</span> {course.duration}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            <span className="font-semibold text-white">Instructor:</span> {course.instructor}
          </p>
          <button
            onClick={handleEnroll}
            className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 cursor-pointer hover:from-pink-700 text-white py-2 rounded-lg text-sm font-semibold"
          >
            Enroll Now
          </button>
        </div>

        <div className="bg-[#120048] p-6 rounded-xl border border-gray-600">
          <h3 className="text-white text-md font-bold mb-2">Have Questions?</h3>
          <p className="text-sm text-gray-400 mb-4">
            Our support team is ready to assist you with any inquiries.
          </p>
          <button
            onClick={() => navigate("/support")}
            className="w-full cursor-pointer bg-white text-black py-2 rounded-md text-sm font-semibold hover:bg-gray-300"
          >
            Contact Support
          </button>
        </div>

        <button
          onClick={() => navigate("/all-courses")}
          className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md text-sm"
        >
          ← Back to Courses
        </button>
      </div>
    </div>
  );
}
