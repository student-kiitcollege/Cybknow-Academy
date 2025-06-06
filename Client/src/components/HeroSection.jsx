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

  const handleRegisterClick = () => {
    setShowModal(true);
  };

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

    // Validate all fields including new selects
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.qualification ||
      !formData.program
    ) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Registration successful! Check your email.");
        handleCloseModal();
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-purple-100 px-4 sm:px-6 lg:px-12 py-12 min-h-screen flex flex-col lg:flex-row items-center justify-between overflow-hidden">
        <div className="max-w-xl lg:w-1/2 text-center lg:text-left animate-fadeSlideIn">
          <h1 className="text-4xl sm:text-5xl font-bold animated-gradient-text">
            Skill<span>Up</span>Now
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-semibold animated-gradient-text">
            India's No.1 Virtual Internship Platform
          </p>
          <p className="mt-2 text-base sm:text-lg text-gray-700 max-w-md mx-auto lg:mx-0">
            Learn today for a better tomorrow
          </p>
          <button
            onClick={handleRegisterClick}
            className="cursor-pointer mt-6 bg-purple-600 text-white px-5 py-3 rounded-md font-medium hover:bg-purple-700 transition-transform transform hover:scale-105 shadow-lg hover:shadow-purple-400/50"
          >
            REGISTER NOW
          </button>
        </div>

        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center items-center h-[60vh] sm:h-[70vh] md:h-[80vh] perspective max-w-full">
          <div
            className="w-full max-w-lg h-full animate-zoomFloat"
            style={{
              transformStyle: "preserve-3d",
              animation: "zoomFloat 8s ease-in-out infinite",
            }}
          >
            <img
              src="https://inmakeslh.in/assets/ast/right-top.png"
              alt="Hero Illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-xl animate-fadeSlideIn relative">
            <button
              onClick={handleCloseModal}
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-500 hover:text-purple-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              Register Now
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="" disabled>
                  Select Qualification
                </option>
                <option value="High School">High School</option>
                <option value="Diploma">Diploma</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="Other">Other</option>
              </select>

              {/* New select: Program */}
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="" disabled>
                  Select Program
                </option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Other">Other</option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        /* Animatable CSS variables for colors */
        @property --color-1 {
          syntax: "<color>";
          inherits: false;
          initial-value: hsl(98 100% 62%);
        }

        @property --color-2 {
          syntax: "<color>";
          inherits: false;
          initial-value: hsl(204 100% 59%);
        }

        /* Animation for the color variables */
        @keyframes gradient-change {
          to {
            --color-1: hsl(210 100% 59%);
            --color-2: hsl(310 100% 59%);
          }
        }

        /* Animated gradient text */
        .animated-gradient-text {
          background: linear-gradient(
            to right in oklch,
            var(--color-1),
            var(--color-2)
          );
          animation: gradient-change 3s linear infinite alternate;

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

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

        @keyframes zoomFloat {
          0%, 100% {
            transform: scale(1) rotateY(0deg) rotateX(0deg) translateY(0px);
          }
          25% {
            transform: scale(1.02) rotateY(3deg) rotateX(1deg) translateY(-10px);
          }
          50% {
            transform: scale(1.04) rotateY(0deg) rotateX(0deg) translateY(0px);
          }
          75% {
            transform: scale(1.02) rotateY(-3deg) rotateX(-1deg) translateY(10px);
          }
        }

        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}
