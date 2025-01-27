import { useEffect, useState } from 'react'
import saraswatiImg from '/mainImg.png'
import mobileView from '/today.png'
import './App.css'
import Navbar from './Components/Navbar'

import Hero2 from './Hero2'
import Gallery from './pages/gallery'
import Vision2047 from './pages/Vision2047'



function App() {
  const [ismobile, setismobile] = useState(true);

  const checkIsMobile = () => {
    const windowSize = window.innerWidth;
    setismobile(windowSize <= 768);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  
    
  
  

  return (
   <>
    <div className='hero_section w-auto h-auto bg-[#B5A79C]   '>
      <Navbar />
      <div className='h-[85%] w-full  hidden md:flex items-end justify-center outline-none'>
        <img src={saraswatiImg} style={{height:'750px',width:'1880px'}}  alt="" />
      </div>
      <div className='flex md:hidden  items-start max-h-[65%] overflow-hidden '>
      <img src={mobileView} alt=""  />
      </div>
      <Hero2 ismobile = {ismobile}/>
     

    </div>
    <Vision2047 ismobile={ismobile}/>
    <Gallery/>
    
   </>
  )
}

export default App
