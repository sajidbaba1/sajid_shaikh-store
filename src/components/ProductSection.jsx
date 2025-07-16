import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import './ProductSection.css';

const ProductSection = ({ title, products }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id={title.toLowerCase()}
      className="product-section"
    >
      <div className="container mx-auto px-6">
        <h2 className="section-title">{title}</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProductSection;