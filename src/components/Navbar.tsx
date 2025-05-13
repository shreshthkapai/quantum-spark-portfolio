
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-300 ${
        scrolled ? 'py-3 glass shadow-sm' : 'py-5'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          className="text-xl font-sora font-bold text-foreground"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          ML Engineer
        </motion.div>
        
        <nav>
          <ul className="flex space-x-8">
            {['About', 'Projects', 'Research', 'Contact'].map((item, index) => (
              <motion.li 
                key={item}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  {item}
                  <motion.span 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
