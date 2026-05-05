import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  revealColor?: string;
  width?: 'fit-content' | '100%';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  revealColor = "#1D4ED8",
  width = 'fit-content'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end 80%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // State to track the maximum progress reached to prevent resetting when scrolling up
  const maxProgress = useMotionValue(0);

  useEffect(() => {
    return smoothProgress.onChange((latest) => {
      if (latest > maxProgress.get()) {
        maxProgress.set(latest);
      }
    });
  }, [smoothProgress, maxProgress]);

  // Transform based on the maximum progress reached
  const x = useTransform(maxProgress, [0, 1], ["0%", "150%"]); // Increased to 150% to ensure it's gone
  const opacity = useTransform(maxProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={containerRef} className="relative overflow-hidden" style={{ width }}>
      <motion.div style={{ opacity }}>
        {children}
      </motion.div>
      <motion.div
        style={{ 
          x,
          position: "absolute",
          inset: -2, // More overlap to be safe
          zIndex: 20,
          backgroundColor: revealColor 
        }}
      />
    </div>
  );
};

export default ScrollReveal;
