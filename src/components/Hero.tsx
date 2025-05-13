
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import NeuralNetwork3D from './NeuralNetwork3D';

const Hero = () => {
  const constraintsRef = useRef(null);
  
  return (
    <div className="relative h-screen flex items-center overflow-hidden" id="home">
      {/* Background Elements */}
      <div className="absolute inset-0 subtle-gradient opacity-40"></div>
      
      {/* 3D Neural Network */}
      <div className="absolute inset-0 z-0 opacity-80">
        <NeuralNetwork3D className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl" ref={constraintsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-xl font-medium text-primary mb-4">
              Machine Learning Engineer
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="heading-xl mb-6">
              Transforming Ideas into Intelligent Systems
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Specializing in deep learning, neural networks, and computer vision to build 
            cutting-edge AI solutions that solve complex problems.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              View Projects
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-6 py-3 border border-primary text-foreground rounded-lg font-medium"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="text-sm text-foreground/60 mb-2">Scroll Down</p>
        <motion.div 
          className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-accent"
          animate={{ 
            y: [0, 12, 0],
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
