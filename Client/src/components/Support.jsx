import React, { useState, useEffect, useRef } from "react";
import { FiMail } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some((val) => val.trim() === "");
    if (isEmpty) return setStatus("❌ Please fill in all fields.");

    const serviceId = "service_iy2bkhw";
    const templateId = "template_a0ku10g";
    const userId = "ZCjOWoWw-W77SDbmd";

    const templateParams = {
      from_name: formData.name,
      to_name: "Cybknow Team",
      to_email: "jenasourav2001@gmail.com",
      message: `Support Inquiry:\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage:\n${formData.message}`,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("❌ Failed to send. Please try again.");
    }
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!currentChat.trim()) return;

    const userMessage = { from: "user", text: currentChat };
    setChatMessages((prev) => [...prev, userMessage]);
    setCurrentChat("");
    setIsTyping(true);

    setTimeout(() => {
      const botReply = {
        from: "bot",
        text: "Thanks for reaching out! We'll get back to you soon.",
      };
      setChatMessages((prev) => [...prev, botReply]);
      speakText(botReply.text);
      setIsTyping(false);
    }, 1500); // 1.5s delay to simulate typing
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatMessages, isTyping]);

  return (
    <div className="min-h-screen bg-[#0A0028] text-white px-4 py-16 relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Support & Assistance – Cybknow Academy
        </h1>
        <p className="text-gray-300 mb-10 max-w-2xl text-sm sm:text-base">
          We're here to help. Reach out to Cybknow Academy through the contact
          form or chat with our support bot.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-[#1C0F45] p-6 sm:p-8 rounded-xl border border-[#2D1E60]">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-3">
              <FiMail className="text-blue-400" />
              Contact Cybknow Academy
            </h2>
            <p className="text-gray-400 mb-6 text-sm">
              Have questions or need assistance? Fill out the form below, and our team will get back to you as soon as possible.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 bg-[#0A0028] border border-[#2D1E60] rounded-md text-white placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full px-4 py-2 bg-[#0A0028] border border-[#2D1E60] rounded-md text-white placeholder-gray-400"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-2 bg-[#0A0028] border border-[#2D1E60] rounded-md text-white placeholder-gray-400"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="5"
                className="w-full px-4 py-2 bg-[#0A0028] border border-[#2D1E60] rounded-md text-white placeholder-gray-400"
              ></textarea>
              <button
                type="submit"
                className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              >
                Send Message
              </button>
              {status && (
                <p
                  className={`mt-2 text-center text-sm ${
                    status.startsWith("✅") ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Chat Section */}
          <div className="bg-[#1C0F45] p-6 sm:p-8 rounded-xl border border-[#2D1E60] flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2 mb-3">
                <BsChatDots className="text-blue-400" />
                Chat Support
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Get instant answers to common questions with our AI-powered chatbot from Cybknow Academy.
              </p>
              <div className="flex justify-center items-center mb-6">
                <BsChatDots className="text-blue-500 text-6xl sm:text-7xl" />
              </div>
              <p className="text-center text-sm text-gray-400 mb-6">
                Click below to start chatting with our assistant.
              </p>
            </div>
            <button
              onClick={() => setShowChat(true)}
              className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white py-2 rounded-md w-full"
            >
              Start Chat
            </button>
          </div>
        </div>
      </div>

      {/* Chat Popup with Animation */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-[#1C0F45] border border-[#2D1E60] w-[90%] max-w-[360px] h-[480px] rounded-xl shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-[#2D1E60] text-blue-400 font-bold text-base">
              <span>Cybknow Support Bot</span>
              <button
                onClick={() => setShowChat(false)}
                className="text-xl text-red-400 hover:text-red-600"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div
              ref={chatRef}
              className="flex-1 px-4 py-3 overflow-y-auto text-sm space-y-3"
            >
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`${
                    msg.from === "user"
                      ? "text-right text-white"
                      : "text-left text-gray-300"
                  }`}
                >
                  <div className="inline-block bg-[#2D1E60] px-4 py-2 rounded-lg max-w-[85%] break-words">
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="text-left text-gray-300">
                  <div className="inline-block bg-[#2D1E60] px-4 py-2 rounded-lg animate-pulse">
                    Typing...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleChatSubmit} className="flex border-t border-[#2D1E60]">
              <input
                type="text"
                value={currentChat}
                onChange={(e) => setCurrentChat(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 bg-[#0A0028] text-white outline-none text-sm"
              />
              <button
                type="submit"
                className="px-4 text-blue-400 hover:text-blue-500 text-xl"
              >
                ➤
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
