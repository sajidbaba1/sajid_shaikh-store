import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-96 flex items-center justify-center bg-primary"
    >
      <img
        src="/assets/hero-banner.jpg"
        alt="Sajid Shaikh Store Banner"
        className="w-full h-full object-cover"
      />
    </motion.section>
  );
};

export default Hero;