import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Trifecta Talent
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your trusted partner in building exceptional teams and advancing careers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-gray-600">
                To bridge the gap between exceptional talent and outstanding opportunities, 
                creating lasting partnerships that drive success for both organizations and 
                professionals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-gray-600">
                To be the most trusted and innovative talent solutions provider, 
                known for our commitment to excellence, integrity, and transformative 
                impact on careers and organizations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for excellence in every interaction and placement.'
              },
              {
                title: 'Integrity',
                description: 'We operate with unwavering honesty and transparency.'
              },
              {
                title: 'Innovation',
                description: 'We embrace new technologies and methods to deliver better results.'
              },
              {
                title: 'Partnership',
                description: 'We build lasting relationships based on trust and mutual success.'
              },
              {
                title: 'Diversity',
                description: 'We champion inclusive workplaces and diverse perspectives.'
              },
              {
                title: 'Results',
                description: 'We measure our success through the success of our clients and candidates.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Anderson',
                title: 'CEO & Founder',
                bio: '15+ years in executive recruitment and talent strategy.'
              },
              {
                name: 'Michael Chen',
                title: 'Head of Client Relations',
                bio: 'Expert in building strategic partnerships and client success.'
              },
              {
                name: 'Emily Rodriguez',
                title: 'Director of Talent Acquisition',
                bio: 'Specialized in identifying and nurturing top industry talent.'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.title}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
