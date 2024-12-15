import React, { useState, useEffect } from 'react';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';
const DarkMode = () => {
  // Set initial theme to 'dark' if not set in localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);
  const element = document.documentElement;
  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }, [theme]);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        const scrollPosition = window.scrollY;
        if (scrollPosition > navbarHeight) {
          setShowFloatingIcon(true);
        } else {
          setShowFloatingIcon(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <>
      {/* DarkMode Toggle inside Navbar */}
      <div onClick={toggleTheme} className='cursor-pointer'>
        {theme === 'light' ? (
          <MdOutlineLightMode className="w-6 h-6 text-gray-800" />
        ) : (
          <MdDarkMode className="w-6 h-6 text-yellow-100" />
        )}
      </div>
    </>
  );
};
export default DarkMode;