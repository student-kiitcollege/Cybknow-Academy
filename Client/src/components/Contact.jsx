import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

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
  };

  return (
    <div className="min-h-screen bg-[#10042c] text-white px-4 py-12 md:px-12 lg:px-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
        Register for a <span className="text-blue-400">Free Demo Class</span>
      </h1>
      <p className="text-gray-300 mb-10 text-center max-w-2xl mx-auto">
        Choose your preferred slot and experience our teaching quality at Cybknow Academy. It's free!
      </p>

      <div className="max-w-2xl mx-auto bg-[#1a0b3c] rounded-xl p-8 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-[#140836] border border-gray-600 focus:ring-2 focus:ring-blue-500 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-[#140836] border border-gray-600 focus:ring-2 focus:ring-blue-500 text-white"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-[#140836] border border-gray-600 focus:ring-2 focus:ring-blue-500 text-white"
            required
          />
          <select
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-[#140836] border border-gray-600 focus:ring-2 focus:ring-blue-500 text-white"
            required
          >
            <option value="" disabled>Select Time Slot</option>
            <option value="10AM - 12PM">10AM - 12PM</option>
            <option value="2PM - 4PM">2PM - 4PM</option>
            <option value="6PM - 8PM">6PM - 8PM</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Register Now
          </button>
          {status && <p className="text-sm text-center mt-2 text-gray-300">{status}</p>}
        </form>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
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
              Thank you for registering for a free demo class! We'll contact you soon via email or phone.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
