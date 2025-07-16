import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import { products } from './data/products';

function App() {
  return (
    <div className="bg-secondary min-h-screen">
      <Navbar />
      <Hero />
      <ProductSection title="Hair" products={products.hair} />
      <ProductSection title="Skin" products={products.skin} />
      <ProductSection title="Body" products={products.body} />
      <footer className="bg-primary py-8 text-center text-white">
        <p className="text-lg font-medium">Contact: thsajid831@gmail.com</p>
        <p className="text-sm mt-2">© 2025 Sajid Shaikh Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;