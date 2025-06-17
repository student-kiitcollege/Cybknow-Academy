import React, { useState } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#10042c] text-white px-4 py-12 md:px-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Contact Us – <span className="text-white">Cybknow Academy</span>
      </h1>
      <p className="text-gray-300 mb-10 text-lg">
        Get in touch with Cybknow Academy. We're here to answer your questions and provide support.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Send Message Form */}
        <div className="bg-[#1a0b3c] rounded-xl p-6 shadow-md">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <FaEnvelopeOpenText className="text-blue-400" />
            Send Us a Message
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Fill out the form below, and our team at Cybknow Academy will get back to you as soon as
            possible. We look forward to hearing from you!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
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
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#140836] border border-gray-600 focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
            <textarea
              name="message"
              placeholder="Your message here..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-[#140836] border border-gray-600 focus:ring-2 focus:ring-blue-500 text-white resize-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-300 cursor-pointer"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-center mt-2 text-gray-300">{status}</p>}
          </form>
        </div>

        <div className="bg-[#1a0b3c] rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-md">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            🤖 AI Chat Support
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            For instant answers to common questions, try our AI-powered chatbot from Cybknow
            Academy.
          </p>
          <div className="text-6xl text-blue-400 mb-6">💬</div>
          <p className="text-gray-400 text-sm mb-6">
            Our chatbot is currently under development. Please use the contact form for inquiries to
            Cybknow Academy.
          </p>
          <button
            disabled
            className="bg-gray-700 text-gray-300 py-2 px-6 rounded-md font-medium cursor-not-allowed"
          >
            Start Chat (Coming Soon)
          </button>
        </div>
      </div>
    </div>
  );
}
