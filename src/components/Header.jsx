import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, ShoppingCart, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

const Header = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [debugInfo, setDebugInfo] = useState('');
  const { t } = useTranslation();
  
  const navItems = [
    { label: t('nav.home'), href: '#home', id: 'home' },
    { label: t('nav.menu'), href: '#menu', id: 'menu' },
    { label: t('nav.gallery'), href: '#gallery', id: 'gallery' },
    
    { label: t('nav.contact'), href: '#contact', id: 'contact' },
  ];

  // Debug: Check if sections exist
  const checkSections = () => {
    const missing = [];
    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (!element) missing.push(item.id);
    });
    
    if (missing.length > 0) {
      setDebugInfo(`Missing sections: ${missing.join(', ')}`);
      console.warn('Missing sections:', missing);
    } else {
      setDebugInfo('All sections found ✓');
    }
    
    return missing.length === 0;
  };

  // Handle mobile navigation with scroll
  const handleMobileNavClick = (href, id) => {
    console.log('Clicking:', href, 'ID:', id);
    
    // First close the menu
    setIsOpen(false);
    
    // Wait for menu animation to complete
    setTimeout(() => {
      // Try multiple methods
      const element = document.getElementById(id);
      console.log('Element found:', element);
      
      if (element) {
        // Method 1: Direct scroll
        window.scrollTo({
          top: element.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
        
        // Method 2: Focus (for accessibility)
        element.focus({ preventScroll: true });
        
        // Method 3: Set URL hash
        window.location.hash = href;
      } else {
        console.error(`Section #${id} not found!`);
        setDebugInfo(`Error: #${id} section not found`);
        
        // Fallback: Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 300); // Wait for menu close animation
  };
  
  // Check sections on mount and when menu opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        checkSections();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="relative w-12 h-12"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-kuwait-gold to-kuwait-red rounded-full" />
                <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-kuwait-gold">ت</span>
                </div>
              </motion.div>
              
              <div className="text-right">
                <h1 className="text-2xl font-bold text-kuwait-gold arabic-text">
                  مطعم تاج
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 english-text">
                  TAJ RESTAURANT
                </p>
                <p className="text-xs text-kuwait-green flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {t('header.location')}
                </p>
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-gray-700 dark:text-gray-300 hover:text-kuwait-gold dark:hover:text-kuwait-gold font-medium relative group"
                >
                  <span className="arabic-text">{item.label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-kuwait-gold to-kuwait-red group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              
              {/* Desktop Contact Info */}
              <div className="flex items-center gap-4">
                <motion.a
                  href="tel:+96590040317"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-kuwait-green hover:text-kuwait-red"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-bold">9004 0317</span>
                </motion.a>
                
                <LanguageToggle />
                <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-kuwait flex items-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {t('header.orderNow')}
                </motion.a>
              </div>
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 dark:text-gray-300 p-2"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation - FIXED */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed top-20 left-0 right-0 bg-white dark:bg-gray-900 shadow-2xl mx-4 rounded-xl z-50 border border-kuwait-gold/20"
            >
              <div className="flex flex-col py-4">
                {/* Navigation Items */}
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleMobileNavClick(item.href, item.id)}
                    className="flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-kuwait-gold dark:hover:text-kuwait-gold hover:bg-kuwait-gold/5 py-4 px-6 text-lg font-medium text-left arabic-text transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-kuwait-gold/50">→</span>
                  </motion.button>
                ))}
                
                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-800 my-2" />
                
                {/* Mobile Contact & Actions */}
                <div className="px-6 space-y-4">
                  {/* Phone */}
                  <a
                    href="tel:+96590040317"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-kuwait-green hover:text-kuwait-red text-lg font-bold py-3"
                  >
                    <Phone className="w-5 h-5" />
                    <span>9004 0317</span>
                  </a>
                  
                  {/* Toggles */}
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-600 dark:text-gray-400">Language:</span>
                    <LanguageToggle />
                  </div>
                  
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-600 dark:text-gray-400">Theme:</span>
                    <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                  </div>
                  
                  {/* Order Buttons */}
                  <div className="space-y-3 pt-4">
                    <button
                      onClick={() => handleMobileNavClick('#contact', 'contact')}
                      className="w-full btn-kuwait py-3 text-lg"
                    >
                      <ShoppingCart className="inline-block w-5 h-5 mr-2" />
                      {t('header.orderNow')}
                    </button>
                    
                    <a
                      href="https://wa.me/96590040317"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="block w-full btn-whatsapp py-3 text-lg text-center"
                    >
                      📱 Order via WhatsApp
                    </a>
                  </div>
                </div>
                
                {/* Debug Info (visible in development) */}
                {process.env.NODE_ENV === 'development' && debugInfo && (
                  <div className="mt-4 px-6 py-3 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 text-sm rounded-lg mx-4">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>{debugInfo}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      
      {/* Overlay when menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Header;