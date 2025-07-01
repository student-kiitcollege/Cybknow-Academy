import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#140836] text-white px-4 sm:px-6 lg:px-12 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
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
            <li>- Login</li>
            <li>- Register</li>
            <li>- Contact Us</li>
            <li>- Privacy Policy</li>
            <li>- Refund Policy</li>
            <li>- Terms And Conditions</li>
            <li>- About</li>
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
          <h3 className="text-lg font-bold mb-3">Recognized/Certified by</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/gRf5_7yO_400x400_1200x768.jpeg?size=690:388"
              alt="cert 1"
              className="h-8 sm:h-10 object-contain"
            />
            <img
              src="https://media.istockphoto.com/id/942287864/vector/iso-9001-2015-label-certification-new-version.jpg?s=612x612&w=0&k=20&c=BNxlzWbGc3v4GbNRSwqPrSpXQmabbjVLpxPXGMhvOaQ="
              alt="cert 2"
              className="h-8 sm:h-10 object-contain"
            />
            <img
              src="https://www.journalofaccountancy.com/wp-content/uploads/sites/3/2016/06/soc-logo-1.JPG"
              alt="cert 3"
              className="h-10 sm:h-12 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-purple-500 pt-6 text-center text-sm text-gray-400">
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-4 flex-wrap">
          <a
            href="https://www.instagram.com/cybknow/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://wa.me/918117842014"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://www.youtube.com/results?search_query=cybknow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/cybknow/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
          >
            <FaFacebookF size={24} />
          </a>
        </div>
        <a
          href="https://www.google.com/search?q=cybknow&oq=c&gs_lcrp=EgZjaHJvbWUqDggBEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIOCAEQRRgnGDsYgAQYigUyBggCEEUYOTIGCAMQRRg7MgwIBBAuGEMYgAQYigUyDAgFEC4YQxiABBiKBTIMCAYQLhhDGIAEGIoFMhMIBxAuGIMBGMcBGLEDGNEDGIAEMg8ICBAAGEMYsQMYgAQYigUyDQgJEAAYgwEYsQMYgATSAQkxNDk0ajBqMTWoAgmwAgHxBWEdpgslGzjr&sourceid=chrome&ie=UTF-8"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-purple-400"
        >
          Cybknow.Com © All rights reserved
        </a>
      </div>
    </footer>
  );
};

export default Footer;
