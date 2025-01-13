import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '500+', label: 'Successful Placements' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '200+', label: 'Partner Companies' },
  { number: '48hrs', label: 'Average Response Time' }
];

const Stats = () => {
  return (
    <section className="section bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
