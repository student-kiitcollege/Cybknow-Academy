import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { FaBuilding, FaBriefcase } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
  {
    type: "Internship",
    title: "Penetration Tester Intern",
    company: "CodeGuard LLC.",
    location: "Remote",
    posted: "Oct 18, 2023",
    description:
      "Assist senior testers in conducting penetration tests on web applications and networks. Ideal for students or recent graduates.",
    link: "https://www.codeguard.io/internships/pen-test",
  },
  {
    type: "Internship",
    title: "SOC Intern (Security Operations)",
    company: "CyberSafe AI",
    location: "Bangalore, India",
    posted: "Oct 19, 2023",
    description:
      "Gain hands-on experience in monitoring and analyzing security events. Learn to respond to real-time threats using SIEM tools.",
    link: "https://cybersafe.ai/internships/soc",
  },
  {
    type: "Internship",
    title: "Cybersecurity Research Intern",
    company: "RedShield Labs",
    location: "Pune, India",
    posted: "Oct 16, 2023",
    description:
      "Support ongoing research in vulnerability discovery, zero-day analysis, and malware trends.",
    link: "https://redshieldlabs.com/careers/research-intern",
  },
  {
    type: "Internship",
    title: "Threat Intelligence Intern",
    company: "ThreatTrack",
    location: "Remote",
    posted: "Oct 15, 2023",
    description:
      "Assist the TI team in collecting and analyzing cyber threat data and creating intelligence reports.",
    link: "https://threattrack.com/interns/ti",
  },
];

export default function Placements() {
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0028] to-[#1c0742] text-white px-4 sm:px-6 lg:px-20 py-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
          Cybersecurity Internships
        </h2>
        <p className="text-gray-300 mb-8 max-w-3xl text-base sm:text-lg">
          Kickstart your cybersecurity career with these exciting internship opportunities from top organizations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1C0F45] border border-purple-700/40 rounded-xl p-6 flex flex-col justify-between shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-600">
                  {job.type}
                </span>
                <span className="text-xs text-gray-400">
                  {job.posted}
                </span>
              </div>

              <div className="mb-4 space-y-1">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <FaBriefcase className="text-blue-400" />
                  {job.title}
                </h3>
                <p className="text-sm text-gray-300 flex items-center gap-2">
                  <FaBuilding className="text-gray-400" />
                  {job.company}
                </p>
                <p className="text-sm text-gray-300 flex items-center gap-2">
                  <MdLocationOn className="text-gray-400" />
                  {job.location}
                </p>
              </div>

              <p className="text-sm text-gray-400 mb-4">
                {job.description}
              </p>

              <button
                onClick={() => handleApply(job)}
                className="mt-auto cursor-pointer bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium py-2 px-4 rounded-lg flex justify-center items-center gap-2 transition hover:scale-[1.03]"
              >
                Apply Now <FiExternalLink size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/70"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white text-black rounded-2xl p-8 w-full max-w-lg shadow-2xl relative"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-4 text-black text-xl font-bold hover:text-red-500"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">
                Apply for {selectedJob?.title}
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 file:bg-purple-50 file:text-purple-700 file:font-semibold file:px-4 file:py-2 file:rounded-md file:border-0 hover:file:bg-purple-100"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition duration-300"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
