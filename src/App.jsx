import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import { products } from './data/products';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ProductSection title="Hair" products={products.hair} />
      <ProductSection title="Skin" products={products.skin} />
      <ProductSection title="Body" products={products.body} />
      <footer className="footer">
        <p className="footer-contact">Contact: thsajid831@gmail.com</p>
        <p className="footer-copyright">© 2025 Sajid Shaikh Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;