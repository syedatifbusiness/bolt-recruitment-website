import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaUserCheck, FaHandshake, FaRocket } from 'react-icons/fa';

const steps = [
  {
    icon: <FaSearch />,
    title: 'Discovery',
    description: 'We understand your needs, culture, and requirements in detail.',
    duration: 'Day 1-2'
  },
  {
    icon: <FaUserCheck />,
    title: 'Talent Search',
    description: 'Our experts source and screen the best candidates.',
    duration: 'Day 3-10'
  },
  {
    icon: <FaHandshake />,
    title: 'Interview Process',
    description: 'Coordinate interviews and gather feedback.',
    duration: 'Day 11-20'
  },
  {
    icon: <FaRocket />,
    title: 'Placement',
    description: 'Offer negotiation and successful onboarding.',
    duration: 'Day 21-30'
  }
];

const ProcessTimeline = () => {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recruitment Process</h2>
          <p className="text-xl text-gray-600">
            A streamlined approach to finding your perfect match
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary opacity-20"></div>

          {/* Timeline Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 p-6">
                  <div className={`text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="text-primary text-3xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <span className="text-primary font-medium">{step.duration}</span>
                  </div>
                </div>
                
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
