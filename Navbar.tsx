import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import ThemeContext from '../contexts/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 shadow-lg backdrop-blur-lg bg-white/70 dark:bg-slate-900/80'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-2xl font-bold text-primary-800 dark:text-primary-400 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
            <path d="M16 0L30 8V24L16 32L2 24V8L16 0Z" className="fill-primary-700 dark:fill-primary-500" />
            <path d="M16 4L26 10V22L16 28L6 22V10L16 4Z" className="fill-secondary-600 dark:fill-secondary-400" />
            <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" className="fill-accent-500 dark:fill-accent-400" />
          </svg>
          <span>Portfolio</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <motion.li key={link.name} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <a
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 font-medium transition-colors"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.button
            onClick={toggleTheme}
            whileHover={{ rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="container mx-auto px-4 py-4 bg-white dark:bg-slate-900 shadow-lg">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileTap={{ x: 10 }}
                className="border-b border-gray-100 dark:border-gray-800 pb-2"
              >
                <a
                  href={link.href}
                  className="block text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;