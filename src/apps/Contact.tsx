import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <div className="p-6 h-full text-gray-200 font-ubuntu flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-[#E95420]">Get In Touch</h1>
      
      <div className="bg-white/5 p-8 rounded-xl border border-gray-700 w-full max-w-md">
        <p className="text-center mb-8 text-gray-300">
          I'm currently available for freelance work and full-time opportunities.
          If you have a project that needs a skilled MERN stack developer, let's talk!
        </p>

        <div className="space-y-4">
          <a href="mailto:princepateldevs@gmail.com" className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-[#E95420] transition-colors group">
            <Mail className="w-6 h-6 mr-4 text-gray-400 group-hover:text-white" />
            <span className="font-medium">princepateldevs@gmail.com</span>
          </a>
          
          <a href="https://www.linkedin.com/in/princecode/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-[#0077b5] transition-colors group">
            <Linkedin className="w-6 h-6 mr-4 text-gray-400 group-hover:text-white" />
            <span className="font-medium">linkedin.com/in/princecode</span>
          </a>
          
          <a href="https://github.com/princewritecode" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-black transition-colors group">
            <Github className="w-6 h-6 mr-4 text-gray-400 group-hover:text-white" />
            <span className="font-medium">github.com/princewritecode</span>
          </a>
        </div>
      </div>
    </div>
  );
}
