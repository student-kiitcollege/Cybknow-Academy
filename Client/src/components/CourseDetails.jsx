import React from "react";
import { useParams, Link } from "react-router-dom";

const courses = {
  "ethical-hacking": {
    title: "Ethical Hacking",
    description:
      "Learn how to identify vulnerabilities and secure systems ethically. This course covers penetration testing, network security, and more.",
    duration: "3 Months",
    price: "₹20,000",
  },
  "network-security": {
    title: "Network Security",
    description:
      "Understand how to protect computer networks from threats and attacks, including firewall configurations, VPNs, and intrusion detection.",
    duration: "2 Months",
    price: "₹15,000",
  },
  "cyber-security": {
    title: "Cyber Security",
    description:
      "Comprehensive cyber security course covering threat analysis, risk management, cryptography, and security protocols.",
    duration: "4 Months",
    price: "₹25,000",
  },
};

export default function CourseDetails() {
  const { courseId } = useParams();
  const course = courses[courseId];

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-6 text-center">
          Course Not Found
        </h1>
        <Link
          to="/"
          className="text-purple-600 hover:underline text-lg sm:text-xl"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 sm:p-10 max-w-xl sm:max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-6 text-center sm:text-left">
        {course.title}
      </h1>
      <p className="mb-6 text-base sm:text-lg leading-relaxed">{course.description}</p>
      <p className="mb-3 font-semibold text-lg sm:text-xl">
        Duration:{" "}
        <span className="font-normal text-base sm:text-lg">{course.duration}</span>
      </p>
      <p className="mb-8 font-semibold text-lg sm:text-xl">
        Price: <span className="font-normal text-base sm:text-lg">{course.price}</span>
      </p>
      <div className="text-center sm:text-left">
        <Link
          to="/"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 text-lg sm:text-xl transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
