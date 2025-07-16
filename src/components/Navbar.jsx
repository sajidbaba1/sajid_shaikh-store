import { motion } from 'framer-motion';
import './Navbar.css';

const navItems = ['Hair', 'Skin', 'Body'];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar"
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
        <ul className="navbar-links">
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
      </div>
    </motion.nav>
  );
};

export default Navbar;