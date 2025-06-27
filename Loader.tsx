import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  // Prevent scrolling while loading
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white dark:bg-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="mb-8 relative w-32 h-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              times: [0, 0.2, 0.8, 1],
              ease: "easeInOut"
            }}
          >
            <svg width="128" height="128" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M16 0L30 8V24L16 32L2 24V8L16 0Z" className="fill-primary-700 dark:fill-primary-500" />
            </svg>
          </motion.div>
          
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: 0.15,
              times: [0, 0.2, 0.8, 1],
              ease: "easeInOut"
            }}
          >
            <svg width="128" height="128" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M16 4L26 10V22L16 28L6 22V10L16 4Z" className="fill-secondary-600 dark:fill-secondary-400" />
            </svg>
          </motion.div>
          
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: 0.3,
              times: [0, 0.2, 0.8, 1],
              ease: "easeInOut"
            }}
          >
            <svg width="128" height="128" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" className="fill-accent-500 dark:fill-accent-400" />
            </svg>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="text-2xl font-bold text-primary-800 dark:text-primary-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Loading Portfolio
        </motion.div>
        
        <motion.div
          className="mt-4 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-3 h-3 rounded-full bg-primary-600 dark:bg-primary-400"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1,
                delay: dot * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;