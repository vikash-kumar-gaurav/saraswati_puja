

import React, { useState } from 'react';
import clipData from './Components/LottiData';
import SignificanceCard from './Components/SignificanceCard';
import gsap from 'gsap';

const Hero2 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState(false);

  
  const handleMouse = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    
  };

  return (
    <div
      onMouseMove={handleMouse}
      onMouseEnter={() => setCursor(true)}
      onMouseLeave={() => setCursor(false)}
      className="min-h-screen  pt-10 relative bg-gradient-to-b from-[#FFF] to-[#FFD700] text-gray-800 flex flex-wrap  items-center gap-3 md:gap-1 px-30 pb-10"
    >
      {/* Custom cursor */}
      <div
        className={`hidden md:flex ${cursor ? 'flex' : 'hidden'} cursorContainer w-96 rounded-full h-96 bg-black absolute pb-10`}
        style={{left:`${position.x}px`, top:`${position.y}px`}}
      ></div>

      {/* Display significance cards */}
      {clipData.map((data, index) => (
        <SignificanceCard
          key={index}
          img={data.src}
          title={data.title}
          desc={data.desc}
          index={index}
        />
      ))}
    </div>
  );
};

export default Hero2;
