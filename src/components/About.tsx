
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Layers3, Wand } from 'lucide-react';
import FloatingGrid from './FloatingGrid';

const AboutCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      className="portfolio-card p-6 sm:p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mb-4 text-primary">
        <Icon size={36} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </motion.div>
  );
};

const About = () => {
  const skills = [
    {
      icon: BrainCircuit,
      title: "Deep Learning",
      description: "Expertise in neural networks, transformers, and reinforcement learning for state-of-the-art AI applications."
    },
    {
      icon: Layers3,
      title: "Data Science",
      description: "Strong foundation in statistical analysis, data preprocessing, and visualization for meaningful insights."
    },
    {
      icon: Wand,
      title: "ML Engineering",
      description: "End-to-end machine learning pipelines, from data collection to deployment and monitoring."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden" id="about">
      <div className="relative z-10 section-container">
        <motion.div 
          className="max-w-xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="heading-md text-primary mb-4">About Me</h2>
          <h3 className="heading-lg mb-6">Solving Complex Problems with AI</h3>
          <p className="text-lg text-foreground/80">
            I'm an AI/ML engineer passionate about pushing the boundaries of what's possible with 
            artificial intelligence. With expertise in deep learning and neural networks, I develop 
            solutions that transform data into actionable insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <AboutCard key={index} {...skill} index={index} />
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="heading-md mb-6">My Professional Journey</h3>
            <p className="text-foreground/80 mb-4">
              With a background in computer science and mathematics, I've specialized in machine learning 
              and artificial intelligence, contributing to projects that range from predictive analytics 
              to computer vision systems.
            </p>
            <p className="text-foreground/80 mb-6">
              My research focuses on developing interpretable deep learning models that can be applied 
              to solve real-world challenges in healthcare, finance, and beyond.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP', 'MLOps', 'Data Mining'].map((tag, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative h-[400px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <FloatingGrid className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
