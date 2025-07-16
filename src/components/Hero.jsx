import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-[400px] flex items-center justify-center bg-primary overflow-hidden"
    >
      <img
        src="/assets/hero-banner.jpg"
        alt="Sajid Shaikh Store Banner"
        className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-xl"
      />
    </motion.section>
  );
};

export default Hero;