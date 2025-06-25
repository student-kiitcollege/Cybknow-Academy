import React from "react";
import { FaHandshake, FaUserShield, FaCertificate } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-800 px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700 text-center leading-tight">
          Join the Cybersecurity Revolution – Connect and Empower Your Future!
        </h1>

        <p className="text-base sm:text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          Join Cybknow, where aspiring cybersecurity professionals gain expert mentorship, hands-on training,
          and a supportive community. Connect with us to enhance your skills, explore career opportunities,
          and lead in cybersecurity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 sm:px-4 lg:px-0">
          {[
            {
              icon: <FaHandshake className="text-purple-600 text-5xl sm:text-6xl" />,
              title: "Community Support",
              desc: (
                <>
                  Hands-on Ethical Hacking<br />
                  Engage with a passionate community of learners and experts.
                </>
              ),
            },
            {
              icon: <FaUserShield className="text-purple-600 text-5xl sm:text-6xl" />,
              title: "Expert Mentorship",
              desc: (
                <>
                  Gain personalized guidance<br />
                  from cybersecurity professionals to level up your skills.
                </>
              ),
            },
            {
              icon: <FaCertificate className="text-purple-600 text-5xl sm:text-6xl" />,
              title: "ISO Certification",
              desc: (
                <>
                  Recognized certifications<br />
                  to validate your skills for global opportunities.
                </>
              ),
            },
          ].map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl text-center transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{icon}</div>
              <h2 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-2">{title}</h2>
              <p className="text-gray-600 text-sm sm:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
