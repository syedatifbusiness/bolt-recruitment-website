import React from 'react';

const CTA = () => {
  return (
    <section className="section bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Career or Team?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Whether you're seeking exceptional talent or your next career move, 
          we're here to help you succeed.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://your-manatal-portal.com/clients" 
             className="btn bg-white text-primary hover:bg-gray-100"
             target="_blank"
             rel="noopener noreferrer">
            Start Hiring
          </a>
          <a href="https://your-manatal-portal.com/talent" 
             className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary"
             target="_blank"
             rel="noopener noreferrer">
            Find Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
