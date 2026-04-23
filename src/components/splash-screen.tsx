"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash after 2 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Disable scroll when splash is active
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSplash]);

  return (
    <AnimatePresence mode="wait">
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#0a0a0a]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Logo container with a subtle glow */}
            <div className="relative mb-12">
               <motion.div
                 animate={{ 
                   opacity: [0.4, 1, 0.4],
                   scale: [0.98, 1.02, 0.98]
                 }}
                 transition={{
                   duration: 2,
                   repeat: Infinity,
                   ease: "easeInOut"
                 }}
                 className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"
               />
               <Image
                 src="/logo.png"
                 alt="Glorious Chess Academy"
                 width={200}
                 height={200}
                 className="relative object-contain drop-shadow-2xl"
                 priority
               />
            </div>

            {/* Premium Branding Text */}
            <h2 className="text-white text-2xl font-black tracking-[0.3em] uppercase italic mb-8">
              Glorious <span className="text-primary">Chess</span>
            </h2>

            {/* Loading line - matching branding gold */}
            <div className="w-[180px] h-[3px] bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 w-full h-full bg-primary shadow-[0_0_15px_rgba(184,134,11,0.8)]"
              />
            </div>
            
            <p className="mt-6 text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em]">
              Strategic Excellence
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
