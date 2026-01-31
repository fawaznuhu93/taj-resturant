import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const galleryImages = Array(8).fill(null).map((_, i) => ({
    id: i + 1,
    title: `South Indian Dish ${i + 1}`,
    category: ['Food', 'Restaurant', 'Dining'][i % 3]
  }));

  return (
    <section id="gallery" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 arabic-text">معرض الصور</h2>
          <p className="text-gray-600 dark:text-gray-400">Experience our culinary journey</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative h-48 bg-gradient-to-br from-kuwait-gold/20 to-kuwait-red/20 rounded-xl overflow-hidden flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-3xl">📸</div>
                <p className="mt-2 text-sm">Image {i + 1}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;