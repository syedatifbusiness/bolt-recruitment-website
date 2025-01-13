import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaChartLine, FaUserTie, FaIndustry, FaHeartbeat, FaGraduationCap } from 'react-icons/fa';

const categories = [
  {
    icon: <FaCode />,
    title: 'Technology',
    description: 'Software development, IT infrastructure, and digital innovation roles.',
    roles: ['Software Engineers', 'DevOps Specialists', 'Data Scientists']
  },
  {
    icon: <FaChartLine />,
    title: 'Finance',
    description: 'Banking, investment, and financial services positions.',
    roles: ['Financial Analysts', 'Investment Bankers', 'Risk Managers']
  },
  {
    icon: <FaUserTie />,
    title: 'Executive',
    description: 'Senior leadership and C-suite executive positions.',
    roles: ['CEOs', 'CFOs', 'COOs']
  },
  {
    icon: <FaIndustry />,
    title: 'Manufacturing',
    description: 'Production, operations, and supply chain roles.',
    roles: ['Operations Managers', 'Supply Chain Directors', 'Quality Engineers']
  },
  {
    icon: <FaHeartbeat />,
    title: 'Healthcare',
    description: 'Medical, pharmaceutical, and healthcare management positions.',
    roles: ['Medical Directors', 'Clinical Managers', 'Healthcare Administrators']
  },
  {
    icon: <FaGraduationCap />,
    title: 'Education',
    description: 'Academic, training, and educational leadership roles.',
    roles: ['Academic Directors', 'Corporate Trainers', 'EdTech Specialists']
  }
];

const JobCategories = () => {
  return (
    <section className="section bg-white dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-dark-text">Our Expertise</h2>
          <p className="text-xl text-secondary dark:text-gray-400">
            Specialized recruitment across key industries and roles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-bg p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary dark:text-dark-accent text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-primary dark:text-dark-text">{category.title}</h3>
              <p className="text-secondary dark:text-gray-400">{category.description}</p>
              <ul className="mt-4 text-sm space-y-2">
                {category.roles.map((role, roleIndex) => (
                  <li key={roleIndex} className="flex items-center text-secondary dark:text-gray-400">
                    <span className="w-2 h-2 bg-primary dark:bg-dark-accent rounded-full mr-2"></span>
                    {role}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
