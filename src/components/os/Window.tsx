import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Square } from "lucide-react";
import clsx from "clsx";

interface WindowProps {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimised: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  zIndex: number;
  children: React.ReactNode;
}

export default function Window({
  id,
  title,
  isOpen,
  isMinimised,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
  children,
}: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && !isMinimised && (
        <motion.div
          drag={!isMaximized && !isMobile}
          dragMomentum={false}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            x: isMaximized ? 0 : undefined,
            y: isMaximized ? 0 : undefined,
            width: isMaximized || isMobile ? "100%" : "60%",
            height: isMaximized ? "100%" : isMobile ? "calc(100% - 1.75rem - 4rem)" : "70%",
            top: isMaximized ? "0" : isMobile ? "1.75rem" : "10%",
            left: isMaximized || isMobile ? "0" : "20%",
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ zIndex }}
          className={clsx(
            "absolute flex flex-col bg-[#333333] rounded-lg shadow-2xl overflow-hidden border border-gray-700/50",
            isMaximized ? "fixed inset-0 m-0 rounded-none z-[9000]" : isMobile ? "fixed m-0 rounded-none z-[9000]" : ""
          )}
          onClick={onFocus}
        >

          <div
            className="h-8 bg-[#2c001e] flex items-center justify-between px-2 select-none cursor-default shrink-0"
            onDoubleClick={() => setIsMaximized(!isMaximized)}
          >
            <div className="font-ubuntu text-sm font-medium text-white/90 ml-2 truncate">
              {title}
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={onMinimize}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Minimize"
              >
                <Minus size={14} className="text-white" />
              </button>
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors hidden md:block"
                aria-label="Maximize"
              >
                <Square size={12} className="text-white" />
              </button>
              <button
                onClick={onClose}
                className="p-1 hover:bg-[#E95420] rounded-full transition-colors"
                aria-label="Close"
              >
                <X size={14} className="text-white" />
              </button>
            </div>
          </div>


          <div className="flex-1 overflow-auto p-4 bg-[#333333] text-white/90">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
