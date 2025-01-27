


// import React from "react";

// const Vision2047Card = ({ url1, url2, title1, title2, desc1, desc2 }) => {
//   return (
//     <div className="flex flex-col justify-center items-center gap-12 px-6 py-8">
//       {/* First Card */}
//       <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white border border-gray-300 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-4xl">
//         {/* Image (Small: Circular, Medium: Half-circle Left) */}
//         <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full md:rounded-l-full overflow-hidden border-4 border-gray-300">
//           <img
//             src={url1}
//             alt={title1}
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </div>
//         {/* Description */}
//         <div className="text-center md:text-left">
//           <h3 className="text-xl font-bold text-gray-800">{title1}</h3>
//           <p className="text-gray-700 mt-2">{desc1}</p>
//         </div>
//       </div>

//       {/* Second Card (Reverse Layout for Medium and Larger Screens) */}
//       <div className="flex flex-col md:flex-row-reverse items-center gap-6 p-6 bg-white border border-gray-300 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-4xl">
//         {/* Image (Small: Circular, Medium: Half-circle Right) */}
//         <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full md:rounded-r-full overflow-hidden border-4 border-gray-300">
//           <img
//             src={url2}
//             alt={title2}
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//         </div>
//         {/* Description */}
//         <div className="text-center md:text-left">
//           <h3 className="text-xl font-bold text-gray-800">{title2}</h3>
//           <p className="text-gray-700 mt-2">{desc2}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Vision2047Card;

import React from "react";

const Vision2047Card = ({ url1, url2, title1, title2, desc1, desc2 }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 px-6 py-8">
      {/* First Card */}
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 border border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-4xl">
        {/* Image (Small: Circular, Medium: Semi-Circular Left) */}
        <div className="relative w-48 h-48 md:w-80 md:h-40 md:rounded-tl-full md:rounded-bl-full md:rounded-tr-none md:rounded-br-none overflow-hidden border-4 border-gray-300">
          <img
            src={url1}
            alt={title1}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        {/* Description */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-extrabold text-gray-800 underline underline-offset-4 decoration-gray-500">
            {title1}
          </h3>
          <p className="text-gray-700 mt-2">{desc1}</p>
        </div>
      </div>

      {/* Second Card (Reverse Layout for Medium and Larger Screens) */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-6 p-6 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 border border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-4xl">
        {/* Image (Small: Circular, Medium: Semi-Circular Right) */}
        <div className="relative w-48 h-48 md:w-80 md:h-40 md:rounded-tr-full md:rounded-br-full md:rounded-tl-none md:rounded-bl-none overflow-hidden border-4 border-gray-300">
          <img
            src={url2}
            alt={title2}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        {/* Description */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-extrabold text-gray-800 underline underline-offset-4 decoration-gray-500">
            {title2}
          </h3>
          <p className="text-gray-700 mt-2">{desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default Vision2047Card;

