'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Function to get current week number
  const getCurrentWeek = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const days = Math.floor((now.getTime() - start.getTime()) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + start.getDay() + 1) / 7);
  };

  const currentWeek = getCurrentWeek();

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <video 
        className="w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/bg_v1.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-start justify-center pt-20">
        <div className="text-center">
          <h1 className="text-[12rem] font-bold text-purple-600 drop-shadow-2xl">
            {currentWeek}
          </h1>
          <p className="text-4xl font-semibold text-purple-600 drop-shadow-xl mt-4">
            {new Date().getDate()} {new Date().toLocaleDateString('sv-SE', { 
              month: 'long'
            })} {new Date().getFullYear()}
          </p>
          <p className="text-2xl font-medium text-purple-500 drop-shadow-lg mt-2">
            {currentTime.toLocaleTimeString('sv-SE', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
