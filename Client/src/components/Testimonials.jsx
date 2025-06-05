import React, { useEffect, useState, useRef } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Deena Jose",
    username: "@deenajose",
    time: "3 weeks ago",
    stars: 5,
    review:
      "Great place to learn new skills. Mentors are too good, especially Anjum. She has cleared all my doubts regardless of time. The way online internship is organized is really good.",
    avatar:
      "https://www.gstatic.com/images/icons/material/system/2x/account_circle_white_48dp.png",
    platformLogo:
      "https://yt3.googleusercontent.com/mhme5V2s8MFLJ7lTY1i5K4yZy6mIg8dbvPN-TYWGmDcbA5beh9qbxRWAeZ9lJNPddOaJxhf0=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Ann Jacob",
    username: "@annjacob",
    time: "1 weeks ago",
    stars: 5,
    review:
      "A great company to gain experience, learn, and develop valuable skills. The staff and placement officers provide excellent guidance, making the learning experience even more enriching.",
    avatar: "https://ui-avatars.com/api/?name=Ann+Jacob&background=8b0000&color=fff",
    platformLogo:
      "https://yt3.googleusercontent.com/mhme5V2s8MFLJ7lTY1i5K4yZy6mIg8dbvPN-TYWGmDcbA5beh9qbxRWAeZ9lJNPddOaJxhf0=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Sabeer A",
    username: "@SabeerA",
    time: "1 Month ago",
    stars: 5,
    review:
      "It has been an Amazing Experience in Inmakes. When I was joining I was confused about my non-IT background. But the training and support team are just superb. Now I have completed my Python Master Course and am looking for a career in IT.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    platformLogo:
      "https://yt3.googleusercontent.com/mhme5V2s8MFLJ7lTY1i5K4yZy6mIg8dbvPN-TYWGmDcbA5beh9qbxRWAeZ9lJNPddOaJxhf0=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Riya Sharma",
    username: "@riyasharma",
    time: "2 days ago",
    stars: 4,
    review:
      "The mentorship program helped me grow tremendously. Support is always available and the community is friendly.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    platformLogo:
      "https://yt3.googleusercontent.com/mhme5V2s8MFLJ7lTY1i5K4yZy6mIg8dbvPN-TYWGmDcbA5beh9qbxRWAeZ9lJNPddOaJxhf0=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Karan Patel",
    username: "@karanpatel",
    time: "5 weeks ago",
    stars: 5,
    review:
      "Excellent training modules with practical assignments. The placement assistance was a bonus.",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    platformLogo:
      "https://yt3.googleusercontent.com/mhme5V2s8MFLJ7lTY1i5K4yZy6mIg8dbvPN-TYWGmDcbA5beh9qbxRWAeZ9lJNPddOaJxhf0=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Neha Singh",
    username: "@nehasingh",
    time: "3 months ago",
    stars: 5,
    review:
      "The live sessions are very interactive and helpful. They really prepare you well for real-world projects.",
    avatar: "https://randomuser.me/api/portraits/women/43.jpg",
    platformLogo:
      "https://yt3.googleusercontent.com/mhme5V2s8MFLJ7lTY1i5K4yZy6mIg8dbvPN-TYWGmDcbA5beh9qbxRWAeZ9lJNPddOaJxhf0=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Vikram Rao",
    username: "@vikramrao",
    time: "1 week ago",
    stars: 5,
    review:
      "The trainers are experienced and patient. They helped me overcome my doubts and gain confidence.",
    avatar: "https://randomuser.me/api/portraits/men/82.jpg",
    platformLogo:
      "https://yt3.googleusercontent.com/mhme5V2s8MFLJ7lTY1i5K4yZy6mIg8dbvPN-TYWGmDcbA5beh9qbxRWAeZ9lJNPddOaJxhf0=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Priya Nair",
    username: "@priyanair",
    time: "2 months ago",
    stars: 4,
    review:
      "Good course content and well-structured. Would love to see more advanced topics in future sessions.",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    platformLogo:
      "https://yt3.googleusercontent.com/mhme5V2s8MFLJ7lTY1i5K4yZy6mIg8dbvPN-TYWGmDcbA5beh9qbxRWAeZ9lJNPddOaJxhf0=s900-c-k-c0x00ffffff-no-rj",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = container.children[0]?.offsetWidth || 0;
      container.scrollTo({
        left: cardWidth * activeIndex,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-12 px-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 relative inline-block mb-2">
          <span className="relative z-10">Testimonials</span>
          <span className="absolute left-0 right-0 mx-auto bottom-0 h-[2px] w-full max-w-[130px] bg-purple-400 rounded"></span>
        </h2>
        <p className="text-center text-purple-700 italic text-base sm:text-lg max-w-md border-l-4 border-purple-600 pl-4">
          What our interns say about us
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-gray-100 max-w-7xl mx-auto px-2 sm:px-0"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="min-w-[280px] sm:min-w-[300px] max-w-sm bg-white rounded-2xl shadow-lg p-6 flex-shrink-0 transform transition duration-300 hover:-translate-y-2 scroll-snap-align-start flex flex-col items-center text-center"
          >
            <div className="flex items-center justify-between w-full mb-4 px-2 sm:px-4">
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">{t.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {t.username} | {t.time}
                  </p>
                </div>
              </div>
              <img
                src={t.platformLogo}
                alt="Platform logo"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>

            <div className="flex text-yellow-400 mb-4 justify-center space-x-1">
              {Array.from({ length: t.stars }).map((_, idx) => (
                <FaStar key={idx} size={16} />
              ))}
            </div>

            <p className="text-gray-700 text-xs sm:text-sm px-2 sm:px-4">{t.review}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2 px-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-4 h-4 rounded-full border-2 transition-colors duration-300 focus:outline-none ${
              i === activeIndex
                ? "bg-purple-500 border-purple-500"
                : "bg-white border-gray-300"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
