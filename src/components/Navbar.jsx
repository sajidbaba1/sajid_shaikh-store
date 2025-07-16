import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = ['Hair', 'Skin', 'Body'];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, filter: 'brightness(0.5)' }}
          animate={{ opacity: 1, scale: 1, filter: 'brightness(1.5)' }}
          transition={{ duration: 1, delay: 0.2, repeat: Infinity, repeatType: 'reverse' }}
          className="navbar-logo"
        >
          Sajid Shaikh Store
        </motion.h1>
        <div className="flex items-center">
          <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, color: '#FF0000' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="navbar-link"
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </ul>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white md:hidden focus:outline-none z-50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;