"use client";

import React, { useState } from 'react';
import Taskbar from './Taskbar';
import Dock from './Dock';
import Window from '../os/Window';
import About from '../../apps/About';
import Experience from '../../apps/Experience';
import Projects from '../../apps/Projects';
import Contact from '../../apps/Contact';

interface WindowState {
  id: string;
  title: string;
  component: React.ReactNode;
  isOpen: boolean;
  isMinimised: boolean;
  zIndex: number;
}

export default function Desktop() {
  const [windows, setWindows] = useState<WindowState[]>([
    { id: 'about', title: 'About Prince', component: <About />, isOpen: true, isMinimised: false, zIndex: 1 },
  ]);
  const [activeZIndex, setActiveZIndex] = useState(10);

  const openApp = (appId: string) => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.id === appId);
      if (existing) {
        if (existing.isMinimised) {
          // Restore and focus
          return prev.map((w) =>
            w.id === appId ? { ...w, isMinimised: false, zIndex: activeZIndex + 1 } : w
          );
        }
        // Just focus
        return prev.map((w) =>
          w.id === appId ? { ...w, zIndex: activeZIndex + 1 } : w
        );
      }

      // Open new window
      let component;
      let title;
      switch (appId) {
        case 'about':
          component = <About />;
          title = 'About Prince';
          break;
        case 'experience':
          component = <Experience />;
          title = 'Professional Experience';
          break;
        case 'projects':
          component = <Projects />;
          title = 'My Projects';
          break;
        case 'contact':
          component = <Contact />;
          title = 'Contact Me';
          break;
        default:
          return prev;
      }

      // Check if window object already exists but closed? No, we filter/manage state.
      // Actually simpler: windows list contains ALL possible windows or just OPEN ones?
      // Let's say list contains all active/minimized windows.
      return [
        ...prev,
        { id: appId, title, component, isOpen: true, isMinimised: false, zIndex: activeZIndex + 1 },
      ];
    });
    setActiveZIndex((prev) => prev + 1);
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimised: true } : w))
    );
  };

  const focusWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: activeZIndex + 1 } : w))
    );
    setActiveZIndex((prev) => prev + 1);
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.wallpapersden.com/image/download/ubuntu-19-10_a2tsaGuUmZqaraWkpJRpZW5rrWdoZWk.jpg')" }}
      />
      
      <Taskbar />
      <Dock onAppClick={openApp} />

      <div className="absolute inset-0 pointer-events-none md:ml-[4rem] mt-[1.75rem] mb-[4rem] md:mb-0">
         <div className="relative w-full h-full pointer-events-auto">
            {windows.map((win) => (
              <Window
                key={win.id}
                id={win.id}
                title={win.title}
                isOpen={win.isOpen}
                isMinimised={win.isMinimised}
                onClose={() => closeWindow(win.id)}
                onMinimize={() => minimizeWindow(win.id)}
                onFocus={() => focusWindow(win.id)}
                zIndex={win.zIndex}
              >
                {win.component}
              </Window>
            ))}
         </div>
      </div>
    </div>
  );
}
