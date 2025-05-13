
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Layers3, Wand } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, index }) => {
  return (
    <motion.div 
      className="flex flex-col portfolio-card overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
    >
      <div className="h-48 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
        {index === 0 && <Brain size={64} className="text-primary" />}
        {index === 1 && <Layers3 size={64} className="text-primary" />}
        {index === 2 && <Wand size={64} className="text-primary" />}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/70 mb-4">{description}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-secondary text-xs font-medium rounded-full text-foreground/70">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Neural Image Classifier",
      description: "A deep learning model trained on millions of images to recognize and classify objects with high accuracy.",
      technologies: ["PyTorch", "Computer Vision", "CNN", "ResNet"]
    },
    {
      title: "NLP Sentiment Analyzer",
      description: "Natural language processing system that analyzes text sentiment for social media monitoring and brand analysis.",
      technologies: ["BERT", "Transformers", "NLP", "Python"]
    },
    {
      title: "Predictive Analytics Platform",
      description: "Machine learning platform that forecasts business metrics using historical data and trend analysis.",
      technologies: ["ML", "Time Series", "Flask", "Dashboard"]
    }
  ];

  return (
    <section className="bg-secondary/50 py-20" id="projects">
      <div className="section-container">
        <motion.div 
          className="max-w-xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="heading-md text-primary mb-4">Projects</h2>
          <h3 className="heading-lg mb-6">Featured Work</h3>
          <p className="text-lg text-foreground/80">
            A selection of machine learning and AI projects that showcase my technical expertise and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <a 
            href="#" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View All Projects
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
