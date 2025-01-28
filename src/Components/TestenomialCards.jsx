import React from "react";

const TestimonialCards = ({ profilePicture, batch, working, review, name, index }) => {
  return (
    <div
      key={index}
      
      className="max-w-3xl w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl shadow-2xl p-10 flex flex-col sm:flex-row items-center gap-8 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl"
    >
      {/* Profile Picture */}
      <div className="  w-36 h-36 flex-shrink-0">
        <img
          src={profilePicture || "https://via.placeholder.com/150"}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover rounded-full border-4 border-gray-400 shadow-md"
        />
      </div>

      {/* Info Section */}
      <div className="flex-1">
        <h3 className="text-3xl font-bold text-gray-800">{name}</h3>
        <p className="text-base text-gray-500">{batch}</p>
        <p className="text-lg font-medium text-blue-500">{working}</p>
      </div>

      {/* Review Section */}
      <div className="mt-6 sm:mt-0 sm:w-2/3">
        <p className="text-gray-600 text-base leading-relaxed italic">
          "{review}"
        </p>
      </div>
    </div>
  );
};

export default TestimonialCards;
