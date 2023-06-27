import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const settings = {
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2700,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1526470498-9ae73c665de8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=998&q=80",
    "https://plus.unsplash.com/premium_photo-1661596547446-4cec55196a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <div className="w-full pl-6 h-96">
        <img
          src="https://images.unsplash.com/photo-1662982689227-0791c9107172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          alt=""
          className="w-full h-full rounded hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="w-full">
        <div className="carousel-container m-2 p-4 max-w-lg">
          <Slider {...settings} className="">
            {images.map((image) => (
              <div key={image} className="carousel-slide rounded overflow-hidden h-96">
                <img src={image} alt="carousel-image" className="w-full h-full object-cover rounded" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="w-full pr-6 h-96">
        <img
          src="https://images.unsplash.com/photo-1664395935803-7d5f88ae6369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
          alt=""
          className="w-full h-full rounded hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 820px) {
          /* On screens 820x1120 or smaller, hide the side images and adjust the carousel size */
          .flex-col {
            flex-direction: column;
          }
          .w-full {
            width: 100%;
          }
          .pl-6,
          .pr-6 {
            display: none;
          }
          .carousel-container {
            padding-left: 4;
            padding-right: 4;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;
