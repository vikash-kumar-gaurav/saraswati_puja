
import React, { useState } from "react";
import { Reviews } from "../assets/fileSuplier";
import TestimonialCards from '../Components/TestenomialCards';

const Testenominals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Reviews.length);
  };

  // Go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Reviews.length) % Reviews.length
    );
  };

  return (
    <div className="w-full mx-auto bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
        Our Alumni Testimonials
      </h2>

      <div className="relative">
        {/* Carousel */}
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Reviews.map((item, index) => (
              <TestimonialCards
                key={index}
                profilePicture={item.profilePicture}
                name={item.name}
                batch={item.batch}
                working={item.working}
                review={item.desc}
              />
            ))}
          </div>
        </div>

        {/* Left & Right Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-4 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          &#8592;
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-4 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Testenominals;
