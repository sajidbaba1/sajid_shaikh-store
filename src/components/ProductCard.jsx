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
      className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 w-48 text-center"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-500 line-through">₹{product.originalPrice}</p>
      <p className="text-lg font-bold text-primary">₹{product.discountedPrice}</p>
      <p className="text-sm text-red-500">Only {product.stock} left!</p>
      <p className="text-sm text-red-500">
        Sale ends: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
      <motion.a
        href={product.affiliateLink}
        whileHover={{ scale: 1.05, backgroundColor: '#F59E0B' }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 block bg-accent text-white py-3 px-6 rounded-lg text-lg font-semibold"
      >
        Buy Now
      </motion.a>
    </motion.div>
  );
};

export default ProductCard;