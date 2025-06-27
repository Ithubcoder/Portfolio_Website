import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 mt-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <motion.a
              href="#home"
              className="text-xl font-bold text-primary-800 dark:text-primary-400 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0L30 8V24L16 32L2 24V8L16 0Z" className="fill-primary-700 dark:fill-primary-500" />
                <path d="M16 4L26 10V22L16 28L6 22V10L16 4Z" className="fill-secondary-600 dark:fill-secondary-400" />
                <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" className="fill-accent-500 dark:fill-accent-400" />
              </svg>
              <span>Portfolio</span>
            </motion.a>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Creating amazing web experiences
            </p>
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent-500 animate-pulse" fill="currentColor" />
            <span>© {currentYear}</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-500">
          <p>
            This site was built with React, Three.js, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;