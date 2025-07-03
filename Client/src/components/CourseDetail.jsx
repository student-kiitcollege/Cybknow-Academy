import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import cybersecurityModules from "../data/CybersecurityCourseModules";

const courseData = {
  "ethical-hacking": {
    title: "Ethical Hacking Fundamentals",
    description: "Learn the basics of ethical hacking and penetration testing.",
    duration: "4 Months",
    level: "Beginner",
    instructor: "Industry Expert",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20241017/pngtree-a-hacker-in-a-hoodie-sitting-at-a-laptop-with-hologram-image_16403770.jpg",
    learn: [
      "Understand ethical hacking fundamentals.",
      "Master hands-on labs.",
      "Prepare for certifications.",
      "Develop real-world problem solving skills.",
    ],
  },
  "penetration-testing": {
    title: "Cyber Commando Training",
    description: "Master advanced techniques for network and web application testing.",
    duration: "6 Months",
    level: "Beginners to professionals",
    instructor: "Security Professional",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReaapj756GROMBuSMq871BVBiSw3pyVWYCqJRdSWOHIB3iFVkyPN6UfWgmI6-xpZQerdc&usqp=CAU",
    learn: [
      "Exploit buffer overflows.",
      "Use Red Team strategies.",
      "Develop advanced tools.",
      "Simulate enterprise attacks.",
    ],
  },
  "Zero to Mastery Cybersecurity": {
    title: "Zero to Mastery Cybersecurity",
    description: "Design secure cloud environments on AWS, Azure, and GCP.",
    duration: "4 Months",
    level: "Absolute beginners",
    instructor: "Cloud Security Expert",
    image: "https://www.securitymagazine.com/ext/resources/images/cyber-freepik-8.jpg?1625173880",
    learn: [
      "Systematic foundation building from comprehensive cybersecurity education.",
      "Hands-on practical elements from industry-focused training.",
      "Industry-standard methodologies and certification alignment.",
      "Progressive skill development from beginner to expert level.",
      "Real-world application focus with practical labs and projects"
    ],
  },
};

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData[id];
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(course?.title || "");
  const [expandedModule, setExpandedModule] = useState(null);
  const courseTitles = Object.values(courseData).map((c) => c.title);

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

  return (
    <>
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
                  <FaCheckCircle className="text-green-400 mt-1" size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {course.title === "Zero to Mastery Cybersecurity" && (
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">Course Modules (Detailed)</h2>
              <div className="space-y-3">
                {cybersecurityModules.map((mod, idx) => (
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
                          <p className="text-xs sm:text-sm text-gray-400">Click to {expandedModule === idx ? "hide" : "view"} topics</p>
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
              <span className="font-semibold text-white">Level:</span> {course.level}
            </p>
            <p className="text-sm text-gray-400 mt-2">
              <span className="font-semibold text-white">Instructor:</span> {course.instructor}
            </p>
            <button
              onClick={() => setShowForm(true)}
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

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/60">
          <div className="bg-white text-black rounded-2xl p-8 w-full max-w-lg shadow-2xl relative animate-fadeIn">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-black text-xl font-bold hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">
              Register for {course.title}
            </h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm">
                <option value="">Latest Qualification</option>
                <option value="10th">10th</option>
                <option value="12th">12th</option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
              </select>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              >
                <option value="">Choose Course</option>
                {courseTitles.map((title, idx) => (
                  <option key={idx} value={title}>{title}</option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition duration-300"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
