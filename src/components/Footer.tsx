
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold">ML Engineer</h3>
            <p className="text-sm text-foreground/60 mt-1">
              AI/ML Solutions for Complex Problems
            </p>
          </motion.div>
          
          <motion.nav 
            className="flex space-x-6 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {['Home', 'About', 'Projects', 'Research', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.nav>
          
          <motion.div 
            className="text-sm text-foreground/60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} ML Engineer. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
