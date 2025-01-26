


// import React from 'react'

// const Vision2047Card = ({ url1, url2, title1, title2, desc1, desc2 }) => {
//   return (
//     <div className='flex flex-col justify-center items-center gap-8'>
//       {/* First Section Card (Image Left, Desc Right) */}
//       <div className='flex items-center justify-between gap-4 hover:scale-105 transition-transform duration-300'>
//         <div className='flex items-center gap-4 p-4 border flex-wrap border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
//           <div className='relative w-64 h-64'>
//             <img
//               src={url1}
//               alt={title1}
//               className='w-full h-full object-cover rounded-lg'
//             />
//             <h3 className='absolute bottom-4 left-0 right-0 text-center text-white font-bold bg-opacity-60 bg-black p-2 rounded-b-lg'>
//               {title1}
//             </h3>
//           </div>
//           <p className='text-center text-gray-700 max-w-md'>{desc1}</p>
//         </div>
//       </div>

//       {/* Second Section Card (Image Right, Desc Left) */}
//       <div className='flex items-center justify-between gap-4 hover:scale-105 transition-transform duration-300'>
//         <div className='flex items-center gap-4 p-4 border flex-wrap border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
//           <p className='text-center text-gray-700 max-w-md'>{desc2}</p>
//           <div className='relative w-64 h-64'>
//             <img
//               src={url2}
//               alt={title2}
//               className='w-full h-full object-cover rounded-lg'
//             />
//             <h3 className='absolute bottom-4 left-0 right-0 text-center text-white font-bold bg-opacity-60 bg-black p-2 rounded-b-lg'>
//               {title2}
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Vision2047Card;


import React from 'react';

const Vision2047Card = ({ url1, url2, title1, title2, desc1, desc2 }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 px-6 py-8">
      {/* First Section Card (Image Left, Desc Right) */}
      <div className="flex items-center justify-between gap-4 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center gap-4 p-6 bg-opacity-70 backdrop-blur-sm border border-gray-300 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-4xl">
          <div className="relative w-72 h-72">
            <img
              src={url1}
              alt={title1}
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
            <h3 className="absolute bottom-4 left-0 right-0 text-center text-white font-bold bg-opacity-60 bg-black p-2 rounded-b-lg">
              {title1}
            </h3>
          </div>
          <p className="text-center text-gray-700 max-w-md">{desc1}</p>
        </div>
      </div>

      {/* Second Section Card (Image Right, Desc Left) */}
      <div className="flex items-center justify-between gap-4 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center gap-4 p-6 bg-opacity-70 backdrop-blur-sm border border-gray-300 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-4xl">
          <p className="text-center text-gray-700 max-w-md">{desc2}</p>
          <div className="relative w-72 h-72">
            <img
              src={url2}
              alt={title2}
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
            <h3 className="absolute bottom-4 left-0 right-0 text-center text-white font-bold bg-opacity-60 bg-black p-2 rounded-b-lg">
              {title2}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision2047Card;
