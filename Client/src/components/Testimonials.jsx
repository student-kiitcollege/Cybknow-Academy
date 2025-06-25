import React, { useEffect, useState, useRef } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ananya Sahu",
    username: "@anaya355",
    time: "3 weeks ago",
    stars: 5,
    review:
      "Great place to learn new skills. Mentors are too good, especially Sangram. He has cleared all my doubts regardless of time. The way online internship is organized is really good.",
    avatar: "https://img.freepik.com/premium-vector/young-man-avatar-character-due-avatar-man-vector-icon-cartoon-illustration_1186924-4438.jpg?semt=ais_hybrid&w=740",
    platformLogo: "/public/icon.jpg",
  },
  {
    name: "Subham Parta",
    username: "@Subhampatraaa",
    time: "1 week ago",
    stars: 5,
    review:
      "A great company to gain experience, learn, and develop valuable skills. The staff and placement officers provide excellent guidance, making the learning experience even more enriching.",
    avatar: "https://img.freepik.com/premium-vector/person-with-blue-shirt-that-says-name-person_1029948-7040.jpg?semt=ais_hybrid&w=740",
    platformLogo: "/public/icon.jpg",
  },
  {
    name: "Priyanka Monhanty",
    username: "@PriyaMonhanty121",
    time: "1 Month ago",
    stars: 5,
    review:
      "It has been an Amazing Experience in Inmakes. When I was joining I was confused about my non-IT background. But the training and support team are just superb. Now I have completed my Python Master Course and am looking for a career in IT.",
    avatar: "https://static.vecteezy.com/system/resources/previews/004/899/680/non_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    platformLogo: "/public/icon.jpg",
  },
  {
    name: "Rakesh Kumar Nayak",
    username: "@rakeshnayak",
    time: "2 days ago",
    stars: 4,
    review:
      "The mentorship program helped me grow tremendously. Support is always available and the community is friendly.",
    avatar: "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740",
    platformLogo: "/public/icon.jpg",
  },
  {
    name: "Sweta Das",
    username: "@DasSweta2003",
    time: "5 weeks ago",
    stars: 5,
    review:
      "Excellent training modules with practical assignments. The placement assistance was a bonus.",
    avatar: "https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
    platformLogo: "/public/icon.jpg",
  },
  {
    name: "Soubhagya Ranjan Behera",
    username: "@soubhagyaranjand",
    time: "3 months ago",
    stars: 5,
    review:
      "The live sessions are very interactive and helpful. They really prepare you well for real-world projects.",
    avatar: "https://randomuser.me/api/portraits/women/43.jpg",
    platformLogo: "/public/icon.jpg",
  },
  {
    name: "Jyoti Prakash Panda",
    username: "@jyoti_panda123",
    time: "1 week ago",
    stars: 5,
    review:
      "The trainers are experienced and patient. They helped me overcome my doubts and gain confidence.",
    avatar: "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740",
    platformLogo: "/public/icon.jpg",
  },
  {
    name: "Manoj Kumar Sethi",
    username: "@manoj_sehi987",
    time: "2 months ago",
    stars: 4,
    review:
      "Good course content and well-structured. Would love to see more advanced topics in future sessions.",
    avatar: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
    platformLogo: "/public/icon.jpg",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000); // 10-second auto scroll
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
    <section className="bg-[#0A0028] py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="flex flex-col items-center mb-12 px-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-white relative inline-block mb-2">
          <span className="relative z-10">Testimonials</span>
          <span className="absolute left-0 right-0 mx-auto bottom-0 h-[2px] w-full max-w-[130px] bg-purple-400 rounded"></span>
        </h2>
        <p className="text-center text-purple-400 italic text-sm sm:text-base max-w-md border-l-4 border-purple-600 pl-4">
          What our interns say about us
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-transparent max-w-7xl mx-auto px-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="min-w-[280px] sm:min-w-[300px] max-w-sm bg-white text-black rounded-2xl shadow-lg p-6 flex-shrink-0 transition hover:-translate-y-2 duration-300 scroll-snap-align-start flex flex-col items-center text-center"
          >
            <div className="flex items-center justify-between w-full mb-4 px-2">
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
                alt="platform"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
              />
            </div>

            <div className="flex text-yellow-400 mb-4 justify-center space-x-1">
              {Array.from({ length: t.stars }).map((_, idx) => (
                <FaStar key={idx} size={16} />
              ))}
            </div>

            <p className="text-gray-700 text-xs sm:text-sm px-2">{t.review}</p>
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
