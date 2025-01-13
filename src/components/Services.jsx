import React from 'react';
import { FaUsers, FaSearchDollar, FaHandshake, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaUsers className="text-4xl text-primary dark:text-dark-accent" />,
    title: 'Talent Acquisition',
    description: 'Strategic recruitment solutions tailored to your organization\'s needs.'
  },
  {
    icon: <FaSearchDollar className="text-4xl text-primary dark:text-dark-accent" />,
    title: 'Executive Search',
    description: 'Identifying and securing top-tier leadership talent for critical roles.'
  },
  {
    icon: <FaHandshake className="text-4xl text-primary dark:text-dark-accent" />,
    title: 'Contract Staffing',
    description: 'Flexible staffing solutions for project-based and temporary needs.'
  },
  {
    icon: <FaChartLine className="text-4xl text-primary dark:text-dark-accent" />,
    title: 'Workforce Planning',
    description: 'Strategic guidance for building and scaling your team effectively.'
  }
];

const Services = () => {
  return (
    <section className="section bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-dark-text">Our Services</h2>
          <p className="text-xl text-secondary dark:text-gray-400">
            Comprehensive recruiting solutions for modern businesses
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-dark-bg p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-primary dark:text-dark-text">{service.title}</h3>
              <p className="text-secondary dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
