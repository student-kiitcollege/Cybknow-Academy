import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.success ? "✅ Message sent successfully!" : "❌ Failed to send.");
    } catch (err) {
      console.error(err);
      setStatus("❌ Error sending message.");
    }

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 text-center mb-10">
        Get in Touch With Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
        <div className="space-y-8">
          <div className="flex items-start gap-4 text-gray-700">
            <FaPhoneAlt className="text-purple-600 text-2xl mt-1" />
            <span className="text-base sm:text-lg leading-relaxed">
              +91 8117842014 <br /> +91 9078558087
            </span>
          </div>

          <div className="flex items-start gap-4 text-gray-700">
            <FaEnvelope className="text-purple-600 text-2xl mt-1" />
            <span className="text-base sm:text-lg leading-relaxed">
              info@cybknow.com
            </span>
          </div>

          <div className="flex items-start gap-4 text-gray-700">
            <FaMapMarkerAlt className="text-purple-600 text-2xl mt-1" />
            <span className="text-base sm:text-lg leading-relaxed">
              Cybknow Academy, <br />
              Laxmi Sagar, Bhubaneswar, Odisha
            </span>
          </div>

          <div className="flex items-center gap-6 mt-6 text-purple-600 text-3xl sm:text-4xl justify-start">
            <a
              href="https://wa.me/918117842014"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="hover:text-purple-800 transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com/cybknow/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:text-purple-800 transition-colors duration-300" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="hover:text-purple-800 transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/cybknow/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="hover:text-purple-800 transition-colors duration-300" />
            </a>
          </div>
        </div>

        <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-base sm:text-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-base sm:text-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-base sm:text-lg resize-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-300 text-base sm:text-lg font-semibold cursor-pointer"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-gray-600 mt-2">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
}
