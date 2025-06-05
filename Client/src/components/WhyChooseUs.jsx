import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          WHY <span className="text-purple-600">CHOOSE US</span>
        </h2>
        <div className="h-1 w-24 bg-purple-500 mx-auto mt-2 mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 md:px-4">
          {[
            {
              img: "https://inmakeslh.in/assets/ast/One-to-one.png",
              title: "Professional Mentoring",
              desc: "One-to-one mentorship from Experts",
            },
            {
              img: "https://inmakeslh.in/assets/ast/Challenge.png",
              title: "Gain work-experience",
              desc: "Challenge and Task-based learning",
            },
            {
              img: "https://inmakeslh.in/assets/ast/Placement.png",
              title: "Great Career",
              desc: "100% Life-long Placement Assistance",
            },
            {
              img: "https://inmakeslh.in/assets/ast/Time.png",
              title: "Quality Classes",
              desc: "Live Online sessions & flexible timing",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md text-center transition-transform hover:scale-105 duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-20 w-20 mx-auto mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
