import React from "react";
import { FaHandshake, FaUserShield, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  const cards = [
    {
      icon: <FaHandshake className="text-purple-400 text-5xl sm:text-6xl" />,
      title: "Community Support",
      desc: (
        <>
          Hands-on Ethical Hacking <br />
          Engage with a passionate community of learners and experts.
        </>
      ),
    },
    {
      icon: <FaUserShield className="text-purple-400 text-5xl sm:text-6xl" />,
      title: "Expert Mentorship",
      desc: (
        <>
          Gain personalized guidance <br />
          from cybersecurity professionals to level up your skills.
        </>
      ),
    },
    {
      icon: <FaCertificate className="text-purple-400 text-5xl sm:text-6xl" />,
      title: "ISO Certification",
      desc: (
        <>
          Recognized certifications <br />
          to validate your skills for global opportunities.
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#140033] to-[#1c005a] px-4 py-16 text-white">
      <motion.div
        className="max-w-6xl mx-auto space-y-14"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-300 text-center leading-tight"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Join the Cybersecurity Revolution – Connect and Empower Your Future!
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-gray-300 text-center max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Join Cybknow, where aspiring cybersecurity professionals gain expert mentorship, hands-on training,
          and a supportive community. Connect with us to enhance your skills, explore career opportunities,
          and lead in cybersecurity.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 sm:px-4 lg:px-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {cards.map(({ icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl text-center transition-all duration-300 text-gray-800"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{icon}</div>
              <h2 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-2">{title}</h2>
              <p className="text-gray-600 text-sm sm:text-base">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
