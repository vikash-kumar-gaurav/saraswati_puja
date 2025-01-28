import React,{useEffect, useState, useRef} from 'react'
import { Sustainability,Innovation, Education, SocialWelfare } from '../assets/fileSuplier'
import Vision2047Card from '../Components/vision2047Card'
import gsap from 'gsap'

const Vision2047 = ({ismobile}) => {
  const [currentCategery, setcurrentCategery] = useState('Innovation')
  const checkCurrentCategory = () => {
    const categories ={
      Innovation:Innovation,
      Education:Education,
      Sustainability:Sustainability,
      SocialWelfare:SocialWelfare
    }

    return categories[currentCategery] || Innovation
  }
  const headerRef = useRef()
useEffect(() => {
  gsap.to(headerRef.current,{
    y:50,
    duration:5,
    yoyo:true,
    repeat:-1,
    
  })
})

  return (
    <div className='w-full h-auto bg-linear-to-r from-[#ba0c2f] to-[#ffcd00]'>
        <div className="min-h-screen bg-gradient-to-b from-[#FF9933] via-white to-[#138808] text-white py-20">
  <div className="text-center mb-10">
    <div className='flex flex-wrap w-full h-auto gap-4 justify-center items-center'>
      <button id='navButton' className='bg-yellow-400 text-white rounded-3xl px-4 py-2' onClick={() => setcurrentCategery('Innovation')}>Innovation</button>
      <button id='navButton' className='bg-white text-black rounded-3xl px-4 py-2' onClick={() => setcurrentCategery('Sustainability')}>Sustainability</button>
      <button id='navButton' className='bg-yellow-400 text-white rounded-3xl px-4 py-2' onClick={() => setcurrentCategery('Education')}>Education</button>
      <button id='navButton' className='bg-white text-black rounded-3xl px-4 py-2' onClick={() => setcurrentCategery('SocialWelfare')}>Social Walfare</button>
    </div>
    <h1 className="text-5xl font-bold tracking-wide">Vision 2047</h1>
    <p className="mt-4 text-xl text-gray-300" ref={headerRef}>
      Empowering progress, innovation, and sustainability for a brighter tomorrow.
    </p>
  </div>

  {
    checkCurrentCategory().map((item,index) => {
      return (
        <Vision2047Card 
         ismobile
         url1={item.url1}
         url2={item.url2}
         title1={item.title1}
         title2={item.title2}
         desc1={item.desc1}
         desc2={item.desc2}
        />
      )
    })
  }

  
</div>

    </div>
  )
}

export default Vision2047