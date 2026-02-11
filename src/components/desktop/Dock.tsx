import React from 'react';
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { User, Briefcase, Code, Mail, Terminal, Github, Linkedin } from 'lucide-react';

interface DockProps {
  onAppClick: (id: string) => void;
}

export default function Dock({ onAppClick }: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      className="fixed bottom-0 left-0 w-full h-[4rem] md:h-full md:w-[4rem] md:left-0 md:top-0 flex flex-row md:flex-col items-center justify-center bg-[#1d1d1d]/80 backdrop-blur-md z-[9990] border-t md:border-t-0 md:border-r border-white/5 py-4 md:py-4 px-4 md:px-0"
      onMouseMove={(e) => mouseX.set(e.pageY)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      <div className="flex flex-row md:flex-col gap-4">
        <DockIcon mouseX={mouseX} icon={<User size={24} />} label="About" onClick={() => onAppClick('about')} />
        <DockIcon mouseX={mouseX} icon={<Briefcase size={24} />} label="Experience" onClick={() => onAppClick('experience')} />
        <DockIcon mouseX={mouseX} icon={<Code size={24} />} label="Projects" onClick={() => onAppClick('projects')} />
        <DockIcon mouseX={mouseX} icon={<Mail size={24} />} label="Contact" onClick={() => onAppClick('contact')} />
        <div className="w-px h-8 md:h-px md:w-8 bg-white/20 mx-2 md:mx-auto md:my-2" />
        <DockIcon mouseX={mouseX} icon={<Github size={24} />} label="GitHub" onClick={() => window.open('https://github.com/princewritecode', '_blank')} />
        <DockIcon mouseX={mouseX} icon={<Linkedin size={24} />} label="LinkedIn" onClick={() => window.open('https://www.linkedin.com/in/princecode/', '_blank')} />
      </div>
    </div>
  );
}

function DockIcon({
  mouseX,
  icon,
  label,
  onClick,
}: {
  mouseX: MotionValue;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className="aspect-square rounded-xl bg-[#333333] border border-white/10 flex items-center justify-center text-white/80 hover:bg-[#E95420] hover:text-white cursor-pointer relative group transition-colors"
      onClick={onClick}
    >
      {icon}
      <span className="absolute left-full ml-4 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
        {label}
      </span>

      <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#E95420] opacity-0 group-hover:opacity-100" />
    </motion.div>
  );
}
