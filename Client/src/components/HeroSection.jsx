import React, { useState } from "react";

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    qualification: "",
    program: "",
  });
  const [loading, setLoading] = useState(false);

  const handleRegisterClick = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      qualification: "",
      program: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some((val) => val === "");
    if (isEmpty) return alert("Please fill all fields");

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      data.success
        ? (alert("Registration successful! Check your email."), handleCloseModal())
        : alert("Registration failed. Please try again.");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-[#0A0028] text-white px-4 sm:px-6 lg:px-12 py-16 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full text-center space-y-4 animate-fadeSlideIn">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Unlock Your Potential in{" "}
            <span className="text-blue-500">Cybersecurity</span> with Cybknow Academy
          </h1>
          <p className="text-lg sm:text-xl text-purple-300 font-medium">
            Join Cybknow Academy for expert-led courses, hands-on training, and
            career-accelerating placement support in the ever-evolving world of cyber defense.
          </p>
          <button
            onClick={handleRegisterClick}
            className="mt-6 bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 px-8 py-3 rounded-lg text-white font-semibold shadow-lg hover:shadow-purple-400/50 transition-transform transform hover:scale-105"
          >
            Explore Our Courses →
          </button>
        </div>

        <div className="w-full max-w-6xl mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6">
          {[
            {
              icon: "📘",
              title: "100+ Courses",
              desc: "Cutting-edge curriculum",
            },
            {
              icon: "👨‍🏫",
              title: "Expert Instructors",
              desc: "Industry professionals",
            },
            {
              icon: "💼",
              title: "90% Placement Rate",
              desc: "Career success focused",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-[#12003a] rounded-2xl p-6 shadow-md border border-purple-900/30 text-left hover:shadow-purple-600/30 transition-all"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-white">{card.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-xl animate-fadeSlideIn relative">
            <button
              onClick={handleCloseModal}
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-500 hover:text-purple-600 transition"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              Register Now
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "phone", "password"].map((field) => (
                <input
                  key={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  type={field === "password" ? "password" : "text"}
                  placeholder={field[0].toUpperCase() + field.slice(1)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              ))}
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="" disabled>Select Qualification</option>
                <option value="High School">High School</option>
                <option value="Diploma">Diploma</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>

              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="" disabled>Select Program</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-md text-white font-semibold disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}
