import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Trifecta Talent has been instrumental in helping us build our dream team. Their understanding of our needs and culture is exceptional.",
    author: "Sarah Johnson",
    title: "CEO, Tech Innovations Inc."
  },
  {
    quote: "Working with Trifecta Talent transformed my career. They didn't just find me a job, they found me the perfect opportunity.",
    author: "Michael Chen",
    title: "Senior Developer"
  },
  {
    quote: "Their professional approach and attention to detail sets them apart. They're more than recruiters, they're strategic partners.",
    author: "Emily Rodriguez",
    title: "HR Director, Global Solutions"
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What People Say About Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-primary text-4xl mb-4">"</div>
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
