import React,{ useEffect, useRef, useState} from 'react'
import '../index.css'
import CountdownTimer from './countdown'
import img1 from '/cele.png'
import gsap from 'gsap'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ImCross } from "react-icons/im";


const Notification = ({ismobile}) => {
    const [isActive, setisActive] = useState(false)

    const paraRef = useRef()
    useEffect(() => {
     setTimeout(() => {
        setisActive(true)
     }, 1500);   
    },[])
    
  return (
    <>
        { ismobile && isActive &&
        
        <div id='Notification' 
         style={{backgroundImage:`url(${img1})`}}
         className='w-[80vw] pt-1.5 flex flex-col justify-start items-center min-h-[80vh] bg-center bg-cover fixed top-24 left-12 rounded-2xl mx-auto '>
            <button 
            className='absolute right-1 top-1 rounded-full bg-rose-500 p-1 '
            onClick={(prev) => setisActive(!prev)}
            >
                <ImCross/>
            </button>
            <p id='para2'className='items-center' >Count down begain!</p>
            <CountdownTimer targetDate={'Feb 2 2025 00:00:00'}/>
            <p id='para1'>You are invited to </p>
            <DotLottieReact
            src="https://lottie.host/bd099271-2ac0-496a-97b7-52326e89b1ef/5FNtbMpUiS.lottie"
            loop
            autoplay
            />
        </div>
    }
    </>
  )
}

export default Notification

