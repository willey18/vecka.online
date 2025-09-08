'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(1);

  // Function to get current week number (ISO 8601)
  const getCurrentWeek = (date?: Date) => {
    const now = date || new Date();
    
    // Get the date of the Monday of the current week
    const monday = new Date(now);
    const dayOfWeek = now.getDay();
    const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Sunday = 0, so go back 6 days
    monday.setDate(now.getDate() + daysToMonday);
    
    // Get the date of the Monday of week 1 of the current year
    const jan4 = new Date(now.getFullYear(), 0, 4); // January 4th is always in week 1
    const jan4Monday = new Date(jan4);
    const jan4DayOfWeek = jan4.getDay();
    const daysToJan4Monday = jan4DayOfWeek === 0 ? -6 : 1 - jan4DayOfWeek;
    jan4Monday.setDate(jan4.getDate() + daysToJan4Monday);
    
    // Calculate the difference in weeks
    const timeDiff = monday.getTime() - jan4Monday.getTime();
    const weekDiff = Math.floor(timeDiff / (7 * 24 * 60 * 60 * 1000));
    
    return weekDiff + 1;
  };

  // Update time and week number every minute
  useEffect(() => {
    const updateTimeAndWeek = () => {
      const now = new Date();
      setCurrentTime(now);
      setCurrentWeek(getCurrentWeek(now));
    };

    // Initial update
    updateTimeAndWeek();

    const timer = setInterval(updateTimeAndWeek, 60000); // Update every minute

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
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl sm:text-8xl md:text-10xl lg:text-[12rem] font-bold text-purple-600 drop-shadow-2xl">
            {currentWeek}
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-600 drop-shadow-xl mt-2 sm:mt-4">
            {new Date().getDate()} {new Date().toLocaleDateString('sv-SE', { 
              month: 'long'
            })} {new Date().getFullYear()}
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-purple-500 drop-shadow-lg mt-1 sm:mt-2">
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
