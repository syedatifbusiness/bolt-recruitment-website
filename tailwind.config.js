export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0F4C81',    // Deep Navy Blue
        secondary: '#34785B',  // Forest Green
        accent: '#8B4513',     // Burgundy Brown
        dark: {
          primary: '#0a3560',  // Darker Navy
          secondary: '#245942', // Darker Forest Green
          accent: '#6b340f',   // Darker Burgundy
          bg: '#121212',       // Dark Background
          surface: '#1e1e1e',  // Dark Surface
          text: '#e0e0e0'      // Light Text
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
