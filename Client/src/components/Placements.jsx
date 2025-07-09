import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { FaBuilding, FaBriefcase } from "react-icons/fa";

const jobs = [
  {
    type: "Full-time",
    title: "Cybersecurity Analyst",
    company: "SecureNet Inc.",
    location: "New York, NY",
    posted: "Oct 20, 2023",
    description:
      "Monitor security alerts, conduct vulnerability assessments, and respond to incidents. Requires 2+ years of experience.",
    link: "https://www.securenet.com/careers/cybersecurity-analyst",
  },
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
    type: "Full-time",
    title: "Security Engineer",
    company: "CloudProtect Ltd.",
    location: "San Francisco, CA",
    posted: "Oct 15, 2023",
    description:
      "Design, implement, and manage security solutions for cloud infrastructure. Strong knowledge of AWS/Azure required.",
    link: "https://www.cloudprotect.com/jobs/security-engineer",
  },
  {
    type: "Full-time",
    title: "SOC Analyst (Tier 1)",
    company: "CyberDefenders Co.",
    location: "Austin, TX",
    posted: "Oct 22, 2023",
    description:
      "Join our Security Operations Center to detect, analyze, and respond to cybersecurity threats in real-time.",
    link: "https://www.cyberdefenders.com/careers/soc-analyst-tier-1",
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
    <div className="min-h-screen bg-[#0A0028] text-white px-4 sm:px-6 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Job & Internship Opportunities
        </h2>
        <p className="text-gray-300 mb-8 max-w-3xl text-base sm:text-lg">
          Find your next career move in the dynamic field of cybersecurity. Explore roles from leading companies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-[#1C0F45] border border-[#2D1E60] rounded-xl p-6 flex flex-col justify-between shadow-md hover:shadow-purple-500/30 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    job.type === "Internship" ? "bg-pink-600" : "bg-blue-600"
                  }`}
                >
                  {job.type}
                </span>
                <span className="text-xs sm:text-sm text-gray-400">
                  Posted: {job.posted}
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
                className="mt-auto bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 rounded-lg flex justify-center items-center gap-2 transition"
              >
                Apply Now <FiExternalLink size={16} />
              </button>
            </div>
          ))}
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
            <h2 className="text-2xl font-bold mb-6 text-center text-purple-800 cursor-pointer">
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
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Your Resume
                </label>
                <input
                  type="file"
                  accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
