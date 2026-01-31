import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4 arabic-text">مطعم تاج</h3>
        <p className="text-gray-400 mb-6">Farwaniya, Block 4, Street 117, Kuwait</p>
        <p className="text-gray-400">© {new Date().getFullYear()} TAJ RESTAURANT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;