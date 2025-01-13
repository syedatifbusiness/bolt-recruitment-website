import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-accent transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;
