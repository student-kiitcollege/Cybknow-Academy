import React from "react";

const Collaborations = () => {
  const partnerImages = [
    "https://inmakeslh.in/assets/ast/hiring/8.png",
    "https://inmakeslh.in/assets/ast/hiring/3.png",
    "https://inmakeslh.in/assets/ast/hiring/4.png",
    "https://inmakeslh.in/assets/ast/hiring/10.png",
    "https://inmakeslh.in/assets/ast/hiring/2.png",
    "https://inmakeslh.in/assets/ast/hiring/9.png",
    "https://inmakeslh.in/assets/ast/hiring/1.png",
    "https://inmakeslh.in/assets/ast/hiring/5.png",
    "https://inmakeslh.in/assets/ast/hiring/6.png",
    "https://inmakeslh.in/assets/ast/hiring/11.png",
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
          Collaborations
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-10">
          5200+ Hiring Partner Companies
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 justify-items-center items-center max-w-6xl mx-auto">
          {partnerImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`partner ${idx + 1}`}
              className="h-8 sm:h-10 w-auto grayscale hover:grayscale-0 transition duration-300 cursor-pointer"
              loading="lazy"
            />
          ))}
        </div>

        <button className="mt-10 px-6 py-2 bg-purple-100 text-purple-800 font-semibold rounded-md shadow hover:bg-purple-200 cursor-pointer transition duration-300 text-base sm:text-lg">
          More
        </button>
      </div>
    </section>
  );
};

export default Collaborations;
