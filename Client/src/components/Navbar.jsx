import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showInternshipDropdown, setShowInternshipDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    qualification: "",
    program: "",
  });
  const [loading, setLoading] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowInternshipDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRegisterSuccess("");
    setRegisterError("");

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });
      const data = await response.json();

      if (data.success) {
        setRegisterSuccess("Registration successful! Confirmation email sent.");
        setRegisterData({
          name: "",
          email: "",
          phone: "",
          password: "",
          qualification: "",
          program: "",
        });
      } else {
        setRegisterError("Registration failed. Please try again.");
      }
    } catch (error) {
      setRegisterError("An error occurred. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black shadow-md px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="https://cybknow.com/wp-content/uploads/2025/02/logo.png"
            alt="Cybknow Logo"
            className="h-auto w-16 sm:w-20"
          />
          <span className="text-lg sm:text-xl font-semibold text-purple-700">Cybknow</span>
          <span className="text-lg sm:text-xl font-semibold text-white">Academy</span>
        </div>

        <button
          className="md:hidden block text-purple-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        <ul
          className={`md:flex space-y-4 md:space-y-0 md:space-x-6 text-[#1c1c3b] font-medium absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 ${isMobileMenuOpen ? "block" : "hidden"}`}
        >
          <li className="hover:text-purple-600 text-white cursor-pointer">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          </li>

          <li className="relative cursor-pointer select-none" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setShowInternshipDropdown((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={showInternshipDropdown}
              className="hover:text-purple-600 flex items-center gap-1 cursor-pointer text-white"
            >
              Internships <span>▾</span>
            </button>

            {showInternshipDropdown && (
              <ul className="absolute bg-white shadow-lg rounded-md py-2 w-44 z-50 mt-2">
                <li>
                  <Link to="/course/ethical-hacking" className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setShowInternshipDropdown(false);
                      setIsMobileMenuOpen(false);
                    }}>
                    Ethical Hacking
                  </Link>
                </li>
                <li>
                  <Link to="/course/network-security" className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setShowInternshipDropdown(false);
                      setIsMobileMenuOpen(false);
                    }}>
                    Network Security
                  </Link>
                </li>
                <li>
                  <Link to="/course/cyber-security" className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setShowInternshipDropdown(false);
                      setIsMobileMenuOpen(false);
                    }}>
                    Cyber Security
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="hover:text-purple-600 cursor-pointer text-white">
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          </li>
          <li className="hover:text-purple-600 cursor-pointer text-white">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </li>

          <li className="md:hidden flex flex-col gap-2">
            <button
              className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
              onClick={() => {
                setShowRegisterModal(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Register
            </button>
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 cursor-pointer"
              onClick={() => {
                setShowLoginModal(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Login
            </button>
          </li>
        </ul>

        <div className="hidden md:flex gap-3">
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 cursor-pointer"
            onClick={() => setShowRegisterModal(true)}
          >
            Register
          </button>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 cursor-pointer"
            onClick={() => setShowLoginModal(true)}
          >
            Login
          </button>
        </div>
      </nav>

      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg w-[90%] max-w-md p-6 shadow-xl animate-fadeSlideIn">
            <button
              onClick={() => setShowRegisterModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-purple-600 text-lg cursor-pointer"
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Register</h2>

            {registerSuccess && <p className="mb-4 text-green-600">{registerSuccess}</p>}
            {registerError && <p className="mb-4 text-red-600">{registerError}</p>}

            <form className="space-y-4" onSubmit={handleRegisterSubmit}>
              <input type="text" name="name" placeholder="Full Name" value={registerData.name} onChange={handleRegisterChange} required className="input" />
              <input type="email" name="email" placeholder="Email" value={registerData.email} onChange={handleRegisterChange} required className="input" />
              <input type="tel" name="phone" placeholder="Phone Number" value={registerData.phone} onChange={handleRegisterChange} required className="input" />
              <input type="password" name="password" placeholder="Password" value={registerData.password} onChange={handleRegisterChange} required className="input" />

              <select name="qualification" value={registerData.qualification} onChange={handleRegisterChange} required className="input">
                <option value="">Select Qualification</option>
                <option value="Post Higher Secondary">Post Higher Secondary</option>
                <option value="Under Graduate">Under Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
              </select>

              <select name="program" value={registerData.program} onChange={handleRegisterChange} required className="input">
                <option value="">Select Program</option>
                <option value="Ethical Hacking">Ethical Hacking</option>
                <option value="Network Security">Network Security</option>
                <option value="Cyber Security">Cyber Security</option>
              </select>

              <button type="submit" className="btn cursor-pointer" disabled={loading}>
                {loading ? "Registering..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg w-[90%] max-w-md p-6 shadow-xl animate-fadeSlideIn">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-purple-600 text-lg cursor-pointer"
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Login</h2>
            <form className="space-y-4">
              <input type="email" placeholder="Email" className="input" />
              <input type="password" placeholder="Password" className="input" />
              <button type="submit" className="btn cursor-pointer">Login</button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.3s ease-out forwards;
        }
        .input {
          width: 100%;
          padding: 0.5rem 1rem;
          border: 1px solid #ccc;
          border-radius: 0.375rem;
          outline: none;
          transition: all 0.2s;
        }
        .input:focus {
          border-color: #a855f7;
          box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.5);
        }
        .btn {
          width: 100%;
          background-color: #a855f7;
          color: white;
          padding: 0.5rem;
          border-radius: 0.375rem;
          transition: background-color 0.2s;
        }
        .btn:hover {
          background-color: #9333ea;
        }
        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}
