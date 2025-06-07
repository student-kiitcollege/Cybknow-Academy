import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const features = [
  {
    img: "https://inmakeslh.in/assets/slider/One%20to%20One.jpg",
    title: "One to One",
    highlight: "Personal Mentors",
    subtitle: "Individual Trainer Support",
  },
  {
    img: "https://inmakeslh.in/assets/slider/Swapping.jpg",
    title: "Program",
    highlight: "Swapping",
    subtitle: "without paying any additional amount",
  },
  {
    img: "https://inmakeslh.in/assets/slider/HR.jpg",
    title: "Live",
    highlight: "Classes",
    subtitle: "Real-time interactive learning",
  },
  {
    img: "https://inmakeslh.in/assets/slider/Challenges.jpg",
    title: "Doubt",
    highlight: "Support",
    subtitle: "Get your queries resolved instantly",
  },
  {
    img: "https://inmakeslh.in/assets/slider/Timing.jpg",
    title: "Flexible",
    highlight: "Timings",
    subtitle: "Choose your learning hours",
  },
  {
    img: "/images/feature6.png",
    title: "Recorded",
    highlight: "Sessions",
    subtitle: "Access anytime, anywhere",
  },
];

const ProgramFeatures = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-green-50 py-12 px-4 overflow-hidden">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-900">
        Program <span className="text-purple-600">Features</span>
      </h2>

      <style>{`
        .slick-slide > div {
          padding: 0 10px;
          box-sizing: border-box;
        }

        .slick-list {
          padding: 0 !important;
          margin: 0 -10px;
          overflow: hidden;
        }

        /* Prevent body scroll leak */
        body {
          overflow-x: hidden;
        }
      `}</style>

      <Slider {...settings}>
        {features.map((item, index) => (
          <div key={index}>
            <div className="bg-purple-100 rounded-3xl shadow-lg flex flex-col items-center text-center p-5 min-h-[360px] max-w-sm mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-full flex justify-center mb-5">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-44 w-auto object-contain rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                {item.title}{" "}
                <span className="text-purple-600 font-bold">{item.highlight}</span>
              </h3>
              <p className="mt-2 px-3 py-1.5 border border-purple-500 rounded-full text-xs text-purple-700 bg-green-100 max-w-xs mx-auto">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProgramFeatures;
