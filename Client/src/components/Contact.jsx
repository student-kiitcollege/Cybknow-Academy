import React from "react";
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
              <FaWhatsapp className="hover:text-purple-800 cursor-pointer transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com/cybknow/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:text-purple-800 cursor-pointer transition-colors duration-300" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="hover:text-purple-800 cursor-pointer transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/cybknow/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="hover:text-purple-800 cursor-pointer transition-colors duration-300" />
            </a>
          </div>
        </div>

        <form className="space-y-5 sm:space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-base sm:text-lg"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-base sm:text-lg"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-base sm:text-lg resize-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-300 text-base sm:text-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
