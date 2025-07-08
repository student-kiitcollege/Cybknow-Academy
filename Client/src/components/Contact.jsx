import React, { useState } from "react";
import { FaBookOpen, FaUsers, FaBuilding } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function FreeDemoRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
  });
  const [status, setStatus] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some((val) => val === "");
    if (isEmpty) return setStatus("❌ Please fill all fields");

    setShowSuccessModal(true);
    setFormData({ name: "", email: "", phone: "", preferredTime: "" });
    setStatus("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f062e] via-[#130a3d] to-[#1c104b] text-white px-4 py-12 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-10 items-center justify-between">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center space-y-6 max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-purple-400 leading-tight">
          Empower Your Future in Cybersecurity
        </h1>
        <p className="text-gray-300 text-lg">
          Join our{" "}
          <span className="text-blue-400 font-semibold">Free Demo Class</span>{" "}
          and take the first step toward mastering cybersecurity with Cybknow Academy.
        </p>

        {/* Typewriter Highlights */}
        <ul className="space-y-4 text-lg font-medium text-white">
          <li className="flex items-center gap-3">
            <FaBookOpen className="text-blue-400 text-xl animate-pulse" />
            <span>
              <Typewriter
                words={["📘 30+ Courses Available"]}
                loop={0}
                cursor
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FaUsers className="text-green-400 text-xl animate-bounce" />
            <span className="typewriter-rtl">
              <Typewriter
                words={["👥 500+ Students Enrolled"]}
                loop={0}
                cursor
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={2500}
              />
            </span>
          </li>
          <li className="flex items-center gap-3">
            <FaBuilding className="text-yellow-400 text-xl animate-pulse" />
            <span>
              <Typewriter
                words={["🏢 Tie-up with 50+ Companies"]}
                loop={0}
                cursor
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={3000}
              />
            </span>
          </li>
        </ul>

        {/* Testimonials Section */}
        <div className="mt-8 space-y-6">
          <h3 className="text-2xl font-semibold text-white">What Our Students Say</h3>
          <div className="bg-[#29195d] p-4 rounded-xl shadow-lg">
            <p className="text-gray-300 italic">“This academy helped me land a cybersecurity role in just 3 months!”</p>
            <div className="mt-2 flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt="Student"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-white font-medium">Anjali Sharma</span>
            </div>
          </div>
          <div className="bg-[#29195d] p-4 rounded-xl shadow-lg">
            <p className="text-gray-300 italic">“Great instructors and real-world projects. Highly recommend Cybknow!”</p>
            <div className="mt-2 flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/40?img=2"
                alt="Student"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-white font-medium">Rahul Mehta</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 bg-[#1e1243] rounded-2xl p-10 shadow-lg max-w-xl w-full mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
          Register for Free Demo
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg bg-[#29195d] border border-gray-600 focus:ring-2 focus:ring-blue-500 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg bg-[#29195d] border border-gray-600 focus:ring-2 focus:ring-blue-500 text-white"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg bg-[#29195d] border border-gray-600 focus:ring-2 focus:ring-blue-500 text-white"
            required
          />
          <select
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg bg-[#29195d] border border-gray-600 focus:ring-2 focus:ring-blue-500 text-white"
            required
          >
            <option value="" disabled>
              Select Time Slot
            </option>
            <option value="10AM - 12PM">10AM - 12PM</option>
            <option value="2PM - 4PM">2PM - 4PM</option>
            <option value="6PM - 8PM">6PM - 8PM</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Register Now
          </button>
          {status && (
            <p className="text-sm text-center mt-2 text-red-400">{status}</p>
          )}
        </form>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-2xl p-8 w-full max-w-md shadow-2xl relative animate-fadeIn">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-3 right-4 text-black text-xl font-bold hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-purple-700 text-center">
              🎉 Registration Successful!
            </h2>
            <p className="text-gray-700 text-center">
              Thank you for registering! We’ll contact you soon via email or phone.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styling */}
      <style>{`
        .typewriter-rtl {
          direction: rtl;
          unicode-bidi: plaintext;
          text-align: left;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
