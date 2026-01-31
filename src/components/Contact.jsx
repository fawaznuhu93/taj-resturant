import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formType, setFormType] = useState('delivery'); // 'delivery' or 'reservation'
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // FormSubmit.co integration
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };
  
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-kuwait-gold/20 to-kuwait-green/20 rounded-full text-kuwait-gold font-semibold mb-6 arabic-text">
            {t('contact.title')}
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-kuwait-gold to-kuwait-red bg-clip-text text-transparent arabic-text">
              {t('contact.subtitle')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: t('contact.visit'),
                  details: ["Farwaniya - Block 4", "Street 117, Kuwait"],
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: t('contact.call'),
                  details: ["+965 9004 0317", t('contact.whatsappAvailable')],
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: t('contact.hours'),
                  details: ["5:00 AM - 11:55 PM", t('contact.everyDay')],
                  color: "from-kuwait-gold to-yellow-500"
                },
                {
                  icon: <MessageCircle className="w-6 h-6" />,
                  title: "WhatsApp",
                  details: [t('contact.instantOrder')],
                  color: "from-green-600 to-green-400"
                }
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="kuwait-card"
                >
                  <div className={`inline-flex p-3 bg-gradient-to-r ${info.color} rounded-2xl mb-4`}>
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 arabic-text">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 dark:text-gray-400 mb-1">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>
            
            {/* WhatsApp Direct Button */}
            <motion.a
              href="https://wa.me/96590040317"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full btn-whatsapp text-center text-lg py-4 mb-6"
            >
              📱 {t('contact.orderWhatsApp')}
            </motion.a>
            
            {/* Map */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="kuwait-card p-0 overflow-hidden"
            >
              <div className="h-96 rounded-2xl overflow-hidden">
                <iframe
                  title="TAJ RESTAURANT Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.54323456789!2d47.978396!3d29.375843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIyJzMzLjAiTiA0N8KwNTgnNDIuMiJF!5e0!3m2!1sen!2skw!4v1234567890123!5m2!1sen!2skw"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-2 arabic-text">{t('contact.perfectLocation')}</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('contact.locationDescription')}
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Contact Form */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="kuwait-card"
            >
              {/* Form Type Toggle */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setFormType('delivery')}
                  className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                    formType === 'delivery'
                      ? 'bg-gradient-to-r from-kuwait-red to-kuwait-gold text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  🚚 {t('contact.deliveryOrder')}
                </button>
                <button
                  onClick={() => setFormType('reservation')}
                  className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                    formType === 'reservation'
                      ? 'bg-gradient-to-r from-kuwait-green to-kuwait-gold text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  🪑 {t('contact.tableReservation')}
                </button>
              </div>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 arabic-text">{t('contact.messageSent')}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    {t('contact.responseTime')}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="btn-kuwait"
                  >
                    {t('contact.sendAnother')}
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-3xl font-bold mb-8 arabic-text">
                    {formType === 'delivery' ? t('contact.orderNow') : t('contact.bookTable')}
                  </h3>
                  
                  {/* FORMSUBMIT.CO FORM */}
                  <form 
                    action={`https://formsubmit.co/${formType === 'delivery' ? 'delivery@tajrestaurant.com' : 'reservations@tajrestaurant.com'}`}
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Hidden fields for FormSubmit */}
                    <input type="hidden" name="_subject" value={`New ${formType === 'delivery' ? 'Delivery Order' : 'Table Reservation'} - TAJ RESTAURANT`} />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 arabic-text">
                          {t('contact.fullName')} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-kuwait-gold transition"
                          placeholder={t('contact.namePlaceholder')}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 arabic-text">
                          {t('contact.phone')} *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-kuwait-gold transition"
                          placeholder="+965 9004 0317"
                        />
                      </div>
                    </div>
                    
                    {formType === 'delivery' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 arabic-text">
                          {t('contact.deliveryAddress')} *
                        </label>
                        <textarea
                          name="address"
                          required
                          rows="3"
                          className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-kuwait-gold transition resize-none"
                          placeholder={t('contact.addressPlaceholder')}
                        />
                      </div>
                    )}
                    
                    {formType === 'reservation' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 arabic-text">
                            {t('contact.date')} *
                          </label>
                          <input
                            type="date"
                            name="date"
                            required
                            className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-kuwait-gold transition"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 arabic-text">
                            {t('contact.time')} *
                          </label>
                          <input
                            type="time"
                            name="time"
                            required
                            className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-kuwait-gold transition"
                          />
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 arabic-text">
                        {t('contact.message')} *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-kuwait-gold transition resize-none"
                        placeholder={
                          formType === 'delivery' 
                            ? t('contact.orderPlaceholder')
                            : t('contact.reservationPlaceholder')
                        }
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full btn-kuwait text-lg py-4"
                    >
                      <Send className="inline-block w-5 h-5 mr-2" />
                      {formType === 'delivery' ? t('contact.submitOrder') : t('contact.bookNow')}
                    </motion.button>
                  </form>
                  
                  {/* WhatsApp Alternative */}
                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
                      {t('contact.preferWhatsApp')}
                    </p>
                    <a 
                      href="https://wa.me/96590040317"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full btn-whatsapp text-center"
                    >
                      📱 {t('contact.orderViaWhatsApp')}
                    </a>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;