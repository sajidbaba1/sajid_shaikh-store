import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { useRef } from 'react';

const products = [
  { id: 1, name: 'Hair Oil', images: ['/assets/hair1.jpg'], price: '$10' },
  { id: 2, name: 'Face Cream', images: ['/assets/skin1.jpg'], price: '$15' },
  { id: 3, name: 'Body Lotion', images: ['/assets/body1.jpg'], price: '$12' },
  { id: 4, name: 'Hair Mask', images: ['/assets/hair4.jpg'], price: '$8' },
];

const ProductSection = () => {
  const productGridRef = useRef(null);

  const scroll = (direction) => {
    if (productGridRef.current) {
      const scrollAmount = 200; // Adjust based on card width
      productGridRef.current.scrollLeft += direction === 'next' ? scrollAmount : -scrollAmount;
    }
  };

  return (
    <section className="product-section">
      <h2 className="section-title">Featured Products</h2>
      <div className="product-navigation">
        <button onClick={() => scroll('prev')} className="nav-button prev">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="product-grid" ref={productGridRef}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <button onClick={() => scroll('next')} className="nav-button next">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProductSection;