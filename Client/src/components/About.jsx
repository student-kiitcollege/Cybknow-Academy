import React from "react";
import { FaHandshake, FaUserShield, FaCertificate } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto p-6 sm:p-8 lg:p-12 space-y-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-6 text-center px-4 sm:px-0">
        Join the Cybersecurity Revolution – Connect and Empower Your Future!
      </h1>

      <p className="text-base sm:text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 px-4 sm:px-0">
        Join Cybknow, where aspiring cybersecurity professionals gain expert mentorship, hands-on training,
        and a supportive community. Connect with us to enhance your skills, explore career opportunities,
        and lead in cybersecurity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 sm:px-0">
        {[{
          icon: <FaHandshake className="text-purple-600 text-5xl sm:text-6xl" />,
          title: "Community Support",
          desc: (
            <>
              Hands-on Ethical Hacking<br />
              Praesent ipsum voluptates adipisci mattis mollitia omnis autem, aliquid. Quis recusandae sapien.
            </>
          )
        }, {
          icon: <FaUserShield className="text-purple-600 text-5xl sm:text-6xl" />,
          title: "Expert Mentorship",
          desc: "Gain professional guidance from industry leaders to boost your career."
        }, {
          icon: <FaCertificate className="text-purple-600 text-5xl sm:text-6xl" />,
          title: "ISO Certification",
          desc: "Praesent ipsum voluptates adipisci mattis mollitia omnis autem, aliquid. Quis recusandae sapien."
        }].map(({ icon, title, desc }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {icon}
            <h2 className="text-xl sm:text-2xl font-semibold text-purple-700">{title}</h2>
            <p className="text-gray-600 text-center text-sm sm:text-base">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
