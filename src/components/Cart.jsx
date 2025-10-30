import React from 'react';
import './Cart.css';

const Cart = ({ cart, onUpdateQuantity, onRemoveItem, onClose }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="cart-overlay">
        <div className="cart-modal">
          <div className="cart-header">
            <h2>Seu Carrinho</h2>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>
          <div className="empty-cart">
            <p>🛒 Seu carrinho está vazio</p>
            <p>Adicione algumas joias incríveis!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <div className="cart-header">
          <h2>Seu Carrinho ({cart.length})</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              
              <div className="cart-item-info">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-category">{item.category}</p>
                <p className="cart-item-price">R$ {item.price.toFixed(2)}</p>
              </div>

              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                
                <button 
                  className="remove-btn"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remover
                </button>
              </div>

              <div className="cart-item-total">
                R$ {(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <strong>Total: R$ {total.toFixed(2)}</strong>
          </div>
          <button className="checkout-btn">
            💎 Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;