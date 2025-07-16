import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

const ProductSection = ({ title, products }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id={title.toLowerCase()}
      className="py-12"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-6">{title}</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <hr className="mt-8 border-primary/30" />
      </div>
    </motion.section>
  );
};

export default ProductSection;
