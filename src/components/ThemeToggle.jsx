import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-16 h-8 rounded-full bg-gradient-to-r from-kuwait-gold to-kuwait-green p-1 shadow-lg"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ x: darkMode ? 32 : 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
      >
        {darkMode ? (
          <div className="relative">
            {/* Moon for dark mode */}
            <Moon className="w-4 h-4 text-gray-800" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-gray-300 rounded-full" />
          </div>
        ) : (
          <div className="relative">
            {/* Kaaba for light mode */}
            <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center">
              <div className="w-3 h-2 bg-kuwait-gold rounded-t-sm" />
            </div>
            <Sun className="absolute -top-2 -right-2 w-3 h-3 text-kuwait-gold" />
          </div>
        )}
      </motion.div>
      
      {/* Background elements */}
      {!darkMode && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-0.5 bg-kuwait-gold/30" />
        </div>
      )}
    </motion.button>
  );
};

export default ThemeToggle;