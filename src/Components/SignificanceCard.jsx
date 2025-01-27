import React from "react";
const SignificanceCard = ({ img, title, desc, index }) => {
  return (
    <div
      className="relative w-[400px]  h-[500px] rounded-2xl border-[1px] border-gray-200 bg-gradient-to-b from-blue-50 via-white to-yellow-50 shadow-md hover:shadow-xl transform transition-all duration-300"
      key={index}
    >
      {/* Decorative Lighting Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 opacity-20 -z-10"></div>

      {/* Image Section (Circular) */}
      <div className="relative w-40 h-40 mx-auto mt-10 rounded-full overflow-hidden shadow-lg border-[2px] border-gray-300 hover:shadow-[0_0_30px_5px_rgba(255,255,255,0.5)] transition-shadow duration-300">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-8 text-center">
        <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-700 text-base leading-relaxed font-medium">
          {desc}
        </p>
      </div>

      {/* Hover Effects with Multicolor Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 hover:opacity-100 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r from-pink-400 to-blue-400 before:opacity-50 after:absolute after:inset-0 after:rounded-2xl after:border-[1px] after:border-transparent after:shadow-[0_0_15px_5px_rgba(255,255,255,0.2)]"></div>
    </div>
  );
};

export default SignificanceCard;

