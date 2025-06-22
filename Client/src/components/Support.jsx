import React from "react";
import { FiMail } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";

export default function Support() {
  return (
    <div className="min-h-screen bg-[#0A0028] text-white px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          Support & Assistance – Cybknow Academy
        </h1>
        <p className="text-gray-300 mb-10 max-w-2xl">
          We're here to help. Reach out to Cybknow Academy through the contact
          form or chat with our support bot.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1C0F45] p-6 rounded-xl border border-[#2D1E60]">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
              <FiMail className="text-blue-400" />
              Contact Cybknow Academy
            </h2>
            <p className="text-gray-400 mb-6 text-sm">
              Have questions or need assistance? Fill out the form below, and our team at Cybknow Academy
              will get back to you as soon as possible.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 bg-[#0A0028] border border-[#2D1E60] rounded-md text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 bg-[#0A0028] border border-[#2D1E60] rounded-md text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Inquiry about a course"
                  className="w-full px-4 py-2 bg-[#0A0028] border border-[#2D1E60] rounded-md text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  placeholder="Your message here..."
                  rows="5"
                  className="w-full px-4 py-2 bg-[#0A0028] border border-[#2D1E60] rounded-md text-white placeholder-gray-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-[#1C0F45] p-6 rounded-xl border border-[#2D1E60] flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
                <BsChatDots className="text-blue-400" />
                Chat Support
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Get instant answers to common questions with our AI-powered chatbot from Cybknow Academy.
              </p>
              <div className="flex justify-center items-center mb-6">
                <BsChatDots className="text-blue-500 text-6xl" />
              </div>
              <p className="text-center text-sm text-gray-400 mb-6">
                Our chatbot is currently under development. Please use the contact form for inquiries to Cybknow Academy.
              </p>
            </div>
            <button
              disabled
              className="bg-[#2D1E60] text-gray-400 py-2 rounded-md cursor-not-allowed w-full"
            >
              Start Chat (Coming Soon)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
