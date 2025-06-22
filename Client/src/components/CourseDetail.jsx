import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

const placeholderImg = "https://via.placeholder.com/600x400"; // You can customize per course if needed

const courseData = {
  "ethical-hacking": {
    title: "Ethical Hacking Fundamentals",
    description:
      "Learn the basics of ethical hacking and penetration testing to identify vulnerabilities in systems.",
    duration: "8 Weeks",
    level: "Beginner",
    instructor: "Industry Expert",
    image: placeholderImg,
    modules: [
      "Introduction to Core Concepts",
      "Deep Dive into Key Technologies",
      "Advanced Methodologies & Tools",
      "Practical Application & Hands-on Labs",
      "Capstone Project & Real-world Simulations",
    ],
    learn: [
      "Gain a comprehensive understanding of ethical hacking fundamentals.",
      "Master practical skills through hands-on labs and real-world scenarios.",
      "Prepare for industry-recognized certifications (if applicable).",
      "Develop problem-solving abilities for complex cybersecurity challenges.",
    ],
  },
  "penetration-testing": {
    title: "Advanced Penetration Testing",
    description:
      "Dive deeper into advanced pentesting techniques involving buffer overflows, advanced exploitation, wireless attacks, and more.",
    duration: "12 Weeks",
    level: "Advanced",
    instructor: "Security Professional",
    image: placeholderImg,
    modules: [
      "Advanced Exploitation Techniques",
      "Buffer Overflow & Memory Attacks",
      "Wireless Penetration Testing",
      "Red Team Operations",
      "Capstone Lab Assessment",
    ],
    learn: [
      "Learn advanced attack vectors and exploit development.",
      "Conduct buffer overflow and memory-based exploits.",
      "Simulate real-world Red Team vs Blue Team scenarios.",
      "Practice with advanced tools and live target machines.",
    ],
  },
  "cloud-security": {
    title: "Cloud Security Architecture",
    description:
      "Learn to secure cloud-native infrastructure using AWS, Azure, and GCP best practices for architecture and governance.",
    duration: "10 Weeks",
    level: "Advanced",
    instructor: "Cloud Architect",
    image: placeholderImg,
    modules: [
      "Cloud Security Fundamentals",
      "IAM & Policy Management",
      "Encryption & Compliance",
      "Multi-Cloud Strategy & Governance",
      "Case Studies & Capstone",
    ],
    learn: [
      "Design secure cloud architectures across platforms.",
      "Implement IAM, encryption, and compliance policies.",
      "Audit cloud resources and prevent misconfigurations.",
      "Prepare for certifications like AWS Security or AZ-500.",
    ],
  },
  "network-defense": {
    title: "Network Defense Essentials",
    description:
      "Understand firewalls, IDS/IPS, endpoint protection, and how to deploy layered defense strategies effectively.",
    duration: "6 Weeks",
    level: "Intermediate",
    instructor: "Network Security Specialist",
    image: placeholderImg,
    modules: [
      "Firewall & Perimeter Security",
      "Intrusion Detection Systems",
      "Endpoint Defense Strategies",
      "Threat Intelligence & Monitoring",
      "Simulated Network Defense Scenarios",
    ],
    learn: [
      "Master network perimeter defense strategies.",
      "Configure and analyze IDS/IPS alerts.",
      "Protect endpoints from malware and intrusions.",
      "Respond to and simulate network threats.",
    ],
  },
  "web-security": {
    title: "Web Application Security",
    description:
      "Explore OWASP Top 10, CSRF, SQLi, and secure coding practices to build resilient web apps.",
    duration: "8 Weeks",
    level: "Advanced",
    instructor: "AppSec Engineer",
    image: placeholderImg,
    modules: [
      "OWASP Top 10 Deep Dive",
      "Secure Authentication & Sessions",
      "Injection & XSS Attacks",
      "Vulnerability Scanning & Pentesting",
      "Secure Coding Capstone Project",
    ],
    learn: [
      "Identify and fix OWASP Top 10 vulnerabilities.",
      "Build secure login systems and session flows.",
      "Perform dynamic analysis and scan web apps.",
      "Follow secure SDLC and best practices.",
    ],
  },
  "devsecops": {
    title: "DevSecOps Pipeline",
    description:
      "Automate security in CI/CD pipelines using SAST, DAST, dependency scanning, and container security.",
    duration: "9 Weeks",
    level: "Advanced",
    instructor: "DevSecOps Engineer",
    image: placeholderImg,
    modules: [
      "DevOps & Security Culture",
      "SAST & DAST Integration",
      "Container Security & Image Scanning",
      "Secrets Management",
      "Full Pipeline Automation Project",
    ],
    learn: [
      "Embed security into DevOps workflows.",
      "Integrate SAST/DAST in pipelines.",
      "Secure containers and cloud-native workloads.",
      "Manage secrets and compliance in CI/CD.",
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
    <div className="min-h-screen bg-[#0A0028] text-white px-6 py-12 flex flex-col lg:flex-row gap-8">
      {/* Left Section */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p className="text-gray-300 mb-6 max-w-2xl">{course.description}</p>

        <div className="w-full h-64 bg-gray-700 rounded-xl mb-8 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* What You'll Learn */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">What You'll Learn</h2>
          <ul className="space-y-3">
            {course.learn.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-300">
                <FaCheckCircle className="text-green-400 mt-1" size={18} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Course Modules */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Course Modules (Overview)</h2>
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
                  <h4 className="font-semibold text-white">{mod}</h4>
                  <p className="text-sm text-gray-400">
                    Detailed content for this module is being prepared.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Right Sidebar */}
      <div className="lg:w-[300px] w-full space-y-6">
        <div className="bg-[#120048] p-6 rounded-xl border border-pink-500">
          <h3 className="text-lg font-bold mb-4">Course Details</h3>
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-white">Category:</span>{" "}
            <span className="bg-pink-500 text-white px-2 py-0.5 rounded-full text-xs ml-2">
              {course.level}
            </span>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            <span className="font-semibold text-white">Duration:</span>{" "}
            {course.duration}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            <span className="font-semibold text-white">Level:</span>{" "}
            {course.level}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            <span className="font-semibold text-white">Instructor:</span>{" "}
            {course.instructor}
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
