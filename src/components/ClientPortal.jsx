import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaUsers, FaChartBar, FaClock } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaBuilding />,
    title: 'Access Top Talent',
    description: 'Connect with pre-screened, qualified candidates across industries.'
  },
  {
    icon: <FaUsers />,
    title: 'Dedicated Support',
    description: 'Work with experienced recruiters who understand your industry.'
  },
  {
    icon: <FaChartBar />,
    title: 'Data-Driven Matching',
    description: 'Leverage our advanced algorithms for better candidate matches.'
  },
  {
    icon: <FaClock />,
    title: 'Time-Efficient',
    description: 'Reduce time-to-hire with our streamlined process.'
  }
];

const ClientPortal = () => {
  return (
    <section className="section bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            For Employers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl opacity-90"
          >
            Transform your hiring process with our comprehensive recruiting solutions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="opacity-90">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="https://your-manatal-portal.com/clients"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-primary hover:bg-gray-100 inline-flex items-center"
            >
              Access Employer Portal
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortal;
