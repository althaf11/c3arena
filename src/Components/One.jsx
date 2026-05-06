// import React from 'react';
import { motion } from 'framer-motion';

const One = () => {
  return (
    // The container defines the size of your loader. 
    // Adjust w-64 and h-64 to your desired dimensions.
    <div className="relative w-64 h-64 overflow-hidden flex items-center justify-center bg-white rounded-lg">
      
      {/* 1. Background Layer (Hand without the cap) */}
      <img
        src="/assets/logo-bg-clean.jpg" 
        alt="Operation Yuva Sankalp Background"
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* 2. Animated Cap Layer */}
      <motion.img
        src="/assets/isolated-cap.png"
        alt="Graduation Cap"
        // Adjust top and left percentages based on how tightly you cropped the PNG
        // drop-shadow adds that modern, subtle orange glow you requested
        className="absolute top-[18%] left-[28%] w-[45%] drop-shadow-[0_0_12px_rgba(249,115,22,0.6)] z-10"
        
        // Framer Motion Animation Definition
        animate={{
          y: [0, -40, 0],       // Moves up 40px, then back to 0
          rotate: [0, 12, 0],   // Adds a slight 12-degree tilt at the peak
          scale: [1, 1.05, 1],  // Subtle scaling effect for a modern feel
        }}
        transition={{
          duration: 1.8,        // 1.8 seconds per full loop
          ease: "easeInOut",    // Smooth acceleration and deceleration
          repeat: Infinity,     // Loops forever
        }}
      />
      
    </div>
  );
};

export default One;