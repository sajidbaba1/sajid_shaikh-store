import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div className="product-card" whileHover={{ scale: 1.05 }}>
      <img
        className="product-image"
        src={product.images[0]}
        srcSet={`${product.images[0]} 300w, ${product.images[0].replace('.jpg', '@2x.jpg')} 600w`}
        sizes="(max-width: 640px) 120px, 150px"
        loading="lazy"
        alt={product.name}
      />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <button className="product-button">Buy Now</button>
      </div>
    </motion.div>
  );
};

export default ProductCard;