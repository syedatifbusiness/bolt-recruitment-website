import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../assets/hero-image.svg';

const Hero = () => {
  return (
    <section className="section bg-gradient-to-r from-primary to-secondary text-white dark:from-dark-primary dark:to-dark-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connecting Top Talent with Leading Organizations
            </h1>
            <p className="text-xl mb-8">
              Your success is our mission. We bridge the gap between exceptional talent and 
              outstanding opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://your-manatal-portal.com/clients" 
                 className="btn bg-white text-primary hover:bg-gray-100 dark:bg-dark-surface dark:text-dark-text dark:hover:bg-dark-bg"
                 target="_blank"
                 rel="noopener noreferrer">
                Hire Talent
              </a>
              <a href="https://your-manatal-portal.com/talent" 
                 className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary dark:hover:bg-dark-surface"
                 target="_blank"
                 rel="noopener noreferrer">
                Find Jobs
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <img 
              src={HeroImage}
              alt="Recruiting illustration" 
              className="w-full dark:opacity-90"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
