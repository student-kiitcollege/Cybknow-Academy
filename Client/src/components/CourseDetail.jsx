import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaClock } from "react-icons/fa";

const logoImg = "https://cybknow.com/wp-content/uploads/2025/02/logo.png";

const courseData = {
  "ethical-hacking": {
    title: "Ethical Hacking Fundamentals",
    description:
      "This course introduces students to the fundamental concepts of ethical hacking including footprinting, scanning, vulnerability analysis, and exploitation.",
    duration: "8 Weeks",
    level: "Beginner",
    image: logoImg,
  },
  "penetration-testing": {
    title: "Advanced Penetration Testing",
    description:
      "Dive deeper into advanced pentesting techniques involving buffer overflows, advanced exploitation, wireless attacks, and more.",
    duration: "12 Weeks",
    level: "Advanced",
    image: logoImg,
  },
  "cloud-security": {
    title: "Cloud Security Architecture",
    description:
      "Learn to secure cloud-native infrastructure using AWS, Azure, and GCP best practices for architecture and governance.",
    duration: "10 Weeks",
    level: "Advanced",
    image: logoImg,
  },
  "network-defense": {
    title: "Network Defense Essentials",
    description:
      "Understand firewalls, IDS/IPS, endpoint protection, and how to deploy layered defense strategies effectively.",
    duration: "6 Weeks",
    level: "Intermediate",
    image: logoImg,
  },
  "web-security": {
    title: "Web Application Security",
    description:
      "Explore OWASP Top 10, CSRF, SQLi, and secure coding practices to build resilient web apps.",
    duration: "8 Weeks",
    level: "Advanced",
    image: logoImg,
  },
  "devsecops": {
    title: "DevSecOps Pipeline",
    description:
      "Automate security in CI/CD pipelines using SAST, DAST, dependency scanning, and container security.",
    duration: "9 Weeks",
    level: "Advanced",
    image: logoImg,
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
    <div className="min-h-screen bg-[#0A0028] text-white px-4 py-16 flex flex-col items-center">
      <img
        src={course.image}
        alt={course.title}
        className="w-40 h-40 object-contain mb-6 bg-white rounded-lg p-4"
      />
      <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
      <span className="text-pink-400 text-sm font-semibold mb-4">
        {course.level}
      </span>
      <p className="max-w-2xl text-center text-gray-300 mb-6">
        {course.description}
      </p>
      <div className="flex items-center gap-2 text-pink-400 text-sm mb-8">
        <FaClock size={14} />
        {course.duration}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-lg transition duration-300"
        onClick={() => navigate("/all-courses")}
      >
        ← Back to Courses
      </button>
    </div>
  );
}
