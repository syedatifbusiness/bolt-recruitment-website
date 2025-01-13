import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import JobCategories from '../components/JobCategories';
import ProcessTimeline from '../components/ProcessTimeline';
import ClientPortal from '../components/ClientPortal';
import TalentPortal from '../components/TalentPortal';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <Services />
      <JobCategories />
      <ProcessTimeline />
      <ClientPortal />
      <TalentPortal />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
