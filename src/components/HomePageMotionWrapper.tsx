'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HomePageMotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}

export default function HomePageMotionWrapper({
  children,
  className,
  delay = 0,
  amount = 0.18,
}: HomePageMotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
