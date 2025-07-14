import React, { useEffect, useState } from "react";
import profilePic from "../assets/profile.jpg";
import logo from "../assets/logo.png";

const PlacedPopup = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 backdrop-blur-md bg-black/70">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:p-10">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-5 text-black text-3xl font-bold hover:text-red-500 cursor-pointer leading-none select-none"
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="flex justify-center items-center w-full md:w-1/3 mt-4 md:mt-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center md:text-left w-full md:w-2/3 mt-6 md:mt-0 px-2 sm:px-6">
          <p className="text-lg sm:text-xl text-gray-600 font-light">Congratulations</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-600 drop-shadow tracking-widest">
            PLACED
          </h1>
          <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-black">
            SURAJ KUMAR SAHOO
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-1">
            TCS PRIME, ODISHA
          </p>
        </div>
        <img
          src={logo}
          alt="Logo"
          className="absolute bottom-4 right-5 w-16 sm:w-20 md:w-24 h-auto object-contain opacity-90"
        />
      </div>
    </div>
  );
};

export default PlacedPopup;
