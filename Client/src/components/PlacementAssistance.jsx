import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import cyber from "../assets/Cyber.png";
import profilePic from "../assets/profile.jpg";

const placements = [
  {
    name: "SURAJ KUMAR SAHOO",
    company: "TCS PRIME",
    location: "Chennai",
    src: profilePic,
  },
  {
    name: "ANANYA SAHU",
    company: "Infosys",
    location: "Bangalore",
    src: "https://cdn-icons-png.flaticon.com/512/1999/1999625.png",
  },
  {
    name: "RAKESH NAYAK",
    company: "Wipro",
    location: "Hyderabad",
    src: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
];

const PlacementAssistance = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % placements.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setShowConfetti(true);
    const timeout = setTimeout(() => setShowConfetti(false), 2500);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const current = placements[activeIndex];

  return (
    <>
      {/* 🔹 Section 1: Kickstart Cyber Career */}
      <section className="bg-[#0A0028] text-white py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              KICKSTART YOUR <span className="text-blue-500">CYBER CAREER</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              At Cybknow Academy, we're committed to your success beyond the classroom.
              Our comprehensive placement assistance program connects you with top companies,
              offering internships and full-time positions in the cybersecurity industry.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Resume Building & Interview Prep",
                "Access to Exclusive Job Boards",
                "Networking Opportunities",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-pink-400 font-medium">
                  <FaShieldAlt className="text-pink-400" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to="/placements"
              className="inline-block bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition duration-300 text-sm sm:text-base"
            >
              Discover Opportunities →
            </Link>
          </div>

          <div className="flex-1 w-full">
            <div className="relative w-full cursor-pointer h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={cyber}
                alt="Cybersecurity Banner"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Section 2: Our Success Stories Carousel */}
      {/* 🔹 Section 2: Our Success Stories */}
<section className="bg-gradient-to-b from-[#0A0028] to-[#12043A] text-white py-20 px-4 sm:px-6 lg:px-20 relative overflow-hidden">
  {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    <h3 className="text-3xl sm:text-4xl font-bold mb-3 relative inline-block">
      <span className="relative z-10">Our Success Stories</span>
      <span className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500 rounded-full w-40 mx-auto"></span>
    </h3>
    <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
      Real students. Real jobs. Real impact. Our learners are turning dreams into reality through Cybknow’s hands-on training and placement guidance.
    </p>
  </motion.div>

  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center bg-white text-black rounded-2xl shadow-2xl p-8 sm:p-12 transition-all duration-500">
    <motion.img
      key={current.name}
      src={current.src}
      alt={current.name}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover shadow-md mb-6 md:mb-0 md:mr-10 border-4 border-purple-500"
    />
    <div className="text-center md:text-left flex-1">
      <p className="text-lg sm:text-xl text-gray-600 font-light">🎉 Congratulations</p>
      <h1 className="text-5xl sm:text-6xl font-extrabold text-purple-600 tracking-widest drop-shadow mt-1">
        PLACED
      </h1>
      <h2 className="mt-4 text-2xl sm:text-3xl font-semibold">{current.name}</h2>
      <p className="text-sm sm:text-base text-gray-600 mt-1">
        {current.company} – {current.location}
      </p>
    </div>
  </div>

  {/* Dots Navigation */}
  <div className="flex justify-center mt-10 gap-3">
    {placements.map((_, i) => (
      <motion.button
        key={i}
        onClick={() => setActiveIndex(i)}
        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
          i === activeIndex
            ? "bg-pink-500 border-pink-500 scale-110"
            : "bg-white border-gray-400"
        }`}
        whileTap={{ scale: 0.9 }}
      />
    ))}
  </div>
</section>

    </>
  );
};

export default PlacementAssistance;
