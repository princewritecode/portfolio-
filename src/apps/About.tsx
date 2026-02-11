import React from 'react';

export default function About() {
  return (
    <div className="p-6 h-full text-gray-200 font-ubuntu">
      <h1 className="text-3xl font-bold mb-4 text-[#E95420]">About Prince</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
           <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#E95420] shadow-lg mx-auto">
             <img src="https://github.com/princewritecode.png" alt="Prince" className="w-full h-full object-cover" />
           </div>
           <div className="mt-4 text-center">
             <p className="font-bold text-xl">Prince Patel</p>
             <p className="text-gray-400 text-sm">Full Stack Developer</p>
           </div>
        </div>
        
        <div className="w-full md:w-2/3 space-y-4">
          <p>
            "I speak fluent Binary. Unfortunately, I have a stutter, so everything ends up as a Segfault. 0️⃣1️⃣"
          </p>
          <p>
            MERN Stack is my super power. I specialize in building scalable web applications using MongoDB, Express, React, and Node.js.
          </p>
        
          <div>
            <h2 className="text-xl font-bold mb-2 text-[#E95420]">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Node.js', 'MongoDB', 'C++', 'Tailwind CSS', 'Redux'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
