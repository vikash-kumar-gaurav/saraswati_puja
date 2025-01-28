import React, {useState} from 'react'
import '../index.css'
import cimageLogo from '/cimageLogo.png'
import { RiMenu2Fill } from "react-icons/ri";


const Navbar = ({ismobile}) => {
    const [Sidebar, setSidebar] = useState(false)
    const handleSideBar = () => {
        setSidebar((prev) => !prev)
    }
  return (
    <>
        <div className='relative z-50 w-full h-auto bg-[#F6C896]/20 backdrop-blur-2xl rounded-2xl flex px-10 justify-between items-center'>
        <div><img src={cimageLogo} style={{height:'50px'}} alt="" /></div>
        <div className='hidden md:flex flex-co justify-end items-center gap-10 '>
           <div className='flex gap-10 '>
           <a className='tag' href="#home">Home</a>
            <a className='tag' href="#gallery">Gallery</a>
            <a className='tag' href="/career">Contact_Us</a>
            <a className='tag' target='_blank' href="https://vikash-portfolio-i.netlify.app">Credit</a>
           </div>
           
        </div>
        <div onClick={handleSideBar} className=' flex md:hidden bg-white rounded text-xl font-bold w-8 px-1'>
        <RiMenu2Fill/>
        </div>
    </div>
        <div className='hidden md:flex absolute right-19 top-19 gap-1.5 justify-between items-center '>
        <a href="#visionHeading"><button id='navButton' className='bg-gradient-to-b from-[#FF9933] via-white to-[#138808] text-[#000080] rounded-3xl px-4 py-2'>Vision 2047</button></a>

        <a href="#visionHeading"><button id='navButton ' className='bg-yellow-400 text-white rounded-3xl px-4 py-2'>Innovations</button></a>
        </div>
    {
        Sidebar && ismobile &&
        <div className='absolute bg-[#f6c8962c] w-64 h-auto right-0 rounded-b-md flex items-center justify-center gap-10'>
            <div className=' justify-end items-center gap-4 flex-col flex '>
            <a className='tag' href="#home">Home</a>
            <a className='tag' href="#gallery">Gallery</a>
            <a className='tag' href="/career">Contact_Us</a>
            <a className='tag' target='_blank' href="https://vikash-portfolio-i.netlify.app">Credit</a>
            </div>
            <div className='flex flex-col gap-2.5'>
            <a href="#visionHeading"><button id='navButton' className='bg-gradient-to-b from-[#FF9933] via-white to-[#138808] text-[#000080] rounded-3xl px-4 py-2'>Vision 2047</button></a>

            <a href="#visionHeading"><button id='navButton ' className='bg-yellow-400 text-white rounded-3xl px-4 py-2'>Innovations</button></a>
            </div>
            
        </div>
    }
    
    </>
  )
}

export default Navbar