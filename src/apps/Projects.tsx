import React from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      name: 'movielux',
      description: 'A high-performance, Netflix-inspired movie exploration platform. Built with React and Vite, it leverages the GPT API to transform how users discover cinema through natural language suggestions.',
      tech: ['React', 'Vite', 'TailwindCSS', 'GPT API'],
      stars: 2,
      forks: 0,
      link: 'https://github.com/princewritecode/movielux'
    },
    {
      name: 'productiii',
      description: 'A modern, responsive e-commerce platform built with React 19, Vite, and TailwindCSS featuring stunning UI/UX components.',
      tech: ['React 19', 'Vite', 'TailwindCSS'],
      stars: 1,
      forks: 0,
      link: 'https://github.com/princewritecode/productiii',
      demoLink: 'https://productiii.vercel.app'
    }
  ];

  return (
    <div className="p-6 h-full text-gray-200 font-ubuntu">
      <h1 className="text-3xl font-bold mb-6 text-[#E95420]">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.demoLink || project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 transition-colors p-5 rounded-lg border border-gray-700 flex flex-col h-full group block text-left"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#E95420] transition-colors">{project.name}</h3>
            <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(t => (
                <span key={t} className="text-xs px-2 py-0.5 rounded bg-[#E95420]/20 text-[#E95420]">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-800">
               <div className="flex items-center space-x-3">
                 <span className="flex items-center space-x-1"><Star size={14} /> <span>{project.stars}</span></span>
                 <span className="flex items-center space-x-1"><GitFork size={14} /> <span>{project.forks}</span></span>
               </div>
               <div className="flex items-center space-x-3">
                  {project.demoLink ? (
                    <span className="flex items-center space-x-1 text-[#E95420]">
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </span>
                  ) : (
                    <span className="flex items-center space-x-1 text-white">
                      <Github size={16} />
                      <span>Code</span>
                    </span>
                  )}
               </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
