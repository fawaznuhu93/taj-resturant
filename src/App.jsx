import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('taj-theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('taj-lang') || 'en';
    document.documentElement.lang = savedLang;
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('taj-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('taj-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-kuwait-sand to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-500 overflow-hidden">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
      
      {/* Floating Kuwait Emblem Animation */}
      <div className="fixed bottom-4 right-4 z-40">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-gradient-to-br from-kuwait-green via-kuwait-red to-kuwait-gold rounded-full animate-spin-slow"></div>
          <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-kuwait-gold">ت</span>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/96590040317"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 z-40 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
      >
        <div className="text-3xl">📱</div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
      </a>
    </div>
  );
}

export default App;