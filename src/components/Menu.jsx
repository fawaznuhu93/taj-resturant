import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Filter, Search, Star, Clock, Thermometer, ShoppingCart } from 'lucide-react';

const Menu = () => {
  const { t } = useTranslation();
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  
  // Sample menu data for TAJ RESTAURANT
  const menuItems = [
    {
      id: 1,
      name: "Masala Dosa",
      nameAr: "دوسا ماسالا",
      price: "KD 1.500",
      category: "breakfast",
      description: "Crispy rice crepe with spiced potato filling",
      descriptionAr: "فطيرة أرز مقرمشة مع حشوة البطاطس بالبهارات",
      rating: 4.8,
      cookTime: "15 min",
      tags: ["Vegetarian", "Popular"],
      image: "INSERT_DOSA_IMAGE_URL_HERE" // You'll add this
    },
    {
      id: 2,
      name: "Biryani Special",
      nameAr: "برياني خاص",
      price: "KD 2.500",
      category: "lunch",
      description: "Aromatic basmati rice with marinated chicken",
      descriptionAr: "أرز بسمتي عطري مع دجاج متبل",
      rating: 4.9,
      cookTime: "25 min",
      tags: ["Non-Veg", "Chef Special"],
      image: "INSERT_BIRYANI_IMAGE_URL_HERE"
    },
    {
      id: 3,
      name: "Butter Chicken",
      nameAr: "دجاج بالزبدة",
      price: "KD 2.800",
      category: "dinner",
      description: "Tender chicken in rich tomato gravy",
      descriptionAr: "دجاج طري في صلصة طماطم غنية",
      rating: 4.7,
      cookTime: "20 min",
      tags: ["Non-Veg", "Creamy"],
      image: "INSERT_BUTTER_CHICKEN_IMAGE_URL_HERE"
    },
    {
      id: 4,
      name: "Vegetable Thali",
      nameAr: "ثالي نباتي",
      price: "KD 1.800",
      category: "lunch",
      description: "Complete meal with 5 vegetable dishes",
      descriptionAr: "وجبة كاملة مع 5 أطباق نباتية",
      rating: 4.6,
      cookTime: "18 min",
      tags: ["Vegetarian", "Complete Meal"],
      image: "INSERT_THALI_IMAGE_URL_HERE"
    },
    {
      id: 5,
      name: "Chicken Tikka",
      nameAr: "تيكا دجاج",
      price: "KD 2.200",
      category: "appetizer",
      description: "Grilled chicken marinated in spices",
      descriptionAr: "دجاج مشوي متبل بالبهارات",
      rating: 4.8,
      cookTime: "12 min",
      tags: ["Non-Veg", "Grilled"],
      image: "INSERT_TIKKA_IMAGE_URL_HERE"
    },
    {
      id: 6,
      name: "Mango Lassi",
      nameAr: "لاسي مانجو",
      price: "KD 0.800",
      category: "drinks",
      description: "Refreshing yogurt drink with mango",
      descriptionAr: "مشروب زبادي منعش مع المانجو",
      rating: 4.5,
      cookTime: "5 min",
      tags: ["Drink", "Refreshing"],
      image: "INSERT_LASSI_IMAGE_URL_HERE"
    }
  ];

  const categories = ['all', 'breakfast', 'lunch', 'dinner', 'appetizer', 'drinks'];
  
  const filteredItems = menuItems
    .filter(item => category === 'all' || item.category === category)
    .filter(item => 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.nameAr.includes(search)
    );

  return (
    <section id="menu" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-kuwait-gold/20 to-kuwait-red/20 rounded-full text-kuwait-gold font-semibold mb-6 arabic-text">
            OUR MENU
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-kuwait-gold to-kuwait-green bg-clip-text text-transparent arabic-text">
              مطعم تاج قائمة الطعام
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Authentic South Indian flavors crafted with passion
          </p>
        </motion.div>

        {/* Menu Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  category === cat
                    ? 'bg-gradient-to-r from-kuwait-gold to-kuwait-red text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                {cat === 'all' ? 'All Items' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search dishes..."
              className="pl-10 pr-4 py-2 border rounded-full w-full md:w-64"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="kuwait-card group"
            >
              {/* Dish Image Placeholder */}
              <div className="relative h-48 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-kuwait-gold/20 to-kuwait-red/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🍛</div>
                  <p className="text-sm text-gray-600">INSERT IMAGE HERE</p>
                  <p className="text-xs text-gray-500">Replace with actual dish photo</p>
                </div>
                <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full">
                  {item.price}
                </div>
              </div>

              {/* Dish Info */}
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 arabic-text">{item.nameAr}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-bold">{item.rating}</span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">{item.description}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 arabic-text">{item.descriptionAr}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-kuwait-gold/10 text-kuwait-gold rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.cookTime}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 btn-kuwait text-center py-3 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Order
                  </motion.button>
                  <motion.a
                    href="https://wa.me/96590040317"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 btn-whatsapp text-center py-3"
                  >
                    Order Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center">
              <Search className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-3xl font-bold mb-4">No dishes found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Try adjusting your search or filter
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;