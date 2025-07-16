import { motion } from 'framer-motion';

const navItems = ['Hair', 'Skin', 'Body'];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-lg shadow-lg z-50 py-4"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-primary tracking-tight">
          Sajid Shaikh Store
        </h1>
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: '#FBBF24' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-lg font-medium text-primary hover:text-accent"
            >
              <a href={`#${item.toLowerCase()}`} className="transition-colors duration-200">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;