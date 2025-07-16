import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const images = Array.isArray(product.images) ? product.images : [product.image];
  const handleNext = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="product-card"
      whileHover={{ scale: 1.05 }}
    >
      <div className="image-container">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`${product.name} - Image ${currentImageIndex + 1}`}
          className="product-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        {images.length > 1 && (
          <div className="slideshow-controls">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="slideshow-button"
            >
              Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="slideshow-button"
            >
              Forward
            </motion.button>
          </div>
        )}
      </div>
      <div className="product-info">
        <motion.h3
          className="product-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {product.name}
        </motion.h3>
        <motion.p
          className="product-prices"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="product-original-price">₹{product.originalPrice}</span>
          <span className="product-discounted-price">₹{product.discountedPrice}</span>
        </motion.p>
        <motion.p
          className="product-stock"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Only {product.stock} left!
        </motion.p>
        <motion.p
          className="product-timer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Sale ends: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </motion.p>
        <motion.a
          href={product.affiliateLink}
          whileHover={{ scale: 1.1, backgroundColor: '#ff0000' }}
          whileTap={{ scale: 0.95 }}
          className="product-button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Buy Now
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProductCard;