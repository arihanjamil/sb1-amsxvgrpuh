import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

export function FloatingElement({ children }: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}