

import React from "react";

const TestimonialCards = ({ profilePicture, batch, working, review, name }) => {
  return (
    <div className="w-full md:w-[80vw] lg:w-[60vw] xl:w-[50vw] bg-white rounded-xl shadow-lg p-8 mb-6 flex items-center gap-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      {/* Profile Picture */}
      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-300">
        <img
          src={profilePicture || "https://via.placeholder.com/150"}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Testimonial Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-base text-gray-500 mb-2">{batch}</p>
        <p className="text-base text-blue-600 font-semibold">{working}</p>
        <div className="mt-4 text-gray-700">
          <p className="text-lg italic">{review}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;

