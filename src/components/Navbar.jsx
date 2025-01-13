import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import Logo from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-dark-surface shadow-lg z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Trifecta Talent" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent">Home</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent">About</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent">Contact</Link>
            <ThemeToggle />
            <a
              href="https://your-manatal-portal.com/clients"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary dark:bg-dark-primary dark:hover:bg-dark-secondary"
            >
              Hire Talent
            </a>
            <a
              href="https://your-manatal-portal.com/talent"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary dark:border-dark-accent dark:text-dark-accent dark:hover:bg-dark-accent dark:hover:text-white"
            >
              Find Jobs
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://your-manatal-portal.com/clients"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary dark:bg-dark-primary dark:hover:bg-dark-secondary"
              >
                Hire Talent
              </a>
              <a
                href="https://your-manatal-portal.com/talent"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary dark:border-dark-accent dark:text-dark-accent dark:hover:bg-dark-accent dark:hover:text-white"
              >
                Find Jobs
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
