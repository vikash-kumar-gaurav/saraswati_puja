import React, { useState, useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Calculate the remaining time
  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    
    
    
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null; // Timer finished
  }

  useEffect(() => {
    console.log(timeLeft);
    console.log(targetDate);
    
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      if (!updatedTimeLeft) {
        clearInterval(timer); // Clear interval when time is up
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [targetDate]);

  if (!timeLeft) {
    return <p>The countdown is over!</p>;
  }

  return (
    <div id="timer" className="flex justify-center text-center ">
      <div className="mx-2">
        <p className="text-xl font-bold">{timeLeft.days}</p>
        <p className="text-sm">Days</p>
      </div>
      <div className="mx-2">
        <p className="text-xl font-bold">{timeLeft.hours}</p>
        <p className="text-sm">Hours</p>
      </div>
      <div className="mx-2">
        <p className="text-xl font-bold">{timeLeft.minutes}</p>
        <p className="text-sm">Minutes</p>
      </div>
      <div className="mx-2">
        <p className="text-xl font-bold">{timeLeft.seconds}</p>
        <p className="text-sm">Seconds</p>
      </div>
      
    </div>
  );
};

export default CountdownTimer;

