import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";

const courseTitles = [
  "Ethical Hacking Fundamentals",
  "Cyber Commando Training",
  "Zero to Mastery Cybersecurity",
];

const Footer = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  return (
    <footer className="bg-[#140836] text-white px-4 sm:px-6 lg:px-12 py-10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Cybknow <br />
            <span className="text-xl">Learning Hub</span>
          </h2>
          <p className="text-sm text-gray-300 mt-2 max-w-xs sm:max-w-none">
            Learn new skills with top educators. Cybknow Learning Hub is the
            right place for you to learn new skills that will fetch you better
            opportunities in your career.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Additional Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link to="/register "
                className="hover:text-purple-600 transition duration-200"
              >
                Register
              </Link>
            </li>
            <li><Link to="/support" className="hover:text-purple-600 transition duration-200">Contact Us</Link></li>
            <li><Link to="/privacypolicy" className="hover:text-purple-600 transition duration-200">Privacy Policy</Link></li>
            <li><Link to="/policy" className="hover:text-purple-600 transition duration-200">Refund Policy</Link></li>
            <li>
              <Link to="/terms" className="hover:text-purple-600 transition duration-200">
                Terms And Conditions
              </Link>
            </li>            
            <li>
              <Link to="/about" className="hover:text-purple-600 transition duration-200">
                About
              </Link>
            </li>          
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Support</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <a href="tel:+918117842014" className="hover:underline">+91 8117842014</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:info@cybknow.com" className="hover:underline">info@cybknow.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Our Location</h3>
          <iframe
            title="Cybknow Map"
            className="rounded-lg w-full h-32 sm:h-40 mb-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.722797783222!2d85.85786151486833!3d20.268830986407095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a1d014758575%3A0xc1345bf4aef6d71!2sCybknow%20Technology%20Private%20limited%2C%20Lb-188%2C%20BDA%20Colony%2C%20Laxmisagar%2C%20Bhubaneswar%2C%20Odisha%20751006!5e0!3m2!1sen!2sin!4v1719973802349"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <p className="text-sm text-gray-300">
            Cybknow Technology Private Limited,
            Bhubaneswar, Odisha 751006
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-3">Certifications</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <img
            src="https://media.istockphoto.com/id/942287864/vector/iso-9001-2015-label-certification-new-version.jpg?s=612x612&w=0&k=20&c=BNxlzWbGc3v4GbNRSwqPrSpXQmabbjVLpxPXGMhvOaQ="
            alt="ISO 9001"
            className="h-12 sm:h-14 object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://www.journalofaccountancy.com/wp-content/uploads/sites/3/2016/06/soc-logo-1.JPG"
            alt="SOC Certified"
            className="h-12 sm:h-14 object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/gRf5_7yO_400x400_1200x768.jpeg"
            alt="MSME Certified"
            className="h-12 sm:h-14 object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          />
        
        </div>
      </div>


      <div className="mt-10 border-t border-purple-500 pt-6 text-center text-sm text-gray-400">
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-4 flex-wrap">
          <a href="https://www.instagram.com/cybknow/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800"><FaInstagram size={24} /></a>
          <a href="https://wa.me/918117842014" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800"><FaWhatsapp size={24} /></a>
          <a href="https://www.youtube.com/results?search_query=cybknow" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800"><FaYoutube size={24} /></a>
          <a href="https://www.linkedin.com/company/cybknow/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800"><FaLinkedin size={24} /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800"><FaFacebookF size={24} /></a>
        </div>
        <a
          href="https://www.google.com/search?q=cybknow"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-purple-400"
        >
          Cybknow.Com © All rights reserved
        </a>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/60">
          <div className="bg-white text-black rounded-2xl p-8 w-full max-w-lg shadow-2xl relative animate-fadeIn">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-black text-xl font-bold hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">
              Register for a Course
            </h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm">
                <option value="">Latest Qualification</option>
                <option value="10th">10th</option>
                <option value="12th">12th</option>
                <option value="Graduate">Graduate</option>
                <option value="Post Graduate">Post Graduate</option>
              </select>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              >
                <option value="">Choose Course</option>
                {courseTitles.map((title, idx) => (
                  <option key={idx} value={title}>{title}</option>
                ))}
              </select>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition duration-300"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
