
import React from 'react';
import { motion } from 'framer-motion';
import ParticleField from './ParticleField';

const ResearchCard = ({ title, description, index }) => {
  return (
    <motion.div 
      className="portfolio-card p-6 border-l-4 border-primary"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </motion.div>
  );
};

const Research = () => {
  const papers = [
    {
      title: "Interpretable Neural Networks for Medical Imaging",
      description: "Research on developing transparent and explainable deep learning models for medical image analysis."
    },
    {
      title: "Reinforcement Learning in Autonomous Systems",
      description: "Novel approaches to reinforcement learning that improve decision-making in autonomous vehicles and robots."
    },
    {
      title: "Efficient Transformer Architectures",
      description: "Developing optimized transformer models that reduce computational requirements while maintaining performance."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden" id="research">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <ParticleField className="w-full h-full" />
      </div>

      <div className="relative z-10 section-container">
        <motion.div 
          className="max-w-xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="heading-md text-primary mb-4">Research</h2>
          <h3 className="heading-lg mb-6">Academic Contributions</h3>
          <p className="text-lg text-foreground/80">
            My research focuses on advancing the field of artificial intelligence through novel algorithms and approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {papers.map((paper, index) => (
              <ResearchCard key={index} {...paper} index={index} />
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="heading-md mb-6">Research Impact</h3>
            <p className="text-foreground/80 mb-4">
              My published papers have been cited in leading AI journals and conferences, contributing to the advancement 
              of machine learning techniques across multiple domains.
            </p>
            <p className="text-foreground/80 mb-6">
              By bridging the gap between theoretical research and practical applications, my work aims to 
              make cutting-edge AI more accessible and applicable to real-world challenges.
            </p>
            
            <ul className="space-y-3">
              {[
                '10+ published papers in peer-reviewed journals',
                'Regular contributor to major AI conferences',
                'Open-source implementations of research algorithms'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <motion.a 
              href="#"
              className="mt-8 flex items-center font-medium text-primary"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              View Research Papers
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;
