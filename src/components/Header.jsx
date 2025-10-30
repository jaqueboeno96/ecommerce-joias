import React from 'react';
import './Header.css';

const Header = ({ cartItemsCount, onOpenCart }) => {
  return (
    <header className="ecommerce-header">
      <nav className="ecommerce-nav">
        <div className="logo">💎 Joia Rara </div>
        
        <div className="nav-right">
          <button className="cart-button" onClick={onOpenCart}>
            🛒 Carrinho ({cartItemsCount})
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;