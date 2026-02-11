import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: 'Tech Lead / Coding Instructor',
      company: 'CII-Justice Mehr Chand Mahajan Trust Multi Skill Training Institute',
      period: 'Sep 2024 - Jul 2025',
      description: 'Full stack developer lead and coding instructor at Dharamshala, Himachal Pradesh.'
    },
    {
      role: 'Frontend Developer',
      company: 'Shri Viratra Engineering Pvt. Ltd.',
      period: 'Mar 2022 - Jan 2024',
      description: 'Key contributor to the Viratra Engineering corporate website. Leveraged expertise in web development to create a responsive and user-friendly online presence, handling front-end design and back-end integration.'
    },
    {
      role: 'Low-code Developer',
      company: 'cofound up',
      period: 'Feb 2021 - Dec 2023',
      description: 'Utilized Bubble.io to create custom templates and applications. Created a template featured on the Bubble Marketplace, showcasing proficiency in rapid prototyping and low-code development.'
    },
    {
      role: 'Full Stack Engineer Fellowship',
      company: 'Crio.Do',
      period: 'May 2022 - Jun 2023',
      description: 'Completed a rigorous Full stack web-developer program, gaining hands-on experience in building professional-grade applications.'
    },
    {
      role: 'Engineer',
      company: 'Infosys',
      period: 'Oct 2019 - Sep 2020',
      description: 'Worked as an intern and engineer at Mysore. Collaborated with industry experts and gained hands-on experience with the latest technologies in a global consulting environment.'
    }
  ];

  return (
    <div className="p-6 h-full text-gray-200 font-ubuntu">
      <h1 className="text-3xl font-bold mb-6 text-[#E95420]">Experience</h1>
      <div className="space-y-8 border-l-2 border-gray-700 ml-3 pl-8 relative">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
             <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#E95420] border-4 border-[#333333]"></div>
             <h3 className="text-xl font-bold">{exp.role}</h3>
             <p className="text-[#E95420] font-medium">{exp.company}</p>
             <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
             <p className="text-gray-300 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
