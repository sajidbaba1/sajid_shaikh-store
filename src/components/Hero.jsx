import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hero"
    >
      <img
        src="/assets/hero-banner.jpg"
        alt="Sajid Shaikh Store Banner"
        className="hero-image"
      />
      <div className="hero-overlay">
        <h2 className="hero-title">Welcome to Sajid Shaikh Store</h2>
        <p className="hero-subtitle">Discover the best products for Hair, Skin, and Body</p>
      </div>
    </motion.section>
  );
};

export default Hero;