import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './ProductCard.css';

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
      className="product-card"
    >
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-prices">
          <span className="product-original-price">₹{product.originalPrice}</span>
          <span className="product-discounted-price">₹{product.discountedPrice}</span>
        </p>
        <p className="product-stock">Only {product.stock} left!</p>
        <p className="product-timer">
          Sale ends: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </p>
        <motion.a
          href={product.affiliateLink}
          whileHover={{ scale: 1.05, backgroundColor: '#FF0000' }} // Netflix red
          whileTap={{ scale: 0.95 }}
          className="product-button"
        >
          Buy Now
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProductCard;