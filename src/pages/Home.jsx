import React from 'react';
import ProductList from '../components/ProductList';
import '../components/Home.css';

const Home = ({ products, onAddToCart }) => {
  return (
    <div className="home-page">
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Bem-vindo à Joia Rara</h1>
          <p>💎 Joias exclusivas com os melhores preços 💎</p>
        </div>
      </section>
      
      <section className="products-section">
        <h2>Nossas Joias</h2>
        <ProductList products={products} onAddToCart={onAddToCart} />
      </section>
    </div>
  );
};

export default Home;