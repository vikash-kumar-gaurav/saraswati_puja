// import React from "react";

// const TestenomialCards = ({ profilePicture, batch, working, review, name, index }) => {
//   return (
//     <div
//       key={index}
//       className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center gap-6 hover:shadow-2xl transition-all duration-300"
//     >
//       {/* Profile Picture */}
//       <div className="w-24 h-24">
//         <img
//           src={profilePicture || "https://via.placeholder.com/150"}
//           alt={`${name}'s profile`}
//           className="w-full h-full object-cover rounded-full border-4 border-gray-300"
//         />
//       </div>

//       {/* Info Section */}
//       <div className="flex-1">
//         <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
//         <p className="text-sm text-gray-500">{batch}</p>
//         <p className="text-sm font-medium text-blue-600">{working}</p>
//       </div>

//       {/* Review Section */}
//       <div className="mt-4 sm:mt-0 sm:w-2/3">
//         <p className="text-gray-600 text-sm leading-relaxed italic">
//           "{review}"
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TestenomialCards;


import React from "react";

const TestenomialCards = ({ profilePicture, batch, working, review, name, index }) => {
  return (
    <div
      key={index}
      className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 flex flex-col sm:flex-row items-center gap-6 transition-transform duration-500 ease-in-out transform hover:translate-x-6 hover:shadow-2xl"
    >
      {/* Profile Picture */}
      <div className="w-32 h-32">
        <img
          src={profilePicture || "https://via.placeholder.com/150"}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover rounded-full border-4 border-gray-300"
        />
      </div>

      {/* Info Section */}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{batch}</p>
        <p className="text-sm font-medium text-blue-600">{working}</p>
      </div>

      {/* Review Section */}
      <div className="mt-4 sm:mt-0 sm:w-2/3">
        <p className="text-gray-600 text-sm leading-relaxed italic">
          "{review}"
        </p>
      </div>
    </div>
  );
};

export default TestenomialCards;
