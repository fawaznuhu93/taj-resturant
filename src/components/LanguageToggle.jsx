import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-kuwait-gold/20 to-kuwait-green/20 border border-kuwait-gold/30"
      aria-label="Toggle language"
    >
      <Globe className="w-5 h-5 text-kuwait-gold" />
      <span className="font-bold text-kuwait-gold">
        {i18n.language === 'en' ? 'EN' : 'العربية'}
      </span>
      
      {/* Animated language indicator */}
      <motion.div
        layout
        className={`absolute w-6 h-6 rounded-full bg-kuwait-gold ${
          i18n.language === 'en' ? 'left-1' : 'right-1'
        }`}
        transition={{ type: 'spring', stiffness: 300 }}
      />
    </motion.button>
  );
};

export default LanguageToggle;