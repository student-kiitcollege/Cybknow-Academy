import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

const courseData = {
  "ethical-hacking": {
    title: "Ethical Hacking Fundamentals",
    description: "Learn the basics of ethical hacking and penetration testing.",
    duration: "4 Months",
    level: "Beginner",
    instructor: "Industry Expert",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20241017/pngtree-a-hacker-in-a-hoodie-sitting-at-a-laptop-with-hologram-image_16403770.jpg",
    modules: [
      "Introduction to Core Concepts",
      "Deep Dive into Key Technologies",
      "Advanced Methodologies & Tools",
      "Hands-on Labs",
      "Capstone Project",
    ],
    learn: [
      "Understand ethical hacking fundamentals.",
      "Master hands-on labs.",
      "Prepare for certifications.",
      "Develop real-world problem solving skills.",
    ],
  },
  "penetration-testing": {
    title: "Advanced Penetration Testing",
    description: "Master advanced techniques for network and web application testing.",
    duration: "12 Weeks",
    level: "Advanced",
    instructor: "Security Professional",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReaapj756GROMBuSMq871BVBiSw3pyVWYCqJRdSWOHIB3iFVkyPN6UfWgmI6-xpZQerdc&usqp=CAU",
    modules: [
      "Advanced Exploitation",
      "Buffer Overflows",
      "Wireless Testing",
      "Red Team Ops",
      "Capstone Assessment",
    ],
    learn: [
      "Exploit buffer overflows.",
      "Use Red Team strategies.",
      "Develop advanced tools.",
      "Simulate enterprise attacks.",
    ],
  },
  "cloud-security": {
    title: "Cloud Security Architecture",
    description: "Design secure cloud environments on AWS, Azure, and GCP.",
    duration: "10 Weeks",
    level: "Advanced",
    instructor: "Cloud Security Expert",
    image: "https://www.securitymagazine.com/ext/resources/images/cyber-freepik-8.jpg?1625173880",
    modules: [
      "Cloud Basics",
      "IAM & Access Control",
      "Network Security",
      "Monitoring & Compliance",
      "Cloud Incident Response",
    ],
    learn: [
      "Design secure cloud solutions.",
      "Understand IAM and compliance.",
      "Respond to cloud incidents.",
      "Apply DevSecOps practices.",
    ],
  },
  "network-security": {
    title: "Network Security Essentials",
    description: "Learn how to secure, monitor, and defend network infrastructures.",
    duration: "6 Weeks",
    level: "Intermediate",
    instructor: "Network Security Analyst",
    image: "https://cdn.pixabay.com/photo/2016/11/29/03/36/network-1869825_1280.jpg",
    modules: [
      "Network Fundamentals",
      "Firewalls & VPNs",
      "IDS & IPS Systems",
      "Network Hardening",
      "Threat Detection",
    ],
    learn: [
      "Secure network layers.",
      "Configure firewalls and IDS.",
      "Detect & analyze threats.",
      "Monitor live traffic.",
    ],
  },
  "cyberlaw-ethics": {
    title: "Cyber Law & Ethics",
    description: "Understand the legal and ethical considerations in cybersecurity.",
    duration: "4 Weeks",
    level: "Beginner",
    instructor: "Cyber Law Expert",
    image: "https://img.freepik.com/premium-photo/futuristic-digital-padlock-symbol-cyber-security-data-protection-concept-generative-ai_31965-113845.jpg",
    modules: [
      "Cyber Law Basics",
      "Digital Privacy",
      "Intellectual Property",
      "Cybercrime Case Studies",
      "Ethical Frameworks",
    ],
    learn: [
      "Know digital rights and ethics.",
      "Understand laws against cybercrime.",
      "Handle legal compliance issues.",
      "Evaluate cybercrime cases.",
    ],
  },
  "incident-response": {
    title: "Incident Response & Forensics",
    description: "Learn how to handle, respond, and investigate cyber incidents.",
    duration: "8 Weeks",
    level: "Intermediate",
    instructor: "Forensic Analyst",
    image: "https://img.freepik.com/free-photo/computer-security-system-icons-concept_53876-122654.jpg",
    modules: [
      "Incident Detection",
      "Response Planning",
      "Forensic Data Collection",
      "Log Analysis",
      "Reporting & Recovery",
    ],
    learn: [
      "Build response strategies.",
      "Collect and analyze evidence.",
      "Perform forensic investigations.",
      "Recover from cyber incidents.",
    ],
  },
};

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData[id];

  if (!course) {
    return (
      <div className="text-center text-white py-16 bg-[#0A0028]">
        <h1 className="text-2xl">Course not found</h1>
        <button
          className="mt-4 px-4 py-2 bg-pink-500 rounded-lg text-white"
          onClick={() => navigate("/all-courses")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0028] text-white px-4 sm:px-6 lg:px-12 py-10 flex flex-col lg:flex-row gap-10">
      <div className="flex-1">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{course.title}</h1>
        <p className="text-gray-300 mb-6 text-sm sm:text-base max-w-3xl">{course.description}</p>

        <div className="w-full h-56 sm:h-72 md:h-80 lg:h-96 bg-gray-700 rounded-xl mb-8 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="object-cover w-full h-full"
          />
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

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Course Modules (Overview)</h2>
          <div className="space-y-3">
            {course.modules.map((mod, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 border border-pink-500 bg-[#120048] rounded-lg px-4 py-3"
              >
                <div className="pt-1">
                  <HiOutlineDocumentText size={24} className="text-pink-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base">{mod}</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Detailed content for this module is being prepared.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

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
          <button className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg text-sm font-semibold">
            Enroll Now
          </button>
        </div>

        <div className="bg-[#120048] p-6 rounded-xl border border-gray-600">
          <h3 className="text-white text-md font-bold mb-2">Have Questions?</h3>
          <p className="text-sm text-gray-400 mb-4">
            Our support team is ready to assist you with any inquiries.
          </p>
          <button className="w-full bg-white text-black py-2 rounded-md text-sm font-semibold hover:bg-gray-200">
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
