import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ProductCard = ({ product }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date('2025-07-20') - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/30 backdrop-blur-lg rounded-xl shadow-lg p-4 w-60 text-center flex-shrink-0"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold text-primary">{product.name}</h3>
      <p className="text-sm text-gray-600 line-through">₹{product.originalPrice}</p>
      <p className="text-xl font-bold text-primary">₹{product.discountedPrice}</p>
      <p className="text-sm text-red-600 font-medium">Only {product.stock} left!</p>
      <p className="text-sm text-red-600 font-medium">
        Sale ends: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
      <motion.a
        href={product.affiliateLink}
        whileHover={{ scale: 1.05, backgroundColor: '#F59E0B' }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 block bg-accent text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-200"
      >
        Buy Now
      </motion.a>
    </motion.div>
  );
};

export default ProductCard;