import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake, FaRocket, FaChartLine } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaLightbulb />,
    title: 'Career Guidance',
    description: 'Get expert advice on career development and growth opportunities.'
  },
  {
    icon: <FaHandshake />,
    title: 'Perfect Match',
    description: 'Connect with companies that align with your values and goals.'
  },
  {
    icon: <FaRocket />,
    title: 'Fast Placement',
    description: 'Quick and efficient job matching process.'
  },
  {
    icon: <FaChartLine />,
    title: 'Growth Focus',
    description: 'Access roles with clear advancement paths.'
  }
];

const TalentPortal = () => {
  return (
    <section className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            For Job Seekers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Take the next step in your career journey with personalized support
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
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-primary text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
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
              href="https://your-manatal-portal.com/talent"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center"
            >
              Access Talent Portal
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

export default TalentPortal;
