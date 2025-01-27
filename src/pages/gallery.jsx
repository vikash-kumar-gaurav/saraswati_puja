
import React, { useState } from 'react';
import { Art_work, Cleaning, Puja, Social } from '../assets/fileSuplier';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('puja');

  const checkCategory = () => {
    const categories = {
      puja: {
        type: Puja,
        desc: 'Our college celebrates Saraswati Puja every year with devotion and grandeur. Relive those precious memories here.',
      },
      cleaning: {
        type: Cleaning,
        desc: 'Witness the teamwork and dedication of our students and teachers during the preparation for Saraswati Puja.',
      },
      art: {
        type: Art_work,
        desc: 'Explore the creativity of our students through vibrant artworks and crafts that showcase their talent.',
      },
      social: {
        type: Social,
        desc: 'Our students actively participate in social work, promoting values of compassion and community service.',
      },
    };
    return categories[activeCategory] || categories['puja']; // Default to Puja if not found
  };

  return (
    <div className="gallery min-h-screen w-full bg-gradient-to-r from-blue-400 via-purple-300 to-pink-300 text-gray-900"> {/* Colorful background */}
      {/* Gallery Heading */}
      <div className="text-center py-8">
        <h1 className=" text-3xl md:text-5xl font-extrabold tracking-wide text-gray-800 drop-shadow-lg">
          College Gallery
        </h1>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        <button
          onClick={() => setActiveCategory('puja')}
          id='navButton'
          className={`px-6 py-3 rounded-full shadow-lg font-semibold transition-transform duration-300 ease-in-out ${
            activeCategory === 'puja'
              ? 'bg-yellow-500 text-white scale-105'
              : 'bg-white text-black hover:scale-105'
          }`}
        >
          Previous Year
        </button>
        <button
          onClick={() => setActiveCategory('cleaning')}
          id='navButton'
          className={`px-6 py-3 rounded-full shadow-lg font-semibold transition-transform duration-300 ease-in-out ${
            activeCategory === 'cleaning'
              ? 'bg-yellow-500 text-white scale-105'
              : 'bg-white text-black hover:scale-105'
          }`}
        >
          Team Work
        </button>
        <button
          onClick={() => setActiveCategory('art')}
          id='navButton'
          className={`px-6 py-3 rounded-full shadow-lg font-semibold transition-transform duration-300 ease-in-out ${
            activeCategory === 'art'
              ? 'bg-yellow-500 text-white scale-105'
              : 'bg-white text-black hover:scale-105'
          }`}
        >
          Art
        </button>
        <button
          onClick={() => setActiveCategory('social')}
          id='navButton'
          className={`px-6 py-3 rounded-full shadow-lg font-semibold transition-transform duration-300 ease-in-out ${
            activeCategory === 'social'
              ? 'bg-yellow-500 text-white scale-105'
              : 'bg-white text-black hover:scale-105'
          }`}
        >
          For Society
        </button>
      </div>

      {/* Image Grid */}
      <div className="text-center mb-6">
        <p className="text-lg italic text-gray-800 font-medium">{checkCategory().desc}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8">
        {checkCategory().type.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <img
              src={item.src}
              alt={`gallery-img-${index}`}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
