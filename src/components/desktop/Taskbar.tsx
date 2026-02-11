import React, { useState, useEffect } from 'react';
import { Wifi, Volume2, Battery } from 'lucide-react';

export default function Taskbar() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-7 bg-[#1d1d1d] flex items-center justify-between px-2 select-none shadow-md z-[9999] text-xs font-ubuntu text-white/90 fixed top-0 w-full">
      <div className="flex items-center space-x-4 pl-1">
        <span className="font-bold cursor-pointer hover:bg-white/10 px-2 rounded py-0.5">Activities</span>
        <span className="cursor-pointer hover:bg-white/10 px-2 rounded py-0.5">PrinceOS</span>
      </div>
      
      <div className="absolute left-1/2 transform -translate-x-1/2 font-medium">
        {time}
      </div>

      <div className="flex items-center space-x-3 pr-2">
        <div className="flex items-center space-x-2">
          <Wifi size={14} />
          <Volume2 size={14} />
          <Battery size={14} />
        </div>
        <div className="cursor-pointer hover:bg-white/10 px-2 rounded py-0.5">
          ▼
        </div>
      </div>
    </div>
  );
}
