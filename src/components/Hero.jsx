import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Clock, MapPin, Star, ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Arabic Pattern Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-kuwait-red/10 via-kuwait-green/10 to-kuwait-gold/10" />
        
        {/* Animated Arabic Patterns */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.sin(i) * 50, 0],
              y: [0, Math.cos(i) * 50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-40 h-40 opacity-10"
            style={{
              top: `${10 + i * 10}%`,
              left: `${5 + i * 12}%`,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 Q60 0 70 10 T90 10 T100 30 T90 50 T70 50 T50 60 T30 50 T10 50 T0 30 T10 10 T30 10' fill='%23D4AF37'/%3E%3C/svg%3E")`
            }}
          />
        ))}
        
        {/* Floating Spices Animation */}
        {['🌿', '🍂', '🌶️', '🥘', '🍚'].map((spice, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {spice}
          </motion.div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Rating Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center gap-3 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-full px-6 py-3"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${
                  i < 3 ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'
                }`} />
              ))}
            </div>
            <span className="font-bold text-lg">
              3.3/5 <span className="text-gray-400">({t('hero.reviews')})</span>
            </span>
          </motion.div>
          
          {/* Main Title with Arabic Calligraphy Effect */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-kuwait-gold via-kuwait-red to-kuwait-green bg-clip-text text-transparent arabic-text">
                مطعم تاج
              </span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-kuwait-gold to-kuwait-red mx-auto mb-6" />
            <p className="text-3xl md:text-4xl text-gray-700 dark:text-gray-300 english-text">
              Authentic South Indian Cuisine
            </p>
          </motion.div>
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto arabic-text"
          >
            {t('hero.tagline')}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-kuwait text-lg px-12 py-4"
            >
              {t('hero.viewMenu')}
            </motion.a>
            
            <motion.a
              href="https://wa.me/96590040317"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-whatsapp text-lg px-12 py-4 flex items-center justify-center gap-2"
            >
              <span className="text-2xl">📱</span>
              {t('hero.orderWhatsApp')}
            </motion.a>
          </motion.div>
          
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-12"
          >
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: t('hero.hours'),
                desc: "5:00 AM - 11:55 PM",
                animation: "pulse"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: t('hero.location'),
                desc: "Farwaniya, Block 4",
                animation: "bounce"
              },
              {
                icon: <div className="text-2xl">🚚</div>,
                title: t('hero.delivery'),
                desc: t('hero.freeDelivery'),
                animation: "shake"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                animate={item.animation}
                className="kuwait-card text-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="inline-block p-3 bg-gradient-to-br from-kuwait-gold/20 to-kuwait-red/20 rounded-2xl mb-4"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 arabic-text">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-kuwait-gold" />
      </motion.div>
    </section>
  );
};

export default Hero;