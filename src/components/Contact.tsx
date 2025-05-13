
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
  };

  return (
    <section className="bg-secondary/50 py-20" id="contact">
      <div className="section-container">
        <motion.div 
          className="max-w-xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="heading-md text-primary mb-4">Contact</h2>
          <h3 className="heading-lg mb-6">Get in Touch</h3>
          <p className="text-lg text-foreground/80">
            Interested in collaboration or have a question about my work? 
            Feel free to reach out, and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="bg-white/80 backdrop-blur rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can I help you?" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm uppercase text-foreground/60 font-semibold mb-1">Email</h4>
                <p className="text-lg">hello@mlportfolio.com</p>
              </div>
              
              <div>
                <h4 className="text-sm uppercase text-foreground/60 font-semibold mb-1">Location</h4>
                <p className="text-lg">San Francisco, California</p>
              </div>
              
              <div>
                <h4 className="text-sm uppercase text-foreground/60 font-semibold mb-1">Social</h4>
                <div className="flex space-x-4 mt-2">
                  {['Twitter', 'LinkedIn', 'GitHub', 'Medium'].map((platform, i) => (
                    <motion.a
                      key={platform}
                      href="#"
                      className="px-4 py-2 bg-white rounded-md shadow-sm hover:shadow-md transition-all"
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {platform}
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-8">
                <p className="text-foreground/70">
                  Open to consulting opportunities, speaking engagements, and collaborations on interesting machine learning projects.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
